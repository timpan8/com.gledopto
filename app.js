'use strict';

const Homey = require('homey');
const Log = require('homey-log').Log;

class GledoptoZigBeeApp extends Homey.App {
	onInit() {
		this.log('init GledoptoZigBeeApp');
	}
}

module.exports = GledoptoZigBeeApp;
