/**
 * practicalplants.org definitions that are shared between client and server.
 *
 * @namespace practicalplants
 * @memberof shared
 */

module.exports = {
  PP_BOOLEAN_VALUES: ['false', 'true'],
  PP_HARDINESS_ZONE_VALUES: 12,
  PP_SOIL_TEXTURE_VALUES: ['sandy', 'loamy', 'clay', 'heavy clay'],
  PP_SOIL_PH_VALUES: [
    'very acid',
    'acid',
    'neutral',
    'alkaline',
    'very alkaline'
  ],
  PP_SOIL_WATER_RETENTION_VALUES: ['well drained', 'moist', 'wet'],
  PP_SHADE_VALUES: [
    'no shade',
    'light shade',
    'partial shade',
    'permanent shade',
    'permanent deep shade'
  ],
  PP_SUN_VALUES: ['indirect sun', 'partial sun', 'full sun'],
  PP_WATER_VALUES: ['low', 'moderate', 'high', 'aquatic'],
  PP_DROUGHT_VALUES: ['dependent', 'tolerant', 'intolerant'],
  PP_ECOSYSTEM_NICHE_VALUES: [
    'canopy',
    'climber',
    'secondary canopy',
    'soil surface',
    'shrub',
    'herbaceous',
    'rhizosphere'
  ],
  PP_LIFE_CYCLE_VALUES: ['perennial', 'annual', 'biennial'],
  PP_HERBACEOUS_OR_WOODY_VALUES: ['herbaceous', 'woody'],
  PP_DECIDUOUS_OR_EVERGREEN_VALUES: ['deciduous', 'evergreen'],
  PP_GROWTH_RATE_VALUES: ['slow', 'moderate', 'vigorous'],
  PP_MATURE_MEASUREMENT_UNIT_VALUES: ['meters', 'feet'],
  PP_MATURE_HEIGHT_VALUES: 110,
  PP_MATURE_WIDTH_VALUES: 30,
  PP_FLOWER_TYPE_VALUES: ['hermaphrodite', 'monoecious', 'dioecious'],
  PP_POLLINATORS_VALUES: [
    'insects',
    'wind',
    'bees',
    'flies',
    'self',
    'beetles',
    'lepidoptera',
    'bats',
    'moths',
    'birds',
    'apomictic',
    'slugs',
    'snails',
    'hoverflies',
    'cleistogamous',
    'wasps',
    'water',
    'midges',
    'diptera',
    'butterflies',
    'apomixy',
    'bumblebees',
    'wind-blown sand',
    'sunbirds',
    'carrion flies',
    'hand',
    'dryoptera',
    'hymenoptera'
  ],
  PP_FUNCTIONS_VALUES: [
    'nitrogen fixer',
    'ground cover',
    'hedge',
    'windbreak',
    'pioneer',
    'earth stabiliser',
    'green manure',
    'repellant',
    'soil builder',
    'rootstock',
    'biogenic decalcifier',
    'phytoremediation',
    'bee attractor',
    'soil conditioner',
    'pest repellent'
  ],
  PP_GROW_FROM_VALUES: [
    'seed',
    'cutting',
    'layering',
    'tuber',
    'suckers',
    'graft',
    'bulb'
  ],
  PP_CUTTING_TYPE_VALUES: ['semi-ripe', 'soft wood', 'root', 'hard wood'],
  PP_FERTILITY_VALUES: ['self fertile', 'self sterile'],
  PP_ROOT_ZONE_VALUES: ['shallow', 'deep', 'surface']
};