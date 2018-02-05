(function () {
/**
 * Install plugin
 * @param Vue
 * @param frisbee
 */

	const plugin = (Vue, frisbee) => {
		if (plugin.installed) {
			return;
		}
		plugin.installed = true;

		if (!frisbee) {
			console.error('You have to install frisbee');
			return;
		}

		Vue.frisbee = frisbee;

		Object.defineProperties(Vue.prototype, {
			frisbee: {
				get() {
					return frisbee;
				}
			},
			$http: {
				get() {
					return frisbee;
				}
			}
		});
	};

	if (typeof exports === 'object') {
		module.exports = plugin;
	} else if (typeof define === 'function' && define.amd) {
		define([], () => {
			return plugin;
		});
	} else if (window.Vue && window.frisbee) {
		Vue.use(plugin, window.frisbee);
	}
})();
