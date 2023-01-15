const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){timerId=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.f6c925d9.js.map
