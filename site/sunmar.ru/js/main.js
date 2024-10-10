import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	$('.disclosable .toggler').on('click', function () {
		return $(this).toggleClass('open')
	})
})
