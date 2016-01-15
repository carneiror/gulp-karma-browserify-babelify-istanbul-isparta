import 'angular';
import ExampleServiceProvider from './example-service-provider.js'

angular
    .module('example', [])
    .provider('ExampleService', ExampleServiceProvider);
