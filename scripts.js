
//////////////Mousewheel min /////////////////////
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/////////////////Type JS////////////////
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var o=0;o<i;o+=1){var a=n[o];t.strings.push(a.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var o in t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.type="text/css",s.setAttribute(e,!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==s.length&&(s.innerHTML=n,document.body.appendChild(s))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});
//# sourceMappingURL=typed.min.js.map

/////////////////MAIN JS////////////////
/////////////////MAIN JS////////////////
/////////////////MAIN JS////////////////
/////////////////MAIN JS////////////////

$(document).ready(function() {
var initialize=0; 
var first=0;
var currentTimeLine=0;
var time_update=0;
var myVideo = document.getElementById("myVideo");
myVideo.pause();
var myAudio = document.getElementById("myAudio");
var euqalizer=document.getElementById("euqalizer");

myAudio.ontimeupdate = function(){audio_whenTimegotUpdated();};
myVideo.ontimeupdate = function(){video_whenTimegotUpdated();};

	$("#sound-off").hide();
	$("#sound-on").hide();


	
$(window).click(function() {
	if(preload_finished===1){	

	if(initialize===0){
		myVideo.muted=false;
		
		$("#cls-1").hide();
		$("#cls-2").hide();

		anime({
			targets: '#OBJECTS',
			translateX: '-60%',
			translateY: '-40%',
			scaleX:6,
			scaleY:6,
			easing: 'easeOutElastic(1, 0.5)',
			duration: 4000,
			loop: false
		});

		initialize=1;
	}
}
});


function video_whenTimegotUpdated() {

if(initialize===0){
	if (myVideo.currentTime>14){
		myVideo.currentTime=6;
	}	
}

if(initialize===1){
	initialize=2;	
	myVideo.currentTime=15;
	
	anime({
	targets: '#intro-begin',
	backgroundColor:'#7E7EAA',
	easing: 'easeOutElastic(1, 0.5)',
	duration: 4000,
	paddingLeft: '50px',
	paddingRight: '50px',
	loop: false,
});

	$("#intro-begin").html('Skip this Intro');
	$("#layer-3").show();
	
$('#layer-1').click(function() {
myVideo.currentTime=31;
myVideo.pause();
});
	
}
	if(myVideo.currentTime>30 && initialize===2){
		$("#intro").css('z-index','1');	
		initialize=5;
		
		var my_timeline = anime.timeline();

		my_timeline.add({
			targets: '#OBJECTS',
			translateX: '18%',
			translateY: '16%',
			scaleX:0,
			scaleY:0,
			easing: 'easeOutElastic(3, 5)',
			duration: 1000,
			complete: function (){
			$("#vidOverlay").css('opacity','1');
			}
		}).add({
			targets: '#cls-4',
			translateX:'0.1%',
			translateY:'0.9%',
			opacity:1,
			easing: 'easeOutElastic(1, 0.5)',
			duration:830
		}).add({
			targets: '#cls-4',
			translateY:'27%',
			easing: 'linear',
			duration:300,
			complete:function(){
				$("#layer-1").hide();
				$("#layer-2").hide();				
			}
		}).add({
			targets: '.menu_container',
			opacity:1,
			translateY:'0.15%',
			direction: 'alternate',
  			easing: 'spring(1, 80, 40, 0)',
			duration:5000,
			complete:function(){
			$("#sound-off").show();
			}
		});
		
		
	}
}

// ------------
// <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.48 72.2"><defs><style>.cls-1{fill:#141414;fill-rule:evenodd;}</style></defs><title>test</title><path class="cls-1" d="M244.8,200.3c3.47,3.78,6.8,7.71,9.9,11.81a110.88,110.88,0,0,1,7.24,10.74,61.14,61.14,0,0,1,7.47,18.33,34.65,34.65,0,0,1,.71,7.6,25.45,25.45,0,0,1-1,6.55,21.51,21.51,0,0,1-6.07,9.87c-5,4.65-11.93,6.85-18.68,6.85s-13.68-2.2-18.68-6.84a21.51,21.51,0,0,1-6.07-9.88,25.44,25.44,0,0,1-1-6.54,34.59,34.59,0,0,1,.71-7.6,61.11,61.11,0,0,1,7.48-18.34,110.79,110.79,0,0,1,7.23-10.74c3.1-4.1,6.43-8,9.91-11.81l.4-.45.41.45Zm12.95,48c-.07,3.59-1,7.26-3.72,9.79a1.76,1.76,0,0,0,2.4,2.57c3.39-3.17,4.7-7.63,4.82-12.15a28.85,28.85,0,0,0-.31-4.92c-.11-.69-.23-1.37-.4-2a1.76,1.76,0,1,0-3.41.87,17.42,17.42,0,0,1,.34,1.72A24.11,24.11,0,0,1,257.75,248.3Z" transform="translate(-218.65 -199.85)"/></svg>
// --------------



var basisWidth=1572.350;
var basisHeight=715.556;

alignSVgandVideo();

function alignSVgandVideo(){
	let window_width= getViewport()[0];
	 let window_height= getViewport()[1];
	//  let width_ratio=((49*basisWidth)/100);
	//  let height_ratio=window_height-basisHeight;
	//  $("#svg_mask").attr("x",width_ratio + 'px');	 
}

function getViewport() {
	var viewPortWidth;
	var viewPortHeight;
 
	if (typeof window.innerWidth != 'undefined') {
		viewPortWidth = window.innerWidth,
		viewPortHeight = window.innerHeight
	}
 
	else if (typeof document.documentElement != 'undefined'
	&& typeof document.documentElement.clientWidth !=
	'undefined' && document.documentElement.clientWidth != 0) {
		 viewPortWidth = document.documentElement.clientWidth,
		 viewPortHeight = document.documentElement.clientHeight
	}
 
	// older versions of IE
	else {
		viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
		viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
	}

	return [viewPortWidth, viewPortHeight];
 }

	$("#sound").click(function() {
  		if (myAudio.paused){
			myAudio.play();
			
		$("#sound-on").show();
		$("#sound-off").hide();
	}
    else{
      myAudio.pause();
		$("#sound-on").hide();
		$("#sound-off").show();}
  });
	
	
	$("#play").click(function(){
			myAudio.play();
			$("#play").hide();
			$("#sound-on").show();
			
	});
	
	const m = new Map();
	m.set("WLA_part1", 2);
	m.set("WLA_part2", 8.85);
	m.set("WLA_part3", 20.72);
	m.set("WLA_part4", 26.52);
	m.set("WLA_part5", 30.81);
	m.set("WLA_part6", 49.48);
	m.set("WLA_part7", 62.11);
	m.set("WLA_part8", 72.59);
	m.set("WLA_part9", 84.16);
	m.set("Goals-intro", 94.61);
	m.set("Goals-intro-1", 99.64);
	m.set("Goals-intro-2", 100.48);
	m.set("Goals-intro-3", 101.47);
	m.set("Goals-intro-4", 102.47);
	m.set("Goals-prototype", 114.47);
	m.set("choobchindecor", 127);
	m.set("arianseascent", 140);
	m.set("nationalGeographic", 155);
	m.set("cysticFibrosisCanada", 169 );
	m.set("lululemon", 204);
	m.set("outro-design", 240);


	m.set("WLA_part30", 400);
		
	const ary=[...m];
	
	$("#lululemon-logo").click(function(){
	currentTimeLine=204;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#cystic-logo").click(function(){
	currentTimeLine=169;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#national-logo").click(function(){
	currentTimeLine=155;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#arian-logo").click(function(){
	currentTimeLine=140;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	
	$("#choobchin-logo").click(function(){
	currentTimeLine=127;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#goals-logo").click(function(){
	currentTimeLine=94.61;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#wla-logo").click(function(){
	currentTimeLine=2;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	//	Hide all the divs at first
	var i=0;
	for(i=0;i<ary.length;i++){
		$("#"+ary[i][0]).hide(500);
	}
	
	
	
	$("#UI-UX").click(function(){
	currentTimeLine=m.get("WLA_part5")+1;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#websites").click(function(){
	currentTimeLine=m.get("choobchindecor")+1;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#interactiveMagazine").click(function(){
	currentTimeLine=m.get("nationalGeographic")+1;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#marketing").click(function(){
	currentTimeLine=m.get("cysticFibrosisCanada")+1;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	
	$("#designs").click(function(){
	currentTimeLine=m.get("outro-design")+1;
	time_update=1;
	audio_whenTimegotUpdated();
	});
	

	
// $('#vid')
// .hover(function() {})
// .mousewheel(function(event,delta) {
// 	alert(delta);
// })


	//create AUDIO EQUALIZER
const equalizerOffset=$("#sound").outerWidth();
const equalizerOffset_unknownWhy=2;

var eachSpanWidth=0.25;  //percentage of window width
var numberOfSteps=($(window).width()-equalizerOffset)*eachSpanWidth;
var p=0;
for(p=0;p<numberOfSteps;p++){	
	var div = document.createElement('div');
	div.setAttribute('class', 'spectrum');
	div.setAttribute('width', eachSpanWidth+'%');
	var height = Math.floor(Math.random()*50)+50;
	div.style.height = height+'%';
	euqalizer.appendChild(div);
}
	
//$(window).resize(function(){
//	for(p=0;p<numberOfSteps;p++){	
//	$(".spectrum:nth-child("+p+")").remove();
//}
//	numberOfSteps=($(window).width())*eachSpanWidth;
//			alert(numberOfSteps);
//	for(p=0;p<numberOfSteps;p++){	
//	 div = document.createElement('div');
//	div.setAttribute('class', 'spectrum');
//	div.setAttribute('width', eachSpanWidth+'%');
//	 height = Math.floor(Math.random()*50)+50;
//	div.style.height = height+'%';
//	euqalizer.appendChild(div);
//}
//	audio_whenTimegotUpdated();
//});


$(document).mousewheel(function(event,delta) {
	if(initialize>3)
	{
		if(first===0){
			$("#play").hide();
			$("#sound-on").hide();
			$("#sound-off").show();
				myAudio.pause();
			first=1;		
		}
		if (event) {
			event = event;
	} else {
		event = window.event;
	}
		if(delta>0){
			currentTimeLine=currentTimeLine-2;
		}
		if(delta<0){
			currentTimeLine=currentTimeLine+2;
		}
		if(currentTimeLine<0){
			currentTimeLine=0;
		}
		time_update=1;
		audio_whenTimegotUpdated();
	}
});

	$(window).keypress(function(e) {
		if(initialize>3)
		{
			if (e.which === 32) {
				if (myAudio.paused){
				$("#sound-on").show();
				$("#sound-off").hide();
				myAudio.play();
				
				$("#play").hide();
		
			}
				else{
			myAudio.pause();
			$("#sound-on").hide();
			$("#sound-off").show();		
			$("#play").hide();}
			}
		}
});

var Xmove=0;
var x=0;
var y=0;
var onHoverFlag=0;
var CurrentHoverLocation=0;
var direction=0;
	
var CurrentStep=0;	//for storing the last step of opacity 
var HoverLastStep=0;	//for storing the last step of opacity 
	
$( "#euqalizer" ).mousedown(function(e) {
	x = e.clientX;
	y = e.clientY;
	var a=$(window).width()-equalizerOffset;
	let temp=(x-equalizerOffset)/a;
	currentTimeLine=temp*myAudio.duration;
	time_update=1;
	audio_whenTimegotUpdated();
});

$( "#euqalizer" ).mouseover(function(e) {
	onHoverFlag=1;
	 x = e.clientX;
	 y = e.clientY;
	var a=$(window).width()-equalizerOffset;
	let tempp=(x-equalizerOffset)/a;
	 direction=x-Xmove;
	if(direction>0){			//GOING FORWARD
		let temp=Math.floor(numberOfSteps*tempp)+equalizerOffset_unknownWhy;
		let k=0;
		if(temp>CurrentStep){
			for(k=CurrentStep;k<Math.floor(temp);k++){
				$(".spectrum:nth-child("+k+")").css("background", "white");
				$(".spectrum:nth-child("+k+")").css("opacity", "1");
			}	
		}
		else{
			for(k=0;k<temp;k++){
					$(".spectrum:nth-child("+k+")").css("opacity", "1");
				$(".spectrum:nth-child("+k+")").css("background", "linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1))");
			}
		}
	
	CurrentHoverLocation=temp;

	}
	else{				//GOING BACKWARDS
		let temp=Math.floor(numberOfSteps*tempp)+equalizerOffset_unknownWhy;
		let k=0;
		if(temp>CurrentStep){
			for(k=temp;k<numberOfSteps;k++){
				$(".spectrum:nth-child("+k+")").css("background", "white");
				$(".spectrum:nth-child("+k+")").css("opacity", "0.5");
			}	
		}
		else{
			for(k=CurrentStep;k>temp;k--){
				$(".spectrum:nth-child("+k+")").css("opacity", "0.5");
				$(".spectrum:nth-child("+k+")").css("background", "linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1))");
			}
		}
	
	CurrentHoverLocation=temp;
	}
	Xmove=x;	
});

$( "#euqalizer" ).mouseout(function(e) {
	onHoverFlag=0;
});
	
$( "#euqalizer" ).mouseleave(function(e) {
	onHoverFlag=0;
	audio_whenTimegotUpdated();
});

function audio_whenTimegotUpdated() {
	if(time_update){
		time_update=0;
		myAudio.currentTime=currentTimeLine;
	}
	else
	{
		currentTimeLine=myAudio.currentTime;
	}

	var	temp=$(window).width()-equalizerOffset;
	var temp2=myAudio.currentTime/myAudio.duration;

	 if(temp2<1 && onHoverFlag===0){
		var k=numberOfSteps*temp2;
		CurrentStep=Math.floor(k)+equalizerOffset_unknownWhy;
		 
		for(k=0;k<CurrentStep;k++){
			$(".spectrum:nth-child("+k+")").css("opacity", "1");
			$(".spectrum:nth-child("+k+")").css("background", "linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1))");

			// linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1));
		}
		for(k=CurrentStep;k<numberOfSteps;k++){
			$(".spectrum:nth-child("+k+")").css("background", "white");
			$(".spectrum:nth-child("+k+")").css("opacity", "0.5");
		}
 }
	
	if(temp2<1 && onHoverFlag===1){
		var a=numberOfSteps*temp2;
		CurrentStep=Math.floor(a)+equalizerOffset_unknownWhy;

		if(CurrentHoverLocation>CurrentStep){			//GOING FORWARD
			let k=0;
			
			for(k=CurrentStep;k<CurrentHoverLocation;k++){
				$(".spectrum:nth-child("+k+")").css("background", "white");
				$(".spectrum:nth-child("+k+")").css("opacity", "1");
			}
			
			for(k=CurrentHoverLocation;k<numberOfSteps;k++){
				$(".spectrum:nth-child("+k+")").css("background", "white");
				$(".spectrum:nth-child("+k+")").css("opacity", "0.5");
			}
			
			for(k=0;k<CurrentStep;k++){
			$(".spectrum:nth-child("+k+")").css("opacity", "1");
			$(".spectrum:nth-child("+k+")").css("background", "linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1))");
			}
		}
		else{
			let k=0;
			
		for(k=0;k<CurrentHoverLocation;k++){
			$(".spectrum:nth-child("+k+")").css("opacity", "1");
			$(".spectrum:nth-child("+k+")").css("background", "linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1))");
		}
		for(k=CurrentHoverLocation;k<CurrentStep;k++){
				$(".spectrum:nth-child("+k+")").css("opacity", "0.5");
				$(".spectrum:nth-child("+k+")").css("background", "linear-gradient(to bottom, rgba(126,126,170,1), rgba(126,126,170,0.5) 50%,rgba(126,126,170,1))");
			}			
		}
		
	}
	
	
	
		let i=0;
	for(i=0;i<ary.length;i++){

			//if the next div was child of this one, we need to hide it after
			numberOfChildren=$("#"+ary[i][0]).children().length;

			if( (myAudio.currentTime>ary[i][1] && myAudio.currentTime<ary[i+numberOfChildren][1]))
			{
				let y=0;
				for(y=0;y<numberOfChildren;y++){
						if(myAudio.currentTime>=ary[i+y][1]){
							$("#"+ary[i+y][0]).show(500);
						}
						else{
							$("#"+ary[i+y][0]).hide(500);
						}	
				}
				i=i+numberOfChildren-1;
			}
			else{
				$("#"+ary[i][0]).hide(500);
			}	
			
	}	
	
	if(myAudio.currentTime>m.get("WLA_part5") && myAudio.currentTime<m.get("Goals-prototype")){
			anime({
			targets: '#UI-UX h1',
			color:'#fff',
			backgroundColor:'#7E7EAA',
			easing: 'linear',
			duration: 200,
			loop: false
			});	
	}else{
		$("#UI-UX h1").css('background-color','white');
		$("#UI-UX h1").css('color','black');	
	}
	
	if(myAudio.currentTime>m.get("choobchindecor") && myAudio.currentTime<m.get("nationalGeographic")){
	anime({
		targets: '#websites h1',
		color:'#fff',
		backgroundColor:'#7E7EAA',
		easing: 'linear',
		duration: 200,
		loop: false
	});	
	}else{
		$("#websites h1").css('background-color','white');
		$("#websites h1").css('color','black');	
	}
	
	
	if(myAudio.currentTime>m.get("nationalGeographic") && myAudio.currentTime<m.get("cysticFibrosisCanada")){
	anime({
		targets: '#interactiveMagazine h1',
		color:'#fff',
		backgroundColor:'#7E7EAA',
		easing: 'linear',
		duration: 200,
		loop: false
	});	
	}else{
		$("#interactiveMagazine h1").css('background-color','white');
		$("#interactiveMagazine h1").css('color','black');
	}
	

	if(myAudio.currentTime>m.get("cysticFibrosisCanada") && myAudio.currentTime<m.get("outro-design")){
	anime({
		targets: '#marketing h1',
		color:'#fff',
		backgroundColor:'#7E7EAA',
		easing: 'linear',
		duration: 200,
		loop: false
	});	
}else{
		$("#marketing h1").css('background-color','white');
		$("#marketing h1").css('color','black');
}
	
	if(myAudio.currentTime>m.get("outro-design") && myAudio.currentTime<myAudio.duration){
	anime({
		targets: '#designs h1',
		color:'#fff',
		backgroundColor:'#7E7EAA',
		easing: 'linear',
		duration: 200,
		loop: false
	});	
	}else{
		$("#designs h1").css('background-color','white');
		$("#designs h1").css('color','black');
	}


	
} 	// END OF AUDIO UPDATE	
});

	
// const mCategory = new Map();
// mCategory.set("#UI-UX",m.get("Goals-intro-4"));
// mCategory.set("#websites",m.get("Goals-intro-4"));
// mCategory.set("#interactiveMagazine",m.get("Goals-intro-4"));
// mCategory.set("#marketing",m.get("Goals-intro-4"));
// mCategory.set("#designs",m.get("Goals-intro-4"));

// const aryCategory=[...mCategory];

// numberOfChildren=$(".menu").children().length;
// for(i=0;i<numberOfChildren;i++){
// 	if()
// 	$(".menu:nth-child("+i+")").css("background", "white");

// }