// SpringFoxConfig.js
const EngineService = require('./EngineService'); // Assuming EngineService is in the same directory

class SpringFoxConfig {
    engineService() {
        return new EngineService(); // rtest
    }
}

module.exports = new SpringFoxConfig();
