import heroComponent from './hero.component';

const heroModule = angular.module('app.hero', []);

// loading components, services, directives, specific to this module.
heroModule.component('appHero', heroComponent);

// export this module
export default heroModule;
