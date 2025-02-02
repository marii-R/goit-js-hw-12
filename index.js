import{a as g,S as h,i as a}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const y=s=>s.map(e=>{const r=e.tags.split(", ").slice(0,3).join(", ");return`
        <li class="gallery-card">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-img"
              src="${e.webformatURL}"
              alt="${r}" 
              loading="lazy"
            />
            <div class="info">
              <div class="info-list">
                <span class="info-item">Likes</span>
                <span class="info-item-value">${e.likes}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Views</span>
                <span class="info-item-value">${e.views}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Comments</span>
                <span class="info-item-value">${e.comments}</span>
              </div>
              <div class="info-list">
                <span class="info-item">Downloads</span>
                <span class="info-item-value">${e.downloads}</span>
              </div>
            </div>
          </a>
        </li>`}).join(""),v="48549557-eddb482997c8ef9e0172f80ee",L="https://pixabay.com/api/",b=15,w=async(s,e=1)=>{try{return(await g.get(L,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:e}})).data}catch(r){throw console.error("Error fetching data:",r),r}},S=document.querySelector(".search-form"),C=document.querySelector(".search-input"),u=document.querySelector(".gallery"),m=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let E=new h(".gallery a",{captionsData:"alt",captionDelay:250}),c="",i=1;const P=15;let f=0;const p=async()=>{try{m.classList.add("active"),l.classList.add("is-hidden");const s=await w(c,i);if(s.hits.length===0){a.info({message:"Sorry, no images found. Try another search!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"});return}u.insertAdjacentHTML("beforeend",y(s.hits)),E.refresh(),f=s.totalHits,i*P>=f?a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"}):l.classList.remove("is-hidden"),R()}catch{a.error({message:"Something went wrong, please try again later.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#ff4141"})}finally{m.classList.remove("active")}};S.addEventListener("submit",s=>{if(s.preventDefault(),c=C.value.trim(),!c){a.warning({message:"Please enter a search term.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#9090ff"});return}u.innerHTML="",i=1,f=0,p()});l.addEventListener("click",()=>{i+=1,p()});const R=()=>{const s=document.querySelector(".gallery-card");if(s){const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}};
//# sourceMappingURL=index.js.map
