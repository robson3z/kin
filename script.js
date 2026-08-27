const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const items = [...document.querySelectorAll('.testimonial')];
const dots = [...document.querySelectorAll('.dot')];
let current = 0;

function showTestimonial(index){
  current = (index + items.length) % items.length;
  items.forEach((el,i)=>el.classList.toggle('active', i === current));
  dots.forEach((el,i)=>el.classList.toggle('active', i === current));
}
document.querySelector('.next')?.addEventListener('click', () => showTestimonial(current + 1));
document.querySelector('.prev')?.addEventListener('click', () => showTestimonial(current - 1));
dots.forEach((dot,i)=>dot.addEventListener('click',()=>showTestimonial(i)));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e=>{
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

window.addEventListener('scroll', ()=>{
  const header = document.querySelector('.site-header');
  header.style.boxShadow = window.scrollY > 20 ? '0 8px 35px rgba(0,0,0,.25)' : 'none';
});

showTestimonial(0);
