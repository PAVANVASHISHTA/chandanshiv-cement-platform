const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const header=$('#header'), menu=$('#menu'), nav=$('#nav'), progress=$('#progress');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
$$('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>{const y=window.scrollY;header.classList.toggle('scrolled',y>30);const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max?y/max*100:0}%`},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));
const modal=$('#modal'), title=$('#modalTitle');
$$('[data-product]').forEach(btn=>btn.addEventListener('click',()=>{title.textContent=btn.dataset.product;modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
$('#close')?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#modalLink')?.addEventListener('click',closeModal);
$('#form')?.addEventListener('submit',e=>{e.preventDefault();const message=$('#message');message.textContent='Thank you — your enquiry has been captured in this demo. Connect a backend or email service for real delivery.';message.style.display='block';e.target.reset()});
$('#year').textContent=new Date().getFullYear();
$$('.btn').forEach(btn=>{btn.addEventListener('pointermove',e=>{if(matchMedia('(pointer:fine)').matches){const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`}});btn.addEventListener('pointerleave',()=>btn.style.transform='')});
