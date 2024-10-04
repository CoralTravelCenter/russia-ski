import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const TABS_NAVIGATION = document.querySelectorAll('.tab-navigation-btn')
	const TABS_CONTENT = document.querySelectorAll('.content-panel')

	const onTabNavigationButtonClick = (e, idx) => {
		TABS_NAVIGATION.forEach(btn => {
			btn.classList.remove('js-active')
		})
		TABS_CONTENT.forEach(panel => {
			panel.classList.add('js-hidden')
		})
		e.target.classList.add('js-active')
		TABS_CONTENT[idx].classList.remove('js-hidden')
	}

	TABS_NAVIGATION.forEach((btn, idx) => {
		btn.addEventListener('click', e => onTabNavigationButtonClick(e, idx))
	})
})
