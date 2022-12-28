"use strict";(globalThis.blocksyJsonP=globalThis.blocksyJsonP||[]).push([[274],{5274:function(e,t,n){n.r(t),n.d(t,{mount:function(){return i}});var o=n(1381),c=n(5652),l=n(5311),a=n.n(l),s=function(e){let{initialStatus:t,url:n,pluginUrl:l,pluginLink:s}=e;const[i,r]=(0,o.useState)("installed"),[u,m]=(0,o.useState)(!1),y=(0,o.useRef)(null);return(0,o.useEffect)((function(){r(t)}),[]),(0,o.createElement)("div",{className:"ct-blocksy-plugin-inner",ref:y},(0,o.createElement)("button",{onClick:function(){y.current.closest(".notice-blocksy-plugin").parentNode.removeChild(y.current.closest(".notice-blocksy-plugin")),a().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_dismissed_notice_handler"}})},type:"button",className:"notice-dismiss"},(0,o.createElement)("span",{className:"screen-reader-text"},(0,c.__)("Dismiss this notice.","blocksy"))),(0,o.createElement)("span",{className:"ct-notification-icon"},(0,o.createElement)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0zm4.735 25.637a.237.237 0 00-.312 0L19.28 34.83c-.069.063-.02.171.078.171h9.492c.116 0 .229-.042.312-.117l4.45-4.035a1.122 1.122 0 000-1.697zm0-10a.237.237 0 00-.312 0L18.13 25.873a.382.382 0 00-.129.282v7.613c0 .09.119.134.188.071l14.636-13.333c.517-.468.518-1.589 0-2.057zM27.674 15H18.22c-.122 0-.221.09-.221.2v8.568c0 .09.119.134.188.071l9.564-8.668c.07-.063.02-.171-.078-.171z",fill:"#23282D",fillRule:"evenodd"}))),(0,o.createElement)("div",{className:"ct-notification-content"},(0,o.createElement)("h2",null,(0,c.__)("Thanks for installing Blocksy, you rock!","blocksy")),(0,o.createElement)("p",{dangerouslySetInnerHTML:{__html:(0,c.__)("We strongly recommend you to activate the <b>Blocksy Companion</b> plugin.<br>This way you will have access to custom extensions, demo templates and many other awesome features.","blocksy")}}),(0,o.createElement)("div",{className:"notice-actions"},null,(0,o.createElement)("button",{className:"button button-primary",disabled:u||"active"===i,onClick:function(){m(!0),setTimeout((function(){})),a().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_notice_button_click"}}).then((function(e){let{success:t,data:n}=e;t&&(r(n.status),"active"===n.status&&location.assign(l)),m(!1)}))}},u?(0,c.__)("Installing & activating...","blocksy"):"uninstalled"===i?(0,c.__)("Install Blocksy Companion","blocksy"):"installed"===i?(0,c.__)("Activate Blocksy Companion","blocksy"):(0,c.__)("Blocksy Companion active!","blocksy"),u&&(0,o.createElement)("i",{className:"dashicons dashicons-update"})),(0,o.createElement)("a",{className:"ct-why-button button",href:"https://creativethemes.com/blocksy/companion/"},(0,c.__)("Why you need Blocksy Companion?","blocksy")))))};const i=function(e){e.querySelector(".notice-blocksy-plugin-root")&&(0,o.render)((0,o.createElement)(s,{initialStatus:e.querySelector(".notice-blocksy-plugin-root").dataset.pluginStatus,url:e.querySelector(".notice-blocksy-plugin-root").dataset.url,pluginUrl:e.querySelector(".notice-blocksy-plugin-root").dataset.pluginUrl,pluginLink:e.querySelector(".notice-blocksy-plugin-root").dataset.link}),e.querySelector(".notice-blocksy-plugin-root")),[...document.querySelectorAll("[data-dismiss]")].map((function(e){e.addEventListener("click",(function(t){t.preventDefault(),e.closest(".notice-blocksy-woo-deprecation").remove(),a().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_dismissed_notice_woo_deprecation"}})}))}))}}}]);