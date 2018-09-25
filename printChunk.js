<!DOCTYPE html>
<!-- saved from url=(0063)https://web.compass.lighthouselabs.ca/days/w02d1/activities/517 -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style class="vjs-styles-defaults">
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid {
        padding-top: 56.25%
      }
    </style>
<script type="text/javascript" src="./printChunk_files/2208df9891"></script><script src="./printChunk_files/nr-1071.min.js"></script><script async="" src="./printChunk_files/analytics.js"></script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"2208df9891","applicationID":"88817803","transactionName":"cA0LRUELXV9QFxhXBkcLE1hHDVRAGhZfWRI=","queueTime":1,"applicationTime":173,"agent":""}</script>
<script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,t){s[t]=o(d+t,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(l+"tracer",[f.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],n),e}finally{c.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||"feature",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c("mark",["onload",a()+h.offset],null,"api");var n=d.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e("handle"),f=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script><meta content="width=device-width, initial-scale=1.0" name="viewport"><title>Compass | Scripting HTTP Requests with NodeJS</title><meta content="By Lighthouse Labs" name="description"><link rel="stylesheet" media="all" href="./printChunk_files/application-94e8a680e63303f9d17b29e76d9cc3879629d40384956f6e7b1a751229bef399.css"><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', "UA-88626906-1", 'auto');
ga('send', 'pageview');</script><link href="./printChunk_files/video-js.css" rel="stylesheet"><script src="./printChunk_files/video.js"></script><script src="./printChunk_files/application-b9d8e38e75742adbebfdfdb0acd4152ca361aca8be45b50b810e2817fdf912c9.js"></script><style id="ace_editor.css">.ace_editor {position: relative;overflow: hidden;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}
/*# sourceURL=ace/css/ace_editor.css */</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="FySRprxEqaG5s604V7egkE4fYQ5el2g3Vu/uaNye03UIlPD/RI4pmOoDU5cKU9vHacfxxGYoyJJwRGtHbnHysQ=="><link rel="shortcut icon" type="image/x-icon" href="https://web.compass.lighthouselabs.ca/assets/compass_favicon-ee442e8b11982711424e19567244af062d10f1044924992a660205bc5147c060.ico"></head><body cz-shortcut-listen="true"><header class="p-4"><nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" data-turbolinks-permanent="true" role="navigation"><a title="Home" class="navbar-brand" href="https://web.compass.lighthouselabs.ca/days/today"><i class="fa fa-fw fa-lg fa-compass"></i></a><button aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarCollapse" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarCollapse"><ul class="navbar-nav mr-auto"><li class="nav-item dropdown"><a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="https://web.compass.lighthouselabs.ca/days/w02d1/activities/517#" id="nav-program-dropdown"><i class="fa fa-fw fa-flag"></i><span class="non-tablet-label">Program</span></a><div aria-labelledby="nav-program-dropdown" class="dropdown-menu"><a class="dropdown-item" title="Schedule" href="https://web.compass.lighthouselabs.ca/days/today"><i class="fa fa-fw fa-calendar"></i>Schedule</a><a class="dropdown-item" title="Lectures" href="https://web.compass.lighthouselabs.ca/lectures"><i class="fa fa-fw fa-tv"></i>Lectures</a><a class="dropdown-item" title="Projects" href="https://web.compass.lighthouselabs.ca/projects"><i class="fa fa-fw fa-pencil-square-o"></i>Projects</a><a class="dropdown-item" title="Tech Interviews" href="https://web.compass.lighthouselabs.ca/tech_interview_templates"><i class="fa fa-fw fa-comments"></i>Interviews</a><a class="dropdown-item" title="Prep Work" href="https://web.compass.lighthouselabs.ca/prep"><i class="fa fa-fw fa-paper-plane-o"></i>Prep Work</a></div></li><li class="nav-item"><a title="Incomplete Activities" class="nav-link" href="https://web.compass.lighthouselabs.ca/incomplete_activities"><i class="fa fa-fw fa-exclamation-triangle"></i><span class="non-tablet-label">Incomplete Activities (8)</span></a></li></ul><ul class="navbar-nav ml-auto"><li class="nav-item"><a title="Feedback" class="nav-link" href="https://web.compass.lighthouselabs.ca/feedbacks"><i class="fa fa-fw fa-comment"></i><span class="non-tablet-label" id="feedback-link">Feedback (0)</span></a></li><li class="dropdown nav-item current-user"><a class="dropdown-toggle nav-link" data-toggle="dropdown" href="https://web.compass.lighthouselabs.ca/days/w02d1/activities/517#"><i class="fa fa-fw fa-cogs"></i><span class="non-tablet-label">Suganthi</span></a><div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="https://web.compass.lighthouselabs.ca/profile/edit">Edit Profile</a><a class="dropdown-item" href="https://web.compass.lighthouselabs.ca/students">Classmates</a><a class="dropdown-item" href="https://web.compass.lighthouselabs.ca/teachers?location_id=2">Teachers</a><a class="sign-out-link dropdown-item" rel="nofollow" data-method="delete" href="https://web.compass.lighthouselabs.ca/session">Sign Out</a></div></li><li id="assistance-request-module"><span class="d-none" id="cancel-assistance-request"><a class="navbar-btn btn btn-outline-warning cancel-request-assistance-button" data-toggle="tooltip" data-placement="bottom" title="" href="https://web.compass.lighthouselabs.ca/days/w02d1/activities/517#" data-original-title="Cancel this Assistance Request">Waiting for Assistance</a></span><span id="create-assistance-request"><button class="btn navbar-btn btn-primary" data-target="#assistance-request-reason-modal" data-toggle="modal" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;request-assistance&#39;, &#39;click&#39;, &#39;student-requested-assistance&#39;);">Request Assistance</button></span></li></ul></div></nav><div class="modal fade" id="assistance-request-reason-modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Bring in the big guns</h4><button class="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></div><form id="assistance-request-form" action="https://web.compass.lighthouselabs.ca/assistance_requests" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><div class="modal-body"><label>Description</label><div class="form-group"><textarea name="reason" id="reason" placeholder="What do you need assistance with?" class="form-control"></textarea></div><label>Activity</label><div class="form-group"><select name="activity_id" id="activity_id" class="form-control"><option value="">Which activity?</option><optgroup label="w01d1"><option value="526">Organizing your Code</option>
<option value="248">Bootcamp Reference Guide</option>
<option value="537">How to Use Compass</option>
<option value="244">So what's a gist, anyway?</option>
<option value="678">About Pair Programming</option>
<option value="249">What should I do for Lunch?</option>
<option value="757">Git, Markdown, and  the Dev Workflow</option>
<option value="247">Adding Numbers</option>
<option value="256">Minimum Values</option>
<option value="253">How to Solve Programming Problems</option>
<option value="239">Joining Concepts</option>
<option value="251">Password Obfuscator</option>
<option value="243">Intro to Programming</option>
<option value="679">Peer Mentoring</option>
<option value="246">Reversing a String</option>
<option value="252">Pig Latin Translator</option>
<option value="245">Loopy Lighthouse Refactor</option>
<option value="240">Password Obfuscator Refactor</option></optgroup><optgroup label="w01d2"><option value="680">Pair Programming What Ifs</option>
<option value="58">Declaring Functions</option>
<option value="55">Scope in Javascript</option>
<option value="57">Getting Comfortable with Error Messages</option>
<option value="61">Debugging Errors</option>
<option value="52">Fixing Buggy Code Part 1 - Console Logs</option>
<option value="50">Coercion and Truthy/Falsey</option>
<option value="54">Debugging Incorrect Code I</option>
<option value="283">Debugging Incorrect Code II</option>
<option value="284">Debugging Incorrect Code III</option>
<option value="280">First date with Vim</option>
<option value="285">Important keyboard shortcuts</option>
<option value="53">Functions, Variables, and Debugging in JavaScript</option>
<option value="286">ST3 power user videos</option></optgroup><optgroup label="w01d3"><option value="118">Primitive Data Types</option>
<option value="119">Objects - Basic Concepts</option>
<option value="287">Character Counting</option>
<option value="288">Character Positioning</option>
<option value="115">Objects - Iteration</option>
<option value="114">JavaScript Objects</option>
<option value="290">Music Library</option>
<option value="547">Object methods and 'this'</option>
<option value="291">Music Library With Methods</option>
<option value="113">Objects - Sales Tax</option>
<option value="480">Social Network Analysis</option></optgroup><optgroup label="w01d4"><option value="187">Callbacks - Introduction</option>
<option value="183">Callbacks - Anonymous Functions and Array Iterators</option>
<option value="188">Callbacks - Custom Sorting</option>
<option value="331">Callbacks - Map</option>
<option value="190">Callbacks</option>
<option value="481">First Class Functions</option>
<option value="181">Closures</option>
<option value="295">Using Closures</option>
<option value="482">Using Closures Stretch</option>
<option value="483">Closures</option>
<option value="189">Automated Testing</option></optgroup><optgroup label="w01d5"><option value="99">Requiring Modules</option>
<option value="97">npm and package.json</option>
<option value="624">Creating and Exporting Modules</option>
<option value="102">Running Tests with Mocha</option>
<option value="96">Packages and Modules</option>
<option value="296">Problem Solving - Luhn</option>
<option value="334">Problem Solving - Stock Market</option>
<option value="336">Problem Solving - Poppin Bottles</option>
<option value="303">Mock Test</option></optgroup><optgroup label="w01e"><option value="756">Clean Code</option>
<option value="192">HTTP In Depth</option>
<option value="297">HTTP</option>
<option value="201">JSON</option>
<option value="298">JSON</option>
<option value="198">Command Line cURL</option>
<option value="196">File IO in NodeJS</option>
<option value="191">File IO Exercise</option>
<option value="197">Character Encoding</option>
<option value="299">Character Encoding</option>
<option value="194">Streams in NodeJS</option>
<option value="515">HTTP Client and streams</option>
<option value="193">Domain Name System</option>
<option value="195">Digging DNS - An Exercise</option>
<option value="292">DNS</option>
<option value="199">What is an API</option>
<option value="516">Express and EJS Tutorial</option>
<option value="493">Updating Vagrant</option></optgroup><optgroup label="w02d1"><option value="681">Troubleshooting Tips</option>
<option selected="selected" value="517">Scripting HTTP Requests with NodeJS</option>
<option value="518">Scripting HTTP Requests with the Request Package</option>
<option value="519">Welcome To Your First Project</option>
<option value="160">GitHub API: Intro and Setup</option>
<option value="520">Github API: Contributors Endpoint</option>
<option value="521">Setup Project Repo</option>
<option value="522">Implement getRepoContributors</option>
<option value="523">Implement downloadImageByURL</option>
<option value="524">Support Command Line Arguments</option>
<option value="474">Submit Your Project</option>
<option value="471">Config File for Secrets</option>
<option value="473">Handle Errors</option>
<option value="302">Recommended Repos</option></optgroup><optgroup label="w02d2"><option value="170">ES6 Template Literals</option>
<option value="177">ES6 Let and Const Keywords</option>
<option value="175">Web Server - Node.js</option>
<option value="179">Our First Web Server</option>
<option value="169">Using Express</option>
<option value="172">What is a Template Engine</option>
<option value="173">Template Engine - EJS</option>
<option value="167">CRUD and HTTP</option>
<option value="180">URL Shortening (Part 1)</option>
<option value="171">URL Shortening (Part 2)</option>
<option value="494">Express</option>
<option value="174">ES6</option></optgroup><optgroup label="w02d3"><option value="755">Nodemon</option>
<option value="485">Deleting URLs</option>
<option value="165">Updating URLs</option>
<option value="166">CRUD over HTTP</option>
<option value="673">Intro to Git Branches</option>
<option value="136">Intro to Cookies</option>
<option value="138">Cookies in Express</option>
<option value="527">Cookies and Domains</option></optgroup><optgroup label="w02d4"><option value="488">User Registration</option>
<option value="489">User Specific Features</option>
<option value="490">Storing Passwords Securely</option>
<option value="495">Storing Passwords Securely</option>
<option value="131">Switching to Encrypted Cookies</option>
<option value="305">Cookies and Sessions</option>
<option value="308">Submit Project for Evaluation</option></optgroup><optgroup label="w02d5"><option value="148">Assessment Test</option>
<option value="71">REST</option>
<option value="496">REST Paper</option>
<option value="70">REST</option>
<option value="168">Method Override</option>
<option value="492">Analytics</option></optgroup><optgroup label="w02e"><option value="282">What is a Stack</option>
<option value="84">Event-Driven Architecture - A brief Intro</option>
<option value="82">Event Propagation</option>
<option value="313">Event Propagation</option>
<option value="86">jQuery - Event Handling</option>
<option value="310">Chrome DevTools (In-depth)</option></optgroup><optgroup label="w03d1"><option value="229">Getting Started</option>
<option value="228">HTML and CSS - Basic Intros</option>
<option value="314">HTML</option>
<option value="315">IDs vs Classes</option>
<option value="312">Positioning Elements</option>
<option value="318">External Font</option>
<option value="224">Positioning the nav</option>
<option value="319">Setup the main container</option>
<option value="225">CSS Fundamentals</option>
<option value="316">CSS</option>
<option value="236">Crafting the Form</option>
<option value="317">Web Forms</option></optgroup><optgroup label="w03d2"><option value="211">JavaScript in the Browser</option>
<option value="206">Debugging JavaScript</option>
<option value="204">DOM Events</option>
<option value="320">DOM Events</option>
<option value="322">Implement the character counter</option>
<option value="321">jQuery</option>
<option value="323">Creating the tweets</option>
<option value="324">Dynamic Tweets</option></optgroup><optgroup label="w03d3"><option value="68">What is Ajax</option>
<option value="64">Ajax with JQuery</option>
<option value="66">Form Submission using JQuery</option>
<option value="63">AJAX</option>
<option value="327">Fetching tweets with Ajax</option>
<option value="326">Form Validation</option>
<option value="328">Refetch tweets on Submission</option>
<option value="497">Cross-Site Scripting</option>
<option value="329">Form toggle</option>
<option value="728">Displaying Validation Errors With jQuery</option>
<option value="301">Database Systems</option>
<option value="498">Database Systems</option></optgroup><optgroup label="w03d4"><option value="135">Data Storage - MongoDB</option>
<option value="139">Creating and Reading Data in MongoDB</option>
<option value="141">Access Data from Node.js</option>
<option value="512">Switching Tweeter to MongoDB</option>
<option value="538">Submit Project for Evaluation</option>
<option value="137">MongoDB</option></optgroup><optgroup label="w03d5"><option value="501">SASS</option>
<option value="502">SASS</option>
<option value="207">HTML Data Attributes</option>
<option value="209">Liking Tweets</option>
<option value="202">Data Attributes</option>
<option value="69">Responsive Design</option>
<option value="503">Responsive Design</option>
<option value="140">Platform - Heroku</option>
<option value="132">Heroku Deployment</option>
<option value="230">User Logins</option></optgroup><optgroup label="w03e"><option value="338">Intro to Relational Databases</option>
<option value="259">Visualizing Databases</option>
<option value="257">Data Relationships</option>
<option value="341">Relational Databases</option>
<option value="260">SQL Introduction</option>
<option value="213">SQL Fundamentals</option>
<option value="340">Database Normalization</option></optgroup><optgroup label="w04d1"><option value="218">SQLZoo - Part I</option>
<option value="342">Table JOINs with SQL</option>
<option value="343">SQLZoo - Part II - Joins</option>
<option value="344">Visualizing the Navy</option>
<option value="219">Using PostgreSQL</option>
<option value="347">Creating the Navy</option>
<option value="345">PGExercises</option>
<option value="346">SELECT in SELECT</option>
<option value="217">EXPLAIN! Query Plans</option></optgroup><optgroup label="w04d2"><option value="44">Connecting from JavaScript</option>
<option value="43">Building Queries with Knex</option>
<option value="45">Database Migrations</option>
<option value="349">Collaboration with Git</option></optgroup><optgroup label="w04d3"><option value="353">Setup Local PG Database</option>
<option value="354">Setup Git Repo</option></optgroup><optgroup label="w05d1"><option value="674">Midterm Project Evaluation</option>
<option value="549">Week 5 Guide</option></optgroup><optgroup label="w05d2"><option value="551">Introduction to Object Oriented Programming</option>
<option value="552">Simple OOP in JavaScript (Review)</option>
<option value="553">Simple OOP in JavaScript</option>
<option value="554">Todo List</option>
<option value="555">OOP in Javascript Disclaimer</option>
<option value="556">OOP Part 1: Classes &amp; Instances</option>
<option value="557">OOP Part 2: Inheritance</option>
<option value="558">OOP Part 3: Super</option>
<option value="559">OOP Part 4: Getters and Setters</option>
<option value="560">ES6 OOP Using Classes</option></optgroup><optgroup label="w05d3"><option value="561">LightCoin (LHL)</option>
<option value="562">OOP Best Practices</option>
<option value="563">OOP Best Practices</option>
<option value="564">OOP Module Conclusion</option>
<option value="565">Bloop! Hello Fishes</option>
<option value="566">Objects in JavaScript</option>
<option value="729">You Don't Know JavaScript Objects</option>
<option value="570">Introduction to Recursion</option>
<option value="607">Introduction to Recursion</option>
<option value="571">Summing with Recursion (Example)</option>
<option value="572">Sum From a to b Recursively</option>
<option value="573">More Recursion</option>
<option value="574">Sum Array of Numbers</option>
<option value="575">A Summary and Final Reading</option>
<option value="730">Fun Fun Recursion</option>
<option value="731">Properties of Recursive Algorithms</option>
<option value="732">Solving n! Using Recursion</option></optgroup><optgroup label="w05d4"><option value="578">Introduction</option>
<option value="579">Intro to Trees: Org charts!</option>
<option value="580">Trees</option>
<option value="581">Intro to Trees: Vampr!</option>
<option value="582">Tree Traversal: Org charts!</option>
<option value="583">Tree Traversal</option>
<option value="584">Tree Traversal: Vampr!</option></optgroup><optgroup label="w05d5"><option value="587">Introduction to Algorithms</option>
<option value="588">Complexity: Elementary Operations and Running Time</option>
<option value="589">Complexity</option>
<option value="590">Linear vs Logarithmic Algorithms</option>
<option value="591">Search Analysis</option>
<option value="592">Quadratic</option>
<option value="593">Quadratic</option>
<option value="594">Complexity II</option>
<option value="595">Big O Notation</option>
<option value="596">Big O Notation</option>
<option value="598">Google Interview</option>
<option value="733">Hacker Rank Big O</option>
<option value="734">Computational Complexity</option>
<option value="735">Asymptotic Notation</option>
<option value="601">Introduction to Unit Testing</option>
<option value="602">Writing your First Unit Tests</option>
<option value="603">Should I Buy This Car</option>
<option value="604">Name Formatter</option>
<option value="605">Clean Tests</option>
<option value="606">Clean up the Tests</option></optgroup><optgroup label="w05e"><option value="696">Why React</option>
<option value="608">Intro To React</option>
<option value="697">Babel &amp; Webpack</option>
<option value="610">Writing JSX</option>
<option value="698">Writing JSX</option>
<option value="616">Props</option>
<option value="699">Props</option>
<option value="617">Dynamic Content</option>
<option value="700">Dynamic Content</option>
<option value="618">Logic and Looping</option>
<option value="701">Logic and Looping</option>
<option value="702">DOM Events</option>
<option value="619">DOM Events</option>
<option value="620">Quick Recap</option>
<option value="703">React Libraries</option>
<option value="704">Classes</option>
<option value="621">Crafting Components Intro</option>
<option value="705">Crafting Components Intro</option>
<option value="622">Props (Again)</option>
<option value="706">Props (Again)</option>
<option value="623">State</option>
<option value="709">Tic Tac Toe</option></optgroup></select></div></div><div class="modal-footer"><button class="btn btn-outline-danger" data-dismiss="modal" type="button">Cancel</button><input type="submit" name="commit" value="Request Assistance" class="btn btn-primary request-assistance-button" data-dismiss="modal" data-disable-with="Request Assistance"></div></form></div></div></div></header><main class="container-fluid-ish" role="main"><div class="row"><nav class="side-nav col-xl-3 col-lg-4 col-md-5 py-5 bg-light"><h1 class="day-heading mb-3">W02D1<br><small class="text-muted">Mon Sep 3</small></h1><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W01</td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w01d1">1</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w01d2">2</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w01d3">3</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w01d4">4</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w01d5">5</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w01e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W02</td><td class="day table-success unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w02d1">1</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w02d2">2</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w02d3">3</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w02d4">4</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w02d5">5</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w02e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W03</td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w03d1">1</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w03d2">2</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w03d3">3</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w03d4">4</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w03d5">5</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w03e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W04</td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w04d1">1</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w04d2">2</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w04d3">3</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w04d4">4</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w04d5">5</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w04e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W05</td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w05d1">1</a></td><td class="day table-primary unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w05d2">2</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w05d3">3</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w05d4">4</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w05d5">5</a></td><td class="day unlocked"><a class="" href="https://web.compass.lighthouselabs.ca/days/w05e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W06</td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w06d1">1</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w06d2">2</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w06d3">3</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w06d4">4</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w06d5">5</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w06e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W07</td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w07d1">1</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w07d2">2</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w07d3">3</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w07d4">4</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w07d5">5</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w07e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W08</td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w08d1">1</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w08d2">2</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w08d3">3</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w08d4">4</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w08d5">5</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w08e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W09</td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w09d1">1</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w09d2">2</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w09d3">3</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w09d4">4</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w09d5">5</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w09e">we</a></td></tr></tbody></table><table class="side-schedule table table-bordered table-sm table-rounded"><tbody><tr><td class="week">W10</td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w10d1">1</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w10d2">2</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w10d3">3</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w10d4">4</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w10d5">5</a></td><td class="day locked"><a class="disabled" href="https://web.compass.lighthouselabs.ca/days/w10e">we</a></td></tr></tbody></table><div class="day-nav-links"><a class="btn btn-outline-secondary btn-yesterday" href="https://web.compass.lighthouselabs.ca/days/yesterday">Yesterday</a>&nbsp;<a class="btn btn-outline-primary btn-today" href="https://web.compass.lighthouselabs.ca/days/today">Today</a></div></nav><div class="content col-xl-9 col-lg-8 col-md-7 py-5 px-4"><div class="teacher-holder" data-turbolinks-permanent="true"><h4>Teachers on duty</h4><a href="https://web.compass.lighthouselabs.ca/teachers/119"><img id="teacher_119" title="" data-toggle="tooltip" data-placement="bottom" src="./printChunk_files/2652676" alt="2652676?v=3" data-original-title="Stosh Fabricius"></a><a href="https://web.compass.lighthouselabs.ca/teachers/121"><img id="teacher_121" title="" data-toggle="tooltip" data-placement="bottom" src="./printChunk_files/thumb_andytran-profile-pic.jpg" alt="Thumb andytran profile pic" data-original-title="Andy Tran"></a><a href="https://web.compass.lighthouselabs.ca/teachers/389"><img id="teacher_389" title="" data-toggle="tooltip" data-placement="bottom" src="./printChunk_files/thumb_python.png" alt="Thumb python" data-original-title="Ben Hare"></a></div><div class="reconnect-holder card"><p>You have been disconnected.</p><a class="btn btn-success reconnect">Reload</a><a class="btn btn-secondary dismiss">Dismiss</a></div><section class="activity-details"><h1><i class="fa fa-github"></i> Scripting HTTP Requests with NodeJS <small>Assignment</small></h1><div class="actions"><div class="form-group"><div class="form-inline" style="justify-content: space-between"><div><div class="input-group duration"><div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-check-circle"></i>&nbsp;Status</span></div><div class="form-control">Complete</div></div></div><div><div class="input-group duration"><div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-clock-o"></i>&nbsp;Duration</span></div><div class="form-control">120m to 140m</div></div></div></div></div><div class="next-activity"><label>Next:</label><i class="fa fa-github"></i> <a href="https://web.compass.lighthouselabs.ca/days/w02d1/activities/518">Scripting HTTP Requests with the Request Package</a></div><div class="previous-activity"><label>Previous:</label><i class="fa fa-group"></i> <a href="https://web.compass.lighthouselabs.ca/days/w02d1/activities/155">Node API demo</a></div></div><hr><h4>Learning Outcomes:</h4><ul><li>can read data from input stream</li><li>can write code to make an HTTP request</li><li>can use the "http" package to make an http request</li></ul><hr><div class="instructions"><h2>Goal</h2>

<p>In this exercise, you will use the built-in Node.js <code>https</code> library to write a simple
HTTPS <em>client</em> (a program which <em>makes</em> HTTPS requests, as opposed to a <em>server</em>
which <em>handles</em> HTTP(S) requests). We will be using <code>https</code> because <code>github.io</code>,
where the HTML examples are hosted, requires it - but you could do all of this with
<code>http</code> if the connection didn't require the <em>SSL</em> (secure socket layer)  encryption
that <code>https</code> provides.</p>

<hr>

<h3>Node.js Streams</h3>

<p>This exercise uses <em><strong>Streams</strong></em>, a fundamental concept of Node.js that allows us to
read or write <em>data</em> from or to a data source in a continuous manner (in other words,
instead of reading or writing all the data at once, <em>events</em> are triggered that emit
and receive 'chunks' of data, and callbacks are used to handle those events since they
happen asynchronously).</p>

<p><strong>Streams are used by several of the most useful built-in Node modules, such as:</strong></p>

<ul>
<li><code>http</code> and <code>https</code> (which enables us to <em>make</em> and <em>handle</em> HTTP and HTTPS requests)</li>
<li><code>fs</code> (which enables us to <em>read from</em> and <em>write to</em> the filesystem)</li>
<li><code>zlib</code> (which enables us to <em>compress</em> and <em>decompress</em> files as <code>.gz</code> files)</li>
<li><code>process.stdin</code> and <code>process.stdout</code> (which enable us to <em>read input from</em> and <em>log output to</em> the terminal)

<ul>
<li>"log output"? Yes! <code>console.log</code> uses streams to <em>write</em> to the console (<code>process.stdout</code>)</li>
</ul></li>
</ul>

<p><strong>Properties of Streams</strong></p>

<ul>
<li>Streams allow us to read and write data from and to a variety of sources</li>
<li>Streams can be <em>readable</em>, <em>writable</em>, <em>duplex</em> (read/write), and <em>transform</em> (a version of duplex where the readable data is modified as it is written)

<ul>
<li>Don't worry about memorizing these names - what's important is that you understand that different types of streams can do different things</li>
</ul></li>
<li>Streams generally have in common several handler functions, that are invoked when certain events happen.

<ul>
<li><code>stream.on('data', callback)</code> =&gt; Invoked when a chunk of data becomes available</li>
<li><code>stream.on('error', callback)</code> =&gt; Invoked if there is an error reading or writing data</li>
<li><code>stream.on('end', callback)</code> =&gt; Invoked when no more data is available (the end of the readable stream)</li>
<li><code>stream.on('finish', callback)</code> =&gt; Invoked when all of the data has been written (the end of the writable stream).</li>
</ul></li>
<li>Streams can be <em>piped</em> to each other (with <code>.pipe()</code>) to convert a readable stream from a source (such as a website) to a writable stream that writes to a target (such as a file)</li>
</ul>

<hr>

<h3>Making HTTPS Requests Using the Node.js <code>https</code> Library</h3>

<p>Node.js comes with two built-in modules that can be used for both <em>making</em> and
<em>handling</em> HTTP(S) requests. In other words, these libraries <code>http</code> and <code>https</code>
can be used to write both <em>clients</em> and <em>servers</em> - but for the purposes of this
exercise, you don't need to worry about the server part. Today is all about writing
clients.</p>

<p><strong>Note:</strong>
In lecture you may have encountered <code>http</code>, which is the equivalent module for writing
HTTP requests, which don't require SSL encryption. Unfortunately, trying to access an
HTTPS resource using <code>http</code> results in an error from the server (you can always try it
with <code>http</code> to see what happens).</p>

<p>But, for the purposes of avoiding confusion, it's just worth understanding that other
than <em>how</em> the two modules communicate with their respective protocols, their behaviour
is very similar and running any of these exercises with <code>http</code> would not cause errors
if the URL wasn't demanding an HTTPS connection.</p>

<blockquote>
<ul>
<li>Now, consider the example code below:</li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=" allow-select  language-javascript"><span class="token comment" spellcheck="true">// while https is built-in to Node, it is a module, so it must be required</span>
<span class="token keyword">var</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'https'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                               

<span class="token comment" spellcheck="true">// the host can be thought of as the domain name you want to read from,</span>
<span class="token comment" spellcheck="true">// and the path is the resource - '/' is the root path, but if you wanted to read a</span>
<span class="token comment" spellcheck="true">// particular resource (like '/login/index.html'), that would be defined in the path</span>
<span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token punctuation">:</span> <span class="token string">'example.com'</span><span class="token punctuation">,</span>
  path<span class="token punctuation">:</span> <span class="token string">'/'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// notice that https.get takes a callback with one parameter -</span>
<span class="token comment" spellcheck="true">// response, which is a Stream that represents the HTTP response</span>
https<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>requestOptions<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment" spellcheck="true">// set encoding of received data to UTF-8</span>
  response<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment" spellcheck="true">// the callback is invoked when a `data` chunk is received</span>
  response<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Chunk Received. Length:'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment" spellcheck="true">// the callback is invoked when all of the data has been received</span>
  <span class="token comment" spellcheck="true">// (the `end` of the stream)</span>
  response<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Response stream complete.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Notice that the callback function defined in the call to <code>https.get</code> takes the HTTP(S)
response - a Stream - as its parameter, and therefore it is able to use the functions
<code>.on('data', callback)</code> and <code>.on('end', callback)</code> as event listeners to register when
data is received and when the data stream is complete, respectively.</p>

<hr>

<h2>Exercise</h2>

<p>Your ultimate objective is to write an HTTPS client that reads and prints HTML from a
specified <code>host</code> and <code>path</code>.</p>

<p>This is accompished via a Multi-Step Exercise.</p>

<p>Each Step is designed to use the concepts of the previous Step and expand upon them,
adding another concept to the mix.</p>

<p><em><strong>Please read the entire content of the Step you are working on before you start coding!</strong></em></p>

<blockquote>
<ul>
<li>First, create a new directory and init a git repo for this exercise.</li>
<li>Each Step will have its own file or subdirectory with files (Step 6), so name them accordingly.</li>
<li>Your life will be easier if you open the entire working directory in Sublime/Atom, since you will be creating several files along the way.</li>
</ul>
</blockquote>

<hr>

<h3>Step 1 - Printing in Chunks</h3>

<blockquote>
<ul>
<li>Your first function <code>getAndPrintHTMLChunks</code> will utilize the <code>https</code> library to <code>GET</code> a given URL.</li>
<li>You can use the example above as a reference or template.</li>
<li>This function should <code>console.log</code> each chunk of <code>data</code> as it is received, concatenated with a newline character (<code>'\n'</code>) so you can visualize each chunk.</li>
<li>Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.</li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=" allow-select  language-javascript"><span class="token keyword">function</span> getAndPrintHTMLChunks <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    host<span class="token punctuation">:</span> <span class="token string">'sytantris.github.io'</span><span class="token punctuation">,</span>
    path<span class="token punctuation">:</span> <span class="token string">'/http-examples/step1.html'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment" spellcheck="true">/* Add your code here */</span>

<span class="token punctuation">}</span>
</code></pre>
<p><strong>Considerations:</strong></p>

<ul>
<li>Should you require <code>https</code> inside or outside of the function? Does it matter in this case? If not, in what situations would it matter?</li>
<li>Which of the stream function options (<code>'data'</code>, <code>'error'</code>, <code>'end'</code>, <code>'finish'</code>) do you need to use to log the data chunks <em>as they come in</em>?</li>
<li>What do you notice about the results? Do you think this is the best way to handle the incoming data? How could we improve upon this?</li>
</ul>

<hr>

<h3>Step 2 - Printing with Buffered Strings</h3>

<blockquote>
<ul>
<li>Don't forget to commit your work from Step 1 if you haven't already!</li>
<li>In another file, create a second function, <code>getAndPrintHTML</code>, which will look very similar to your first function.</li>
<li>This function should use a <em>buffering technique</em> to append each chunk of <code>data</code> to a variable as it is received, and then <code>console.log</code> the <code>data</code> once all of the data has been received.

<ul>
<li>Buffering in this context means the technique you've used before (usually in loops or conditionals) of creating an empty variable and adding data to it.</li>
</ul></li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=" allow-select  language-javascript"><span class="token keyword">function</span> getAndPrintHTML <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    host<span class="token punctuation">:</span> <span class="token string">'sytantris.github.io'</span><span class="token punctuation">,</span>
    path<span class="token punctuation">:</span> <span class="token string">'/http-examples/step2.html'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment" spellcheck="true">/* Add your code here */</span>

<span class="token punctuation">}</span>
</code></pre>
<p><strong>Considerations:</strong></p>

<ul>
<li>What kind(s) of variable could you buffer your data with? Is there a preferable type? If so, what makes it preferable?</li>
</ul>

<hr>

<h3>Step 3 - Printing with Parameters</h3>

<p>So, now you've successfully written two versions of an HTTPS client to retrieve
and print HTML data from the internet.</p>

<p>But, this function is not very modular - even though it's called <code>getAndPrintHTML</code>,
it can only work for the URL that's been hardcoded (as the <code>host</code> and <code>path</code>
properties of the <code>requestOptions</code> object). Which means if you wanted to reuse the
function in its current form, you'd have to have several versions of it, each with
its own URL.</p>

<p>Does this make any sense, given why we use functions in the first place? Not really.
We should change our function to accept one or more parameters, so that when we call it,
we can specify what URL we want the function to read and print from.</p>

<p>Note: <strong>In general, hardcoding values reduces modularity.</strong> This is not an absolute
rule - for example, if you're writing a function to calculate the circumference of a
circle, you don't need to pass the value of π (pi) to it every time - because π will
not change. Or, if your function's purpose is to generate a 10-character random string,
then it's reasonable to hardcode the value <code>10</code> inside the function.
But, when a function could be made more modular by accepting parameters for values
that <em>are</em> variable, that is the preferable way to program it.</p>

<blockquote>
<ul>
<li>Don't forget to commit your work from Step 2 if you haven't already!</li>
<li>In another file, create a third function, <code>getAndPrintHTML</code>, which will look very similar to your second function, but accepts a paramater, <code>options</code>, which is an object that contains values for the <code>host</code> and <code>path</code>, exactly like <code>requestOptions</code>. Reuse whatever code you need from part 2 - we're still getting and printing the HTML.</li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=" allow-select  language-javascript"><span class="token keyword">function</span> getAndPrintHTML <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment" spellcheck="true">/* Add your code here */</span>

<span class="token punctuation">}</span>

<span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token punctuation">:</span> <span class="token string">'sytantris.github.io'</span><span class="token punctuation">,</span>
  path<span class="token punctuation">:</span> <span class="token string">'/http-examples/step3.html'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre>
<p><strong>Considerations:</strong></p>

<ul>
<li>There are other ways to structure this using parameters of other types - did you instinctively want to implement it differently?</li>
<li>Is there any reason not to just pass the URL as a string?</li>
<li>Is there any reason not to pass the host and path as two individual parameters?

<ul>
<li>Don't get too hung up on these questions if you aren't sure - it's more important that you implement a solution. Feel free to ask a mentor if you're curious!</li>
</ul></li>
<li>Did you notice that the declaration of <code>requestOptions</code> has been moved? Do you understand why?

<ul>
<li>What do you need to change about the way you call <code>https.get</code> to ensure it still works?</li>
</ul></li>
</ul>

<hr>

<h3>Step 4 - Printing with Callbacks</h3>

<p>In Step 3, you made the function more modular by passing in the <code>host</code> and <code>path</code> as
an object instead of hardcoding the <code>requestOptions</code> inside the function.
Now you should successfully be able to print the HTML from any URL that you can access.</p>

<p>However, is this completely modular yet? Consider this situation:</p>

<p>You're writing a program that needs to be able to print HTML at one point, and
<em>save HTML to a file</em> at another point.</p>

<p>If you were to write these as distinct functions, you'd be duplicating lots of code.
Wouldn't it be better if you could write one function that <em>gets</em> the HTML, and give
it instructions on what to do with the HTML data when the data stream is complete?</p>

<p><strong>Enter callbacks.</strong> By passing in and invoking a callback function, you can make your
function modular, and let the callback handle the data once it's complete.</p>

<blockquote>
<ul>
<li>Don't forget to commit your work from Step 3 if you haven't already!</li>
<li>In another file, create a fourth function, <code>getHTML</code>. This function will look and behave almost the same as your third function, except:

<ul>
<li>The function definition will now accept a <code>callback</code> as a second parameter.</li>
<li>The function body will invoke (call) the callback when the data is fully received, in place of the original <code>console.log</code>.</li>
</ul></li>
<li>To simplify things for the moment, the callback function <code>printHTML</code> will be defined below. You just need to ensure it gets passed as an argument when you call <code>getHTML</code>.</li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=" allow-select  language-javascript"><span class="token keyword">function</span> getHTML <span class="token punctuation">(</span>options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment" spellcheck="true">/* Add your code here */</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> printHTML <span class="token punctuation">(</span>html<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token punctuation">:</span> <span class="token string">'sytantris.github.io'</span><span class="token punctuation">,</span>
  path<span class="token punctuation">:</span> <span class="token string">'/http-examples/step4.html'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Considerations:</strong></p>

<ul>
<li>Can you explain the difference between function <code>definition</code> and <code>invocation</code>?</li>
<li>Do you understand what each parameter and argument represents? Can you walk yourself through the code without getting lost? If this confuses you, have a chat with a mentor.</li>
<li>It's common at this point to be confused by callbacks. But if you find yourself really struggling with the concept, please reach out to one of us and ask for help. Callbacks and asynchronous code are an integral part of Javascript and you will use them many times in bootcamp, in a variety of situations. If you're finding them hard to comprehend, you're not the only one in your cohort. But it's still important we know who needs to review the subject more, because callbacks are here to stay.</li>
</ul>

<hr>

<h3>Step 5 - Make it a Module</h3>

<p>Now that your <code>getHTML</code> function gets its <code>options</code> object and <code>callback</code> function as
arguments, it is a modular function. As such, you can put it in a module which will
make it easier to access in other files for the next step.</p>

<blockquote>
<ul>
<li>Don't forget to commit your work from Step 4 if you haven't already!</li>
<li>Make a new file for your module. You can call the file whatever you want, but for the purposes of the exercise we'll call it <code>http-functions.js</code>.</li>
<li>Remember that your module needs to export the function so it is available via <code>require</code>. You <em>can</em> export an object with the function as a property if you prefer, but the example below exports the function directly for the sake of simplicty.</li>
<li>You can use the template below and copy the contents of your <code>getHTML</code> function into it.</li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=" allow-select  language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> getHTML <span class="token punctuation">(</span>options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">/* Your code here */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<blockquote>
<ul>
<li>To test it, make another <code>.js</code> file that will <code>require</code> your module to test it.</li>
<li>You can paste in your <code>printHTML</code> callback from the previous Step.</li>
</ul>
</blockquote>
<pre class="  language-javascript"><code class=": allow-select  language-javascript"><span class="token keyword">var</span> getHTML <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./http-functions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token punctuation">:</span> <span class="token string">'sytantris.github.io'</span><span class="token punctuation">,</span>
  path<span class="token punctuation">:</span> <span class="token string">'/http-examples/step5.html'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Considerations:</strong></p>

<ul>
<li>Remember that your function requires the <code>https</code> library - if you kept the <code>var https = require('https');</code> declaration outside of the function, you'll need to either:

<ul>
<li>Copy it to the beginning of your exported function</li>
<li>Copy it into the top of the <code>http-functions.js</code> file, where it will be in scope for the exported function and any other functions in scope (making it a private variable).</li>
</ul></li>
<li>Are either of these solutions preferable over the other? What situations might affect that? If you used the filename <code>http-functions.js</code>, does that offer any hints?</li>
</ul>

<hr>

<h3>Step 6 - Defining Callbacks</h3>

<p>Now that you've successfully invoked an asynchronous callback and exported your
function as a module, it's time to practice by writing a few callbacks of your own
that you will pass to your function.</p>

<blockquote>
<ul>
<li>Don't forget to commit your work from Step 5 if you haven't already!</li>
<li>Make a new directory inside your working directory and call it <code>callbacks</code> (or whatever you wish, the name doesn't matter).</li>
<li>Inside that directory, create the files <code>print_uppercase.js</code>, <code>print_lowercase.js</code>, <code>print_reverse.js</code> and - if you feel stretchy - <code>print_1337.js</code>.</li>
<li>Each of these files will need to <code>require</code> your <code>http-functions</code> module (or whatever you named it) so they have access to <code>getHTML</code>.</li>
<li>You may want to copy your <code>http-functions.js</code> module file into the same directory.

<ul>
<li>If you leave it where it is you will need to change your <code>require</code> statement to use <code>'../http-functions'</code> instead of <code>'./http-functions'</code>.</li>
<li>While <code>.</code> represents the current working directory, <code>..</code> represents the directory one level up (in other words, the parent).</li>
</ul></li>
</ul>
</blockquote>

<p>These functions should perform the following actions when sent as a callback to the
<code>getHTML</code> function from the <code>http-functions</code> module:</p>

<ul>
<li><code>print_uppercase.js</code> : Transforms the <code>html</code> string into ALL CAPS and prints it to the console.</li>
<li><code>print_lowercase.js</code> : The exact opposite of the former - transforms the <code>html</code> string into poetic lowercase and prints it to the console.</li>
<li><code>print_reverse.js</code>   : Reverses the <code>html</code> string and then prints it to the console.</li>
<li><code>print_1337.js</code>      : Transforms the <code>html</code> string into 13375p34k (aka leetspeak, like how 'h4x0rs' talked in the 90s) - this is very similar to your password obfuscator from w1d1, with a few additional letters to substitute, and a few strings:

<ul>
<li><code>a : '4'</code>, <code>e : '3'</code>, <code>l : '1'</code>, <code>o : '0'</code>, <code>s : '5'</code>, <code>t : '7'</code>, <code>'ck' : 'x'</code>, <code>'er' : '0r'</code>, <code>'you' : 'j00'</code></li>
<li>The last three (<code>'ck' : 'x'</code>, <code>'er' : '0r'</code>, <code>'you' : 'j00'</code>) may be tough, depending on how you implement your solution. (<code>'er' : '0r'</code> is almost guaranteed to be an issue, can you spot why?) Consider these stretch-on-stretch and don't get behind if they give you trouble. You can always return to this later.</li>
</ul></li>
</ul>

<p>Here's an example for the first one, <code>print_uppercase.js</code>:</p>
<pre class="  language-javascript"><code class=" allow-select  language-javascript"><span class="token keyword">var</span> getHTML <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./http-functions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  host<span class="token punctuation">:</span> <span class="token string">'sytantris.github.io'</span><span class="token punctuation">,</span>
  path<span class="token punctuation">:</span> <span class="token string">'/http-examples/step6/uppercase.html'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> printUpperCase <span class="token punctuation">(</span>html<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment" spellcheck="true">/* Write your code here! */</span>

<span class="token punctuation">}</span>

<span class="token function">getHTML</span><span class="token punctuation">(</span>requestOptions<span class="token punctuation">,</span> printUpperCase<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
<p>Each file uses the same <code>host</code> but you'll need to change the <code>path</code>:</p>

<blockquote>
<ul>
<li>For <code>print_lowercase.js</code>:

<ul>
<li>Use <code>path: '/http-examples/step6/lowercase.html'</code></li>
</ul></li>
<li>For <code>print_reverse.js</code>:

<ul>
<li>Use <code>path: '/http-examples/step6/reverse.html'</code></li>
</ul></li>
<li>For <code>print_1337.js</code>:

<ul>
<li>Use <code>path: '/http-examples/step6/1337.html'</code></li>
</ul></li>
</ul>
</blockquote>

<p><strong>Considerations:</strong></p>

<ul>
<li>If you're stuck, try googling the MDN (Mozilla Developer's Network) docs on Javascript string or array functions.</li>
<li>If you are doing <code>print_1337.js</code>, you have the opportunity to reconsider your solution for the password obfuscator exercise you did previously. Are conditionals or switch statements the only way to solve this?

<ul>
<li><strong>Please note - this Substep is considered Stretch. It would be better to come back to solve this after you've finished your Github Avatar Downloader project.</strong></li>
<li>Notice how the key-value pairs for the letters and their '1337' substitutes are structured. What else has key-value pairs and how could we use it to solve this?</li>
<li>Especially for the keys with multiple characters, you will likely need to look up 'Regular Expressions' (<code>RegExp</code> in Javascript) which are very powerful pattern-matching tools.</li>
<li>Once again - don't get caught up in this at the cost of having enough time for your Github avatar downloader project - there's a lot to do today! You can always come back to this one later.</li>
</ul></li>
</ul>

<hr>
</div><section class="activity-details"><hr><div class="actions"><div class="form-group"><div class="form-inline"><div class="left-actions"><input class="form-control pull-left" id="activity_view" value="https://github.com/suganthi05/CallBacks/tree/master/callbacks">&nbsp;<a class="btn btn-outline-danger btn-activity-incomplete-status" rel="nofollow" data-method="delete" href="https://web.compass.lighthouselabs.ca/activities/517/activity_submission"><i class="fa fa-times"></i>&nbsp;Cancel Submission</a></div></div></div></div></section><div class="card bg-light" style="margin-top: 40px;"><h5 class="card-header" id="feedback-form">Submit Feedback</h5><div class="card-body"><h5 class="card-title">Feedback for this Assignment</h5><div class="card-text"><p>Your feedback is critical for us to iterate and improve upon our curriculum. In fact, you can even give us feedback for this and other activities multiple times! It is <em>not anonymous</em> but it <em>is confidential</em> meaning only teachers and admins can view it, not other students.</p><hr><form novalidate="novalidate" class="simple_form new_activity_feedback" id="new_activity_feedback" action="https://web.compass.lighthouselabs.ca/activities/517/activity_feedbacks" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><label class="string optional" for="activity_feedback_Rate this activity overall (optional)">Rate this activity overall (optional)</label><div><div class="raty-editor" name="feedback[rating]" style="cursor: pointer;"><input type="hidden" name="activity_feedback[rating]" id="activity_feedback_rating"><img alt="1" src="./printChunk_files/duck-off-94bdf078eeac301c7f23a1d37091bb622034147cb69d7f4158e00ae98dd3d943.png" title="Very Problematic">&nbsp;<img alt="2" src="./printChunk_files/duck-off-94bdf078eeac301c7f23a1d37091bb622034147cb69d7f4158e00ae98dd3d943.png" title="Problematic">&nbsp;<img alt="3" src="./printChunk_files/duck-off-94bdf078eeac301c7f23a1d37091bb622034147cb69d7f4158e00ae98dd3d943.png" title="Average">&nbsp;<img alt="4" src="./printChunk_files/duck-off-94bdf078eeac301c7f23a1d37091bb622034147cb69d7f4158e00ae98dd3d943.png" title="Good">&nbsp;<img alt="5" src="./printChunk_files/duck-off-94bdf078eeac301c7f23a1d37091bb622034147cb69d7f4158e00ae98dd3d943.png" title="Great"><input name="score" type="hidden"></div><div class="hint"></div></div><div class="form-group text optional activity_feedback_detail"><label class="control-label text optional" for="activity_feedback_detail">Detail</label><div><textarea class="form-control text optional" placeholder="The more you can give us the better!" name="activity_feedback[detail]" id="activity_feedback_detail"></textarea></div></div><input type="submit" name="commit" value="Submit Feedback" class="btn btn-tiny btn-primary" data-disable-with="Submit Feedback"></form></div></div></div><div class="card" style="margin-top:30px;"><h5 class="card-header" id="feedback-form">Previous Feedback</h5><div class="card-body"><h5 class="card-title">Your Feedback</h5><div class="card-text"><div id="activity-feedback"><p class="alert alert-warning empty-message">You haven't given us any feedback for this activity :(...</p><ul class="list-unstyled"></ul></div></div></div></div></section></div></div></main><footer></footer></body></html>