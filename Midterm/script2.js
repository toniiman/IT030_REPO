const bar =document.getElementById('bar');
const nav =document.getElementById('navbar');
const close =document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('show');
    }); 
}

if (close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('show');
    }); 
} 