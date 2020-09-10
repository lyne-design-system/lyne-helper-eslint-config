const baseConfig = require('./index');

baseConfig.globals = {
  module: 'readonly',
  require: 'readonly'
};

module.exports = baseConfig;
