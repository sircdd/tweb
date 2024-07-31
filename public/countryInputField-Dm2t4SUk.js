import{r as I}from"./button-DUmZNV0E.js";import{cj as D,b as A,d as N,a as _,f as M,aP as R,ao as B,aH as K,r as F,i as b,ab as S,aX as j,V as x,e as O}from"./index-CbCftUfG.js";import{s as H,j as U}from"./page-NWzulROZ.js";import{I as T,p as W,a0 as z,w as X,A as q}from"./wrapEmojiText-CZyOyt8f.js";import{S as J}from"./scrollable-C20Fr3mN.js";function G(d,e){const s=Array.isArray(e)?e:D(e);let t=d;for(const o of s)if(t=t?.[o],!t)break;return t}class ae{constructor(e={}){const s=this.label=document.createElement("label");s.classList.add("checkbox-field"),e.restriction&&!e.toggle&&s.classList.add("checkbox-field-restriction"),e.round&&s.classList.add("checkbox-field-round"),e.disabled&&this.toggleDisability(!0),this.listenerSetter=e.listenerSetter;const t=this.input=document.createElement("input");if(t.classList.add("checkbox-field-input"),t.type=e.asRadio?"radio":"checkbox",e.name&&(t[e.asRadio?"name":"id"]="input-"+e.name),e.checked&&(t.checked=!0),e.stateKey){let n=e.checked!==void 0;const r=()=>{if(!n)return;let i;e.stateValues?i=e.stateValues[t.checked?1:0]:(i=t.checked,e.stateValueReverse&&(i=!i)),_.managers.appStateManager.setByKey(e.stateKey,i)};!n&&A.getState().then(i=>{n=!0;const f=G(i,e.stateKey);let a;e.stateValues?a=e.stateValues.indexOf(f)===1:(a=f,e.stateValueReverse&&(a=!a)),this.setValueSilently(a)}),e.listenerSetter?e.listenerSetter.add(t)("change",r):t.addEventListener("change",r)}let o;if(e.text?(o=this.span=document.createElement("span"),o.classList.add("checkbox-caption"),N(o,e.text,e.textArgs)):s.classList.add("checkbox-without-caption"),s.append(t),e.toggle){s.classList.add("checkbox-field-toggle"),e.restriction&&s.classList.add("checkbox-field-toggle-restriction");const n=document.createElement("div");n.classList.add("checkbox-toggle");const r=document.createElement("div");r.classList.add("checkbox-toggle-circle"),n.append(r),s.append(n)}else{const n=document.createElement("div");n.classList.add("checkbox-box");const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.classList.add("checkbox-box-check"),r.setAttributeNS(null,"viewBox","0 0 24 24");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS(null,"href","#check"),i.setAttributeNS(null,"x","-1"),r.append(i);const f=document.createElement("div");f.classList.add("checkbox-box-background");const a=document.createElement("div");a.classList.add("checkbox-box-border"),n.append(a,f,r),s.append(n)}o&&s.append(o),e.withRipple?(s.classList.add("checkbox-ripple","hover-effect"),I(s,void 0,void 0,!0)):e.withHover&&s.classList.add("hover-effect")}get checked(){return this.input.checked}set checked(e){this.setValueSilently(e),H(this.input,"change")}setValueSilently(e){this.input.checked=e}isDisabled(){return this.label.classList.contains("checkbox-disabled")}toggleDisability(e){return this.label.classList.toggle("checkbox-disabled",e),this.input.disabled=e,()=>this.toggleDisability(!e)}}const E=new Map;let v=0;const w=(d,e,s="")=>{s=e.country_code+s,v=Math.max(v,s.length),E.set(s,{country:d,code:e})};function Q(d){d=d||"",E.size||M.countriesList.forEach(c=>{c.country_codes.forEach(l=>{l.prefixes?l.prefixes.forEach(h=>{w(c,l,h)}):w(c,l)})});let e=d.replace(/\D/g,"");const s=e.slice(0,v);let t;for(let c=s.length-1;c>=0&&(t=E.get(s.slice(0,c+1)),!t);--c);if(!t)return{formatted:e,country:void 0,code:void 0,leftPattern:""};const o=t.country,n=t.code.patterns||[],r=e.slice(t.code.country_code.length);let i="",f=0,a="";for(let c=n.length-1;c>=0;--c){i=n[c];const l=i.replace(/ /g,"");let h=0;for(let p=0,m=Math.min(r.length,l.length);p<m;++p)if(r[p]===l[p])h+=1.01;else if(l[p]==="X")++h;else{h=0;break}h>f&&(f=h,a=i)}i=a||i,i=i.replace(/\d/g,"X"),i=t.code.country_code+" "+i,i.split("").forEach((c,l)=>{c===" "&&e[l]!==" "&&e.length>l&&(e=e.slice(0,l)+" "+e.slice(l))});let u=i&&i.length>e.length?i.slice(e.length):"";return u&&(u=u.replace(/X/g,"‒")),{formatted:e,country:o,code:t.code,leftPattern:u}}class ie extends T{constructor(e={}){super({label:"Contacts.PhoneNumber.Placeholder",name:"phone",...e}),this.pasted=!1,this.lastValue="",this.container.classList.add("input-field-phone");const s=this.input;if(s instanceof HTMLInputElement)s.type="tel",s.autocomplete="rr55RandomRR55";else{s.inputMode="decimal";const t=window.devicePixelRatio;if(t>1){let n;B?n=t*-.16:K&&(n=0),s.style.setProperty("--letter-spacing",n+"px")}const o=this.setValueSilently.bind(this);this.setValueSilently=n=>{o(n),W(this.input,!0)}}s.addEventListener("input",()=>{s.classList.remove("error");const t=this.value;Math.abs(t.length-this.lastValue.length)>1&&!this.pasted&&R&&this.setValueSilently(this.lastValue+t),this.pasted=!1,this.setLabel();let n,r,i="";this.value.replace(/\++/,"+")==="+"?this.setValueSilently("+"):(n=Q(this.value),r=n.formatted,n.country,i=n.leftPattern,n.code,this.setValueSilently(this.lastValue=r?"+"+r:"")),s.dataset.leftPattern=i,e.onInput&&e.onInput(n)}),s.addEventListener("paste",()=>{this.pasted=!0}),s.addEventListener("keypress",t=>{const o=t.key;if(/\D/.test(o)&&!(t.metaKey||t.ctrlKey)&&o!=="Backspace"&&!(o==="+"&&t.shiftKey))return t.preventDefault(),!1})}}let y;const P=()=>{y=M.countriesList.filter(d=>!d.pFlags?.hidden).sort((d,e)=>(d.name||d.default_name).localeCompare(e.name||e.default_name))};let L=()=>{L=void 0,P(),_.addEventListener("language_change",()=>{P()})};const V=new Set(["FT"]);function Y(d,e){return L?.(),d=d.toLowerCase(),y.filter(t=>{if(e&&V.has(t.iso2))return!1;const o=[t.name,t.default_name,t.iso2];return o.filter(Boolean).forEach(r=>{const i=r.split(" ").filter(f=>/\w/.test(f)).map(f=>f[0]).join("");i.length>1&&o.push(i)}),!!o.filter(Boolean).find(r=>r.toLowerCase().indexOf(d)!==-1)})}class ne extends T{constructor(e={}){super({label:"Country",name:F(),...e}),this.options=e,this.hidePicker=()=>{this.hideTimeout===void 0&&(this.selectWrapper.classList.remove("active"),this.hideTimeout=window.setTimeout(()=>{this.selectWrapper.classList.add("hide"),this.hideTimeout=void 0},200))},this.selectCountryByTarget=a=>{const u=a.querySelector("[data-default-name]").dataset.defaultName,l=a.querySelector(".phone-code")?.innerText,h=l&&l.replace(/\D/g,"");this.value=b(u),this.lastCountrySelected=y.find(p=>p.default_name===u),this.lastCountryCodeSelected=h&&this.lastCountrySelected.country_codes.find(p=>p.country_code===h),this.options.onCountryChange?.(this.lastCountrySelected,this.lastCountryCodeSelected),this.hidePicker()},L?.(),this.liMap=new Map,this.container.classList.add("input-select");const s=this.selectWrapper=document.createElement("div");s.classList.add("select-wrapper","z-depth-3","hide");const t=document.createElement("span");t.classList.add("arrow","arrow-down"),this.container.append(t);const o=document.createElement("ul");s.appendChild(o),new J(s);let n=()=>{n=null,y.forEach(a=>{if(e.noPhoneCodes&&V.has(a.iso2))return;const u=z(a.iso2),c=[];for(let l=0,h=Math.min(a.country_codes.length,e.noPhoneCodes?1:1/0);l<h;++l){const p=a.country_codes[l],m=document.createElement("li"),C=X(u);if(j){const g=document.createElement("span");x(g,C),m.append(g)}else x(m,C);const k=b(a.default_name);if(k.dataset.defaultName=a.default_name,m.append(k),!e.noPhoneCodes){const g=document.createElement("span");g.classList.add("phone-code"),g.innerText="+"+p.country_code,m.appendChild(g)}c.push(m),o.append(m)}this.liMap.set(a.iso2,c)}),o.addEventListener("mousedown",a=>{if(a.button!==0)return;const u=q(a.target,"LI");this.selectCountryByTarget(u)}),this.container.appendChild(s)};n(),this.input.addEventListener("focus",a=>{n?n():y.forEach(u=>{const c=this.liMap.get(u.iso2);c&&c.forEach(l=>l.style.display="")}),clearTimeout(this.hideTimeout),this.hideTimeout=void 0,s.classList.remove("hide"),s.offsetWidth,s.classList.add("active"),this.select(),U({container:S(this.container,"scrollable-y"),element:this.input,position:"start",margin:4}),setTimeout(()=>{r||(document.addEventListener("mousedown",i,{capture:!0}),r=!0)},0)});let r=!1;const i=a=>{S(a.target,"input-select")||a.target!==this.input&&(this.hidePicker(),document.removeEventListener("mousedown",i,{capture:!0}),r=!1)},f=a=>{const u=a.key;if(a.ctrlKey||u==="Control")return!1;const c=new Set(Y(this.value).map(l=>l.iso2));this.liMap.forEach((l,h)=>{l.forEach(p=>p.style.display=c.has(h)?"":"none")}),c.size?c.size===1&&u==="Enter"&&(O(a),this.selectCountryByTarget(this.liMap.get([...c][0])[0])):y.forEach(l=>{const h=this.liMap.get(l.iso2);h&&h.forEach(p=>p.style.display="")})};this.input.addEventListener("keyup",f),this.input.addEventListener("keydown",a=>{a.key==="Enter"&&f(a)}),t.addEventListener("mousedown",a=>{this.input.matches(":focus")?(this.hidePicker(),this.input.blur()):(a.cancelBubble=!0,a.preventDefault(),this.input.focus())})}getSelected(){return{country:this.lastCountrySelected,code:this.lastCountryCodeSelected}}selectCountryByIso2(e){this.selectCountryByTarget(this.liMap.get(e)[0])}override(e,s,t){this.setValueSilently(e?b(e.default_name):t),this.lastCountrySelected=e,this.lastCountryCodeSelected=s,this.options.onCountryChange?.(this.lastCountrySelected,this.lastCountryCodeSelected)}}export{ne as C,ie as T,ae as a,Y as b,Q as f,G as g};
//# sourceMappingURL=countryInputField-Dm2t4SUk.js.map