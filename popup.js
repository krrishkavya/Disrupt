const menubtn=document.querySelector('.threeLine');
const popupMenu=document.querySelector('.popupMenu');
const closeBtn=document.querySelector('.closeBtn');

menubtn.addEventListener('click',()=>{
    popupMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  popupMenu.classList.remove('active');
});
