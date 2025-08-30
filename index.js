import { info } from "./info.js";

function renderCards(info){
  let html=``;
  info.forEach((item)=>{
    html+=`
      <div class="card">
        <div class="front">
          <p class="heading">${item.name}</p>
          <img
          src=${item.image}
          width="100"
          height="70"
          alt=${item.name}>
        </div>
        <div class="back">
          <p>CONTINENT: ${item.continent}</p>
          <p>FACTS:</p>
          <ul>
            <li>${item.fact1}</li>
            <li>${item.fact2}</li>
            <li>${item.fact3}</li>
            <li>${item.fact4}</li>
          </ul>
        </div>
      </div>
    `;
  });
  document.querySelector('.cards').innerHTML=html;
}

renderCards(info);

document.querySelector('.search').addEventListener('input',(event)=>{
  if(document.querySelector('.search').value===''){
    renderCards(info);
    return;
  }
  const value=event.target.value.toLowerCase();//event.target is like document.querySelector('.search')
  const filtered=info.filter((item)=>{
    return item.name.toLowerCase().includes(value) || item.continent.toLowerCase().includes(value);
  });
  renderCards(filtered);
});

let toggle=JSON.parse(localStorage.getItem('toggle')) || 0;

if (toggle) document.body.classList.add('dark-mode');

document.querySelector('.theme-toggle').addEventListener('click',()=>{
  if(!toggle){
    document.body.classList.add('dark-mode');
    toggle=1;
  }
  else{
    document.body.classList.remove('dark-mode');
    toggle=0;
  }
  localStorage.setItem('toggle',JSON.stringify(toggle));
});