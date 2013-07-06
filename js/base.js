//get element css selector
function getElem(e){function f(){if(navigator.userAgent.indexOf("MSIE 8")==-1&&navigator.userAgent.indexOf("MSIE 7")==-1&&navigator.userAgent.indexOf("MSIE 6")==-1)return!1;if(navigator.userAgent.indexOf("MSIE 8")>-1)return!0;if(navigator.userAgent.indexOf("MSIE 7")>-1)return!0;if(navigator.userAgent.indexOf("MSIE 6")>-1)return!0}var t=function(e,n,r){document.getElementsByClassName?t=function(e,t,n){n=n||document;var r=n.getElementsByClassName(e),i=t?new RegExp("\\b"+t+"\\b","i"):null,s=[],o;for(var u=0,a=r.length;u<a;u+=1){o=r[u];(!i||i.test(o.nodeName))&&s.push(o)}return s}:document.evaluate?t=function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i="",s="http://www.w3.org/1999/xhtml",o=document.documentElement.namespaceURI===s?s:null,u=[],a,f;for(var l=0,c=r.length;l<c;l+=1)i+="[contains(concat(' ', @class, ' '), ' "+r[l]+" ')]";try{a=document.evaluate(".//"+t+i,n,o,0,null)}catch(h){a=document.evaluate(".//"+t+i,n,null,0,null)}while(f=a.iterateNext())u.push(f);return u}:t=function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i=[],s=t==="*"&&n.all?n.all:n.getElementsByTagName(t),o,u=[],a;for(var f=0,l=r.length;f<l;f+=1)i.push(new RegExp("(^|\\s)"+r[f]+"(\\s|$)"));for(var c=0,h=s.length;c<h;c+=1){o=s[c];a=!1;for(var p=0,d=i.length;p<d;p+=1){a=i[p].test(o.className);if(!a)break}a&&u.push(o)}return u};return t(e,n,r)};e=e.split(" ");var n=/\.[a-zA-Z0-9_-]*/,r=/#[a-zA-Z0-9_-]*/;if(!e[1]){e=e[0];if(r.test(e))return document.getElementById(e.replace("#",""));if(n.test(e)){var s=t(e.replace(".","")),o=[];for(i in s)(f()&&typeof s[i].getElementsByTagName=="object"||!f()&&typeof s[i].getElementsByTagName=="function")&&o.push(s[i]);return o[1]?o:o[0]}var s=document.getElementsByTagName(e);return s[1]?s:s[0]}var u=document,a;for(i in e)if(n.test(e[i])){e[i]=e[i].replace(".","");if(u[1]){a=[];for(s in u)if(f()&&typeof u[s].getElementsByTagName=="object"||!f()&&typeof u[s].getElementsByTagName=="function")for(x in t(e[i],"",u[s]))a.push(t(e[i],"",u[s])[x]);u=a.slice(0)}else{u=t(e[i],"",u);u[1]||(u=u[0])}}else if(r.test(e[i])){e[i]=e[i].replace("#","");u=document.getElementById(e[i])}else if(u[1]){a=[];for(s in u)if(f()&&typeof u[s].getElementsByTagName=="object"||!f()&&typeof u[s].getElementsByTagName=="function")for(x in u[s].getElementsByTagName(e[i]))a.push(u[s].getElementsByTagName(e[i])[x]);u=a.slice(0)}else{u=u.getElementsByTagName(e[i]);u[1]||(u=u[0])}return u};

/*
 * ******************
 * *** Aesthetics ***
 * ******************
 * - includes media query polyfills, html5 placeholders polyfill, dropdowns, tooltips, modal (lightbox), etc
 * - Dropdowns and onwards require jQuery
 *
*/

/* 
 * Resizing Browser - includes media query polyfill for ie
 * For the main menu when screen size < 768px
 * @nav is main menu navigation
 * @navdrop is button for dropping down nav when screen viewport < 768px
*/

(function(){
    
    var nav = getElem(".nav")[0]||getElem(".nav"), navdrop = getElem(".navdrop")[0]||getElem(".navdrop"), navHidden = true, maxWidth = 768;
    
    //cross-browser getStyle
    function getStyle(el,style){if(el.currentStyle)return el.currentStyle[style];else if(document.defaultView&&document.defaultView.getComputedStyle)return document.defaultView.getComputedStyle(el,"")[style];else return el.style[style]};
    
    //cross-browser body width
    function getWidth(){return document.body.clientWidth || document.documentElement.clientWidth;}
    
    if(typeof navdrop.length === "undefined")
    {

        window.onresize=function()
        {
            if(getWidth()>=maxWidth)
            {
                nav.style.display = "block";
                navHidden = true;
            }
            else if(getWidth()<=maxWidth && navHidden == true)
            {
                nav.style.display = "none";
                navHidden = true;
            }
        }
        navdrop.onclick=function()
        {
            if(getStyle(nav, "display")==="block")
            {
                nav.style.display="none";
                navHidden = true;
            }
            else if(getStyle(nav, "display")==="none")
            {
                nav.style.display="block";
                navHidden = false;
            }
        }
    }
    /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
    /*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
    window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);
    /*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
    (function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
})();

// The following code is dependent on jQuery
if(typeof window.jQuery !== "undefined")

(function($){

/*
 * *********************
 * ***** Dropdowns *****
 * *********************
 * - dropdown must have class names dropdown and click
*/ 

//for the input jQuery element ".dropdown.click", enables element's subchild "ul" element to be not hidden when element is clicked

var dropdowns = $(".dropdown.click");

dropdowns.click(function(event)
{
    var dropdown = $(this);
    var offset = dropdown.offset();
    dropdown.toggleClass("open");
    event.stopPropagation();
});
$(window).click(function()
{
    dropdowns.removeClass("open");
});

/*
 * *********************
 * ***** Tooltips ******
 * *********************
 * - to add a tooltip to anything, in html write data-tooltip="Nameoftooltip" in html. e.g. <a data-tooltip="this is a link">Hello</a>
*/ 

$("[data-tooltip]").mouseenter(function()
{
    var e = $(this);
    var offset = e.offset();

    var tooltip = $(document.createElement("div"))
                  .addClass("tooltip")
                  .append(e.attr("data-tooltip"))
                  .css({ "left":offset.left, "top":offset.top+e.height() })
                  .appendTo(document.body)
                  .hide()
                  .fadeIn(100,function()
                    {
                        $(this).css("opacity",0.9);
                    });
});

$("[data-tooltip]").mouseleave(function()
{
    $(".tooltip").fadeOut(100,function(){$(this).remove()});
});

/*
 * *********************
 * ****** Buttons ******
 * *********************
 * - 
*/ 
var radio = $("[data-toggle='button-radio'] .button");
radio.click(function()
{
    var active = $(this);
    radio.each(function(i,e)
    {
        $(e).removeClass("active");
    });
    active.addClass("active");
});


/*
 * *********************
 * ****** Modals *******
 * *********************
 * - 
*/ 

})(window.jQuery);





