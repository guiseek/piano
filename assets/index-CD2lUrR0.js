var p=(a,t,s)=>{if(!t.has(a))throw TypeError("Cannot "+s)};var K=(a,t,s)=>(p(a,t,"read from private field"),s?s.call(a):t.get(a)),c=(a,t,s)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,s)},m=(a,t,s,y)=>(p(a,t,"write to private field"),y?y.call(a,s):t.set(a,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))y(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const i of f.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&y(i)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function y(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();const u=(a,t={},...s)=>{let y;if(typeof a=="string")y=document.createElement(a);else try{y=new a(t)}catch{y=a(t)}y.append(...s.flatMap(d=>typeof d=="string"?new Text(d):d));for(const[d,f]of Object.entries(t??{}))d.startsWith("data-")&&(y.dataset[d.replace(/data-/,"")]=f);return Object.assign(y,t)};class A extends DocumentFragment{}var n,l,h;class C{constructor(){c(this,n,{Tab:!1,KeyQ:!1,KeyW:!1,KeyE:!1,KeyR:!1,KeyT:!1,KeyY:!1,KeyU:!1,KeyI:!1,KeyO:!1,KeyP:!1,BracketLeft:!1,BracketRight:!1,Backslash:!1,KeyA:!1,KeyS:!1,KeyD:!1,KeyF:!1,KeyG:!1,KeyH:!1,KeyJ:!1,KeyK:!1,KeyL:!1,Semicolon:!1,Quote:!1,Enter:!1,ShiftLeft:!1,KeyZ:!1,KeyX:!1,KeyC:!1,KeyV:!1,KeyB:!1,KeyN:!1,KeyM:!1,Comma:!1,Period:!1,Slash:!1,ShiftRight:!1});c(this,l,new Map);c(this,h,new Map);onkeydown=({code:t})=>{K(this,n)[t]=!0},onkeyup=({code:t})=>{K(this,n)[t]=!1}}addKey(t,...s){if(Array.from(K(this,l).values()).some(y=>s.every(d=>y.includes(d))))throw new Error(`Keycodes ${s} already used`);K(this,l).set(t,s)}on(t,s){const y=K(this,h).get(t)??[];K(this,h).set(t,[...y,s])}init(){const t=setInterval(()=>{for(const[y,d]of K(this,l).entries()){const i=d.includes("ShiftLeft")?K(this,n).ShiftLeft:!K(this,n).ShiftLeft;if(d.every(o=>K(this,n)[o]&&i))for(const o of K(this,h).get(y)??[])o()}},61);return{cancel:()=>clearInterval(t)}}}n=new WeakMap,l=new WeakMap,h=new WeakMap;const e=new C,B=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],v=(a=0)=>440*Math.pow(2,a/12),D=(a,t)=>{let s=0,y=-2;return Array(t-a).fill("").map((d,f)=>{const i=(a+f)%12,o=B[i<0?12+i:i],L=Math.ceil(4+(a+f)/12);return f===0&&o==="C"&&(s=-3),o.includes("#")?(s+=3,["C#","F#"].includes(o)&&(s+=3)):y+=3,{note:o,freq:v(a+f),octave:o==="B"||o==="A#"?L-1:L,offset:o.includes("#")?s:y}})};var r,S,g;class F{constructor(t,s){c(this,S);c(this,r,void 0);this.note=t,this.octave=s,m(this,r,new Audio(K(this,S,g)))}play(){K(this,r).paused||(K(this,r).currentTime=.02),K(this,r).play()}}r=new WeakMap,S=new WeakSet,g=function(){return`/notes/${this.note.replace(/#/,"-")+this.octave}.ogg`};const G=({metadata:a})=>{const{freq:t,note:s,octave:y,offset:d}=a,f=new F(s,y),i=u("button",{ariaLabel:s+y,"data-note":s+y,"data-freq":t,style:"--gcs:"+d,onclick:()=>f.play()});return e.on(`${s}${y}`,()=>{i.focus(),i.click()}),i},k=()=>{const a=D(-33,28);return e.addKey("C2","KeyQ"),e.addKey("C#2","KeyQ","ShiftLeft"),e.addKey("D2","KeyW"),e.addKey("D#2","KeyW","ShiftLeft"),e.addKey("E2","KeyE"),e.addKey("F2","KeyR"),e.addKey("F#2","KeyR","ShiftLeft"),e.addKey("G2","KeyT"),e.addKey("G#2","KeyT","ShiftLeft"),e.addKey("A2","KeyY"),e.addKey("A#2","KeyY","ShiftLeft"),e.addKey("B2","KeyU"),e.addKey("C3","KeyI"),e.addKey("C#3","KeyI","ShiftLeft"),e.addKey("D3","KeyO"),e.addKey("D#3","KeyO","ShiftLeft"),e.addKey("E3","KeyP"),e.addKey("F3","BracketLeft"),e.addKey("F#3","BracketLeft","ShiftLeft"),e.addKey("G3","BracketRight"),e.addKey("G#3","BracketRight","ShiftLeft"),e.addKey("A3","Backslash"),e.addKey("A#3","Backslash","ShiftLeft"),e.addKey("B3","KeyA"),e.addKey("C4","KeyS"),e.addKey("C#4","KeyS","ShiftLeft"),e.addKey("D4","KeyD"),e.addKey("D#4","KeyD","ShiftLeft"),e.addKey("E4","KeyF"),e.addKey("F4","KeyG"),e.addKey("F#4","KeyG","ShiftLeft"),e.addKey("G4","KeyH"),e.addKey("G#4","KeyH","ShiftLeft"),e.addKey("A4","KeyJ"),e.addKey("A#4","KeyJ","ShiftLeft"),e.addKey("B4","KeyK"),e.addKey("C5","KeyL"),e.addKey("C#5","KeyL","ShiftLeft"),e.addKey("D5","Semicolon"),e.addKey("D#5","Semicolon","ShiftLeft"),e.addKey("E5","Quote"),e.addKey("F5","KeyZ"),e.addKey("F#5","KeyZ","ShiftLeft"),e.addKey("G5","KeyX"),e.addKey("G#5","KeyX","ShiftLeft"),e.addKey("A5","KeyC"),e.addKey("A#5","KeyC","ShiftLeft"),e.addKey("B5","KeyV"),e.addKey("C6","KeyB"),e.addKey("C#6","KeyB","ShiftLeft"),e.addKey("D6","KeyN"),e.addKey("D#6","KeyN","ShiftLeft"),e.addKey("E6","KeyM"),e.addKey("F6","Comma"),e.addKey("F#6","Comma","ShiftLeft"),e.addKey("G6","Period"),e.addKey("G#6","Period","ShiftLeft"),e.addKey("A6","Slash"),e.addKey("A#6","Slash","ShiftLeft"),e.init(),u(A,null,u("div",{className:"synth"},u("div",{id:"kb88",className:"kb kb--61"},a.map(t=>u(G,{metadata:t})))))};container.append(k());
