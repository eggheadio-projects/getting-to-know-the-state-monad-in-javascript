(function(e){const n=console.log;const o=document.querySelector(e.selector);const t=e.globalName||"logger";i(o,{background:e.colors.background,color:e.colors.foreground,fontFamily:"monospace"});function r(e){return{}.toString.call(e)==="[object Array]"}function l(e){return{}.toString.call(e)==="[object Object]"}function c(e){return e&&typeof e.inspect==="function"}function i(e,n){Object.assign(e.style,n);return e}function u(e){const n=document.createElement("span");if(e.tagName){n.appendChild(e)}else{n.innerText=e}return n}function a(n){const o=document.createElement("span");o.appendChild(u("{ "));Object.keys(n).reduce(function(o,t,r,l){o.appendChild(i(u(t+": "),{color:e.colors.key}));o.appendChild(s(n[t]));if(r<l.length-1){o.appendChild(u(", "))}return o},o);o.appendChild(u(" }"));return o}function d(e){const n=document.createElement("span");n.appendChild(u("[ "));e.reduce(function(n,o,t){n.appendChild(s(o));if(t<e.length-1){n.appendChild(u(", "))}return n},n);n.appendChild(u(" ]"));return n}function s(n){if(c(n)){return s(n.inspect())}else if(typeof n==="number"){return i(u(n),{color:e.colors.number})}else if(typeof n==="string"){return i(u("'"+n+"'"),{color:e.colors.string})}else if(typeof n==="boolean"){return i(u(n),{color:e.colors.boolean})}else if(typeof n==="function"){return i(u("Function"))}else if(r(n)){return u(d(n))}else if(l(n)){return u(a(n))}else if(n===undefined){return i(u("undefined"),{fontStyle:"italic",color:e.colors.boolean})}else if(n===null){return i(u("null"),{fontStyle:"italic",color:e.colors.boolean})}}function f(n,o){const t=document.createElement("dl");const r=document.createElement("dt");const l=document.createElement("dd");i(t,{padding:"0",margin:"0",marginBottom:"0.6em",fontSize:e.fontSize});i(r,{color:e.colors.label,fontWeight:600,fontSize:"1.1em",margin:"0"});i(l,{padding:"0 0.75em",margin:"0"});r.innerText=n+":";l.appendChild(s(o));t.appendChild(r);t.appendChild(l);return t}function p(n){return i(u(s(n)),{display:"block",margin:"0",marginBottom:"0.6em",fontSize:e.fontSize})}function g(){o.appendChild(arguments.length>1?f(arguments[0],arguments[1]):p(arguments[0]));n.apply(console,arguments)}e.root[t]=g;console.log=g})({
  globalName:"log",
  root:window,
  selector:"body",
  fontSize:"28px",
  colors: {
    background:"transparent",
    foreground:"gray",
    label:"blue",
    nil:"green",
    number:"violet",
    string:"red",
    key:"blue",
    "boolean":"green"
  }
});