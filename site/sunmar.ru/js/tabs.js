import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	class CoralTabs {
		constructor(element) {
			this.tabsNavigationButtons = element.querySelectorAll(
				'.tab-navigation-btn'
			)
			this.contentPanels = element.querySelectorAll('.content-panel')
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

	const tabs = document.querySelector('.tabs')
	new CoralTabs(tabs)
	const cardGrid = document.querySelectorAll('ul.card-grid')
	cardGrid.forEach(el => {
		const cardItems = el.querySelectorAll('ul.card-grid li')
		el.style.setProperty('--elements', cardItems.length)
	})
})
