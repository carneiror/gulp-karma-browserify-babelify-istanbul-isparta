# gulp, karma, browserify, babelify, istanbul and isparta

This is a sample project to show that this [wombo-combo](https://www.youtube.com/watch?v=pD_imYhNoQ4) only work with babel 5.

## Babelify and isparta with babel-core 5

```js
$ npm install
$ gulp test
$ open reports/html/index.html
```
The source scripts are transpiled correctly and the coverage report is using the original sources correctly

![](https://raw.githubusercontent.com/carneiror/gulp-karma-browserify-babelify-istanbul-isparta/master/with-babel-5/example.png)

## Babelify and isparta with babel-core 6

```js
$ npm install
$ gulp test
$ open reports/html/index.html
```

The source scripts are transpiled correctly but the coverage is 100% (which is impossible)

![](https://raw.githubusercontent.com/carneiror/gulp-karma-browserify-babelify-istanbul-isparta/master/with-babel-6/example.png)
