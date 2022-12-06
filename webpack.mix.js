const mix = require('laravel-mix');
// const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .setResourceRoot('../') // Turns assets paths in css relative to css file
    .vue()
    .sass('resources/sass/app.scss', 'css/app.css')
    .js('resources/js/app.js', 'js/app.js')
    .extract([
        'alpinejs',
        'jquery',
        'bootstrap',
        'popper.js',
        'axios',
        'sweetalert2',
        'lodash'
    ])
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({
        devtool: 'inline-source-map'
    });
}

// Alias path
mix.webpackConfig({
  resolve: {
    alias: {
      // "@repository": path.resolve(__dirname, 'resources/js/core/api'),
      // "@plugins": path.resolve(__dirname, 'resources/js/core/plugins'),
      // "@ziggy": path.resolve('vendor/tightenco/ziggy/dist/vue'),
      // "@company_store": path.resolve('resources/js/company/store'),
    }
  }
});
