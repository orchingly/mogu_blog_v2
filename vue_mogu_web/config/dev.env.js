'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  VUE_MOGU_WEB: '"http://dailys.top:8880"',
  PICTURE_API: '"https://dailys.top:8888/mogu-picture"',
	WEB_API: '"https://dailys.top:8888/mogu-web"',
  SEARCH_API: '"https://dailys.top:8888/mogu-search"',

})
