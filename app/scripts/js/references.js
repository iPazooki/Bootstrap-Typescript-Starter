requirejs.config({
  urlArgs: "v1.0", // Increment with every release to refresh browser cache.
  baseUrl: "./../node_modules/", // comes from launchsettings
  paths: {
    // JQuery:
    jquery: "jquery/dist/jquery",

    // Plugins:
    lodash: "lodash/lodash.min",

    // Bootstrap
    "@popperjs/core": "@popperjs/core/dist/umd/popper.min",
    bootstrap: "bootstrap/dist/js/bootstrap.min",
  },
  map: {
    "*": {
      app: "../app/scripts/js",
    },
  },
  shim: {
    bootstrap: ["jquery", "@popperjs/core", "lodash"],
  },
});

requirejs([
  "app/appPage",
  // JQuery:
  "jquery",
  // Bootstrap and plugins:
  "@popperjs/core",
  "bootstrap",
  "lodash",
]);
