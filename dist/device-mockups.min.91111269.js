// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"device-mockups/device-mockups.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./macbook/macbook.png":[["macbook.5ecefbea.png","device-mockups/macbook/macbook.png"],"device-mockups/macbook/macbook.png"],"./imac/imac.png":[["imac.ab04d3b1.png","device-mockups/imac/imac.png"],"device-mockups/imac/imac.png"],"./macbook_2015/grey.png":[["grey.676d3516.png","device-mockups/macbook_2015/grey.png"],"device-mockups/macbook_2015/grey.png"],"./macbook_2015/silver.png":[["silver.8ccaa491.png","device-mockups/macbook_2015/silver.png"],"device-mockups/macbook_2015/silver.png"],"./macbook_2015/gold.png":[["gold.bf12f325.png","device-mockups/macbook_2015/gold.png"],"device-mockups/macbook_2015/gold.png"],"./iphone5/iphone5_port_black.png":[["iphone5_port_black.37da787f.png","device-mockups/iphone5/iphone5_port_black.png"],"device-mockups/iphone5/iphone5_port_black.png"],"./iphone5/iphone5_land_black.png":[["iphone5_land_black.fee9e66b.png","device-mockups/iphone5/iphone5_land_black.png"],"device-mockups/iphone5/iphone5_land_black.png"],"./iphone5/iphone5_port_white.png":[["iphone5_port_white.feb618f8.png","device-mockups/iphone5/iphone5_port_white.png"],"device-mockups/iphone5/iphone5_port_white.png"],"./iphone5/iphone5_land_white.png":[["iphone5_land_white.a7f3a804.png","device-mockups/iphone5/iphone5_land_white.png"],"device-mockups/iphone5/iphone5_land_white.png"],"./iphone_se/iphone_se_port_black.png":[["iphone_se_port_black.2961d6da.png","device-mockups/iphone_se/iphone_se_port_black.png"],"device-mockups/iphone_se/iphone_se_port_black.png"],"./iphone_se/iphone_se_land_black.png":[["iphone_se_land_black.3ce54eeb.png","device-mockups/iphone_se/iphone_se_land_black.png"],"device-mockups/iphone_se/iphone_se_land_black.png"],"./iphone_se/iphone_se_port_white.png":[["iphone_se_port_white.f4db7ed4.png","device-mockups/iphone_se/iphone_se_port_white.png"],"device-mockups/iphone_se/iphone_se_port_white.png"],"./iphone_se/iphone_se_land_white.png":[["iphone_se_land_white.793eae45.png","device-mockups/iphone_se/iphone_se_land_white.png"],"device-mockups/iphone_se/iphone_se_land_white.png"],"./iphone_se/iphone_se_port_gold.png":[["iphone_se_port_gold.e38d89af.png","device-mockups/iphone_se/iphone_se_port_gold.png"],"device-mockups/iphone_se/iphone_se_port_gold.png"],"./iphone_se/iphone_se_land_gold.png":[["iphone_se_land_gold.922531c4.png","device-mockups/iphone_se/iphone_se_land_gold.png"],"device-mockups/iphone_se/iphone_se_land_gold.png"],"./iphone_se/iphone_se_port_rose.png":[["iphone_se_port_rose.3c646d93.png","device-mockups/iphone_se/iphone_se_port_rose.png"],"device-mockups/iphone_se/iphone_se_port_rose.png"],"./iphone_se/iphone_se_land_rose.png":[["iphone_se_land_rose.fa34b06d.png","device-mockups/iphone_se/iphone_se_land_rose.png"],"device-mockups/iphone_se/iphone_se_land_rose.png"],"./iphone_6/iphone_6_port_black.png":[["iphone_6_port_black.a243cfb6.png","device-mockups/iphone_6/iphone_6_port_black.png"],"device-mockups/iphone_6/iphone_6_port_black.png"],"./iphone_6/iphone_6_land_black.png":[["iphone_6_land_black.894b38a2.png","device-mockups/iphone_6/iphone_6_land_black.png"],"device-mockups/iphone_6/iphone_6_land_black.png"],"./iphone_6/iphone_6_port_white.png":[["iphone_6_port_white.86b0a164.png","device-mockups/iphone_6/iphone_6_port_white.png"],"device-mockups/iphone_6/iphone_6_port_white.png"],"./iphone_6/iphone_6_land_white.png":[["iphone_6_land_white.de72734d.png","device-mockups/iphone_6/iphone_6_land_white.png"],"device-mockups/iphone_6/iphone_6_land_white.png"],"./iphone_6/iphone_6_port_gold.png":[["iphone_6_port_gold.21c786d9.png","device-mockups/iphone_6/iphone_6_port_gold.png"],"device-mockups/iphone_6/iphone_6_port_gold.png"],"./iphone_6/iphone_6_land_gold.png":[["iphone_6_land_gold.41e4f9a9.png","device-mockups/iphone_6/iphone_6_land_gold.png"],"device-mockups/iphone_6/iphone_6_land_gold.png"],"./iphone_6_plus/iphone_6_plus_black_port.png":[["iphone_6_plus_black_port.872b24e5.png","device-mockups/iphone_6_plus/iphone_6_plus_black_port.png"],"device-mockups/iphone_6_plus/iphone_6_plus_black_port.png"],"./iphone_6_plus/iphone_6_plus_black_land.png":[["iphone_6_plus_black_land.69483eb3.png","device-mockups/iphone_6_plus/iphone_6_plus_black_land.png"],"device-mockups/iphone_6_plus/iphone_6_plus_black_land.png"],"./iphone_6_plus/iphone_6_plus_white_port.png":[["iphone_6_plus_white_port.e90612f4.png","device-mockups/iphone_6_plus/iphone_6_plus_white_port.png"],"device-mockups/iphone_6_plus/iphone_6_plus_white_port.png"],"./iphone_6_plus/iphone_6_plus_white_land.png":[["iphone_6_plus_white_land.4177d7fe.png","device-mockups/iphone_6_plus/iphone_6_plus_white_land.png"],"device-mockups/iphone_6_plus/iphone_6_plus_white_land.png"],"./iphone_6_plus/iphone_6_plus_gold_port.png":[["iphone_6_plus_gold_port.461b2f66.png","device-mockups/iphone_6_plus/iphone_6_plus_gold_port.png"],"device-mockups/iphone_6_plus/iphone_6_plus_gold_port.png"],"./iphone_6_plus/iphone_6_plus_gold_land.png":[["iphone_6_plus_gold_land.1038ac58.png","device-mockups/iphone_6_plus/iphone_6_plus_gold_land.png"],"device-mockups/iphone_6_plus/iphone_6_plus_gold_land.png"],"./ipad/ipad_port_black.png":[["ipad_port_black.bde4ff76.png","device-mockups/ipad/ipad_port_black.png"],"device-mockups/ipad/ipad_port_black.png"],"./ipad/ipad_port_white.png":[["ipad_port_white.b9122088.png","device-mockups/ipad/ipad_port_white.png"],"device-mockups/ipad/ipad_port_white.png"],"./ipad/ipad_land_black.png":[["ipad_land_black.6bb286e9.png","device-mockups/ipad/ipad_land_black.png"],"device-mockups/ipad/ipad_land_black.png"],"./ipad/ipad_land_white.png":[["ipad_land_white.b78261b9.png","device-mockups/ipad/ipad_land_white.png"],"device-mockups/ipad/ipad_land_white.png"],"./ipad_air/ipad_air_gray_port.png":[["ipad_air_gray_port.88131483.png","device-mockups/ipad_air/ipad_air_gray_port.png"],"device-mockups/ipad_air/ipad_air_gray_port.png"],"./ipad_air/ipad_air_silver_port.png":[["ipad_air_silver_port.0b4977c6.png","device-mockups/ipad_air/ipad_air_silver_port.png"],"device-mockups/ipad_air/ipad_air_silver_port.png"],"./ipad_air/ipad_air_gray_land.png":[["ipad_air_gray_land.53a5ed95.png","device-mockups/ipad_air/ipad_air_gray_land.png"],"device-mockups/ipad_air/ipad_air_gray_land.png"],"./ipad_air/ipad_air_silver_land.png":[["ipad_air_silver_land.b188f58f.png","device-mockups/ipad_air/ipad_air_silver_land.png"],"device-mockups/ipad_air/ipad_air_silver_land.png"],"./ipad_air_2/ipad_air_2_gray_port.png":[["ipad_air_2_gray_port.b6eb200b.png","device-mockups/ipad_air_2/ipad_air_2_gray_port.png"],"device-mockups/ipad_air_2/ipad_air_2_gray_port.png"],"./ipad_air_2/ipad_air_2_silver_port.png":[["ipad_air_2_silver_port.430989d4.png","device-mockups/ipad_air_2/ipad_air_2_silver_port.png"],"device-mockups/ipad_air_2/ipad_air_2_silver_port.png"],"./ipad_air_2/ipad_air_2_gold_port.png":[["ipad_air_2_gold_port.d4837325.png","device-mockups/ipad_air_2/ipad_air_2_gold_port.png"],"device-mockups/ipad_air_2/ipad_air_2_gold_port.png"],"./ipad_air_2/ipad_air_2_gray_land.png":[["ipad_air_2_gray_land.e30fd0f6.png","device-mockups/ipad_air_2/ipad_air_2_gray_land.png"],"device-mockups/ipad_air_2/ipad_air_2_gray_land.png"],"./ipad_air_2/ipad_air_2_silver_land.png":[["ipad_air_2_silver_land.37ad4ca7.png","device-mockups/ipad_air_2/ipad_air_2_silver_land.png"],"device-mockups/ipad_air_2/ipad_air_2_silver_land.png"],"./ipad_air_2/ipad_air_2_gold_land.png":[["ipad_air_2_gold_land.303265bc.png","device-mockups/ipad_air_2/ipad_air_2_gold_land.png"],"device-mockups/ipad_air_2/ipad_air_2_gold_land.png"],"./ipad_pro/ipad_pro_port_black.png":[["ipad_pro_port_black.cec26438.png","device-mockups/ipad_pro/ipad_pro_port_black.png"],"device-mockups/ipad_pro/ipad_pro_port_black.png"],"./ipad_pro/ipad_pro_port_silver.png":[["ipad_pro_port_silver.381d1260.png","device-mockups/ipad_pro/ipad_pro_port_silver.png"],"device-mockups/ipad_pro/ipad_pro_port_silver.png"],"./ipad_pro/ipad_pro_port_gold.png":[["ipad_pro_port_gold.563ebb80.png","device-mockups/ipad_pro/ipad_pro_port_gold.png"],"device-mockups/ipad_pro/ipad_pro_port_gold.png"],"./ipad_pro/ipad_pro_land_black.png":[["ipad_pro_land_black.d9e2c518.png","device-mockups/ipad_pro/ipad_pro_land_black.png"],"device-mockups/ipad_pro/ipad_pro_land_black.png"],"./ipad_pro/ipad_pro_land_silver.png":[["ipad_pro_land_silver.f271995f.png","device-mockups/ipad_pro/ipad_pro_land_silver.png"],"device-mockups/ipad_pro/ipad_pro_land_silver.png"],"./ipad_pro/ipad_pro_land_gold.png":[["ipad_pro_land_gold.f6487584.png","device-mockups/ipad_pro/ipad_pro_land_gold.png"],"device-mockups/ipad_pro/ipad_pro_land_gold.png"],"./galaxy_s3/s3_port_black.png":[["s3_port_black.01878937.png","device-mockups/galaxy_s3/s3_port_black.png"],"device-mockups/galaxy_s3/s3_port_black.png"],"./galaxy_s3/s3_land_black.png":[["s3_land_black.8b8c430c.png","device-mockups/galaxy_s3/s3_land_black.png"],"device-mockups/galaxy_s3/s3_land_black.png"],"./galaxy_s3/s3_port_white.png":[["s3_port_white.0a913e4d.png","device-mockups/galaxy_s3/s3_port_white.png"],"device-mockups/galaxy_s3/s3_port_white.png"],"./galaxy_s3/s3_land_white.png":[["s3_land_white.02d62402.png","device-mockups/galaxy_s3/s3_land_white.png"],"device-mockups/galaxy_s3/s3_land_white.png"],"./galaxy_s5/galaxy_s5_port_black.png":[["galaxy_s5_port_black.16d9dd70.png","device-mockups/galaxy_s5/galaxy_s5_port_black.png"],"device-mockups/galaxy_s5/galaxy_s5_port_black.png"],"./galaxy_s5/galaxy_s5_land_black.png":[["galaxy_s5_land_black.bc2147df.png","device-mockups/galaxy_s5/galaxy_s5_land_black.png"],"device-mockups/galaxy_s5/galaxy_s5_land_black.png"],"./galaxy_s5/galaxy_s5_port_white.png":[["galaxy_s5_port_white.05e78d34.png","device-mockups/galaxy_s5/galaxy_s5_port_white.png"],"device-mockups/galaxy_s5/galaxy_s5_port_white.png"],"./galaxy_s5/galaxy_s5_land_white.png":[["galaxy_s5_land_white.baefe2cc.png","device-mockups/galaxy_s5/galaxy_s5_land_white.png"],"device-mockups/galaxy_s5/galaxy_s5_land_white.png"],"./galaxy_tab4/galaxy_tab4_land_black.png":[["galaxy_tab4_land_black.087172d4.png","device-mockups/galaxy_tab4/galaxy_tab4_land_black.png"],"device-mockups/galaxy_tab4/galaxy_tab4_land_black.png"],"./galaxy_tab4/galaxy_tab4_land_white.png":[["galaxy_tab4_land_white.62e846a4.png","device-mockups/galaxy_tab4/galaxy_tab4_land_white.png"],"device-mockups/galaxy_tab4/galaxy_tab4_land_white.png"],"./lumia920/lumia920_port.png":[["lumia920_port.5762bebd.png","device-mockups/lumia920/lumia920_port.png"],"device-mockups/lumia920/lumia920_port.png"],"./lumia920/lumia920_land.png":[["lumia920_land.623251a2.png","device-mockups/lumia920/lumia920_land.png"],"device-mockups/lumia920/lumia920_land.png"],"./nexus7/nexus7_port.png":[["nexus7_port.12651d6b.png","device-mockups/nexus7/nexus7_port.png"],"device-mockups/nexus7/nexus7_port.png"],"./nexus7/nexus7_land.png":[["nexus7_land.686513c4.png","device-mockups/nexus7/nexus7_land.png"],"device-mockups/nexus7/nexus7_land.png"],"./surface/surface.png":[["surface.dd67ecf4.png","device-mockups/surface/surface.png"],"device-mockups/surface/surface.png"],"./samsung_tv/samsung_tv.png":[["samsung_tv.b2529d45.png","device-mockups/samsung_tv/samsung_tv.png"],"device-mockups/samsung_tv/samsung_tv.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41621" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/device-mockups.min.91111269.js.map