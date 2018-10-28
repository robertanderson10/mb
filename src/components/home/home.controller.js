export default class HomeController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.calculatorHeading = 'Calculate your rewards points';
		this.faqHeading = 'Frequently Asked Questions';

		this.$log.info('Activated Home View.');
	};
}
