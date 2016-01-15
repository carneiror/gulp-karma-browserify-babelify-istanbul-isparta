function ExampleServiceProvider() {

    var VALUES_REGEX = /\{[^\}]+\}/;

    this.randomProviderMethod = (a,b) => a + b;

    if (false) {
        return false;
    }

    this.$get = () => {

        var randomServiceMethod = (a, b) => a - b;

        return {
            randomServiceMethod: randomServiceMethod
        }
    };
}

ExampleServiceProvider.$inject = [];

export default ExampleServiceProvider;
