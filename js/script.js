document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('#navbar')
    const navHref = document.querySelectorAll('.nav-link')
    const navMark = document.querySelector('#navbarNavAltMarkup')

    function addShadow(){
        if (window.scrollY >= 60){
            nav.classList.add('shadow-bg')
        }else{
            nav.classList.remove('shadow-bg')
        }
    }   


    navHref.forEach(element => element.addEventListener('click', () =>
        navMark.classList.remove('show')
    ))

    window.addEventListener('scroll', addShadow)
})


