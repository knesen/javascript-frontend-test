window.addEventListener('scroll', () => {
    const goToTop = document.querySelector("#goto-top")
    const header = document.querySelector("header")

    if (window.scrollY > 60) {
        goToTop.classList.remove('hidden')
        header.classList.add('sticky')
    }
    else {
        goToTop.classList.add('hidden')
        header.classList.remove('sticky')

    }
})

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

