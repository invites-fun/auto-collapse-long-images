(()=>{var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const o=flarum.core.compat["forum/app"];var a=e.n(o);const n=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/CommentPost"];var l=e.n(r);function i(e){return $(e).parent().attr("data-fancybox")}function s(e,t,o,a,n){return'\n    <details class="flarumite-spoiler">\n      <summary>\n        <span class="flarumite-spoiler--title flarumite-spoiler--title-closed">\n          <span class="flarumite-spoiler--custom-text">'+t+'</span>\n          <span class="flarumite-spoiler--default-text">'+a+'</span>\n        </span>\n        <span class="flarumite-spoiler--title flarumite-spoiler--title-open">\n          <span class="flarumite-spoiler--custom-text">'+o+'111</span>\n          <span class="flarumite-spoiler--default-text">'+n+'</span>\n        </span>\n      </summary>\n      <div class="flarumite-spoiler--content">\n        <p>'+e+"</p>\n      </div>\n    </details>"}function u(e){return'\n    <details class="spoiler">\n      <p>'+e+"</p>\n    </details>"}a().initializers.add("huoxin/auto-collapse-long-images",(function(){(0,n.extend)(l().prototype,"oncreate",(function(e){var t=parseInt(a().forum.attribute("huoxin-auto-collapse-long-images.max-height"))||0;t=t>0?t:0;var o=a().translator.trans("huoxin-auto-collapse-long-images.forum.default-text.closed"),n=a().translator.trans("huoxin-auto-collapse-long-images.forum.default-text.open"),r=a().forum.attribute("huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-closed")||o,l=a().forum.attribute("huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-open")||n;this.element.querySelectorAll("img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img):not(.spoiler img):not(.flarumite-spoiler--content img)").forEach((function(e){e.addEventListener("load",(function(){if(e.height>t)if(1==a().forum.attribute("huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers")){var p=i(e)?s(e.parentNode.outerHTML,r,l,o,n):s(e.outerHTML,r,l,o,n);i(e)?$(e.parentNode).replaceWith(p):$(e).replaceWith(p)}else{var m=i(e)?u(e.parentNode.outerHTML):u(e.outerHTML);i(e)?$(e.parentNode).replaceWith(m):$(e).replaceWith(m)}}))}))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map