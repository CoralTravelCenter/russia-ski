import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	class CoralTabs {
		constructor(region) {
			this.tabsNavigationButtons = region.querySelectorAll(
				'.tab-navigation-btn'
			)
			this.contentPanels = region.querySelectorAll('.content-panel')
			this.tabHandler()
		}

		tabHandler() {
			const onTabNavigationButtonClick = (e, idx) => {
				this.tabsNavigationButtons.forEach(btn => {
					btn.classList.remove('js-active')
				})
				this.contentPanels.forEach(panel => {
					panel.classList.add('js-hidden')
				})
				e.target.classList.add('js-active')
				e.target.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
					inline: 'start',
				})
				this.contentPanels[idx].classList.remove('js-hidden')
			}

			this.tabsNavigationButtons.forEach((btn, idx) => {
				btn.addEventListener('click', e => onTabNavigationButtonClick(e, idx))
			})
		}
	}

	document.querySelectorAll('[data-region]').forEach(el => {
		return new CoralTabs(el)
	})

	const cardGrid = document.querySelectorAll('ul.card-grid')
	cardGrid.forEach(el => {
		const cardItems = el.querySelectorAll('ul.card-grid li')
		el.style.setProperty('--elements', cardItems.length)
	})
})
