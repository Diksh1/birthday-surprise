const openBtn = document.getElementById('openBtn');
const welcome = document.getElementById('welcome');
const surprise = document.getElementById('surprise');
const extraBtn = document.getElementById('extraBtn');
const finalNote = document.getElementById('final');
const hearts = document.getElementById('hearts');

function makeHeart(){
  const el=document.createElement('span');
  el.className='heart';
  el.textContent=["🎂", "🎁", "🎉", "💝", "✨"][Math.floor(Math.random()*5)];
  el.style.left=`${Math.random()*100}%`;
  el.style.fontSize=`${14+Math.random()*22}px`;
  el.style.animationDuration=`${6+Math.random()*6}s`;
  hearts.appendChild(el);
  window.setTimeout(()=>el.remove(),12500);
}
function heartBurst(count=24){for(let i=0;i<count;i++)window.setTimeout(makeHeart,i*70)}
openBtn.addEventListener('click',()=>{
  welcome.classList.add('hidden');
  surprise.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
  heartBurst(30);
});
extraBtn.addEventListener('click',()=>{
  finalNote.classList.remove('hidden');
  heartBurst(38);
  extraBtn.textContent='Sending you a million hugs 💗';
});
for(let i=0;i<7;i++)window.setTimeout(makeHeart,i*800);
window.setInterval(makeHeart,1900);
