var health = require('../Models/health');

var HealthService = {};

HealthService.getHealth = function () {
    return health;
};

module.exports = HealthService;