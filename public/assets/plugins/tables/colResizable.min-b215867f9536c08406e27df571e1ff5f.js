(function(e){function t(t,n){var o=e(t),s=o[A](m)||x+a++,a="currentStyle";return n.disable?i(o):(o.is(k)&&!C[s]&&(o[j](x)[A](m,s).before(W+'C"/>'),o.o=n,o.g=[],o.c=[],o.w=o[I](),o.d=o.prev(),o.s=y(L?t.cellSpacing||t[a].borderSpacing:o.css(S+"spacing"))||2,o.b=y(L?t.border||t[a].borderLeftWidth:o.css(S+"left-"+I))||1,C[s]=o,r(o)),void 0)}function i(e){var t=e[A](m),e=C[t];e&&e.is(k)&&(e[X](x).d.remove(),delete C[t])}function r(t){var i=t.find(H+"th"),r="removeAttr";i.length||(i=t.find(H+"td")),t.l=i.length,i.each(function(i){var n=e(this),o=e(t.d[v](W+'G"></div>')[0].lastChild);o.t=t,o.i=i,o.c=n,n.w=n[I](),t.g.push(o),t.c.push(n),n[I](n.w)[r](I),t.l-1>i?o.mousedown(l).html('<div class="'+x+'"></div>')[v](t.o.gripInnerHtml):o[j]("CRL")[X]("CRG"),o.data(x,{i:i,t:t[A](m)})}),n(t),t.find("tr:not(:first)").find("td,th").each(function(){e(this)[r](I)})}function n(e){e.d[I](e.w);for(var t,i=0;e.l>i;i++)t=e.c[i],e.g[i].css({left:t.offset().left-e.offset().left+t.outerWidth()+e.s/2+R,height:e.outerHeight()})}function o(e,t,i){var r=w.x-w.l,n=e.c[t],o=e.c[t+1],s=n.w+r,a=o.w-r;n[I](s+R),o[I](a+R),i&&(n.w=s,o.w=a)}function s(e){if(w){var t=w.t,i=e.pageX-w.L+w.l,r=20,s=w.i,a=1.5*t.s+r+t.b,l=s==t.l-1?t.w-a:t.g[s+1][h]().left-t.s-r,d=s?t.g[s-1][h]().left+t.s+r:a;return i=z.max(d,z.min(l,i)),w.x=i,w.css("left",i+R),t.o.liveDrag&&(o(t,s),n(t)),Z}}function a(t){if(c.unbind(D+x).unbind(G+x),e("head :last-child").remove(),w){var i=w[X](w.t.o.draggingClass).t,r=i.o.onResize;w.x&&(o(i,w.i,1),n(i),r&&(t.currentTarget=i[0],r(t))),w=b}}function l(t){var i,r=e(this).data(x),n=C[r.t],o=n.g[r.i],l=0;if(o.L=t.pageX,o.l=o[h]().left,c.bind(D+x,s).bind(G+x,a),p[v](f+"*{cursor:e-resize!important"+u),o[j](n.o.draggingClass),w=o,n.c[r.i].l)for(;n.l>l;l++)i=n.c[l],i.l=Z,i.w=i[I]();return Z}function d(){for(e in C){var e=C[e],t=0,i=0;if(e[X](x),e.w!=e[I]()){for(e.w=e[I]();e.l>t;t++)i+=e.c[t].w;for(t=0;e.l>t;t++)e.c[t].css(I,z.round(1e3*e.c[t].w/i)/10+"%").l=1}n(e[j](x))}}var c=e(document),f="<style type='text/css'>",u="}</style>",h="position",g=":absolute;",v="append",p=e("head")[v](f+".CRZ{table-layout:fixed}.CRZ td,.CRZ th{overflow:hidden}.CRC{height:0px;"+h+":relative}.CRG{margin-left:-5px;"+h+g+" z-index:5}.CRG .CRZ{"+h+g+"background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;cursor:e-resize;height:100%}.CRL{"+h+g+"width:1px}.CRD{border-left:1px dotted black"+u),b=null,w=b,C=[],m="id",R="px",x="CRZ",y=parseInt,z=Math,L=e.browser.msie,Z=!1,D="mousemove.",G="mouseup.",H="tr:first ",I="width",S="border-",k="table",W='<div class="CR',X="removeClass",j="addClass",A="attr";e(window).bind("resize."+x,d),e.fn.extend({colResizable:function(i){var r={draggingClass:"CRD",gripInnerHtml:"",onResize:b,liveDrag:Z,disable:Z},i=e.extend(r,i);return this.each(function(){t(this,i)})}})})(jQuery);