(function(t){t.color={},t.color.make=function(i,e,n,o){var a={};return a.r=i||0,a.g=e||0,a.b=n||0,a.a=null!=o?o:1,a.add=function(t,i){for(var e=0;t.length>e;++e)a[t.charAt(e)]+=i;return a.normalize()},a.scale=function(t,i){for(var e=0;t.length>e;++e)a[t.charAt(e)]*=i;return a.normalize()},a.toString=function(){return a.a>=1?"rgb("+[a.r,a.g,a.b].join(",")+")":"rgba("+[a.r,a.g,a.b,a.a].join(",")+")"},a.normalize=function(){function t(t,i,e){return t>i?t:i>e?e:i}return a.r=t(0,parseInt(a.r),255),a.g=t(0,parseInt(a.g),255),a.b=t(0,parseInt(a.b),255),a.a=t(0,a.a,1),a},a.clone=function(){return t.color.make(a.r,a.b,a.g,a.a)},a.normalize()},t.color.extract=function(i,e){var n;do{if(n=i.css(e).toLowerCase(),""!=n&&"transparent"!=n)break;i=i.parent()}while(!t.nodeName(i.get(0),"body"));return"rgba(0, 0, 0, 0)"==n&&(n="transparent"),t.color.parse(n)},t.color.parse=function(e){var n,o=t.color.make;if(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))return o(parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10));if(n=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e))return o(parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10),parseFloat(n[4]));if(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e))return o(2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3]));if(n=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e))return o(2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3]),parseFloat(n[4]));if(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))return o(parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16));if(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))return o(parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16));var a=t.trim(e).toLowerCase();return"transparent"==a?o(255,255,255,0):(n=i[a]||[0,0,0],o(n[0],n[1],n[2]))};var i={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery),function(t){function e(e,o,a,r){function l(t,i){i=[ki].concat(i);for(var e=0;t.length>e;++e)t[e].apply(this,i)}function s(){for(var i=0;r.length>i;++i){var e=r[i];e.init(ki),e.options&&t.extend(!0,ri,e.options)}}function c(i){var e;for(t.extend(!0,ri,i),null==ri.xaxis.color&&(ri.xaxis.color=ri.grid.color),null==ri.yaxis.color&&(ri.yaxis.color=ri.grid.color),null==ri.xaxis.tickColor&&(ri.xaxis.tickColor=ri.grid.tickColor),null==ri.yaxis.tickColor&&(ri.yaxis.tickColor=ri.grid.tickColor),null==ri.grid.borderColor&&(ri.grid.borderColor=ri.grid.color),null==ri.grid.tickColor&&(ri.grid.tickColor=t.color.parse(ri.grid.color).scale("a",.22).toString()),e=0;Math.max(1,ri.xaxes.length)>e;++e)ri.xaxes[e]=t.extend(!0,{},ri.xaxis,ri.xaxes[e]);for(e=0;Math.max(1,ri.yaxes.length)>e;++e)ri.yaxes[e]=t.extend(!0,{},ri.yaxis,ri.yaxes[e]);for(ri.xaxis.noTicks&&null==ri.xaxis.ticks&&(ri.xaxis.ticks=ri.xaxis.noTicks),ri.yaxis.noTicks&&null==ri.yaxis.ticks&&(ri.yaxis.ticks=ri.yaxis.noTicks),ri.x2axis&&(ri.xaxes[1]=t.extend(!0,{},ri.xaxis,ri.x2axis),ri.xaxes[1].position="top"),ri.y2axis&&(ri.yaxes[1]=t.extend(!0,{},ri.yaxis,ri.y2axis),ri.yaxes[1].position="right"),ri.grid.coloredAreas&&(ri.grid.markings=ri.grid.coloredAreas),ri.grid.coloredAreasColor&&(ri.grid.markingsColor=ri.grid.coloredAreasColor),ri.lines&&t.extend(!0,ri.series.lines,ri.lines),ri.points&&t.extend(!0,ri.series.points,ri.points),ri.bars&&t.extend(!0,ri.series.bars,ri.bars),null!=ri.shadowSize&&(ri.series.shadowSize=ri.shadowSize),e=0;ri.xaxes.length>e;++e)x(hi,e+1).options=ri.xaxes[e];for(e=0;ri.yaxes.length>e;++e)x(di,e+1).options=ri.yaxes[e];for(var n in bi)ri.hooks[n]&&ri.hooks[n].length&&(bi[n]=bi[n].concat(ri.hooks[n]));l(bi.processOptions,[ri])}function u(t){ai=f(t),g(),v()}function f(i){for(var e=[],n=0;i.length>n;++n){var o=t.extend(!0,{},ri.series);null!=i[n].data?(o.data=i[n].data,delete i[n].data,t.extend(!0,o,i[n]),i[n].data=o.data):o.data=i[n],e.push(o)}return e}function h(t,i){var e=t[i+"axis"];return"object"==typeof e&&(e=e.n),"number"!=typeof e&&(e=1),e}function d(){return t.grep(hi.concat(di),function(t){return t})}function m(t){var i,e,n={};for(i=0;hi.length>i;++i)e=hi[i],e&&e.used&&(n["x"+e.n]=e.c2p(t.left));for(i=0;di.length>i;++i)e=di[i],e&&e.used&&(n["y"+e.n]=e.c2p(t.top));return void 0!==n.x1&&(n.x=n.x1),void 0!==n.y1&&(n.y=n.y1),n}function p(t){var i,e,n,o={};for(i=0;hi.length>i;++i)if(e=hi[i],e&&e.used&&(n="x"+e.n,null==t[n]&&1==e.n&&(n="x"),null!=t[n])){o.left=e.p2c(t[n]);break}for(i=0;di.length>i;++i)if(e=di[i],e&&e.used&&(n="y"+e.n,null==t[n]&&1==e.n&&(n="y"),null!=t[n])){o.top=e.p2c(t[n]);break}return o}function x(i,e){return i[e-1]||(i[e-1]={n:e,direction:i==hi?"x":"y",options:t.extend(!0,{},i==hi?ri.xaxis:ri.yaxis)}),i[e-1]}function g(){var i,e=ai.length,n=[],o=[];for(i=0;ai.length>i;++i){var a=ai[i].color;null!=a&&(--e,"number"==typeof a?o.push(a):n.push(t.color.parse(ai[i].color)))}for(i=0;o.length>i;++i)e=Math.max(e,o[i]+1);var r=[],l=0;for(i=0;e>r.length;){var s;s=ri.colors.length==i?t.color.make(100,100,100):t.color.parse(ri.colors[i]);var c=1==l%2?-1:1;s.scale("rgb",1+.2*c*Math.ceil(l/2)),r.push(s),++i,i>=ri.colors.length&&(i=0,++l)}var u,f=0;for(i=0;ai.length>i;++i){if(u=ai[i],null==u.color?(u.color=r[f].toString(),++f):"number"==typeof u.color&&(u.color=r[u.color].toString()),null==u.lines.show){var d,m=!0;for(d in u)if(u[d]&&u[d].show){m=!1;break}m&&(u.lines.show=!0)}u.xaxis=x(hi,h(u,"x")),u.yaxis=x(di,h(u,"y"))}}function v(){function i(t,i,e){t.datamin>i&&i!=-x&&(t.datamin=i),e>t.datamax&&e!=x&&(t.datamax=e)}var e,n,o,a,r,s,c,u,f,h,m=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY,x=Number.MAX_VALUE;for(t.each(d(),function(t,i){i.datamin=m,i.datamax=p,i.used=!1}),e=0;ai.length>e;++e)r=ai[e],r.datapoints={points:[]},l(bi.processRawData,[r,r.data,r.datapoints]);for(e=0;ai.length>e;++e){r=ai[e];var g=r.data,v=r.datapoints.format;if(v||(v=[],v.push({x:!0,number:!0,required:!0}),v.push({y:!0,number:!0,required:!0}),(r.bars.show||r.lines.show&&r.lines.fill)&&(v.push({y:!0,number:!0,required:!1,defaultValue:0}),r.bars.horizontal&&(delete v[v.length-1].y,v[v.length-1].x=!0)),r.datapoints.format=v),null==r.datapoints.pointsize)for(r.datapoints.pointsize=v.length,c=r.datapoints.pointsize,s=r.datapoints.points,insertSteps=r.lines.show&&r.lines.steps,r.xaxis.used=r.yaxis.used=!0,n=o=0;g.length>n;++n,o+=c){h=g[n];var b=null==h;if(!b)for(a=0;c>a;++a)u=h[a],f=v[a],f&&(f.number&&null!=u&&(u=+u,isNaN(u)?u=null:1/0==u?u=x:u==-1/0&&(u=-x)),null==u&&(f.required&&(b=!0),null!=f.defaultValue&&(u=f.defaultValue))),s[o+a]=u;if(b)for(a=0;c>a;++a)u=s[o+a],null!=u&&(f=v[a],f.x&&i(r.xaxis,u,u),f.y&&i(r.yaxis,u,u)),s[o+a]=null;else if(insertSteps&&o>0&&null!=s[o-c]&&s[o-c]!=s[o]&&s[o-c+1]!=s[o+1]){for(a=0;c>a;++a)s[o+c+a]=s[o+a];s[o+1]=s[o-c+1],o+=c}}}for(e=0;ai.length>e;++e)r=ai[e],l(bi.processDatapoints,[r,r.datapoints]);for(e=0;ai.length>e;++e){r=ai[e],s=r.datapoints.points,c=r.datapoints.pointsize;var k=m,y=m,T=p,w=p;for(n=0;s.length>n;n+=c)if(null!=s[n])for(a=0;c>a;++a)u=s[n+a],f=v[a],f&&u!=x&&u!=-x&&(f.x&&(k>u&&(k=u),u>T&&(T=u)),f.y&&(y>u&&(y=u),u>w&&(w=u)));if(r.bars.show){var M="left"==r.bars.align?0:-r.bars.barWidth/2;r.bars.horizontal?(y+=M,w+=M+r.bars.barWidth):(k+=M,T+=M+r.bars.barWidth)}i(r.xaxis,k,T),i(r.yaxis,y,w)}t.each(d(),function(t,i){i.datamin==m&&(i.datamin=null),i.datamax==p&&(i.datamax=null)})}function b(i,n){var o=document.createElement("canvas");return o.className=n,o.width=pi,o.height=xi,i||t(o).css({position:"absolute",left:0,top:0}),t(o).appendTo(e),o.getContext||(o=window.G_vmlCanvasManager.initElement(o)),o.getContext("2d").save(),o}function k(){if(pi=e.width(),xi=e.height(),0>=pi||0>=xi)throw"Invalid dimensions for plot, width = "+pi+", height = "+xi}function y(t){t.width!=pi&&(t.width=pi),t.height!=xi&&(t.height=xi);var i=t.getContext("2d");i.restore(),i.save()}function T(){var i,n=e.children("canvas.base"),o=e.children("canvas.overlay");0==n.length||0==o?(e.html(""),e.css({padding:0}),"static"==e.css("position")&&e.css("position","relative"),k(),li=b(!0,"base"),si=b(!1,"overlay"),i=!1):(li=n.get(0),si=o.get(0),i=!0),ui=li.getContext("2d"),fi=si.getContext("2d"),ci=t([si,li]),i&&(e.data("plot").shutdown(),ki.resize(),fi.clearRect(0,0,pi,xi),ci.unbind(),e.children().not([li,si]).remove()),e.data("plot",ki)}function w(){ri.grid.hoverable&&(ci.mousemove(G),ci.mouseleave(_)),ri.grid.clickable&&ci.click(J),l(bi.bindEvents,[ci])}function M(){Ti&&clearTimeout(Ti),ci.unbind("mousemove",G),ci.unbind("mouseleave",_),ci.unbind("click",J),l(bi.shutdown,[ci])}function C(t){function i(t){return t}var e,n,o=t.options.transform||i,a=t.options.inverseTransform;"x"==t.direction?(e=t.scale=gi/Math.abs(o(t.max)-o(t.min)),n=Math.min(o(t.max),o(t.min))):(e=t.scale=vi/Math.abs(o(t.max)-o(t.min)),e=-e,n=Math.max(o(t.max),o(t.min))),t.p2c=o==i?function(t){return(t-n)*e}:function(t){return(o(t)-n)*e},t.c2p=a?function(t){return a(n+t/e)}:function(t){return n+t/e}}function S(i){function n(n,o){return t('<div style="position:absolute;top:-10000px;'+o+'font-size:smaller">'+'<div class="'+i.direction+"Axis "+i.direction+i.n+'Axis">'+n.join("")+"</div></div>").appendTo(e)}var o,a,r,l=i.options,s=i.ticks||[],c=[],u=l.labelWidth,f=l.labelHeight;if("x"==i.direction){if(null==u&&(u=Math.floor(pi/(s.length>0?s.length:1))),null==f){for(c=[],o=0;s.length>o;++o)a=s[o].label,a&&c.push('<div class="tickLabel" style="float:left;width:'+u+'px">'+a+"</div>");c.length>0&&(c.push('<div style="clear:left"></div>'),r=n(c,"width:10000px;"),f=r.height(),r.remove())}}else if(null==u||null==f){for(o=0;s.length>o;++o)a=s[o].label,a&&c.push('<div class="tickLabel">'+a+"</div>");c.length>0&&(r=n(c,""),null==u&&(u=r.children().width()),null==f&&(f=r.find("div.tickLabel").height()),r.remove())}null==u&&(u=0),null==f&&(f=0),i.labelWidth=u,i.labelHeight=f}function z(i){var e=i.labelWidth,n=i.labelHeight,o=i.options.position,a=i.options.tickLength,r=ri.grid.axisMargin,l=ri.grid.labelMargin,s="x"==i.direction?hi:di,c=t.grep(s,function(t){return t&&t.options.position==o&&t.reserveSpace});t.inArray(i,c)==c.length-1&&(r=0),null==a&&(a="full");var u=t.grep(s,function(t){return t&&t.reserveSpace}),f=0==t.inArray(i,u);f||"full"!=a||(a=5),isNaN(+a)||(l+=+a),"x"==i.direction?(n+=l,"bottom"==o?(mi.bottom+=n+r,i.box={top:xi-mi.bottom,height:n}):(i.box={top:mi.top+r,height:n},mi.top+=n+r)):(e+=l,"left"==o?(i.box={left:mi.left+r,width:e},mi.left+=e+r):(mi.right+=e+r,i.box={left:pi-mi.right,width:e})),i.position=o,i.tickLength=a,i.box.padding=l,i.innermost=f}function W(t){"x"==t.direction?(t.box.left=mi.left,t.box.width=gi):(t.box.top=mi.top,t.box.height=vi)}function A(){var i,e=d();if(t.each(e,function(t,i){i.show=i.options.show,null==i.show&&(i.show=i.used),i.reserveSpace=i.show||i.options.reserveSpace,I(i)}),allocatedAxes=t.grep(e,function(t){return t.reserveSpace}),mi.left=mi.right=mi.top=mi.bottom=0,ri.grid.show){for(t.each(allocatedAxes,function(t,i){U(i),F(i),N(i,i.ticks),S(i)}),i=allocatedAxes.length-1;i>=0;--i)z(allocatedAxes[i]);var n=ri.grid.minBorderMargin;if(null==n)for(n=0,i=0;ai.length>i;++i)n=Math.max(n,ai[i].points.radius+ai[i].points.lineWidth/2);for(var o in mi)mi[o]+=ri.grid.borderWidth,mi[o]=Math.max(n,mi[o])}gi=pi-mi.left-mi.right,vi=xi-mi.bottom-mi.top,t.each(e,function(t,i){C(i)}),ri.grid.show&&(t.each(allocatedAxes,function(t,i){W(i)}),O()),X()}function I(t){var i=t.options,e=+(null!=i.min?i.min:t.datamin),n=+(null!=i.max?i.max:t.datamax),o=n-e;if(0==o){var a=0==n?1:.01;null==i.min&&(e-=a),(null==i.max||null!=i.min)&&(n+=a)}else{var r=i.autoscaleMargin;null!=r&&(null==i.min&&(e-=o*r,0>e&&null!=t.datamin&&t.datamin>=0&&(e=0)),null==i.max&&(n+=o*r,n>0&&null!=t.datamax&&0>=t.datamax&&(n=0)))}t.min=e,t.max=n}function U(i){var e,o=i.options;e="number"==typeof o.ticks&&o.ticks>0?o.ticks:.3*Math.sqrt("x"==i.direction?pi:xi);var a,r,l,s,c,u,f,h=(i.max-i.min)/e;if("time"==o.mode){var d={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,year:1e3*525949.2*60},m=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]],p=0;null!=o.minTickSize&&(p="number"==typeof o.tickSize?o.tickSize:o.minTickSize[0]*d[o.minTickSize[1]]);for(var c=0;m.length-1>c&&!((m[c][0]*d[m[c][1]]+m[c+1][0]*d[m[c+1][1]])/2>h&&m[c][0]*d[m[c][1]]>=p);++c);a=m[c][0],l=m[c][1],"year"==l&&(u=Math.pow(10,Math.floor(Math.log(h/d.year)/Math.LN10)),f=h/d.year/u,a=1.5>f?1:3>f?2:7.5>f?5:10,a*=u),i.tickSize=o.tickSize||[a,l],r=function(t){var i=[],e=t.tickSize[0],o=t.tickSize[1],a=new Date(t.min),r=e*d[o];"second"==o&&a.setUTCSeconds(n(a.getUTCSeconds(),e)),"minute"==o&&a.setUTCMinutes(n(a.getUTCMinutes(),e)),"hour"==o&&a.setUTCHours(n(a.getUTCHours(),e)),"month"==o&&a.setUTCMonth(n(a.getUTCMonth(),e)),"year"==o&&a.setUTCFullYear(n(a.getUTCFullYear(),e)),a.setUTCMilliseconds(0),r>=d.minute&&a.setUTCSeconds(0),r>=d.hour&&a.setUTCMinutes(0),r>=d.day&&a.setUTCHours(0),r>=4*d.day&&a.setUTCDate(1),r>=d.year&&a.setUTCMonth(0);var l,s=0,c=Number.NaN;do if(l=c,c=a.getTime(),i.push(c),"month"==o)if(1>e){a.setUTCDate(1);var u=a.getTime();a.setUTCMonth(a.getUTCMonth()+1);var f=a.getTime();a.setTime(c+s*d.hour+(f-u)*e),s=a.getUTCHours(),a.setUTCHours(0)}else a.setUTCMonth(a.getUTCMonth()+e);else"year"==o?a.setUTCFullYear(a.getUTCFullYear()+e):a.setTime(c+r);while(t.max>c&&c!=l);return i},s=function(i,e){var n=new Date(i);if(null!=o.timeformat)return t.plot.formatDate(n,o.timeformat,o.monthNames);var a=e.tickSize[0]*d[e.tickSize[1]],r=e.max-e.min,l=o.twelveHourClock?" %p":"";return fmt=d.minute>a?"%h:%M:%S"+l:d.day>a?2*d.day>r?"%h:%M"+l:"%b %d %h:%M"+l:d.month>a?"%b %d":d.year>a?d.year>r?"%b":"%b %y":"%y",t.plot.formatDate(n,fmt,o.monthNames)}}else{var x=o.tickDecimals,g=-Math.floor(Math.log(h)/Math.LN10);null!=x&&g>x&&(g=x),u=Math.pow(10,-g),f=h/u,1.5>f?a=1:3>f?(a=2,f>2.25&&(null==x||x>=g+1)&&(a=2.5,++g)):a=7.5>f?5:10,a*=u,null!=o.minTickSize&&o.minTickSize>a&&(a=o.minTickSize),i.tickDecimals=Math.max(0,null!=x?x:g),i.tickSize=o.tickSize||a,r=function(t){var i,e=[],o=n(t.min,t.tickSize),a=0,r=Number.NaN;do i=r,r=o+a*t.tickSize,e.push(r),++a;while(t.max>r&&r!=i);return e},s=function(t,i){return t.toFixed(i.tickDecimals)}}if(null!=o.alignTicksWithAxis){var v=("x"==i.direction?hi:di)[o.alignTicksWithAxis-1];if(v&&v.used&&v!=i){var b=r(i);if(b.length>0&&(null==o.min&&(i.min=Math.min(i.min,b[0])),null==o.max&&b.length>1&&(i.max=Math.max(i.max,b[b.length-1]))),r=function(t){var i,e,n=[];for(e=0;v.ticks.length>e;++e)i=(v.ticks[e].v-v.min)/(v.max-v.min),i=t.min+i*(t.max-t.min),n.push(i);return n},"time"!=i.mode&&null==o.tickDecimals){var k=Math.max(0,-Math.floor(Math.log(h)/Math.LN10)+1),y=r(i);y.length>1&&/\..*0$/.test((y[1]-y[0]).toFixed(k))||(i.tickDecimals=k)}}}i.tickGenerator=r,i.tickFormatter=t.isFunction(o.tickFormatter)?function(t,i){return""+o.tickFormatter(t,i)}:s}function F(i){var e=i.options.ticks,n=[];null==e||"number"==typeof e&&e>0?n=i.tickGenerator(i):e&&(n=t.isFunction(e)?e({min:i.min,max:i.max}):e);var o,a;for(i.ticks=[],o=0;n.length>o;++o){var r=null,l=n[o];"object"==typeof l?(a=+l[0],l.length>1&&(r=l[1])):a=+l,null==r&&(r=i.tickFormatter(a,i)),isNaN(a)||i.ticks.push({v:a,label:r})}}function N(t,i){t.options.autoscaleMargin&&i.length>0&&(null==t.options.min&&(t.min=Math.min(t.min,i[0].v)),null==t.options.max&&i.length>1&&(t.max=Math.max(t.max,i[i.length-1].v)))}function D(){ui.clearRect(0,0,pi,xi);var t=ri.grid;t.show&&t.backgroundColor&&P(),t.show&&!t.aboveData&&H();for(var i=0;ai.length>i;++i)l(bi.drawSeries,[ui,ai[i]]),Y(ai[i]);l(bi.draw,[ui]),t.show&&t.aboveData&&H()}function L(t,e){var n,o,a,r,l=d();for(i=0;l.length>i;++i)if(n=l[i],n.direction==e&&(r=e+n.n+"axis",t[r]||1!=n.n||(r=e+"axis"),t[r])){o=t[r].from,a=t[r].to;break}if(t[r]||(n="x"==e?hi[0]:di[0],o=t[e+"1"],a=t[e+"2"]),null!=o&&null!=a&&o>a){var s=o;o=a,a=s}return{from:o,to:a,axis:n}}function P(){ui.save(),ui.translate(mi.left,mi.top),ui.fillStyle=oi(ri.grid.backgroundColor,vi,0,"rgba(255, 255, 255, 0)"),ui.fillRect(0,0,gi,vi),ui.restore()}function H(){var i;ui.save(),ui.translate(mi.left,mi.top);var e=ri.grid.markings;if(e){if(t.isFunction(e)){var n=ki.getAxes();n.xmin=n.xaxis.min,n.xmax=n.xaxis.max,n.ymin=n.yaxis.min,n.ymax=n.yaxis.max,e=e(n)}for(i=0;e.length>i;++i){var o=e[i],a=L(o,"x"),r=L(o,"y");null==a.from&&(a.from=a.axis.min),null==a.to&&(a.to=a.axis.max),null==r.from&&(r.from=r.axis.min),null==r.to&&(r.to=r.axis.max),a.to<a.axis.min||a.from>a.axis.max||r.to<r.axis.min||r.from>r.axis.max||(a.from=Math.max(a.from,a.axis.min),a.to=Math.min(a.to,a.axis.max),r.from=Math.max(r.from,r.axis.min),r.to=Math.min(r.to,r.axis.max),(a.from!=a.to||r.from!=r.to)&&(a.from=a.axis.p2c(a.from),a.to=a.axis.p2c(a.to),r.from=r.axis.p2c(r.from),r.to=r.axis.p2c(r.to),a.from==a.to||r.from==r.to?(ui.beginPath(),ui.strokeStyle=o.color||ri.grid.markingsColor,ui.lineWidth=o.lineWidth||ri.grid.markingsLineWidth,ui.moveTo(a.from,r.from),ui.lineTo(a.to,r.to),ui.stroke()):(ui.fillStyle=o.color||ri.grid.markingsColor,ui.fillRect(a.from,r.to,a.to-a.from,r.from-r.to))))}}for(var n=d(),l=ri.grid.borderWidth,s=0;n.length>s;++s){var c,u,f,h,m=n[s],p=m.box,x=m.tickLength;if(m.show&&0!=m.ticks.length){for(ui.strokeStyle=m.options.tickColor||t.color.parse(m.options.color).scale("a",.22).toString(),ui.lineWidth=1,"x"==m.direction?(c=0,u="full"==x?"top"==m.position?0:vi:p.top-mi.top+("top"==m.position?p.height:0)):(u=0,c="full"==x?"left"==m.position?0:gi:p.left-mi.left+("left"==m.position?p.width:0)),m.innermost||(ui.beginPath(),f=h=0,"x"==m.direction?f=gi:h=vi,1==ui.lineWidth&&(c=Math.floor(c)+.5,u=Math.floor(u)+.5),ui.moveTo(c,u),ui.lineTo(c+f,u+h),ui.stroke()),ui.beginPath(),i=0;m.ticks.length>i;++i){var g=m.ticks[i].v;f=h=0,m.min>g||g>m.max||"full"==x&&l>0&&(g==m.min||g==m.max)||("x"==m.direction?(c=m.p2c(g),h="full"==x?-vi:x,"top"==m.position&&(h=-h)):(u=m.p2c(g),f="full"==x?-gi:x,"left"==m.position&&(f=-f)),1==ui.lineWidth&&("x"==m.direction?c=Math.floor(c)+.5:u=Math.floor(u)+.5),ui.moveTo(c,u),ui.lineTo(c+f,u+h))}ui.stroke()}}l&&(ui.lineWidth=l,ui.strokeStyle=ri.grid.borderColor,ui.strokeRect(-l/2,-l/2,gi+l,vi+l)),ui.restore()}function O(){e.find(".tickLabels").remove();for(var t=['<div class="tickLabels" style="font-size:smaller">'],i=d(),n=0;i.length>n;++n){var o=i[n],a=o.box;if(o.show){t.push('<div class="'+o.direction+"Axis "+o.direction+o.n+'Axis" style="color:'+o.options.color+'">');for(var r=0;o.ticks.length>r;++r){var l=o.ticks[r];if(!(!l.label||l.v<o.min||l.v>o.max)){var s,c={};"x"==o.direction?(s="center",c.left=Math.round(mi.left+o.p2c(l.v)-o.labelWidth/2),"bottom"==o.position?c.top=a.top+a.padding:c.bottom=xi-(a.top+a.height-a.padding)):(c.top=Math.round(mi.top+o.p2c(l.v)-o.labelHeight/2),"left"==o.position?(c.right=pi-(a.left+a.width-a.padding),s="right"):(c.left=a.left+a.padding,s="left")),c.width=o.labelWidth;var u=["position:absolute","text-align:"+s];for(var f in c)u.push(f+":"+c[f]+"px");t.push('<div class="tickLabel" style="'+u.join(";")+'">'+l.label+"</div>")}}t.push("</div>")}}t.push("</div>"),e.append(t.join(""))}function Y(t){t.lines.show&&j(t),t.bars.show&&B(t),t.points.show&&R(t)}function j(t){function i(t,i,e,n,o){var a=t.points,r=t.pointsize,l=null,s=null;ui.beginPath();for(var c=r;a.length>c;c+=r){var u=a[c-r],f=a[c-r+1],h=a[c],d=a[c+1];if(null!=u&&null!=h){if(d>=f&&o.min>f){if(o.min>d)continue;u=(o.min-f)/(d-f)*(h-u)+u,f=o.min}else if(f>=d&&o.min>d){if(o.min>f)continue;h=(o.min-f)/(d-f)*(h-u)+u,d=o.min}if(f>=d&&f>o.max){if(d>o.max)continue;u=(o.max-f)/(d-f)*(h-u)+u,f=o.max}else if(d>=f&&d>o.max){if(f>o.max)continue;h=(o.max-f)/(d-f)*(h-u)+u,d=o.max}if(h>=u&&n.min>u){if(n.min>h)continue;f=(n.min-u)/(h-u)*(d-f)+f,u=n.min}else if(u>=h&&n.min>h){if(n.min>u)continue;d=(n.min-u)/(h-u)*(d-f)+f,h=n.min}if(u>=h&&u>n.max){if(h>n.max)continue;f=(n.max-u)/(h-u)*(d-f)+f,u=n.max}else if(h>=u&&h>n.max){if(u>n.max)continue;d=(n.max-u)/(h-u)*(d-f)+f,h=n.max}(u!=l||f!=s)&&ui.moveTo(n.p2c(u)+i,o.p2c(f)+e),l=h,s=d,ui.lineTo(n.p2c(h)+i,o.p2c(d)+e)}}ui.stroke()}function e(t,i,e){for(var n=t.points,o=t.pointsize,a=Math.min(Math.max(0,e.min),e.max),r=0,l=!1,s=1,c=0,u=0;;){if(o>0&&r>n.length+o)break;r+=o;var f=n[r-o],h=n[r-o+s],d=n[r],m=n[r+s];if(l){if(o>0&&null!=f&&null==d){u=r,o=-o,s=2;continue}if(0>o&&r==c+o){ui.fill(),l=!1,o=-o,s=1,r=c=u+o;continue}}if(null!=f&&null!=d){if(d>=f&&i.min>f){if(i.min>d)continue;h=(i.min-f)/(d-f)*(m-h)+h,f=i.min}else if(f>=d&&i.min>d){if(i.min>f)continue;m=(i.min-f)/(d-f)*(m-h)+h,d=i.min}if(f>=d&&f>i.max){if(d>i.max)continue;h=(i.max-f)/(d-f)*(m-h)+h,f=i.max}else if(d>=f&&d>i.max){if(f>i.max)continue;m=(i.max-f)/(d-f)*(m-h)+h,d=i.max}if(l||(ui.beginPath(),ui.moveTo(i.p2c(f),e.p2c(a)),l=!0),h>=e.max&&m>=e.max)ui.lineTo(i.p2c(f),e.p2c(e.max)),ui.lineTo(i.p2c(d),e.p2c(e.max));else if(e.min>=h&&e.min>=m)ui.lineTo(i.p2c(f),e.p2c(e.min)),ui.lineTo(i.p2c(d),e.p2c(e.min));else{var p=f,x=d;m>=h&&e.min>h&&m>=e.min?(f=(e.min-h)/(m-h)*(d-f)+f,h=e.min):h>=m&&e.min>m&&h>=e.min&&(d=(e.min-h)/(m-h)*(d-f)+f,m=e.min),h>=m&&h>e.max&&e.max>=m?(f=(e.max-h)/(m-h)*(d-f)+f,h=e.max):m>=h&&m>e.max&&e.max>=h&&(d=(e.max-h)/(m-h)*(d-f)+f,m=e.max),f!=p&&ui.lineTo(i.p2c(p),e.p2c(h)),ui.lineTo(i.p2c(f),e.p2c(h)),ui.lineTo(i.p2c(d),e.p2c(m)),d!=x&&(ui.lineTo(i.p2c(d),e.p2c(m)),ui.lineTo(i.p2c(x),e.p2c(m)))}}}}ui.save(),ui.translate(mi.left,mi.top),ui.lineJoin="round";var n=t.lines.lineWidth,o=t.shadowSize;if(n>0&&o>0){ui.lineWidth=o,ui.strokeStyle="rgba(0,0,0,0.1)";var a=Math.PI/18;i(t.datapoints,Math.sin(a)*(n/2+o/2),Math.cos(a)*(n/2+o/2),t.xaxis,t.yaxis),ui.lineWidth=o/2,i(t.datapoints,Math.sin(a)*(n/2+o/4),Math.cos(a)*(n/2+o/4),t.xaxis,t.yaxis)}ui.lineWidth=n,ui.strokeStyle=t.color;var r=V(t.lines,t.color,0,vi);r&&(ui.fillStyle=r,e(t.datapoints,t.xaxis,t.yaxis)),n>0&&i(t.datapoints,0,0,t.xaxis,t.yaxis),ui.restore()}function R(t){function i(t,i,e,n,o,a,r,l){for(var s=t.points,c=t.pointsize,u=0;s.length>u;u+=c){var f=s[u],h=s[u+1];null==f||a.min>f||f>a.max||r.min>h||h>r.max||(ui.beginPath(),f=a.p2c(f),h=r.p2c(h)+n,"circle"==l?ui.arc(f,h,i,0,o?Math.PI:2*Math.PI,!1):l(ui,f,h,i,o),ui.closePath(),e&&(ui.fillStyle=e,ui.fill()),ui.stroke())}}ui.save(),ui.translate(mi.left,mi.top);var e=t.points.lineWidth,n=t.shadowSize,o=t.points.radius,a=t.points.symbol;if(e>0&&n>0){var r=n/2;ui.lineWidth=r,ui.strokeStyle="rgba(0,0,0,0.1)",i(t.datapoints,o,null,r+r/2,!0,t.xaxis,t.yaxis,a),ui.strokeStyle="rgba(0,0,0,0.2)",i(t.datapoints,o,null,r/2,!0,t.xaxis,t.yaxis,a)}ui.lineWidth=e,ui.strokeStyle=t.color,i(t.datapoints,o,V(t.points,t.color),0,!1,t.xaxis,t.yaxis,a),ui.restore()}function E(t,i,e,n,o,a,r,l,s,c,u,f){var h,d,m,p,x,g,v,b,k;u?(b=g=v=!0,x=!1,h=e,d=t,p=i+n,m=i+o,h>d&&(k=d,d=h,h=k,x=!0,g=!1)):(x=g=v=!0,b=!1,h=t+n,d=t+o,m=e,p=i,m>p&&(k=p,p=m,m=k,b=!0,v=!1)),l.min>d||h>l.max||s.min>p||m>s.max||(l.min>h&&(h=l.min,x=!1),d>l.max&&(d=l.max,g=!1),s.min>m&&(m=s.min,b=!1),p>s.max&&(p=s.max,v=!1),h=l.p2c(h),m=s.p2c(m),d=l.p2c(d),p=s.p2c(p),r&&(c.beginPath(),c.moveTo(h,m),c.lineTo(h,p),c.lineTo(d,p),c.lineTo(d,m),c.fillStyle=r(m,p),c.fill()),f>0&&(x||g||v||b)&&(c.beginPath(),c.moveTo(h,m+a),x?c.lineTo(h,p+a):c.moveTo(h,p+a),v?c.lineTo(d,p+a):c.moveTo(d,p+a),g?c.lineTo(d,m+a):c.moveTo(d,m+a),b?c.lineTo(h,m+a):c.moveTo(h,m+a),c.stroke()))}function B(t){function i(i,e,n,o,a,r,l){for(var s=i.points,c=i.pointsize,u=0;s.length>u;u+=c)null!=s[u]&&E(s[u],s[u+1],s[u+2],e,n,o,a,r,l,ui,t.bars.horizontal,t.bars.lineWidth)}ui.save(),ui.translate(mi.left,mi.top),ui.lineWidth=t.bars.lineWidth,ui.strokeStyle=t.color;var e="left"==t.bars.align?0:-t.bars.barWidth/2,n=t.bars.fill?function(i,e){return V(t.bars,t.color,i,e)}:null;i(t.datapoints,e,e+t.bars.barWidth,0,n,t.xaxis,t.yaxis),ui.restore()}function V(i,e,n,o){var a=i.fill;if(!a)return null;if(i.fillColor)return oi(i.fillColor,n,o,e);var r=t.color.parse(e);return r.a="number"==typeof a?a:.4,r.normalize(),r.toString()}function X(){if(e.find(".legend").remove(),ri.legend.show){for(var i,n,o=[],a=!1,r=ri.legend.labelFormatter,l=0;ai.length>l;++l)i=ai[l],n=i.label,n&&(0==l%ri.legend.noColumns&&(a&&o.push("</tr>"),o.push("<tr>"),a=!0),r&&(n=r(n,i)),o.push('<td class="legendColorBox"><div style="'+ri.legend.labelBoxBorderColor+'"><div style="width:15px;height:0;border:3px solid '+i.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel"><span>'+n+"</span></td>"));if(a&&o.push("</tr>"),0!=o.length){var s='<table style="font-size: 11px; color:'+ri.grid.color+'">'+o.join("")+"</table>";if(null!=ri.legend.container)t(ri.legend.container).html(s);else{var c="",u=ri.legend.position,f=ri.legend.margin;null==f[0]&&(f=[f,f]),"n"==u.charAt(0)?c+="top:"+(f[1]+mi.top)+"px;":"s"==u.charAt(0)&&(c+="bottom:"+(f[1]+mi.bottom)+"px;"),"e"==u.charAt(1)?c+="right:"+(f[0]+mi.right)+"px;":"w"==u.charAt(1)&&(c+="left:"+(f[0]+mi.left)+"px;");var h=t('<div class="legend">'+s.replace('style="','style="position:absolute;'+c+";")+"</div>").appendTo(e);if(0!=ri.legend.backgroundOpacity){var d=ri.legend.backgroundColor;null==d&&(d=ri.grid.backgroundColor,d=d&&"string"==typeof d?t.color.parse(d):t.color.extract(h,"background-color"),d.a=1,d=d.toString());var m=h.children();t('<div style="position:absolute;width:'+m.width()+"px;height:"+m.height()+"px;"+c+"background-color:"+d+';"> </div>').prependTo(h).css("opacity",ri.legend.backgroundOpacity)}}}}}function q(t,i,e){var n,o,a=ri.grid.mouseActiveRadius,r=a*a+1,l=null;for(n=ai.length-1;n>=0;--n)if(e(ai[n])){var s=ai[n],c=s.xaxis,u=s.yaxis,f=s.datapoints.points,h=s.datapoints.pointsize,d=c.c2p(t),m=u.c2p(i),p=a/c.scale,x=a/u.scale;if(c.options.inverseTransform&&(p=Number.MAX_VALUE),u.options.inverseTransform&&(x=Number.MAX_VALUE),s.lines.show||s.points.show)for(o=0;f.length>o;o+=h){var g=f[o],v=f[o+1];if(null!=g&&!(g-d>p||-p>g-d||v-m>x||-x>v-m)){var b=Math.abs(c.p2c(g)-t),k=Math.abs(u.p2c(v)-i),y=b*b+k*k;r>y&&(r=y,l=[n,o/h])}}if(s.bars.show&&!l){var T="left"==s.bars.align?0:-s.bars.barWidth/2,w=T+s.bars.barWidth;for(o=0;f.length>o;o+=h){var g=f[o],v=f[o+1],M=f[o+2];null!=g&&(ai[n].bars.horizontal?Math.max(M,g)>=d&&d>=Math.min(M,g)&&m>=v+T&&v+w>=m:d>=g+T&&g+w>=d&&m>=Math.min(M,v)&&Math.max(M,v)>=m)&&(l=[n,o/h])}}}return l?(n=l[0],o=l[1],h=ai[n].datapoints.pointsize,{datapoint:ai[n].datapoints.points.slice(o*h,(o+1)*h),dataIndex:o,series:ai[n],seriesIndex:n}):null}function G(t){ri.grid.hoverable&&Q("plothover",t,function(t){return 0!=t.hoverable})}function _(t){ri.grid.hoverable&&Q("plothover",t,function(){return!1})}function J(t){Q("plotclick",t,function(t){return 0!=t.clickable})}function Q(t,i,n){var o=ci.offset(),a=i.pageX-o.left-mi.left,r=i.pageY-o.top-mi.top,l=m({left:a,top:r});l.pageX=i.pageX,l.pageY=i.pageY;var s=q(a,r,n);if(s&&(s.pageX=parseInt(s.series.xaxis.p2c(s.datapoint[0])+o.left+mi.left),s.pageY=parseInt(s.series.yaxis.p2c(s.datapoint[1])+o.top+mi.top)),ri.grid.autoHighlight){for(var c=0;yi.length>c;++c){var u=yi[c];u.auto!=t||s&&u.series==s.series&&u.point[0]==s.datapoint[0]&&u.point[1]==s.datapoint[1]||ti(u.series,u.point)}s&&Z(s.series,s.datapoint,t)}e.trigger(t,[l,s])}function $(){Ti||(Ti=setTimeout(K,30))}function K(){Ti=null,fi.save(),fi.clearRect(0,0,pi,xi),fi.translate(mi.left,mi.top);var t,i;for(t=0;yi.length>t;++t)i=yi[t],i.series.bars.show?ni(i.series,i.point):ei(i.series,i.point);fi.restore(),l(bi.drawOverlay,[fi])}function Z(t,i,e){if("number"==typeof t&&(t=ai[t]),"number"==typeof i){var n=t.datapoints.pointsize;i=t.datapoints.points.slice(n*i,n*(i+1))}var o=ii(t,i);-1==o?(yi.push({series:t,point:i,auto:e}),$()):e||(yi[o].auto=!1)}function ti(t,i){null==t&&null==i&&(yi=[],$()),"number"==typeof t&&(t=ai[t]),"number"==typeof i&&(i=t.data[i]);var e=ii(t,i);-1!=e&&(yi.splice(e,1),$())}function ii(t,i){for(var e=0;yi.length>e;++e){var n=yi[e];if(n.series==t&&n.point[0]==i[0]&&n.point[1]==i[1])return e}return-1}function ei(i,e){var n=e[0],o=e[1],a=i.xaxis,r=i.yaxis;if(!(a.min>n||n>a.max||r.min>o||o>r.max)){var l=i.points.radius+i.points.lineWidth/2;fi.lineWidth=l,fi.strokeStyle=t.color.parse(i.color).scale("a",.5).toString();var s=1.5*l,n=a.p2c(n),o=r.p2c(o);fi.beginPath(),"circle"==i.points.symbol?fi.arc(n,o,s,0,2*Math.PI,!1):i.points.symbol(fi,n,o,s,!1),fi.closePath(),fi.stroke()}}function ni(i,e){fi.lineWidth=i.bars.lineWidth,fi.strokeStyle=t.color.parse(i.color).scale("a",.5).toString();var n=t.color.parse(i.color).scale("a",.5).toString(),o="left"==i.bars.align?0:-i.bars.barWidth/2;E(e[0],e[1],e[2]||0,o,o+i.bars.barWidth,0,function(){return n},i.xaxis,i.yaxis,fi,i.bars.horizontal,i.bars.lineWidth)}function oi(i,e,n,o){if("string"==typeof i)return i;for(var a=ui.createLinearGradient(0,n,0,e),r=0,l=i.colors.length;l>r;++r){var s=i.colors[r];if("string"!=typeof s){var c=t.color.parse(o);null!=s.brightness&&(c=c.scale("rgb",s.brightness)),null!=s.opacity&&(c.a*=s.opacity),s=c.toString()}a.addColorStop(r/(l-1),s)}return a}var ai=[],ri={colors:["#ee7951","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:0,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:[-5,-25],backgroundColor:"",backgroundOpacity:1},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:!1},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#2e3234",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:1,barWidth:1,fill:!0,fillColor:{colors:[{opacity:.7},{opacity:1}]},align:"left",horizontal:!1},shadowSize:0},grid:{show:!0,aboveData:!1,color:"#d5d5d5",backgroundColor:null,borderColor:"#3B4144",tickColor:"#3B4144",labelMargin:5,axisMargin:8,borderWidth:0,minBorderMargin:10,markings:null,markingsColor:"#d5d5d5",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:5},hooks:{}},li=null,si=null,ci=null,ui=null,fi=null,hi=[],di=[],mi={left:0,right:0,top:0,bottom:0},pi=0,xi=0,gi=0,vi=0,bi={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},ki=this;ki.setData=u,ki.setupGrid=A,ki.draw=D,ki.getPlaceholder=function(){return e},ki.getCanvas=function(){return li},ki.getPlotOffset=function(){return mi},ki.width=function(){return gi},ki.height=function(){return vi},ki.offset=function(){var t=ci.offset();return t.left+=mi.left,t.top+=mi.top,t},ki.getData=function(){return ai},ki.getAxes=function(){var i={};return t.each(hi.concat(di),function(t,e){e&&(i[e.direction+(1!=e.n?e.n:"")+"axis"]=e)}),i},ki.getXAxes=function(){return hi},ki.getYAxes=function(){return di},ki.c2p=m,ki.p2c=p,ki.getOptions=function(){return ri},ki.highlight=Z,ki.unhighlight=ti,ki.triggerRedrawOverlay=$,ki.pointOffset=function(t){return{left:parseInt(hi[h(t,"x")-1].p2c(+t.x)+mi.left),top:parseInt(di[h(t,"y")-1].p2c(+t.y)+mi.top)}},ki.shutdown=M,ki.resize=function(){k(),y(li),y(si)},ki.hooks=bi,s(ki),c(a),T(),u(o),A(),D(),w();var yi=[],Ti=null}function n(t,i){return i*Math.floor(t/i)}t.plot=function(i,n,o){var a=new e(t(i),n,o,t.plot.plugins);return a},t.plot.version="0.7",t.plot.plugins=[],t.plot.formatDate=function(t,i,e){var n=function(t){return t=""+t,1==t.length?"0"+t:t},o=[],a=!1,r=!1,l=t.getUTCHours(),s=12>l;null==e&&(e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),-1!=i.search(/%p|%P/)&&(l>12?l-=12:0==l&&(l=12));for(var c=0;i.length>c;++c){var u=i.charAt(c);if(a){switch(u){case"h":u=""+l;break;case"H":u=n(l);break;case"M":u=n(t.getUTCMinutes());
break;case"S":u=n(t.getUTCSeconds());break;case"d":u=""+t.getUTCDate();break;case"m":u=""+(t.getUTCMonth()+1);break;case"y":u=""+t.getUTCFullYear();break;case"b":u=""+e[t.getUTCMonth()];break;case"p":u=s?"am":"pm";break;case"P":u=s?"AM":"PM";break;case"0":u="",r=!0}u&&r&&(u=n(u),r=!1),o.push(u),r||(a=!1)}else"%"==u?a=!0:o.push(u)}return o.join("")}}(jQuery);