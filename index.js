const bar = document.getElementById('bar')
const nav = document.querySelector('.navbar-items')
const close = document.getElementById('close')


bar.addEventListener('click',()=>{
    nav.style.right = '0px';
})

close.addEventListener('click',()=>{
    nav.style.right = '-300px';
})