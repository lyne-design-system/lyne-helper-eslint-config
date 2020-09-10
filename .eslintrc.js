const config = require('./index');

config.globals = {
  module: 'readonly',
  require: 'readonly'
};

config.plugins = ['yaml'];

module.exports = config;
