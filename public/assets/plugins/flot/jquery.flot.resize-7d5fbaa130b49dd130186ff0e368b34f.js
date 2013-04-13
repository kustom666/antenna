/* Inline dependency: 
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(t,e,i){function n(){h=e[o](function(){r.each(function(){var e=t(this),i=e.width(),n=e.height(),h=t.data(this,u);(i!==h.w||n!==h.h)&&e.trigger(s,[h.w=i,h.h=n])}),n()},a[d])}var h,r=t([]),a=t.resize=t.extend(t.resize,{}),o="setTimeout",s="resize",u=s+"-special-event",d="delay",c="throttleWindow";a[d]=250,a[c]=!0,t.event.special[s]={setup:function(){if(!a[c]&&this[o])return!1;var e=t(this);r=r.add(e),t.data(this,u,{w:e.width(),h:e.height()}),1===r.length&&n()},teardown:function(){if(!a[c]&&this[o])return!1;var e=t(this);r=r.not(e),e.removeData(u),r.length||clearTimeout(h)},add:function(e){function n(e,n,r){var a=t(this),o=t.data(this,u);o.w=n!==i?n:a.width(),o.h=r!==i?r:a.height(),h.apply(this,arguments)}if(!a[c]&&this[o])return!1;var h;return t.isFunction(e)?(h=e,n):(h=e.handler,e.handler=n,void 0)}}})(jQuery,this),function(t){function e(e){function n(e){function n(){var n=e.getPlaceholder();0!=n.width()&&0!=n.height()&&(++i,t.plot(n,e.getData(),e.getOptions()),--i)}i||e.getPlaceholder().resize(n)}e.hooks.bindEvents.push(n)}var i=0,n={};t.plot.plugins.push({init:e,options:n,name:"resize",version:"1.0"})}(jQuery);