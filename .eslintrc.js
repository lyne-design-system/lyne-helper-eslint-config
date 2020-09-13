const config = require('./index');

config.globals = {
  __dirname: 'readonly',
  module: 'readonly',
  require: 'readonly'
};

config.plugins = ['yaml'];

module.exports = config;
