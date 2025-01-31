import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=r=>r.map(s=>{const o=s.tags.split(", ").slice(0,3).join(", ");return`
        <li class="gallery-card">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img
              class="gallery-img"
              src="${s.webformatURL}"
              alt="${o}" 
              loading="lazy"
            />
            <div class="info">
              <div class="info-list">
                <span class="info-item">Likes</span>
                <span class="info-item-value">${s.likes}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Views</span>
                <span class="info-item-value">${s.views}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Comments</span>
                <span class="info-item-value">${s.comments}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Downloads</span>
                <span class="info-item-value">${s.downloads}</span>
              </div>
            </div>
          </a>
        </li>`}).join(""),d="48549557-eddb482997c8ef9e0172f80ee",u=r=>{const s=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},p=document.querySelector(".search-form"),g=document.querySelector(".search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery"),i=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",r=>{r.preventDefault();const s=g.value.trim();if(!s){l.warning({message:"Please enter a search term.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#9090ff"});return}c.innerHTML="",i.classList.add("active"),u(s).then(o=>{if(o.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"}),i.classList.remove("active");return}c.insertAdjacentHTML("beforeend",m(o.hits));const e=[...c.querySelectorAll(".gallery-img")].slice(0,10);Promise.all(e.map(t=>new Promise(a=>t.onload=a))),i.classList.remove("active"),h.refresh()}).catch(o=>{i.classList.remove("active"),l.error({message:"Something went wrong, please try again later.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"}),console.error("Error fetching data:",o)})});
//# sourceMappingURL=index.js.map
