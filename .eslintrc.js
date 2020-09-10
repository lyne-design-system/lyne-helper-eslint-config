const config = require('./index');

config.globals = {
  module: 'readonly',
  require: 'readonly'
};

module.exports = config;
