const navbar = document.querySelector('.navbar')
const menuMobile = document.getElementById('mobile')


menuMobile.onclick = () => {
    navbar.classList.toggle('active');
}