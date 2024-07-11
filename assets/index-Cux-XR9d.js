import{R as r,j as e,c as j}from"./vendor-BI3PR7mN.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();function g(){let[s,n]=r.useState(!1),[l,c]=r.useState(!1);const t=()=>{l||c(!0),n(!s)};return e.jsxs("header",{className:"header",children:[e.jsx("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),e.jsx("button",{className:"header__menu","aria-expanded":s?"true":"false",onClick:t,children:e.jsx("span",{className:"header__menu-text a11y-hidden",children:s?"Закрыть меню":"Открыть меню"})}),e.jsxs("ul",{className:"header__links"+(s?" header__links_opened":"")+(l?" header__links-toggled":""),children:[e.jsx("li",{className:"header__item",children:e.jsx("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),e.jsx("li",{className:"header__item",children:e.jsx("a",{className:"header__link",href:"/devices",children:"Устройства"})}),e.jsx("li",{className:"header__item",children:e.jsx("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}const d={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let s=0;s<6;++s)d.all.items=[...d.all.items,...d.all.items];const b=Object.keys(d);function o(s){const n=r.useRef(),{onSize:l}=s;return r.useEffect(()=>{const c=n.current.offsetWidth,t=n.current.offsetHeight;l&&l({width:c,height:t})}),e.jsx("li",{ref:n,className:"event"+(s.slim?" event_slim":""),children:e.jsxs("button",{className:"event__button",children:[e.jsx("span",{className:`event__icon event__icon_${s.icon}`,role:"img","aria-label":s.iconLabel}),e.jsx("h4",{className:"event__title",children:s.title}),s.subtitle&&e.jsx("span",{className:"event__subtitle",children:s.subtitle})]})})}function p(){const s=r.useRef(),n=r.useRef(!1),[l,c]=r.useState(""),[t,a]=r.useState(!1);r.useEffect(()=>{!l&&!n.current&&(n.current=!0,c(new URLSearchParams(location.search).get("tab")||"all"))},[l]);const h=i=>{c(i.target.value)};let m=[];const f=i=>{m=[...m,i]};r.useEffect(()=>{const i=m.reduce((u,_)=>u+_.width,0);a(i>s.current.offsetWidth)},[m]);const x=()=>{const i=s.current.querySelector(".section__panel:not(.section__panel_hidden)");i&&i.scrollTo({left:i.scrollLeft+400,behavior:"smooth"})};return e.jsxs("main",{className:"main",children:[e.jsxs("section",{className:"section main__general",children:[e.jsx("h2",{className:"section__title section__title-header section__main-title",children:"Главное"}),e.jsxs("div",{className:"hero-dashboard",children:[e.jsxs("div",{className:"hero-dashboard__primary",children:[e.jsx("h3",{className:"hero-dashboard__title",children:"Привет, Геннадий!"}),e.jsx("p",{className:"hero-dashboard__subtitle",children:"Двери и окна закрыты, сигнализация включена."}),e.jsxs("ul",{className:"hero-dashboard__info",children:[e.jsxs("li",{className:"hero-dashboard__item",children:[e.jsx("div",{className:"hero-dashboard__item-title",children:"Дома"}),e.jsxs("div",{className:"hero-dashboard__item-details",children:["+23",e.jsx("span",{className:"a11y-hidden",children:"°"})]})]}),e.jsxs("li",{className:"hero-dashboard__item",children:[e.jsx("div",{className:"hero-dashboard__item-title",children:"За окном"}),e.jsxs("div",{className:"hero-dashboard__item-details",children:["+19",e.jsx("span",{className:"a11y-hidden",children:"°"}),e.jsx("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"})]})]})]})]}),e.jsxs("ul",{className:"hero-dashboard__schedule",children:[e.jsx(o,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),e.jsx(o,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),e.jsx(o,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})]})]})]}),e.jsxs("section",{className:"section main__scripts",children:[e.jsx("h2",{className:"section__title section__title-header",children:"Избранные сценарии"}),e.jsxs("ul",{className:"event-grid",children:[e.jsx(o,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),e.jsx(o,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),e.jsx(o,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),e.jsx(o,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),e.jsx(o,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})]})]}),e.jsxs("section",{className:"section main__devices",children:[e.jsxs("div",{className:"section__title",children:[e.jsx("h2",{className:"section__title-header",children:"Избранные устройства"}),e.jsx("select",{className:"section__select",defaultValue:"all",onInput:h,children:b.map(i=>e.jsx("option",{value:i,children:d[i].title},i))}),e.jsx("ul",{role:"tablist",className:"section__tabs",children:b.map(i=>e.jsx("li",{role:"tab","aria-selected":i===l?"true":"false",tabIndex:i===l?"0":void 0,className:"section__tab"+(i===l?" section__tab_active":""),id:`tab_${i}`,"aria-controls":`panel_${i}`,onClick:()=>c(i),children:d[i].title},i))})]}),e.jsxs("div",{className:"section__panel-wrapper",ref:s,children:[b.map(i=>e.jsx("div",{role:"tabpanel",className:"section__panel"+(i===l?"":" section__panel_hidden"),"aria-hidden":i===l?"false":"true",id:`panel_${i}`,"aria-labelledby":`tab_${i}`,children:e.jsx("ul",{className:"section__panel-list",children:d[i].items.map((u,_)=>e.jsx(o,{...u,onSize:f},_))})},i)),t&&e.jsx("div",{className:"section__arrow",onClick:x})]})]})]})}j.createRoot(document.getElementById("app")).render(e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(p,{})]}));
