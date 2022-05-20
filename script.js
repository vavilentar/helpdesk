const navLinks = document.querySelectorAll('.nav-link');
const navItems = document.querySelectorAll('.nav-item');
const menuWindows = document.querySelectorAll('.menus');
const sortLinks = document.querySelectorAll('.sorting');
const sideBarLinks = document.querySelectorAll('.ticket-sidebar-filter')
const ticketsList = document.querySelectorAll('.tickets');
const filterLinks = document.querySelectorAll('.filter-link');
const ticketsSumm = document.querySelectorAll('.ticket-card');
const inboxNumber = document.querySelector('.inbox-summ');

inboxNumber.innerHTML = ticketsSumm.length;

navLinks.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		navItems.forEach((item) => {
			item.classList.remove('nav-item-active')
		})
		menuWindows.forEach((item) => {
			item.classList.remove('menu-active')
		})
		sortLinks.forEach((item) => {
			item.classList.remove('sort-active')
		})
		navItems[index].classList.add('nav-item-active')
		menuWindows[index].classList.add('menu-active')
		sortLinks[index].classList.add('sort-active')
	})
})

sortLinks.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
	})

})

sideBarLinks.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		ticketsList.forEach((item) => {
			item.classList.remove('tickets-sorted')
		})
		filterLinks.forEach((item) => {
			item.classList.remove('filter-link-active')
		})
		ticketsList[index].classList.add('tickets-sorted')
		filterLinks[index].classList.add('filter-link-active')
	})
})