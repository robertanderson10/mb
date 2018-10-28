export default class CalculatorController {
	constructor($log, calculatorService) {
		"ngInject";
		this.$log = $log;
		this.calculatorService = calculatorService;
	}

	$onInit = () => {
		this.calculatorService.get().then(calculators => {
			this.calculators = calculators;
		});
		this.ccSpend = 0;
		this.totalPoints = 8000;
	};

	ccSpendChange = () => {
		this.totalPoints = 8000;
		if(!isNaN(parseInt(this.ccSpend))){
			if(this.ccSpend > 0){
				this.totalPoints = (this.ccSpend * 2 * 12) + 8000;
			}
		} 
	};
}
