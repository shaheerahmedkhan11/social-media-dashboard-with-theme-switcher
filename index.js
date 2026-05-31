const toggle = document.querySelector('.toggle input');

toggle.addEventListener('change', ()=> {
    document.body.classList.toggle('dark');
})