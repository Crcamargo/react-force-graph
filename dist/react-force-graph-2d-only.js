// Version 1.8.2 react-force-graph-2d-only - https://github.com/vasturiano/react-force-graph
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.ForceGraph = {}),global.React));
}(this, (function (exports,React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  function index (kapsuleComponent) {
    var wrapperElType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
    var bindMethodNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var FromKapsuleComp = function (_React$PureComponent) {
      inherits(FromKapsuleComp, _React$PureComponent);

      function FromKapsuleComp() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, FromKapsuleComp);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FromKapsuleComp.__proto__ || Object.getPrototypeOf(FromKapsuleComp)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
      }

      // Call a component method


      createClass(FromKapsuleComp, [{
        key: 'componentDidMount',
        // method not found

        value: function componentDidMount() {
          var _this2 = this;

          Object.keys(this.props).forEach(function (p) {
            _this2._call(p, _this2.props[p]);
          });
          this.state.comp(this.rootElem);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          var _this3 = this;

          Object.keys(this.props).forEach(function (p) {
            if (prevProps[p] !== _this3.props[p]) {
              _this3._call(p, _this3.props[p]);
            }
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          // Invoke _destructor, if it exists
          if (this.state.comp._destructor instanceof Function) {
            this.state.comp._destructor();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          return React.createElement(wrapperElType, { ref: function ref(elem) {
              _this4.rootElem = elem;
            } });
        }
      }]);
      return FromKapsuleComp;
    }(React.PureComponent);

    var _initialiseProps = function _initialiseProps() {
      var _this5 = this;

      this.state = {
        comp: kapsuleComponent()
      };

      this._call = function (method) {
        var _state$comp;

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return _this5.state.comp[method] instanceof Function ? (_state$comp = _this5.state.comp)[method].apply(_state$comp, args) : undefined;
      };
    };

    bindMethodNames.forEach(function (method) {
      FromKapsuleComp.prototype[method] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this._call.apply(this, [method].concat(args));
      };
    });

    return FromKapsuleComp;
  }

  function colors(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }

  colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

  colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

  colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

  var schemePaired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

  colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

  colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

  colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

  colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

  colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex3 = /^#([0-9a-f]{3})$/,
      reHex6 = /^#([0-9a-f]{6})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: function() {
      return this.rgb().hex();
    },
    toString: function() {
      return this.rgb() + "";
    }
  });

  function color(format) {
    var m;
    format = (format + "").trim().toLowerCase();
    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format])
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (0 <= this.r && this.r <= 255)
          && (0 <= this.g && this.g <= 255)
          && (0 <= this.b && this.b <= 255)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: function() {
      return "#" + hex(this.r) + hex(this.g) + hex(this.b);
    },
    toString: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "rgb(" : "rgba(")
          + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
          + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
          + Math.max(0, Math.min(255, Math.round(this.b) || 0))
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var deg2rad = Math.PI / 180;
  var rad2deg = 180 / Math.PI;

  // https://beta.observablehq.com/@mbostock/lab-and-rgb
  var K = 18,
      Xn = 0.96422,
      Yn = 1,
      Zn = 0.82521,
      t0 = 4 / 29,
      t1 = 6 / 29,
      t2 = 3 * t1 * t1,
      t3 = t1 * t1 * t1;

  function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) {
      if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
      var h = o.h * deg2rad;
      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
    }
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = rgb2lrgb(o.r),
        g = rgb2lrgb(o.g),
        b = rgb2lrgb(o.b),
        y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b) x = z = y; else {
      x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
      z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
  }

  function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
  }

  function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Lab, lab, extend(Color, {
    brighter: function(k) {
      return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function(k) {
      return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function() {
      var y = (this.l + 16) / 116,
          x = isNaN(this.a) ? y : y + this.a / 500,
          z = isNaN(this.b) ? y : y - this.b / 200;
      x = Xn * lab2xyz(x);
      y = Yn * lab2xyz(y);
      z = Zn * lab2xyz(z);
      return new Rgb(
        lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
        lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
        lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
        this.opacity
      );
    }
  }));

  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }

  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }

  function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
  }

  function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  }

  function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * rad2deg;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
  }

  function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
  }

  function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hcl, hcl, extend(Color, {
    brighter: function(k) {
      return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function(k) {
      return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function() {
      return labConvert(this).rgb();
    }
  }));

  var A = -0.14861,
      B = +1.78277,
      C = -0.29227,
      D = -0.90649,
      E = +1.97294,
      ED = E * D,
      EB = E * B,
      BC_DA = B * C - D * A;

  function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
        bl = b - l,
        k = (E * (g - l) - C * bl) / D,
        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
  }

  function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
  }

  function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Cubehelix, cubehelix, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
          l = +this.l,
          a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
          cosh = Math.cos(h),
          sinh = Math.sin(h);
      return new Rgb(
        255 * (l + a * (A * cosh + B * sinh)),
        255 * (l + a * (C * cosh + D * sinh)),
        255 * (l + a * (E * cosh)),
        this.opacity
      );
    }
  }));

  function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
        + (4 - 6 * t2 + 3 * t3) * v1
        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
        + t3 * v3) / 6;
  }

  function basis$1(values) {
    var n = values.length - 1;
    return function(t) {
      var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
          v1 = values[i],
          v2 = values[i + 1],
          v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
          v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  function constant(x) {
    return function() {
      return x;
    };
  }

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color$$1 = gamma(y);

    function rgb$$1(start, end) {
      var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
          g = color$$1(start.g, end.g),
          b = color$$1(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$$1.gamma = rgbGamma;

    return rgb$$1;
  })(1);

  function rgbSpline(spline) {
    return function(colors) {
      var n = colors.length,
          r = new Array(n),
          g = new Array(n),
          b = new Array(n),
          i, color$$1;
      for (i = 0; i < n; ++i) {
        color$$1 = rgb(colors[i]);
        r[i] = color$$1.r || 0;
        g[i] = color$$1.g || 0;
        b[i] = color$$1.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color$$1.opacity = 1;
      return function(t) {
        color$$1.r = r(t);
        color$$1.g = g(t);
        color$$1.b = b(t);
        return color$$1 + "";
      };
    };
  }

  var rgbBasis = rgbSpline(basis$1);

  function interpolateNumber(a, b) {
    return a = +a, b -= a, function(t) {
      return a + b * t;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  var degrees = 180 / Math.PI;

  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var cssNode,
      cssRoot,
      cssView,
      svgNode;

  function parseCss(value) {
    if (value === "none") return identity;
    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
    cssNode.style.transform = value;
    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
    cssRoot.removeChild(cssNode);
    value = value.slice(7, -1).split(",");
    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
  }

  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {

    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function(a, b) {
      var s = [], // string constants and placeholders
          q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  var rho = Math.SQRT2,
      rho2 = 2,
      rho4 = 4,
      epsilon2 = 1e-12;

  function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }

  function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }

  function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function interpolateZoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }

    i.duration = S * 1000;

    return i;
  }

  function cubehelix$1(hue$$1) {
    return (function cubehelixGamma(y) {
      y = +y;

      function cubehelix$$1(start, end) {
        var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h),
            s = nogamma(start.s, end.s),
            l = nogamma(start.l, end.l),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.h = h(t);
          start.s = s(t);
          start.l = l(Math.pow(t, y));
          start.opacity = opacity(t);
          return start + "";
        };
      }

      cubehelix$$1.gamma = cubehelixGamma;

      return cubehelix$$1;
    })(1);
  }

  cubehelix$1(hue);
  var cubehelixLong = cubehelix$1(nogamma);

  function ramp(scheme) {
    return rgbBasis(scheme[scheme.length - 1]);
  }

  var scheme = new Array(3).concat(
    "d8b365f5f5f55ab4ac",
    "a6611adfc27d80cdc1018571",
    "a6611adfc27df5f5f580cdc1018571",
    "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
    "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
    "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
    "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
    "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
    "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
  ).map(colors);

  ramp(scheme);

  var scheme$1 = new Array(3).concat(
    "af8dc3f7f7f77fbf7b",
    "7b3294c2a5cfa6dba0008837",
    "7b3294c2a5cff7f7f7a6dba0008837",
    "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
    "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
    "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
    "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
    "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
    "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
  ).map(colors);

  ramp(scheme$1);

  var scheme$2 = new Array(3).concat(
    "e9a3c9f7f7f7a1d76a",
    "d01c8bf1b6dab8e1864dac26",
    "d01c8bf1b6daf7f7f7b8e1864dac26",
    "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
    "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
    "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
    "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
    "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
    "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
  ).map(colors);

  ramp(scheme$2);

  var scheme$3 = new Array(3).concat(
    "998ec3f7f7f7f1a340",
    "5e3c99b2abd2fdb863e66101",
    "5e3c99b2abd2f7f7f7fdb863e66101",
    "542788998ec3d8daebfee0b6f1a340b35806",
    "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
    "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
    "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
    "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
    "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
  ).map(colors);

  ramp(scheme$3);

  var scheme$4 = new Array(3).concat(
    "ef8a62f7f7f767a9cf",
    "ca0020f4a58292c5de0571b0",
    "ca0020f4a582f7f7f792c5de0571b0",
    "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
    "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
    "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
    "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
    "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
    "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
  ).map(colors);

  ramp(scheme$4);

  var scheme$5 = new Array(3).concat(
    "ef8a62ffffff999999",
    "ca0020f4a582bababa404040",
    "ca0020f4a582ffffffbababa404040",
    "b2182bef8a62fddbc7e0e0e09999994d4d4d",
    "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
    "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
    "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
    "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
    "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
  ).map(colors);

  ramp(scheme$5);

  var scheme$6 = new Array(3).concat(
    "fc8d59ffffbf91bfdb",
    "d7191cfdae61abd9e92c7bb6",
    "d7191cfdae61ffffbfabd9e92c7bb6",
    "d73027fc8d59fee090e0f3f891bfdb4575b4",
    "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
    "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
    "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
    "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
    "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
  ).map(colors);

  ramp(scheme$6);

  var scheme$7 = new Array(3).concat(
    "fc8d59ffffbf91cf60",
    "d7191cfdae61a6d96a1a9641",
    "d7191cfdae61ffffbfa6d96a1a9641",
    "d73027fc8d59fee08bd9ef8b91cf601a9850",
    "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
    "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
    "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
    "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
    "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
  ).map(colors);

  ramp(scheme$7);

  var scheme$8 = new Array(3).concat(
    "fc8d59ffffbf99d594",
    "d7191cfdae61abdda42b83ba",
    "d7191cfdae61ffffbfabdda42b83ba",
    "d53e4ffc8d59fee08be6f59899d5943288bd",
    "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
    "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
    "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
    "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
    "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
  ).map(colors);

  ramp(scheme$8);

  var scheme$9 = new Array(3).concat(
    "e5f5f999d8c92ca25f",
    "edf8fbb2e2e266c2a4238b45",
    "edf8fbb2e2e266c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
  ).map(colors);

  ramp(scheme$9);

  var scheme$a = new Array(3).concat(
    "e0ecf49ebcda8856a7",
    "edf8fbb3cde38c96c688419d",
    "edf8fbb3cde38c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
  ).map(colors);

  ramp(scheme$a);

  var scheme$b = new Array(3).concat(
    "e0f3dba8ddb543a2ca",
    "f0f9e8bae4bc7bccc42b8cbe",
    "f0f9e8bae4bc7bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
  ).map(colors);

  ramp(scheme$b);

  var scheme$c = new Array(3).concat(
    "fee8c8fdbb84e34a33",
    "fef0d9fdcc8afc8d59d7301f",
    "fef0d9fdcc8afc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
  ).map(colors);

  ramp(scheme$c);

  var scheme$d = new Array(3).concat(
    "ece2f0a6bddb1c9099",
    "f6eff7bdc9e167a9cf02818a",
    "f6eff7bdc9e167a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
  ).map(colors);

  ramp(scheme$d);

  var scheme$e = new Array(3).concat(
    "ece7f2a6bddb2b8cbe",
    "f1eef6bdc9e174a9cf0570b0",
    "f1eef6bdc9e174a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
  ).map(colors);

  ramp(scheme$e);

  var scheme$f = new Array(3).concat(
    "e7e1efc994c7dd1c77",
    "f1eef6d7b5d8df65b0ce1256",
    "f1eef6d7b5d8df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
  ).map(colors);

  ramp(scheme$f);

  var scheme$g = new Array(3).concat(
    "fde0ddfa9fb5c51b8a",
    "feebe2fbb4b9f768a1ae017e",
    "feebe2fbb4b9f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
  ).map(colors);

  ramp(scheme$g);

  var scheme$h = new Array(3).concat(
    "edf8b17fcdbb2c7fb8",
    "ffffcca1dab441b6c4225ea8",
    "ffffcca1dab441b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
  ).map(colors);

  ramp(scheme$h);

  var scheme$i = new Array(3).concat(
    "f7fcb9addd8e31a354",
    "ffffccc2e69978c679238443",
    "ffffccc2e69978c67931a354006837",
    "ffffccd9f0a3addd8e78c67931a354006837",
    "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
  ).map(colors);

  ramp(scheme$i);

  var scheme$j = new Array(3).concat(
    "fff7bcfec44fd95f0e",
    "ffffd4fed98efe9929cc4c02",
    "ffffd4fed98efe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
  ).map(colors);

  ramp(scheme$j);

  var scheme$k = new Array(3).concat(
    "ffeda0feb24cf03b20",
    "ffffb2fecc5cfd8d3ce31a1c",
    "ffffb2fecc5cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
  ).map(colors);

  ramp(scheme$k);

  var scheme$l = new Array(3).concat(
    "deebf79ecae13182bd",
    "eff3ffbdd7e76baed62171b5",
    "eff3ffbdd7e76baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
  ).map(colors);

  ramp(scheme$l);

  var scheme$m = new Array(3).concat(
    "e5f5e0a1d99b31a354",
    "edf8e9bae4b374c476238b45",
    "edf8e9bae4b374c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
  ).map(colors);

  ramp(scheme$m);

  var scheme$n = new Array(3).concat(
    "f0f0f0bdbdbd636363",
    "f7f7f7cccccc969696525252",
    "f7f7f7cccccc969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
  ).map(colors);

  ramp(scheme$n);

  var scheme$o = new Array(3).concat(
    "efedf5bcbddc756bb1",
    "f2f0f7cbc9e29e9ac86a51a3",
    "f2f0f7cbc9e29e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
  ).map(colors);

  ramp(scheme$o);

  var scheme$p = new Array(3).concat(
    "fee0d2fc9272de2d26",
    "fee5d9fcae91fb6a4acb181d",
    "fee5d9fcae91fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
  ).map(colors);

  ramp(scheme$p);

  var scheme$q = new Array(3).concat(
    "fee6cefdae6be6550d",
    "feeddefdbe85fd8d3cd94701",
    "feeddefdbe85fd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
  ).map(colors);

  ramp(scheme$q);

  cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));

  var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

  var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

  var c = cubehelix();

  var c$1 = rgb(),
      pi_1_3 = Math.PI / 3,
      pi_2_3 = Math.PI * 2 / 3;

  function ramp$1(range) {
    var n = range.length;
    return function(t) {
      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }

  ramp$1(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

  var magma = ramp$1(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

  var inferno = ramp$1(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

  var plasma = ramp$1(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  function forceCenter(x, y) {
    var nodes;

    if (x == null) x = 0;
    if (y == null) y = 0;

    function force() {
      var i,
          n = nodes.length,
          node,
          sx = 0,
          sy = 0;

      for (i = 0; i < n; ++i) {
        node = nodes[i], sx += node.x, sy += node.y;
      }

      for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
        node = nodes[i], node.x -= sx, node.y -= sy;
      }
    }

    force.initialize = function(_) {
      nodes = _;
    };

    force.x = function(_) {
      return arguments.length ? (x = +_, force) : x;
    };

    force.y = function(_) {
      return arguments.length ? (y = +_, force) : y;
    };

    return force;
  }

  function constant$1(x) {
    return function() {
      return x;
    };
  }

  function jiggle() {
    return (Math.random() - 0.5) * 1e-6;
  }

  function tree_add(d) {
    var x = +this._x.call(null, d),
        y = +this._y.call(null, d);
    return add(this.cover(x, y), x, y, d);
  }

  function add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

    var parent,
        node = tree._root,
        leaf = {data: d},
        x0 = tree._x0,
        y0 = tree._y0,
        x1 = tree._x1,
        y1 = tree._y1,
        xm,
        ym,
        xp,
        yp,
        right,
        bottom,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;

    // Find the existing leaf for the new point, or add it.
    while (node.length) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }

    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

    // Otherwise, split the leaf node until the old and new point are separated.
    do {
      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
    return parent[j] = node, parent[i] = leaf, tree;
  }

  function addAll(data) {
    var d, i, n = data.length,
        x,
        y,
        xz = new Array(n),
        yz = new Array(n),
        x0 = Infinity,
        y0 = Infinity,
        x1 = -Infinity,
        y1 = -Infinity;

    // Compute the points and their extent.
    for (i = 0; i < n; ++i) {
      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
      xz[i] = x;
      yz[i] = y;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }

    // If there were no (valid) points, inherit the existing extent.
    if (x1 < x0) x0 = this._x0, x1 = this._x1;
    if (y1 < y0) y0 = this._y0, y1 = this._y1;

    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);

    // Add the new points.
    for (i = 0; i < n; ++i) {
      add(this, xz[i], yz[i], data[i]);
    }

    return this;
  }

  function tree_cover(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

    var x0 = this._x0,
        y0 = this._y0,
        x1 = this._x1,
        y1 = this._y1;

    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
      x1 = (x0 = Math.floor(x)) + 1;
      y1 = (y0 = Math.floor(y)) + 1;
    }

    // Otherwise, double repeatedly to cover.
    else if (x0 > x || x > x1 || y0 > y || y > y1) {
      var z = x1 - x0,
          node = this._root,
          parent,
          i;

      switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
        case 0: {
          do parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
          break;
        }
        case 1: {
          do parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
          break;
        }
        case 2: {
          do parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
          break;
        }
        case 3: {
          do parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
          break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

    // If the quadtree covers the point already, just return.
    else return this;

    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
  }

  function tree_data() {
    var data = [];
    this.visit(function(node) {
      if (!node.length) do data.push(node.data); while (node = node.next)
    });
    return data;
  }

  function tree_extent(_) {
    return arguments.length
        ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
        : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
  }

  function Quad(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
  }

  function tree_find(x, y, radius) {
    var data,
        x0 = this._x0,
        y0 = this._y0,
        x1,
        y1,
        x2,
        y2,
        x3 = this._x1,
        y3 = this._y1,
        quads = [],
        node = this._root,
        q,
        i;

    if (node) quads.push(new Quad(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
      x0 = x - radius, y0 = y - radius;
      x3 = x + radius, y3 = y + radius;
      radius *= radius;
    }

    while (q = quads.pop()) {

      // Stop searching if this quadrant can’t contain a closer node.
      if (!(node = q.node)
          || (x1 = q.x0) > x3
          || (y1 = q.y0) > y3
          || (x2 = q.x1) < x0
          || (y2 = q.y1) < y0) continue;

      // Bisect the current quadrant.
      if (node.length) {
        var xm = (x1 + x2) / 2,
            ym = (y1 + y2) / 2;

        quads.push(
          new Quad(node[3], xm, ym, x2, y2),
          new Quad(node[2], x1, ym, xm, y2),
          new Quad(node[1], xm, y1, x2, ym),
          new Quad(node[0], x1, y1, xm, ym)
        );

        // Visit the closest quadrant first.
        if (i = (y >= ym) << 1 | (x >= xm)) {
          q = quads[quads.length - 1];
          quads[quads.length - 1] = quads[quads.length - 1 - i];
          quads[quads.length - 1 - i] = q;
        }
      }

      // Visit this point. (Visiting coincident points isn’t necessary!)
      else {
        var dx = x - +this._x.call(null, node.data),
            dy = y - +this._y.call(null, node.data),
            d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x0 = x - d, y0 = y - d;
          x3 = x + d, y3 = y + d;
          data = node.data;
        }
      }
    }

    return data;
  }

  function tree_remove(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

    var parent,
        node = this._root,
        retainer,
        previous,
        next,
        x0 = this._x0,
        y0 = this._y0,
        x1 = this._x1,
        y1 = this._y1,
        x,
        y,
        xm,
        ym,
        right,
        bottom,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;

    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while (true) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
      if (!node.length) break;
      if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
    }

    // Find the point to remove.
    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;

    // If there are multiple coincident points, remove just the point.
    if (previous) return (next ? previous.next = next : delete previous.next), this;

    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;

    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];

    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3])
        && node === (parent[3] || parent[2] || parent[1] || parent[0])
        && !node.length) {
      if (retainer) retainer[j] = node;
      else this._root = node;
    }

    return this;
  }

  function removeAll(data) {
    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
    return this;
  }

  function tree_root() {
    return this._root;
  }

  function tree_size() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length) do ++size; while (node = node.next)
    });
    return size;
  }

  function tree_visit(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      }
    }
    return this;
  }

  function tree_visitAfter(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.y0, q.x1, q.y1);
    }
    return this;
  }

  function defaultX(d) {
    return d[0];
  }

  function tree_x(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  }

  function defaultY(d) {
    return d[1];
  }

  function tree_y(_) {
    return arguments.length ? (this._y = _, this) : this._y;
  }

  function quadtree(nodes, x, y) {
    var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }

  function Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
  }

  function leaf_copy(leaf) {
    var copy = {data: leaf.data}, next = copy;
    while (leaf = leaf.next) next = next.next = {data: leaf.data};
    return copy;
  }

  var treeProto = quadtree.prototype = Quadtree.prototype;

  treeProto.copy = function() {
    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        node = this._root,
        nodes,
        child;

    if (!node) return copy;

    if (!node.length) return copy._root = leaf_copy(node), copy;

    nodes = [{source: node, target: copy._root = new Array(4)}];
    while (node = nodes.pop()) {
      for (var i = 0; i < 4; ++i) {
        if (child = node.source[i]) {
          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
          else node.target[i] = leaf_copy(child);
        }
      }
    }

    return copy;
  };

  treeProto.add = tree_add;
  treeProto.addAll = addAll;
  treeProto.cover = tree_cover;
  treeProto.data = tree_data;
  treeProto.extent = tree_extent;
  treeProto.find = tree_find;
  treeProto.remove = tree_remove;
  treeProto.removeAll = removeAll;
  treeProto.root = tree_root;
  treeProto.size = tree_size;
  treeProto.visit = tree_visit;
  treeProto.visitAfter = tree_visitAfter;
  treeProto.x = tree_x;
  treeProto.y = tree_y;

  var prefix = "$";

  function Map() {}

  Map.prototype = map.prototype = {
    constructor: Map,
    has: function(key) {
      return (prefix + key) in this;
    },
    get: function(key) {
      return this[prefix + key];
    },
    set: function(key, value) {
      this[prefix + key] = value;
      return this;
    },
    remove: function(key) {
      var property = prefix + key;
      return property in this && delete this[property];
    },
    clear: function() {
      for (var property in this) if (property[0] === prefix) delete this[property];
    },
    keys: function() {
      var keys = [];
      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
      return keys;
    },
    values: function() {
      var values = [];
      for (var property in this) if (property[0] === prefix) values.push(this[property]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
      return entries;
    },
    size: function() {
      var size = 0;
      for (var property in this) if (property[0] === prefix) ++size;
      return size;
    },
    empty: function() {
      for (var property in this) if (property[0] === prefix) return false;
      return true;
    },
    each: function(f) {
      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
  };

  function map(object, f) {
    var map = new Map;

    // Copy constructor.
    if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

    // Index array by numeric index or specified key function.
    else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;

      if (f == null) while (++i < n) map.set(i, object[i]);
      else while (++i < n) map.set(f(o = object[i], i, object), o);
    }

    // Convert object to map.
    else if (object) for (var key in object) map.set(key, object[key]);

    return map;
  }

  function Set() {}

  var proto = map.prototype;

  Set.prototype = set.prototype = {
    constructor: Set,
    has: proto.has,
    add: function(value) {
      value += "";
      this[prefix + value] = value;
      return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
  };

  function set(object, f) {
    var set = new Set;

    // Copy constructor.
    if (object instanceof Set) object.each(function(value) { set.add(value); });

    // Otherwise, assume it’s an array.
    else if (object) {
      var i = -1, n = object.length;
      if (f == null) while (++i < n) set.add(object[i]);
      else while (++i < n) set.add(f(object[i], i, object));
    }

    return set;
  }

  function index$1(d) {
    return d.index;
  }

  function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("missing: " + nodeId);
    return node;
  }

  function forceLink(links) {
    var id = index$1,
        strength = defaultStrength,
        strengths,
        distance = constant$1(30),
        distances,
        nodes,
        count,
        bias,
        iterations = 1;

    if (links == null) links = [];

    function defaultStrength(link) {
      return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }

    function force(alpha) {
      for (var k = 0, n = links.length; k < iterations; ++k) {
        for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
          link = links[i], source = link.source, target = link.target;
          x = target.x + target.vx - source.x - source.vx || jiggle();
          y = target.y + target.vy - source.y - source.vy || jiggle();
          l = Math.sqrt(x * x + y * y);
          l = (l - distances[i]) / l * alpha * strengths[i];
          x *= l, y *= l;
          target.vx -= x * (b = bias[i]);
          target.vy -= y * b;
          source.vx += x * (b = 1 - b);
          source.vy += y * b;
        }
      }
    }

    function initialize() {
      if (!nodes) return;

      var i,
          n = nodes.length,
          m = links.length,
          nodeById = map(nodes, id),
          link;

      for (i = 0, count = new Array(n); i < m; ++i) {
        link = links[i], link.index = i;
        if (typeof link.source !== "object") link.source = find(nodeById, link.source);
        if (typeof link.target !== "object") link.target = find(nodeById, link.target);
        count[link.source.index] = (count[link.source.index] || 0) + 1;
        count[link.target.index] = (count[link.target.index] || 0) + 1;
      }

      for (i = 0, bias = new Array(m); i < m; ++i) {
        link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
      }

      strengths = new Array(m), initializeStrength();
      distances = new Array(m), initializeDistance();
    }

    function initializeStrength() {
      if (!nodes) return;

      for (var i = 0, n = links.length; i < n; ++i) {
        strengths[i] = +strength(links[i], i, links);
      }
    }

    function initializeDistance() {
      if (!nodes) return;

      for (var i = 0, n = links.length; i < n; ++i) {
        distances[i] = +distance(links[i], i, links);
      }
    }

    force.initialize = function(_) {
      nodes = _;
      initialize();
    };

    force.links = function(_) {
      return arguments.length ? (links = _, initialize(), force) : links;
    };

    force.id = function(_) {
      return arguments.length ? (id = _, force) : id;
    };

    force.iterations = function(_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };

    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$1(+_), initializeStrength(), force) : strength;
    };

    force.distance = function(_) {
      return arguments.length ? (distance = typeof _ === "function" ? _ : constant$1(+_), initializeDistance(), force) : distance;
    };

    return force;
  }

  var noop = {value: function() {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  var frame = 0, // is an animation frame pending?
      timeout = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout$1(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  function x$1(d) {
    return d.x;
  }

  function y$1(d) {
    return d.y;
  }

  var initialRadius = 10,
      initialAngle = Math.PI * (3 - Math.sqrt(5));

  function forceSimulation(nodes) {
    var simulation,
        alpha = 1,
        alphaMin = 0.001,
        alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
        alphaTarget = 0,
        velocityDecay = 0.6,
        forces = map(),
        stepper = timer(step),
        event = dispatch("tick", "end");

    if (nodes == null) nodes = [];

    function step() {
      tick();
      event.call("tick", simulation);
      if (alpha < alphaMin) {
        stepper.stop();
        event.call("end", simulation);
      }
    }

    function tick() {
      var i, n = nodes.length, node;

      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.each(function(force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }

    function initializeNodes() {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.index = i;
        if (isNaN(node.x) || isNaN(node.y)) {
          var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
          node.x = radius * Math.cos(angle);
          node.y = radius * Math.sin(angle);
        }
        if (isNaN(node.vx) || isNaN(node.vy)) {
          node.vx = node.vy = 0;
        }
      }
    }

    function initializeForce(force) {
      if (force.initialize) force.initialize(nodes);
      return force;
    }

    initializeNodes();

    return simulation = {
      tick: tick,

      restart: function() {
        return stepper.restart(step), simulation;
      },

      stop: function() {
        return stepper.stop(), simulation;
      },

      nodes: function(_) {
        return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
      },

      alpha: function(_) {
        return arguments.length ? (alpha = +_, simulation) : alpha;
      },

      alphaMin: function(_) {
        return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
      },

      alphaDecay: function(_) {
        return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
      },

      alphaTarget: function(_) {
        return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
      },

      velocityDecay: function(_) {
        return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
      },

      force: function(name, _) {
        return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
      },

      find: function(x, y, radius) {
        var i = 0,
            n = nodes.length,
            dx,
            dy,
            d2,
            node,
            closest;

        if (radius == null) radius = Infinity;
        else radius *= radius;

        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dx = x - node.x;
          dy = y - node.y;
          d2 = dx * dx + dy * dy;
          if (d2 < radius) closest = node, radius = d2;
        }

        return closest;
      },

      on: function(name, _) {
        return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
      }
    };
  }

  function forceManyBody() {
    var nodes,
        node,
        alpha,
        strength = constant$1(-30),
        strengths,
        distanceMin2 = 1,
        distanceMax2 = Infinity,
        theta2 = 0.81;

    function force(_) {
      var i, n = nodes.length, tree = quadtree(nodes, x$1, y$1).visitAfter(accumulate);
      for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
    }

    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, node;
      strengths = new Array(n);
      for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }

    function accumulate(quad) {
      var strength = 0, q, c, weight = 0, x, y, i;

      // For internal nodes, accumulate forces from child quadrants.
      if (quad.length) {
        for (x = y = i = 0; i < 4; ++i) {
          if ((q = quad[i]) && (c = Math.abs(q.value))) {
            strength += q.value, weight += c, x += c * q.x, y += c * q.y;
          }
        }
        quad.x = x / weight;
        quad.y = y / weight;
      }

      // For leaf nodes, accumulate forces from coincident quadrants.
      else {
        q = quad;
        q.x = q.data.x;
        q.y = q.data.y;
        do strength += strengths[q.data.index];
        while (q = q.next);
      }

      quad.value = strength;
    }

    function apply(quad, x1, _, x2) {
      if (!quad.value) return true;

      var x = quad.x - node.x,
          y = quad.y - node.y,
          w = x2 - x1,
          l = x * x + y * y;

      // Apply the Barnes-Hut approximation if possible.
      // Limit forces for very close nodes; randomize direction if coincident.
      if (w * w / theta2 < l) {
        if (l < distanceMax2) {
          if (x === 0) x = jiggle(), l += x * x;
          if (y === 0) y = jiggle(), l += y * y;
          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
          node.vx += x * quad.value * alpha / l;
          node.vy += y * quad.value * alpha / l;
        }
        return true;
      }

      // Otherwise, process points directly.
      else if (quad.length || l >= distanceMax2) return;

      // Limit forces for very close nodes; randomize direction if coincident.
      if (quad.data !== node || quad.next) {
        if (x === 0) x = jiggle(), l += x * x;
        if (y === 0) y = jiggle(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
      }

      do if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x * w;
        node.vy += y * w;
      } while (quad = quad.next);
    }

    force.initialize = function(_) {
      nodes = _;
      initialize();
    };

    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$1(+_), initialize(), force) : strength;
    };

    force.distanceMin = function(_) {
      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };

    force.distanceMax = function(_) {
      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };

    force.theta = function(_) {
      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };

    return force;
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var utils = createCommonjsModule(function (module) {
  (function() {

    // math-inlining.
    var abs = Math.abs,
      cos = Math.cos,
      sin = Math.sin,
      acos = Math.acos,
      atan2 = Math.atan2,
      sqrt = Math.sqrt,
      pow = Math.pow,
      // cube root function yielding real roots
      crt = function(v) {
        return v < 0 ? -pow(-v, 1 / 3) : pow(v, 1 / 3);
      },
      // trig constants
      pi = Math.PI,
      tau = 2 * pi,
      quart = pi / 2,
      // float precision significant decimal
      epsilon = 0.000001,
      // extremas used in bbox calculation and similar algorithms
      nMax = Number.MAX_SAFE_INTEGER || 9007199254740991,
      nMin = Number.MIN_SAFE_INTEGER || -9007199254740991;

    // Bezier utility functions
    var utils = {
      // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
      Tvalues: [
        -0.0640568928626056260850430826247450385909,
        0.0640568928626056260850430826247450385909,
        -0.1911188674736163091586398207570696318404,
        0.1911188674736163091586398207570696318404,
        -0.3150426796961633743867932913198102407864,
        0.3150426796961633743867932913198102407864,
        -0.4337935076260451384870842319133497124524,
        0.4337935076260451384870842319133497124524,
        -0.5454214713888395356583756172183723700107,
        0.5454214713888395356583756172183723700107,
        -0.6480936519369755692524957869107476266696,
        0.6480936519369755692524957869107476266696,
        -0.7401241915785543642438281030999784255232,
        0.7401241915785543642438281030999784255232,
        -0.8200019859739029219539498726697452080761,
        0.8200019859739029219539498726697452080761,
        -0.8864155270044010342131543419821967550873,
        0.8864155270044010342131543419821967550873,
        -0.9382745520027327585236490017087214496548,
        0.9382745520027327585236490017087214496548,
        -0.9747285559713094981983919930081690617411,
        0.9747285559713094981983919930081690617411,
        -0.9951872199970213601799974097007368118745,
        0.9951872199970213601799974097007368118745
      ],

      // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
      Cvalues: [
        0.1279381953467521569740561652246953718517,
        0.1279381953467521569740561652246953718517,
        0.1258374563468282961213753825111836887264,
        0.1258374563468282961213753825111836887264,
        0.121670472927803391204463153476262425607,
        0.121670472927803391204463153476262425607,
        0.1155056680537256013533444839067835598622,
        0.1155056680537256013533444839067835598622,
        0.1074442701159656347825773424466062227946,
        0.1074442701159656347825773424466062227946,
        0.0976186521041138882698806644642471544279,
        0.0976186521041138882698806644642471544279,
        0.086190161531953275917185202983742667185,
        0.086190161531953275917185202983742667185,
        0.0733464814110803057340336152531165181193,
        0.0733464814110803057340336152531165181193,
        0.0592985849154367807463677585001085845412,
        0.0592985849154367807463677585001085845412,
        0.0442774388174198061686027482113382288593,
        0.0442774388174198061686027482113382288593,
        0.0285313886289336631813078159518782864491,
        0.0285313886289336631813078159518782864491,
        0.0123412297999871995468056670700372915759,
        0.0123412297999871995468056670700372915759
      ],

      arcfn: function(t, derivativeFn) {
        var d = derivativeFn(t);
        var l = d.x * d.x + d.y * d.y;
        if (typeof d.z !== "undefined") {
          l += d.z * d.z;
        }
        return sqrt(l);
      },

      between: function(v, m, M) {
        return (
          (m <= v && v <= M) ||
          utils.approximately(v, m) ||
          utils.approximately(v, M)
        );
      },

      approximately: function(a, b, precision) {
        return abs(a - b) <= (precision || epsilon);
      },

      length: function(derivativeFn) {
        var z = 0.5,
          sum = 0,
          len = utils.Tvalues.length,
          i,
          t;
        for (i = 0; i < len; i++) {
          t = z * utils.Tvalues[i] + z;
          sum += utils.Cvalues[i] * utils.arcfn(t, derivativeFn);
        }
        return z * sum;
      },

      map: function(v, ds, de, ts, te) {
        var d1 = de - ds,
          d2 = te - ts,
          v2 = v - ds,
          r = v2 / d1;
        return ts + d2 * r;
      },

      lerp: function(r, v1, v2) {
        var ret = {
          x: v1.x + r * (v2.x - v1.x),
          y: v1.y + r * (v2.y - v1.y)
        };
        if (!!v1.z && !!v2.z) {
          ret.z = v1.z + r * (v2.z - v1.z);
        }
        return ret;
      },

      pointToString: function(p) {
        var s = p.x + "/" + p.y;
        if (typeof p.z !== "undefined") {
          s += "/" + p.z;
        }
        return s;
      },

      pointsToString: function(points) {
        return "[" + points.map(utils.pointToString).join(", ") + "]";
      },

      copy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
      },

      angle: function(o, v1, v2) {
        var dx1 = v1.x - o.x,
          dy1 = v1.y - o.y,
          dx2 = v2.x - o.x,
          dy2 = v2.y - o.y,
          cross = dx1 * dy2 - dy1 * dx2,
          dot = dx1 * dx2 + dy1 * dy2;
        return atan2(cross, dot);
      },

      // round as string, to avoid rounding errors
      round: function(v, d) {
        var s = "" + v;
        var pos = s.indexOf(".");
        return parseFloat(s.substring(0, pos + 1 + d));
      },

      dist: function(p1, p2) {
        var dx = p1.x - p2.x,
          dy = p1.y - p2.y;
        return sqrt(dx * dx + dy * dy);
      },

      closest: function(LUT, point) {
        var mdist = pow(2, 63),
          mpos,
          d;
        LUT.forEach(function(p, idx) {
          d = utils.dist(point, p);
          if (d < mdist) {
            mdist = d;
            mpos = idx;
          }
        });
        return { mdist: mdist, mpos: mpos };
      },

      abcratio: function(t, n) {
        // see ratio(t) note on http://pomax.github.io/bezierinfo/#abc
        if (n !== 2 && n !== 3) {
          return false;
        }
        if (typeof t === "undefined") {
          t = 0.5;
        } else if (t === 0 || t === 1) {
          return t;
        }
        var bottom = pow(t, n) + pow(1 - t, n),
          top = bottom - 1;
        return abs(top / bottom);
      },

      projectionratio: function(t, n) {
        // see u(t) note on http://pomax.github.io/bezierinfo/#abc
        if (n !== 2 && n !== 3) {
          return false;
        }
        if (typeof t === "undefined") {
          t = 0.5;
        } else if (t === 0 || t === 1) {
          return t;
        }
        var top = pow(1 - t, n),
          bottom = pow(t, n) + top;
        return top / bottom;
      },

      lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
        var nx =
            (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
          ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
          d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (d == 0) {
          return false;
        }
        return { x: nx / d, y: ny / d };
      },

      lli4: function(p1, p2, p3, p4) {
        var x1 = p1.x,
          y1 = p1.y,
          x2 = p2.x,
          y2 = p2.y,
          x3 = p3.x,
          y3 = p3.y,
          x4 = p4.x,
          y4 = p4.y;
        return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
      },

      lli: function(v1, v2) {
        return utils.lli4(v1, v1.c, v2, v2.c);
      },

      makeline: function(p1, p2) {
        var Bezier = bezier;
        var x1 = p1.x,
          y1 = p1.y,
          x2 = p2.x,
          y2 = p2.y,
          dx = (x2 - x1) / 3,
          dy = (y2 - y1) / 3;
        return new Bezier(
          x1,
          y1,
          x1 + dx,
          y1 + dy,
          x1 + 2 * dx,
          y1 + 2 * dy,
          x2,
          y2
        );
      },

      findbbox: function(sections) {
        var mx = nMax,
          my = nMax,
          MX = nMin,
          MY = nMin;
        sections.forEach(function(s) {
          var bbox = s.bbox();
          if (mx > bbox.x.min) mx = bbox.x.min;
          if (my > bbox.y.min) my = bbox.y.min;
          if (MX < bbox.x.max) MX = bbox.x.max;
          if (MY < bbox.y.max) MY = bbox.y.max;
        });
        return {
          x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
          y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
        };
      },

      shapeintersections: function(
        s1,
        bbox1,
        s2,
        bbox2,
        curveIntersectionThreshold
      ) {
        if (!utils.bboxoverlap(bbox1, bbox2)) return [];
        var intersections = [];
        var a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
        var a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
        a1.forEach(function(l1) {
          if (l1.virtual) return;
          a2.forEach(function(l2) {
            if (l2.virtual) return;
            var iss = l1.intersects(l2, curveIntersectionThreshold);
            if (iss.length > 0) {
              iss.c1 = l1;
              iss.c2 = l2;
              iss.s1 = s1;
              iss.s2 = s2;
              intersections.push(iss);
            }
          });
        });
        return intersections;
      },

      makeshape: function(forward, back, curveIntersectionThreshold) {
        var bpl = back.points.length;
        var fpl = forward.points.length;
        var start = utils.makeline(back.points[bpl - 1], forward.points[0]);
        var end = utils.makeline(forward.points[fpl - 1], back.points[0]);
        var shape = {
          startcap: start,
          forward: forward,
          back: back,
          endcap: end,
          bbox: utils.findbbox([start, forward, back, end])
        };
        var self = utils;
        shape.intersections = function(s2) {
          return self.shapeintersections(
            shape,
            shape.bbox,
            s2,
            s2.bbox,
            curveIntersectionThreshold
          );
        };
        return shape;
      },

      getminmax: function(curve, d, list) {
        if (!list) return { min: 0, max: 0 };
        var min = nMax,
          max = nMin,
          t,
          c;
        if (list.indexOf(0) === -1) {
          list = [0].concat(list);
        }
        if (list.indexOf(1) === -1) {
          list.push(1);
        }
        for (var i = 0, len = list.length; i < len; i++) {
          t = list[i];
          c = curve.get(t);
          if (c[d] < min) {
            min = c[d];
          }
          if (c[d] > max) {
            max = c[d];
          }
        }
        return { min: min, mid: (min + max) / 2, max: max, size: max - min };
      },

      align: function(points, line) {
        var tx = line.p1.x,
          ty = line.p1.y,
          a = -atan2(line.p2.y - ty, line.p2.x - tx),
          d = function(v) {
            return {
              x: (v.x - tx) * cos(a) - (v.y - ty) * sin(a),
              y: (v.x - tx) * sin(a) + (v.y - ty) * cos(a)
            };
          };
        return points.map(d);
      },

      roots: function(points, line) {
        line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
        var order = points.length - 1;
        var p = utils.align(points, line);
        var reduce = function(t) {
          return 0 <= t && t <= 1;
        };

        if (order === 2) {
          var a = p[0].y,
            b = p[1].y,
            c = p[2].y,
            d = a - 2 * b + c;
          if (d !== 0) {
            var m1 = -sqrt(b * b - a * c),
              m2 = -a + b,
              v1 = -(m1 + m2) / d,
              v2 = -(-m1 + m2) / d;
            return [v1, v2].filter(reduce);
          } else if (b !== c && d === 0) {
            return [(2 * b - c) / 2 * (b - c)].filter(reduce);
          }
          return [];
        }

        // see http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
        var pa = p[0].y,
          pb = p[1].y,
          pc = p[2].y,
          pd = p[3].y,
          d = -pa + 3 * pb - 3 * pc + pd,
          a = 3 * pa - 6 * pb + 3 * pc,
          b = -3 * pa + 3 * pb,
          c = pa;

        if (utils.approximately(d, 0)) {
          // this is not a cubic curve.
          if (utils.approximately(a, 0)) {
            // in fact, this is not a quadratic curve either.
            if (utils.approximately(b, 0)) {
              // in fact in fact, there are no solutions.
              return [];
            }
            // linear solution:
            return [-c / b].filter(reduce);
          }
          // quadratic solution:
          var q = sqrt(b * b - 4 * a * c),
            a2 = 2 * a;
          return [(q - b) / a2, (-b - q) / a2].filter(reduce);
        }

        // at this point, we know we need a cubic solution:

        a /= d;
        b /= d;
        c /= d;

        var p = (3 * b - a * a) / 3,
          p3 = p / 3,
          q = (2 * a * a * a - 9 * a * b + 27 * c) / 27,
          q2 = q / 2,
          discriminant = q2 * q2 + p3 * p3 * p3,
          u1,
          v1,
          x1,
          x2,
          x3;
        if (discriminant < 0) {
          var mp3 = -p / 3,
            mp33 = mp3 * mp3 * mp3,
            r = sqrt(mp33),
            t = -q / (2 * r),
            cosphi = t < -1 ? -1 : t > 1 ? 1 : t,
            phi = acos(cosphi),
            crtr = crt(r),
            t1 = 2 * crtr;
          x1 = t1 * cos(phi / 3) - a / 3;
          x2 = t1 * cos((phi + tau) / 3) - a / 3;
          x3 = t1 * cos((phi + 2 * tau) / 3) - a / 3;
          return [x1, x2, x3].filter(reduce);
        } else if (discriminant === 0) {
          u1 = q2 < 0 ? crt(-q2) : -crt(q2);
          x1 = 2 * u1 - a / 3;
          x2 = -u1 - a / 3;
          return [x1, x2].filter(reduce);
        } else {
          var sd = sqrt(discriminant);
          u1 = crt(-q2 + sd);
          v1 = crt(q2 + sd);
          return [u1 - v1 - a / 3].filter(reduce);
        }
      },

      droots: function(p) {
        // quadratic roots are easy
        if (p.length === 3) {
          var a = p[0],
            b = p[1],
            c = p[2],
            d = a - 2 * b + c;
          if (d !== 0) {
            var m1 = -sqrt(b * b - a * c),
              m2 = -a + b,
              v1 = -(m1 + m2) / d,
              v2 = -(-m1 + m2) / d;
            return [v1, v2];
          } else if (b !== c && d === 0) {
            return [(2 * b - c) / (2 * (b - c))];
          }
          return [];
        }

        // linear roots are even easier
        if (p.length === 2) {
          var a = p[0],
            b = p[1];
          if (a !== b) {
            return [a / (a - b)];
          }
          return [];
        }
      },

      inflections: function(points) {
        if (points.length < 4) return [];

        // FIXME: TODO: add in inflection abstraction for quartic+ curves?

        var p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }),
          a = p[2].x * p[1].y,
          b = p[3].x * p[1].y,
          c = p[1].x * p[2].y,
          d = p[3].x * p[2].y,
          v1 = 18 * (-3 * a + 2 * b + 3 * c - d),
          v2 = 18 * (3 * a - b - 3 * c),
          v3 = 18 * (c - a);

        if (utils.approximately(v1, 0)) {
          if (!utils.approximately(v2, 0)) {
            var t = -v3 / v2;
            if (0 <= t && t <= 1) return [t];
          }
          return [];
        }

        var trm = v2 * v2 - 4 * v1 * v3,
          sq = Math.sqrt(trm),
          d = 2 * v1;

        if (utils.approximately(d, 0)) return [];

        return [(sq - v2) / d, -(v2 + sq) / d].filter(function(r) {
          return 0 <= r && r <= 1;
        });
      },

      bboxoverlap: function(b1, b2) {
        var dims = ["x", "y"],
          len = dims.length,
          i,
          dim,
          l,
          t,
          d;
        for (i = 0; i < len; i++) {
          dim = dims[i];
          l = b1[dim].mid;
          t = b2[dim].mid;
          d = (b1[dim].size + b2[dim].size) / 2;
          if (abs(l - t) >= d) return false;
        }
        return true;
      },

      expandbox: function(bbox, _bbox) {
        if (_bbox.x.min < bbox.x.min) {
          bbox.x.min = _bbox.x.min;
        }
        if (_bbox.y.min < bbox.y.min) {
          bbox.y.min = _bbox.y.min;
        }
        if (_bbox.z && _bbox.z.min < bbox.z.min) {
          bbox.z.min = _bbox.z.min;
        }
        if (_bbox.x.max > bbox.x.max) {
          bbox.x.max = _bbox.x.max;
        }
        if (_bbox.y.max > bbox.y.max) {
          bbox.y.max = _bbox.y.max;
        }
        if (_bbox.z && _bbox.z.max > bbox.z.max) {
          bbox.z.max = _bbox.z.max;
        }
        bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
        bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
        if (bbox.z) {
          bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
        }
        bbox.x.size = bbox.x.max - bbox.x.min;
        bbox.y.size = bbox.y.max - bbox.y.min;
        if (bbox.z) {
          bbox.z.size = bbox.z.max - bbox.z.min;
        }
      },

      pairiteration: function(c1, c2, curveIntersectionThreshold) {
        var c1b = c1.bbox(),
          c2b = c2.bbox(),
          r = 100000,
          threshold = curveIntersectionThreshold || 0.5;
        if (
          c1b.x.size + c1b.y.size < threshold &&
          c2b.x.size + c2b.y.size < threshold
        ) {
          return [
            ((r * (c1._t1 + c1._t2) / 2) | 0) / r +
              "/" +
              ((r * (c2._t1 + c2._t2) / 2) | 0) / r
          ];
        }
        var cc1 = c1.split(0.5),
          cc2 = c2.split(0.5),
          pairs = [
            { left: cc1.left, right: cc2.left },
            { left: cc1.left, right: cc2.right },
            { left: cc1.right, right: cc2.right },
            { left: cc1.right, right: cc2.left }
          ];
        pairs = pairs.filter(function(pair) {
          return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
        });
        var results = [];
        if (pairs.length === 0) return results;
        pairs.forEach(function(pair) {
          results = results.concat(
            utils.pairiteration(pair.left, pair.right, threshold)
          );
        });
        results = results.filter(function(v, i) {
          return results.indexOf(v) === i;
        });
        return results;
      },

      getccenter: function(p1, p2, p3) {
        var dx1 = p2.x - p1.x,
          dy1 = p2.y - p1.y,
          dx2 = p3.x - p2.x,
          dy2 = p3.y - p2.y;
        var dx1p = dx1 * cos(quart) - dy1 * sin(quart),
          dy1p = dx1 * sin(quart) + dy1 * cos(quart),
          dx2p = dx2 * cos(quart) - dy2 * sin(quart),
          dy2p = dx2 * sin(quart) + dy2 * cos(quart);
        // chord midpoints
        var mx1 = (p1.x + p2.x) / 2,
          my1 = (p1.y + p2.y) / 2,
          mx2 = (p2.x + p3.x) / 2,
          my2 = (p2.y + p3.y) / 2;
        // midpoint offsets
        var mx1n = mx1 + dx1p,
          my1n = my1 + dy1p,
          mx2n = mx2 + dx2p,
          my2n = my2 + dy2p;
        // intersection of these lines:
        var arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n),
          r = utils.dist(arc, p1),
          // arc start/end values, over mid point:
          s = atan2(p1.y - arc.y, p1.x - arc.x),
          m = atan2(p2.y - arc.y, p2.x - arc.x),
          e = atan2(p3.y - arc.y, p3.x - arc.x),
          _;
        // determine arc direction (cw/ccw correction)
        if (s < e) {
          // if s<m<e, arc(s, e)
          // if m<s<e, arc(e, s + tau)
          // if s<e<m, arc(e, s + tau)
          if (s > m || m > e) {
            s += tau;
          }
          if (s > e) {
            _ = e;
            e = s;
            s = _;
          }
        } else {
          // if e<m<s, arc(e, s)
          // if m<e<s, arc(s, e + tau)
          // if e<s<m, arc(s, e + tau)
          if (e < m && m < s) {
            _ = e;
            e = s;
            s = _;
          } else {
            e += tau;
          }
        }
        // assign and done.
        arc.s = s;
        arc.e = e;
        arc.r = r;
        return arc;
      },

      numberSort: function(a, b) {
        return a - b;
      }
    };

    module.exports = utils;
  })();
  });

  var polyBezier = createCommonjsModule(function (module) {
  (function() {

    var utils$$1 = utils;

    /**
     * Poly Bezier
     * @param {[type]} curves [description]
     */
    var PolyBezier = function(curves) {
      this.curves = [];
      this._3d = false;
      if (!!curves) {
        this.curves = curves;
        this._3d = this.curves[0]._3d;
      }
    };

    PolyBezier.prototype = {
      valueOf: function() {
        return this.toString();
      },
      toString: function() {
        return (
          "[" +
          this.curves
            .map(function(curve) {
              return utils$$1.pointsToString(curve.points);
            })
            .join(", ") +
          "]"
        );
      },
      addCurve: function(curve) {
        this.curves.push(curve);
        this._3d = this._3d || curve._3d;
      },
      length: function() {
        return this.curves
          .map(function(v) {
            return v.length();
          })
          .reduce(function(a, b) {
            return a + b;
          });
      },
      curve: function(idx) {
        return this.curves[idx];
      },
      bbox: function() {
        var c = this.curves;
        var bbox = c[0].bbox();
        for (var i = 1; i < c.length; i++) {
          utils$$1.expandbox(bbox, c[i].bbox());
        }
        return bbox;
      },
      offset: function(d) {
        var offset = [];
        this.curves.forEach(function(v) {
          offset = offset.concat(v.offset(d));
        });
        return new PolyBezier(offset);
      }
    };

    module.exports = PolyBezier;
  })();
  });

  /**
   * Normalise an SVG path to absolute coordinates
   * and full commands, rather than relative coordinates
   * and/or shortcut commands.
   */
  function normalizePath(d) {
    // preprocess "d" so that we have spaces between values
    d = d
      .replace(/,/g, " ") // replace commas with spaces
      .replace(/-/g, " - ") // add spacing around minus signs
      .replace(/-\s+/g, "-") // remove spacing to the right of minus signs.
      .replace(/([a-zA-Z])/g, " $1 ");

    // set up the variables used in this function
    var instructions = d.replace(/([a-zA-Z])\s?/g, "|$1").split("|"),
      instructionLength = instructions.length,
      i,
      instruction,
      op,
      lop,
      args = [],
      alen,
      a,
      sx = 0,
      sy = 0,
      x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      cx2 = 0,
      cy2 = 0,
      normalized = "";

    // we run through the instruction list starting at 1, not 0,
    // because we split up "|M x y ...." so the first element will
    // always be an empty string. By design.
    for (i = 1; i < instructionLength; i++) {
      // which instruction is this?
      instruction = instructions[i];
      op = instruction.substring(0, 1);
      lop = op.toLowerCase();

      // what are the arguments? note that we need to convert
      // all strings into numbers, or + will do silly things.
      args = instruction
        .replace(op, "")
        .trim()
        .split(" ");
      args = args
        .filter(function(v) {
          return v !== "";
        })
        .map(parseFloat);
      alen = args.length;

      // we could use a switch, but elaborate code in a "case" with
      // fallthrough is just horrid to read. So let's use ifthen
      // statements instead.

      // moveto command (plus possible lineto)
      if (lop === "m") {
        normalized += "M ";
        if (op === "m") {
          x += args[0];
          y += args[1];
        } else {
          x = args[0];
          y = args[1];
        }
        // records start position, for dealing
        // with the shape close operator ('Z')
        sx = x;
        sy = y;
        normalized += x + " " + y + " ";
        if (alen > 2) {
          for (a = 0; a < alen; a += 2) {
            if (op === "m") {
              x += args[a];
              y += args[a + 1];
            } else {
              x = args[a];
              y = args[a + 1];
            }
            normalized += ["L",x,y,''].join(" ");
          }
        }
      } else if (lop === "l") {
        // lineto commands
        for (a = 0; a < alen; a += 2) {
          if (op === "l") {
            x += args[a];
            y += args[a + 1];
          } else {
            x = args[a];
            y = args[a + 1];
          }
          normalized += ["L",x,y,''].join(" ");
        }
      } else if (lop === "h") {
        for (a = 0; a < alen; a++) {
          if (op === "h") {
            x += args[a];
          } else {
            x = args[a];
          }
          normalized += ["L",x,y,''].join(" ");
        }
      } else if (lop === "v") {
        for (a = 0; a < alen; a++) {
          if (op === "v") {
            y += args[a];
          } else {
            y = args[a];
          }
          normalized += ["L",x,y,''].join(" ");
        }
      } else if (lop === "q") {
        // quadratic curveto commands
        for (a = 0; a < alen; a += 4) {
          if (op === "q") {
            cx = x + args[a];
            cy = y + args[a + 1];
            x += args[a + 2];
            y += args[a + 3];
          } else {
            cx = args[a];
            cy = args[a + 1];
            x = args[a + 2];
            y = args[a + 3];
          }
          normalized += ["Q",cx,cy,x,y,''].join(" ");
        }
      } else if (lop === "t") {
        for (a = 0; a < alen; a += 2) {
          // reflect previous cx/cy over x/y
          cx = x + (x - cx);
          cy = y + (y - cy);
          // then get real end point
          if (op === "t") {
            x += args[a];
            y += args[a + 1];
          } else {
            x = args[a];
            y = args[a + 1];
          }
          normalized += ["Q",cx,cy,x,y,''].join(" ");
        }
      } else if (lop === "c") {
        // cubic curveto commands
        for (a = 0; a < alen; a += 6) {
          if (op === "c") {
            cx = x + args[a];
            cy = y + args[a + 1];
            cx2 = x + args[a + 2];
            cy2 = y + args[a + 3];
            x += args[a + 4];
            y += args[a + 5];
          } else {
            cx = args[a];
            cy = args[a + 1];
            cx2 = args[a + 2];
            cy2 = args[a + 3];
            x = args[a + 4];
            y = args[a + 5];
          }
          normalized += ["C",cx,cy,cx2,cy2,x,y,''].join(" ");
        }
      } else if (lop === "s") {
        for (a = 0; a < alen; a += 4) {
          // reflect previous cx2/cy2 over x/y
          cx = x + (x - cx2);
          cy = y + (y - cy2);
          // then get real control and end point
          if (op === "s") {
            cx2 = x + args[a];
            cy2 = y + args[a + 1];
            x += args[a + 2];
            y += args[a + 3];
          } else {
            cx2 = args[a];
            cy2 = args[a + 1];
            x = args[a + 2];
            y = args[a + 3];
          }
          normalized +=["C",cx,cy,cx2,cy2,x,y,''].join(" ");
        }
      } else if (lop === "z") {
        normalized += "Z ";
        // not unimportant: path closing changes the current x/y coordinate
        x = sx;
        y = sy;
      }
    }
    return normalized.trim();
  }

  var normaliseSvg = normalizePath;

  var M = { x: false, y: false };

  function makeBezier(Bezier, term, values) {
    if (term === 'Z') return;
    if (term === 'M') {
      M = {x: values[0], y: values[1]};
      return;
    }
    // ES7: new Bezier(M.x, M.y, ...values)
    var cvalues = [false, M.x, M.y].concat(values);
    var PreboundConstructor = Bezier.bind.apply(Bezier, cvalues);
    var curve = new PreboundConstructor();
    var last = values.slice(-2);
    M = { x : last[0], y: last[1] };
    return curve;
  }

  function convertPath(Bezier, d) {
    var terms = normaliseSvg(d).split(" "),
      term,
      matcher = new RegExp("[MLCQZ]", ""),
      segment,
      values,
      segments = [],
      ARGS = { "C": 6, "Q": 4, "L": 2, "M": 2};

    while (terms.length) {
      term = terms.splice(0,1)[0];
      if (matcher.test(term)) {
        values = terms.splice(0, ARGS[term]).map(parseFloat);
        segment = makeBezier(Bezier, term, values);
        if (segment) segments.push(segment);
      }
    }

    return new Bezier.PolyBezier(segments);
  }

  var svgToBeziers = convertPath;

  var bezier = createCommonjsModule(function (module) {
  /**
    A javascript Bezier curve library by Pomax.

    Based on http://pomax.github.io/bezierinfo

    This code is MIT licensed.
  **/
  (function() {

    // math-inlining.
    var abs = Math.abs,
      min = Math.min,
      max = Math.max,
      cos = Math.cos,
      sin = Math.sin,
      acos = Math.acos,
      sqrt = Math.sqrt,
      pi = Math.PI,
      // a zero coordinate, which is surprisingly useful
      ZERO = { x: 0, y: 0, z: 0 };

    // quite needed
    var utils$$1 = utils;

    // only used for outlines atm.
    var PolyBezier = polyBezier;

    /**
     * Bezier curve constructor. The constructor argument can be one of three things:
     *
     * 1. array/4 of {x:..., y:..., z:...}, z optional
     * 2. numerical array/8 ordered x1,y1,x2,y2,x3,y3,x4,y4
     * 3. numerical array/12 ordered x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
     *
     */
    var Bezier = function(coords) {
      var args = coords && coords.forEach ? coords : [].slice.call(arguments);
      var coordlen = false;
      if (typeof args[0] === "object") {
        coordlen = args.length;
        var newargs = [];
        args.forEach(function(point) {
          ["x", "y", "z"].forEach(function(d) {
            if (typeof point[d] !== "undefined") {
              newargs.push(point[d]);
            }
          });
        });
        args = newargs;
      }
      var higher = false;
      var len = args.length;
      if (coordlen) {
        if (coordlen > 4) {
          if (arguments.length !== 1) {
            throw new Error(
              "Only new Bezier(point[]) is accepted for 4th and higher order curves"
            );
          }
          higher = true;
        }
      } else {
        if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
          if (arguments.length !== 1) {
            throw new Error(
              "Only new Bezier(point[]) is accepted for 4th and higher order curves"
            );
          }
        }
      }
      var _3d =
        (!higher && (len === 9 || len === 12)) ||
        (coords && coords[0] && typeof coords[0].z !== "undefined");
      this._3d = _3d;
      var points = [];
      for (var idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
        var point = {
          x: args[idx],
          y: args[idx + 1]
        };
        if (_3d) {
          point.z = args[idx + 2];
        }
        points.push(point);
      }
      this.order = points.length - 1;
      this.points = points;
      var dims = ["x", "y"];
      if (_3d) dims.push("z");
      this.dims = dims;
      this.dimlen = dims.length;

      (function(curve) {
        var order = curve.order;
        var points = curve.points;
        var a = utils$$1.align(points, { p1: points[0], p2: points[order] });
        for (var i = 0; i < a.length; i++) {
          if (abs(a[i].y) > 0.0001) {
            curve._linear = false;
            return;
          }
        }
        curve._linear = true;
      })(this);

      this._t1 = 0;
      this._t2 = 1;
      this.update();
    };

    var svgToBeziers$$1 = svgToBeziers;

    /**
     * turn an svg <path> d attribute into a sequence of Bezier segments.
     */
    Bezier.SVGtoBeziers = function(d) {
      return svgToBeziers$$1(Bezier, d);
    };

    function getABC(n, S, B, E, t) {
      if (typeof t === "undefined") {
        t = 0.5;
      }
      var u = utils$$1.projectionratio(t, n),
        um = 1 - u,
        C = {
          x: u * S.x + um * E.x,
          y: u * S.y + um * E.y
        },
        s = utils$$1.abcratio(t, n),
        A = {
          x: B.x + (B.x - C.x) / s,
          y: B.y + (B.y - C.y) / s
        };
      return { A: A, B: B, C: C };
    }

    Bezier.quadraticFromPoints = function(p1, p2, p3, t) {
      if (typeof t === "undefined") {
        t = 0.5;
      }
      // shortcuts, although they're really dumb
      if (t === 0) {
        return new Bezier(p2, p2, p3);
      }
      if (t === 1) {
        return new Bezier(p1, p2, p2);
      }
      // real fitting.
      var abc = getABC(2, p1, p2, p3, t);
      return new Bezier(p1, abc.A, p3);
    };

    Bezier.cubicFromPoints = function(S, B, E, t, d1) {
      if (typeof t === "undefined") {
        t = 0.5;
      }
      var abc = getABC(3, S, B, E, t);
      if (typeof d1 === "undefined") {
        d1 = utils$$1.dist(B, abc.C);
      }
      var d2 = d1 * (1 - t) / t;

      var selen = utils$$1.dist(S, E),
        lx = (E.x - S.x) / selen,
        ly = (E.y - S.y) / selen,
        bx1 = d1 * lx,
        by1 = d1 * ly,
        bx2 = d2 * lx,
        by2 = d2 * ly;
      // derivation of new hull coordinates
      var e1 = { x: B.x - bx1, y: B.y - by1 },
        e2 = { x: B.x + bx2, y: B.y + by2 },
        A = abc.A,
        v1 = { x: A.x + (e1.x - A.x) / (1 - t), y: A.y + (e1.y - A.y) / (1 - t) },
        v2 = { x: A.x + (e2.x - A.x) / t, y: A.y + (e2.y - A.y) / t },
        nc1 = { x: S.x + (v1.x - S.x) / t, y: S.y + (v1.y - S.y) / t },
        nc2 = {
          x: E.x + (v2.x - E.x) / (1 - t),
          y: E.y + (v2.y - E.y) / (1 - t)
        };
      // ...done
      return new Bezier(S, nc1, nc2, E);
    };

    var getUtils = function() {
      return utils$$1;
    };

    Bezier.getUtils = getUtils;

    Bezier.PolyBezier = PolyBezier;

    Bezier.prototype = {
      getUtils: getUtils,
      valueOf: function() {
        return this.toString();
      },
      toString: function() {
        return utils$$1.pointsToString(this.points);
      },
      toSVG: function(relative) {
        if (this._3d) return false;
        var p = this.points,
          x = p[0].x,
          y = p[0].y,
          s = ["M", x, y, this.order === 2 ? "Q" : "C"];
        for (var i = 1, last = p.length; i < last; i++) {
          s.push(p[i].x);
          s.push(p[i].y);
        }
        return s.join(" ");
      },
      update: function() {
        // one-time compute derivative coordinates
        this.dpoints = [];
        for (var p = this.points, d = p.length, c = d - 1; d > 1; d--, c--) {
          var list = [];
          for (var j = 0, dpt; j < c; j++) {
            dpt = {
              x: c * (p[j + 1].x - p[j].x),
              y: c * (p[j + 1].y - p[j].y)
            };
            if (this._3d) {
              dpt.z = c * (p[j + 1].z - p[j].z);
            }
            list.push(dpt);
          }
          this.dpoints.push(list);
          p = list;
        }
        this.computedirection();
      },
      computedirection: function() {
        var points = this.points;
        var angle = utils$$1.angle(points[0], points[this.order], points[1]);
        this.clockwise = angle > 0;
      },
      length: function() {
        return utils$$1.length(this.derivative.bind(this));
      },
      _lut: [],
      getLUT: function(steps) {
        steps = steps || 100;
        if (this._lut.length === steps) {
          return this._lut;
        }
        this._lut = [];
        // We want a range from 0 to 1 inclusive, so
        // we decrement and then use <= rather than <:
        steps--;
        for (var t = 0; t <= steps; t++) {
          this._lut.push(this.compute(t / steps));
        }
        return this._lut;
      },
      on: function(point, error) {
        error = error || 5;
        var lut = this.getLUT(),
          hits = [],
          c,
          t = 0;
        for (var i = 0; i < lut.length; i++) {
          c = lut[i];
          if (utils$$1.dist(c, point) < error) {
            hits.push(c);
            t += i / lut.length;
          }
        }
        if (!hits.length) return false;
        return (t /= hits.length);
      },
      project: function(point) {
        // step 1: coarse check
        var LUT = this.getLUT(),
          l = LUT.length - 1,
          closest = utils$$1.closest(LUT, point),
          mdist = closest.mdist,
          mpos = closest.mpos;
        if (mpos === 0 || mpos === l) {
          var t = mpos / l,
            pt = this.compute(t);
          pt.t = t;
          pt.d = mdist;
          return pt;
        }

        // step 2: fine check
        var ft,
          t,
          p,
          d,
          t1 = (mpos - 1) / l,
          t2 = (mpos + 1) / l,
          step = 0.1 / l;
        mdist += 1;
        for (t = t1, ft = t; t < t2 + step; t += step) {
          p = this.compute(t);
          d = utils$$1.dist(point, p);
          if (d < mdist) {
            mdist = d;
            ft = t;
          }
        }
        p = this.compute(ft);
        p.t = ft;
        p.d = mdist;
        return p;
      },
      get: function(t) {
        return this.compute(t);
      },
      point: function(idx) {
        return this.points[idx];
      },
      compute: function(t) {
        // shortcuts
        if (t === 0) {
          return this.points[0];
        }
        if (t === 1) {
          return this.points[this.order];
        }

        var p = this.points;
        var mt = 1 - t;

        // linear?
        if (this.order === 1) {
          ret = {
            x: mt * p[0].x + t * p[1].x,
            y: mt * p[0].y + t * p[1].y
          };
          if (this._3d) {
            ret.z = mt * p[0].z + t * p[1].z;
          }
          return ret;
        }

        // quadratic/cubic curve?
        if (this.order < 4) {
          var mt2 = mt * mt,
            t2 = t * t,
            a,
            b,
            c,
            d = 0;
          if (this.order === 2) {
            p = [p[0], p[1], p[2], ZERO];
            a = mt2;
            b = mt * t * 2;
            c = t2;
          } else if (this.order === 3) {
            a = mt2 * mt;
            b = mt2 * t * 3;
            c = mt * t2 * 3;
            d = t * t2;
          }
          var ret = {
            x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
            y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y
          };
          if (this._3d) {
            ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
          }
          return ret;
        }

        // higher order curves: use de Casteljau's computation
        var dCpts = JSON.parse(JSON.stringify(this.points));
        while (dCpts.length > 1) {
          for (var i = 0; i < dCpts.length - 1; i++) {
            dCpts[i] = {
              x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t,
              y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t
            };
            if (typeof dCpts[i].z !== "undefined") {
              dCpts[i] = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t;
            }
          }
          dCpts.splice(dCpts.length - 1, 1);
        }
        return dCpts[0];
      },
      raise: function() {
        var p = this.points,
          np = [p[0]],
          i,
          k = p.length,
          pi,
          pim;
        for (var i = 1; i < k; i++) {
          pi = p[i];
          pim = p[i - 1];
          np[i] = {
            x: (k - i) / k * pi.x + i / k * pim.x,
            y: (k - i) / k * pi.y + i / k * pim.y
          };
        }
        np[k] = p[k - 1];
        return new Bezier(np);
      },
      derivative: function(t) {
        var mt = 1 - t,
          a,
          b,
          c = 0,
          p = this.dpoints[0];
        if (this.order === 2) {
          p = [p[0], p[1], ZERO];
          a = mt;
          b = t;
        }
        if (this.order === 3) {
          a = mt * mt;
          b = mt * t * 2;
          c = t * t;
        }
        var ret = {
          x: a * p[0].x + b * p[1].x + c * p[2].x,
          y: a * p[0].y + b * p[1].y + c * p[2].y
        };
        if (this._3d) {
          ret.z = a * p[0].z + b * p[1].z + c * p[2].z;
        }
        return ret;
      },
      inflections: function() {
        return utils$$1.inflections(this.points);
      },
      normal: function(t) {
        return this._3d ? this.__normal3(t) : this.__normal2(t);
      },
      __normal2: function(t) {
        var d = this.derivative(t);
        var q = sqrt(d.x * d.x + d.y * d.y);
        return { x: -d.y / q, y: d.x / q };
      },
      __normal3: function(t) {
        // see http://stackoverflow.com/questions/25453159
        var r1 = this.derivative(t),
          r2 = this.derivative(t + 0.01),
          q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z),
          q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
        r1.x /= q1;
        r1.y /= q1;
        r1.z /= q1;
        r2.x /= q2;
        r2.y /= q2;
        r2.z /= q2;
        // cross product
        var c = {
          x: r2.y * r1.z - r2.z * r1.y,
          y: r2.z * r1.x - r2.x * r1.z,
          z: r2.x * r1.y - r2.y * r1.x
        };
        var m = sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
        c.x /= m;
        c.y /= m;
        c.z /= m;
        // rotation matrix
        var R = [
          c.x * c.x,
          c.x * c.y - c.z,
          c.x * c.z + c.y,
          c.x * c.y + c.z,
          c.y * c.y,
          c.y * c.z - c.x,
          c.x * c.z - c.y,
          c.y * c.z + c.x,
          c.z * c.z
        ];
        // normal vector:
        var n = {
          x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
          y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
          z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
        };
        return n;
      },
      hull: function(t) {
        var p = this.points,
          _p = [],
          pt,
          q = [],
          idx = 0,
          i = 0,
          l = 0;
        q[idx++] = p[0];
        q[idx++] = p[1];
        q[idx++] = p[2];
        if (this.order === 3) {
          q[idx++] = p[3];
        }
        // we lerp between all points at each iteration, until we have 1 point left.
        while (p.length > 1) {
          _p = [];
          for (i = 0, l = p.length - 1; i < l; i++) {
            pt = utils$$1.lerp(t, p[i], p[i + 1]);
            q[idx++] = pt;
            _p.push(pt);
          }
          p = _p;
        }
        return q;
      },
      split: function(t1, t2) {
        // shortcuts
        if (t1 === 0 && !!t2) {
          return this.split(t2).left;
        }
        if (t2 === 1) {
          return this.split(t1).right;
        }

        // no shortcut: use "de Casteljau" iteration.
        var q = this.hull(t1);
        var result = {
          left:
            this.order === 2
              ? new Bezier([q[0], q[3], q[5]])
              : new Bezier([q[0], q[4], q[7], q[9]]),
          right:
            this.order === 2
              ? new Bezier([q[5], q[4], q[2]])
              : new Bezier([q[9], q[8], q[6], q[3]]),
          span: q
        };

        // make sure we bind _t1/_t2 information!
        result.left._t1 = utils$$1.map(0, 0, 1, this._t1, this._t2);
        result.left._t2 = utils$$1.map(t1, 0, 1, this._t1, this._t2);
        result.right._t1 = utils$$1.map(t1, 0, 1, this._t1, this._t2);
        result.right._t2 = utils$$1.map(1, 0, 1, this._t1, this._t2);

        // if we have no t2, we're done
        if (!t2) {
          return result;
        }

        // if we have a t2, split again:
        t2 = utils$$1.map(t2, t1, 1, 0, 1);
        var subsplit = result.right.split(t2);
        return subsplit.left;
      },
      extrema: function() {
        var dims = this.dims,
          result = {},
          roots = [],
          p,
          mfn;
        dims.forEach(
          function(dim) {
            mfn = function(v) {
              return v[dim];
            };
            p = this.dpoints[0].map(mfn);
            result[dim] = utils$$1.droots(p);
            if (this.order === 3) {
              p = this.dpoints[1].map(mfn);
              result[dim] = result[dim].concat(utils$$1.droots(p));
            }
            result[dim] = result[dim].filter(function(t) {
              return t >= 0 && t <= 1;
            });
            roots = roots.concat(result[dim].sort(utils$$1.numberSort));
          }.bind(this)
        );
        roots = roots.sort(utils$$1.numberSort).filter(function(v, idx) {
          return roots.indexOf(v) === idx;
        });
        result.values = roots;
        return result;
      },
      bbox: function() {
        var extrema = this.extrema(),
          result = {};
        this.dims.forEach(
          function(d) {
            result[d] = utils$$1.getminmax(this, d, extrema[d]);
          }.bind(this)
        );
        return result;
      },
      overlaps: function(curve) {
        var lbbox = this.bbox(),
          tbbox = curve.bbox();
        return utils$$1.bboxoverlap(lbbox, tbbox);
      },
      offset: function(t, d) {
        if (typeof d !== "undefined") {
          var c = this.get(t);
          var n = this.normal(t);
          var ret = {
            c: c,
            n: n,
            x: c.x + n.x * d,
            y: c.y + n.y * d
          };
          if (this._3d) {
            ret.z = c.z + n.z * d;
          }
          return ret;
        }
        if (this._linear) {
          var nv = this.normal(0);
          var coords = this.points.map(function(p) {
            var ret = {
              x: p.x + t * nv.x,
              y: p.y + t * nv.y
            };
            if (p.z && n.z) {
              ret.z = p.z + t * nv.z;
            }
            return ret;
          });
          return [new Bezier(coords)];
        }
        var reduced = this.reduce();
        return reduced.map(function(s) {
          return s.scale(t);
        });
      },
      simple: function() {
        if (this.order === 3) {
          var a1 = utils$$1.angle(this.points[0], this.points[3], this.points[1]);
          var a2 = utils$$1.angle(this.points[0], this.points[3], this.points[2]);
          if ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0)) return false;
        }
        var n1 = this.normal(0);
        var n2 = this.normal(1);
        var s = n1.x * n2.x + n1.y * n2.y;
        if (this._3d) {
          s += n1.z * n2.z;
        }
        var angle = abs(acos(s));
        return angle < pi / 3;
      },
      reduce: function() {
        var i,
          t1 = 0,
          t2 = 0,
          step = 0.01,
          segment,
          pass1 = [],
          pass2 = [];
        // first pass: split on extrema
        var extrema = this.extrema().values;
        if (extrema.indexOf(0) === -1) {
          extrema = [0].concat(extrema);
        }
        if (extrema.indexOf(1) === -1) {
          extrema.push(1);
        }

        for (t1 = extrema[0], i = 1; i < extrema.length; i++) {
          t2 = extrema[i];
          segment = this.split(t1, t2);
          segment._t1 = t1;
          segment._t2 = t2;
          pass1.push(segment);
          t1 = t2;
        }

        // second pass: further reduce these segments to simple segments
        pass1.forEach(function(p1) {
          t1 = 0;
          t2 = 0;
          while (t2 <= 1) {
            for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
              segment = p1.split(t1, t2);
              if (!segment.simple()) {
                t2 -= step;
                if (abs(t1 - t2) < step) {
                  // we can never form a reduction
                  return [];
                }
                segment = p1.split(t1, t2);
                segment._t1 = utils$$1.map(t1, 0, 1, p1._t1, p1._t2);
                segment._t2 = utils$$1.map(t2, 0, 1, p1._t1, p1._t2);
                pass2.push(segment);
                t1 = t2;
                break;
              }
            }
          }
          if (t1 < 1) {
            segment = p1.split(t1, 1);
            segment._t1 = utils$$1.map(t1, 0, 1, p1._t1, p1._t2);
            segment._t2 = p1._t2;
            pass2.push(segment);
          }
        });
        return pass2;
      },
      scale: function(d) {
        var order = this.order;
        var distanceFn = false;
        if (typeof d === "function") {
          distanceFn = d;
        }
        if (distanceFn && order === 2) {
          return this.raise().scale(distanceFn);
        }

        // TODO: add special handling for degenerate (=linear) curves.
        var clockwise = this.clockwise;
        var r1 = distanceFn ? distanceFn(0) : d;
        var r2 = distanceFn ? distanceFn(1) : d;
        var v = [this.offset(0, 10), this.offset(1, 10)];
        var o = utils$$1.lli4(v[0], v[0].c, v[1], v[1].c);
        if (!o) {
          throw new Error("cannot scale this curve. Try reducing it first.");
        }
        // move all points by distance 'd' wrt the origin 'o'
        var points = this.points,
          np = [];

        // move end points by fixed distance along normal.
        [0, 1].forEach(
          function(t) {
            var p = (np[t * order] = utils$$1.copy(points[t * order]));
            p.x += (t ? r2 : r1) * v[t].n.x;
            p.y += (t ? r2 : r1) * v[t].n.y;
          }.bind(this)
        );

        if (!distanceFn) {
          // move control points to lie on the intersection of the offset
          // derivative vector, and the origin-through-control vector
          [0, 1].forEach(
            function(t) {
              if (this.order === 2 && !!t) return;
              var p = np[t * order];
              var d = this.derivative(t);
              var p2 = { x: p.x + d.x, y: p.y + d.y };
              np[t + 1] = utils$$1.lli4(p, p2, o, points[t + 1]);
            }.bind(this)
          );
          return new Bezier(np);
        }

        // move control points by "however much necessary to
        // ensure the correct tangent to endpoint".
        [0, 1].forEach(
          function(t) {
            if (this.order === 2 && !!t) return;
            var p = points[t + 1];
            var ov = {
              x: p.x - o.x,
              y: p.y - o.y
            };
            var rc = distanceFn ? distanceFn((t + 1) / order) : d;
            if (distanceFn && !clockwise) rc = -rc;
            var m = sqrt(ov.x * ov.x + ov.y * ov.y);
            ov.x /= m;
            ov.y /= m;
            np[t + 1] = {
              x: p.x + rc * ov.x,
              y: p.y + rc * ov.y
            };
          }.bind(this)
        );
        return new Bezier(np);
      },
      outline: function(d1, d2, d3, d4) {
        d2 = typeof d2 === "undefined" ? d1 : d2;
        var reduced = this.reduce(),
          len = reduced.length,
          fcurves = [],
          bcurves = [],
          p,
          alen = 0,
          tlen = this.length();

        var graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";

        function linearDistanceFunction(s, e, tlen, alen, slen) {
          return function(v) {
            var f1 = alen / tlen,
              f2 = (alen + slen) / tlen,
              d = e - s;
            return utils$$1.map(v, 0, 1, s + f1 * d, s + f2 * d);
          };
        }

        // form curve oulines
        reduced.forEach(function(segment) {
          slen = segment.length();
          if (graduated) {
            fcurves.push(
              segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
            );
            bcurves.push(
              segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
            );
          } else {
            fcurves.push(segment.scale(d1));
            bcurves.push(segment.scale(-d2));
          }
          alen += slen;
        });

        // reverse the "return" outline
        bcurves = bcurves
          .map(function(s) {
            p = s.points;
            if (p[3]) {
              s.points = [p[3], p[2], p[1], p[0]];
            } else {
              s.points = [p[2], p[1], p[0]];
            }
            return s;
          })
          .reverse();

        // form the endcaps as lines
        var fs = fcurves[0].points[0],
          fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1],
          bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1],
          be = bcurves[0].points[0],
          ls = utils$$1.makeline(bs, fs),
          le = utils$$1.makeline(fe, be),
          segments = [ls]
            .concat(fcurves)
            .concat([le])
            .concat(bcurves),
          slen = segments.length;

        return new PolyBezier(segments);
      },
      outlineshapes: function(d1, d2, curveIntersectionThreshold) {
        d2 = d2 || d1;
        var outline = this.outline(d1, d2).curves;
        var shapes = [];
        for (var i = 1, len = outline.length; i < len / 2; i++) {
          var shape = utils$$1.makeshape(
            outline[i],
            outline[len - i],
            curveIntersectionThreshold
          );
          shape.startcap.virtual = i > 1;
          shape.endcap.virtual = i < len / 2 - 1;
          shapes.push(shape);
        }
        return shapes;
      },
      intersects: function(curve, curveIntersectionThreshold) {
        if (!curve) return this.selfintersects(curveIntersectionThreshold);
        if (curve.p1 && curve.p2) {
          return this.lineIntersects(curve);
        }
        if (curve instanceof Bezier) {
          curve = curve.reduce();
        }
        return this.curveintersects(
          this.reduce(),
          curve,
          curveIntersectionThreshold
        );
      },
      lineIntersects: function(line) {
        var mx = min(line.p1.x, line.p2.x),
          my = min(line.p1.y, line.p2.y),
          MX = max(line.p1.x, line.p2.x),
          MY = max(line.p1.y, line.p2.y),
          self = this;
        return utils$$1.roots(this.points, line).filter(function(t) {
          var p = self.get(t);
          return utils$$1.between(p.x, mx, MX) && utils$$1.between(p.y, my, MY);
        });
      },
      selfintersects: function(curveIntersectionThreshold) {
        var reduced = this.reduce();
        // "simple" curves cannot intersect with their direct
        // neighbour, so for each segment X we check whether
        // it intersects [0:x-2][x+2:last].
        var i,
          len = reduced.length - 2,
          results = [],
          result,
          left,
          right;
        for (i = 0; i < len; i++) {
          left = reduced.slice(i, i + 1);
          right = reduced.slice(i + 2);
          result = this.curveintersects(left, right, curveIntersectionThreshold);
          results = results.concat(result);
        }
        return results;
      },
      curveintersects: function(c1, c2, curveIntersectionThreshold) {
        var pairs = [];
        // step 1: pair off any overlapping segments
        c1.forEach(function(l) {
          c2.forEach(function(r) {
            if (l.overlaps(r)) {
              pairs.push({ left: l, right: r });
            }
          });
        });
        // step 2: for each pairing, run through the convergence algorithm.
        var intersections = [];
        pairs.forEach(function(pair) {
          var result = utils$$1.pairiteration(
            pair.left,
            pair.right,
            curveIntersectionThreshold
          );
          if (result.length > 0) {
            intersections = intersections.concat(result);
          }
        });
        return intersections;
      },
      arcs: function(errorThreshold) {
        errorThreshold = errorThreshold || 0.5;
        var circles = [];
        return this._iterate(errorThreshold, circles);
      },
      _error: function(pc, np1, s, e) {
        var q = (e - s) / 4,
          c1 = this.get(s + q),
          c2 = this.get(e - q),
          ref = utils$$1.dist(pc, np1),
          d1 = utils$$1.dist(pc, c1),
          d2 = utils$$1.dist(pc, c2);
        return abs(d1 - ref) + abs(d2 - ref);
      },
      _iterate: function(errorThreshold, circles) {
        var t_s = 0,
          t_e = 1,
          safety;
        // we do a binary search to find the "good `t` closest to no-longer-good"
        do {
          safety = 0;

          // step 1: start with the maximum possible arc
          t_e = 1;

          // points:
          var np1 = this.get(t_s),
            np2,
            np3,
            arc,
            prev_arc;

          // booleans:
          var curr_good = false,
            prev_good = false,
            done;

          // numbers:
          var t_m = t_e,
            prev_e = 1;

          // step 2: find the best possible arc
          do {
            prev_good = curr_good;
            prev_arc = arc;
            t_m = (t_s + t_e) / 2;

            np2 = this.get(t_m);
            np3 = this.get(t_e);

            arc = utils$$1.getccenter(np1, np2, np3);

            //also save the t values
            arc.interval = {
              start: t_s,
              end: t_e
            };

            var error = this._error(arc, np1, t_s, t_e);
            curr_good = error <= errorThreshold;

            done = prev_good && !curr_good;
            if (!done) prev_e = t_e;

            // this arc is fine: we can move 'e' up to see if we can find a wider arc
            if (curr_good) {
              // if e is already at max, then we're done for this arc.
              if (t_e >= 1) {
                // make sure we cap at t=1
                arc.interval.end = prev_e = 1;
                prev_arc = arc;
                // if we capped the arc segment to t=1 we also need to make sure that
                // the arc's end angle is correct with respect to the bezier end point.
                if (t_e > 1) {
                  var d = {
                    x: arc.x + arc.r * cos(arc.e),
                    y: arc.y + arc.r * sin(arc.e)
                  };
                  arc.e += utils$$1.angle({ x: arc.x, y: arc.y }, d, this.get(1));
                }
                break;
              }
              // if not, move it up by half the iteration distance
              t_e = t_e + (t_e - t_s) / 2;
            } else {
              // this is a bad arc: we need to move 'e' down to find a good arc
              t_e = t_m;
            }
          } while (!done && safety++ < 100);

          if (safety >= 100) {
            break;
          }

          // console.log("L835: [F] arc found", t_s, prev_e, prev_arc.x, prev_arc.y, prev_arc.s, prev_arc.e);

          prev_arc = prev_arc ? prev_arc : arc;
          circles.push(prev_arc);
          t_s = prev_e;
        } while (t_e < 1);
        return circles;
      }
    };

    module.exports = Bezier;
  })();
  });

  var bezierJs = bezier;

  var kapsule_min = createCommonjsModule(function (module, exports) {
  !function(n,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r});},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){var r,o,i;u=function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){var t=n.stateInit,e=void 0===t?function(){return {}}:t,r=n.props,a=void 0===r?{}:r,f=n.methods,l=void 0===f?{}:f,c=n.aliases,s=void 0===c?{}:c,d=n.init,p=void 0===d?function(){}:d,v=n.update,h=void 0===v?function(){}:v,y=Object.keys(a).map(function(n){return new u(n,a[n])});return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},e instanceof Function?e():e,{initialised:!1});function r(t){return u(t,n),a(),r}var u=function(n,e){p.call(r,n,t,e),t.initialised=!0;},a=(0, o.default)(function(){t.initialised&&h.call(r,t);},1);return y.forEach(function(n){r[n.name]=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(n,t){};return function(i){return arguments.length?(t[n]=i,o.call(r,i,t),e&&a(),r):t[n]}}(n.name,n.triggerUpdate,n.onChange);}),Object.keys(l).forEach(function(n){r[n]=function(){for(var e,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return (e=l[n]).call.apply(e,[r,t].concat(i))};}),Object.entries(s).forEach(function(n){var t=i(n,2),e=t[0],o=t[1];return r[e]=r[o]}),r.resetProps=function(){return y.forEach(function(n){r[n.name](n.defaultVal);}),r},r.resetProps(),t._rerender=a,r}};var r,o=(r=e,r&&r.__esModule?r:{default:r});var i=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n;}finally{try{!r&&a.return&&a.return();}finally{if(o)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var u=function n(t,e){var r=e.default,o=void 0===r?null:r,i=e.triggerUpdate,u=void 0===i||i,a=e.onChange,f=void 0===a?function(n,t){}:a;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=t,this.defaultVal=o,this.triggerUpdate=u,this.onChange=f;};n.exports=t.default;},o=[n,t,e(1)],void 0===(i="function"==typeof(r=u)?r.apply(t,o):r)||(n.exports=i);var u;},function(n,t){n.exports=function(n,t,e){var r,o,i,u,a;null==t&&(t=100);function f(){var l=Date.now()-u;l<t&&l>=0?r=setTimeout(f,t-l):(r=null,e||(a=n.apply(i,o),i=o=null));}var l=function(){i=this,o=arguments,u=Date.now();var l=e&&!r;return r||(r=setTimeout(f,t)),l&&(a=n.apply(i,o),i=o=null),a};return l.clear=function(){r&&(clearTimeout(r),r=null);},l.flush=function(){r&&(a=n.apply(i,o),i=o=null,clearTimeout(r),r=null);},l};}])});
  });

  var Kapsule = unwrapExports(kapsule_min);
  var kapsule_min_1 = kapsule_min.Kapsule;

  var accessor_min = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o});},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){var o,r,u;!function(n,c){r=[e,t],void 0!==(u="function"==typeof(o=c)?o.apply(t,r):o)&&(e.exports=u);}(0,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e instanceof Function?e:"string"==typeof e?function(t){return t[e]}:function(t){return e}},e.exports=t.default;});}])});
  });

  var accessorFn = unwrapExports(accessor_min);
  var accessor_min_1 = accessor_min.accessorFn;

  var indexArrayBy_min = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r});},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r,o,u;o=[e,t],void 0===(u="function"==typeof(r=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=(t instanceof Array?t:[t]).map(function(e){return {keyAccessor:e,isProp:!(e instanceof Function)}});return e.reduce(function(e,t){var o=e,u=t;return r.forEach(function(e,t){var f=e.keyAccessor,i=void 0;if(e.isProp){var c=u,p=c[f],s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(c,[f]);i=p,u=s;}else i=f(u);t+1<r.length?(o.hasOwnProperty(i)||(o[i]={}),o=o[i]):n?(o.hasOwnProperty(i)||(o[i]=[]),o[i].push(u)):o[i]=u;}),e},{})},e.exports=t.default;})?r.apply(t,o):r)||(e.exports=u);}])});
  });

  var indexBy = unwrapExports(indexArrayBy_min);
  var indexArrayBy_min_1 = indexArrayBy_min.indexBy;

  var xhtml = "http://www.w3.org/1999/xhtml";

  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
  }

  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  }

  function none() {}

  function selector(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  function selection_selectAll(select) {
    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection(subgroups, parents);
  }

  var matcher = function(selector) {
    return function() {
      return this.matches(selector);
    };
  };

  if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!element.matches) {
      var vendorMatches = element.webkitMatchesSelector
          || element.msMatchesSelector
          || element.mozMatchesSelector
          || element.oMatchesSelector;
      matcher = function(selector) {
        return function() {
          return vendorMatches.call(this, selector);
        };
      };
    }
  }

  var matcher$1 = matcher;

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher$1(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant$2(x) {
    return function() {
      return x;
    };
  }

  var keyPrefix = "$"; // Protect against keys like “__proto__”.

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = {},
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) {
          exit[i] = node;
        } else {
          nodeByKeyValue[keyValue] = node;
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = keyPrefix + key.call(parent, data[i], i, data);
      if (node = nodeByKeyValue[keyValue]) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue[keyValue] = null;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
        exit[i] = node;
      }
    }
  }

  function selection_data(value, key) {
    if (!value) {
      data = new Array(this.size()), j = -1;
      this.each(function(d) { data[++j] = d; });
      return data;
    }

    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant$2(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = value.call(parent, parent && parent.__data__, j, parents),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_merge(selection$$1) {

    for (var groups0 = this._groups, groups1 = selection$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection(merges, this._parents);
  }

  function selection_order() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function() { nodes[++i] = this; });
    return nodes;
  }

  function selection_node() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    var size = 0;
    this.each(function() { ++size; });
    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
  }

  function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove : typeof value === "function"
              ? styleFunction
              : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
  }

  function selection_cloneDeep() {
    return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  var filterEvents = {};

  var event = null;

  if (typeof document !== "undefined") {
    var element$1 = document.documentElement;
    if (!("onmouseenter" in element$1)) {
      filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
    }
  }

  function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function(event) {
      var related = event.relatedTarget;
      if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
        listener.call(this, event);
      }
    };
  }

  function contextListener(listener, index, group) {
    return function(event1) {
      var event0 = event; // Events can be reentrant (e.g., focus).
      event = event1;
      try {
        listener.call(this, this.__data__, index, group);
      } finally {
        event = event0;
      }
    };
  }

  function parseTypenames$1(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
      var on = this.__on, o, listener = wrap(value, i, group);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, capture);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on(typename, value, capture) {
    var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;
    if (capture == null) capture = false;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
    return this;
  }

  function customEvent(event1, listener, that, args) {
    var event0 = event;
    event1.sourceEvent = event;
    event = event1;
    try {
      return listener.apply(that, args);
    } finally {
      event = event0;
    }
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  }

  var root = [null];

  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection([[document.documentElement]], root);
  }

  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    merge: selection_merge,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  };

  function select(selector) {
    return typeof selector === "string"
        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
        : new Selection([[selector]], root);
  }

  function sourceEvent() {
    var current = event, source;
    while (source = current.sourceEvent) current = source;
    return current;
  }

  function point(node, event) {
    var svg = node.ownerSVGElement || node;

    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }

    var rect = node.getBoundingClientRect();
    return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
  }

  function mouse(node) {
    var event = sourceEvent();
    if (event.changedTouches) event = event.changedTouches[0];
    return point(node, event);
  }

  function touch(node, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

    for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return point(node, touch);
      }
    }

    return null;
  }

  function nopropagation() {
    event.stopImmediatePropagation();
  }

  function noevent() {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function dragDisable(view) {
    var root = view.document.documentElement,
        selection$$1 = select(view).on("dragstart.drag", noevent, true);
    if ("onselectstart" in root) {
      selection$$1.on("selectstart.drag", noevent, true);
    } else {
      root.__noselect = root.style.MozUserSelect;
      root.style.MozUserSelect = "none";
    }
  }

  function yesdrag(view, noclick) {
    var root = view.document.documentElement,
        selection$$1 = select(view).on("dragstart.drag", null);
    if (noclick) {
      selection$$1.on("click.drag", noevent, true);
      setTimeout(function() { selection$$1.on("click.drag", null); }, 0);
    }
    if ("onselectstart" in root) {
      selection$$1.on("selectstart.drag", null);
    } else {
      root.style.MozUserSelect = root.__noselect;
      delete root.__noselect;
    }
  }

  function constant$3(x) {
    return function() {
      return x;
    };
  }

  function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
    this.target = target;
    this.type = type;
    this.subject = subject;
    this.identifier = id;
    this.active = active;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this._ = dispatch;
  }

  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // Ignore right-click, since that should open the context menu.
  function defaultFilter() {
    return !event.button;
  }

  function defaultContainer() {
    return this.parentNode;
  }

  function defaultSubject(d) {
    return d == null ? {x: event.x, y: event.y} : d;
  }

  function defaultTouchable() {
    return "ontouchstart" in this;
  }

  function drag() {
    var filter = defaultFilter,
        container = defaultContainer,
        subject = defaultSubject,
        touchable = defaultTouchable,
        gestures = {},
        listeners = dispatch("start", "drag", "end"),
        active = 0,
        mousedownx,
        mousedowny,
        mousemoving,
        touchending,
        clickDistance2 = 0;

    function drag(selection$$1) {
      selection$$1
          .on("mousedown.drag", mousedowned)
        .filter(touchable)
          .on("touchstart.drag", touchstarted)
          .on("touchmove.drag", touchmoved)
          .on("touchend.drag touchcancel.drag", touchended)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function mousedowned() {
      if (touchending || !filter.apply(this, arguments)) return;
      var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
      if (!gesture) return;
      select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
      dragDisable(event.view);
      nopropagation();
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start");
    }

    function mousemoved() {
      noevent();
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag");
    }

    function mouseupped() {
      select(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent();
      gestures.mouse("end");
    }

    function touchstarted() {
      if (!filter.apply(this, arguments)) return;
      var touches$$1 = event.changedTouches,
          c = container.apply(this, arguments),
          n = touches$$1.length, i, gesture;

      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(touches$$1[i].identifier, c, touch, this, arguments)) {
          nopropagation();
          gesture("start");
        }
      }
    }

    function touchmoved() {
      var touches$$1 = event.changedTouches,
          n = touches$$1.length, i, gesture;

      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches$$1[i].identifier]) {
          noevent();
          gesture("drag");
        }
      }
    }

    function touchended() {
      var touches$$1 = event.changedTouches,
          n = touches$$1.length, i, gesture;

      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches$$1[i].identifier]) {
          nopropagation();
          gesture("end");
        }
      }
    }

    function beforestart(id, container, point$$1, that, args) {
      var p = point$$1(container, id), s, dx, dy,
          sublisteners = listeners.copy();

      if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
        if ((event.subject = s = subject.apply(that, args)) == null) return false;
        dx = s.x - p[0] || 0;
        dy = s.y - p[1] || 0;
        return true;
      })) return;

      return function gesture(type) {
        var p0 = p, n;
        switch (type) {
          case "start": gestures[id] = gesture, n = active++; break;
          case "end": delete gestures[id], --active; // nobreak
          case "drag": p = point$$1(container, id), n = active; break;
        }
        customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
      };
    }

    drag.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$3(!!_), drag) : filter;
    };

    drag.container = function(_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant$3(_), drag) : container;
    };

    drag.subject = function(_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$3(_), drag) : subject;
    };

    drag.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$3(!!_), drag) : touchable;
    };

    drag.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };

    drag.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };

    return drag;
  }

  var emptyOn = dispatch("start", "end", "interrupt");
  var emptyTween = [];

  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;

  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create$1(node, id, {
      name: name,
      index: index, // For context during callback.
      group: group, // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }

  function init(node, id) {
    var schedule = get$1(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }

  function set$2(node, id) {
    var schedule = get$1(node, id);
    if (schedule.state > STARTING) throw new Error("too late; already started");
    return schedule;
  }

  function get$1(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create$1(node, id, self) {
    var schedules = node.__transition,
        tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout$1(start);

        // Interrupt the active transition, if any.
        // Dispatch the interrupt event.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions. No interrupt event is dispatched
        // because the cancelled transitions never started. Note that this also
        // removes this transition from the pending list!
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout$1(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(null, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule$$1,
        active,
        empty = true,
        i;

    if (!schedules) return;

    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule$$1 = schedules[i]).name !== name) { empty = false; continue; }
      active = schedule$$1.state > STARTING && schedule$$1.state < ENDING;
      schedule$$1.state = ENDED;
      schedule$$1.timer.stop();
      if (active) schedule$$1.on.call("interrupt", node, node.__data__, schedule$$1.index, schedule$$1.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  }

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
      var schedule$$1 = set$2(this, id),
          tween = schedule$$1.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule$$1.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
      var schedule$$1 = set$2(this, id),
          tween = schedule$$1.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }

      schedule$$1.tween = tween1;
    };
  }

  function transition_tween(name, value) {
    var id = this._id;

    name += "";

    if (arguments.length < 2) {
      var tween = get$1(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }

  function tweenValue(transition, name, value) {
    var id = transition._id;

    transition.each(function() {
      var schedule$$1 = set$2(this, id);
      (schedule$$1.value || (schedule$$1.value = {}))[name] = value.apply(this, arguments);
    });

    return function(node) {
      return get$1(node, id).value[name];
    };
  }

  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
        : (c = color(b)) ? (b = c, interpolateRgb)
        : interpolateString)(a, b);
  }

  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, interpolate$$1, value1) {
    var value00,
        interpolate0;
    return function() {
      var value0 = this.getAttribute(name);
      return value0 === value1 ? null
          : value0 === value00 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value1);
    };
  }

  function attrConstantNS$1(fullname, interpolate$$1, value1) {
    var value00,
        interpolate0;
    return function() {
      var value0 = this.getAttributeNS(fullname.space, fullname.local);
      return value0 === value1 ? null
          : value0 === value00 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value1);
    };
  }

  function attrFunction$1(name, interpolate$$1, value$$1) {
    var value00,
        value10,
        interpolate0;
    return function() {
      var value0, value1 = value$$1(this);
      if (value1 == null) return void this.removeAttribute(name);
      value0 = this.getAttribute(name);
      return value0 === value1 ? null
          : value0 === value00 && value1 === value10 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
    };
  }

  function attrFunctionNS$1(fullname, interpolate$$1, value$$1) {
    var value00,
        value10,
        interpolate0;
    return function() {
      var value0, value1 = value$$1(this);
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      value0 = this.getAttributeNS(fullname.space, fullname.local);
      return value0 === value1 ? null
          : value0 === value00 && value1 === value10 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
    };
  }

  function transition_attr(name, value$$1) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value$$1 === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value$$1))
        : value$$1 == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
        : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value$$1 + ""));
  }

  function attrTweenNS(fullname, value) {
    function tween() {
      var node = this, i = value.apply(node, arguments);
      return i && function(t) {
        node.setAttributeNS(fullname.space, fullname.local, i(t));
      };
    }
    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    function tween() {
      var node = this, i = value.apply(node, arguments);
      return i && function(t) {
        node.setAttribute(name, i(t));
      };
    }
    tween._value = value;
    return tween;
  }

  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function() {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function() {
      init(this, id).delay = value;
    };
  }

  function transition_delay(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get$1(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function() {
      set$2(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function() {
      set$2(this, id).duration = value;
    };
  }

  function transition_duration(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get$1(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
      set$2(this, id).ease = value;
    };
  }

  function transition_ease(value) {
    var id = this._id;

    return arguments.length
        ? this.each(easeConstant(id, value))
        : get$1(this.node(), id).ease;
  }

  function transition_filter(match) {
    if (typeof match !== "function") match = matcher$1(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge(transition$$1) {
    if (transition$$1._id !== this._id) throw new Error;

    for (var groups0 = this._groups, groups1 = transition$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set$2;
    return function() {
      var schedule$$1 = sit(this, id),
          on = schedule$$1.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

      schedule$$1.on = on1;
    };
  }

  function transition_on(name, listener) {
    var id = this._id;

    return arguments.length < 2
        ? get$1(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select(select$$1) {
    var name = this._name,
        id = this._id;

    if (typeof select$$1 !== "function") select$$1 = selector(select$$1);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select$$1.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll(select$$1) {
    var name = this._name,
        id = this._id;

    if (typeof select$$1 !== "function") select$$1 = selectorAll(select$$1);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select$$1.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection$1 = selection.prototype.constructor;

  function transition_selection() {
    return new Selection$1(this._groups, this._parents);
  }

  function styleRemove$1(name, interpolate$$1) {
    var value00,
        value10,
        interpolate0;
    return function() {
      var value0 = styleValue(this, name),
          value1 = (this.style.removeProperty(name), styleValue(this, name));
      return value0 === value1 ? null
          : value0 === value00 && value1 === value10 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
    };
  }

  function styleRemoveEnd(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, interpolate$$1, value1) {
    var value00,
        interpolate0;
    return function() {
      var value0 = styleValue(this, name);
      return value0 === value1 ? null
          : value0 === value00 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value1);
    };
  }

  function styleFunction$1(name, interpolate$$1, value$$1) {
    var value00,
        value10,
        interpolate0;
    return function() {
      var value0 = styleValue(this, name),
          value1 = value$$1(this);
      if (value1 == null) value1 = (this.style.removeProperty(name), styleValue(this, name));
      return value0 === value1 ? null
          : value0 === value00 && value1 === value10 ? interpolate0
          : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
    };
  }

  function transition_style(name, value$$1, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value$$1 == null ? this
            .styleTween(name, styleRemove$1(name, i))
            .on("end.style." + name, styleRemoveEnd(name))
        : this.styleTween(name, typeof value$$1 === "function"
            ? styleFunction$1(name, i, tweenValue(this, "style." + name, value$$1))
            : styleConstant$1(name, i, value$$1 + ""), priority);
  }

  function styleTween(name, value, priority) {
    function tween() {
      var node = this, i = value.apply(node, arguments);
      return i && function(t) {
        node.style.setProperty(name, i(t), priority);
      };
    }
    tween._value = value;
    return tween;
  }

  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction$1(tweenValue(this, "text", value))
        : textConstant$1(value == null ? "" : value + ""));
  }

  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get$1(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  var id = 0;

  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }

  function transition(name) {
    return selection().transition(name);
  }

  function newId() {
    return ++id;
  }

  var selection_prototype = selection.prototype;

  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease
  };

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var pi = Math.PI;

  var tau = 2 * Math.PI;

  var defaultTiming = {
    time: null, // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        return defaultTiming.time = now(), defaultTiming;
      }
    }
    return timing;
  }

  function selection_transition(name) {
    var id,
        timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  function constant$4(x) {
    return function() {
      return x;
    };
  }

  function ZoomEvent(target, type, transform) {
    this.target = target;
    this.type = type;
    this.transform = transform;
  }

  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }

  Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x) {
      return x * this.k + this.x;
    },
    applyY: function(y) {
      return y * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x) {
      return (x - this.x) / this.k;
    },
    invertY: function(y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };

  var identity$1 = new Transform(1, 0, 0);

  transform.prototype = Transform.prototype;

  function transform(node) {
    return node.__zoom || identity$1;
  }

  function nopropagation$1() {
    event.stopImmediatePropagation();
  }

  function noevent$1() {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // Ignore right-click, since that should open the context menu.
  function defaultFilter$1() {
    return !event.button;
  }

  function defaultExtent() {
    var e = this, w, h;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      w = e.width.baseVal.value;
      h = e.height.baseVal.value;
    } else {
      w = e.clientWidth;
      h = e.clientHeight;
    }
    return [[0, 0], [w, h]];
  }

  function defaultTransform() {
    return this.__zoom || identity$1;
  }

  function defaultWheelDelta() {
    return -event.deltaY * (event.deltaMode ? 120 : 1) / 500;
  }

  function defaultTouchable$1() {
    return "ontouchstart" in this;
  }

  function defaultConstrain(transform$$1, extent, translateExtent) {
    var dx0 = transform$$1.invertX(extent[0][0]) - translateExtent[0][0],
        dx1 = transform$$1.invertX(extent[1][0]) - translateExtent[1][0],
        dy0 = transform$$1.invertY(extent[0][1]) - translateExtent[0][1],
        dy1 = transform$$1.invertY(extent[1][1]) - translateExtent[1][1];
    return transform$$1.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }

  function zoom() {
    var filter = defaultFilter$1,
        extent = defaultExtent,
        constrain = defaultConstrain,
        wheelDelta = defaultWheelDelta,
        touchable = defaultTouchable$1,
        scaleExtent = [0, Infinity],
        translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
        duration = 250,
        interpolate = interpolateZoom,
        gestures = [],
        listeners = dispatch("start", "zoom", "end"),
        touchstarting,
        touchending,
        touchDelay = 500,
        wheelDelay = 150,
        clickDistance2 = 0;

    function zoom(selection$$1) {
      selection$$1
          .property("__zoom", defaultTransform)
          .on("wheel.zoom", wheeled)
          .on("mousedown.zoom", mousedowned)
          .on("dblclick.zoom", dblclicked)
        .filter(touchable)
          .on("touchstart.zoom", touchstarted)
          .on("touchmove.zoom", touchmoved)
          .on("touchend.zoom touchcancel.zoom", touchended)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    zoom.transform = function(collection, transform$$1) {
      var selection$$1 = collection.selection ? collection.selection() : collection;
      selection$$1.property("__zoom", defaultTransform);
      if (collection !== selection$$1) {
        schedule(collection, transform$$1);
      } else {
        selection$$1.interrupt().each(function() {
          gesture(this, arguments)
              .start()
              .zoom(null, typeof transform$$1 === "function" ? transform$$1.apply(this, arguments) : transform$$1)
              .end();
        });
      }
    };

    zoom.scaleBy = function(selection$$1, k) {
      zoom.scaleTo(selection$$1, function() {
        var k0 = this.__zoom.k,
            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      });
    };

    zoom.scaleTo = function(selection$$1, k) {
      zoom.transform(selection$$1, function() {
        var e = extent.apply(this, arguments),
            t0 = this.__zoom,
            p0 = centroid(e),
            p1 = t0.invert(p0),
            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      });
    };

    zoom.translateBy = function(selection$$1, x, y) {
      zoom.transform(selection$$1, function() {
        return constrain(this.__zoom.translate(
          typeof x === "function" ? x.apply(this, arguments) : x,
          typeof y === "function" ? y.apply(this, arguments) : y
        ), extent.apply(this, arguments), translateExtent);
      });
    };

    zoom.translateTo = function(selection$$1, x, y) {
      zoom.transform(selection$$1, function() {
        var e = extent.apply(this, arguments),
            t = this.__zoom,
            p = centroid(e);
        return constrain(identity$1.translate(p[0], p[1]).scale(t.k).translate(
          typeof x === "function" ? -x.apply(this, arguments) : -x,
          typeof y === "function" ? -y.apply(this, arguments) : -y
        ), e, translateExtent);
      });
    };

    function scale(transform$$1, k) {
      k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
      return k === transform$$1.k ? transform$$1 : new Transform(k, transform$$1.x, transform$$1.y);
    }

    function translate(transform$$1, p0, p1) {
      var x = p0[0] - p1[0] * transform$$1.k, y = p0[1] - p1[1] * transform$$1.k;
      return x === transform$$1.x && y === transform$$1.y ? transform$$1 : new Transform(transform$$1.k, x, y);
    }

    function centroid(extent) {
      return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
    }

    function schedule(transition$$1, transform$$1, center) {
      transition$$1
          .on("start.zoom", function() { gesture(this, arguments).start(); })
          .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
          .tween("zoom", function() {
            var that = this,
                args = arguments,
                g = gesture(that, args),
                e = extent.apply(that, args),
                p = center || centroid(e),
                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
                a = that.__zoom,
                b = typeof transform$$1 === "function" ? transform$$1.apply(that, args) : transform$$1,
                i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
              if (t === 1) t = b; // Avoid rounding error on end.
              else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
              g.zoom(null, t);
            };
          });
    }

    function gesture(that, args) {
      for (var i = 0, n = gestures.length, g; i < n; ++i) {
        if ((g = gestures[i]).that === that) {
          return g;
        }
      }
      return new Gesture(that, args);
    }

    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.index = -1;
      this.active = 0;
      this.extent = extent.apply(that, args);
    }

    Gesture.prototype = {
      start: function() {
        if (++this.active === 1) {
          this.index = gestures.push(this) - 1;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform$$1) {
        if (this.mouse && key !== "mouse") this.mouse[1] = transform$$1.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch") this.touch0[1] = transform$$1.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch") this.touch1[1] = transform$$1.invert(this.touch1[0]);
        this.that.__zoom = transform$$1;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          gestures.splice(this.index, 1);
          this.index = -1;
          this.emit("end");
        }
        return this;
      },
      emit: function(type) {
        customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
      }
    };

    function wheeled() {
      if (!filter.apply(this, arguments)) return;
      var g = gesture(this, arguments),
          t = this.__zoom,
          k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
          p = mouse(this);

      // If the mouse is in the same location as before, reuse it.
      // If there were recent wheel events, reset the wheel idle timeout.
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
      }

      // If this wheel event won’t trigger a transform change, ignore it.
      else if (t.k === k) return;

      // Otherwise, capture the mouse point and location at the start.
      else {
        g.mouse = [p, t.invert(p)];
        interrupt(this);
        g.start();
      }

      noevent$1();
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }

    function mousedowned() {
      if (touchending || !filter.apply(this, arguments)) return;
      var g = gesture(this, arguments),
          v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
          p = mouse(this),
          x0 = event.clientX,
          y0 = event.clientY;

      dragDisable(event.view);
      nopropagation$1();
      g.mouse = [p, this.__zoom.invert(p)];
      interrupt(this);
      g.start();

      function mousemoved() {
        noevent$1();
        if (!g.moved) {
          var dx = event.clientX - x0, dy = event.clientY - y0;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent, translateExtent));
      }

      function mouseupped() {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event.view, g.moved);
        noevent$1();
        g.end();
      }
    }

    function dblclicked() {
      if (!filter.apply(this, arguments)) return;
      var t0 = this.__zoom,
          p0 = mouse(this),
          p1 = t0.invert(p0),
          k1 = t0.k * (event.shiftKey ? 0.5 : 2),
          t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

      noevent$1();
      if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);
      else select(this).call(zoom.transform, t1);
    }

    function touchstarted() {
      if (!filter.apply(this, arguments)) return;
      var g = gesture(this, arguments),
          touches$$1 = event.changedTouches,
          started,
          n = touches$$1.length, i, t, p;

      nopropagation$1();
      for (i = 0; i < n; ++i) {
        t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g.touch0) g.touch0 = p, started = true;
        else if (!g.touch1) g.touch1 = p;
      }

      // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (touchstarting) {
        touchstarting = clearTimeout(touchstarting);
        if (!g.touch1) {
          g.end();
          p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
          return;
        }
      }

      if (started) {
        touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
        interrupt(this);
        g.start();
      }
    }

    function touchmoved() {
      var g = gesture(this, arguments),
          touches$$1 = event.changedTouches,
          n = touches$$1.length, i, t, p, l;

      noevent$1();
      if (touchstarting) touchstarting = clearTimeout(touchstarting);
      for (i = 0; i < n; ++i) {
        t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
        if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
        else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p0 = g.touch0[0], l0 = g.touch0[1],
            p1 = g.touch1[0], l1 = g.touch1[1],
            dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
            dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      }
      else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
      else return;
      g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }

    function touchended() {
      var g = gesture(this, arguments),
          touches$$1 = event.changedTouches,
          n = touches$$1.length, i, t;

      nopropagation$1();
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() { touchending = null; }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches$$1[i];
        if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
      }
      if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else g.end();
    }

    zoom.wheelDelta = function(_) {
      return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant$4(+_), zoom) : wheelDelta;
    };

    zoom.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$4(!!_), zoom) : filter;
    };

    zoom.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$4(!!_), zoom) : touchable;
    };

    zoom.extent = function(_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
    };

    zoom.scaleExtent = function(_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };

    zoom.translateExtent = function(_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };

    zoom.constrain = function(_) {
      return arguments.length ? (constrain = _, zoom) : constrain;
    };

    zoom.duration = function(_) {
      return arguments.length ? (duration = +_, zoom) : duration;
    };

    zoom.interpolate = function(_) {
      return arguments.length ? (interpolate = _, zoom) : interpolate;
    };

    zoom.on = function() {
      var value$$1 = listeners.on.apply(listeners, arguments);
      return value$$1 === listeners ? zoom : value$$1;
    };

    zoom.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };

    return zoom;
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$2 = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now$1 = function() {
    return root$2.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now$1());
    }

    function debounced() {
      var time = now$1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_throttle = throttle;

  var TweenMax = createCommonjsModule(function (module) {
  /*!
   * VERSION: 1.20.4
   * DATE: 2018-02-15
   * UPDATES AND DOCS AT: http://greensock.com
   * 
   * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
   *
   * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   **/
  var _gsScope = (module.exports && typeof(commonjsGlobal) !== "undefined") ? commonjsGlobal : commonjsGlobal || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

  	_gsScope._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

  		var _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  				var b = [],
  					l = a.length,
  					i;
  				for (i = 0; i !== l; b.push(a[i++]));
  				return b;
  			},
  			_applyCycle = function(vars, targets, i) {
  				var alt = vars.cycle,
  					p, val;
  				for (p in alt) {
  					val = alt[p];
  					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
  				}
  				delete vars.cycle;
  			},
  			TweenMax = function(target, duration, vars) {
  				TweenLite.call(this, target, duration, vars);
  				this._cycle = 0;
  				this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
  				this._repeat = this.vars.repeat || 0;
  				this._repeatDelay = this.vars.repeatDelay || 0;
  				if (this._repeat) {
  					this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
  				}
  				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
  			},
  			_tinyNum = 0.0000000001,
  			TweenLiteInternals = TweenLite._internals,
  			_isSelector = TweenLiteInternals.isSelector,
  			_isArray = TweenLiteInternals.isArray,
  			p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
  			_blankArray = [];

  		TweenMax.version = "1.20.4";
  		p.constructor = TweenMax;
  		p.kill()._gc = false;
  		TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
  		TweenMax.getTweensOf = TweenLite.getTweensOf;
  		TweenMax.lagSmoothing = TweenLite.lagSmoothing;
  		TweenMax.ticker = TweenLite.ticker;
  		TweenMax.render = TweenLite.render;

  		p.invalidate = function() {
  			this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
  			this._repeat = this.vars.repeat || 0;
  			this._repeatDelay = this.vars.repeatDelay || 0;
  			this._yoyoEase = null;
  			this._uncache(true);
  			return TweenLite.prototype.invalidate.call(this);
  		};
  		
  		p.updateTo = function(vars, resetDuration) {
  			var curRatio = this.ratio,
  				immediate = this.vars.immediateRender || vars.immediateRender,
  				p;
  			if (resetDuration && this._startTime < this._timeline._time) {
  				this._startTime = this._timeline._time;
  				this._uncache(false);
  				if (this._gc) {
  					this._enabled(true, false);
  				} else {
  					this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
  				}
  			}
  			for (p in vars) {
  				this.vars[p] = vars[p];
  			}
  			if (this._initted || immediate) {
  				if (resetDuration) {
  					this._initted = false;
  					if (immediate) {
  						this.render(0, true, true);
  					}
  				} else {
  					if (this._gc) {
  						this._enabled(true, false);
  					}
  					if (this._notifyPluginsOfEnabled && this._firstPT) {
  						TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
  					}
  					if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
  						var prevTime = this._totalTime;
  						this.render(0, true, false);
  						this._initted = false;
  						this.render(prevTime, true, false);
  					} else {
  						this._initted = false;
  						this._init();
  						if (this._time > 0 || immediate) {
  							var inv = 1 / (1 - curRatio),
  								pt = this._firstPT, endValue;
  							while (pt) {
  								endValue = pt.s + pt.c;
  								pt.c *= inv;
  								pt.s = endValue - pt.c;
  								pt = pt._next;
  							}
  						}
  					}
  				}
  			}
  			return this;
  		};
  				
  		p.render = function(time, suppressEvents, force) {
  			if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
  				this.invalidate();
  			}
  			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
  				prevTime = this._time,
  				prevTotalTime = this._totalTime, 
  				prevCycle = this._cycle,
  				duration = this._duration,
  				prevRawPrevTime = this._rawPrevTime,
  				isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, yoyoEase;
  			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
  				this._totalTime = totalDur;
  				this._cycle = this._repeat;
  				if (this._yoyo && (this._cycle & 1) !== 0) {
  					this._time = 0;
  					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
  				} else {
  					this._time = duration;
  					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
  				}
  				if (!this._reversed) {
  					isComplete = true;
  					callback = "onComplete";
  					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
  				}
  				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
  					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
  						time = 0;
  					}
  					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
  						force = true;
  						if (prevRawPrevTime > _tinyNum) {
  							callback = "onReverseComplete";
  						}
  					}
  					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  				}
  				
  			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
  				this._totalTime = this._time = this._cycle = 0;
  				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
  				if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
  					callback = "onReverseComplete";
  					isComplete = this._reversed;
  				}
  				if (time < 0) {
  					this._active = false;
  					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
  						if (prevRawPrevTime >= 0) {
  							force = true;
  						}
  						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  					}
  				}
  				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
  					force = true;
  				}
  			} else {
  				this._totalTime = this._time = time;
  				if (this._repeat !== 0) {
  					cycleDuration = duration + this._repeatDelay;
  					this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
  					if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
  						this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
  					}
  					this._time = this._totalTime - (this._cycle * cycleDuration);
  					if (this._yoyo) if ((this._cycle & 1) !== 0) {
  						this._time = duration - this._time;
  						yoyoEase = this._yoyoEase || this.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.
  						if (yoyoEase) {
  							if (!this._yoyoEase) {
  								if (yoyoEase === true && !this._initted) { //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
  									yoyoEase = this.vars.ease;
  									this._yoyoEase = yoyoEase = !yoyoEase ? TweenLite.defaultEase : (yoyoEase instanceof Ease) ? yoyoEase : (typeof(yoyoEase) === "function") ? new Ease(yoyoEase, this.vars.easeParams) : Ease.map[yoyoEase] || TweenLite.defaultEase;
  								} else {
  									this._yoyoEase = yoyoEase = (yoyoEase === true) ? this._ease : (yoyoEase instanceof Ease) ? yoyoEase : Ease.map[yoyoEase];
  								}
  							}
  							this.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - this._time) / duration) : 0;
  						}
  					}
  					if (this._time > duration) {
  						this._time = duration;
  					} else if (this._time < 0) {
  						this._time = 0;
  					}
  				}
  				if (this._easeType && !yoyoEase) {
  					r = this._time / duration;
  					type = this._easeType;
  					pow = this._easePower;
  					if (type === 1 || (type === 3 && r >= 0.5)) {
  						r = 1 - r;
  					}
  					if (type === 3) {
  						r *= 2;
  					}
  					if (pow === 1) {
  						r *= r;
  					} else if (pow === 2) {
  						r *= r * r;
  					} else if (pow === 3) {
  						r *= r * r * r;
  					} else if (pow === 4) {
  						r *= r * r * r * r;
  					}

  					if (type === 1) {
  						this.ratio = 1 - r;
  					} else if (type === 2) {
  						this.ratio = r;
  					} else if (this._time / duration < 0.5) {
  						this.ratio = r / 2;
  					} else {
  						this.ratio = 1 - (r / 2);
  					}

  				} else if (!yoyoEase) {
  					this.ratio = this._ease.getRatio(this._time / duration);
  				}
  				
  			}
  				
  			if (prevTime === this._time && !force && prevCycle === this._cycle) {
  				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
  					this._callback("onUpdate");
  				}
  				return;
  			} else if (!this._initted) {
  				this._init();
  				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
  					return;
  				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
  					this._time = prevTime;
  					this._totalTime = prevTotalTime;
  					this._rawPrevTime = prevRawPrevTime;
  					this._cycle = prevCycle;
  					TweenLiteInternals.lazyTweens.push(this);
  					this._lazy = [time, suppressEvents];
  					return;
  				}
  				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
  				if (this._time && !isComplete && !yoyoEase) {
  					this.ratio = this._ease.getRatio(this._time / duration);
  				} else if (isComplete && this._ease._calcEnd && !yoyoEase) {
  					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
  				}
  			}
  			if (this._lazy !== false) {
  				this._lazy = false;
  			}

  			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
  				this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
  			}
  			if (prevTotalTime === 0) {
  				if (this._initted === 2 && time > 0) {
  					//this.invalidate();
  					this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
  				}
  				if (this._startAt) {
  					if (time >= 0) {
  						this._startAt.render(time, true, force);
  					} else if (!callback) {
  						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
  					}
  				}
  				if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
  					this._callback("onStart");
  				}
  			}
  			
  			pt = this._firstPT;
  			while (pt) {
  				if (pt.f) {
  					pt.t[pt.p](pt.c * this.ratio + pt.s);
  				} else {
  					pt.t[pt.p] = pt.c * this.ratio + pt.s;
  				}
  				pt = pt._next;
  			}
  			
  			if (this._onUpdate) {
  				if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
  					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
  				}
  				if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
  					this._callback("onUpdate");
  				}
  			}
  			if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
  				this._callback("onRepeat");
  			}
  			if (callback) if (!this._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
  				if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
  					this._startAt.render(time, true, force);
  				}
  				if (isComplete) {
  					if (this._timeline.autoRemoveChildren) {
  						this._enabled(false, false);
  					}
  					this._active = false;
  				}
  				if (!suppressEvents && this.vars[callback]) {
  					this._callback(callback);
  				}
  				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
  					this._rawPrevTime = 0;
  				}
  			}
  		};
  		
  //---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------
  		
  		TweenMax.to = function(target, duration, vars) {
  			return new TweenMax(target, duration, vars);
  		};
  		
  		TweenMax.from = function(target, duration, vars) {
  			vars.runBackwards = true;
  			vars.immediateRender = (vars.immediateRender != false);
  			return new TweenMax(target, duration, vars);
  		};
  		
  		TweenMax.fromTo = function(target, duration, fromVars, toVars) {
  			toVars.startAt = fromVars;
  			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
  			return new TweenMax(target, duration, toVars);
  		};
  		
  		TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			stagger = stagger || 0;
  			var delay = 0,
  				a = [],
  				finalComplete = function() {
  					if (vars.onComplete) {
  						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
  					}
  					onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
  				},
  				cycle = vars.cycle,
  				fromCycle = (vars.startAt && vars.startAt.cycle),
  				l, copy, i, p;
  			if (!_isArray(targets)) {
  				if (typeof(targets) === "string") {
  					targets = TweenLite.selector(targets) || targets;
  				}
  				if (_isSelector(targets)) {
  					targets = _slice(targets);
  				}
  			}
  			targets = targets || [];
  			if (stagger < 0) {
  				targets = _slice(targets);
  				targets.reverse();
  				stagger *= -1;
  			}
  			l = targets.length - 1;
  			for (i = 0; i <= l; i++) {
  				copy = {};
  				for (p in vars) {
  					copy[p] = vars[p];
  				}
  				if (cycle) {
  					_applyCycle(copy, targets, i);
  					if (copy.duration != null) {
  						duration = copy.duration;
  						delete copy.duration;
  					}
  				}
  				if (fromCycle) {
  					fromCycle = copy.startAt = {};
  					for (p in vars.startAt) {
  						fromCycle[p] = vars.startAt[p];
  					}
  					_applyCycle(copy.startAt, targets, i);
  				}
  				copy.delay = delay + (copy.delay || 0);
  				if (i === l && onCompleteAll) {
  					copy.onComplete = finalComplete;
  				}
  				a[i] = new TweenMax(targets[i], duration, copy);
  				delay += stagger;
  			}
  			return a;
  		};
  		
  		TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			vars.runBackwards = true;
  			vars.immediateRender = (vars.immediateRender != false);
  			return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  		};
  		
  		TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			toVars.startAt = fromVars;
  			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
  			return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  		};
  				
  		TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
  			return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, useFrames:useFrames, overwrite:0});
  		};
  		
  		TweenMax.set = function(target, vars) {
  			return new TweenMax(target, 0, vars);
  		};
  		
  		TweenMax.isTweening = function(target) {
  			return (TweenLite.getTweensOf(target, true).length > 0);
  		};
  		
  		var _getChildrenOf = function(timeline, includeTimelines) {
  				var a = [],
  					cnt = 0,
  					tween = timeline._first;
  				while (tween) {
  					if (tween instanceof TweenLite) {
  						a[cnt++] = tween;
  					} else {
  						if (includeTimelines) {
  							a[cnt++] = tween;
  						}
  						a = a.concat(_getChildrenOf(tween, includeTimelines));
  						cnt = a.length;
  					}
  					tween = tween._next;
  				}
  				return a;
  			}, 
  			getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
  				return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat( _getChildrenOf(Animation._rootFramesTimeline, includeTimelines) );
  			};
  		
  		TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
  			if (tweens == null) {
  				tweens = true;
  			}
  			if (delayedCalls == null) {
  				delayedCalls = true;
  			}
  			var a = getAllTweens((timelines != false)),
  				l = a.length,
  				allTrue = (tweens && delayedCalls && timelines),
  				isDC, tween, i;
  			for (i = 0; i < l; i++) {
  				tween = a[i];
  				if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
  					if (complete) {
  						tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
  					} else {
  						tween._enabled(false, false);
  					}
  				}
  			}
  		};
  		
  		TweenMax.killChildTweensOf = function(parent, complete) {
  			if (parent == null) {
  				return;
  			}
  			var tl = TweenLiteInternals.tweenLookup,
  				a, curParent, p, i, l;
  			if (typeof(parent) === "string") {
  				parent = TweenLite.selector(parent) || parent;
  			}
  			if (_isSelector(parent)) {
  				parent = _slice(parent);
  			}
  			if (_isArray(parent)) {
  				i = parent.length;
  				while (--i > -1) {
  					TweenMax.killChildTweensOf(parent[i], complete);
  				}
  				return;
  			}
  			a = [];
  			for (p in tl) {
  				curParent = tl[p].target.parentNode;
  				while (curParent) {
  					if (curParent === parent) {
  						a = a.concat(tl[p].tweens);
  					}
  					curParent = curParent.parentNode;
  				}
  			}
  			l = a.length;
  			for (i = 0; i < l; i++) {
  				if (complete) {
  					a[i].totalTime(a[i].totalDuration());
  				}
  				a[i]._enabled(false, false);
  			}
  		};

  		var _changePause = function(pause, tweens, delayedCalls, timelines) {
  			tweens = (tweens !== false);
  			delayedCalls = (delayedCalls !== false);
  			timelines = (timelines !== false);
  			var a = getAllTweens(timelines),
  				allTrue = (tweens && delayedCalls && timelines),
  				i = a.length,
  				isDC, tween;
  			while (--i > -1) {
  				tween = a[i];
  				if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
  					tween.paused(pause);
  				}
  			}
  		};
  		
  		TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
  			_changePause(true, tweens, delayedCalls, timelines);
  		};
  		
  		TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
  			_changePause(false, tweens, delayedCalls, timelines);
  		};

  		TweenMax.globalTimeScale = function(value) {
  			var tl = Animation._rootTimeline,
  				t = TweenLite.ticker.time;
  			if (!arguments.length) {
  				return tl._timeScale;
  			}
  			value = value || _tinyNum; //can't allow zero because it'll throw the math off
  			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
  			tl = Animation._rootFramesTimeline;
  			t = TweenLite.ticker.frame;
  			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
  			tl._timeScale = Animation._rootTimeline._timeScale = value;
  			return value;
  		};
  		
  	
  //---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------
  		
  		p.progress = function(value, suppressEvents) {
  			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
  		};
  		
  		p.totalProgress = function(value, suppressEvents) {
  			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
  		};
  		
  		p.time = function(value, suppressEvents) {
  			if (!arguments.length) {
  				return this._time;
  			}
  			if (this._dirty) {
  				this.totalDuration();
  			}
  			if (value > this._duration) {
  				value = this._duration;
  			}
  			if (this._yoyo && (this._cycle & 1) !== 0) {
  				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
  			} else if (this._repeat !== 0) {
  				value += this._cycle * (this._duration + this._repeatDelay);
  			}
  			return this.totalTime(value, suppressEvents);
  		};

  		p.duration = function(value) {
  			if (!arguments.length) {
  				return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
  			}
  			return Animation.prototype.duration.call(this, value);
  		};

  		p.totalDuration = function(value) {
  			if (!arguments.length) {
  				if (this._dirty) {
  					//instead of Infinity, we use 999999999999 so that we can accommodate reverses
  					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
  					this._dirty = false;
  				}
  				return this._totalDuration;
  			}
  			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
  		};
  		
  		p.repeat = function(value) {
  			if (!arguments.length) {
  				return this._repeat;
  			}
  			this._repeat = value;
  			return this._uncache(true);
  		};
  		
  		p.repeatDelay = function(value) {
  			if (!arguments.length) {
  				return this._repeatDelay;
  			}
  			this._repeatDelay = value;
  			return this._uncache(true);
  		};
  		
  		p.yoyo = function(value) {
  			if (!arguments.length) {
  				return this._yoyo;
  			}
  			this._yoyo = value;
  			return this;
  		};
  		
  		
  		return TweenMax;
  		
  	}, true);








  /*
   * ----------------------------------------------------------------
   * TimelineLite
   * ----------------------------------------------------------------
   */
  	_gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

  		var TimelineLite = function(vars) {
  				SimpleTimeline.call(this, vars);
  				this._labels = {};
  				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
  				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
  				this._sortChildren = true;
  				this._onUpdate = this.vars.onUpdate;
  				var v = this.vars,
  					val, p;
  				for (p in v) {
  					val = v[p];
  					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
  						v[p] = this._swapSelfInParams(val);
  					}
  				}
  				if (_isArray(v.tweens)) {
  					this.add(v.tweens, 0, v.align, v.stagger);
  				}
  			},
  			_tinyNum = 0.0000000001,
  			TweenLiteInternals = TweenLite._internals,
  			_internals = TimelineLite._internals = {},
  			_isSelector = TweenLiteInternals.isSelector,
  			_isArray = TweenLiteInternals.isArray,
  			_lazyTweens = TweenLiteInternals.lazyTweens,
  			_lazyRender = TweenLiteInternals.lazyRender,
  			_globals = _gsScope._gsDefine.globals,
  			_copy = function(vars) {
  				var copy = {}, p;
  				for (p in vars) {
  					copy[p] = vars[p];
  				}
  				return copy;
  			},
  			_applyCycle = function(vars, targets, i) {
  				var alt = vars.cycle,
  					p, val;
  				for (p in alt) {
  					val = alt[p];
  					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
  				}
  				delete vars.cycle;
  			},
  			_pauseCallback = _internals.pauseCallback = function() {},
  			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  				var b = [],
  					l = a.length,
  					i;
  				for (i = 0; i !== l; b.push(a[i++]));
  				return b;
  			},
  			p = TimelineLite.prototype = new SimpleTimeline();

  		TimelineLite.version = "1.20.4";
  		p.constructor = TimelineLite;
  		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

  		/* might use later...
  		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
  		function localToGlobal(time, animation) {
  			while (animation) {
  				time = (time / animation._timeScale) + animation._startTime;
  				animation = animation.timeline;
  			}
  			return time;
  		}

  		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
  		function globalToLocal(time, animation) {
  			var scale = 1;
  			time -= localToGlobal(0, animation);
  			while (animation) {
  				scale *= animation._timeScale;
  				animation = animation.timeline;
  			}
  			return time * scale;
  		}
  		*/

  		p.to = function(target, duration, vars, position) {
  			var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
  			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
  		};

  		p.from = function(target, duration, vars, position) {
  			return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
  		};

  		p.fromTo = function(target, duration, fromVars, toVars, position) {
  			var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
  			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
  		};

  		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
  				cycle = vars.cycle,
  				copy, i;
  			if (typeof(targets) === "string") {
  				targets = TweenLite.selector(targets) || targets;
  			}
  			targets = targets || [];
  			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
  				targets = _slice(targets);
  			}
  			stagger = stagger || 0;
  			if (stagger < 0) {
  				targets = _slice(targets);
  				targets.reverse();
  				stagger *= -1;
  			}
  			for (i = 0; i < targets.length; i++) {
  				copy = _copy(vars);
  				if (copy.startAt) {
  					copy.startAt = _copy(copy.startAt);
  					if (copy.startAt.cycle) {
  						_applyCycle(copy.startAt, targets, i);
  					}
  				}
  				if (cycle) {
  					_applyCycle(copy, targets, i);
  					if (copy.duration != null) {
  						duration = copy.duration;
  						delete copy.duration;
  					}
  				}
  				tl.to(targets[i], duration, copy, i * stagger);
  			}
  			return this.add(tl, position);
  		};

  		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			vars.immediateRender = (vars.immediateRender != false);
  			vars.runBackwards = true;
  			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  		};

  		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
  			toVars.startAt = fromVars;
  			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
  			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
  		};

  		p.call = function(callback, params, scope, position) {
  			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
  		};

  		p.set = function(target, vars, position) {
  			position = this._parseTimeOrLabel(position, 0, true);
  			if (vars.immediateRender == null) {
  				vars.immediateRender = (position === this._time && !this._paused);
  			}
  			return this.add( new TweenLite(target, 0, vars), position);
  		};

  		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
  			vars = vars || {};
  			if (vars.smoothChildTiming == null) {
  				vars.smoothChildTiming = true;
  			}
  			var tl = new TimelineLite(vars),
  				root = tl._timeline,
  				hasNegativeStart, time,	tween, next;
  			if (ignoreDelayedCalls == null) {
  				ignoreDelayedCalls = true;
  			}
  			root._remove(tl, true);
  			tl._startTime = 0;
  			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
  			tween = root._first;
  			while (tween) {
  				next = tween._next;
  				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
  					time = tween._startTime - tween._delay;
  					if (time < 0) {
  						hasNegativeStart = 1;
  					}
  					tl.add(tween, time);
  				}
  				tween = next;
  			}
  			root.add(tl, 0);
  			if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
  				tl.totalDuration();
  			}
  			return tl;
  		};

  		p.add = function(value, position, align, stagger) {
  			var curTime, l, i, child, tl, beforeRawTime;
  			if (typeof(position) !== "number") {
  				position = this._parseTimeOrLabel(position, 0, true, value);
  			}
  			if (!(value instanceof Animation)) {
  				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
  					align = align || "normal";
  					stagger = stagger || 0;
  					curTime = position;
  					l = value.length;
  					for (i = 0; i < l; i++) {
  						if (_isArray(child = value[i])) {
  							child = new TimelineLite({tweens:child});
  						}
  						this.add(child, curTime);
  						if (typeof(child) !== "string" && typeof(child) !== "function") {
  							if (align === "sequence") {
  								curTime = child._startTime + (child.totalDuration() / child._timeScale);
  							} else if (align === "start") {
  								child._startTime -= child.delay();
  							}
  						}
  						curTime += stagger;
  					}
  					return this._uncache(true);
  				} else if (typeof(value) === "string") {
  					return this.addLabel(value, position);
  				} else if (typeof(value) === "function") {
  					value = TweenLite.delayedCall(0, value);
  				} else {
  					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
  				}
  			}

  			SimpleTimeline.prototype.add.call(this, value, position);

  			if (value._time) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
  				value.render((this.rawTime() - value._startTime) * value._timeScale, false, false);
  			}

  			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
  			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
  				//in case any of the ancestors had completed but should now be enabled...
  				tl = this;
  				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
  				while (tl._timeline) {
  					if (beforeRawTime && tl._timeline.smoothChildTiming) {
  						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
  					} else if (tl._gc) {
  						tl._enabled(true, false);
  					}
  					tl = tl._timeline;
  				}
  			}

  			return this;
  		};

  		p.remove = function(value) {
  			if (value instanceof Animation) {
  				this._remove(value, false);
  				var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
  				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
  				return this;
  			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
  				var i = value.length;
  				while (--i > -1) {
  					this.remove(value[i]);
  				}
  				return this;
  			} else if (typeof(value) === "string") {
  				return this.removeLabel(value);
  			}
  			return this.kill(null, value);
  		};

  		p._remove = function(tween, skipDisable) {
  			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
  			var last = this._last;
  			if (!last) {
  				this._time = this._totalTime = this._duration = this._totalDuration = 0;
  			} else if (this._time > this.duration()) {
  				this._time = this._duration;
  				this._totalTime = this._totalDuration;
  			}
  			return this;
  		};

  		p.append = function(value, offsetOrLabel) {
  			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
  		};

  		p.insert = p.insertMultiple = function(value, position, align, stagger) {
  			return this.add(value, position || 0, align, stagger);
  		};

  		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
  			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
  		};

  		p.addLabel = function(label, position) {
  			this._labels[label] = this._parseTimeOrLabel(position);
  			return this;
  		};

  		p.addPause = function(position, callback, params, scope) {
  			var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
  			t.vars.onComplete = t.vars.onReverseComplete = callback;
  			t.data = "isPause";
  			this._hasPause = true;
  			return this.add(t, position);
  		};

  		p.removeLabel = function(label) {
  			delete this._labels[label];
  			return this;
  		};

  		p.getLabelTime = function(label) {
  			return (this._labels[label] != null) ? this._labels[label] : -1;
  		};

  		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
  			var clippedDuration, i;
  			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
  			if (ignore instanceof Animation && ignore.timeline === this) {
  				this.remove(ignore);
  			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
  				i = ignore.length;
  				while (--i > -1) {
  					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
  						this.remove(ignore[i]);
  					}
  				}
  			}
  			clippedDuration = (typeof(timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  			if (typeof(offsetOrLabel) === "string") {
  				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
  			}
  			offsetOrLabel = offsetOrLabel || 0;
  			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
  				i = timeOrLabel.indexOf("=");
  				if (i === -1) {
  					if (this._labels[timeOrLabel] == null) {
  						return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
  					}
  					return this._labels[timeOrLabel] + offsetOrLabel;
  				}
  				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
  				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : clippedDuration;
  			} else if (timeOrLabel == null) {
  				timeOrLabel = clippedDuration;
  			}
  			return Number(timeOrLabel) + offsetOrLabel;
  		};

  		p.seek = function(position, suppressEvents) {
  			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
  		};

  		p.stop = function() {
  			return this.paused(true);
  		};

  		p.gotoAndPlay = function(position, suppressEvents) {
  			return this.play(position, suppressEvents);
  		};

  		p.gotoAndStop = function(position, suppressEvents) {
  			return this.pause(position, suppressEvents);
  		};

  		p.render = function(time, suppressEvents, force) {
  			if (this._gc) {
  				this._enabled(true, false);
  			}
  			var prevTime = this._time,
  				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
  				prevStart = this._startTime,
  				prevTimeScale = this._timeScale,
  				prevPaused = this._paused,
  				tween, isComplete, next, callback, internalForce, pauseTween, curTime;
  			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
  				time += this._time - prevTime;
  			}
  			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
  				this._totalTime = this._time = totalDur;
  				if (!this._reversed) if (!this._hasPausedChild()) {
  					isComplete = true;
  					callback = "onComplete";
  					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
  					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
  						internalForce = true;
  						if (this._rawPrevTime > _tinyNum) {
  							callback = "onReverseComplete";
  						}
  					}
  				}
  				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

  			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
  				this._totalTime = this._time = 0;
  				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
  					callback = "onReverseComplete";
  					isComplete = this._reversed;
  				}
  				if (time < 0) {
  					this._active = false;
  					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
  						internalForce = isComplete = true;
  						callback = "onReverseComplete";
  					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
  						internalForce = true;
  					}
  					this._rawPrevTime = time;
  				} else {
  					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
  						tween = this._first;
  						while (tween && tween._startTime === 0) {
  							if (!tween._duration) {
  								isComplete = false;
  							}
  							tween = tween._next;
  						}
  					}
  					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
  					if (!this._initted) {
  						internalForce = true;
  					}
  				}

  			} else {

  				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
  					if (time >= prevTime) {
  						tween = this._first;
  						while (tween && tween._startTime <= time && !pauseTween) {
  							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
  								pauseTween = tween;
  							}
  							tween = tween._next;
  						}
  					} else {
  						tween = this._last;
  						while (tween && tween._startTime >= time && !pauseTween) {
  							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
  								pauseTween = tween;
  							}
  							tween = tween._prev;
  						}
  					}
  					if (pauseTween) {
  						this._time = time = pauseTween._startTime;
  						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
  					}
  				}

  				this._totalTime = this._time = this._rawPrevTime = time;
  			}
  			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
  				return;
  			} else if (!this._initted) {
  				this._initted = true;
  			}

  			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
  				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
  			}

  			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
  				this._callback("onStart");
  			}

  			curTime = this._time;
  			if (curTime >= prevTime) {
  				tween = this._first;
  				while (tween) {
  					next = tween._next; //record it here because the value could change after rendering...
  					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
  						break;
  					} else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
  						if (pauseTween === tween) {
  							this.pause();
  						}
  						if (!tween._reversed) {
  							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  						} else {
  							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  						}
  					}
  					tween = next;
  				}
  			} else {
  				tween = this._last;
  				while (tween) {
  					next = tween._prev; //record it here because the value could change after rendering...
  					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
  						break;
  					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
  						if (pauseTween === tween) {
  							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
  							while (pauseTween && pauseTween.endTime() > this._time) {
  								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
  								pauseTween = pauseTween._prev;
  							}
  							pauseTween = null;
  							this.pause();
  						}
  						if (!tween._reversed) {
  							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  						} else {
  							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  						}
  					}
  					tween = next;
  				}
  			}

  			if (this._onUpdate) if (!suppressEvents) {
  				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
  					_lazyRender();
  				}
  				this._callback("onUpdate");
  			}

  			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
  				if (isComplete) {
  					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
  						_lazyRender();
  					}
  					if (this._timeline.autoRemoveChildren) {
  						this._enabled(false, false);
  					}
  					this._active = false;
  				}
  				if (!suppressEvents && this.vars[callback]) {
  					this._callback(callback);
  				}
  			}
  		};

  		p._hasPausedChild = function() {
  			var tween = this._first;
  			while (tween) {
  				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
  					return true;
  				}
  				tween = tween._next;
  			}
  			return false;
  		};

  		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
  			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
  			var a = [],
  				tween = this._first,
  				cnt = 0;
  			while (tween) {
  				if (tween._startTime < ignoreBeforeTime) ; else if (tween instanceof TweenLite) {
  					if (tweens !== false) {
  						a[cnt++] = tween;
  					}
  				} else {
  					if (timelines !== false) {
  						a[cnt++] = tween;
  					}
  					if (nested !== false) {
  						a = a.concat(tween.getChildren(true, tweens, timelines));
  						cnt = a.length;
  					}
  				}
  				tween = tween._next;
  			}
  			return a;
  		};

  		p.getTweensOf = function(target, nested) {
  			var disabled = this._gc,
  				a = [],
  				cnt = 0,
  				tweens, i;
  			if (disabled) {
  				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
  			}
  			tweens = TweenLite.getTweensOf(target);
  			i = tweens.length;
  			while (--i > -1) {
  				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
  					a[cnt++] = tweens[i];
  				}
  			}
  			if (disabled) {
  				this._enabled(false, true);
  			}
  			return a;
  		};

  		p.recent = function() {
  			return this._recent;
  		};

  		p._contains = function(tween) {
  			var tl = tween.timeline;
  			while (tl) {
  				if (tl === this) {
  					return true;
  				}
  				tl = tl.timeline;
  			}
  			return false;
  		};

  		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
  			ignoreBeforeTime = ignoreBeforeTime || 0;
  			var tween = this._first,
  				labels = this._labels,
  				p;
  			while (tween) {
  				if (tween._startTime >= ignoreBeforeTime) {
  					tween._startTime += amount;
  				}
  				tween = tween._next;
  			}
  			if (adjustLabels) {
  				for (p in labels) {
  					if (labels[p] >= ignoreBeforeTime) {
  						labels[p] += amount;
  					}
  				}
  			}
  			return this._uncache(true);
  		};

  		p._kill = function(vars, target) {
  			if (!vars && !target) {
  				return this._enabled(false, false);
  			}
  			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
  				i = tweens.length,
  				changed = false;
  			while (--i > -1) {
  				if (tweens[i]._kill(vars, target)) {
  					changed = true;
  				}
  			}
  			return changed;
  		};

  		p.clear = function(labels) {
  			var tweens = this.getChildren(false, true, true),
  				i = tweens.length;
  			this._time = this._totalTime = 0;
  			while (--i > -1) {
  				tweens[i]._enabled(false, false);
  			}
  			if (labels !== false) {
  				this._labels = {};
  			}
  			return this._uncache(true);
  		};

  		p.invalidate = function() {
  			var tween = this._first;
  			while (tween) {
  				tween.invalidate();
  				tween = tween._next;
  			}
  			return Animation.prototype.invalidate.call(this);		};

  		p._enabled = function(enabled, ignoreTimeline) {
  			if (enabled === this._gc) {
  				var tween = this._first;
  				while (tween) {
  					tween._enabled(enabled, true);
  					tween = tween._next;
  				}
  			}
  			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
  		};

  		p.totalTime = function(time, suppressEvents, uncapped) {
  			this._forcingPlayhead = true;
  			var val = Animation.prototype.totalTime.apply(this, arguments);
  			this._forcingPlayhead = false;
  			return val;
  		};

  		p.duration = function(value) {
  			if (!arguments.length) {
  				if (this._dirty) {
  					this.totalDuration(); //just triggers recalculation
  				}
  				return this._duration;
  			}
  			if (this.duration() !== 0 && value !== 0) {
  				this.timeScale(this._duration / value);
  			}
  			return this;
  		};

  		p.totalDuration = function(value) {
  			if (!arguments.length) {
  				if (this._dirty) {
  					var max = 0,
  						tween = this._last,
  						prevStart = 999999999999,
  						prev, end;
  					while (tween) {
  						prev = tween._prev; //record it here in case the tween changes position in the sequence...
  						if (tween._dirty) {
  							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
  						}
  						if (tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
  							this._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
  							this.add(tween, tween._startTime - tween._delay);
  							this._calculatingDuration = 0;
  						} else {
  							prevStart = tween._startTime;
  						}
  						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
  							max -= tween._startTime;
  							if (this._timeline.smoothChildTiming) {
  								this._startTime += tween._startTime / this._timeScale;
  								this._time -= tween._startTime;
  								this._totalTime -= tween._startTime;
  								this._rawPrevTime -= tween._startTime;
  							}
  							this.shiftChildren(-tween._startTime, false, -9999999999);
  							prevStart = 0;
  						}
  						end = tween._startTime + (tween._totalDuration / tween._timeScale);
  						if (end > max) {
  							max = end;
  						}
  						tween = prev;
  					}
  					this._duration = this._totalDuration = max;
  					this._dirty = false;
  				}
  				return this._totalDuration;
  			}
  			return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
  		};

  		p.paused = function(value) {
  			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
  				var tween = this._first,
  					time = this._time;
  				while (tween) {
  					if (tween._startTime === time && tween.data === "isPause") {
  						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
  					}
  					tween = tween._next;
  				}
  			}
  			return Animation.prototype.paused.apply(this, arguments);
  		};

  		p.usesFrames = function() {
  			var tl = this._timeline;
  			while (tl._timeline) {
  				tl = tl._timeline;
  			}
  			return (tl === Animation._rootFramesTimeline);
  		};

  		p.rawTime = function(wrapRepeats) {
  			return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
  		};

  		return TimelineLite;

  	}, true);








  	
  	
  	
  	
  	
  /*
   * ----------------------------------------------------------------
   * TimelineMax
   * ----------------------------------------------------------------
   */
  	_gsScope._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function(TimelineLite, TweenLite, Ease) {

  		var TimelineMax = function(vars) {
  				TimelineLite.call(this, vars);
  				this._repeat = this.vars.repeat || 0;
  				this._repeatDelay = this.vars.repeatDelay || 0;
  				this._cycle = 0;
  				this._yoyo = (this.vars.yoyo === true);
  				this._dirty = true;
  			},
  			_tinyNum = 0.0000000001,
  			TweenLiteInternals = TweenLite._internals,
  			_lazyTweens = TweenLiteInternals.lazyTweens,
  			_lazyRender = TweenLiteInternals.lazyRender,
  			_globals = _gsScope._gsDefine.globals,
  			_easeNone = new Ease(null, null, 1, 0),
  			p = TimelineMax.prototype = new TimelineLite();

  		p.constructor = TimelineMax;
  		p.kill()._gc = false;
  		TimelineMax.version = "1.20.4";

  		p.invalidate = function() {
  			this._yoyo = (this.vars.yoyo === true);
  			this._repeat = this.vars.repeat || 0;
  			this._repeatDelay = this.vars.repeatDelay || 0;
  			this._uncache(true);
  			return TimelineLite.prototype.invalidate.call(this);
  		};

  		p.addCallback = function(callback, position, params, scope) {
  			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
  		};

  		p.removeCallback = function(callback, position) {
  			if (callback) {
  				if (position == null) {
  					this._kill(null, callback);
  				} else {
  					var a = this.getTweensOf(callback, false),
  						i = a.length,
  						time = this._parseTimeOrLabel(position);
  					while (--i > -1) {
  						if (a[i]._startTime === time) {
  							a[i]._enabled(false, false);
  						}
  					}
  				}
  			}
  			return this;
  		};

  		p.removePause = function(position) {
  			return this.removeCallback(TimelineLite._internals.pauseCallback, position);
  		};

  		p.tweenTo = function(position, vars) {
  			vars = vars || {};
  			var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false, lazy:false},
  				Engine = (vars.repeat && _globals.TweenMax) || TweenLite,
  				duration, p, t;
  			for (p in vars) {
  				copy[p] = vars[p];
  			}
  			copy.time = this._parseTimeOrLabel(position);
  			duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
  			t = new Engine(this, duration, copy);
  			copy.onStart = function() {
  				t.target.paused(true);
  				if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
  					t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale ).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
  				}
  				if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
  					vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
  				}
  			};
  			return t;
  		};

  		p.tweenFromTo = function(fromPosition, toPosition, vars) {
  			vars = vars || {};
  			fromPosition = this._parseTimeOrLabel(fromPosition);
  			vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], callbackScope:this};
  			vars.immediateRender = (vars.immediateRender !== false);
  			var t = this.tweenTo(toPosition, vars);
  			t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
  			return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
  		};

  		p.render = function(time, suppressEvents, force) {
  			if (this._gc) {
  				this._enabled(true, false);
  			}
  			var prevTime = this._time,
  				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
  				dur = this._duration,
  				prevTotalTime = this._totalTime,
  				prevStart = this._startTime,
  				prevTimeScale = this._timeScale,
  				prevRawPrevTime = this._rawPrevTime,
  				prevPaused = this._paused,
  				prevCycle = this._cycle,
  				tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime;
  			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
  				time += this._time - prevTime;
  			}
  			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
  				if (!this._locked) {
  					this._totalTime = totalDur;
  					this._cycle = this._repeat;
  				}
  				if (!this._reversed) if (!this._hasPausedChild()) {
  					isComplete = true;
  					callback = "onComplete";
  					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
  					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
  						internalForce = true;
  						if (prevRawPrevTime > _tinyNum) {
  							callback = "onReverseComplete";
  						}
  					}
  				}
  				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  				if (this._yoyo && (this._cycle & 1) !== 0) {
  					this._time = time = 0;
  				} else {
  					this._time = dur;
  					time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
  				}

  			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
  				if (!this._locked) {
  					this._totalTime = this._cycle = 0;
  				}
  				this._time = 0;
  				if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
  					callback = "onReverseComplete";
  					isComplete = this._reversed;
  				}
  				if (time < 0) {
  					this._active = false;
  					if (this._timeline.autoRemoveChildren && this._reversed) {
  						internalForce = isComplete = true;
  						callback = "onReverseComplete";
  					} else if (prevRawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
  						internalForce = true;
  					}
  					this._rawPrevTime = time;
  				} else {
  					this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
  						tween = this._first;
  						while (tween && tween._startTime === 0) {
  							if (!tween._duration) {
  								isComplete = false;
  							}
  							tween = tween._next;
  						}
  					}
  					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
  					if (!this._initted) {
  						internalForce = true;
  					}
  				}

  			} else {
  				if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
  					internalForce = true;
  				}
  				this._time = this._rawPrevTime = time;
  				if (!this._locked) {
  					this._totalTime = time;
  					if (this._repeat !== 0) {
  						cycleDuration = dur + this._repeatDelay;
  						this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
  						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
  							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
  						}
  						this._time = this._totalTime - (this._cycle * cycleDuration);
  						if (this._yoyo) if ((this._cycle & 1) !== 0) {
  							this._time = dur - this._time;
  						}
  						if (this._time > dur) {
  							this._time = dur;
  							time = dur + 0.0001; //to avoid occasional floating point rounding error
  						} else if (this._time < 0) {
  							this._time = time = 0;
  						} else {
  							time = this._time;
  						}
  					}
  				}

  				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
  					time = this._time;
  					if (time >= prevTime || (this._repeat && prevCycle !== this._cycle)) {
  						tween = this._first;
  						while (tween && tween._startTime <= time && !pauseTween) {
  							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
  								pauseTween = tween;
  							}
  							tween = tween._next;
  						}
  					} else {
  						tween = this._last;
  						while (tween && tween._startTime >= time && !pauseTween) {
  							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
  								pauseTween = tween;
  							}
  							tween = tween._prev;
  						}
  					}
  					if (pauseTween && pauseTween._startTime < dur) {
  						this._time = time = pauseTween._startTime;
  						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
  					}
  				}

  			}

  			if (this._cycle !== prevCycle) if (!this._locked) {
  				/*
  				make sure children at the end/beginning of the timeline are rendered properly. If, for example,
  				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
  				would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
  				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
  				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
  				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
  				*/
  				var backwards = (this._yoyo && (prevCycle & 1) !== 0),
  					wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
  					recTotalTime = this._totalTime,
  					recCycle = this._cycle,
  					recRawPrevTime = this._rawPrevTime,
  					recTime = this._time;

  				this._totalTime = prevCycle * dur;
  				if (this._cycle < prevCycle) {
  					backwards = !backwards;
  				} else {
  					this._totalTime += dur;
  				}
  				this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

  				this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
  				this._cycle = prevCycle;
  				this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
  				prevTime = (backwards) ? 0 : dur;
  				this.render(prevTime, suppressEvents, (dur === 0));
  				if (!suppressEvents) if (!this._gc) {
  					if (this.vars.onRepeat) {
  						this._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
  						this._locked = false;
  						this._callback("onRepeat");
  					}
  				}
  				if (prevTime !== this._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
  					return;
  				}
  				if (wrap) {
  					this._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
  					this._locked = true;
  					prevTime = (backwards) ? dur + 0.0001 : -0.0001;
  					this.render(prevTime, true, false);
  				}
  				this._locked = false;
  				if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
  					return;
  				}
  				this._time = recTime;
  				this._totalTime = recTotalTime;
  				this._cycle = recCycle;
  				this._rawPrevTime = recRawPrevTime;
  			}

  			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
  				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
  					this._callback("onUpdate");
  				}
  				return;
  			} else if (!this._initted) {
  				this._initted = true;
  			}

  			if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
  				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
  			}

  			if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
  				this._callback("onStart");
  			}

  			curTime = this._time;
  			if (curTime >= prevTime) {
  				tween = this._first;
  				while (tween) {
  					next = tween._next; //record it here because the value could change after rendering...
  					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
  						break;
  					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
  						if (pauseTween === tween) {
  							this.pause();
  						}
  						if (!tween._reversed) {
  							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  						} else {
  							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  						}
  					}
  					tween = next;
  				}
  			} else {
  				tween = this._last;
  				while (tween) {
  					next = tween._prev; //record it here because the value could change after rendering...
  					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
  						break;
  					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
  						if (pauseTween === tween) {
  							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
  							while (pauseTween && pauseTween.endTime() > this._time) {
  								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
  								pauseTween = pauseTween._prev;
  							}
  							pauseTween = null;
  							this.pause();
  						}
  						if (!tween._reversed) {
  							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  						} else {
  							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  						}
  					}
  					tween = next;
  				}
  			}

  			if (this._onUpdate) if (!suppressEvents) {
  				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
  					_lazyRender();
  				}
  				this._callback("onUpdate");
  			}
  			if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
  				if (isComplete) {
  					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
  						_lazyRender();
  					}
  					if (this._timeline.autoRemoveChildren) {
  						this._enabled(false, false);
  					}
  					this._active = false;
  				}
  				if (!suppressEvents && this.vars[callback]) {
  					this._callback(callback);
  				}
  			}
  		};

  		p.getActive = function(nested, tweens, timelines) {
  			if (nested == null) {
  				nested = true;
  			}
  			if (tweens == null) {
  				tweens = true;
  			}
  			if (timelines == null) {
  				timelines = false;
  			}
  			var a = [],
  				all = this.getChildren(nested, tweens, timelines),
  				cnt = 0,
  				l = all.length,
  				i, tween;
  			for (i = 0; i < l; i++) {
  				tween = all[i];
  				if (tween.isActive()) {
  					a[cnt++] = tween;
  				}
  			}
  			return a;
  		};


  		p.getLabelAfter = function(time) {
  			if (!time) if (time !== 0) { //faster than isNan()
  				time = this._time;
  			}
  			var labels = this.getLabelsArray(),
  				l = labels.length,
  				i;
  			for (i = 0; i < l; i++) {
  				if (labels[i].time > time) {
  					return labels[i].name;
  				}
  			}
  			return null;
  		};

  		p.getLabelBefore = function(time) {
  			if (time == null) {
  				time = this._time;
  			}
  			var labels = this.getLabelsArray(),
  				i = labels.length;
  			while (--i > -1) {
  				if (labels[i].time < time) {
  					return labels[i].name;
  				}
  			}
  			return null;
  		};

  		p.getLabelsArray = function() {
  			var a = [],
  				cnt = 0,
  				p;
  			for (p in this._labels) {
  				a[cnt++] = {time:this._labels[p], name:p};
  			}
  			a.sort(function(a,b) {
  				return a.time - b.time;
  			});
  			return a;
  		};

  		p.invalidate = function() {
  			this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
  			return TimelineLite.prototype.invalidate.call(this);
  		};


  //---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

  		p.progress = function(value, suppressEvents) {
  			return (!arguments.length) ? (this._time / this.duration()) || 0 : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
  		};

  		p.totalProgress = function(value, suppressEvents) {
  			return (!arguments.length) ? (this._totalTime / this.totalDuration()) || 0 : this.totalTime( this.totalDuration() * value, suppressEvents);
  		};

  		p.totalDuration = function(value) {
  			if (!arguments.length) {
  				if (this._dirty) {
  					TimelineLite.prototype.totalDuration.call(this); //just forces refresh
  					//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
  					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
  				}
  				return this._totalDuration;
  			}
  			return (this._repeat === -1 || !value) ? this : this.timeScale( this.totalDuration() / value );
  		};

  		p.time = function(value, suppressEvents) {
  			if (!arguments.length) {
  				return this._time;
  			}
  			if (this._dirty) {
  				this.totalDuration();
  			}
  			if (value > this._duration) {
  				value = this._duration;
  			}
  			if (this._yoyo && (this._cycle & 1) !== 0) {
  				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
  			} else if (this._repeat !== 0) {
  				value += this._cycle * (this._duration + this._repeatDelay);
  			}
  			return this.totalTime(value, suppressEvents);
  		};

  		p.repeat = function(value) {
  			if (!arguments.length) {
  				return this._repeat;
  			}
  			this._repeat = value;
  			return this._uncache(true);
  		};

  		p.repeatDelay = function(value) {
  			if (!arguments.length) {
  				return this._repeatDelay;
  			}
  			this._repeatDelay = value;
  			return this._uncache(true);
  		};

  		p.yoyo = function(value) {
  			if (!arguments.length) {
  				return this._yoyo;
  			}
  			this._yoyo = value;
  			return this;
  		};

  		p.currentLabel = function(value) {
  			if (!arguments.length) {
  				return this.getLabelBefore(this._time + 0.00000001);
  			}
  			return this.seek(value, true);
  		};

  		return TimelineMax;

  	}, true);
  	




  	
  	
  	
  	
  	

  	
  /*
   * ----------------------------------------------------------------
   * BezierPlugin
   * ----------------------------------------------------------------
   */
  	(function() {

  		var _RAD2DEG = 180 / Math.PI,
  			_r1 = [],
  			_r2 = [],
  			_r3 = [],
  			_corProps = {},
  			_globals = _gsScope._gsDefine.globals,
  			Segment = function(a, b, c, d) {
  				if (c === d) { //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
  					c = d - (d - b) / 1000000;
  				}
  				if (a === b) { //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
  					b = a + (c - a) / 1000000;
  				}
  				this.a = a;
  				this.b = b;
  				this.c = c;
  				this.d = d;
  				this.da = d - a;
  				this.ca = c - a;
  				this.ba = b - a;
  			},
  			_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
  			cubicToQuadratic = function(a, b, c, d) {
  				var q1 = {a:a},
  					q2 = {},
  					q3 = {},
  					q4 = {c:d},
  					mab = (a + b) / 2,
  					mbc = (b + c) / 2,
  					mcd = (c + d) / 2,
  					mabc = (mab + mbc) / 2,
  					mbcd = (mbc + mcd) / 2,
  					m8 = (mbcd - mabc) / 8;
  				q1.b = mab + (a - mab) / 4;
  				q2.b = mabc + m8;
  				q1.c = q2.a = (q1.b + q2.b) / 2;
  				q2.c = q3.a = (mabc + mbcd) / 2;
  				q3.b = mbcd - m8;
  				q4.b = mcd + (d - mcd) / 4;
  				q3.c = q4.a = (q3.b + q4.b) / 2;
  				return [q1, q2, q3, q4];
  			},
  			_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
  				var l = a.length - 1,
  					ii = 0,
  					cp1 = a[0].a,
  					i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
  				for (i = 0; i < l; i++) {
  					seg = a[ii];
  					p1 = seg.a;
  					p2 = seg.d;
  					p3 = a[ii+1].d;

  					if (correlate) {
  						r1 = _r1[i];
  						r2 = _r2[i];
  						tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
  						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
  						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
  						mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
  					} else {
  						m1 = p2 - (p2 - p1) * curviness * 0.5;
  						m2 = p2 + (p3 - p2) * curviness * 0.5;
  						mm = p2 - (m1 + m2) / 2;
  					}
  					m1 += mm;
  					m2 += mm;

  					seg.c = cp2 = m1;
  					if (i !== 0) {
  						seg.b = cp1;
  					} else {
  						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
  					}

  					seg.da = p2 - p1;
  					seg.ca = cp2 - p1;
  					seg.ba = cp1 - p1;

  					if (quad) {
  						qb = cubicToQuadratic(p1, cp1, cp2, p2);
  						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
  						ii += 4;
  					} else {
  						ii++;
  					}

  					cp1 = m2;
  				}
  				seg = a[ii];
  				seg.b = cp1;
  				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
  				seg.da = seg.d - seg.a;
  				seg.ca = seg.c - seg.a;
  				seg.ba = cp1 - seg.a;
  				if (quad) {
  					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
  					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
  				}
  			},
  			_parseAnchors = function(values, p, correlate, prepend) {
  				var a = [],
  					l, i, p1, p2, p3, tmp;
  				if (prepend) {
  					values = [prepend].concat(values);
  					i = values.length;
  					while (--i > -1) {
  						if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
  							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
  						}
  					}
  				}
  				l = values.length - 2;
  				if (l < 0) {
  					a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
  					return a;
  				}
  				for (i = 0; i < l; i++) {
  					p1 = values[i][p];
  					p2 = values[i+1][p];
  					a[i] = new Segment(p1, 0, 0, p2);
  					if (correlate) {
  						p3 = values[i+2][p];
  						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
  						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
  					}
  				}
  				a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
  				return a;
  			},
  			bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
  				var obj = {},
  					props = [],
  					first = prepend || values[0],
  					i, p, a, j, r, l, seamless, last;
  				correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
  				if (curviness == null) {
  					curviness = 1;
  				}
  				for (p in values[0]) {
  					props.push(p);
  				}
  				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
  				if (values.length > 1) {
  					last = values[values.length - 1];
  					seamless = true;
  					i = props.length;
  					while (--i > -1) {
  						p = props[i];
  						if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors.
  							seamless = false;
  							break;
  						}
  					}
  					if (seamless) {
  						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
  						if (prepend) {
  							values.unshift(prepend);
  						}
  						values.push(values[1]);
  						prepend = values[values.length - 3];
  					}
  				}
  				_r1.length = _r2.length = _r3.length = 0;
  				i = props.length;
  				while (--i > -1) {
  					p = props[i];
  					_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
  					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
  				}
  				i = _r1.length;
  				while (--i > -1) {
  					_r1[i] = Math.sqrt(_r1[i]);
  					_r2[i] = Math.sqrt(_r2[i]);
  				}
  				if (!basic) {
  					i = props.length;
  					while (--i > -1) {
  						if (_corProps[p]) {
  							a = obj[props[i]];
  							l = a.length - 1;
  							for (j = 0; j < l; j++) {
  								r = (a[j+1].da / _r2[j] + a[j].da / _r1[j]) || 0;
  								_r3[j] = (_r3[j] || 0) + r * r;
  							}
  						}
  					}
  					i = _r3.length;
  					while (--i > -1) {
  						_r3[i] = Math.sqrt(_r3[i]);
  					}
  				}
  				i = props.length;
  				j = quadratic ? 4 : 1;
  				while (--i > -1) {
  					p = props[i];
  					a = obj[p];
  					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
  					if (seamless) {
  						a.splice(0, j);
  						a.splice(a.length - j, j);
  					}
  				}
  				return obj;
  			},
  			_parseBezierData = function(values, type, prepend) {
  				type = type || "soft";
  				var obj = {},
  					inc = (type === "cubic") ? 3 : 2,
  					soft = (type === "soft"),
  					props = [],
  					a, b, c, d, cur, i, j, l, p, cnt, tmp;
  				if (soft && prepend) {
  					values = [prepend].concat(values);
  				}
  				if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
  				for (p in values[0]) {
  					props.push(p);
  				}
  				i = props.length;
  				while (--i > -1) {
  					p = props[i];
  					obj[p] = cur = [];
  					cnt = 0;
  					l = values.length;
  					for (j = 0; j < l; j++) {
  						a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
  						if (soft) if (j > 1) if (j < l - 1) {
  							cur[cnt++] = (a + cur[cnt-2]) / 2;
  						}
  						cur[cnt++] = a;
  					}
  					l = cnt - inc + 1;
  					cnt = 0;
  					for (j = 0; j < l; j += inc) {
  						a = cur[j];
  						b = cur[j+1];
  						c = cur[j+2];
  						d = (inc === 2) ? 0 : cur[j+3];
  						cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
  					}
  					cur.length = cnt;
  				}
  				return obj;
  			},
  			_addCubicLengths = function(a, steps, resolution) {
  				var inc = 1 / resolution,
  					j = a.length,
  					d, d1, s, da, ca, ba, p, i, inv, bez, index;
  				while (--j > -1) {
  					bez = a[j];
  					s = bez.a;
  					da = bez.d - s;
  					ca = bez.c - s;
  					ba = bez.b - s;
  					d = d1 = 0;
  					for (i = 1; i <= resolution; i++) {
  						p = inc * i;
  						inv = 1 - p;
  						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
  						index = j * resolution + i - 1;
  						steps[index] = (steps[index] || 0) + d * d;
  					}
  				}
  			},
  			_parseLengthData = function(obj, resolution) {
  				resolution = resolution >> 0 || 6;
  				var a = [],
  					lengths = [],
  					d = 0,
  					total = 0,
  					threshold = resolution - 1,
  					segments = [],
  					curLS = [], //current length segments array
  					p, i, l, index;
  				for (p in obj) {
  					_addCubicLengths(obj[p], a, resolution);
  				}
  				l = a.length;
  				for (i = 0; i < l; i++) {
  					d += Math.sqrt(a[i]);
  					index = i % resolution;
  					curLS[index] = d;
  					if (index === threshold) {
  						total += d;
  						index = (i / resolution) >> 0;
  						segments[index] = curLS;
  						lengths[index] = total;
  						d = 0;
  						curLS = [];
  					}
  				}
  				return {length:total, lengths:lengths, segments:segments};
  			},



  			BezierPlugin = _gsScope._gsDefine.plugin({
  					propName: "bezier",
  					priority: -1,
  					version: "1.3.8",
  					API: 2,
  					global:true,

  					//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  					init: function(target, vars, tween) {
  						this._target = target;
  						if (vars instanceof Array) {
  							vars = {values:vars};
  						}
  						this._func = {};
  						this._mod = {};
  						this._props = [];
  						this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
  						var values = vars.values || [],
  							first = {},
  							second = values[0],
  							autoRotate = vars.autoRotate || tween.vars.orientToBezier,
  							p, isFunc, i, j, prepend;

  						this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
  						for (p in second) {
  							this._props.push(p);
  						}

  						i = this._props.length;
  						while (--i > -1) {
  							p = this._props[i];

  							this._overwriteProps.push(p);
  							isFunc = this._func[p] = (typeof(target[p]) === "function");
  							first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
  							if (!prepend) if (first[p] !== values[0][p]) {
  								prepend = first;
  							}
  						}
  						this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
  						this._segCount = this._beziers[p].length;

  						if (this._timeRes) {
  							var ld = _parseLengthData(this._beziers, this._timeRes);
  							this._length = ld.length;
  							this._lengths = ld.lengths;
  							this._segments = ld.segments;
  							this._l1 = this._li = this._s1 = this._si = 0;
  							this._l2 = this._lengths[0];
  							this._curSeg = this._segments[0];
  							this._s2 = this._curSeg[0];
  							this._prec = 1 / this._curSeg.length;
  						}

  						if ((autoRotate = this._autoRotate)) {
  							this._initialRotations = [];
  							if (!(autoRotate[0] instanceof Array)) {
  								this._autoRotate = autoRotate = [autoRotate];
  							}
  							i = autoRotate.length;
  							while (--i > -1) {
  								for (j = 0; j < 3; j++) {
  									p = autoRotate[i][j];
  									this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
  								}
  								p = autoRotate[i][2];
  								this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
  								this._overwriteProps.push(p);
  							}
  						}
  						this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
  						return true;
  					},

  					//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  					set: function(v) {
  						var segments = this._segCount,
  							func = this._func,
  							target = this._target,
  							notStart = (v !== this._startRatio),
  							curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
  						if (!this._timeRes) {
  							curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
  							t = (v - (curIndex * (1 / segments))) * segments;
  						} else {
  							lengths = this._lengths;
  							curSeg = this._curSeg;
  							v *= this._length;
  							i = this._li;
  							//find the appropriate segment (if the currently cached one isn't correct)
  							if (v > this._l2 && i < segments - 1) {
  								l = segments - 1;
  								while (i < l && (this._l2 = lengths[++i]) <= v) {	}
  								this._l1 = lengths[i-1];
  								this._li = i;
  								this._curSeg = curSeg = this._segments[i];
  								this._s2 = curSeg[(this._s1 = this._si = 0)];
  							} else if (v < this._l1 && i > 0) {
  								while (i > 0 && (this._l1 = lengths[--i]) >= v) { }
  								if (i === 0 && v < this._l1) {
  									this._l1 = 0;
  								} else {
  									i++;
  								}
  								this._l2 = lengths[i];
  								this._li = i;
  								this._curSeg = curSeg = this._segments[i];
  								this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
  								this._s2 = curSeg[this._si];
  							}
  							curIndex = i;
  							//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
  							v -= this._l1;
  							i = this._si;
  							if (v > this._s2 && i < curSeg.length - 1) {
  								l = curSeg.length - 1;
  								while (i < l && (this._s2 = curSeg[++i]) <= v) {	}
  								this._s1 = curSeg[i-1];
  								this._si = i;
  							} else if (v < this._s1 && i > 0) {
  								while (i > 0 && (this._s1 = curSeg[--i]) >= v) {	}
  								if (i === 0 && v < this._s1) {
  									this._s1 = 0;
  								} else {
  									i++;
  								}
  								this._s2 = curSeg[i];
  								this._si = i;
  							}
  							t = ((i + (v - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
  						}
  						inv = 1 - t;

  						i = this._props.length;
  						while (--i > -1) {
  							p = this._props[i];
  							b = this._beziers[p][curIndex];
  							val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
  							if (this._mod[p]) {
  								val = this._mod[p](val, target);
  							}
  							if (func[p]) {
  								target[p](val);
  							} else {
  								target[p] = val;
  							}
  						}

  						if (this._autoRotate) {
  							var ar = this._autoRotate,
  								b2, x1, y1, x2, y2, add, conv;
  							i = ar.length;
  							while (--i > -1) {
  								p = ar[i][2];
  								add = ar[i][3] || 0;
  								conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
  								b = this._beziers[ar[i][0]];
  								b2 = this._beziers[ar[i][1]];

  								if (b && b2) { //in case one of the properties got overwritten.
  									b = b[curIndex];
  									b2 = b2[curIndex];

  									x1 = b.a + (b.b - b.a) * t;
  									x2 = b.b + (b.c - b.b) * t;
  									x1 += (x2 - x1) * t;
  									x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

  									y1 = b2.a + (b2.b - b2.a) * t;
  									y2 = b2.b + (b2.c - b2.b) * t;
  									y1 += (y2 - y1) * t;
  									y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

  									val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

  									if (this._mod[p]) {
  										val = this._mod[p](val, target); //for modProps
  									}

  									if (func[p]) {
  										target[p](val);
  									} else {
  										target[p] = val;
  									}
  								}
  							}
  						}
  					}
  			}),
  			p = BezierPlugin.prototype;


  		BezierPlugin.bezierThrough = bezierThrough;
  		BezierPlugin.cubicToQuadratic = cubicToQuadratic;
  		BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
  		BezierPlugin.quadraticToCubic = function(a, b, c) {
  			return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
  		};

  		BezierPlugin._cssRegister = function() {
  			var CSSPlugin = _globals.CSSPlugin;
  			if (!CSSPlugin) {
  				return;
  			}
  			var _internals = CSSPlugin._internals,
  				_parseToProxy = _internals._parseToProxy,
  				_setPluginRatio = _internals._setPluginRatio,
  				CSSPropTween = _internals.CSSPropTween;
  			_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
  				if (e instanceof Array) {
  					e = {values:e};
  				}
  				plugin = new BezierPlugin();
  				var values = e.values,
  					l = values.length - 1,
  					pluginValues = [],
  					v = {},
  					i, p, data;
  				if (l < 0) {
  					return pt;
  				}
  				for (i = 0; i <= l; i++) {
  					data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
  					pluginValues[i] = data.end;
  				}
  				for (p in e) {
  					v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
  				}
  				v.values = pluginValues;
  				pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
  				pt.data = data;
  				pt.plugin = plugin;
  				pt.setRatio = _setPluginRatio;
  				if (v.autoRotate === 0) {
  					v.autoRotate = true;
  				}
  				if (v.autoRotate && !(v.autoRotate instanceof Array)) {
  					i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
  					v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
  				}
  				if (v.autoRotate) {
  					if (!cssp._transform) {
  						cssp._enableTransforms(false);
  					}
  					data.autoRotate = cssp._target._gsTransform;
  					data.proxy.rotation = data.autoRotate.rotation || 0;
  					cssp._overwriteProps.push("rotation");
  				}
  				plugin._onInitTween(data.proxy, v, cssp._tween);
  				return pt;
  			}});
  		};

  		p._mod = function(lookup) {
  			var op = this._overwriteProps,
  				i = op.length,
  				val;
  			while (--i > -1) {
  				val = lookup[op[i]];
  				if (val && typeof(val) === "function") {
  					this._mod[op[i]] = val;
  				}
  			}
  		};

  		p._kill = function(lookup) {
  			var a = this._props,
  				p, i;
  			for (p in this._beziers) {
  				if (p in lookup) {
  					delete this._beziers[p];
  					delete this._func[p];
  					i = a.length;
  					while (--i > -1) {
  						if (a[i] === p) {
  							a.splice(i, 1);
  						}
  					}
  				}
  			}
  			a = this._autoRotate;
  			if (a) {
  				i = a.length;
  				while (--i > -1) {
  					if (lookup[a[i][2]]) {
  						a.splice(i, 1);
  					}
  				}
  			}
  			return this._super._kill.call(this, lookup);
  		};

  	}());






  	
  	
  	
  	
  	
  	
  	
  	
  /*
   * ----------------------------------------------------------------
   * CSSPlugin
   * ----------------------------------------------------------------
   */
  	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

  		/** @constructor **/
  		var CSSPlugin = function() {
  				TweenPlugin.call(this, "css");
  				this._overwriteProps.length = 0;
  				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
  			},
  			_globals = _gsScope._gsDefine.globals,
  			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
  			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
  			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
  			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
  			_specialProps = {},
  			p = CSSPlugin.prototype = new TweenPlugin("css");

  		p.constructor = CSSPlugin;
  		CSSPlugin.version = "1.20.4";
  		CSSPlugin.API = 2;
  		CSSPlugin.defaultTransformPerspective = 0;
  		CSSPlugin.defaultSkewType = "compensated";
  		CSSPlugin.defaultSmoothOrigin = true;
  		p = "px"; //we'll reuse the "p" variable to keep file size down
  		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


  		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
  			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
  			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
  			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
  			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
  			_opacityExp = /opacity *= *([^)]*)/i,
  			_opacityValExp = /opacity:([^;]*)/i,
  			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
  			_rgbhslExp = /^(rgb|hsl)/,
  			_capsExp = /([A-Z])/g,
  			_camelExp = /-([a-z])/gi,
  			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
  			_camelFunc = function(s, g) { return g.toUpperCase(); },
  			_horizExp = /(?:Left|Right|Width)/i,
  			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
  			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
  			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
  			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
  			_DEG2RAD = Math.PI / 180,
  			_RAD2DEG = 180 / Math.PI,
  			_forcePT = {},
  			_dummyElement = {style:{}},
  			_doc = _gsScope.document || {createElement: function() {return _dummyElement;}},
  			_createElement = function(type, ns) {
  				return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
  			},
  			_tempDiv = _createElement("div"),
  			_tempImg = _createElement("img"),
  			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
  			_agent = (_gsScope.navigator || {}).userAgent || "",
  			_autoRound,
  			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

  			_isSafari,
  			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
  			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
  			_ieVers,
  			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
  				var i = _agent.indexOf("Android"),
  					a = _createElement("a");
  				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
  				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
  				_isFirefox = (_agent.indexOf("Firefox") !== -1);
  				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
  					_ieVers = parseFloat( RegExp.$1 );
  				}
  				if (!a) {
  					return false;
  				}
  				a.style.cssText = "top:1px;opacity:.55;";
  				return /^0.55/.test(a.style.opacity);
  			}()),
  			_getIEOpacity = function(v) {
  				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
  			},
  			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
  				if (_gsScope.console) {
  					console.log(s);
  				}
  			},
  			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
  			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

  			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
  			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

  			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
  			_checkPropPrefix = function(p, e) {
  				e = e || _tempDiv;
  				var s = e.style,
  					a, i;
  				if (s[p] !== undefined) {
  					return p;
  				}
  				p = p.charAt(0).toUpperCase() + p.substr(1);
  				a = ["O","Moz","ms","Ms","Webkit"];
  				i = 5;
  				while (--i > -1 && s[a[i]+p] === undefined) { }
  				if (i >= 0) {
  					_prefix = (i === 3) ? "ms" : a[i];
  					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
  					return _prefix + p;
  				}
  				return null;
  			},

  			_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},

  			/**
  			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
  			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
  			 *
  			 * @param {!Object} t Target element whose style property you want to query
  			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
  			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
  			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
  			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
  			 * @return {?string} The current property value
  			 */
  			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
  				var rv;
  				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
  					return _getIEOpacity(t);
  				}
  				if (!calc && t.style[p]) {
  					rv = t.style[p];
  				} else if ((cs = cs || _getComputedStyle(t))) {
  					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
  				} else if (t.currentStyle) {
  					rv = t.currentStyle[p];
  				}
  				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
  			},

  			/**
  			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
  			 * @param {!Object} t Target element
  			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
  			 * @param {!number} v Value
  			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
  			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
  			 * @return {number} value in pixels
  			 */
  			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
  				if (sfx === "px" || (!sfx && p !== "lineHeight")) { return v; }
  				if (sfx === "auto" || !v) { return 0; }
  				var horiz = _horizExp.test(p),
  					node = t,
  					style = _tempDiv.style,
  					neg = (v < 0),
  					precise = (v === 1),
  					pix, cache, time;
  				if (neg) {
  					v = -v;
  				}
  				if (precise) {
  					v *= 100;
  				}
  				if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
  					cache = _getComputedStyle(t).lineHeight;
  					t.style.lineHeight = v;
  					pix = parseFloat(_getComputedStyle(t).lineHeight);
  					t.style.lineHeight = cache;
  				} else if (sfx === "%" && p.indexOf("border") !== -1) {
  					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
  				} else {
  					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
  					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
  						node = t.parentNode || _doc.body;
  						if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
  							style.position = "absolute";
  						}
  						cache = node._gsCache;
  						time = TweenLite.ticker.frame;
  						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
  							return cache.width * v / 100;
  						}
  						style[(horiz ? "width" : "height")] = v + sfx;
  					} else {
  						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
  					}
  					node.appendChild(_tempDiv);
  					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
  					node.removeChild(_tempDiv);
  					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
  						cache = node._gsCache = node._gsCache || {};
  						cache.time = time;
  						cache.width = pix / v * 100;
  					}
  					if (pix === 0 && !recurse) {
  						pix = _convertToPixels(t, p, v, sfx, true);
  					}
  				}
  				if (precise) {
  					pix /= 100;
  				}
  				return neg ? -pix : pix;
  			},
  			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
  				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
  				var dim = ((p === "left") ? "Left" : "Top"),
  					v = _getStyle(t, "margin" + dim, cs);
  				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
  			},

  			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
  			_getAllStyles = function(t, cs) {
  				var s = {},
  					i, tr, p;
  				if ((cs = cs || _getComputedStyle(t, null))) {
  					if ((i = cs.length)) {
  						while (--i > -1) {
  							p = cs[i];
  							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
  								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
  							}
  						}
  					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
  						for (i in cs) {
  							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
  								s[i] = cs[i];
  							}
  						}
  					}
  				} else if ((cs = t.currentStyle || t.style)) {
  					for (i in cs) {
  						if (typeof(i) === "string" && s[i] === undefined) {
  							s[i.replace(_camelExp, _camelFunc)] = cs[i];
  						}
  					}
  				}
  				if (!_supportsOpacity) {
  					s.opacity = _getIEOpacity(t);
  				}
  				tr = _getTransform(t, cs, false);
  				s.rotation = tr.rotation;
  				s.skewX = tr.skewX;
  				s.scaleX = tr.scaleX;
  				s.scaleY = tr.scaleY;
  				s.x = tr.x;
  				s.y = tr.y;
  				if (_supports3D) {
  					s.z = tr.z;
  					s.rotationX = tr.rotationX;
  					s.rotationY = tr.rotationY;
  					s.scaleZ = tr.scaleZ;
  				}
  				if (s.filters) {
  					delete s.filters;
  				}
  				return s;
  			},

  			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
  			_cssDif = function(t, s1, s2, vars, forceLookup) {
  				var difs = {},
  					style = t.style,
  					val, p, mpt;
  				for (p in s2) {
  					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
  						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
  						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
  							mpt = new MiniPropTween(style, p, style[p], mpt);
  						}
  					}
  				}
  				if (vars) {
  					for (p in vars) { //copy properties (except className)
  						if (p !== "className") {
  							difs[p] = vars[p];
  						}
  					}
  				}
  				return {difs:difs, firstMPT:mpt};
  			},
  			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
  			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

  			/**
  			 * @private Gets the width or height of an element
  			 * @param {!Object} t Target element
  			 * @param {!string} p Property name ("width" or "height")
  			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
  			 * @return {number} Dimension (in pixels)
  			 */
  			_getDimension = function(t, p, cs) {
  				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
  					return (cs || _getComputedStyle(t))[p] || 0;
  				} else if (t.getCTM && _isSVG(t)) {
  					return t.getBBox()[p] || 0;
  				}
  				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
  					a = _dimensions[p],
  					i = a.length;
  				cs = cs || _getComputedStyle(t, null);
  				while (--i > -1) {
  					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
  					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
  				}
  				return v;
  			},

  			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
  			_parsePosition = function(v, recObj) {
  				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
  					return v + " ";
  				}
  				if (v == null || v === "") {
  					v = "0 0";
  				}
  				var a = v.split(" "),
  					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
  					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
  					i;
  				if (a.length > 3 && !recObj) { //multiple positions
  					a = v.split(", ").join(",").split(",");
  					v = [];
  					for (i = 0; i < a.length; i++) {
  						v.push(_parsePosition(a[i]));
  					}
  					return v.join(",");
  				}
  				if (y == null) {
  					y = (x === "center") ? "50%" : "0";
  				} else if (y === "center") {
  					y = "50%";
  				}
  				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
  					x = "50%";
  				}
  				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
  				if (recObj) {
  					recObj.oxp = (x.indexOf("%") !== -1);
  					recObj.oyp = (y.indexOf("%") !== -1);
  					recObj.oxr = (x.charAt(1) === "=");
  					recObj.oyr = (y.charAt(1) === "=");
  					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
  					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
  					recObj.v = v;
  				}
  				return recObj || v;
  			},

  			/**
  			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
  			 * @param {(number|string)} e End value which is typically a string, but could be a number
  			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
  			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
  			 */
  			_parseChange = function(e, b) {
  				if (typeof(e) === "function") {
  					e = e(_index, _target);
  				}
  				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
  			},

  			/**
  			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
  			 * @param {Object} v Value to be parsed
  			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
  			 * @return {number} Parsed value
  			 */
  			_parseVal = function(v, d) {
  				if (typeof(v) === "function") {
  					v = v(_index, _target);
  				}
  				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
  			},

  			/**
  			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
  			 * @param {Object} v Value to be parsed
  			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
  			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
  			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
  			 * @return {number} parsed angle in radians
  			 */
  			_parseAngle = function(v, d, p, directionalEnd) {
  				var min = 0.000001,
  					cap, split, dif, result, isRelative;
  				if (typeof(v) === "function") {
  					v = v(_index, _target);
  				}
  				if (v == null) {
  					result = d;
  				} else if (typeof(v) === "number") {
  					result = v;
  				} else {
  					cap = 360;
  					split = v.split("_");
  					isRelative = (v.charAt(1) === "=");
  					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
  					if (split.length) {
  						if (directionalEnd) {
  							directionalEnd[p] = d + dif;
  						}
  						if (v.indexOf("short") !== -1) {
  							dif = dif % cap;
  							if (dif !== dif % (cap / 2)) {
  								dif = (dif < 0) ? dif + cap : dif - cap;
  							}
  						}
  						if (v.indexOf("_cw") !== -1 && dif < 0) {
  							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
  						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
  							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
  						}
  					}
  					result = d + dif;
  				}
  				if (result < min && result > -min) {
  					result = 0;
  				}
  				return result;
  			},

  			_colorLookup = {aqua:[0,255,255],
  				lime:[0,255,0],
  				silver:[192,192,192],
  				black:[0,0,0],
  				maroon:[128,0,0],
  				teal:[0,128,128],
  				blue:[0,0,255],
  				navy:[0,0,128],
  				white:[255,255,255],
  				fuchsia:[255,0,255],
  				olive:[128,128,0],
  				yellow:[255,255,0],
  				orange:[255,165,0],
  				gray:[128,128,128],
  				purple:[128,0,128],
  				green:[0,128,0],
  				red:[255,0,0],
  				pink:[255,192,203],
  				cyan:[0,255,255],
  				transparent:[255,255,255,0]},

  			_hue = function(h, m1, m2) {
  				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
  				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
  			},

  			/**
  			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
  			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
  			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
  			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
  			 */
  			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
  				var a, r, g, b, h, s, l, max, min, d, wasHSL;
  				if (!v) {
  					a = _colorLookup.black;
  				} else if (typeof(v) === "number") {
  					a = [v >> 16, (v >> 8) & 255, v & 255];
  				} else {
  					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
  						v = v.substr(0, v.length - 1);
  					}
  					if (_colorLookup[v]) {
  						a = _colorLookup[v];
  					} else if (v.charAt(0) === "#") {
  						if (v.length === 4) { //for shorthand like #9F0
  							r = v.charAt(1);
  							g = v.charAt(2);
  							b = v.charAt(3);
  							v = "#" + r + r + g + g + b + b;
  						}
  						v = parseInt(v.substr(1), 16);
  						a = [v >> 16, (v >> 8) & 255, v & 255];
  					} else if (v.substr(0, 3) === "hsl") {
  						a = wasHSL = v.match(_numExp);
  						if (!toHSL) {
  							h = (Number(a[0]) % 360) / 360;
  							s = Number(a[1]) / 100;
  							l = Number(a[2]) / 100;
  							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
  							r = l * 2 - g;
  							if (a.length > 3) {
  								a[3] = Number(a[3]);
  							}
  							a[0] = _hue(h + 1 / 3, r, g);
  							a[1] = _hue(h, r, g);
  							a[2] = _hue(h - 1 / 3, r, g);
  						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
  							return v.match(_relNumExp);
  						}
  					} else {
  						a = v.match(_numExp) || _colorLookup.transparent;
  					}
  					a[0] = Number(a[0]);
  					a[1] = Number(a[1]);
  					a[2] = Number(a[2]);
  					if (a.length > 3) {
  						a[3] = Number(a[3]);
  					}
  				}
  				if (toHSL && !wasHSL) {
  					r = a[0] / 255;
  					g = a[1] / 255;
  					b = a[2] / 255;
  					max = Math.max(r, g, b);
  					min = Math.min(r, g, b);
  					l = (max + min) / 2;
  					if (max === min) {
  						h = s = 0;
  					} else {
  						d = max - min;
  						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
  						h *= 60;
  					}
  					a[0] = (h + 0.5) | 0;
  					a[1] = (s * 100 + 0.5) | 0;
  					a[2] = (l * 100 + 0.5) | 0;
  				}
  				return a;
  			},
  			_formatColors = function(s, toHSL) {
  				var colors = s.match(_colorExp) || [],
  					charIndex = 0,
  					parsed = "",
  					i, color, temp;
  				if (!colors.length) {
  					return s;
  				}
  				for (i = 0; i < colors.length; i++) {
  					color = colors[i];
  					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
  					charIndex += temp.length + color.length;
  					color = _parseColor(color, toHSL);
  					if (color.length === 3) {
  						color.push(1);
  					}
  					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
  				}
  				return parsed + s.substr(charIndex);
  			},
  			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

  		for (p in _colorLookup) {
  			_colorExp += "|" + p + "\\b";
  		}
  		_colorExp = new RegExp(_colorExp+")", "gi");

  		CSSPlugin.colorStringFilter = function(a) {
  			var combined = a[0] + " " + a[1],
  				toHSL;
  			if (_colorExp.test(combined)) {
  				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
  				a[0] = _formatColors(a[0], toHSL);
  				a[1] = _formatColors(a[1], toHSL);
  			}
  			_colorExp.lastIndex = 0;
  		};

  		if (!TweenLite.defaultStringFilter) {
  			TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
  		}

  		/**
  		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
  		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
  		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
  		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
  		 * @return {Function} formatter function
  		 */
  		var _getFormatter = function(dflt, clr, collapsible, multi) {
  				if (dflt == null) {
  					return function(v) {return v;};
  				}
  				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
  					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
  					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
  					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
  					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
  					numVals = dVals.length,
  					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
  					formatter;
  				if (!numVals) {
  					return function(v) {return v;};
  				}
  				if (clr) {
  					formatter = function(v) {
  						var color, vals, i, a;
  						if (typeof(v) === "number") {
  							v += dSfx;
  						} else if (multi && _commasOutsideParenExp.test(v)) {
  							a = v.replace(_commasOutsideParenExp, "|").split("|");
  							for (i = 0; i < a.length; i++) {
  								a[i] = formatter(a[i]);
  							}
  							return a.join(",");
  						}
  						color = (v.match(_colorExp) || [dColor])[0];
  						vals = v.split(color).join("").match(_valuesExp) || [];
  						i = vals.length;
  						if (numVals > i--) {
  							while (++i < numVals) {
  								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
  							}
  						}
  						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
  					};
  					return formatter;

  				}
  				formatter = function(v) {
  					var vals, a, i;
  					if (typeof(v) === "number") {
  						v += dSfx;
  					} else if (multi && _commasOutsideParenExp.test(v)) {
  						a = v.replace(_commasOutsideParenExp, "|").split("|");
  						for (i = 0; i < a.length; i++) {
  							a[i] = formatter(a[i]);
  						}
  						return a.join(",");
  					}
  					vals = v.match(_valuesExp) || [];
  					i = vals.length;
  					if (numVals > i--) {
  						while (++i < numVals) {
  							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
  						}
  					}
  					return pfx + vals.join(delim) + sfx;
  				};
  				return formatter;
  			},

  			/**
  			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
  			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
  			 * @return {Function} a formatter function
  			 */
  			_getEdgeParser = function(props) {
  				props = props.split(",");
  				return function(t, e, p, cssp, pt, plugin, vars) {
  					var a = (e + "").split(" "),
  						i;
  					vars = {};
  					for (i = 0; i < 4; i++) {
  						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
  					}
  					return cssp.parse(t, vars, pt, plugin);
  				};
  			},

  			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
  			_setPluginRatio = _internals._setPluginRatio = function(v) {
  				this.plugin.setRatio(v);
  				var d = this.data,
  					proxy = d.proxy,
  					mpt = d.firstMPT,
  					min = 0.000001,
  					val, pt, i, str, p;
  				while (mpt) {
  					val = proxy[mpt.v];
  					if (mpt.r) {
  						val = Math.round(val);
  					} else if (val < min && val > -min) {
  						val = 0;
  					}
  					mpt.t[mpt.p] = val;
  					mpt = mpt._next;
  				}
  				if (d.autoRotate) {
  					d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
  				}
  				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
  				if (v === 1 || v === 0) {
  					mpt = d.firstMPT;
  					p = (v === 1) ? "e" : "b";
  					while (mpt) {
  						pt = mpt.t;
  						if (!pt.type) {
  							pt[p] = pt.s + pt.xs0;
  						} else if (pt.type === 1) {
  							str = pt.xs0 + pt.s + pt.xs1;
  							for (i = 1; i < pt.l; i++) {
  								str += pt["xn"+i] + pt["xs"+(i+1)];
  							}
  							pt[p] = str;
  						}
  						mpt = mpt._next;
  					}
  				}
  			},

  			/**
  			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
  			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
  			 * @param {!string} p property name
  			 * @param {(number|string|object)} v value
  			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
  			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
  			 */
  			MiniPropTween = function(t, p, v, next, r) {
  				this.t = t;
  				this.p = p;
  				this.v = v;
  				this.r = r;
  				if (next) {
  					next._prev = this;
  					this._next = next;
  				}
  			},

  			/**
  			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
  			 * This method returns an object that has the following properties:
  			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
  			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
  			 *  - firstMPT: the first MiniPropTween in the linked list
  			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
  			 * @param {!Object} t target object to be tweened
  			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
  			 * @param {!CSSPlugin} cssp The CSSPlugin instance
  			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
  			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
  			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
  			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
  			 */
  			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
  				var bpt = pt,
  					start = {},
  					end = {},
  					transform = cssp._transform,
  					oldForce = _forcePT,
  					i, p, xp, mpt, firstPT;
  				cssp._transform = null;
  				_forcePT = vars;
  				pt = firstPT = cssp.parse(t, vars, pt, plugin);
  				_forcePT = oldForce;
  				//break off from the linked list so the new ones are isolated.
  				if (shallow) {
  					cssp._transform = transform;
  					if (bpt) {
  						bpt._prev = null;
  						if (bpt._prev) {
  							bpt._prev._next = null;
  						}
  					}
  				}
  				while (pt && pt !== bpt) {
  					if (pt.type <= 1) {
  						p = pt.p;
  						end[p] = pt.s + pt.c;
  						start[p] = pt.s;
  						if (!shallow) {
  							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
  							pt.c = 0;
  						}
  						if (pt.type === 1) {
  							i = pt.l;
  							while (--i > 0) {
  								xp = "xn" + i;
  								p = pt.p + "_" + xp;
  								end[p] = pt.data[xp];
  								start[p] = pt[xp];
  								if (!shallow) {
  									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
  								}
  							}
  						}
  					}
  					pt = pt._next;
  				}
  				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
  			},



  			/**
  			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
  			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
  			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
  			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
  			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
  			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
  			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
  			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
  			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
  			 * @param {number} s Starting numeric value
  			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
  			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
  			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
  			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
  			 * @param {boolean=} r If true, the value(s) should be rounded
  			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
  			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
  			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
  			 */
  			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
  				this.t = t; //target
  				this.p = p; //property
  				this.s = s; //starting value
  				this.c = c; //change value
  				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
  				if (!(t instanceof CSSPropTween)) {
  					_overwriteProps.push(this.n);
  				}
  				this.r = r; //round (boolean)
  				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
  				if (pr) {
  					this.pr = pr;
  					_hasPriority = true;
  				}
  				this.b = (b === undefined) ? s : b;
  				this.e = (e === undefined) ? s + c : e;
  				if (next) {
  					this._next = next;
  					next._prev = this;
  				}
  			},

  			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
  				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
  				pt.b = start;
  				pt.e = pt.xs0 = end;
  				return pt;
  			},

  			/**
  			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
  			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
  			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
  			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
  			 *
  			 * @param {!Object} t Target whose property will be tweened
  			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
  			 * @param {string} b Beginning value
  			 * @param {string} e Ending value
  			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
  			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
  			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
  			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
  			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
  			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
  			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
  			 */
  			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
  				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
  				b = b || dflt || "";
  				if (typeof(e) === "function") {
  					e = e(_index, _target);
  				}
  				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
  				e += ""; //ensures it's a string
  				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
  					e = [b, e];
  					CSSPlugin.colorStringFilter(e);
  					b = e[0];
  					e = e[1];
  				}
  				var ba = b.split(", ").join(",").split(" "), //beginning array
  					ea = e.split(", ").join(",").split(" "), //ending array
  					l = ba.length,
  					autoRound = (_autoRound !== false),
  					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
  				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
  					if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
  						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
  						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
  					} else {
  						ba = ba.join(" ").split(",").join(", ").split(" ");
  						ea = ea.join(" ").split(",").join(", ").split(" ");
  					}
  					l = ba.length;
  				}
  				if (l !== ea.length) {
  					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
  					ba = (dflt || "").split(" ");
  					l = ba.length;
  				}
  				pt.plugin = plugin;
  				pt.setRatio = setRatio;
  				_colorExp.lastIndex = 0;
  				for (i = 0; i < l; i++) {
  					bv = ba[i];
  					ev = ea[i];
  					bn = parseFloat(bv);
  					//if the value begins with a number (most common). It's fine if it has a suffix like px
  					if (bn || bn === 0) {
  						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

  					//if the value is a color
  					} else if (clrs && _colorExp.test(bv)) {
  						str = ev.indexOf(")") + 1;
  						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
  						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
  						temp = ev; //original string value so we can look for any prefix later.
  						bv = _parseColor(bv, useHSL);
  						ev = _parseColor(ev, useHSL);
  						hasAlpha = (bv.length + ev.length > 6);
  						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
  							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
  							pt.e = pt.e.split(ea[i]).join("transparent");
  						} else {
  							if (!_supportsOpacity) { //old versions of IE don't support rgba().
  								hasAlpha = false;
  							}
  							if (useHSL) {
  								pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
  									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
  									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
  							} else {
  								pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
  									.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
  									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), true);
  							}

  							if (hasAlpha) {
  								bv = (bv.length < 4) ? 1 : bv[3];
  								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
  							}
  						}
  						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

  					} else {
  						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

  						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
  						if (!bnums) {
  							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

  						//loop through all the numbers that are found and construct the extra values on the pt.
  						} else {
  							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
  							if (!enums || enums.length !== bnums.length) {
  								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
  								return pt;
  							}
  							ni = 0;
  							for (xi = 0; xi < bnums.length; xi++) {
  								cv = bnums[xi];
  								temp = bv.indexOf(cv, ni);
  								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
  								ni = temp + cv.length;
  							}
  							pt["xs" + pt.l] += bv.substr(ni);
  						}
  					}
  				}
  				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
  				if (e.indexOf("=") !== -1) if (pt.data) {
  					str = pt.xs0 + pt.data.s;
  					for (i = 1; i < pt.l; i++) {
  						str += pt["xs" + i] + pt.data["xn" + i];
  					}
  					pt.e = str + pt["xs" + i];
  				}
  				if (!pt.l) {
  					pt.type = -1;
  					pt.xs0 = pt.e;
  				}
  				return pt.xfirst || pt;
  			},
  			i = 9;


  		p = CSSPropTween.prototype;
  		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
  		while (--i > 0) {
  			p["xn" + i] = 0;
  			p["xs" + i] = "";
  		}
  		p.xs0 = "";
  		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


  		/**
  		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
  		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
  		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
  		 * @param {string=} pfx Prefix (if any)
  		 * @param {!number} s Starting value
  		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
  		 * @param {string=} sfx Suffix (if any)
  		 * @param {boolean=} r Round (if true).
  		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
  		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
  		 */
  		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
  			var pt = this,
  				l = pt.l;
  			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
  			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
  				pt["xs" + l] += s + (sfx || "");
  				return pt;
  			}
  			pt.l++;
  			pt.type = pt.setRatio ? 2 : 1;
  			pt["xs" + pt.l] = sfx || "";
  			if (l > 0) {
  				pt.data["xn" + l] = s + c;
  				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
  				pt["xn" + l] = s;
  				if (!pt.plugin) {
  					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
  					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
  				}
  				return pt;
  			}
  			pt.data = {s:s + c};
  			pt.rxp = {};
  			pt.s = s;
  			pt.c = c;
  			pt.r = r;
  			return pt;
  		};

  		/**
  		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
  		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
  		 * @param {Object=} options An object containing any of the following configuration options:
  		 *                      - defaultValue: the default value
  		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
  		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
  		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
  		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
  		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
  		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
  		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
  		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
  		 */
  		var SpecialProp = function(p, options) {
  				options = options || {};
  				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
  				_specialProps[p] = _specialProps[this.p] = this;
  				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
  				if (options.parser) {
  					this.parse = options.parser;
  				}
  				this.clrs = options.color;
  				this.multi = options.multi;
  				this.keyword = options.keyword;
  				this.dflt = options.defaultValue;
  				this.pr = options.priority || 0;
  			},

  			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
  			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
  				if (typeof(options) !== "object") {
  					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
  				}
  				var a = p.split(","),
  					d = options.defaultValue,
  					i, temp;
  				defaults = defaults || [d];
  				for (i = 0; i < a.length; i++) {
  					options.prefix = (i === 0 && options.prefix);
  					options.defaultValue = defaults[i] || d;
  					temp = new SpecialProp(a[i], options);
  				}
  			},

  			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
  			_registerPluginProp = _internals._registerPluginProp = function(p) {
  				if (!_specialProps[p]) {
  					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
  					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
  						var pluginClass = _globals.com.greensock.plugins[pluginName];
  						if (!pluginClass) {
  							_log("Error: " + pluginName + " js file not loaded.");
  							return pt;
  						}
  						pluginClass._cssRegister();
  						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
  					}});
  				}
  			};


  		p = SpecialProp.prototype;

  		/**
  		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
  		 * @param {!Object} t target element
  		 * @param {(string|number|object)} b beginning value
  		 * @param {(string|number|object)} e ending (destination) value
  		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
  		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
  		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
  		 * @return {CSSPropTween=} First CSSPropTween in the linked list
  		 */
  		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
  			var kwd = this.keyword,
  				i, ba, ea, l, bi, ei;
  			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
  			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
  				ba = b.replace(_commasOutsideParenExp, "|").split("|");
  				ea = e.replace(_commasOutsideParenExp, "|").split("|");
  			} else if (kwd) {
  				ba = [b];
  				ea = [e];
  			}
  			if (ea) {
  				l = (ea.length > ba.length) ? ea.length : ba.length;
  				for (i = 0; i < l; i++) {
  					b = ba[i] = ba[i] || this.dflt;
  					e = ea[i] = ea[i] || this.dflt;
  					if (kwd) {
  						bi = b.indexOf(kwd);
  						ei = e.indexOf(kwd);
  						if (bi !== ei) {
  							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
  								ba[i] = ba[i].split(kwd).join("");
  							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
  								ba[i] += " " + kwd;
  							}
  						}
  					}
  				}
  				b = ba.join(", ");
  				e = ea.join(", ");
  			}
  			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
  		};

  		/**
  		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
  		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
  		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
  		 * @param {!Object} t Target object whose property is being tweened
  		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
  		 * @param {!string} p Property name
  		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
  		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
  		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
  		 * @param {Object=} vars Original vars object that contains the data for parsing.
  		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
  		 */
  		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
  			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
  		};

  		/**
  		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
  		 *  1) Target object whose property should be tweened (typically a DOM element)
  		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
  		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
  		 *
  		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
  		 *
  		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
  		 *      var start = target.style.width;
  		 *      return function(ratio) {
  		 *              target.style.width = (start + value * ratio) + "px";
  		 *              console.log("set width to " + target.style.width);
  		 *          }
  		 * }, 0);
  		 *
  		 * Then, when I do this tween, it will trigger my special property:
  		 *
  		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
  		 *
  		 * In the example, of course, we're just changing the width, but you can do anything you want.
  		 *
  		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
  		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
  		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
  		 */
  		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
  			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
  				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
  				rv.plugin = plugin;
  				rv.setRatio = onInitTween(t, e, cssp._tween, p);
  				return rv;
  			}, priority:priority});
  		};






  		//transform-related methods and properties
  		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
  		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
  			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
  			_transformPropCSS = _prefixCSS + "transform",
  			_transformOriginProp = _checkPropPrefix("transformOrigin"),
  			_supports3D = (_checkPropPrefix("perspective") !== null),
  			Transform = _internals.Transform = function() {
  				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
  				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
  			},
  			_SVGElement = _gsScope.SVGElement,
  			_useSVGTransformAttr,
  			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

  			_createSVG = function(type, container, attributes) {
  				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
  					reg = /([a-z])([A-Z])/g,
  					p;
  				for (p in attributes) {
  					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
  				}
  				container.appendChild(element);
  				return element;
  			},
  			_docElement = _doc.documentElement || {},
  			_forceSVGTransformAttr = (function() {
  				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
  				var force = _ieVers || (/Android/i.test(_agent) && !_gsScope.chrome),
  					svg, rect, width;
  				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
  					svg = _createSVG("svg", _docElement);
  					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
  					width = rect.getBoundingClientRect().width;
  					rect.style[_transformOriginProp] = "50% 50%";
  					rect.style[_transformProp] = "scaleX(0.5)";
  					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
  					_docElement.removeChild(svg);
  				}
  				return force;
  			})(),
  			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
  				var tm = e._gsTransform,
  					m = _getMatrix(e, true),
  					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
  				if (tm) {
  					xOriginOld = tm.xOrigin; //record the original values before we alter them.
  					yOriginOld = tm.yOrigin;
  				}
  				if (!absolute || (v = absolute.split(" ")).length < 2) {
  					b = e.getBBox();
  					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
  						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
  					}
  					local = _parsePosition(local).split(" ");
  					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
  						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
  				}
  				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
  				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
  				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
  					a = m[0];
  					b = m[1];
  					c = m[2];
  					d = m[3];
  					tx = m[4];
  					ty = m[5];
  					determinant = (a * d - b * c);
  					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
  						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
  						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
  						xOrigin = decoratee.xOrigin = v[0] = x;
  						yOrigin = decoratee.yOrigin = v[1] = y;
  					}
  				}
  				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
  					if (skipRecord) {
  						decoratee.xOffset = tm.xOffset;
  						decoratee.yOffset = tm.yOffset;
  						tm = decoratee;
  					}
  					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
  						x = xOrigin - xOriginOld;
  						y = yOrigin - yOriginOld;
  						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
  						//tm.x -= x - (x * m[0] + y * m[2]);
  						//tm.y -= y - (x * m[1] + y * m[3]);
  						tm.xOffset += (x * m[0] + y * m[2]) - x;
  						tm.yOffset += (x * m[1] + y * m[3]) - y;
  					} else {
  						tm.xOffset = tm.yOffset = 0;
  					}
  				}
  				if (!skipRecord) {
  					e.setAttribute("data-svg-origin", v.join(" "));
  				}
  			},
  			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  				var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
  					oldParent = this.parentNode,
  					oldSibling = this.nextSibling,
  					oldCSS = this.style.cssText,
  					bbox;
  				_docElement.appendChild(svg);
  				svg.appendChild(this);
  				this.style.display = "block";
  				if (swapIfPossible) {
  					try {
  						bbox = this.getBBox();
  						this._originalGetBBox = this.getBBox;
  						this.getBBox = _getBBoxHack;
  					} catch (e) { }
  				} else if (this._originalGetBBox) {
  					bbox = this._originalGetBBox();
  				}
  				if (oldSibling) {
  					oldParent.insertBefore(this, oldSibling);
  				} else {
  					oldParent.appendChild(this);
  				}
  				_docElement.removeChild(svg);
  				this.style.cssText = oldCSS;
  				return bbox;
  			},
  			_getBBox = function(e) {
  				try {
  					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  				} catch (error) {
  					return _getBBoxHack.call(e, true);
  				}
  			},
  			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
  				return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  			},
  			_identity2DMatrix = [1,0,0,1,0,0],
  			_getMatrix = function(e, force2D) {
  				var tm = e._gsTransform || new Transform(),
  					rnd = 100000,
  					style = e.style,
  					isDefault, s, m, n, dec, none;
  				if (_transformProp) {
  					s = _getStyle(e, _transformPropCSS, null, true);
  				} else if (e.currentStyle) {
  					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
  					s = e.currentStyle.filter.match(_ieGetMatrixExp);
  					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
  				}
  				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
  				if (_transformProp && ((none = (!_getComputedStyle(e) || _getComputedStyle(e).display === "none")) || !e.parentNode)) { //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  					if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
  						n = style.display;
  						style.display = "block";
  					}
  					if (!e.parentNode) {
  						dec = 1; //flag
  						_docElement.appendChild(e);
  					}
  					s = _getStyle(e, _transformPropCSS, null, true);
  					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
  					if (n) {
  						style.display = n;
  					} else if (none) {
  						_removeProp(style, "display");
  					}
  					if (dec) {
  						_docElement.removeChild(e);
  					}
  				}
  				if (tm.svg || (e.getCTM && _isSVG(e))) {
  					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
  						s = style[_transformProp];
  						isDefault = 0;
  					}
  					m = e.getAttribute("transform");
  					if (isDefault && m) {
  						m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
  						s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
  						isDefault = 0;
  					}
  				}
  				if (isDefault) {
  					return _identity2DMatrix;
  				}
  				//split the matrix values out into an array (m for matrix)
  				m = (s || "").match(_numExp) || [];
  				i = m.length;
  				while (--i > -1) {
  					n = Number(m[i]);
  					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
  				}
  				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
  			},

  			/**
  			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
  			 * @param {!Object} t target element
  			 * @param {Object=} cs computed style object (optional)
  			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
  			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
  			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
  			 */
  			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
  				if (t._gsTransform && rec && !parse) {
  					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
  				}
  				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
  					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
  					min = 0.00002,
  					rnd = 100000,
  					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
  					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
  					m, i, scaleX, scaleY, rotation, skewX;

  				tm.svg = !!(t.getCTM && _isSVG(t));
  				if (tm.svg) {
  					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
  					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
  				}
  				m = _getMatrix(t);
  				if (m !== _identity2DMatrix) {

  					if (m.length === 16) {
  						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
  						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
  							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
  							a13 = m[8], a23 = m[9], a33 = m[10],
  							a14 = m[12], a24 = m[13], a34 = m[14],
  							a43 = m[11],
  							angle = Math.atan2(a32, a33),
  							t1, t2, t3, cos, sin;
  						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
  						if (tm.zOrigin) {
  							a34 = -tm.zOrigin;
  							a14 = a13*a34-m[12];
  							a24 = a23*a34-m[13];
  							a34 = a33*a34+tm.zOrigin-m[14];
  						}
  						//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
  						tm.rotationX = angle * _RAD2DEG;
  						//rotationX
  						if (angle) {
  							cos = Math.cos(-angle);
  							sin = Math.sin(-angle);
  							t1 = a12*cos+a13*sin;
  							t2 = a22*cos+a23*sin;
  							t3 = a32*cos+a33*sin;
  							a13 = a12*-sin+a13*cos;
  							a23 = a22*-sin+a23*cos;
  							a33 = a32*-sin+a33*cos;
  							a43 = a42*-sin+a43*cos;
  							a12 = t1;
  							a22 = t2;
  							a32 = t3;
  						}
  						//rotationY
  						angle = Math.atan2(-a31, a33);
  						tm.rotationY = angle * _RAD2DEG;
  						if (angle) {
  							cos = Math.cos(-angle);
  							sin = Math.sin(-angle);
  							t1 = a11*cos-a13*sin;
  							t2 = a21*cos-a23*sin;
  							t3 = a31*cos-a33*sin;
  							a23 = a21*sin+a23*cos;
  							a33 = a31*sin+a33*cos;
  							a43 = a41*sin+a43*cos;
  							a11 = t1;
  							a21 = t2;
  							a31 = t3;
  						}
  						//rotationZ
  						angle = Math.atan2(a21, a11);
  						tm.rotation = angle * _RAD2DEG;
  						if (angle) {
  							cos = Math.cos(angle);
  							sin = Math.sin(angle);
  							t1 = a11*cos+a21*sin;
  							t2 = a12*cos+a22*sin;
  							t3 = a13*cos+a23*sin;
  							a21 = a21*cos-a11*sin;
  							a22 = a22*cos-a12*sin;
  							a23 = a23*cos-a13*sin;
  							a11 = t1;
  							a12 = t2;
  							a13 = t3;
  						}

  						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
  							tm.rotationX = tm.rotation = 0;
  							tm.rotationY = 180 - tm.rotationY;
  						}

  						//skewX
  						angle = Math.atan2(a12, a22);

  						//scales
  						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
  						tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
  						tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
  						a11 /= tm.scaleX;
  						a12 /= tm.scaleY;
  						a21 /= tm.scaleX;
  						a22 /= tm.scaleY;
  						if (Math.abs(angle) > min) {
  							tm.skewX = angle * _RAD2DEG;
  							a12 = 0; //unskews
  							if (tm.skewType !== "simple") {
  								tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
  							}

  						} else {
  							tm.skewX = 0;
  						}

  						/* //for testing purposes
  						var transform = "matrix3d(",
  							comma = ",",
  							zero = "0";
  						a13 /= tm.scaleZ;
  						a23 /= tm.scaleZ;
  						a31 /= tm.scaleX;
  						a32 /= tm.scaleY;
  						a33 /= tm.scaleZ;
  						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
  						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
  						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
  						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
  						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
  						console.log(transform);
  						document.querySelector(".test").style[_transformProp] = transform;
  						*/

  						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
  						tm.x = a14;
  						tm.y = a24;
  						tm.z = a34;
  						if (tm.svg) {
  							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
  							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
  						}

  					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
  						var k = (m.length >= 6),
  							a = k ? m[0] : 1,
  							b = m[1] || 0,
  							c = m[2] || 0,
  							d = k ? m[3] : 1;
  						tm.x = m[4] || 0;
  						tm.y = m[5] || 0;
  						scaleX = Math.sqrt(a * a + b * b);
  						scaleY = Math.sqrt(d * d + c * c);
  						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
  						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
  						tm.scaleX = scaleX;
  						tm.scaleY = scaleY;
  						tm.rotation = rotation;
  						tm.skewX = skewX;
  						if (_supports3D) {
  							tm.rotationX = tm.rotationY = tm.z = 0;
  							tm.perspective = defaultTransformPerspective;
  							tm.scaleZ = 1;
  						}
  						if (tm.svg) {
  							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
  							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
  						}
  					}
  					if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
  						if (invX) {
  							tm.scaleX *= -1;
  							tm.skewX += (tm.rotation <= 0) ? 180 : -180;
  							tm.rotation += (tm.rotation <= 0) ? 180 : -180;
  						} else {
  							tm.scaleY *= -1;
  							tm.skewX += (tm.skewX <= 0) ? 180 : -180;
  						}
  					}
  					tm.zOrigin = zOrigin;
  					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
  					for (i in tm) {
  						if (tm[i] < min) if (tm[i] > -min) {
  							tm[i] = 0;
  						}
  					}
  				}
  				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
  				if (rec) {
  					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
  					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
  						if (_useSVGTransformAttr && t.style[_transformProp]) {
  							TweenLite.delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
  								_removeProp(t.style, _transformProp);
  							});
  						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
  							TweenLite.delayedCall(0.001, function(){
  								t.removeAttribute("transform");
  							});
  						}
  					}
  				}
  				return tm;
  			},

  			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
  			_setIETransformRatio = function(v) {
  				var t = this.data, //refers to the element's _gsTransform object
  					ang = -t.rotation * _DEG2RAD,
  					skew = ang + t.skewX * _DEG2RAD,
  					rnd = 100000,
  					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
  					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
  					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
  					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
  					style = this.t.style,
  					cs = this.t.currentStyle,
  					filters, val;
  				if (!cs) {
  					return;
  				}
  				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
  				b = -c;
  				c = -val;
  				filters = cs.filter;
  				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
  				var w = this.t.offsetWidth,
  					h = this.t.offsetHeight,
  					clip = (cs.position !== "absolute"),
  					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
  					ox = t.x + (w * t.xPercent / 100),
  					oy = t.y + (h * t.yPercent / 100),
  					dx, dy;

  				//if transformOrigin is being used, adjust the offset x and y
  				if (t.ox != null) {
  					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
  					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
  					ox += dx - (dx * a + dy * b);
  					oy += dy - (dx * c + dy * d);
  				}

  				if (!clip) {
  					m += ", sizingMethod='auto expand')";
  				} else {
  					dx = (w / 2);
  					dy = (h / 2);
  					//translate to ensure that transformations occur around the correct origin (default is center).
  					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
  				}
  				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
  					style.filter = filters.replace(_ieSetMatrixExp, m);
  				} else {
  					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
  				}

  				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
  				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf(filters.indexOf("Alpha")) === -1) {
  					style.removeAttribute("filter");
  				}

  				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
  				if (!clip) {
  					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
  						marg, prop, dif;
  					dx = t.ieOffsetX || 0;
  					dy = t.ieOffsetY || 0;
  					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
  					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
  					for (i = 0; i < 4; i++) {
  						prop = _margins[i];
  						marg = cs[prop];
  						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
  						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
  						if (val !== t[prop]) {
  							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
  						} else {
  							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
  						}
  						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
  					}
  				}
  			},

  			/* translates a super small decimal to a string WITHOUT scientific notation
  			_safeDecimal = function(n) {
  				var s = (n < 0 ? -n : n) + "",
  					a = s.split("e-");
  				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
  			},
  			*/

  			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
  				var t = this.data, //refers to the element's _gsTransform object
  					style = this.t.style,
  					angle = t.rotation,
  					rotationX = t.rotationX,
  					rotationY = t.rotationY,
  					sx = t.scaleX,
  					sy = t.scaleY,
  					sz = t.scaleZ,
  					x = t.x,
  					y = t.y,
  					z = t.z,
  					isSVG = t.svg,
  					perspective = t.perspective,
  					force3D = t.force3D,
  					skewY = t.skewY,
  					skewX = t.skewX,
  					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
  					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
  				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
  					skewX += skewY;
  					angle += skewY;
  				}

  				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
  				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

  					//2D
  					if (angle || skewX || isSVG) {
  						angle *= _DEG2RAD;
  						skew = skewX * _DEG2RAD;
  						rnd = 100000;
  						a11 = Math.cos(angle) * sx;
  						a21 = Math.sin(angle) * sx;
  						a12 = Math.sin(angle - skew) * -sy;
  						a22 = Math.cos(angle - skew) * sy;
  						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
  							t1 = Math.tan(skew - skewY * _DEG2RAD);
  							t1 = Math.sqrt(1 + t1 * t1);
  							a12 *= t1;
  							a22 *= t1;
  							if (skewY) {
  								t1 = Math.tan(skewY * _DEG2RAD);
  								t1 = Math.sqrt(1 + t1 * t1);
  								a11 *= t1;
  								a21 *= t1;
  							}
  						}
  						if (isSVG) {
  							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
  							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
  							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
  								min = this.t.getBBox();
  								x += t.xPercent * 0.01 * min.width;
  								y += t.yPercent * 0.01 * min.height;
  							}
  							min = 0.000001;
  							if (x < min) if (x > -min) {
  								x = 0;
  							}
  							if (y < min) if (y > -min) {
  								y = 0;
  							}
  						}
  						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
  						if (isSVG && _useSVGTransformAttr) {
  							this.t.setAttribute("transform", "matrix(" + transform);
  						} else {
  							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
  							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
  						}
  					} else {
  						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
  					}
  					return;

  				}
  				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
  					min = 0.0001;
  					if (sx < min && sx > -min) {
  						sx = sz = 0.00002;
  					}
  					if (sy < min && sy > -min) {
  						sy = sz = 0.00002;
  					}
  					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
  						perspective = 0;
  					}
  				}
  				if (angle || skewX) {
  					angle *= _DEG2RAD;
  					cos = a11 = Math.cos(angle);
  					sin = a21 = Math.sin(angle);
  					if (skewX) {
  						angle -= skewX * _DEG2RAD;
  						cos = Math.cos(angle);
  						sin = Math.sin(angle);
  						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
  							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
  							t1 = Math.sqrt(1 + t1 * t1);
  							cos *= t1;
  							sin *= t1;
  							if (t.skewY) {
  								t1 = Math.tan(skewY * _DEG2RAD);
  								t1 = Math.sqrt(1 + t1 * t1);
  								a11 *= t1;
  								a21 *= t1;
  							}
  						}
  					}
  					a12 = -sin;
  					a22 = cos;

  				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
  					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
  					return;
  				} else {
  					a11 = a22 = 1;
  					a12 = a21 = 0;
  				}
  				// KEY  INDEX   AFFECTS a[row][column]
  				// a11  0       rotation, rotationY, scaleX
  				// a21  1       rotation, rotationY, scaleX
  				// a31  2       rotationY, scaleX
  				// a41  3       rotationY, scaleX
  				// a12  4       rotation, skewX, rotationX, scaleY
  				// a22  5       rotation, skewX, rotationX, scaleY
  				// a32  6       rotationX, scaleY
  				// a42  7       rotationX, scaleY
  				// a13  8       rotationY, rotationX, scaleZ
  				// a23  9       rotationY, rotationX, scaleZ
  				// a33  10      rotationY, rotationX, scaleZ
  				// a43  11      rotationY, rotationX, perspective, scaleZ
  				// a14  12      x, zOrigin, svgOrigin
  				// a24  13      y, zOrigin, svgOrigin
  				// a34  14      z, zOrigin
  				// a44  15
  				// rotation: Math.atan2(a21, a11)
  				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
  				// rotationX: Math.atan2(a32, a33)
  				a33 = 1;
  				a13 = a23 = a31 = a32 = a41 = a42 = 0;
  				a43 = (perspective) ? -1 / perspective : 0;
  				zOrigin = t.zOrigin;
  				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
  				comma = ",";
  				zero = "0";
  				angle = rotationY * _DEG2RAD;
  				if (angle) {
  					cos = Math.cos(angle);
  					sin = Math.sin(angle);
  					a31 = -sin;
  					a41 = a43*-sin;
  					a13 = a11*sin;
  					a23 = a21*sin;
  					a33 = cos;
  					a43 *= cos;
  					a11 *= cos;
  					a21 *= cos;
  				}
  				angle = rotationX * _DEG2RAD;
  				if (angle) {
  					cos = Math.cos(angle);
  					sin = Math.sin(angle);
  					t1 = a12*cos+a13*sin;
  					t2 = a22*cos+a23*sin;
  					a32 = a33*sin;
  					a42 = a43*sin;
  					a13 = a12*-sin+a13*cos;
  					a23 = a22*-sin+a23*cos;
  					a33 = a33*cos;
  					a43 = a43*cos;
  					a12 = t1;
  					a22 = t2;
  				}
  				if (sz !== 1) {
  					a13*=sz;
  					a23*=sz;
  					a33*=sz;
  					a43*=sz;
  				}
  				if (sy !== 1) {
  					a12*=sy;
  					a22*=sy;
  					a32*=sy;
  					a42*=sy;
  				}
  				if (sx !== 1) {
  					a11*=sx;
  					a21*=sx;
  					a31*=sx;
  					a41*=sx;
  				}

  				if (zOrigin || isSVG) {
  					if (zOrigin) {
  						x += a13*-zOrigin;
  						y += a23*-zOrigin;
  						z += a33*-zOrigin+zOrigin;
  					}
  					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
  						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
  						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
  					}
  					if (x < min && x > -min) {
  						x = zero;
  					}
  					if (y < min && y > -min) {
  						y = zero;
  					}
  					if (z < min && z > -min) {
  						z = 0; //don't use string because we calculate perspective later and need the number.
  					}
  				}

  				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
  				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
  				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
  				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
  				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
  					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
  					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
  				} else {
  					transform += ",0,0,0,0,1,0,";
  				}
  				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

  				style[_transformProp] = transform;
  			};

  		p = Transform.prototype;
  		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
  		p.scaleX = p.scaleY = p.scaleZ = 1;

  		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
  			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
  			cssp._lastParsedTransform = vars;
  			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0, //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
  				swapFunc;
  			if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
  				swapFunc = vars[parsingProp];
  				vars[parsingProp] = e;
  			}
  			if (scaleFunc) {
  				vars.scale = scaleFunc(_index, t);
  			}
  			var originalGSTransform = t._gsTransform,
  				style = t.style,
  				min = 0.000001,
  				i = _transformProps.length,
  				v = vars,
  				endRotations = {},
  				transformOriginString = "transformOrigin",
  				m1 = _getTransform(t, _cs, true, v.parseTransform),
  				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
  				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
  			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
  			cssp._transform = m1;
  			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
  				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
  				copy[_transformProp] = orig;
  				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
  				copy.position = "absolute";
  				_doc.body.appendChild(_tempDiv);
  				m2 = _getTransform(_tempDiv, null, false);
  				if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
  					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
  				}
  				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
  					x = m1.xOrigin;
  					y = m1.yOrigin;
  					m2.x -= m1.xOffset;
  					m2.y -= m1.yOffset;
  					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
  						orig = {};
  						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
  						x = orig.xOrigin;
  						y = orig.yOrigin;
  						m2.x -= orig.xOffset - m1.xOffset;
  						m2.y -= orig.yOffset - m1.yOffset;
  					}
  					if (x || y) {
  						matrix = _getMatrix(_tempDiv, true);
  						m2.x -= x - (x * matrix[0] + y * matrix[2]);
  						m2.y -= y - (x * matrix[1] + y * matrix[3]);
  					}
  				}
  				_doc.body.removeChild(_tempDiv);
  				if (!m2.perspective) {
  					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
  				}
  				if (v.xPercent != null) {
  					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
  				}
  				if (v.yPercent != null) {
  					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
  				}
  			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
  				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
  					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
  					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
  					x:_parseVal(v.x, m1.x),
  					y:_parseVal(v.y, m1.y),
  					z:_parseVal(v.z, m1.z),
  					xPercent:_parseVal(v.xPercent, m1.xPercent),
  					yPercent:_parseVal(v.yPercent, m1.yPercent),
  					perspective:_parseVal(v.transformPerspective, m1.perspective)};
  				dr = v.directionalRotation;
  				if (dr != null) {
  					if (typeof(dr) === "object") {
  						for (copy in dr) {
  							v[copy] = dr[copy];
  						}
  					} else {
  						v.rotation = dr;
  					}
  				}
  				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
  					m2.x = 0;
  					m2.xPercent = _parseVal(v.x, m1.xPercent);
  				}
  				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
  					m2.y = 0;
  					m2.yPercent = _parseVal(v.y, m1.yPercent);
  				}

  				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
  				if (_supports3D) {
  					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
  					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
  				}
  				m2.skewX = _parseAngle(v.skewX, m1.skewX);
  				m2.skewY = _parseAngle(v.skewY, m1.skewY);
  			}
  			if (_supports3D && v.force3D != null) {
  				m1.force3D = v.force3D;
  				hasChange = true;
  			}

  			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
  			if (!has3D && v.scale != null) {
  				m2.scaleZ = 1; //no need to tween scaleZ.
  			}

  			while (--i > -1) {
  				p = _transformProps[i];
  				orig = m2[p] - m1[p];
  				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
  					hasChange = true;
  					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
  					if (p in endRotations) {
  						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
  					}
  					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
  					pt.plugin = plugin;
  					cssp._overwriteProps.push(pt.n);
  				}
  			}

  			orig = v.transformOrigin;
  			if (m1.svg && (orig || v.svgOrigin)) {
  				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
  				y = m1.yOffset;
  				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
  				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
  				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
  				if (x !== m1.xOffset || y !== m1.yOffset) {
  					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
  					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
  				}
  				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
  			}
  			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
  				if (_transformProp) {
  					hasChange = true;
  					p = _transformOriginProp;
  					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
  					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
  					pt.b = style[p];
  					pt.plugin = plugin;
  					if (_supports3D) {
  						copy = m1.zOrigin;
  						orig = orig.split(" ");
  						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
  						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
  						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
  						pt.b = copy;
  						pt.xs0 = pt.e = m1.zOrigin;
  					} else {
  						pt.xs0 = pt.e = orig;
  					}

  					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
  				} else {
  					_parsePosition(orig + "", m1);
  				}
  			}
  			if (hasChange) {
  				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
  			}
  			if (swapFunc) {
  				vars[parsingProp] = swapFunc;
  			}
  			if (scaleFunc) {
  				vars.scale = scaleFunc;
  			}
  			return pt;
  		}, prefix:true});

  		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

  		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
  			e = this.format(e);
  			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
  				style = t.style,
  				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
  			w = parseFloat(t.offsetWidth);
  			h = parseFloat(t.offsetHeight);
  			ea1 = e.split(" ");
  			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
  				if (this.p.indexOf("border")) { //older browsers used a prefix
  					props[i] = _checkPropPrefix(props[i]);
  				}
  				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
  				if (bs.indexOf(" ") !== -1) {
  					bs2 = bs.split(" ");
  					bs = bs2[0];
  					bs2 = bs2[1];
  				}
  				es = es2 = ea1[i];
  				bn = parseFloat(bs);
  				bsfx = bs.substr((bn + "").length);
  				rel = (es.charAt(1) === "=");
  				if (rel) {
  					en = parseInt(es.charAt(0)+"1", 10);
  					es = es.substr(2);
  					en *= parseFloat(es);
  					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
  				} else {
  					en = parseFloat(es);
  					esfx = es.substr((en + "").length);
  				}
  				if (esfx === "") {
  					esfx = _suffixMap[p] || bsfx;
  				}
  				if (esfx !== bsfx) {
  					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
  					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
  					if (esfx === "%") {
  						bs = (hn / w * 100) + "%";
  						bs2 = (vn / h * 100) + "%";
  					} else if (esfx === "em") {
  						em = _convertToPixels(t, "borderLeft", 1, "em");
  						bs = (hn / em) + "em";
  						bs2 = (vn / em) + "em";
  					} else {
  						bs = hn + "px";
  						bs2 = vn + "px";
  					}
  					if (rel) {
  						es = (parseFloat(bs) + en) + esfx;
  						es2 = (parseFloat(bs2) + en) + esfx;
  					}
  				}
  				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
  			}
  			return pt;
  		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
  		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
  			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
  		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
  		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
  			var bp = "background-position",
  				cs = (_cs || _getComputedStyle(t, null)),
  				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
  				es = this.format(e),
  				ba, ea, i, pct, overlap, src;
  			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
  				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
  				if (src && src !== "none") {
  					ba = bs.split(" ");
  					ea = es.split(" ");
  					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
  					i = 2;
  					while (--i > -1) {
  						bs = ba[i];
  						pct = (bs.indexOf("%") !== -1);
  						if (pct !== (ea[i].indexOf("%") !== -1)) {
  							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
  							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
  						}
  					}
  					bs = ba.join(" ");
  				}
  			}
  			return this.parseComplex(t.style, bs, es, pt, plugin);
  		}, formatter:_parsePosition});
  		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
  			v += ""; //ensure it's a string
  			return _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong).
  		}});
  		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
  		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
  		_registerComplexSpecialProp("transformStyle", {prefix:true});
  		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
  		_registerComplexSpecialProp("userSelect", {prefix:true});
  		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
  		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
  		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
  			var b, cs, delim;
  			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
  				cs = t.currentStyle;
  				delim = _ieVers < 8 ? " " : ",";
  				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
  				e = this.format(e).split(",").join(delim);
  			} else {
  				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
  				e = this.format(e);
  			}
  			return this.parseComplex(t.style, b, e, pt, plugin);
  		}});
  		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
  		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
  		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
  			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
  				end = this.format(e).split(" "),
  				esfx = end[0].replace(_suffixExp, "");
  			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
  				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
  			}
  			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
  			}, color:true, formatter:function(v) {
  				var a = v.split(" ");
  				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
  			}});
  		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
  		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
  			var s = t.style,
  				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
  			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
  		}});

  		//opacity-related
  		var _setIEOpacityRatio = function(v) {
  				var t = this.t, //refers to the element's style property
  					filters = t.filter || _getStyle(this.data, "filter") || "",
  					val = (this.s + this.c * v) | 0,
  					skip;
  				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
  					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
  						t.removeAttribute("filter");
  						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
  					} else {
  						t.filter = filters.replace(_alphaFilterExp, "");
  						skip = true;
  					}
  				}
  				if (!skip) {
  					if (this.xn1) {
  						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
  					}
  					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
  						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
  							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
  						}
  					} else {
  						t.filter = filters.replace(_opacityExp, "opacity=" + val);
  					}
  				}
  			};
  		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
  			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
  				style = t.style,
  				isAutoAlpha = (p === "autoAlpha");
  			if (typeof(e) === "string" && e.charAt(1) === "=") {
  				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
  			}
  			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
  				b = 0;
  			}
  			if (_supportsOpacity) {
  				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
  			} else {
  				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
  				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
  				style.zoom = 1; //helps correct an IE issue.
  				pt.type = 2;
  				pt.b = "alpha(opacity=" + pt.s + ")";
  				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
  				pt.data = t;
  				pt.plugin = plugin;
  				pt.setRatio = _setIEOpacityRatio;
  			}
  			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
  				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
  				pt.xs0 = "inherit";
  				cssp._overwriteProps.push(pt.n);
  				cssp._overwriteProps.push(p);
  			}
  			return pt;
  		}});


  		var _removeProp = function(s, p) {
  				if (p) {
  					if (s.removeProperty) {
  						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
  							p = "-" + p;
  						}
  						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
  					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
  						s.removeAttribute(p);
  					}
  				}
  			},
  			_setClassNameRatio = function(v) {
  				this.t._gsClassPT = this;
  				if (v === 1 || v === 0) {
  					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
  					var mpt = this.data, //first MiniPropTween
  						s = this.t.style;
  					while (mpt) {
  						if (!mpt.v) {
  							_removeProp(s, mpt.p);
  						} else {
  							s[mpt.p] = mpt.v;
  						}
  						mpt = mpt._next;
  					}
  					if (v === 1 && this.t._gsClassPT === this) {
  						this.t._gsClassPT = null;
  					}
  				} else if (this.t.getAttribute("class") !== this.e) {
  					this.t.setAttribute("class", this.e);
  				}
  			};
  		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
  			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
  				cssText = t.style.cssText,
  				difData, bs, cnpt, cnptLookup, mpt;
  			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
  			pt.setRatio = _setClassNameRatio;
  			pt.pr = -11;
  			_hasPriority = true;
  			pt.b = b;
  			bs = _getAllStyles(t, _cs);
  			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
  			cnpt = t._gsClassPT;
  			if (cnpt) {
  				cnptLookup = {};
  				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
  				while (mpt) {
  					cnptLookup[mpt.p] = 1;
  					mpt = mpt._next;
  				}
  				cnpt.setRatio(1);
  			}
  			t._gsClassPT = pt;
  			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
  			t.setAttribute("class", pt.e);
  			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
  			t.setAttribute("class", b);
  			pt.data = difData.firstMPT;
  			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
  			return pt;
  		}});


  		var _setClearPropsRatio = function(v) {
  			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
  				var s = this.t.style,
  					transformParse = _specialProps.transform.parse,
  					a, p, i, clearTransform, transform;
  				if (this.e === "all") {
  					s.cssText = "";
  					clearTransform = true;
  				} else {
  					a = this.e.split(" ").join("").split(",");
  					i = a.length;
  					while (--i > -1) {
  						p = a[i];
  						if (_specialProps[p]) {
  							if (_specialProps[p].parse === transformParse) {
  								clearTransform = true;
  							} else {
  								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
  							}
  						}
  						_removeProp(s, p);
  					}
  				}
  				if (clearTransform) {
  					_removeProp(s, _transformProp);
  					transform = this.t._gsTransform;
  					if (transform) {
  						if (transform.svg) {
  							this.t.removeAttribute("data-svg-origin");
  							this.t.removeAttribute("transform");
  						}
  						delete this.t._gsTransform;
  					}
  				}

  			}
  		};
  		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
  			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
  			pt.setRatio = _setClearPropsRatio;
  			pt.e = e;
  			pt.pr = -10;
  			pt.data = cssp._tween;
  			_hasPriority = true;
  			return pt;
  		}});

  		p = "bezier,throwProps,physicsProps,physics2D".split(",");
  		i = p.length;
  		while (i--) {
  			_registerPluginProp(p[i]);
  		}








  		p = CSSPlugin.prototype;
  		p._firstPT = p._lastParsedTransform = p._transform = null;

  		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
  		p._onInitTween = function(target, vars, tween, index) {
  			if (!target.nodeType) { //css is only for dom elements
  				return false;
  			}
  			this._target = _target = target;
  			this._tween = tween;
  			this._vars = vars;
  			_index = index;
  			_autoRound = vars.autoRound;
  			_hasPriority = false;
  			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
  			_cs = _getComputedStyle(target, "");
  			_overwriteProps = this._overwriteProps;
  			var style = target.style,
  				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
  			if (_reqSafariFix) if (style.zIndex === "") {
  				v = _getStyle(target, "zIndex", _cs);
  				if (v === "auto" || v === "") {
  					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
  					this._addLazySet(style, "zIndex", 0);
  				}
  			}

  			if (typeof(vars) === "string") {
  				first = style.cssText;
  				v = _getAllStyles(target, _cs);
  				style.cssText = first + ";" + vars;
  				v = _cssDif(target, v, _getAllStyles(target)).difs;
  				if (!_supportsOpacity && _opacityValExp.test(vars)) {
  					v.opacity = parseFloat( RegExp.$1 );
  				}
  				vars = v;
  				style.cssText = first;
  			}

  			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
  				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
  			} else {
  				this._firstPT = pt = this.parse(target, vars, null);
  			}

  			if (this._transformType) {
  				threeD = (this._transformType === 3);
  				if (!_transformProp) {
  					style.zoom = 1; //helps correct an IE issue.
  				} else if (_isSafari) {
  					_reqSafariFix = true;
  					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
  					if (style.zIndex === "") {
  						zIndex = _getStyle(target, "zIndex", _cs);
  						if (zIndex === "auto" || zIndex === "") {
  							this._addLazySet(style, "zIndex", 0);
  						}
  					}
  					//Setting WebkitBackfaceVisibility corrects 3 bugs:
  					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
  					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
  					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
  					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
  					if (_isSafariLT6) {
  						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
  					}
  				}
  				pt2 = pt;
  				while (pt2 && pt2._next) {
  					pt2 = pt2._next;
  				}
  				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
  				this._linkCSSP(tpt, null, pt2);
  				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
  				tpt.data = this._transform || _getTransform(target, _cs, true);
  				tpt.tween = tween;
  				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
  				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
  			}

  			if (_hasPriority) {
  				//reorders the linked list in order of pr (priority)
  				while (pt) {
  					next = pt._next;
  					pt2 = first;
  					while (pt2 && pt2.pr > pt.pr) {
  						pt2 = pt2._next;
  					}
  					if ((pt._prev = pt2 ? pt2._prev : last)) {
  						pt._prev._next = pt;
  					} else {
  						first = pt;
  					}
  					if ((pt._next = pt2)) {
  						pt2._prev = pt;
  					} else {
  						last = pt;
  					}
  					pt = next;
  				}
  				this._firstPT = first;
  			}
  			return true;
  		};


  		p.parse = function(target, vars, pt, plugin) {
  			var style = target.style,
  				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
  			for (p in vars) {
  				es = vars[p]; //ending value string
  				if (typeof(es) === "function") {
  					es = es(_index, _target);
  				}
  				sp = _specialProps[p]; //SpecialProp lookup.
  				if (sp) {
  					pt = sp.parse(target, es, p, this, pt, plugin, vars);
  				} else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
  					this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
  					continue;
  				} else {
  					bs = _getStyle(target, p, _cs) + "";
  					isStr = (typeof(es) === "string");
  					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
  						if (!isStr) {
  							es = _parseColor(es);
  							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
  						}
  						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

  					} else if (isStr && _complexExp.test(es)) {
  						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

  					} else {
  						bn = parseFloat(bs);
  						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

  						if (bs === "" || bs === "auto") {
  							if (p === "width" || p === "height") {
  								bn = _getDimension(target, p, _cs);
  								bsfx = "px";
  							} else if (p === "left" || p === "top") {
  								bn = _calculateOffset(target, p, _cs);
  								bsfx = "px";
  							} else {
  								bn = (p !== "opacity") ? 0 : 1;
  								bsfx = "";
  							}
  						}

  						rel = (isStr && es.charAt(1) === "=");
  						if (rel) {
  							en = parseInt(es.charAt(0) + "1", 10);
  							es = es.substr(2);
  							en *= parseFloat(es);
  							esfx = es.replace(_suffixExp, "");
  						} else {
  							en = parseFloat(es);
  							esfx = isStr ? es.replace(_suffixExp, "") : "";
  						}

  						if (esfx === "") {
  							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
  						}

  						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
  						//if the beginning/ending suffixes don't match, normalize them...
  						if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
  							bn = _convertToPixels(target, p, bn, bsfx);
  							if (esfx === "%") {
  								bn /= _convertToPixels(target, p, 100, "%") / 100;
  								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
  									bs = bn + "%";
  								}

  							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
  								bn /= _convertToPixels(target, p, 1, esfx);

  							//otherwise convert to pixels.
  							} else if (esfx !== "px") {
  								en = _convertToPixels(target, p, en, esfx);
  								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
  							}
  							if (rel) if (en || en === 0) {
  								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
  							}
  						}

  						if (rel) {
  							en += bn;
  						}

  						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
  							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
  							pt.xs0 = esfx;
  							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
  						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
  							_log("invalid " + p + " tween value: " + vars[p]);
  						} else {
  							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
  							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
  							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
  						}
  					}
  				}
  				if (plugin) if (pt && !pt.plugin) {
  					pt.plugin = plugin;
  				}
  			}
  			return pt;
  		};


  		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
  		p.setRatio = function(v) {
  			var pt = this._firstPT,
  				min = 0.000001,
  				val, str, i;
  			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
  			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
  				while (pt) {
  					if (pt.type !== 2) {
  						if (pt.r && pt.type !== -1) {
  							val = Math.round(pt.s + pt.c);
  							if (!pt.type) {
  								pt.t[pt.p] = val + pt.xs0;
  							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
  								i = pt.l;
  								str = pt.xs0 + val + pt.xs1;
  								for (i = 1; i < pt.l; i++) {
  									str += pt["xn"+i] + pt["xs"+(i+1)];
  								}
  								pt.t[pt.p] = str;
  							}
  						} else {
  							pt.t[pt.p] = pt.e;
  						}
  					} else {
  						pt.setRatio(v);
  					}
  					pt = pt._next;
  				}

  			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
  				while (pt) {
  					val = pt.c * v + pt.s;
  					if (pt.r) {
  						val = Math.round(val);
  					} else if (val < min) if (val > -min) {
  						val = 0;
  					}
  					if (!pt.type) {
  						pt.t[pt.p] = val + pt.xs0;
  					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
  						i = pt.l;
  						if (i === 2) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
  						} else if (i === 3) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
  						} else if (i === 4) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
  						} else if (i === 5) {
  							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
  						} else {
  							str = pt.xs0 + val + pt.xs1;
  							for (i = 1; i < pt.l; i++) {
  								str += pt["xn"+i] + pt["xs"+(i+1)];
  							}
  							pt.t[pt.p] = str;
  						}

  					} else if (pt.type === -1) { //non-tweening value
  						pt.t[pt.p] = pt.xs0;

  					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
  						pt.setRatio(v);
  					}
  					pt = pt._next;
  				}

  			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
  			} else {
  				while (pt) {
  					if (pt.type !== 2) {
  						pt.t[pt.p] = pt.b;
  					} else {
  						pt.setRatio(v);
  					}
  					pt = pt._next;
  				}
  			}
  		};

  		/**
  		 * @private
  		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
  		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
  		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
  		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
  		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
  		 * want and it won't create duplicate CSSPropTweens.
  		 *
  		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
  		 */
  		p._enableTransforms = function(threeD) {
  			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
  			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
  		};

  		var lazySet = function(v) {
  			this.t[this.p] = this.e;
  			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
  		};
  		/** @private Gives us a way to set a value on the first render (and only the first render). **/
  		p._addLazySet = function(t, p, v) {
  			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
  			pt.e = v;
  			pt.setRatio = lazySet;
  			pt.data = this;
  		};

  		/** @private **/
  		p._linkCSSP = function(pt, next, prev, remove) {
  			if (pt) {
  				if (next) {
  					next._prev = pt;
  				}
  				if (pt._next) {
  					pt._next._prev = pt._prev;
  				}
  				if (pt._prev) {
  					pt._prev._next = pt._next;
  				} else if (this._firstPT === pt) {
  					this._firstPT = pt._next;
  					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
  				}
  				if (prev) {
  					prev._next = pt;
  				} else if (!remove && this._firstPT === null) {
  					this._firstPT = pt;
  				}
  				pt._next = next;
  				pt._prev = prev;
  			}
  			return pt;
  		};

  		p._mod = function(lookup) {
  			var pt = this._firstPT;
  			while (pt) {
  				if (typeof(lookup[pt.p]) === "function" && lookup[pt.p] === Math.round) { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally..
  					pt.r = 1;
  				}
  				pt = pt._next;
  			}
  		};

  		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
  		p._kill = function(lookup) {
  			var copy = lookup,
  				pt, p, xfirst;
  			if (lookup.autoAlpha || lookup.alpha) {
  				copy = {};
  				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
  					copy[p] = lookup[p];
  				}
  				copy.opacity = 1;
  				if (copy.autoAlpha) {
  					copy.visibility = 1;
  				}
  			}
  			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
  				xfirst = pt.xfirst;
  				if (xfirst && xfirst._prev) {
  					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
  				} else if (xfirst === this._firstPT) {
  					this._firstPT = pt._next;
  				}
  				if (pt._next) {
  					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
  				}
  				this._classNamePT = null;
  			}
  			pt = this._firstPT;
  			while (pt) {
  				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
  					pt.plugin._kill(lookup);
  					p = pt.plugin;
  				}
  				pt = pt._next;
  			}
  			return TweenPlugin.prototype._kill.call(this, copy);
  		};



  		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
  		var _getChildStyles = function(e, props, targets) {
  				var children, i, child, type;
  				if (e.slice) {
  					i = e.length;
  					while (--i > -1) {
  						_getChildStyles(e[i], props, targets);
  					}
  					return;
  				}
  				children = e.childNodes;
  				i = children.length;
  				while (--i > -1) {
  					child = children[i];
  					type = child.type;
  					if (child.style) {
  						props.push(_getAllStyles(child));
  						if (targets) {
  							targets.push(child);
  						}
  					}
  					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
  						_getChildStyles(child, props, targets);
  					}
  				}
  			};

  		/**
  		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
  		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
  		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
  		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
  		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
  		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
  		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
  		 * and it would create other problems. For example:
  		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
  		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
  		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
  		 *
  		 * @param {Object} target object to be tweened
  		 * @param {number} Duration in seconds (or frames for frames-based tweens)
  		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
  		 * @return {Array} An array of TweenLite instances
  		 */
  		CSSPlugin.cascadeTo = function(target, duration, vars) {
  			var tween = TweenLite.to(target, duration, vars),
  				results = [tween],
  				b = [],
  				e = [],
  				targets = [],
  				_reservedProps = TweenLite._internals.reservedProps,
  				i, difs, p, from;
  			target = tween._targets || tween.target;
  			_getChildStyles(target, b, targets);
  			tween.render(duration, true, true);
  			_getChildStyles(target, e);
  			tween.render(0, true, true);
  			tween._enabled(true);
  			i = targets.length;
  			while (--i > -1) {
  				difs = _cssDif(targets[i], b[i], e[i]);
  				if (difs.firstMPT) {
  					difs = difs.difs;
  					for (p in vars) {
  						if (_reservedProps[p]) {
  							difs[p] = vars[p];
  						}
  					}
  					from = {};
  					for (p in difs) {
  						from[p] = b[i][p];
  					}
  					results.push(TweenLite.fromTo(targets[i], duration, from, difs));
  				}
  			}
  			return results;
  		};

  		TweenPlugin.activate([CSSPlugin]);
  		return CSSPlugin;

  	}, true);

  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  /*
   * ----------------------------------------------------------------
   * RoundPropsPlugin
   * ----------------------------------------------------------------
   */
  	(function() {

  		var RoundPropsPlugin = _gsScope._gsDefine.plugin({
  				propName: "roundProps",
  				version: "1.6.0",
  				priority: -1,
  				API: 2,

  				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  				init: function(target, value, tween) {
  					this._tween = tween;
  					return true;
  				}

  			}),
  			_roundLinkedList = function(node) {
  				while (node) {
  					if (!node.f && !node.blob) {
  						node.m = Math.round;
  					}
  					node = node._next;
  				}
  			},
  			p = RoundPropsPlugin.prototype;

  		p._onInitAllProps = function() {
  			var tween = this._tween,
  				rp = (tween.vars.roundProps.join) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
  				i = rp.length,
  				lookup = {},
  				rpt = tween._propLookup.roundProps,
  				prop, pt, next;
  			while (--i > -1) {
  				lookup[rp[i]] = Math.round;
  			}
  			i = rp.length;
  			while (--i > -1) {
  				prop = rp[i];
  				pt = tween._firstPT;
  				while (pt) {
  					next = pt._next; //record here, because it may get removed
  					if (pt.pg) {
  						pt.t._mod(lookup);
  					} else if (pt.n === prop) {
  						if (pt.f === 2 && pt.t) { //a blob (text containing multiple numeric values)
  							_roundLinkedList(pt.t._firstPT);
  						} else {
  							this._add(pt.t, prop, pt.s, pt.c);
  							//remove from linked list
  							if (next) {
  								next._prev = pt._prev;
  							}
  							if (pt._prev) {
  								pt._prev._next = next;
  							} else if (tween._firstPT === pt) {
  								tween._firstPT = next;
  							}
  							pt._next = pt._prev = null;
  							tween._propLookup[prop] = rpt;
  						}
  					}
  					pt = next;
  				}
  			}
  			return false;
  		};

  		p._add = function(target, p, s, c) {
  			this._addTween(target, p, s, s + c, p, Math.round);
  			this._overwriteProps.push(p);
  		};

  	}());










  /*
   * ----------------------------------------------------------------
   * AttrPlugin
   * ----------------------------------------------------------------
   */

  	(function() {

  		_gsScope._gsDefine.plugin({
  			propName: "attr",
  			API: 2,
  			version: "0.6.1",

  			//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  			init: function(target, value, tween, index) {
  				var p, end;
  				if (typeof(target.setAttribute) !== "function") {
  					return false;
  				}
  				for (p in value) {
  					end = value[p];
  					if (typeof(end) === "function") {
  						end = end(index, target);
  					}
  					this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
  					this._overwriteProps.push(p);
  				}
  				return true;
  			}

  		});

  	}());










  /*
   * ----------------------------------------------------------------
   * DirectionalRotationPlugin
   * ----------------------------------------------------------------
   */
  	_gsScope._gsDefine.plugin({
  		propName: "directionalRotation",
  		version: "0.3.1",
  		API: 2,

  		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  		init: function(target, value, tween, index) {
  			if (typeof(value) !== "object") {
  				value = {rotation:value};
  			}
  			this.finals = {};
  			var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
  				min = 0.000001,
  				p, v, start, end, dif, split;
  			for (p in value) {
  				if (p !== "useRadians") {
  					end = value[p];
  					if (typeof(end) === "function") {
  						end = end(index, target);
  					}
  					split = (end + "").split("_");
  					v = split[0];
  					start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
  					end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
  					dif = end - start;
  					if (split.length) {
  						v = split.join("_");
  						if (v.indexOf("short") !== -1) {
  							dif = dif % cap;
  							if (dif !== dif % (cap / 2)) {
  								dif = (dif < 0) ? dif + cap : dif - cap;
  							}
  						}
  						if (v.indexOf("_cw") !== -1 && dif < 0) {
  							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
  						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
  							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
  						}
  					}
  					if (dif > min || dif < -min) {
  						this._addTween(target, p, start, start + dif, p);
  						this._overwriteProps.push(p);
  					}
  				}
  			}
  			return true;
  		},

  		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  		set: function(ratio) {
  			var pt;
  			if (ratio !== 1) {
  				this._super.setRatio.call(this, ratio);
  			} else {
  				pt = this._firstPT;
  				while (pt) {
  					if (pt.f) {
  						pt.t[pt.p](this.finals[pt.p]);
  					} else {
  						pt.t[pt.p] = this.finals[pt.p];
  					}
  					pt = pt._next;
  				}
  			}
  		}

  	})._autoCSS = true;







  	
  	
  	
  	
  /*
   * ----------------------------------------------------------------
   * EasePack
   * ----------------------------------------------------------------
   */
  	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
  		
  		var w = (_gsScope.GreenSockGlobals || _gsScope),
  			gs = w.com.greensock,
  			_2PI = Math.PI * 2,
  			_HALF_PI = Math.PI / 2,
  			_class = gs._class,
  			_create = function(n, f) {
  				var C = _class("easing." + n, function(){}, true),
  					p = C.prototype = new Ease();
  				p.constructor = C;
  				p.getRatio = f;
  				return C;
  			},
  			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
  			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
  				var C = _class("easing."+name, {
  					easeOut:new EaseOut(),
  					easeIn:new EaseIn(),
  					easeInOut:new EaseInOut()
  				}, true);
  				_easeReg(C, name);
  				return C;
  			},
  			EasePoint = function(time, value, next) {
  				this.t = time;
  				this.v = value;
  				if (next) {
  					this.next = next;
  					next.prev = this;
  					this.c = next.v - value;
  					this.gap = next.t - time;
  				}
  			},

  			//Back
  			_createBack = function(n, f) {
  				var C = _class("easing." + n, function(overshoot) {
  						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
  						this._p2 = this._p1 * 1.525;
  					}, true),
  					p = C.prototype = new Ease();
  				p.constructor = C;
  				p.getRatio = f;
  				p.config = function(overshoot) {
  					return new C(overshoot);
  				};
  				return C;
  			},

  			Back = _wrap("Back",
  				_createBack("BackOut", function(p) {
  					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
  				}),
  				_createBack("BackIn", function(p) {
  					return p * p * ((this._p1 + 1) * p - this._p1);
  				}),
  				_createBack("BackInOut", function(p) {
  					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
  				})
  			),


  			//SlowMo
  			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
  				power = (power || power === 0) ? power : 0.7;
  				if (linearRatio == null) {
  					linearRatio = 0.7;
  				} else if (linearRatio > 1) {
  					linearRatio = 1;
  				}
  				this._p = (linearRatio !== 1) ? power : 0;
  				this._p1 = (1 - linearRatio) / 2;
  				this._p2 = linearRatio;
  				this._p3 = this._p1 + this._p2;
  				this._calcEnd = (yoyoMode === true);
  			}, true),
  			p = SlowMo.prototype = new Ease(),
  			SteppedEase, ExpoScaleEase, RoughEase, _createElastic;

  		p.constructor = SlowMo;
  		p.getRatio = function(p) {
  			var r = p + (0.5 - p) * this._p;
  			if (p < this._p1) {
  				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
  			} else if (p > this._p3) {
  				return this._calcEnd ? (p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p) : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p); //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
  			}
  			return this._calcEnd ? 1 : r;
  		};
  		SlowMo.ease = new SlowMo(0.7, 0.7);

  		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
  			return new SlowMo(linearRatio, power, yoyoMode);
  		};


  		//SteppedEase
  		SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
  				steps = steps || 1;
  				this._p1 = 1 / steps;
  				this._p2 = steps + (immediateStart ? 0 : 1);
  				this._p3 = immediateStart ? 1 : 0;
  			}, true);
  		p = SteppedEase.prototype = new Ease();
  		p.constructor = SteppedEase;
  		p.getRatio = function(p) {
  			if (p < 0) {
  				p = 0;
  			} else if (p >= 1) {
  				p = 0.999999999;
  			}
  			return (((this._p2 * p) | 0) + this._p3) * this._p1;
  		};
  		p.config = SteppedEase.config = function(steps, immediateStart) {
  			return new SteppedEase(steps, immediateStart);
  		};

  		//ExpoScaleEase
  		ExpoScaleEase = _class("easing.ExpoScaleEase", function(start, end, ease) {
  			this._p1 = Math.log(end / start);
  			this._p2 = end - start;
  			this._p3 = start;
  			this._ease = ease;
  		}, true);
  		p = ExpoScaleEase.prototype = new Ease();
  		p.constructor = ExpoScaleEase;
  		p.getRatio = function(p) {
  			if (this._ease) {
  				p = this._ease.getRatio(p);
  			}
  			return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
  		};
  		p.config = ExpoScaleEase.config = function(start, end, ease) {
  			return new ExpoScaleEase(start, end, ease);
  		};


  		//RoughEase
  		RoughEase = _class("easing.RoughEase", function(vars) {
  			vars = vars || {};
  			var taper = vars.taper || "none",
  				a = [],
  				cnt = 0,
  				points = (vars.points || 20) | 0,
  				i = points,
  				randomize = (vars.randomize !== false),
  				clamp = (vars.clamp === true),
  				template = (vars.template instanceof Ease) ? vars.template : null,
  				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
  				x, y, bump, invX, obj, pnt;
  			while (--i > -1) {
  				x = randomize ? Math.random() : (1 / points) * i;
  				y = template ? template.getRatio(x) : x;
  				if (taper === "none") {
  					bump = strength;
  				} else if (taper === "out") {
  					invX = 1 - x;
  					bump = invX * invX * strength;
  				} else if (taper === "in") {
  					bump = x * x * strength;
  				} else if (x < 0.5) {  //"both" (start)
  					invX = x * 2;
  					bump = invX * invX * 0.5 * strength;
  				} else {				//"both" (end)
  					invX = (1 - x) * 2;
  					bump = invX * invX * 0.5 * strength;
  				}
  				if (randomize) {
  					y += (Math.random() * bump) - (bump * 0.5);
  				} else if (i % 2) {
  					y += bump * 0.5;
  				} else {
  					y -= bump * 0.5;
  				}
  				if (clamp) {
  					if (y > 1) {
  						y = 1;
  					} else if (y < 0) {
  						y = 0;
  					}
  				}
  				a[cnt++] = {x:x, y:y};
  			}
  			a.sort(function(a, b) {
  				return a.x - b.x;
  			});

  			pnt = new EasePoint(1, 1, null);
  			i = points;
  			while (--i > -1) {
  				obj = a[i];
  				pnt = new EasePoint(obj.x, obj.y, pnt);
  			}

  			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
  		}, true);
  		p = RoughEase.prototype = new Ease();
  		p.constructor = RoughEase;
  		p.getRatio = function(p) {
  			var pnt = this._prev;
  			if (p > pnt.t) {
  				while (pnt.next && p >= pnt.t) {
  					pnt = pnt.next;
  				}
  				pnt = pnt.prev;
  			} else {
  				while (pnt.prev && p <= pnt.t) {
  					pnt = pnt.prev;
  				}
  			}
  			this._prev = pnt;
  			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
  		};
  		p.config = function(vars) {
  			return new RoughEase(vars);
  		};
  		RoughEase.ease = new RoughEase();


  		//Bounce
  		_wrap("Bounce",
  			_create("BounceOut", function(p) {
  				if (p < 1 / 2.75) {
  					return 7.5625 * p * p;
  				} else if (p < 2 / 2.75) {
  					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
  				} else if (p < 2.5 / 2.75) {
  					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
  				}
  				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
  			}),
  			_create("BounceIn", function(p) {
  				if ((p = 1 - p) < 1 / 2.75) {
  					return 1 - (7.5625 * p * p);
  				} else if (p < 2 / 2.75) {
  					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
  				} else if (p < 2.5 / 2.75) {
  					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
  				}
  				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
  			}),
  			_create("BounceInOut", function(p) {
  				var invert = (p < 0.5);
  				if (invert) {
  					p = 1 - (p * 2);
  				} else {
  					p = (p * 2) - 1;
  				}
  				if (p < 1 / 2.75) {
  					p = 7.5625 * p * p;
  				} else if (p < 2 / 2.75) {
  					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
  				} else if (p < 2.5 / 2.75) {
  					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
  				} else {
  					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
  				}
  				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
  			})
  		);


  		//CIRC
  		_wrap("Circ",
  			_create("CircOut", function(p) {
  				return Math.sqrt(1 - (p = p - 1) * p);
  			}),
  			_create("CircIn", function(p) {
  				return -(Math.sqrt(1 - (p * p)) - 1);
  			}),
  			_create("CircInOut", function(p) {
  				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
  			})
  		);


  		//Elastic
  		_createElastic = function(n, f, def) {
  			var C = _class("easing." + n, function(amplitude, period) {
  					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
  					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
  					this._p2 = _2PI / this._p2; //precalculate to optimize
  				}, true),
  				p = C.prototype = new Ease();
  			p.constructor = C;
  			p.getRatio = f;
  			p.config = function(amplitude, period) {
  				return new C(amplitude, period);
  			};
  			return C;
  		};
  		_wrap("Elastic",
  			_createElastic("ElasticOut", function(p) {
  				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
  			}, 0.3),
  			_createElastic("ElasticIn", function(p) {
  				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
  			}, 0.3),
  			_createElastic("ElasticInOut", function(p) {
  				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
  			}, 0.45)
  		);


  		//Expo
  		_wrap("Expo",
  			_create("ExpoOut", function(p) {
  				return 1 - Math.pow(2, -10 * p);
  			}),
  			_create("ExpoIn", function(p) {
  				return Math.pow(2, 10 * (p - 1)) - 0.001;
  			}),
  			_create("ExpoInOut", function(p) {
  				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  			})
  		);


  		//Sine
  		_wrap("Sine",
  			_create("SineOut", function(p) {
  				return Math.sin(p * _HALF_PI);
  			}),
  			_create("SineIn", function(p) {
  				return -Math.cos(p * _HALF_PI) + 1;
  			}),
  			_create("SineInOut", function(p) {
  				return -0.5 * (Math.cos(Math.PI * p) - 1);
  			})
  		);

  		_class("easing.EaseLookup", {
  				find:function(s) {
  					return Ease.map[s];
  				}
  			}, true);

  		//register the non-standard eases
  		_easeReg(w.SlowMo, "SlowMo", "ease,");
  		_easeReg(RoughEase, "RoughEase", "ease,");
  		_easeReg(SteppedEase, "SteppedEase", "ease,");

  		return Back;
  		
  	}, true);


  });

  if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); } //necessary in case TweenLite was already loaded separately.











  /*
   * ----------------------------------------------------------------
   * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
   * ----------------------------------------------------------------
   */
  (function(window, moduleName) {
  		var _exports = {},
  			_doc = window.document,
  			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
  		if (_globals.TweenLite) {
  			return; //in case the core set of classes is already loaded, don't instantiate twice.
  		}
  		var _namespace = function(ns) {
  				var a = ns.split("."),
  					p = _globals, i;
  				for (i = 0; i < a.length; i++) {
  					p[a[i]] = p = p[a[i]] || {};
  				}
  				return p;
  			},
  			gs = _namespace("com.greensock"),
  			_tinyNum = 0.0000000001,
  			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  				var b = [],
  					l = a.length,
  					i;
  				for (i = 0; i !== l; b.push(a[i++])) {}
  				return b;
  			},
  			_emptyFunc = function() {},
  			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
  				var toString = Object.prototype.toString,
  					array = toString.call([]);
  				return function(obj) {
  					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
  				};
  			}()),
  			a, i, p, _ticker, _tickerActive,
  			_defLookup = {},

  			/**
  			 * @constructor
  			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
  			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
  			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
  			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
  			 *
  			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
  			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
  			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
  			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
  			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
  			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
  			 * sandbox the banner one like:
  			 *
  			 * <script>
  			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
  			 * </script>
  			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
  			 * <script>
  			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
  			 * </script>
  			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
  			 * <script>
  			 *     gs.TweenLite.to(...); //would use v1.7
  			 *     TweenLite.to(...); //would use v1.6
  			 * </script>
  			 *
  			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
  			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
  			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
  			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
  			 */
  			Definition = function(ns, dependencies, func, global) {
  				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
  				_defLookup[ns] = this;
  				this.gsClass = null;
  				this.func = func;
  				var _classes = [];
  				this.check = function(init) {
  					var i = dependencies.length,
  						missing = i,
  						cur, a, n, cl;
  					while (--i > -1) {
  						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
  							_classes[i] = cur.gsClass;
  							missing--;
  						} else if (init) {
  							cur.sc.push(this);
  						}
  					}
  					if (missing === 0 && func) {
  						a = ("com.greensock." + ns).split(".");
  						n = a.pop();
  						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

  						//exports to multiple environments
  						if (global) {
  							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
  							if (module.exports) { //node
  								if (ns === moduleName) {
  									module.exports = _exports[moduleName] = cl;
  									for (i in _exports) {
  										cl[i] = _exports[i];
  									}
  								} else if (_exports[moduleName]) {
  									_exports[moduleName][n] = cl;
  								}
  							}
  						}
  						for (i = 0; i < this.sc.length; i++) {
  							this.sc[i].check();
  						}
  					}
  				};
  				this.check(true);
  			},

  			//used to create Definition instances (which basically registers a class that has dependencies).
  			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
  				return new Definition(ns, dependencies, func, global);
  			},

  			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
  			_class = gs._class = function(ns, func, global) {
  				func = func || function() {};
  				_gsDefine(ns, [], function(){ return func; }, global);
  				return func;
  			};

  		_gsDefine.globals = _globals;



  /*
   * ----------------------------------------------------------------
   * Ease
   * ----------------------------------------------------------------
   */
  		var _baseParams = [0, 0, 1, 1],
  			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
  				this._func = func;
  				this._type = type || 0;
  				this._power = power || 0;
  				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
  			}, true),
  			_easeMap = Ease.map = {},
  			_easeReg = Ease.register = function(ease, names, types, create) {
  				var na = names.split(","),
  					i = na.length,
  					ta = (types || "easeIn,easeOut,easeInOut").split(","),
  					e, name, j, type;
  				while (--i > -1) {
  					name = na[i];
  					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
  					j = ta.length;
  					while (--j > -1) {
  						type = ta[j];
  						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
  					}
  				}
  			};

  		p = Ease.prototype;
  		p._calcEnd = false;
  		p.getRatio = function(p) {
  			if (this._func) {
  				this._params[0] = p;
  				return this._func.apply(null, this._params);
  			}
  			var t = this._type,
  				pw = this._power,
  				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
  			if (pw === 1) {
  				r *= r;
  			} else if (pw === 2) {
  				r *= r * r;
  			} else if (pw === 3) {
  				r *= r * r * r;
  			} else if (pw === 4) {
  				r *= r * r * r * r;
  			}
  			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
  		};

  		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
  		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
  		i = a.length;
  		while (--i > -1) {
  			p = a[i]+",Power"+i;
  			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
  			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
  			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
  		}
  		_easeMap.linear = gs.easing.Linear.easeIn;
  		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


  /*
   * ----------------------------------------------------------------
   * EventDispatcher
   * ----------------------------------------------------------------
   */
  		var EventDispatcher = _class("events.EventDispatcher", function(target) {
  			this._listeners = {};
  			this._eventTarget = target || this;
  		});
  		p = EventDispatcher.prototype;

  		p.addEventListener = function(type, callback, scope, useParam, priority) {
  			priority = priority || 0;
  			var list = this._listeners[type],
  				index = 0,
  				listener, i;
  			if (this === _ticker && !_tickerActive) {
  				_ticker.wake();
  			}
  			if (list == null) {
  				this._listeners[type] = list = [];
  			}
  			i = list.length;
  			while (--i > -1) {
  				listener = list[i];
  				if (listener.c === callback && listener.s === scope) {
  					list.splice(i, 1);
  				} else if (index === 0 && listener.pr < priority) {
  					index = i + 1;
  				}
  			}
  			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
  		};

  		p.removeEventListener = function(type, callback) {
  			var list = this._listeners[type], i;
  			if (list) {
  				i = list.length;
  				while (--i > -1) {
  					if (list[i].c === callback) {
  						list.splice(i, 1);
  						return;
  					}
  				}
  			}
  		};

  		p.dispatchEvent = function(type) {
  			var list = this._listeners[type],
  				i, t, listener;
  			if (list) {
  				i = list.length;
  				if (i > 1) {
  					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
  				}
  				t = this._eventTarget;
  				while (--i > -1) {
  					listener = list[i];
  					if (listener) {
  						if (listener.up) {
  							listener.c.call(listener.s || t, {type:type, target:t});
  						} else {
  							listener.c.call(listener.s || t);
  						}
  					}
  				}
  			}
  		};


  /*
   * ----------------------------------------------------------------
   * Ticker
   * ----------------------------------------------------------------
   */
   		var _reqAnimFrame = window.requestAnimationFrame,
  			_cancelAnimFrame = window.cancelAnimationFrame,
  			_getTime = Date.now || function() {return new Date().getTime();},
  			_lastUpdate = _getTime();

  		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
  		a = ["ms","moz","webkit","o"];
  		i = a.length;
  		while (--i > -1 && !_reqAnimFrame) {
  			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
  			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
  		}

  		_class("Ticker", function(fps, useRAF) {
  			var _self = this,
  				_startTime = _getTime(),
  				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
  				_lagThreshold = 500,
  				_adjustedLag = 33,
  				_tickWord = "tick", //helps reduce gc burden
  				_fps, _req, _id, _gap, _nextTime,
  				_tick = function(manual) {
  					var elapsed = _getTime() - _lastUpdate,
  						overlap, dispatch;
  					if (elapsed > _lagThreshold) {
  						_startTime += elapsed - _adjustedLag;
  					}
  					_lastUpdate += elapsed;
  					_self.time = (_lastUpdate - _startTime) / 1000;
  					overlap = _self.time - _nextTime;
  					if (!_fps || overlap > 0 || manual === true) {
  						_self.frame++;
  						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
  						dispatch = true;
  					}
  					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
  						_id = _req(_tick);
  					}
  					if (dispatch) {
  						_self.dispatchEvent(_tickWord);
  					}
  				};

  			EventDispatcher.call(_self);
  			_self.time = _self.frame = 0;
  			_self.tick = function() {
  				_tick(true);
  			};

  			_self.lagSmoothing = function(threshold, adjustedLag) {
  				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
  					return (_lagThreshold < 1 / _tinyNum);
  				}
  				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
  				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
  			};

  			_self.sleep = function() {
  				if (_id == null) {
  					return;
  				}
  				if (!_useRAF || !_cancelAnimFrame) {
  					clearTimeout(_id);
  				} else {
  					_cancelAnimFrame(_id);
  				}
  				_req = _emptyFunc;
  				_id = null;
  				if (_self === _ticker) {
  					_tickerActive = false;
  				}
  			};

  			_self.wake = function(seamless) {
  				if (_id !== null) {
  					_self.sleep();
  				} else if (seamless) {
  					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
  				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
  					_lastUpdate = _getTime() - _lagThreshold + 5;
  				}
  				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
  				if (_self === _ticker) {
  					_tickerActive = true;
  				}
  				_tick(2);
  			};

  			_self.fps = function(value) {
  				if (!arguments.length) {
  					return _fps;
  				}
  				_fps = value;
  				_gap = 1 / (_fps || 60);
  				_nextTime = this.time + _gap;
  				_self.wake();
  			};

  			_self.useRAF = function(value) {
  				if (!arguments.length) {
  					return _useRAF;
  				}
  				_self.sleep();
  				_useRAF = value;
  				_self.fps(_fps);
  			};
  			_self.fps(fps);

  			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
  			setTimeout(function() {
  				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
  					_self.useRAF(false);
  				}
  			}, 1500);
  		});

  		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
  		p.constructor = gs.Ticker;


  /*
   * ----------------------------------------------------------------
   * Animation
   * ----------------------------------------------------------------
   */
  		var Animation = _class("core.Animation", function(duration, vars) {
  				this.vars = vars = vars || {};
  				this._duration = this._totalDuration = duration || 0;
  				this._delay = Number(vars.delay) || 0;
  				this._timeScale = 1;
  				this._active = (vars.immediateRender === true);
  				this.data = vars.data;
  				this._reversed = (vars.reversed === true);

  				if (!_rootTimeline) {
  					return;
  				}
  				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
  					_ticker.wake();
  				}

  				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
  				tl.add(this, tl._time);

  				if (this.vars.paused) {
  					this.paused(true);
  				}
  			});

  		_ticker = Animation.ticker = new gs.Ticker();
  		p = Animation.prototype;
  		p._dirty = p._gc = p._initted = p._paused = false;
  		p._totalTime = p._time = 0;
  		p._rawPrevTime = -1;
  		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
  		p._paused = false;


  		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
  		var _checkTimeout = function() {
  				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
  					_ticker.wake();
  				}
  				var t = setTimeout(_checkTimeout, 2000);
  				if (t.unref) {
  					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
  					t.unref();
  				}
  			};
  		_checkTimeout();


  		p.play = function(from, suppressEvents) {
  			if (from != null) {
  				this.seek(from, suppressEvents);
  			}
  			return this.reversed(false).paused(false);
  		};

  		p.pause = function(atTime, suppressEvents) {
  			if (atTime != null) {
  				this.seek(atTime, suppressEvents);
  			}
  			return this.paused(true);
  		};

  		p.resume = function(from, suppressEvents) {
  			if (from != null) {
  				this.seek(from, suppressEvents);
  			}
  			return this.paused(false);
  		};

  		p.seek = function(time, suppressEvents) {
  			return this.totalTime(Number(time), suppressEvents !== false);
  		};

  		p.restart = function(includeDelay, suppressEvents) {
  			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
  		};

  		p.reverse = function(from, suppressEvents) {
  			if (from != null) {
  				this.seek((from || this.totalDuration()), suppressEvents);
  			}
  			return this.reversed(true).paused(false);
  		};

  		p.render = function(time, suppressEvents, force) {
  			//stub - we override this method in subclasses.
  		};

  		p.invalidate = function() {
  			this._time = this._totalTime = 0;
  			this._initted = this._gc = false;
  			this._rawPrevTime = -1;
  			if (this._gc || !this.timeline) {
  				this._enabled(true);
  			}
  			return this;
  		};

  		p.isActive = function() {
  			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
  				startTime = this._startTime,
  				rawTime;
  			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001));
  		};

  		p._enabled = function (enabled, ignoreTimeline) {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			this._gc = !enabled;
  			this._active = this.isActive();
  			if (ignoreTimeline !== true) {
  				if (enabled && !this.timeline) {
  					this._timeline.add(this, this._startTime - this._delay);
  				} else if (!enabled && this.timeline) {
  					this._timeline._remove(this, true);
  				}
  			}
  			return false;
  		};


  		p._kill = function(vars, target) {
  			return this._enabled(false, false);
  		};

  		p.kill = function(vars, target) {
  			this._kill(vars, target);
  			return this;
  		};

  		p._uncache = function(includeSelf) {
  			var tween = includeSelf ? this : this.timeline;
  			while (tween) {
  				tween._dirty = true;
  				tween = tween.timeline;
  			}
  			return this;
  		};

  		p._swapSelfInParams = function(params) {
  			var i = params.length,
  				copy = params.concat();
  			while (--i > -1) {
  				if (params[i] === "{self}") {
  					copy[i] = this;
  				}
  			}
  			return copy;
  		};

  		p._callback = function(type) {
  			var v = this.vars,
  				callback = v[type],
  				params = v[type + "Params"],
  				scope = v[type + "Scope"] || v.callbackScope || this,
  				l = params ? params.length : 0;
  			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
  				case 0: callback.call(scope); break;
  				case 1: callback.call(scope, params[0]); break;
  				case 2: callback.call(scope, params[0], params[1]); break;
  				default: callback.apply(scope, params);
  			}
  		};

  //----Animation getters/setters --------------------------------------------------------

  		p.eventCallback = function(type, callback, params, scope) {
  			if ((type || "").substr(0,2) === "on") {
  				var v = this.vars;
  				if (arguments.length === 1) {
  					return v[type];
  				}
  				if (callback == null) {
  					delete v[type];
  				} else {
  					v[type] = callback;
  					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
  					v[type + "Scope"] = scope;
  				}
  				if (type === "onUpdate") {
  					this._onUpdate = callback;
  				}
  			}
  			return this;
  		};

  		p.delay = function(value) {
  			if (!arguments.length) {
  				return this._delay;
  			}
  			if (this._timeline.smoothChildTiming) {
  				this.startTime( this._startTime + value - this._delay );
  			}
  			this._delay = value;
  			return this;
  		};

  		p.duration = function(value) {
  			if (!arguments.length) {
  				this._dirty = false;
  				return this._duration;
  			}
  			this._duration = this._totalDuration = value;
  			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
  			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
  				this.totalTime(this._totalTime * (value / this._duration), true);
  			}
  			return this;
  		};

  		p.totalDuration = function(value) {
  			this._dirty = false;
  			return (!arguments.length) ? this._totalDuration : this.duration(value);
  		};

  		p.time = function(value, suppressEvents) {
  			if (!arguments.length) {
  				return this._time;
  			}
  			if (this._dirty) {
  				this.totalDuration();
  			}
  			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
  		};

  		p.totalTime = function(time, suppressEvents, uncapped) {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			if (!arguments.length) {
  				return this._totalTime;
  			}
  			if (this._timeline) {
  				if (time < 0 && !uncapped) {
  					time += this.totalDuration();
  				}
  				if (this._timeline.smoothChildTiming) {
  					if (this._dirty) {
  						this.totalDuration();
  					}
  					var totalDuration = this._totalDuration,
  						tl = this._timeline;
  					if (time > totalDuration && !uncapped) {
  						time = totalDuration;
  					}
  					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
  					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  						this._uncache(false);
  					}
  					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
  					if (tl._timeline) {
  						while (tl._timeline) {
  							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
  								tl.totalTime(tl._totalTime, true);
  							}
  							tl = tl._timeline;
  						}
  					}
  				}
  				if (this._gc) {
  					this._enabled(true, false);
  				}
  				if (this._totalTime !== time || this._duration === 0) {
  					if (_lazyTweens.length) {
  						_lazyRender();
  					}
  					this.render(time, suppressEvents, false);
  					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
  						_lazyRender();
  					}
  				}
  			}
  			return this;
  		};

  		p.progress = p.totalProgress = function(value, suppressEvents) {
  			var duration = this.duration();
  			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
  		};

  		p.startTime = function(value) {
  			if (!arguments.length) {
  				return this._startTime;
  			}
  			if (value !== this._startTime) {
  				this._startTime = value;
  				if (this.timeline) if (this.timeline._sortChildren) {
  					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
  				}
  			}
  			return this;
  		};

  		p.endTime = function(includeRepeats) {
  			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
  		};

  		p.timeScale = function(value) {
  			if (!arguments.length) {
  				return this._timeScale;
  			}
  			var pauseTime, t;
  			value = value || _tinyNum; //can't allow zero because it'll throw the math off
  			if (this._timeline && this._timeline.smoothChildTiming) {
  				pauseTime = this._pauseTime;
  				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
  				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
  			}
  			this._timeScale = value;
  			t = this.timeline;
  			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
  				t._dirty = true;
  				t.totalDuration();
  				t = t.timeline;
  			}
  			return this;
  		};

  		p.reversed = function(value) {
  			if (!arguments.length) {
  				return this._reversed;
  			}
  			if (value != this._reversed) {
  				this._reversed = value;
  				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
  			}
  			return this;
  		};

  		p.paused = function(value) {
  			if (!arguments.length) {
  				return this._paused;
  			}
  			var tl = this._timeline,
  				raw, elapsed;
  			if (value != this._paused) if (tl) {
  				if (!_tickerActive && !value) {
  					_ticker.wake();
  				}
  				raw = tl.rawTime();
  				elapsed = raw - this._pauseTime;
  				if (!value && tl.smoothChildTiming) {
  					this._startTime += elapsed;
  					this._uncache(false);
  				}
  				this._pauseTime = value ? raw : null;
  				this._paused = value;
  				this._active = this.isActive();
  				if (!value && elapsed !== 0 && this._initted && this.duration()) {
  					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
  					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
  				}
  			}
  			if (this._gc && !value) {
  				this._enabled(true, false);
  			}
  			return this;
  		};


  /*
   * ----------------------------------------------------------------
   * SimpleTimeline
   * ----------------------------------------------------------------
   */
  		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
  			Animation.call(this, 0, vars);
  			this.autoRemoveChildren = this.smoothChildTiming = true;
  		});

  		p = SimpleTimeline.prototype = new Animation();
  		p.constructor = SimpleTimeline;
  		p.kill()._gc = false;
  		p._first = p._last = p._recent = null;
  		p._sortChildren = false;

  		p.add = p.insert = function(child, position, align, stagger) {
  			var prevTween, st;
  			child._startTime = Number(position || 0) + child._delay;
  			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
  				child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
  			}
  			if (child.timeline) {
  				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
  			}
  			child.timeline = child._timeline = this;
  			if (child._gc) {
  				child._enabled(true, true);
  			}
  			prevTween = this._last;
  			if (this._sortChildren) {
  				st = child._startTime;
  				while (prevTween && prevTween._startTime > st) {
  					prevTween = prevTween._prev;
  				}
  			}
  			if (prevTween) {
  				child._next = prevTween._next;
  				prevTween._next = child;
  			} else {
  				child._next = this._first;
  				this._first = child;
  			}
  			if (child._next) {
  				child._next._prev = child;
  			} else {
  				this._last = child;
  			}
  			child._prev = prevTween;
  			this._recent = child;
  			if (this._timeline) {
  				this._uncache(true);
  			}
  			return this;
  		};

  		p._remove = function(tween, skipDisable) {
  			if (tween.timeline === this) {
  				if (!skipDisable) {
  					tween._enabled(false, true);
  				}

  				if (tween._prev) {
  					tween._prev._next = tween._next;
  				} else if (this._first === tween) {
  					this._first = tween._next;
  				}
  				if (tween._next) {
  					tween._next._prev = tween._prev;
  				} else if (this._last === tween) {
  					this._last = tween._prev;
  				}
  				tween._next = tween._prev = tween.timeline = null;
  				if (tween === this._recent) {
  					this._recent = this._last;
  				}

  				if (this._timeline) {
  					this._uncache(true);
  				}
  			}
  			return this;
  		};

  		p.render = function(time, suppressEvents, force) {
  			var tween = this._first,
  				next;
  			this._totalTime = this._time = this._rawPrevTime = time;
  			while (tween) {
  				next = tween._next; //record it here because the value could change after rendering...
  				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
  					if (!tween._reversed) {
  						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
  					} else {
  						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
  					}
  				}
  				tween = next;
  			}
  		};

  		p.rawTime = function() {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			return this._totalTime;
  		};

  /*
   * ----------------------------------------------------------------
   * TweenLite
   * ----------------------------------------------------------------
   */
  		var TweenLite = _class("TweenLite", function(target, duration, vars) {
  				Animation.call(this, duration, vars);
  				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

  				if (target == null) {
  					throw "Cannot tween a null target.";
  				}

  				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

  				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
  					overwrite = this.vars.overwrite,
  					i, targ, targets;

  				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

  				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
  					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
  					this._propLookup = [];
  					this._siblings = [];
  					for (i = 0; i < targets.length; i++) {
  						targ = targets[i];
  						if (!targ) {
  							targets.splice(i--, 1);
  							continue;
  						} else if (typeof(targ) === "string") {
  							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
  							if (typeof(targ) === "string") {
  								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
  							}
  							continue;
  						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
  							targets.splice(i--, 1);
  							this._targets = targets = targets.concat(_slice(targ));
  							continue;
  						}
  						this._siblings[i] = _register(targ, this, false);
  						if (overwrite === 1) if (this._siblings[i].length > 1) {
  							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
  						}
  					}

  				} else {
  					this._propLookup = {};
  					this._siblings = _register(target, this, false);
  					if (overwrite === 1) if (this._siblings.length > 1) {
  						_applyOverwrite(target, this, null, 1, this._siblings);
  					}
  				}
  				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
  					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
  					this.render(Math.min(0, -this._delay)); //in case delay is negative
  				}
  			}, true),
  			_isSelector = function(v) {
  				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
  			},
  			_autoCSS = function(vars, target) {
  				var css = {},
  					p;
  				for (p in vars) {
  					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
  						css[p] = vars[p];
  						delete vars[p];
  					}
  				}
  				vars.css = css;
  			};

  		p = TweenLite.prototype = new Animation();
  		p.constructor = TweenLite;
  		p.kill()._gc = false;

  //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

  		p.ratio = 0;
  		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
  		p._notifyPluginsOfEnabled = p._lazy = false;

  		TweenLite.version = "1.20.4";
  		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
  		TweenLite.defaultOverwrite = "auto";
  		TweenLite.ticker = _ticker;
  		TweenLite.autoSleep = 120;
  		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
  			_ticker.lagSmoothing(threshold, adjustedLag);
  		};

  		TweenLite.selector = window.$ || window.jQuery || function(e) {
  			var selector = window.$ || window.jQuery;
  			if (selector) {
  				TweenLite.selector = selector;
  				return selector(e);
  			}
  			return (typeof(_doc) === "undefined") ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
  		};

  		var _lazyTweens = [],
  			_lazyLookup = {},
  			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  			_relExp = /[\+-]=-?[\.\d]/,
  			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
  			_setRatio = function(v) {
  				var pt = this._firstPT,
  					min = 0.000001,
  					val;
  				while (pt) {
  					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
  					if (pt.m) {
  						val = pt.m(val, this._target || pt.t);
  					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
  						val = 0;
  					}
  					if (!pt.f) {
  						pt.t[pt.p] = val;
  					} else if (pt.fp) {
  						pt.t[pt.p](pt.fp, val);
  					} else {
  						pt.t[pt.p](val);
  					}
  					pt = pt._next;
  				}
  			},
  			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
  			_blobDif = function(start, end, filter, pt) {
  				var a = [],
  					charIndex = 0,
  					s = "",
  					color = 0,
  					startNums, endNums, num, i, l, nonNumbers, currentNum;
  				a.start = start;
  				a.end = end;
  				start = a[0] = start + ""; //ensure values are strings
  				end = a[1] = end + "";
  				if (filter) {
  					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
  					start = a[0];
  					end = a[1];
  				}
  				a.length = 0;
  				startNums = start.match(_numbersExp) || [];
  				endNums = end.match(_numbersExp) || [];
  				if (pt) {
  					pt._next = null;
  					pt.blob = 1;
  					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
  				}
  				l = endNums.length;
  				for (i = 0; i < l; i++) {
  					currentNum = endNums[i];
  					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
  					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
  					charIndex += nonNumbers.length;
  					if (color) { //sense rgba() values and round them.
  						color = (color + 1) % 5;
  					} else if (nonNumbers.substr(-5) === "rgba(") {
  						color = 1;
  					}
  					if (currentNum === startNums[i] || startNums.length <= i) {
  						s += currentNum;
  					} else {
  						if (s) {
  							a.push(s);
  							s = "";
  						}
  						num = parseFloat(startNums[i]);
  						a.push(num);
  						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
  						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
  					}
  					charIndex += currentNum.length;
  				}
  				s += end.substr(charIndex);
  				if (s) {
  					a.push(s);
  				}
  				a.setRatio = _setRatio;
  				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  					a.end = null;
  				}
  				return a;
  			},
  			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
  			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
  				if (typeof(end) === "function") {
  					end = end(index || 0, target);
  				}
  				var type = typeof(target[prop]),
  					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
  					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
  					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
  					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
  					blob;

  				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
  					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
  						//a blob (string that has multiple numbers in it)
  						pt.fp = funcParam;
  						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
  						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
  					} else {
  						pt.s = parseFloat(s);
  						if (!isRelative) {
  							pt.c = (parseFloat(end) - pt.s) || 0;
  						}
  					}
  				}
  				if (pt.c) { //only add it to the linked list if there's a change.
  					if ((pt._next = this._firstPT)) {
  						pt._next._prev = pt;
  					}
  					this._firstPT = pt;
  					return pt;
  				}
  			},
  			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
  			_plugins = TweenLite._plugins = {},
  			_tweenLookup = _internals.tweenLookup = {},
  			_tweenLookupNum = 0,
  			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1},
  			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
  			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
  			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
  			_nextGCFrame = 30,
  			_lazyRender = _internals.lazyRender = function() {
  				var i = _lazyTweens.length,
  					tween;
  				_lazyLookup = {};
  				while (--i > -1) {
  					tween = _lazyTweens[i];
  					if (tween && tween._lazy !== false) {
  						tween.render(tween._lazy[0], tween._lazy[1], true);
  						tween._lazy = false;
  					}
  				}
  				_lazyTweens.length = 0;
  			};

  		_rootTimeline._startTime = _ticker.time;
  		_rootFramesTimeline._startTime = _ticker.frame;
  		_rootTimeline._active = _rootFramesTimeline._active = true;
  		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

  		Animation._updateRoot = TweenLite.render = function() {
  				var i, a, p;
  				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
  					_lazyRender();
  				}
  				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
  				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
  				if (_lazyTweens.length) {
  					_lazyRender();
  				}
  				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
  					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
  					for (p in _tweenLookup) {
  						a = _tweenLookup[p].tweens;
  						i = a.length;
  						while (--i > -1) {
  							if (a[i]._gc) {
  								a.splice(i, 1);
  							}
  						}
  						if (a.length === 0) {
  							delete _tweenLookup[p];
  						}
  					}
  					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
  					p = _rootTimeline._first;
  					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
  						while (p && p._paused) {
  							p = p._next;
  						}
  						if (!p) {
  							_ticker.sleep();
  						}
  					}
  				}
  			};

  		_ticker.addEventListener("tick", Animation._updateRoot);

  		var _register = function(target, tween, scrub) {
  				var id = target._gsTweenID, a, i;
  				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
  					_tweenLookup[id] = {target:target, tweens:[]};
  				}
  				if (tween) {
  					a = _tweenLookup[id].tweens;
  					a[(i = a.length)] = tween;
  					if (scrub) {
  						while (--i > -1) {
  							if (a[i] === tween) {
  								a.splice(i, 1);
  							}
  						}
  					}
  				}
  				return _tweenLookup[id].tweens;
  			},
  			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
  				var func = overwrittenTween.vars.onOverwrite, r1, r2;
  				if (func) {
  					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
  				}
  				func = TweenLite.onOverwrite;
  				if (func) {
  					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
  				}
  				return (r1 !== false && r2 !== false);
  			},
  			_applyOverwrite = function(target, tween, props, mode, siblings) {
  				var i, changed, curTween, l;
  				if (mode === 1 || mode >= 4) {
  					l = siblings.length;
  					for (i = 0; i < l; i++) {
  						if ((curTween = siblings[i]) !== tween) {
  							if (!curTween._gc) {
  								if (curTween._kill(null, target, tween)) {
  									changed = true;
  								}
  							}
  						} else if (mode === 5) {
  							break;
  						}
  					}
  					return changed;
  				}
  				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
  				var startTime = tween._startTime + _tinyNum,
  					overlaps = [],
  					oCount = 0,
  					zeroDur = (tween._duration === 0),
  					globalStart;
  				i = siblings.length;
  				while (--i > -1) {
  					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) ; else if (curTween._timeline !== tween._timeline) {
  						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
  						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
  							overlaps[oCount++] = curTween;
  						}
  					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
  						overlaps[oCount++] = curTween;
  					}
  				}

  				i = oCount;
  				while (--i > -1) {
  					curTween = overlaps[i];
  					if (mode === 2) if (curTween._kill(props, target, tween)) {
  						changed = true;
  					}
  					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
  						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
  							continue;
  						}
  						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
  							changed = true;
  						}
  					}
  				}
  				return changed;
  			},
  			_checkOverlap = function(tween, reference, zeroDur) {
  				var tl = tween._timeline,
  					ts = tl._timeScale,
  					t = tween._startTime;
  				while (tl._timeline) {
  					t += tl._startTime;
  					ts *= tl._timeScale;
  					if (tl._paused) {
  						return -100;
  					}
  					tl = tl._timeline;
  				}
  				t /= ts;
  				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
  			};


  //---- TweenLite instance methods -----------------------------------------------------------------------------

  		p._init = function() {
  			var v = this.vars,
  				op = this._overwrittenProps,
  				dur = this._duration,
  				immediate = !!v.immediateRender,
  				ease = v.ease,
  				i, initPlugins, pt, p, startVars, l;
  			if (v.startAt) {
  				if (this._startAt) {
  					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
  					this._startAt.kill();
  				}
  				startVars = {};
  				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
  					startVars[p] = v.startAt[p];
  				}
  				startVars.data = "isStart";
  				startVars.overwrite = false;
  				startVars.immediateRender = true;
  				startVars.lazy = (immediate && v.lazy !== false);
  				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
  				startVars.onUpdate = v.onUpdate;
  				startVars.onUpdateParams = v.onUpdateParams;
  				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
  				this._startAt = TweenLite.to(this.target, 0, startVars);
  				if (immediate) {
  					if (this._time > 0) {
  						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
  					} else if (dur !== 0) {
  						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
  					}
  				}
  			} else if (v.runBackwards && dur !== 0) {
  				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
  				if (this._startAt) {
  					this._startAt.render(-1, true);
  					this._startAt.kill();
  					this._startAt = null;
  				} else {
  					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
  						immediate = false;
  					}
  					pt = {};
  					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
  						if (!_reservedProps[p] || p === "autoCSS") {
  							pt[p] = v[p];
  						}
  					}
  					pt.overwrite = 0;
  					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
  					pt.lazy = (immediate && v.lazy !== false);
  					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
  					this._startAt = TweenLite.to(this.target, 0, pt);
  					if (!immediate) {
  						this._startAt._init(); //ensures that the initial values are recorded
  						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
  						if (this.vars.immediateRender) {
  							this._startAt = null;
  						}
  					} else if (this._time === 0) {
  						return;
  					}
  				}
  			}
  			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
  			if (v.easeParams instanceof Array && ease.config) {
  				this._ease = ease.config.apply(ease, v.easeParams);
  			}
  			this._easeType = this._ease._type;
  			this._easePower = this._ease._power;
  			this._firstPT = null;

  			if (this._targets) {
  				l = this._targets.length;
  				for (i = 0; i < l; i++) {
  					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
  						initPlugins = true;
  					}
  				}
  			} else {
  				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
  			}

  			if (initPlugins) {
  				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
  			}
  			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
  				this._enabled(false, false);
  			}
  			if (v.runBackwards) {
  				pt = this._firstPT;
  				while (pt) {
  					pt.s += pt.c;
  					pt.c = -pt.c;
  					pt = pt._next;
  				}
  			}
  			this._onUpdate = v.onUpdate;
  			this._initted = true;
  		};

  		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
  			var p, i, initPlugins, plugin, pt, v;
  			if (target == null) {
  				return false;
  			}

  			if (_lazyLookup[target._gsTweenID]) {
  				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
  			}

  			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
  				_autoCSS(this.vars, target);
  			}
  			for (p in this.vars) {
  				v = this.vars[p];
  				if (_reservedProps[p]) {
  					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
  						this.vars[p] = v = this._swapSelfInParams(v, this);
  					}

  				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

  					//t - target 		[object]
  					//p - property 		[string]
  					//s - start			[number]
  					//c - change		[number]
  					//f - isFunction	[boolean]
  					//n - name			[string]
  					//pg - isPlugin 	[boolean]
  					//pr - priority		[number]
  					//m - mod           [function | 0]
  					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
  					i = plugin._overwriteProps.length;
  					while (--i > -1) {
  						propLookup[plugin._overwriteProps[i]] = this._firstPT;
  					}
  					if (plugin._priority || plugin._onInitAllProps) {
  						initPlugins = true;
  					}
  					if (plugin._onDisable || plugin._onEnable) {
  						this._notifyPluginsOfEnabled = true;
  					}
  					if (pt._next) {
  						pt._next._prev = pt;
  					}

  				} else {
  					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
  				}
  			}

  			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
  				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
  			}
  			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
  				this._kill(propLookup, target);
  				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
  			}
  			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
  				_lazyLookup[target._gsTweenID] = true;
  			}
  			return initPlugins;
  		};

  		p.render = function(time, suppressEvents, force) {
  			var prevTime = this._time,
  				duration = this._duration,
  				prevRawPrevTime = this._rawPrevTime,
  				isComplete, callback, pt, rawPrevTime;
  			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
  				this._totalTime = this._time = duration;
  				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
  				if (!this._reversed ) {
  					isComplete = true;
  					callback = "onComplete";
  					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
  				}
  				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
  					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
  						time = 0;
  					}
  					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
  						force = true;
  						if (prevRawPrevTime > _tinyNum) {
  							callback = "onReverseComplete";
  						}
  					}
  					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  				}

  			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
  				this._totalTime = this._time = 0;
  				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
  				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
  					callback = "onReverseComplete";
  					isComplete = this._reversed;
  				}
  				if (time < 0) {
  					this._active = false;
  					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
  						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
  							force = true;
  						}
  						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
  					}
  				}
  				if (!this._initted || (this._startAt && this._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
  					force = true;
  				}
  			} else {
  				this._totalTime = this._time = time;

  				if (this._easeType) {
  					var r = time / duration, type = this._easeType, pow = this._easePower;
  					if (type === 1 || (type === 3 && r >= 0.5)) {
  						r = 1 - r;
  					}
  					if (type === 3) {
  						r *= 2;
  					}
  					if (pow === 1) {
  						r *= r;
  					} else if (pow === 2) {
  						r *= r * r;
  					} else if (pow === 3) {
  						r *= r * r * r;
  					} else if (pow === 4) {
  						r *= r * r * r * r;
  					}

  					if (type === 1) {
  						this.ratio = 1 - r;
  					} else if (type === 2) {
  						this.ratio = r;
  					} else if (time / duration < 0.5) {
  						this.ratio = r / 2;
  					} else {
  						this.ratio = 1 - (r / 2);
  					}

  				} else {
  					this.ratio = this._ease.getRatio(time / duration);
  				}
  			}

  			if (this._time === prevTime && !force) {
  				return;
  			} else if (!this._initted) {
  				this._init();
  				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
  					return;
  				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
  					this._time = this._totalTime = prevTime;
  					this._rawPrevTime = prevRawPrevTime;
  					_lazyTweens.push(this);
  					this._lazy = [time, suppressEvents];
  					return;
  				}
  				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
  				if (this._time && !isComplete) {
  					this.ratio = this._ease.getRatio(this._time / duration);
  				} else if (isComplete && this._ease._calcEnd) {
  					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
  				}
  			}
  			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
  				this._lazy = false;
  			}
  			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
  				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
  			}
  			if (prevTime === 0) {
  				if (this._startAt) {
  					if (time >= 0) {
  						this._startAt.render(time, true, force);
  					} else if (!callback) {
  						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
  					}
  				}
  				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
  					this._callback("onStart");
  				}
  			}
  			pt = this._firstPT;
  			while (pt) {
  				if (pt.f) {
  					pt.t[pt.p](pt.c * this.ratio + pt.s);
  				} else {
  					pt.t[pt.p] = pt.c * this.ratio + pt.s;
  				}
  				pt = pt._next;
  			}

  			if (this._onUpdate) {
  				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
  					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
  				}
  				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
  					this._callback("onUpdate");
  				}
  			}
  			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
  				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
  					this._startAt.render(time, true, force);
  				}
  				if (isComplete) {
  					if (this._timeline.autoRemoveChildren) {
  						this._enabled(false, false);
  					}
  					this._active = false;
  				}
  				if (!suppressEvents && this.vars[callback]) {
  					this._callback(callback);
  				}
  				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
  					this._rawPrevTime = 0;
  				}
  			}
  		};

  		p._kill = function(vars, target, overwritingTween) {
  			if (vars === "all") {
  				vars = null;
  			}
  			if (vars == null) if (target == null || target === this.target) {
  				this._lazy = false;
  				return this._enabled(false, false);
  			}
  			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
  			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
  				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
  			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
  				i = target.length;
  				while (--i > -1) {
  					if (this._kill(vars, target[i], overwritingTween)) {
  						changed = true;
  					}
  				}
  			} else {
  				if (this._targets) {
  					i = this._targets.length;
  					while (--i > -1) {
  						if (target === this._targets[i]) {
  							propLookup = this._propLookup[i] || {};
  							this._overwrittenProps = this._overwrittenProps || [];
  							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
  							break;
  						}
  					}
  				} else if (target !== this.target) {
  					return false;
  				} else {
  					propLookup = this._propLookup;
  					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
  				}

  				if (propLookup) {
  					killProps = vars || propLookup;
  					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
  					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
  						for (p in killProps) {
  							if (propLookup[p]) {
  								if (!killed) {
  									killed = [];
  								}
  								killed.push(p);
  							}
  						}
  						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
  							return false;
  						}
  					}

  					for (p in killProps) {
  						if ((pt = propLookup[p])) {
  							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
  								if (pt.f) {
  									pt.t[pt.p](pt.s);
  								} else {
  									pt.t[pt.p] = pt.s;
  								}
  								changed = true;
  							}
  							if (pt.pg && pt.t._kill(killProps)) {
  								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
  							}
  							if (!pt.pg || pt.t._overwriteProps.length === 0) {
  								if (pt._prev) {
  									pt._prev._next = pt._next;
  								} else if (pt === this._firstPT) {
  									this._firstPT = pt._next;
  								}
  								if (pt._next) {
  									pt._next._prev = pt._prev;
  								}
  								pt._next = pt._prev = null;
  							}
  							delete propLookup[p];
  						}
  						if (record) {
  							overwrittenProps[p] = 1;
  						}
  					}
  					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
  						this._enabled(false, false);
  					}
  				}
  			}
  			return changed;
  		};

  		p.invalidate = function() {
  			if (this._notifyPluginsOfEnabled) {
  				TweenLite._onPluginEvent("_onDisable", this);
  			}
  			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
  			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
  			this._propLookup = (this._targets) ? {} : [];
  			Animation.prototype.invalidate.call(this);
  			if (this.vars.immediateRender) {
  				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
  				this.render(Math.min(0, -this._delay)); //in case delay is negative.
  			}
  			return this;
  		};

  		p._enabled = function(enabled, ignoreTimeline) {
  			if (!_tickerActive) {
  				_ticker.wake();
  			}
  			if (enabled && this._gc) {
  				var targets = this._targets,
  					i;
  				if (targets) {
  					i = targets.length;
  					while (--i > -1) {
  						this._siblings[i] = _register(targets[i], this, true);
  					}
  				} else {
  					this._siblings = _register(this.target, this, true);
  				}
  			}
  			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
  			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
  				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
  			}
  			return false;
  		};


  //----TweenLite static methods -----------------------------------------------------

  		TweenLite.to = function(target, duration, vars) {
  			return new TweenLite(target, duration, vars);
  		};

  		TweenLite.from = function(target, duration, vars) {
  			vars.runBackwards = true;
  			vars.immediateRender = (vars.immediateRender != false);
  			return new TweenLite(target, duration, vars);
  		};

  		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
  			toVars.startAt = fromVars;
  			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
  			return new TweenLite(target, duration, toVars);
  		};

  		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
  			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
  		};

  		TweenLite.set = function(target, vars) {
  			return new TweenLite(target, 0, vars);
  		};

  		TweenLite.getTweensOf = function(target, onlyActive) {
  			if (target == null) { return []; }
  			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
  			var i, a, j, t;
  			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
  				i = target.length;
  				a = [];
  				while (--i > -1) {
  					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
  				}
  				i = a.length;
  				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
  				while (--i > -1) {
  					t = a[i];
  					j = i;
  					while (--j > -1) {
  						if (t === a[j]) {
  							a.splice(i, 1);
  						}
  					}
  				}
  			} else if (target._gsTweenID) {
  				a = _register(target).concat();
  				i = a.length;
  				while (--i > -1) {
  					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
  						a.splice(i, 1);
  					}
  				}
  			}
  			return a || [];
  		};

  		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
  			if (typeof(onlyActive) === "object") {
  				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
  				onlyActive = false;
  			}
  			var a = TweenLite.getTweensOf(target, onlyActive),
  				i = a.length;
  			while (--i > -1) {
  				a[i]._kill(vars, target);
  			}
  		};



  /*
   * ----------------------------------------------------------------
   * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
   * ----------------------------------------------------------------
   */
  		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
  					this._overwriteProps = (props || "").split(",");
  					this._propName = this._overwriteProps[0];
  					this._priority = priority || 0;
  					this._super = TweenPlugin.prototype;
  				}, true);

  		p = TweenPlugin.prototype;
  		TweenPlugin.version = "1.19.0";
  		TweenPlugin.API = 2;
  		p._firstPT = null;
  		p._addTween = _addPropTween;
  		p.setRatio = _setRatio;

  		p._kill = function(lookup) {
  			var a = this._overwriteProps,
  				pt = this._firstPT,
  				i;
  			if (lookup[this._propName] != null) {
  				this._overwriteProps = [];
  			} else {
  				i = a.length;
  				while (--i > -1) {
  					if (lookup[a[i]] != null) {
  						a.splice(i, 1);
  					}
  				}
  			}
  			while (pt) {
  				if (lookup[pt.n] != null) {
  					if (pt._next) {
  						pt._next._prev = pt._prev;
  					}
  					if (pt._prev) {
  						pt._prev._next = pt._next;
  						pt._prev = null;
  					} else if (this._firstPT === pt) {
  						this._firstPT = pt._next;
  					}
  				}
  				pt = pt._next;
  			}
  			return false;
  		};

  		p._mod = p._roundProps = function(lookup) {
  			var pt = this._firstPT,
  				val;
  			while (pt) {
  				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
  				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
  					if (pt.f === 2) {
  						pt.t._applyPT.m = val;
  					} else {
  						pt.m = val;
  					}
  				}
  				pt = pt._next;
  			}
  		};

  		TweenLite._onPluginEvent = function(type, tween) {
  			var pt = tween._firstPT,
  				changed, pt2, first, last, next;
  			if (type === "_onInitAllProps") {
  				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
  				while (pt) {
  					next = pt._next;
  					pt2 = first;
  					while (pt2 && pt2.pr > pt.pr) {
  						pt2 = pt2._next;
  					}
  					if ((pt._prev = pt2 ? pt2._prev : last)) {
  						pt._prev._next = pt;
  					} else {
  						first = pt;
  					}
  					if ((pt._next = pt2)) {
  						pt2._prev = pt;
  					} else {
  						last = pt;
  					}
  					pt = next;
  				}
  				pt = tween._firstPT = first;
  			}
  			while (pt) {
  				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
  					changed = true;
  				}
  				pt = pt._next;
  			}
  			return changed;
  		};

  		TweenPlugin.activate = function(plugins) {
  			var i = plugins.length;
  			while (--i > -1) {
  				if (plugins[i].API === TweenPlugin.API) {
  					_plugins[(new plugins[i]())._propName] = plugins[i];
  				}
  			}
  			return true;
  		};

  		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
  		_gsDefine.plugin = function(config) {
  			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
  			var propName = config.propName,
  				priority = config.priority || 0,
  				overwriteProps = config.overwriteProps,
  				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
  				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
  					function() {
  						TweenPlugin.call(this, propName, priority);
  						this._overwriteProps = overwriteProps || [];
  					}, (config.global === true)),
  				p = Plugin.prototype = new TweenPlugin(propName),
  				prop;
  			p.constructor = Plugin;
  			Plugin.API = config.API;
  			for (prop in map) {
  				if (typeof(config[prop]) === "function") {
  					p[map[prop]] = config[prop];
  				}
  			}
  			Plugin.version = config.version;
  			TweenPlugin.activate([Plugin]);
  			return Plugin;
  		};


  		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
  		a = window._gsQueue;
  		if (a) {
  			for (i = 0; i < a.length; i++) {
  				a[i]();
  			}
  			for (p in _defLookup) {
  				if (!_defLookup[p].func) {
  					window.console.log("GSAP encountered missing dependency: " + p);
  				}
  			}
  		}

  		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

  })((module.exports && typeof(commonjsGlobal) !== "undefined") ? commonjsGlobal : commonjsGlobal || window, "TweenMax");
  });

  var canvasColorTracker_min = createCommonjsModule(function (module, exports) {
  // Version 1.0.1 canvas-color-tracker - https://github.com/vasturiano/canvas-color-tracker
  !function(t,r){module.exports=r();}(commonjsGlobal,function(){var a=function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,i=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(e.push(s.value),!r||e.length!==r);n=!0);}catch(t){i=!0,o=t;}finally{try{!n&&u.return&&u.return();}finally{if(i)throw o}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t=function(){function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}return function(t,r,e){return r&&n(t.prototype,r),e&&n(t,e),t}}();var c=function(t,r){return 123*t%Math.pow(2,r)};return function(){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:6;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.csBits=t,this.registry=["__reserved for background__"];}return t(r,[{key:"register",value:function(t){if(this.registry.length>=Math.pow(2,24-this.csBits))return null;var r,e=this.registry.length,n=c(e,this.csBits),i=(r=e+(n<<24-this.csBits),"#"+Math.min(r,Math.pow(2,24)).toString(16).padStart(6,"0"));return this.registry.push(t),i}},{key:"lookup",value:function(t){var r=a(t,3),e=r[0],n=r[1],i=r[2],o=(e<<16)+(n<<8)+i;if(!o)return null;var s=o&Math.pow(2,24-this.csBits)-1,u=o>>24-this.csBits&Math.pow(2,this.csBits)-1;return c(s,this.csBits)!==u||s>=this.registry.length?null:this.registry[s]}}]),r}()});
  });

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".graph-tooltip {\n  position: absolute;\n  transform: translate(-50%, 25px);\n  font-family: Sans-serif;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 3px;\n  color: lavender;\n  background: midnightblue;\n  opacity: 0.7;\n  visibility: hidden; /* by default */\n}\n\n.grabbable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.grabbable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n";
  styleInject(css);

  // Autoset attribute colorField by colorByAccessor property
  // If an object has already a color, don't set it
  // Objects can be nodes or links
  function autoColorObjects(objects, colorByAccessor, colorField) {
    if (!colorByAccessor || typeof colorField !== 'string') return;

    var colors = schemePaired; // Paired color set from color brewer

    var uncoloredObjects = objects.filter(function (obj) {
      return !obj[colorField];
    });
    var objGroups = {};

    uncoloredObjects.forEach(function (obj) {
      objGroups[colorByAccessor(obj)] = null;
    });
    Object.keys(objGroups).forEach(function (group, idx) {
      objGroups[group] = idx;
    });

    uncoloredObjects.forEach(function (obj) {
      obj[colorField] = colors[objGroups[colorByAccessor(obj)] % colors.length];
    });
  }

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  //

  var CanvasForceGraph = Kapsule({

    props: {
      graphData: {
        default: {
          nodes: [],
          links: []
        },
        onChange: function onChange(_, state) {
          state.engineRunning = false;
        } // Pause simulation

      },
      nodeRelSize: { default: 4, triggerUpdate: false }, // area per val unit
      nodeId: { default: 'id' },
      nodeVal: { default: 'val', triggerUpdate: false },
      nodeColor: { default: 'color', triggerUpdate: false },
      nodeAutoColorBy: {},
      nodeCanvasObject: { triggerUpdate: false },
      linkSource: { default: 'source' },
      linkTarget: { default: 'target' },
      linkColor: { default: 'color', triggerUpdate: false },
      linkAutoColorBy: {},
      linkWidth: { default: 1, triggerUpdate: false },
      linkCurvature: { default: 0, triggerUpdate: false },
      linkDirectionalArrowLength: { default: 0, triggerUpdate: false },
      linkDirectionalArrowColor: { triggerUpdate: false },
      linkDirectionalArrowRelPos: { default: 0.5, triggerUpdate: false }, // value between 0<>1 indicating the relative pos along the (exposed) line
      linkDirectionalParticles: { default: 0 }, // animate photons travelling in the link direction
      linkDirectionalParticleSpeed: { default: 0.01, triggerUpdate: false }, // in link length ratio per frame
      linkDirectionalParticleWidth: { default: 4, triggerUpdate: false },
      linkDirectionalParticleColor: { triggerUpdate: false },
      globalScale: { default: 1, triggerUpdate: false },
      d3AlphaDecay: { default: 0.0228, triggerUpdate: false, onChange: function onChange(alphaDecay, state) {
          state.forceLayout.alphaDecay(alphaDecay);
        }
      },
      d3AlphaTarget: { default: 0, triggerUpdate: false, onChange: function onChange(alphaTarget, state) {
          state.forceLayout.alphaTarget(alphaTarget);
        }
      },
      d3VelocityDecay: { default: 0.4, triggerUpdate: false, onChange: function onChange(velocityDecay, state) {
          state.forceLayout.velocityDecay(velocityDecay);
        }
      },
      warmupTicks: { default: 0, triggerUpdate: false }, // how many times to tick the force engine at init before starting to render
      cooldownTicks: { default: Infinity, triggerUpdate: false },
      cooldownTime: { default: 15000, triggerUpdate: false }, // ms
      onLoading: { default: function _default() {}, triggerUpdate: false },
      onFinishLoading: { default: function _default() {}, triggerUpdate: false },
      onEngineTick: { default: function _default() {}, triggerUpdate: false },
      onEngineStop: { default: function _default() {}, triggerUpdate: false },
      isShadow: { default: false, triggerUpdate: false }
    },

    methods: {
      // Expose d3 forces for external manipulation
      d3Force: function d3Force(state, forceName, forceFn) {
        if (forceFn === undefined) {
          return state.forceLayout.force(forceName); // Force getter
        }
        state.forceLayout.force(forceName, forceFn); // Force setter
        return this;
      },
      // reset cooldown state
      resetCountdown: function resetCountdown(state) {
        state.cntTicks = 0;
        state.startTickTime = new Date();
        state.engineRunning = true;
        return this;
      },
      tickFrame: function tickFrame(state) {
        layoutTick();
        paintLinks();
        paintArrows();
        paintPhotons();
        paintNodes();

        return this;

        //

        function layoutTick() {
          if (state.engineRunning) {
            if (++state.cntTicks > state.cooldownTicks || new Date() - state.startTickTime > state.cooldownTime) {
              state.engineRunning = false; // Stop ticking graph
              state.onEngineStop();
            } else {
              state.forceLayout.tick(); // Tick it
              state.onEngineTick();
            }
          }
        }

        function paintNodes() {
          var getVal = accessorFn(state.nodeVal);
          var getColor = accessorFn(state.nodeColor);
          var ctx = state.ctx;

          // Draw wider nodes by 1px on shadow canvas for more precise hovering (due to boundary anti-aliasing)
          var padAmount = state.isShadow / state.globalScale;

          ctx.save();
          state.graphData.nodes.forEach(function (node) {
            if (state.nodeCanvasObject) {
              // Custom node paint
              state.nodeCanvasObject(node, state.ctx, state.globalScale);
              return;
            }

            // Draw wider nodes by 1px on shadow canvas for more precise hovering (due to boundary anti-aliasing)
            var r = Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize + padAmount;

            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
            ctx.fillStyle = getColor(node) || 'rgba(31, 120, 180, 0.92)';
            ctx.fill();
          });
          ctx.restore();
        }

        function paintLinks() {
          var getColor = accessorFn(state.linkColor);
          var getWidth = accessorFn(state.linkWidth);
          var getCurvature = accessorFn(state.linkCurvature);
          var ctx = state.ctx;

          // Draw wider lines by 2px on shadow canvas for more precise hovering (due to boundary anti-aliasing)
          var padAmount = state.isShadow * 2;

          ctx.save();

          // Bundle strokes per unique color/width for performance optimization
          var linksPerColor = indexBy(state.graphData.links, [getColor, getWidth]);

          Object.entries(linksPerColor).forEach(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                color = _ref2[0],
                linksPerWidth = _ref2[1];

            var lineColor = !color || color === 'undefined' ? 'rgba(0,0,0,0.15)' : color;
            Object.entries(linksPerWidth).forEach(function (_ref3) {
              var _ref4 = slicedToArray(_ref3, 2),
                  width = _ref4[0],
                  links = _ref4[1];

              var lineWidth = (width || 1) / state.globalScale + padAmount;

              ctx.beginPath();
              links.forEach(function (link) {
                var start = link.source;
                var end = link.target;
                if (!start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

                var curvature = getCurvature(link);

                ctx.moveTo(start.x, start.y);

                if (!curvature) {
                  // Straight line
                  ctx.lineTo(end.x, end.y);
                  link.__controlPoints = null;
                  return;
                }

                var l = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)); // line length

                if (l > 0) {
                  var a = Math.atan2(end.y - start.y, end.x - start.x); // line angle
                  var d = l * curvature; // control point distance

                  var cp = { // control point
                    x: (start.x + end.x) / 2 + d * Math.cos(a - Math.PI / 2),
                    y: (start.y + end.y) / 2 + d * Math.sin(a - Math.PI / 2)
                  };
                  ctx.quadraticCurveTo(cp.x, cp.y, end.x, end.y);

                  link.__controlPoints = [cp.x, cp.y];
                } else {
                  // Same point, draw a loop
                  var _d = curvature * 70;
                  var cps = [end.x, end.y - _d, end.x + _d, end.y];
                  ctx.bezierCurveTo.apply(ctx, cps.concat([end.x, end.y]));

                  link.__controlPoints = cps;
                }
              });
              ctx.strokeStyle = lineColor;
              ctx.lineWidth = lineWidth;
              ctx.stroke();
            });
          });

          ctx.restore();
        }

        function paintArrows() {
          var ARROW_WH_RATIO = 1.6;
          var ARROW_VLEN_RATIO = 0.2;

          var getLength = accessorFn(state.linkDirectionalArrowLength);
          var getRelPos = accessorFn(state.linkDirectionalArrowRelPos);
          var getColor = accessorFn(state.linkDirectionalArrowColor || state.linkColor);
          var getNodeVal = accessorFn(state.nodeVal);
          var ctx = state.ctx;

          ctx.save();
          state.graphData.links.forEach(function (link) {
            var arrowLength = getLength(link);
            if (!arrowLength || arrowLength < 0) return;

            var start = link.source;
            var end = link.target;

            if (!start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

            var startR = Math.sqrt(Math.max(0, getNodeVal(start) || 1)) * state.nodeRelSize;
            var endR = Math.sqrt(Math.max(0, getNodeVal(end) || 1)) * state.nodeRelSize;

            var arrowRelPos = Math.min(1, Math.max(0, getRelPos(link)));
            var arrowColor = getColor(link) || 'rgba(0,0,0,0.28)';
            var arrowHalfWidth = arrowLength / ARROW_WH_RATIO / 2;

            // Construct bezier for curved lines
            var bzLine = link.__controlPoints && new (Function.prototype.bind.apply(bezierJs, [null].concat([start.x, start.y], toConsumableArray(link.__controlPoints), [end.x, end.y])))();

            var getCoordsAlongLine = bzLine ? function (t) {
              return bzLine.get(t);
            } // get position along bezier line
            : function (t) {
              return { // straight line: interpolate linearly
                x: start.x + (end.x - start.x) * t || 0,
                y: start.y + (end.y - start.y) * t || 0
              };
            };

            var lineLen = bzLine ? bzLine.length() : Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));

            var posAlongLine = startR + arrowLength + (lineLen - startR - endR - arrowLength) * arrowRelPos;

            var arrowHead = getCoordsAlongLine(posAlongLine / lineLen);
            var arrowTail = getCoordsAlongLine((posAlongLine - arrowLength) / lineLen);
            var arrowTailVertex = getCoordsAlongLine((posAlongLine - arrowLength * (1 - ARROW_VLEN_RATIO)) / lineLen);

            var arrowTailAngle = Math.atan2(arrowHead.y - arrowTail.y, arrowHead.x - arrowTail.x) - Math.PI / 2;

            ctx.beginPath();

            ctx.moveTo(arrowHead.x, arrowHead.y);
            ctx.lineTo(arrowTail.x + arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y + arrowHalfWidth * Math.sin(arrowTailAngle));
            ctx.lineTo(arrowTailVertex.x, arrowTailVertex.y);
            ctx.lineTo(arrowTail.x - arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y - arrowHalfWidth * Math.sin(arrowTailAngle));

            ctx.fillStyle = arrowColor;
            ctx.fill();
          });
          ctx.restore();
        }

        function paintPhotons() {
          var getNumPhotons = accessorFn(state.linkDirectionalParticles);
          var getSpeed = accessorFn(state.linkDirectionalParticleSpeed);
          var getDiameter = accessorFn(state.linkDirectionalParticleWidth);
          var getColor = accessorFn(state.linkDirectionalParticleColor || state.linkColor);
          var ctx = state.ctx;

          ctx.save();
          state.graphData.links.forEach(function (link) {
            if (!getNumPhotons(link)) return;

            var start = link.source;
            var end = link.target;

            if (!start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

            var particleSpeed = getSpeed(link);
            var photons = link.__photons || [];
            var photonR = Math.max(0, getDiameter(link) / 2) / Math.sqrt(state.globalScale);
            var photonColor = getColor(link) || 'rgba(0,0,0,0.28)';

            ctx.fillStyle = photonColor;

            // Construct bezier for curved lines
            var bzLine = link.__controlPoints ? new (Function.prototype.bind.apply(bezierJs, [null].concat([start.x, start.y], toConsumableArray(link.__controlPoints), [end.x, end.y])))() : null;

            photons.forEach(function (photon, idx) {
              var photonPosRatio = photon.__progressRatio = ((photon.__progressRatio || idx / photons.length) + particleSpeed) % 1;

              var coords = bzLine ? bzLine.get(photonPosRatio) // get position along bezier line
              : { // straight line: interpolate linearly
                x: start.x + (end.x - start.x) * photonPosRatio || 0,
                y: start.y + (end.y - start.y) * photonPosRatio || 0
              };

              ctx.beginPath();
              ctx.arc(coords.x, coords.y, photonR, 0, 2 * Math.PI, false);
              ctx.fill();
            });
          });
          ctx.restore();
        }
      }
    },

    stateInit: function stateInit() {
      return {
        forceLayout: forceSimulation().force('link', forceLink()).force('charge', forceManyBody()).force('center', forceCenter()).stop(),
        engineRunning: false
      };
    },

    init: function init(canvasCtx, state) {
      // Main canvas object to manipulate
      state.ctx = canvasCtx;
    },
    update: function update(state) {
      state.engineRunning = false; // Pause simulation
      state.onLoading();

      if (state.nodeAutoColorBy !== null) {
        // Auto add color to uncolored nodes
        autoColorObjects(state.graphData.nodes, accessorFn(state.nodeAutoColorBy), state.nodeColor);
      }
      if (state.linkAutoColorBy !== null) {
        // Auto add color to uncolored links
        autoColorObjects(state.graphData.links, accessorFn(state.linkAutoColorBy), state.linkColor);
      }

      // parse links
      state.graphData.links.forEach(function (link) {
        link.source = link[state.linkSource];
        link.target = link[state.linkTarget];
      });

      // Add photon particles
      var linkParticlesAccessor = accessorFn(state.linkDirectionalParticles);
      state.graphData.links.forEach(function (link) {
        var numPhotons = Math.round(Math.abs(linkParticlesAccessor(link)));
        if (numPhotons) {
          link.__photons = [].concat(toConsumableArray(Array(numPhotons))).map(function () {
            return {};
          });
        }
      });

      // Feed data to force-directed layout
      state.forceLayout.stop().alpha(1) // re-heat the simulation
      .nodes(state.graphData.nodes);

      // add links (if link force is still active)
      var linkForce = state.forceLayout.force('link');
      if (linkForce) {
        linkForce.id(function (d) {
          return d[state.nodeId];
        }).links(state.graphData.links);
      }

      for (var i = 0; i < state.warmupTicks; i++) {
        state.forceLayout.tick();
      } // Initial ticks before starting to render

      this.resetCountdown();
      state.onFinishLoading();
    }
  });

  function linkKapsule (kapsulePropNames, kapsuleType) {

    var propNames = kapsulePropNames instanceof Array ? kapsulePropNames : [kapsulePropNames];

    var dummyK = new kapsuleType(); // To extract defaults

    return {
      linkProp: function linkProp(prop) {
        // link property config
        return {
          default: dummyK[prop](),
          onChange: function onChange(v, state) {
            propNames.forEach(function (propName) {
              return state[propName][prop](v);
            });
          },

          triggerUpdate: false
        };
      },
      linkMethod: function linkMethod(method) {
        // link method pass-through
        return function (state) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var returnVals = [];
          propNames.forEach(function (propName) {
            var kapsuleInstance = state[propName];
            var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);

            if (returnVal !== kapsuleInstance) {
              returnVals.push(returnVal);
            }
          });

          return returnVals.length ? returnVals[0] : this; // chain based on the parent object, not the inner kapsule
        };
      }
    };
  }

  var HOVER_CANVAS_THROTTLE_DELAY = 800; // ms to throttle shadow canvas updates for perf improvement
  var ZOOM2NODES_FACTOR = 4;

  // Expose config from forceGraph
  var bindFG = linkKapsule('forceGraph', CanvasForceGraph);
  var bindBoth = linkKapsule(['forceGraph', 'shadowGraph'], CanvasForceGraph);
  var linkedProps = Object.assign.apply(Object, toConsumableArray(['nodeColor', 'nodeAutoColorBy', 'nodeCanvasObject', 'linkColor', 'linkAutoColorBy', 'linkWidth', 'linkDirectionalArrowLength', 'linkDirectionalArrowColor', 'linkDirectionalArrowRelPos', 'linkDirectionalParticles', 'linkDirectionalParticleSpeed', 'linkDirectionalParticleWidth', 'linkDirectionalParticleColor', 'd3AlphaDecay', 'd3VelocityDecay', 'warmupTicks', 'cooldownTicks', 'cooldownTime', 'onEngineTick', 'onEngineStop'].map(function (p) {
    return defineProperty({}, p, bindFG.linkProp(p));
  })).concat(toConsumableArray(['nodeRelSize', 'nodeId', 'nodeVal', 'linkSource', 'linkTarget', 'linkCurvature'].map(function (p) {
    return defineProperty({}, p, bindBoth.linkProp(p));
  }))));
  var linkedMethods = Object.assign.apply(Object, toConsumableArray(['d3Force'].map(function (p) {
    return defineProperty({}, p, bindFG.linkMethod(p));
  })));

  function adjustCanvasSize(state) {
    if (state.canvas) {
      var curWidth = state.canvas.width;
      var curHeight = state.canvas.height;
      if (curWidth === 300 && curHeight === 150) {
        // Default canvas dimensions
        curWidth = curHeight = 0;
      }

      var pxScale = window.devicePixelRatio; // 2 on retina displays
      curWidth /= pxScale;
      curHeight /= pxScale;

      // Resize canvases
      [state.canvas, state.shadowCanvas].forEach(function (canvas) {
        // Element size
        canvas.style.width = state.width + 'px';
        canvas.style.height = state.height + 'px';

        // Memory size (scaled to avoid blurriness)
        canvas.width = state.width * pxScale;
        canvas.height = state.height * pxScale;

        // Normalize coordinate system to use css pixels (on init only)
        if (!curWidth && !curHeight) {
          canvas.getContext('2d').scale(pxScale, pxScale);
        }
      });

      // Relative center panning based on 0,0
      var k = transform(state.canvas).k;
      state.zoom.translateBy(state.zoom.__baseElem, (state.width - curWidth) / 2 / k, (state.height - curHeight) / 2 / k);
    }
  }

  function resetTransform(ctx) {
    var pxRatio = window.devicePixelRatio;
    ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
  }

  function clearCanvas(ctx, width, height) {
    ctx.save();
    resetTransform(ctx); // reset transform
    ctx.clearRect(0, 0, width, height);
    ctx.restore(); //restore transforms
  }

  //

  var forceGraph = Kapsule({
    props: _extends({
      width: { default: window.innerWidth, onChange: function onChange(_, state) {
          return adjustCanvasSize(state);
        }, triggerUpdate: false },
      height: { default: window.innerHeight, onChange: function onChange(_, state) {
          return adjustCanvasSize(state);
        }, triggerUpdate: false },
      graphData: {
        default: { nodes: [], links: [] },
        onChange: function onChange(d, state) {
          if (d.nodes.length || d.links.length) {
            console.info('force-graph loading', d.nodes.length + ' nodes', d.links.length + ' links');
          }

          [{ type: 'Node', objs: d.nodes }, { type: 'Link', objs: d.links }].forEach(hexIndex);
          state.forceGraph.graphData(d);
          state.shadowGraph.graphData(d);

          function hexIndex(_ref4) {
            var type = _ref4.type,
                objs = _ref4.objs;

            objs.filter(function (d) {
              return !d.hasOwnProperty('__indexColor');
            }).forEach(function (d) {
              // store object lookup color
              d.__indexColor = state.colorTracker.register({ type: type, d: d });
            });
          }
        },
        triggerUpdate: false
      },
      backgroundColor: {
        onChange: function onChange(color, state) {
          state.canvas && color && (state.canvas.style.background = color);
        },
        triggerUpdate: false },
      nodeLabel: { default: 'name', triggerUpdate: false },
      linkLabel: { default: 'name', triggerUpdate: false },
      linkHoverPrecision: { default: 4, triggerUpdate: false },
      enableNodeDrag: { default: true, triggerUpdate: false },
      enableZoomPanInteraction: { default: true, triggerUpdate: false },
      enablePointerInteraction: { default: true, onChange: function onChange(_, state) {
          state.hoverObj = null;
        },
        triggerUpdate: false },
      onNodeClick: { default: function _default() {}, triggerUpdate: false },
      onNodeHover: { default: function _default() {}, triggerUpdate: false },
      onLinkClick: { default: function _default() {}, triggerUpdate: false },
      onLinkHover: { default: function _default() {}, triggerUpdate: false }
    }, linkedProps),

    methods: _extends({
      centerAt: function centerAt(state, x, y, transitionDuration) {
        if (!state.canvas) return null; // no canvas yet

        // setter
        if (x !== undefined || y !== undefined) {
          var finalPos = Object.assign({}, x !== undefined ? { x: x } : {}, y !== undefined ? { y: y } : {});
          if (!transitionDuration) {
            // no animation
            setCenter(finalPos);
          } else {
            var coords = getCenter();
            TweenMax.to(coords, transitionDuration / 1000, Object.assign({ onUpdate: function onUpdate() {
                return setCenter(coords);
              } }, finalPos));
          }
          return this;
        }

        // getter
        return getCenter();

        //

        function getCenter() {
          var t = transform(state.canvas);
          return { x: (state.width / 2 - t.x) / t.k, y: (state.height / 2 - t.y) / t.k };
        }

        function setCenter(_ref5) {
          var x = _ref5.x,
              y = _ref5.y;

          state.zoom.translateTo(state.zoom.__baseElem, x === undefined ? getCenter().x : x, y === undefined ? getCenter().y : y);
        }
      },
      zoom: function zoom$$1(state, k, transitionDuration) {
        if (!state.canvas) return null; // no canvas yet

        // setter
        if (k !== undefined) {
          if (!transitionDuration) {
            // no animation
            setZoom(k);
          } else {
            var scale = { k: getZoom() };
            TweenMax.to(scale, transitionDuration / 1000, { k: k, onUpdate: function onUpdate() {
                return setZoom(scale.k);
              } });
          }
          return this;
        }

        // getter
        return getZoom();

        //

        function getZoom() {
          return transform(state.canvas).k;
        }

        function setZoom(k) {
          state.zoom.scaleTo(state.zoom.__baseElem, k);
        }
      },
      stopAnimation: function stopAnimation(state) {
        if (state.animationFrameRequestId) {
          cancelAnimationFrame(state.animationFrameRequestId);
        }
        return this;
      }
    }, linkedMethods),

    stateInit: function stateInit() {
      return {
        lastSetZoom: 1,
        forceGraph: new CanvasForceGraph(),
        shadowGraph: new CanvasForceGraph().cooldownTicks(0).nodeColor('__indexColor').linkColor('__indexColor').isShadow(true),
        colorTracker: new canvasColorTracker_min() // indexed objects for rgb lookup
      };
    },

    init: function init(domNode, state) {
      // Wipe DOM
      domNode.innerHTML = '';

      state.canvas = document.createElement('canvas');
      if (state.backgroundColor) state.canvas.style.background = state.backgroundColor;
      domNode.appendChild(state.canvas);

      state.shadowCanvas = document.createElement('canvas');

      // Show shadow canvas
      //state.shadowCanvas.style.position = 'absolute';
      //state.shadowCanvas.style.top = '0';
      //state.shadowCanvas.style.left = '0';
      //domNode.appendChild(state.shadowCanvas);

      var ctx = state.canvas.getContext('2d');
      var shadowCtx = state.shadowCanvas.getContext('2d');

      // Setup node drag interaction
      select(state.canvas).call(drag().subject(function () {
        if (!state.enableNodeDrag) {
          return null;
        }
        var obj = state.hoverObj;
        return obj && obj.type === 'Node' ? obj.d : null; // Only drag nodes
      }).on('start', function () {
        var obj = event.subject;
        obj.__initialDragPos = { x: obj.x, y: obj.y, fx: obj.fx, fy: obj.fy };

        // keep engine running at low intensity throughout drag
        if (!event.active) {
          state.forceGraph.d3AlphaTarget(0.3); // keep engine running at low intensity throughout drag
          obj.fx = obj.x;obj.fy = obj.y; // Fix points
        }

        // drag cursor
        state.canvas.classList.add('grabbable');
      }).on('drag', function () {
        var obj = event.subject;
        var initPos = obj.__initialDragPos;
        var dragPos = event;

        var k = transform(state.canvas).k;

        // Move fx/fy (and x/y) of nodes based on the scaled drag distance since the drag start
        ['x', 'y'].forEach(function (c) {
          return obj['f' + c] = obj[c] = initPos[c] + (dragPos[c] - initPos[c]) / k;
        });

        // prevent freeze while dragging
        state.forceGraph.resetCountdown();
      }).on('end', function () {
        var obj = event.subject;
        var initPos = obj.__initialDragPos;

        if (initPos.fx === undefined) {
          obj.fx = undefined;
        }
        if (initPos.fy === undefined) {
          obj.fy = undefined;
        }
        delete obj.__initialDragPos;

        state.forceGraph.d3AlphaTarget(0) // release engine low intensity
        .resetCountdown(); // let the engine readjust after releasing fixed nodes

        // drag cursor
        state.canvas.classList.remove('grabbable');
      }));

      // Setup zoom / pan interaction
      state.zoom = zoom();
      state.zoom(state.zoom.__baseElem = select(state.canvas)); // Attach controlling elem for easy access

      state.zoom.filter(function () {
        return state.enableZoomPanInteraction ? !event.button : false;
      }) // disable zoom interaction
      .scaleExtent([0.01, 1000]).on('zoom', function () {
        var t = transform(this); // Same as d3.event.transform
        [ctx, shadowCtx].forEach(function (c) {
          resetTransform(c);
          c.translate(t.x, t.y);
          c.scale(t.k, t.k);
        });
      });

      adjustCanvasSize(state);

      state.forceGraph.onFinishLoading(function () {
        // re-zoom, if still in default position (not user modified)
        if (transform(state.canvas).k === state.lastSetZoom) {
          state.zoom.scaleTo(state.zoom.__baseElem, state.lastSetZoom = ZOOM2NODES_FACTOR / Math.cbrt(state.graphData.nodes.length));
        }
      });

      // Setup tooltip
      var toolTipElem = document.createElement('div');
      toolTipElem.classList.add('graph-tooltip');
      domNode.appendChild(toolTipElem);

      // Capture mouse coords on move
      var mousePos = { x: -1e12, y: -1e12 };
      state.canvas.addEventListener("mousemove", function (ev) {
        // update the mouse pos
        var offset = getOffset(domNode);
        mousePos.x = ev.pageX - offset.left;
        mousePos.y = ev.pageY - offset.top;

        // Move tooltip
        toolTipElem.style.top = mousePos.y + 'px';
        toolTipElem.style.left = mousePos.x + 'px';

        //

        function getOffset(el) {
          var rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
      }, false);

      // Handle click events on nodes
      domNode.addEventListener("click", function (ev) {
        if (state.hoverObj) {
          state['on' + state.hoverObj.type + 'Click'](state.hoverObj.d);
        }
      }, false);

      state.forceGraph(ctx);
      state.shadowGraph(shadowCtx);

      //

      var refreshShadowCanvas = lodash_throttle(function () {
        // wipe canvas
        clearCanvas(shadowCtx, state.width, state.height);

        // Adjust link hover area
        state.shadowGraph.linkWidth(function (l) {
          return accessorFn(state.linkWidth)(l) + state.linkHoverPrecision;
        });

        // redraw
        var t = transform(state.canvas);
        state.shadowGraph.globalScale(t.k).tickFrame();
      }, HOVER_CANVAS_THROTTLE_DELAY);

      // Kick-off renderer
      (function animate() {
        // IIFE
        if (state.enablePointerInteraction) {
          // Update tooltip and trigger onHover events

          // Lookup object per pixel color
          var pxScale = window.devicePixelRatio;
          var px = shadowCtx.getImageData(mousePos.x * pxScale, mousePos.y * pxScale, 1, 1);
          var obj = px ? state.colorTracker.lookup(px.data) : null;

          if (obj !== state.hoverObj) {
            var prevObj = state.hoverObj;
            var prevObjType = prevObj ? prevObj.type : null;
            var objType = obj ? obj.type : null;

            if (prevObjType && prevObjType !== objType) {
              // Hover out
              state['on' + prevObjType + 'Hover'](null, prevObj.d);
            }
            if (objType) {
              // Hover in
              state['on' + objType + 'Hover'](obj.d, prevObjType === objType ? prevObj.d : null);
            }

            var tooltipContent = obj ? accessorFn(state[obj.type.toLowerCase() + 'Label'])(obj.d) || '' : '';
            toolTipElem.style.visibility = tooltipContent ? 'visible' : 'hidden';
            toolTipElem.innerHTML = tooltipContent;

            state.hoverObj = obj;
          }

          refreshShadowCanvas();
        }

        // Wipe canvas
        clearCanvas(ctx, state.width, state.height);

        // Frame cycle
        var t = transform(state.canvas);
        state.forceGraph.globalScale(t.k).tickFrame();

        state.animationFrameRequestId = requestAnimationFrame(animate);
      })();
    },

    update: function updateFn(state) {}
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );

          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  }
  });

  var commonPropTypes = {
    width: propTypes.number,
    height: propTypes.number,
    graphData: propTypes.shape({
      nodes: propTypes.arrayOf(propTypes.object).isRequired,
      links: propTypes.arrayOf(propTypes.object).isRequired
    }),
    backgroundColor: propTypes.string,
    nodeRelSize: propTypes.number,
    nodeId: propTypes.string,
    nodeLabel: propTypes.oneOfType([propTypes.string, propTypes.func]),
    nodeVal: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    nodeColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    nodeAutoColorBy: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkSource: propTypes.string,
    linkTarget: propTypes.string,
    linkLabel: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkHoverPrecision: propTypes.number,
    linkColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkAutoColorBy: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkWidth: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkCurvature: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalArrowLength: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalArrowColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkDirectionalArrowRelPos: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticles: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticleSpeed: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticleWidth: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticleColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    d3AlphaDecay: propTypes.number,
    d3VelocityDecay: propTypes.number,
    warmupTicks: propTypes.number,
    cooldownTicks: propTypes.number,
    cooldownTime: propTypes.number,
    onEngineTick: propTypes.func,
    onEngineStop: propTypes.func
  };

  var pointerBasedPropTypes = {
    onNodeClick: propTypes.func,
    onLinkClick: propTypes.func,
    onNodeHover: propTypes.func,
    onLinkHover: propTypes.func,
    enablePointerInteraction: propTypes.bool,
    enableNodeDrag: propTypes.bool
  };

  var threeBasedPropTypes = {
    showNavInfo: propTypes.bool,
    nodeOpacity: propTypes.number,
    nodeResolution: propTypes.number,
    nodeThreeObject: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    linkOpacity: propTypes.number,
    linkResolution: propTypes.number,
    linkCurveRotation: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkMaterial: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    linkDirectionalArrowResolution: propTypes.number,
    linkDirectionalParticleResolution: propTypes.number,
    forceEngine: propTypes.oneOf(['d3', 'ngraph']),
    numDimensions: propTypes.oneOf([1, 2, 3])
  };

  var ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
    nodeCanvasObject: propTypes.func,
    enableZoomPanInteraction: propTypes.bool
  });

  var ForceGraph3DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
    enableNavigationControls: propTypes.bool
  });

  var ForceGraphVRPropTypes = Object.assign({}, commonPropTypes, threeBasedPropTypes, {
    nodeDesc: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkDesc: propTypes.oneOfType([propTypes.string, propTypes.func])
  });

  var ForceGraph2D = index(forceGraph, undefined, ['d3Force', 'stopAnimation', 'centerAt', 'zoom'] // bind methods
  );

  ForceGraph2D.displayName = 'ForceGraph2D';
  ForceGraph2D.propTypes = ForceGraph2DPropTypes;

  // Load VR first to avoid three.js collisions

  exports.ForceGraph2D = ForceGraph2D;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-force-graph-2d-only.js.map
