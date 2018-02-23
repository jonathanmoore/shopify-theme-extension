/*! log.js 0.3.0 */
// https://github.com/adamschwartz/log/
(function(){var n,t,r,e,o,a,c,u,i,f,s,p,l,g,d;window.console&&window.console.log&&(f=function(){var n;return n=[],s(arguments).forEach(function(t){return"string"==typeof t?n=n.concat(g(t)):n.push(t)}),d.apply(window,n)},d=function(){return Function.prototype.apply.call(console.log,console,s(arguments))},s=function(n){return Array.prototype.slice.call(n)},r=[{regex:/\[c\=(?:\"|\')?((?:(?!(?:\"|\')\]).)*)(?:\"|\')?\]((?:(?!\[c\]).)*)\[c\]/,replacer:function(n,t,r){return"%c"+r+"%c"},styles:function(n){return[n[1],""]}}],o=function(n){var t;return t=!1,r.forEach(function(r){return r.regex.test(n)?t=!0:void 0}),t},e=function(n){var t;return t=[],r.forEach(function(r){var e;return e=n.match(r.regex),e?t.push({format:r,match:e}):void 0}),t.sort(function(n,t){return n.match.index-t.match.index})},g=function(n){var t,r,a;for(a=[];o(n);)r=e(n),t=r[0],n=n.replace(t.format.regex,t.format.replacer),a=a.concat(t.format.styles(t.match));return[n].concat(a)},i=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},u=function(){return/OPR/.test(navigator.userAgent)&&/Opera/.test(navigator.vendor)},a=function(){return/Firefox/.test(navigator.userAgent)},c=function(){return/MSIE/.test(navigator.userAgent)},l=function(){var n;return n=navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/),n?537.38<=parseInt(n[1],10)+parseInt(n[2],10)/100:!1},p=function(){var n;return n=navigator.userAgent.match(/OPR\/(\d+)\./),n?15<=parseInt(n[1],10):!1},t=function(){return window.console.firebug||window.console.exception},n=c()||a()&&!t()||u()&&!p()||i()&&!l()?d:f,n.l=d,"function"==typeof define&&define.amd?define(function(){return n}):"undefined"!=typeof exports?module.exports=n:window.log=n)}).call(this);

if (typeof Shopify != 'undefined') {
  var defaultStyle = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; color: #444; padding: 18px 40px; line-height: 50px;'
  var warnStyle = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; color: #444; background: #eee; padding: 18px 40px; line-height: 50px; border-radius: 10px;'

  log('%c ⚡️ Shopify Store - https://' + Shopify.shop, defaultStyle);

  if( Shopify.theme.theme_store_id == null ){
    log('%c ⚠️ Possibly invalid theme: ' + Shopify.theme.name, warnStyle);
  } else {
    log('%c ✅ Valid theme: ' + Shopify.theme.name + ' | ' + Shopify.theme.theme_store_id, defaultStyle);
  }

  /*
   * A quick link to request admin access to the shop
   * - Add in the correct partner ID and uncomment line
  */
  var partnerID;
  if(partnerID !== undefined){
    log('%c 👉 https://partners.shopify.com/' + partnerID + '/managed_stores/new?shop_permanent_domain=' + Shopify.shop, defaultStyle);
  }

} 