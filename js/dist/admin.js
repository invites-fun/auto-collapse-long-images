(()=>{var e={n:a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return e.d(o,{a:o}),o},d:(a,o)=>{for(var t in o)e.o(o,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:o[t]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};(()=>{"use strict";e.r(a);const o=flarum.core.compat["admin/app"];var t=e.n(o);t().initializers.add("huoxin/auto-collapse-long-images",(function(){t().extensionData.for("huoxin-auto-collapse-long-images").registerSetting({setting:"huoxin-auto-collapse-long-images.max-height",type:"number",min:0,label:t().translator.trans("huoxin-auto-collapse-long-images.admin.max-height.label")}).registerSetting({setting:"huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers",type:"switch",label:t().translator.trans("huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.label"),help:t().translator.trans("huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.help")})}))})(),module.exports=a})();
//# sourceMappingURL=admin.js.map