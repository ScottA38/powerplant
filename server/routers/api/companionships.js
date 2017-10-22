import express from 'express';
import Companionship from '/server/models/companionship';
import Organism from '/server/models/organism';
import { idValidator, getCompanionshipScores } from '/server/middleware/data-validation';
import { getDocuments, doGet, doPut, doDelete } from '/server/middleware';
import { scheduler } from '/server';
import { ReadWriteTask } from 'async-task-schedulers';

const router = express.Router();

// All routes have the base route: /companionships

router.route('/')
	.get((req, res) => {
		const asyncFunction = async function(req, res) {
			let result;
			try {
				// get all combinations - this is REALLY slow (over 2s) but it's also a huge request
				// could consider pagination - return 50 results and a link to the next 50
				result = await Companionship.find({}).exec();
			} catch (exception) {
			}
			
			res.json(result);
		};
		scheduler.push(new ReadWriteTask(asyncFunction, [req, res], false));
	}).post((req, res, next) => {
		const asyncFunction = async function(req, res, next) {
			let cropIds = [req.body.crop1, req.body.crop2];
			if (!idValidator(cropIds, next)) {
				return;
			}
			
			let crops;
			try {
				crops = await getDocuments(Organism, cropIds, '', next);
			} catch(exception) {
				return next({ status: 404, message: 'Document was not found' });
			}
			
			let companionships;
			try {
				companionships = await Companionship.find().byCrop(cropIds).exec();
			} catch (exception) {
				return next({ status: 500, message: 'Error' });
			}
			
			if (companionships.length > 0) {
				return res.status(303).location('/api/companionships/' + companionships[0]).json();
			}
			
			let companionship;
			try {
				companionship = await new Companionship(req.body).save();
			} catch (exception) {
				return next({ status: 400, message: 'Error' });
			}
			
			res.location('/api/companionships/' + companionship._id);
			res.status(201).json(companionship);
		};
		scheduler.push(new ReadWriteTask(asyncFunction, [req, res, next], true));
	});

router.route('/scores')
	.get((req, res, next) => {
		const asyncFunction = async function(req, res, next) {
			let ids = (req.query.id || '').split(',');
			if (!idValidator(ids, next)) {
				return;
			}
			
			try {
				await getDocuments(Organism, ids, '', next);
			} catch(exception) {
				return next({ status: 404, message: 'Document was not found' });
			}
			
			let companionships = [];
			for (let index = 0; index < ids.length; index++) {
				const id = ids[index];
				try {
					const cropCompanionships = await Companionship.find().byCrop(id).exec();
					companionships.push(cropCompanionships);
				} catch (exception) {
				}
			}
			
			let scores = getCompanionshipScores(companionships, ids);
			res.json(scores);
		};
		scheduler.push(new ReadWriteTask(asyncFunction, [req, res, next], false));
	});

router.route('/:id')
	.get((req, res, next) => {
		scheduler.push(new ReadWriteTask(doGet, [req, res, next, Companionship, req.params.id], false));
	}).put((req, res, next) => {
		scheduler.push(new ReadWriteTask(doPut, [req, res, next, Companionship, req.params.id], true));
	}).delete((req, res, next) => {
		scheduler.push(new ReadWriteTask(doDelete, [req, res, next, Companionship, req.params.id], true));
	});

export default router;
