const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(()=>{
    const text2 =document.createElement('text');

    text2.textContent = 'ボタンをクリックしました！';
  
    text.removeChild(text.firstChild);
  
    text.appendChild(text2);
  
  },2000);
});
