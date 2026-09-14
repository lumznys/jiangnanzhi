const header=document.querySelector<HTMLElement>('#site-header');
const toggle=document.querySelector<HTMLButtonElement>('#menu-toggle');
const menu=document.querySelector<HTMLElement>('#mobile-menu');
const updateHeader=()=>header?.classList.toggle('is-scrolled',window.scrollY>50);
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});
function setMenu(open:boolean){
 if(!menu||!toggle)return;
 menu.hidden=!open;
 toggle.setAttribute('aria-expanded',String(open));
 toggle.setAttribute('aria-label',open?'关闭导航菜单':'打开导航菜单');
}
toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
document.addEventListener('click',event=>{if(event.target instanceof Node&&!header?.contains(event.target))setMenu(false)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu?.hidden){setMenu(false);toggle?.focus()}});
window.matchMedia('(min-width:1024px)').addEventListener('change',event=>{if(event.matches)setMenu(false)});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target)}}),{threshold:.2});
 document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element=>{if(element.getBoundingClientRect().top>innerHeight){element.classList.add('reveal-pending');element.style.transitionDelay=Math.min(Number(element.dataset.delay)||0,300)+'ms';observer.observe(element)}});
}
