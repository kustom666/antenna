$(function(){function a(a,r,o){var t="body";$('<div id="tooltip2" class="tooltip">'+o+"</div>").css({position:"absolute",display:"none",top:r-35,left:a-5,border:"1px solid #191919",padding:"1px 6px","z-index":"9999","background-color":"#202020",color:"#fff","font-size":"11px","border-radius":"2px","-webkit-border-radius":"2px","-moz-border-radius":"2px",opacity:.8}).prependTo(t).show()}for(var r,o=[],t=0;12>=t;t+=1)o.push([t,parseInt(20*Math.random())]);for(var d=[],t=0;12>=t;t+=1)d.push([t,parseInt(20*Math.random())]);for(var e=[],t=0;12>=t;t+=1)e.push([t,parseInt(20*Math.random())]);var i=new Array;i.push({data:o,bars:{show:!0,barWidth:.2,order:1}}),i.push({data:d,bars:{show:!0,barWidth:.2,order:2}}),i.push({data:e,bars:{show:!0,barWidth:.2,order:3}}),$.plot($("#vBar"),i,{grid:{hoverable:!0},legend:!0}),$("#vBar").bind("plothover",function(o,t,d){if(d){if(r!=d.datapoint){r=d.datapoint,$(".tooltip").remove();var e=d.datapoint[0];if(d.series.bars.order)for(var i=0;d.series.data.length>i;i++)d.series.data[i][3]==d.datapoint[0]&&(e=d.series.data[i][0]);var s=d.datapoint[1];a(d.pageX+5,d.pageY+5,e+" = "+s)}}else $(".tooltip").remove(),r=null})});