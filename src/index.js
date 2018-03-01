(function () {
/**
 * Install plugin
 * @param Vue
 * @param Frisbee
 * @param opts
 */

 const plugin = (Vue, Frisbee, opts = {}) => {
   if (plugin.installed) {
     return;
   }
   plugin.installed = true;

   if (!Frisbee) {
     console.error('You have to install Frisbee');
     return;
   }

   // Only apply auto base if in browser
   if (window) {
     if (!opts.baseURI || opts.baseURI.trim() === '') {
       const base = document.getElementsByTagName('base')[0].getAttribute('href');
       opts.baseURI = base || window.location.href;
     }
   }

   Vue.Frisbee = new Frisbee(opts);
   Vue.$http = new Frisbee(opts);
 };

 if (typeof exports === 'object') {
   module.exports = plugin;
 } else if (typeof define === 'function' && define.amd) {
   define([], () => {
     return plugin;
   });
 } else if (window.Vue && window.Frisbee) {
   Vue.use(plugin, window.Frisbee);
 }
})();
