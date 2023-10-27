const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.navbar-collapse')
const navItems = nav.querySelectorAll('.navbar-nav .nav-link')

// --------------------------------------------

const handleYear = () => {
	const d = new Date()
	const date = d.getFullYear()
	footerYear.textContent = date
}

// --------------------------------------------

document.addEventListener('click', () => {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show')
	}

	navItems.forEach(el => {
		el.classList.remove('active')
	})
})

// --------------------------------------------

handleYear()
