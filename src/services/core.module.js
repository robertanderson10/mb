import routerHelperService from './router-helper/router-helper.service';
import calculatorService from './calculator/calculator.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('calculatorService', calculatorService);

export default coreModule;
