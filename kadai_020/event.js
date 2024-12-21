const btn = document.getElementById('btn');

const firsttext = document.getElementById('text');

btn.addEventListener('click',()=>{
  const text2 =document.createElement('text');

  text2.textContent = 'ボタンをクリックしました！';

  firsttext.removeChild(firsttext.firstChild);

  firsttext.appendChild(text2);

});