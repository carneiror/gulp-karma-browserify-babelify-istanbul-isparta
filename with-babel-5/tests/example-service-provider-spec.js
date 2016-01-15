describe('ExampleService', function () {
    'use strict';

    var victim;
    var victimProvider;

    beforeEach(function () {
        module('example');

        module(['ExampleServiceProvider',
            function (exampleServiceProvider) {
                victimProvider = exampleServiceProvider;
            }]);
    });

    beforeEach(inject(function ($injector) {
        victim = $injector.get('ExampleService');
    }));

    it('randomProviderMethod', function () {
        var result = victimProvider.randomProviderMethod(10, 20);

        expect(result).toBe(30);
    });

    it('randomProviderMethod', function () {
        var result = victim.randomServiceMethod(20, 10);

        expect(result).toBe(10);
    });

});
