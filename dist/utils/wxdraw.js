/*eslint-disable*/
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Line(t) {
  var i = _extends({ strokeStyle: "#000000", points: [[1, 2], [23, 45], [2, 45], [230, 205]] }, commonAttr()),
      n = _extends({ smooth: !0 }, commonUnAttr()),
      s = util.extend(t, i),
      e = util.extend(t, n);this.Option = s, this.UnOption = e, this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.massCenter = this.genMassCenter(this.Option.points), this.posPoints = this.genPointsPositiveLoc(), this.oriPoints = this.Option.points, this._Points = this.Option.points, this._CurvePoints = this.Option.points, this.detectPoints = this.getDetectPoints(), this.getMax(), this._isChoosed = !1, this.rotateOrigin = null, this._dirty = !0, this._type = "line", this._canRotateOrigin = !0;
}function Watch() {
  this.startTime = 0, this.running = !1, this.goesBytime = 0, this.goesBy = void 0, this.DEFAULT_ELASTIC = 2;
}function genExe(t, i, n) {
  if (specialAtrr[i]) return specialAtrr[i].getIncre(specialAtrr[i].get(n.Shape.Option[i]), t, n);if (!isNaN(Number(t))) return n.Shape.Option[i] || 0 === n.Shape.Option[i] ? parseFloat(t) - parseFloat(n.Shape.Option[i]) : parseFloat(t) - parseFloat(n.Shape[specialOption[n.type][i]][i]);if (0 == t.indexOf("+=")) {
    return t.split("=")[1];
  }if (0 == t.indexOf("-=")) {
    return -1 * t.split("=")[1];
  }
}function fakeAnimationFrame(t) {
  var i;setTimeout(function () {
    i = +new Date(), t(i);
  }, 16);
}function WxDraw(t, i, n, s, e) {
  this.canvas = t, this.wcid = guid(), this.store = new Store(), this.bus = new eventBus(), this.animation = new Animation(this.bus), this.x = i, this.y = n, this.w = s, this.h = e, this.bus.add("addAnimation", this, this.addAnimationFrag), this.bus.add("update", this, this.update), this.bus.add("getDetectedLayers", this, this.getDetectedLayers), this.bus.add("clearDetectedLayers", this, this.clearDetectedLayers), this.bus.add("updateLayer", this, this.updateLayer), this.bus.add("destory", this, this.destroy), this.animation.start(), Shape.bus = this.bus, this.detectedLayers = [];
}var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
},
    classCallCheck = function classCallCheck(t, i) {
  if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
},
    createClass = function () {
  function t(t, i) {
    for (var n = 0; n < i.length; n++) {
      var s = i[n];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
  }return function (i, n, s) {
    return n && t(i.prototype, n), s && t(i, s), i;
  };
}(),
    _extends = Object.assign || function (t) {
  for (var i = 1; i < arguments.length; i++) {
    var n = arguments[i];for (var s in n) {
      Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
  }return t;
},
    toConsumableArray = function toConsumableArray(t) {
  if (Array.isArray(t)) {
    for (var i = 0, n = Array(t.length); i < t.length; i++) {
      n[i] = t[i];
    }return n;
  }return Array.from(t);
},
    guid = function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
    var i = 16 * Math.random() | 0;return ("x" == t ? i : 3 & i | 8).toString(16);
  });
},
    util = { mix: function mix(t, i, n) {
    t = "prototype" in t ? t.prototype : t, i = "prototype" in i ? i.prototype : i, this.extend(t, i, n);
  }, extend: function extend(t, i, n) {
    var s = util.clone(i);if (n) for (var e in t) {
      t.hasOwnProperty(e) && ("object" != _typeof(i[e]) || i[e] instanceof Array ? s[e] = t[e] : s[e] = util.extend(t[e], s[e], !0));
    } else for (var e in t) {
      i.hasOwnProperty(e) && ("object" != _typeof(i[e]) || i[e] instanceof Array ? s[e] = t[e] : s[e] = util.extend(t[e], s[e]));
    }return s;
  }, clone: function clone(t) {
    function i(t) {
      var n = {};for (var s in t) {
        t.hasOwnProperty(s) && "object" !== _typeof(t[s]) && (n[s] = t[s]), t.hasOwnProperty(s) && "object" === _typeof(t[s]) && (n[s] = i(t[s]));
      }return n;
    }return i(t);
  } },
    matrixToarray = function matrixToarray(t) {
  var i = [];return t.forEach(function (t) {
    i.push([t[0][0], t[1][0]]);
  }), i;
},
    hex2rgb = function hex2rgb(t) {
  var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i ? { r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16) } : null;
},
    rgb2hex = function rgb2hex(t, i, n) {
  return ((1 << 24) + (t << 16) + (i << 8) + n).toString(16).substr(1);
},
    objToArray = function objToArray(t) {
  var i = [];return Object.keys(t).forEach(function (n) {
    i.push(t[n]);
  }), i;
},
    Store = function Store() {
  this.store = [];
};Store.prototype = { add: function add(t) {
    this.store.push(t);
  }, update: function update() {}, delete: function _delete() {}, getLength: function getLength() {
    return this.store.length;
  }, find: function find(t, i) {
    var n = null;return 1 == arguments.length && (n = this.store[t]), 2 == arguments.length && this.store.forEach(function (s) {
      s[t] == i && (n = s);
    }, this), n;
  }, changeIndex: function changeIndex(t, i, n) {
    this.store.splice(i, 1), this.store.splice(n, 0, t);
  }, clear: function clear() {
    this.store = [];
  } };var Matrix = function () {
  function t(i) {
    classCallCheck(this, t), this.m = i.length, this.n = i[0].length, this.matrixArray = i;
  }return createClass(t, [{ key: "multi", value: function value(i) {
      var n = [];return i.m == this.n && (this.matrixArray.forEach(function (t, s) {
        n.push([]);for (var e = 0; e < i.n; e++) {
          var o = 0;t.forEach(function (t, n) {
            o += t * i.matrixArray[n][e];
          }), n[s][e] = o;
        }
      }, this), new t(n));
    } }, { key: "add", value: function value(i) {
      var n = [];if (i.m === this.m && i.n == this.n) return this.matrixArray.forEach(function (t, s) {
        n.push([]), t.forEach(function (t, e) {
          n[s][e] = t + i.matrixArray[s][e];
        });
      }), new t(n);
    } }, { key: "sub", value: function value(i) {
      var n = [];if (i.m === this.m && i.n == this.n) return this.matrixArray.forEach(function (t, s) {
        n.push([]), t.forEach(function (t, e) {
          n[s].push(t - i.matrixArray[s][e]);
        });
      }), new t(n);
    } }]), t;
}(),
    Point = function () {
  function t(i, n) {
    classCallCheck(this, t), this.x = i, this.y = n;
  }return createClass(t, [{ key: "translate", value: function value(t, i) {
      this.x += t, this.y += i;
    } }, { key: "rotate", value: function value(t, i) {
      if (t) {
        var n = -t[0] + this.x,
            s = -t[1] + this.y,
            e = new Matrix([[t[0]], [t[1]]]),
            o = new Matrix([[Math.cos(i), -Math.sin(i)], [Math.sin(i), Math.cos(i)]]),
            h = new Matrix([[n], [s]]);return o.multi(h).add(e).matrixArray;
      }
    } }, { key: "scale", value: function value() {} }]), t;
}(),
    commonAttr = function commonAttr() {
  return { lineWidth: .5, shadow: { offsetX: 5, offsetY: 5, blur: 5, color: "#000000" }, fillStyle: "#000000", strokeStyle: "#000000", rotate: 0, opacity: 1, lineDash: [[5, 5], 5], miterLimit: 3 };
},
    commonUnAttr = function commonUnAttr() {
  return { lineCap: "", lineJoin: "", miterLimit: "", gra: [], isLineDash: !1, needShadow: !1, needGra: "no" };
},
    commonMethods = { updateOption: function updateOption(t) {
    t.fillStyle && t.gra && t.gra.length && (this.UnOption.needGra, this.turnColorLock(!1)), this.Option = util.extend(t, this.Option), this.UnOption = util.extend(t, this.UnOption), this._dirty = !0, this.bus.dispatch("update", "no");
  }, restoreOption: function restoreOption(t) {
    this.Option = util.extend(t, this.Option), this.UnOption = util.extend(t, this.UnOption), this._dirty = !0;
  }, upDetect: function upDetect() {
    this._isChoosed = !1;
  }, setRotateOrigin: function setRotateOrigin(t) {
    this._canRotateOrigin ? this.rotateOrigin = t : this.rotateOrigin = null;
  }, setCommonstyle: function setCommonstyle(t) {
    var i = null,
        n = this._type;this.UnOption.lineCap && (t.setLineCap(this.UnOption.lineCap), t.setLineJoin(this.UnOption.lineJoin)), !this.UnOption.gra || this.UnOption.gra instanceof Array || (this.UnOption.gra = objToArray(this.UnOption.gra)), this.UnOption.needGra && "line" == this.UnOption.needGra && this.UnOption.gra && this.UnOption.gra.length > 0 && (this.turnColorLock(!0), i = t.createLinearGradient.apply(t, toConsumableArray(this.getGradientOption(n).lg)), this.UnOption.gra.forEach(function (t) {
      i.addColorStop(t[0], t[1]);
    }, this), t.setFillStyle(i)), this.UnOption.needGra && "circle" == this.UnOption.needGra && this.UnOption.gra && this.UnOption.gra.length > 0 && (this.turnColorLock(!0), i = t.createCircularGradient.apply(t, toConsumableArray(this.getGradientOption(n).cg)), this.UnOption.gra.forEach(function (t) {
      i.addColorStop(t[0], t[1]);
    }, this), t.setFillStyle(i)), (!this._colorLock || this.needGra && "no" == his.UnOption.needGra) && t.setFillStyle(this.Option.fillStyle), "miter" == this.UnOption.lineJoin && t.setMiterLimit(this.Option.miterLimit), t.setStrokeStyle(this.Option.strokeStyle), t.setLineWidth(this.Option.lineWidth), t.setGlobalAlpha(this.Option.opacity), this.UnOption.needShadow && this.Option.shadow && t.setShadow(this.Option.shadow.offsetX, this.Option.shadow.offsetY, this.Option.shadow.blur, this.Option.shadow.color), this.UnOption.isLineDash && t.setLineDash && (this.Option.lineDash instanceof Array || (this.Option.lineDash[0] = objToArray(this.Option.lineDash[0])), t.setLineDash(this.Option.lineDash[0], this.Option.lineDash[1]));
  }, stroke: function stroke(t) {
    return "text" == this._type ? (this.fill(t), !1) : "image" == this._type ? (this._draw(t), !1) : (t.save(), this._drawLine = !0, this._draw(t), this.setCommonstyle(t), t.stroke(), void t.restore());
  }, fill: function fill(t) {
    return "line" == this._type ? (this.stroke(t), !1) : "text" == this._type ? (t.save(), t.setGlobalAlpha(this.Option.opacity), t.beginPath(), t.setFontSize(this.Option.fontSize), t.setTextAlign(this.UnOption.align), t.setTextBaseline(this.UnOption.textBaseline), t.setFillStyle(this.Option.fillStyle), this.UnOption.needShadow && this.Option.shadow && t.setShadow(this.Option.shadow.offsetX, this.Option.shadow.offsetY, this.Option.shadow.blur, this.Option.shadow.color), this._draw(t), t.closePath(), t.restore(), !1) : "image" == this._type ? (this._draw(t), !1) : (t.save(), this._drawLine = !1, this._draw(t), this.setCommonstyle(t), t.fill(), void t.restore());
  }, mixDraw: function mixDraw(t) {
    return "line" == this._type ? (this.stroke(t), !1) : "text" == this._type ? (this.fill(t), !1) : "image" == this._type ? (this._draw(t), !1) : (t.save(), this._drawLine = !0, this._draw(t), this.setCommonstyle(t), t.fill(), t.stroke(), void t.restore());
  }, turnColorLock: function turnColorLock(t) {
    this._colorLock = !!t;
  }, getGradientOption: function getGradientOption(t) {
    return { circle: "circle" == t ? { lg: [this.Option.x - this.Option.r, 0, this.Option.x + this.Option.r, 0], cg: [this.Option.x, this.Option.y, this.Option.r] } : {}, rect: "rect" == t ? { lg: [this.Option.x - this.Option.w / 2, this.Option.y - this.Option.h / 2, this.Option.x + this.Option.w / 2, this.Option.y - this.Option.h / 2], cg: [this.Option.x, this.Option.y, Math.sqrt(Math.pow(this.Option.w / 2, 2) + Math.pow(this.Option.h / 2, 2))] } : {}, polygon: "polygon" == t ? { lg: [this.max.minX, this.max.minY, this.max.maxX, this.max.minY], cg: [this.Option.x, this.Option.y, this.Option.r] } : {}, cshape: "cshape" == t ? { lg: [this.max.minX, this.max.minY, this.max.maxX, this.max.minY], cg: [this.massCenter.x, this.massCenter.y, Math.sqrt(Math.pow((this.max.maxX - this.max.minX) / 2, 2) + Math.pow((this.max.maxY - this.max.minY) / 2, 2))] } : {}, ellipse: "ellipse" == t ? { lg: [this.max.minX, this.max.minY, this.max.maxX, this.max.minY], cg: [this.Option.x, this.Option.y, Math.sqrt(Math.pow((this.max.maxX - this.max.minX) / 2, 2) + Math.pow((this.max.maxY - this.max.minY) / 2, 2))] } : {} }[t];
  }, _drawHelperPoints: function _drawHelperPoints(t) {
    t.save(), t.setFillStyle("#F34739"), t.beginPath(), this._detectPoints ? this._detectPoints.forEach(function (i) {
      t.arc(i[0], i[1], 5, 2 * Math.PI, 0, 2 * Math.PI, !1);
    }) : this._Points.forEach(function (i) {
      t.arc(i[0], i[1], 5, 2 * Math.PI, 0, 2 * Math.PI, !1);
    }), t.closePath(), t.fill(), t.restore();
  }, closeRotateOrigin: function closeRotateOrigin() {
    this._canRotateOrigin = !1;
  } },
    Polygon = function Polygon(t) {
  var i = _extends({ x: 10, y: 10, r: 10, sides: 7 }, commonAttr()),
      n = util.extend(t, i),
      s = util.extend(t, commonUnAttr());this.Option = n, this.UnOption = s, this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.oriPoints = null, this._Points = [], this._drawLine = !1, this.detectOriPoints = [], this._detectPoints = [], this.getOriPoints(), this.getMax(this.oriPoints), this._isChoosed = !1, this.rotateOrigin = null, this._dirty = !0, this._type = "polygon", this._canRotateOrigin = !0;
};Polygon.prototype = _extends({ getOriPoints: function getOriPoints() {
    for (var t = [], i = [], n = this.Option.startAngle || 0, s = 0; s < this.Option.sides; ++s) {
      t.push([this.Option.x + this.Option.r * Math.sin(n), this.Option.y - this.Option.r * Math.cos(n)]), i.push([this.Option.x + (this.Option.r + this.Option.lineWidth / 2) * Math.sin(n), this.Option.y - (this.Option.r + this.Option.lineWidth / 2) * Math.cos(n)]), n += 2 * Math.PI / this.Option.sides;
    }this.oriPoints = t, this.detectOriPoints = i;
  }, getPoints: function getPoints() {
    var t = [],
        i = [],
        n = null;return n = this.rotateOrigin ? this.rotateOrigin : [this.Option.x, this.Option.y], this.oriPoints.forEach(function (i) {
      t.push(this.getPointTodraw(i[0], i[1], n));
    }, this), this.detectOriPoints.forEach(function (t) {
      i.push(this.getPointTodraw(t[0], t[1], n));
    }, this), this._Points = matrixToarray(t), this._detectPoints = matrixToarray(i), this._Points;
  }, getMax: function getMax() {
    var t = this._detectPoints;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, createPath: function createPath(t) {
    var i = this._Points;t.beginPath(), t.moveTo(i[0][0], i[0][1]);for (var n = 1; n < this.Option.sides; ++n) {
      t.lineTo(i[n][0], i[n][1]);
    }t.closePath();
  }, _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.getPoints(), this.getMax()), this.createPath(t), this._dirty = !1;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, move: function move(t, i) {
    this.Option.x = t, this.Option.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return t > this.max.minX && t < this.max.maxX && i > this.max.minY && i < this.max.maxY && (this._offsetX = this.Option.x - t, this._offsetY = this.Option.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0));
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    var n = !1,
        s = null;s = this._drawLine ? this._detectPoints : this._Points;for (var e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  } }, commonMethods);var Ellipse = function Ellipse(t) {
  var i = _extends({ x: 10, y: 10, a: 10, b: 10 }, commonAttr()),
      n = util.extend(t, i),
      s = util.extend(t, commonUnAttr());this.Option = n, this.UnOption = s, this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.oriPoints = null, this._Points = [], this._isChoosed = !1, this.rotateOrigin = null, this._drawLine = !1, this.detectOriPoints = [], this._detectPoints = [], this.getOriPoints(), this.getMax(), this._dirty = !0, this._type = "ellipse", this._canRotateOrigin = !0;
};Ellipse.prototype = _extends({ getOriPoints: function getOriPoints() {
    for (var t = [], i = [], n = this.Option.startAngle || 0, s = 0; s < 100; ++s) {
      t.push([this.Option.x + this.Option.a / 2 * Math.sin(n), this.Option.y - this.Option.b / 2 * Math.cos(n)]), i.push([this.Option.x + (this.Option.a / 2 + this.Option.lineWidth / 2) * Math.sin(n), this.Option.y - (this.Option.b + this.Option.lineWidth) / 2 * Math.cos(n)]), n += 2 * Math.PI / 100;
    }this.oriPoints = t, this.detectOriPoints = i;
  }, getPoints: function getPoints() {
    var t = [],
        i = [],
        n = null;return n = this.rotateOrigin ? this.rotateOrigin : [this.Option.x, this.Option.y], this.oriPoints.forEach(function (i) {
      t.push(this.getPointTodraw(i[0], i[1], n));
    }, this), this.detectOriPoints.forEach(function (t) {
      i.push(this.getPointTodraw(t[0], t[1], n));
    }, this), this._Points = matrixToarray(t), this._detectPoints = matrixToarray(i), this._Points;
  }, getMax: function getMax() {
    var t = this._detectPoints;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, createPath: function createPath(t) {
    var i = this._Points;t.beginPath(), t.moveTo(i[0][0], i[0][1]);for (var n = 1; n < 100; ++n) {
      t.lineTo(i[n][0], i[n][1]);
    }t.closePath();
  }, _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.getPoints(), this.getMax()), this.createPath(t), this._dirty = !1;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, move: function move(t, i) {
    this.Option.x = t, this.Option.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return t > this.max.minX && t < this.max.maxX && i > this.max.minY && i < this.max.maxY && (this._offsetX = this.Option.x - t, this._offsetY = this.Option.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0));
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    var n = !1,
        s = null;s = this._drawLine ? this._detectPoints : this._Points;for (var e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  } }, commonMethods);var baseline = function baseline(t, i) {
  return { normal: 2, bottom: -i / 2, middle: 0, top: i / 2 }[t];
},
    align = function align(t, i) {
  return { left: i / 2, center: 0, right: -i / 2 }[t];
},
    Text = function Text(t) {
  t.text || (t.text = "no text");var i = { x: 100, y: 200, fontSize: 12, shadow: { offsetX: 5, offsetY: 5, blur: 5, color: "#000000" }, fillStyle: "#000000", strokeStyle: "#000000", rotate: 0, opacity: 1 },
      n = { textBaseline: "normal", align: "left", needShadow: !1 };this.text = String(t.text), this.Option = util.extend(t, i), this.UnOption = util.extend(t, n), this.boxOption = { x: 0, y: 0 }, this.boxOriPoints = [], this.boxPoints = [], this.rotateOrigin = null, this.offset = { x: 0, y: 0 }, this._offsetX = 0, this._offsetY = 0, this.getOriPoints(), this.getPoints(), this._dirty = !0, this._type = "text", this._canRotateOrigin = !0;
};Text.prototype = _extends({ getOriPoints: function getOriPoints() {
    for (var t = [], i = /^[\u4e00-\u9fa5]/, n = String(this.text).length, s = 0, e = this.Option.fontSize, o = 0; o < n; o++) {
      i.test(this.text[o]) ? s += this.Option.fontSize : s += this.Option.fontSize / 2;
    }this.offset.x = align(this.UnOption.align, s), this.offset.y = baseline(this.UnOption.textBaseline, e), this.boxOption.x = this.Option.x + this.offset.x, this.boxOption.y = this.Option.y + this.offset.y, t.push([this.boxOption.x - s / 2, this.boxOption.y - e / 2]), t.push([this.boxOption.x - s / 2, this.boxOption.y + e / 2]), t.push([this.boxOption.x + s / 2, this.boxOption.y + e / 2]), t.push([this.boxOption.x + s / 2, this.boxOption.y - e / 2]), this.boxOriPoints = t;
  }, getPoints: function getPoints() {
    var t = [],
        i = null;return i = this.rotateOrigin ? this.rotateOrigin : [this.boxOption.x, this.boxOption.y], this.boxOriPoints.forEach(function (n) {
      t.push(this.getPointTodraw(n[0], n[1], i));
    }, this), this.boxPoints = matrixToarray(t), this._Points;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    for (var n = !1, s = this.boxPoints, e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  }, move: function move(t, i) {
    this.boxOption.x = t, this.boxOption.y = i, this.Option.x = t - this.offset.x, this.Option.y = i - this.offset.y, this._dirty = !0;
  }, detected: function detected(t, i) {
    return this._offsetX = this.boxOption.x - t, this._offsetY = this.boxOption.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0);
  }, _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.getPoints()), t.save(), this.rotateOrigin ? (t.translate(this.rotateOrigin[0], this.rotateOrigin[1]), t.rotate(this.Option.rotate), t.fillText(this.text, this.boxOption.x - this.rotateOrigin[0] - this.offset.x, this.boxOption.y - this.rotateOrigin[1] - this.offset.y)) : (t.translate(this.boxOption.x, this.boxOption.y), t.rotate(this.Option.rotate), t.fillText(this.text, -this.offset.x, -this.offset.y)), t.restore(), this._dirty = !1;
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, updateText: function updateText(t) {
    this.text = t, this._dirty = !0;
  } }, commonMethods);var getCurvePoints = function getCurvePoints(t, i, n, s) {
  i = void 0 !== i ? i : .5, n = n || !1, s = s || 16;var e,
      o,
      h,
      r,
      a,
      u,
      p,
      c,
      l,
      m,
      f,
      x,
      d,
      g = [],
      O = [];for (g = t.slice(0), n ? (g.unshift(t[t.length - 1]), g.unshift(t[t.length - 1]), g.push(t[0])) : (g.unshift(t[1]), g.push(t[t.length - 1])), d = 1; d < g.length - 2; d += 1) {
    for (x = 0; x <= s; x++) {
      h = (g[d + 1][0] - g[d - 1][0]) * i, r = (g[d + 2][0] - g[d][0]) * i, a = (g[d + 1][1] - g[d - 1][1]) * i, u = (g[d + 2][1] - g[d][1]) * i, f = x / s, p = 2 * Math.pow(f, 3) - 3 * Math.pow(f, 2) + 1, c = -2 * Math.pow(f, 3) + 3 * Math.pow(f, 2), l = Math.pow(f, 3) - 2 * Math.pow(f, 2) + f, m = Math.pow(f, 3) - Math.pow(f, 2), e = p * g[d][0] + c * g[d + 1][0] + l * h + m * r, o = p * g[d][1] + c * g[d + 1][1] + l * a + m * u, O.push([e, o]);
    }
  }return O;
};Line.prototype = _extends({ genMassCenter: function genMassCenter(t) {
    var i = 0,
        n = 0;return Array.prototype.forEach.call(t, function (t) {
      i += t[0], n += t[1];
    }), { x: i / t.length, y: n / t.length };
  }, getOriPoints: function getOriPoints() {
    var t = [];this.posPoints.forEach(function (i) {
      t.push([this.massCenter.x - i[0], this.massCenter.y - i[1]]);
    }, this), this.oriPoints = t;
  }, genPointsPositiveLoc: function genPointsPositiveLoc() {
    var t = [];return this.Option.points.forEach(function (i) {
      t.push([this.massCenter.x - i[0], this.massCenter.y - i[1]]);
    }, this), t;
  }, getDetectPoints: function getDetectPoints() {
    var t = [],
        i = [];return this._Points.forEach(function (n, s) {
      t.push([n[0], n[1] + this.Option.lineWidth / 2]), i.unshift([n[0], n[1] - this.Option.lineWidth / 2]);
    }, this), t.concat(i);
  }, genPoints: function genPoints() {
    var t = [],
        i = null;return i = this.rotateOrigin ? this.rotateOrigin : [this.massCenter.x, this.massCenter.y], this.oriPoints.forEach(function (n) {
      t.push(this.getPointTodraw(n[0], n[1], i));
    }, this), this._Points = matrixToarray(t), this.UnOption.smooth && (this._CurvePoints = getCurvePoints(this._Points, .1, !1, 20)), this._Points;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, getMax: function getMax() {
    var t = this._Points;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, createPath: function createPath(t) {
    var i = [];if (i = this.UnOption.smooth ? this._CurvePoints : this._Points, i.length <= 0) return !1;t.beginPath(), t.moveTo(i[0][0], i[0][1]);for (var n = 1; n < i.length; n++) {
      t.lineTo(i[n][0], i[n][1]);
    }
  }, stroke: function stroke(t) {
    t.save(), this._draw(t), t.setStrokeStyle(this.Option.strokeStyle), t.setLineWidth(this.Option.lineWidth), this.setCommonstyle(t, "line"), t.stroke(), t.restore();
  }, mixDraw: function mixDraw(t) {
    this.stroke(t);
  }, fill: function fill(t) {
    this.stroke(t);
  }, _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.genPoints(), this.detectPoints = this.getDetectPoints(), this.getMax()), this.createPath(t), this._dirty = !1;
  }, move: function move(t, i) {
    this.massCenter.x = t, this.massCenter.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return t > this.max.minX && t < this.max.maxX && i > this.max.minY && i < this.max.maxY && (this._offsetX = this.massCenter.x - t, this._offsetY = this.massCenter.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0));
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    for (var n = !1, s = this.detectPoints, e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  } }, commonMethods);var Circle = function Circle(t) {
  var i = _extends({ x: 10, y: 10, r: 10, sA: 0, eA: 2 * Math.PI }, commonAttr()),
      n = _extends({}, commonUnAttr(), { counterclockwise: !1, closePath: !1 }),
      s = util.extend(t, i),
      e = util.extend(t, n);this.Option = s, this.UnOption = e, this._isChoosed = !1, this._offsetX = 0, this._offsetY = 0, this.fullCircle = !0, this._colorLock = !1, this._canRotateOrigin = !0, this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.oriPoints = null, this._Points = [], this._isChoosed = !1, this.rotateOrigin = null, this._drawLine = !1, this.detectOriPoints = [], this._detectPoints = [], this.getOriPoints(), this.getMax(), this._dirty = !0, this._type = "circle";
};Circle.prototype = _extends({ getOriPoints: function getOriPoints() {
    var t = [],
        i = [],
        n = this.Option.sA || 0,
        s = this.Option.eA || 2 * Math.PI,
        e = s - n;e >= 2 * Math.PI ? this.fullCircle = !0 : this.fullCircle = !1;for (var o = 0; o <= 100; ++o) {
      n = this.Option.sA + o * e / 100, t.push([this.Option.x + this.Option.r * Math.sin(n), this.Option.y - this.Option.r * Math.cos(n)]), i.push([this.Option.x + (this.Option.r + this.Option.lineWidth / 2) * Math.sin(n), this.Option.y - (this.Option.r + this.Option.lineWidth / 2) * Math.cos(n)]);
    }t.unshift([this.Option.x, this.Option.y]), i.unshift([this.Option.x, this.Option.y]), this.oriPoints = t, this.detectOriPoints = i;
  }, getPoints: function getPoints() {
    var t = [],
        i = [],
        n = null;return n = this.rotateOrigin ? this.rotateOrigin : [this.Option.x, this.Option.y], this.oriPoints.forEach(function (i) {
      t.push(this.getPointTodraw(i[0], i[1], n));
    }, this), this.detectOriPoints.forEach(function (t) {
      i.push(this.getPointTodraw(t[0], t[1], n));
    }, this), this._Points = matrixToarray(t), this._detectPoints = matrixToarray(i), this._Points;
  }, getMax: function getMax() {
    var t = this.detectOriPoints;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, createPath: function createPath(t) {
    var i = this._Points;t.beginPath();var n = 0;this.UnOption.closePath || (n = 1), t.moveTo(i[n][0], i[n][1]);for (var s = n + 1; s <= 101; ++s) {
      t.lineTo(i[s][0], i[s][1]);
    }this.UnOption.closePath && t.closePath();
  }, _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.getPoints(), this.getMax()), this.createPath(t), this._dirty = !0;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, move: function move(t, i) {
    this.Option.x = t, this.Option.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return this._offsetX = this.Option.x - t, this._offsetY = this.Option.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0);
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    var n = !1,
        s = null;s = this._drawLine ? this._detectPoints : this._Points;for (var e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  } }, commonMethods);var Rect = function Rect(t) {
  var i = _extends({ x: 10, y: 10, w: 10, h: 10 }, commonAttr()),
      n = util.extend(t, i),
      s = util.extend(t, commonUnAttr());this.Option = util.extend({}, n), this.UnOption = s, this._isChoosed = !1, this._offsetX = 0, this._offsetY = 0, this.bus = null, this.rotateOrigin = null, this.oriPoints = [], this._Points = [], this._drawLine = !1, this.detectOriPoints = [], this._detectPoints = [], this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.getOriPoints(), this.getPoints(), this.getMax(), this._dirty = !0, this._type = "rect", this._rotateOriginOver = !1, this._canRotateOrigin = !0;
};Rect.prototype = _extends({ _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.getPoints(), this.getMax()), this.createPath(t), this._dirty = !1;
  }, getOriPoints: function getOriPoints() {
    var t = [],
        i = [];t.push([this.Option.x - this.Option.w / 2, this.Option.y - this.Option.h / 2]), t.push([this.Option.x - this.Option.w / 2, this.Option.y + this.Option.h / 2]), t.push([this.Option.x + this.Option.w / 2, this.Option.y + this.Option.h / 2]), t.push([this.Option.x + this.Option.w / 2, this.Option.y - this.Option.h / 2]), i.push([this.Option.x - this.Option.w / 2 - this.Option.lineWidth / 2, this.Option.y - this.Option.h / 2 - this.Option.lineWidth / 2]), i.push([this.Option.x - this.Option.w / 2 - this.Option.lineWidth / 2, this.Option.y + this.Option.h / 2 + this.Option.lineWidth / 2]), i.push([this.Option.x + this.Option.w / 2 + this.Option.lineWidth / 2, this.Option.y + this.Option.h / 2 + this.Option.lineWidth / 2]), i.push([this.Option.x + this.Option.w / 2 + this.Option.lineWidth / 2, this.Option.y - this.Option.h / 2 - this.Option.lineWidth / 2]), this.oriPoints = t, this.detectOriPoints = i;
  }, getPoints: function getPoints() {
    var t = [],
        i = [],
        n = null;return n = this.rotateOrigin ? this.rotateOrigin : [this.Option.x, this.Option.y], this.oriPoints.forEach(function (i) {
      t.push(this.getPointTodraw(i[0], i[1], n));
    }, this), this.detectOriPoints.forEach(function (t) {
      i.push(this.getPointTodraw(t[0], t[1], n));
    }, this), this._changeCenter(n), this._Points = matrixToarray(t), this._detectPoints = matrixToarray(i), this._Points;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, getMax: function getMax() {
    var t = this._detectPoints;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, createPath: function createPath(t) {
    var i = this._Points;t.beginPath(), t.moveTo(i[0][0], i[0][1]);for (var n = 1; n < i.length; ++n) {
      t.lineTo(i[n][0], i[n][1]);
    }t.closePath();
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    var n = !1,
        s = null;s = this._drawLine ? this._detectPoints : this._Points;for (var e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  }, move: function move(t, i) {
    this.Option.x = t, this.Option.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return console.log("检测方块", t, i), t > this.max.minX && t < this.max.maxX && i > this.max.minY && i < this.max.maxY && (this._offsetX = this.Option.x - t, this._offsetY = this.Option.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0));
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, _changeCenter: function _changeCenter(t) {} }, commonMethods);var Cshape = function Cshape(t) {
  var i = _extends({ points: [[145, 30], [0, -211], [300, 400], [113, 50], [30, -31], [3, 40], [123, 90], [20, -1], [30, 60], [131, 40], [90, -12], [0, 400], [13, 6], [70, -17], [30, 42]] }, commonAttr()),
      n = _extends({ smooth: !0 }, commonUnAttr()),
      s = util.extend(t, i),
      e = util.extend(t, n);this.Option = s, this.UnOption = e, this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.massCenter = this.genMassCenter(this.Option.points), this.posPoints = this.genPointsPositiveLoc(), this._CurvePoints = this.Option.points, this.oriPoints = this.Option.points, this._Points = this.Option.points, this.getMax(), this._isChoosed = !1, this.rotateOrigin = null, this._dirty = !0, this._type = "cshape", this._canRotateOrigin = !0;
};Cshape.prototype = _extends({ genPointsPositiveLoc: function genPointsPositiveLoc() {
    var t = [];return this.Option.points.forEach(function (i) {
      t.push([this.massCenter.x - i[0], this.massCenter.y - i[1]]);
    }, this), t;
  }, genMassCenter: function genMassCenter(t) {
    var i = 0,
        n = 0;return Array.prototype.forEach.call(t, function (t) {
      i += t[0], n += t[1];
    }), { x: i / t.length, y: n / t.length };
  }, getOriPoints: function getOriPoints(t, i) {
    var n = [];this.posPoints.forEach(function (t) {
      n.push([this.massCenter.x - t[0], this.massCenter.y - t[1]]);
    }, this), this.oriPoints = n;
  }, genPoints: function genPoints() {
    var t = [],
        i = null;return i = this.rotateOrigin ? this.rotateOrigin : [this.massCenter.x, this.massCenter.y], this.oriPoints.forEach(function (n) {
      t.push(this.getPointTodraw(n[0], n[1], i));
    }, this), this._Points = matrixToarray(t), this.UnOption.smooth && (this._CurvePoints = getCurvePoints(this._Points, .1, !1, 20)), this._Points;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, getMax: function getMax() {
    var t = this._Points;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, createPath: function createPath(t) {
    var i = [];if (i = this.UnOption.smooth ? this._CurvePoints : this._Points, i.length <= 0) return !1;t.beginPath(), t.moveTo(i[0][0], i[0][1]);for (var n = 1; n < i.length; n++) {
      t.lineTo(i[n][0], i[n][1]);
    }t.closePath();
  }, _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.genPoints(), this.getMax()), this.createPath(t), this._dirty = !1;
  }, move: function move(t, i) {
    this.massCenter.x = t, this.massCenter.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return t > this.max.minX && t < this.max.maxX && i > this.max.minY && i < this.max.maxY && (this._offsetX = this.massCenter.x - t, this._offsetY = this.massCenter.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0));
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    for (var n = !1, s = 0, e = this._Points.length - 1; s < this._Points.length; e = s++) {
      var o = this._Points[s][0],
          h = this._Points[s][1],
          r = this._Points[e][0],
          a = this._Points[e][1];h > i != a > i && t < (r - o) * (i - h) / (a - h) + o && (n = !n);
    }return n;
  } }, commonMethods);var Img = function Img(t) {
  var i = { x: 10, y: 10, w: 10, h: 10, rotate: 0, opacity: 1 },
      n = { file: "" },
      s = util.extend(t, i),
      e = util.extend(t, n);this.Option = util.extend({}, s), this.UnOption = e, this._isChoosed = !1, this._offsetX = 0, this._offsetY = 0, this.rotateOrigin = null, this.oriPoints = [], this._Points = [], this._drawLine = !1, this.detectOriPoints = [], this._detectPoints = [], this.max = { maxX: null, maxY: null, minX: null, minY: null }, this.getOriPoints(), this.getPoints(), this.getMax(), this._dirty = !0, this._type = "image", this._canRotateOrigin = !0;
};Img.prototype = _extends({ _draw: function _draw(t) {
    this._dirty && (this.getOriPoints(), this.getPoints(), this.getMax()), this.drawImage(t), this._dirty = !1;
  }, getOriPoints: function getOriPoints() {
    var t = [];t.push([this.Option.x - this.Option.w / 2, this.Option.y - this.Option.h / 2]), t.push([this.Option.x - this.Option.w / 2, this.Option.y + this.Option.h / 2]), t.push([this.Option.x + this.Option.w / 2, this.Option.y + this.Option.h / 2]), t.push([this.Option.x + this.Option.w / 2, this.Option.y - this.Option.h / 2]), this.oriPoints = t, this.detectOriPoints = t;
  }, getPoints: function getPoints() {
    var t = [],
        i = null;return i = this.rotateOrigin ? this.rotateOrigin : [this.Option.x, this.Option.y], this.oriPoints.forEach(function (n) {
      t.push(this.getPointTodraw(n[0], n[1], i));
    }, this), this._Points = matrixToarray(t), this._detectPoints = matrixToarray(t), this._Points;
  }, getPointTodraw: function getPointTodraw(t, i, n) {
    var s = this.Option.rotate;return new Point(t, i).rotate(n, s);
  }, getMax: function getMax() {
    var t = this._detectPoints;this.max = { maxX: null, maxY: null, minX: null, minY: null }, t.forEach(function (t) {
      t[0] > this.max.maxX && (this.max.maxX = t[0]), this.max.minX || 0 === this.max.minX || (this.max.minX = t[0]), this.max.minX && t[0] < this.max.minX && (this.max.minX = t[0]), t[1] > this.max.maxY && (this.max.maxY = t[1]), this.max.minY || 0 === this.max.minY || (this.max.minY = t[1]), this.max.minY && t[1] < this.max.minY && (this.max.minY = t[1]);
    }, this);
  }, drawImage: function drawImage(t) {
    var i = this._Points;t.save(), t.setGlobalAlpha(this.Option.opacity), t.beginPath(), t.moveTo(i[0][0], i[0][1]);for (var n = 1; n < i.length; ++n) {
      t.lineTo(i[n][0], i[n][1]);
    }t.closePath(), t.save(), this.rotateOrigin ? (t.translate(this.rotateOrigin[0], this.rotateOrigin[1]), t.rotate(this.Option.rotate), t.drawImage(this.UnOption.file, this.Option.x - this.Option.w / 2 - this.rotateOrigin[0], this.Option.y - this.Option.h / 2 - this.rotateOrigin[1], this.Option.w, this.Option.h)) : (t.translate(this.Option.x, this.Option.y), t.rotate(this.Option.rotate), t.drawImage(this.UnOption.file, -this.Option.w / 2, -this.Option.h / 2, this.Option.w, this.Option.h)), t.restore();
  }, _pnpolyTest: function _pnpolyTest(t, i) {
    var n = !1,
        s = null;s = this._detectPoints;for (var e = 0, o = s.length - 1; e < s.length; o = e++) {
      var h = s[e][0],
          r = s[e][1],
          a = s[o][0],
          u = s[o][1];r > i != u > i && t < (a - h) * (i - r) / (u - r) + h && (n = !n);
    }return n;
  }, move: function move(t, i) {
    this.Option.x = t, this.Option.y = i, this._dirty = !0;
  }, detected: function detected(t, i) {
    return t > this.max.minX && t < this.max.maxX && i > this.max.minY && i < this.max.maxY && (this._offsetX = this.Option.x - t, this._offsetY = this.Option.y - i, !!this._pnpolyTest(t, i) && (this._isChoosed = !0, !0));
  }, moveDetect: function moveDetect(t, i) {
    1 == this._isChoosed && this.move(t + this._offsetX, i + this._offsetY);
  } }, commonMethods);var EasingFunctions = { linear: function linear(t) {
    return t;
  }, easeInQuad: function easeInQuad(t) {
    return Math.pow(t, 2);
  }, easeOutQuad: function easeOutQuad(t) {
    return -(Math.pow(t - 1, 2) - 1);
  }, easeInOutQuad: function easeInOutQuad(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2);
  }, easeInCubic: function easeInCubic(t) {
    return Math.pow(t, 3);
  }, easeOutCubic: function easeOutCubic(t) {
    return Math.pow(t - 1, 3) + 1;
  }, easeInOutCubic: function easeInOutCubic(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
  }, easeInQuart: function easeInQuart(t) {
    return Math.pow(t, 4);
  }, easeOutQuart: function easeOutQuart(t) {
    return -(Math.pow(t - 1, 4) - 1);
  }, easeInOutQuart: function easeInOutQuart(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2);
  }, easeInQuint: function easeInQuint(t) {
    return Math.pow(t, 5);
  }, easeOutQuint: function easeOutQuint(t) {
    return Math.pow(t - 1, 5) + 1;
  }, easeInOutQuint: function easeInOutQuint(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2);
  }, easeInSine: function easeInSine(t) {
    return 1 - Math.cos(t * (Math.PI / 2));
  }, easeOutSine: function easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
  }, easeInOutSine: function easeInOutSine(t) {
    return -.5 * (Math.cos(Math.PI * t) - 1);
  }, easeInExpo: function easeInExpo(t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
  }, easeOutExpo: function easeOutExpo(t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
  }, easeInOutExpo: function easeInOutExpo(t) {
    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
  }, easeInCirc: function easeInCirc(t) {
    return -(Math.sqrt(1 - t * t) - 1);
  }, easeOutCirc: function easeOutCirc(t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  }, easeInOutCirc: function easeInOutCirc(t) {
    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  }, easeOutBounce: function easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }, easeInBack: function easeInBack(t) {
    var i = 1.70158;return t * t * ((i + 1) * t - i);
  }, easeOutBack: function easeOutBack(t) {
    var i = 1.70158;return (t -= 1) * t * ((i + 1) * t + i) + 1;
  }, easeInOutBack: function easeInOutBack(t) {
    var i = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * .5 : .5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2);
  }, elastic: function elastic(t) {
    return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1;
  }, swingFromTo: function swingFromTo(t) {
    var i = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * .5 : .5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2);
  }, swingFrom: function swingFrom(t) {
    var i = 1.70158;return t * t * ((i + 1) * t - i);
  }, swingTo: function swingTo(t) {
    var i = 1.70158;return (t -= 1) * t * ((i + 1) * t + i) + 1;
  }, bounce: function bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }, bouncePast: function bouncePast(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
  }, easeFromTo: function easeFromTo(t) {
    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2);
  }, easeFrom: function easeFrom(t) {
    return Math.pow(t, 4);
  }, easeTo: function easeTo(t) {
    return Math.pow(t, .25);
  } };Watch.prototype = { start: function start() {
    this.startTime = +new Date(), this.goesBytime = void 0, this.running = !0;
  }, stop: function stop() {
    this.goesBy = +new Date() - this.startTime, this.running = !1;
  }, getGoesByTime: function getGoesByTime() {
    if (this.running) {
      var t = +new Date() - this.startTime;return t > 1 && !isNaN(t) ? t : 0;
    }return this.goesBy;
  }, isRunning: function isRunning() {
    return this.running;
  }, reset: function reset() {
    this.goesBy = 0;
  } };var AnimationTimer = function AnimationTimer(t, i) {
  void 0 !== t && (this.duration = t), void 0 !== i && (this.timeFunc = i), this.watch = new Watch();
};AnimationTimer.prototype = { start: function start() {
    this.watch.start();
  }, stop: function stop() {
    this.watch.stop();
  }, getGoesByTime: function getGoesByTime() {
    var t = this.watch.getGoesByTime(),
        i = t / this.duration;if (this.watch.running) return this.timeFunc ? t * (EasingFunctions[this.timeFunc](i) / i) : t;
  }, isOver: function isOver() {
    return this.watch.getGoesByTime() > this.duration;
  } };var specialOption = { cshape: { x: "massCenter", y: "massCenter" }, line: { x: "massCenter", y: "massCenter" } },
    specialAtrr = { fillStyle: { get: function get(t) {
      return hex2rgb(t);
    }, set: function set(t, i, n) {
      var s = [t.r + Math.floor(i.r * n), t.g + Math.floor(i.g * n), t.b + Math.floor(i.b * n)];return "#" + rgb2hex.apply(void 0, s);
    }, getIncre: function getIncre(t, i, n) {
      var s = hex2rgb(i);return { r: s.r - t.r, g: s.g - t.g, b: s.b - t.b };
    } }, strokeStyle: { get: function get(t) {
      return hex2rgb(t);
    }, set: function set(t, i, n) {
      var s = [t.r + Math.floor(i.r * n), t.g + Math.floor(i.g * n), t.b + Math.floor(i.b * n)];return "#" + rgb2hex.apply(void 0, s);
    }, getIncre: function getIncre(t, i, n) {
      var s = hex2rgb(i);return { r: s.r - t.r, g: s.g - t.g, b: s.b - t.b };
    } }, shadow: { get: function get(t) {
      return { offsetX: t.offsetX, offsetY: t.offsetY, blur: t.blur, color: hex2rgb(t.color) };
    }, set: function set(t, i, n) {
      var s = [t.color.r + Math.floor(i.color.r * n), t.color.g + Math.floor(i.color.g * n), t.color.b + Math.floor(i.color.b * n)],
          e = "#" + rgb2hex.apply(void 0, s);return { offsetX: t.offsetX + i.offsetX * n, offsetY: t.offsetY + i.offsetY * n, blur: t.blur + i.blur * n, color: e };
    }, getIncre: function getIncre(t, i, n) {
      var s = util.extend(i, n.Shape.Option.shadow),
          e = hex2rgb(s.color),
          o = { r: e.r - t.color.r, g: e.g - t.color.g, b: e.b - t.color.b };return { offsetX: (s.offsetX ? s.offsetX : 5) - t.offsetX, offsetY: (s.offsetY ? s.offsetY : 5) - t.offsetY, blur: (s.blur ? s.blur : 5) - t.blur, color: o };
    } }, lineDash: { get: function get(t) {
      return t;
    }, set: function set(t, i, n) {
      return [[t[0][0] + i[0][0] * n, t[0][1] + i[0][1] * n], t[1][1] + i[1][1] * n];
    }, getIncre: function getIncre(t, i, n) {
      return [[-t[0][0] + i[0][0], -t[0][1] + i[0][1]], -t[1][1] + i[1][1]];
    } } },
    AnimationFrag = function AnimationFrag(t, i, n, s, e) {
  var o = { onStart: function onStart() {}, onLooping: function onLooping() {}, onEnd: function onEnd() {}, duration: 1e3, easing: "linear" },
      h = util.extend(s, o);this.object = t, this.source = 0, this.genFlag = !1, this.bus = e, this.complete = !1, this.running = !1, this.started = !1, this.duration = h.duration, this.atrribute = i, this.atrributeList = [], "object" == (void 0 === i ? "undefined" : _typeof(i)) ? (this.genFlag = !0, this.genAtrributeList(i)) : (this.incre = genExe(n, i, t), this.exe = n), this.timer = new AnimationTimer(h.duration, h.easing), this.oriOption = h, this.endCallFrag = null, this.onEnd = h.onEnd, this.onLooping = h.onLooping, this.onStart = h.onStart, this._aniWrapbus = null;
};AnimationFrag.prototype = { updateAnimation: function updateAnimation() {
    return !this.complete && (this.timer.isOver() ? (this.onEnd(), this.complete = !0, this.running = !1, this._aniWrapbus.dispatch("fragAniOver", "no", "me"), !1) : void (this.started || this.complete ? (this.onLooping(), this.updateAtrribute()) : (this.genFlag || (this.source = this.object.Shape.Option[this.atrribute] || 0 == this.object.Shape.Option[this.atrribute] ? this.object.Shape.Option[this.atrribute] : this.object.Shape[specialOption[this.object.type][this.atrribute]][this.atrribute], specialAtrr[this.atrribute] && (this.source = specialAtrr[this.atrribute].get(this.object.Shape.Option[this.atrribute]))), this.started = !0, this.running = !0, this.onStart(), this.timer.start())));
  }, updateAtrribute: function updateAtrribute() {
    this.genFlag ? (this.atrributeList.forEach(function (t) {
      this.object.Shape.Option[t.attr] || 0 == this.object.Shape.Option[t.attr] ? specialAtrr[t.attr] ? this.object.Shape.Option[t.attr] = specialAtrr[t.attr].set(t.source, t.incre, this.timer.getGoesByTime() / this.duration) : this.object.Shape.Option[t.attr] = t.source + t.incre * this.timer.getGoesByTime() / this.duration : this.object.Shape[specialOption[this.object.type][t.attr]][t.attr] = t.source + t.incre * this.timer.getGoesByTime() / this.duration;
    }, this), this.object.Shape._dirty = !0) : (this.object.Shape.Option[this.atrribute] || 0 == this.object.Shape.Option[this.atrribute] ? specialAtrr[this.atrribute] ? this.object.Shape.Option[this.atrribute] = specialAtrr[this.atrribute].set(this.source, this.incre, this.timer.getGoesByTime() / this.duration) : this.object.Shape.Option[this.atrribute] = this.source + this.incre * this.timer.getGoesByTime() / this.duration : this.object.Shape[specialOption[this.object.type][this.atrribute]][this.atrribute] = this.source + this.incre * this.timer.getGoesByTime() / this.duration, this.object.Shape._dirty = !0);
  }, genAtrributeList: function genAtrributeList(t) {
    var i = Object.keys(t),
        n = this;this.atrributeList = [], i.forEach(function (i) {
      var s = this.object.Shape.Option[i] || 0 == this.object.Shape.Option[i] ? this.object.Shape.Option[i] : this.object.Shape[specialOption[this.object.type][i]][i];specialAtrr[i] && (s = specialAtrr[i].get(this.object.Shape.Option[i])), n.atrributeList.push({ attr: i, incre: genExe(t[i], i, n.object), source: s });
    }, this);
  }, updateSourceAndtarget: function updateSourceAndtarget() {
    this.genFlag ? this.genAtrributeList(this.atrribute) : (this.source = this.object.Shape.Option[this.atrribute] || 0 == this.object.Shape.Option[this.atrribute] ? this.object.Shape.Option[this.atrribute] : this.object.Shape[specialOption[this.object.type][this.atrribute]][this.atrribute], specialAtrr[this.atrribute] && (this.source = specialAtrr[this.atrribute].get(this.object.Shape.Option[this.atrribute])), this.incre = genExe(this.exe, this.atrribute, this.object));
  }, addWrapBus: function addWrapBus(t) {
    this._aniWrapbus = t;
  }, restart: function restart() {
    this.complete = !1, this.running = !1, this.started = !1, this.timer = new AnimationTimer(this.oriOption.duration, this.oriOption.easing);
  } };var eventBus = function eventBus() {
  this.eventList = [];
};eventBus.prototype = { add: function add(t, i, n) {
    this.eventList.length ? (this.eventList.forEach(function (i) {
      if (i.name == t) return i.thingsList.push(n), !1;
    }, this), this.eventList.push({ name: t, scope: i, thingsList: [n] })) : this.eventList.push({ name: t, scope: i, thingsList: [n] });
  }, dispatch: function dispatch(t, i) {
    var n = arguments;if (arguments.length < 2) return !1;var s = Array.prototype.slice.call(n, 2);this.eventList.forEach(function (n) {
      n.name === t && n.thingsList.forEach(function (t) {
        "no" !== i ? t.call.apply(t, [i].concat(toConsumableArray(s))) : t.call.apply(t, [n.scope].concat(toConsumableArray(s)));
      });
    });
  }, destroy: function destroy() {} };var AniFragWrap = function AniFragWrap(t, i, n) {
  this.runing = !1, this.stoped = !1, this.started = !1, this.fragStore = [], this.animationPick = 0, this.bus = t, this.aniFraBus = new eventBus(), this.aniFraBus.add("fragAniOver", this, this.getAniOver), this.overAni = [], this.aniFragListId = i, this.loop = !1, this.loopTimes = !1, this.looped = 0, this.object = n, this.oriOption = util.extend(n.Shape.Option, n.Shape.Option), this.oriUnOption = util.extend(n.Shape.Option, n.Shape.UnOption), this.endCallWraper = null, this.firstTime = !0;
};AniFragWrap.prototype = { updateFrag: function updateFrag(t) {
    t.addWrapBus(this.aniFraBus), this.fragStore.length ? (this.fragStore[this.fragStore.length - 1].endCallFrag = t, this.fragStore.push(t)) : this.fragStore.push(t);
  }, exeAnimate: function exeAnimate() {
    if (this.object.disableDrag(), this.firstTime && (this.firstTime = !1, this.oriOption = util.extend(this.object.Shape.Option, this.object.Shape.Option), this.oriUnOption = util.extend(this.object.Shape.Option, this.object.Shape.UnOption)), this.stoped) return this.endCallWraper ? this.endCallWraper.exeAnimate() : this.object.restoreDrag(), !1;this.fragStore[this.animationPick] && this.fragStore[this.animationPick].updateAnimation();
  }, getAniOver: function getAniOver(t) {
    if (this.overAni.push(t), this.overAni.length == this.fragStore.length) {
      if (this.loop) {
        if (this.loopTimes && this.looped <= this.loopTimes && this.looped++, this.loopTimes && this.looped > this.loopTimes) return this.stop(), !1;this.restart();
      } else this.stop();return !1;
    }this.animationPick++, this.fragStore[this.animationPick].updateSourceAndtarget();
  }, restart: function restart() {
    this.object.restoreOption(this.oriOption), this.object.restoreOption(this.oriUnOption), this.overAni = [], this.animationPick = 0, this.fragStore.forEach(function (t) {
      t.restart();
    }, this), this.started = !1, this.stoped = !1;
  }, stop: function stop() {
    this.stoped = !0, this.bus.dispatch("wraperAniComplete", "no", this.aniFragListId, this.object.Shapeid, this.object);
  }, resume: function resume() {}, setLoop: function setLoop(t, i) {
    this.loop = t || !1, this.loopTimes = i || !1, this.looped = 1;
  } };var Shape = function Shape(t, i, n, s) {
  this.draggable = !!s, this.strokeOrfill = n || "fill", this.type = t, this.Shape = new shapeTypes[t](i), this.draggable && this.Shape.closeRotateOrigin(), this.AnimationTimer = new AnimationTimer(), this.animtionFragList = [], this.bus = null, this.Shapeid = "sp" + guid(), this.animationStart = !1, this.aniFragListId = "", this.aniFragWraper = null, this._oldDrag = this.draggable, this._layerIndex = 0, this._getChoosed = !1, this._eventStore = { tap: [], touchstart: [], touchmove: [], touchend: [], longpress: [], drag: [] }, this._nowType = "tap", this._canRotateOrigin = !0;
};Shape.prototype = { updateBus: function updateBus(t) {
    this.bus = t;
  }, paint: function paint(t) {
    switch (this.strokeOrfill) {case "fill":
        this.Shape.fill(t);break;case "stroke":
        this.Shape.stroke(t);break;case "mix":
        this.Shape.mixDraw(t);break;case !0:
        this.Shape.fill(t);}
  }, detect: function detect(t, i, n) {
    this.Shape.detected(t, i) ? (this._nowType = n, this.bus.dispatch("getDetectedLayers", "no", this._layerIndex)) : this.bus.dispatch("getDetectedLayers", "no", -1);
  }, moveDetect: function moveDetect(t, i) {
    this._getChoosed && this._eventStore.touchmove.forEach(function (t) {
      t(this);
    }, this), this.draggable && this._getChoosed && (this._eventStore.drag.forEach(function (t) {
      t(this);
    }, this), this.Shape.moveDetect(t, i));
  }, upDetect: function upDetect() {
    this._getChoosed && (this.bus.dispatch("clearDetectedLayers", "no"), this._eventStore.touchend.forEach(function (t) {
      t(this);
    }, this), this.Shape.upDetect(), this._getChoosed = !1);
  }, animate: function animate(t, i, n) {
    this.aniFragListId || (this.aniFragListId = "af" + guid(), this.aniFragWraper = new AniFragWrap(this.bus, this.aniFragListId, this));var s = null;return s = "object" == (void 0 === t ? "undefined" : _typeof(t)) ? new AnimationFrag(this, t, "no", arguments[1], this.bus) : new AnimationFrag(this, t, arguments[1], arguments[2], this.bus), this.aniFragWraper.updateFrag(s), this;
  }, start: function start(t) {
    this.animationStart = !0, this.aniFragWraper && (!0 === t && this.aniFragWraper.setLoop(t), "number" == typeof t && this.aniFragWraper.setLoop(!0, t), this.bus.dispatch("addAnimation", "no", this.aniFragWraper, this.Shapeid), this.aniFragListId = "", this.aniFragWraper = null), console.log("start");
  }, updateOption: function updateOption(t) {
    return this.Shape.bus || (this.Shape.bus = this.bus), this.Shape.updateOption(t), this;
  }, restoreOption: function restoreOption(t) {
    this.Shape.restoreOption(t);
  }, setOrigin: function setOrigin(t) {
    return this.Shape.setRotateOrigin(t), this;
  }, _updateLayer: function _updateLayer(t) {
    this._layerIndex = t;
  }, updateLayer: function updateLayer(t) {
    this.bus.dispatch("updateLayer", "no", this, this._layerIndex, t);
  }, getChoosed: function getChoosed() {
    this._getChoosed = !0, this._eventStore[this._nowType].forEach(function (t) {
      t(this);
    }, this);
  }, destroy: function destroy() {
    this.bus.dispatch("destory", "no", this._layerIndex, this.Shapeid), this.bus.dispatch("destoryAnimation", "no", this._layerIndex, this.Shapeid);
  }, restoreDrag: function restoreDrag() {
    this.draggable = this._oldDrag;
  }, disableDrag: function disableDrag() {
    this.draggable = !1;
  }, bind: function bind(t, i) {
    void 0 !== this._eventStore[t] && this._eventStore[t].push(i);
  }, unbind: function unbind(t, i) {
    var n = -1;void 0 !== this._eventStore[t] && this._eventStore[t].forEach(function (t, i) {
      n = i;
    }), -1 !== n && this._eventStore[t].splice(n, 1);
  }, clone: function clone() {
    var t = {};return "text" == this.type && (t = { text: this.Shape.text }), new Shape(this.type, _extends({}, this.Shape.Option, this.Shape.UnOption, t), this.strokeOrfill, this.draggable);
  }, updateText: function updateText(t) {
    if ("text" != this.type) return !1;this.Shape.updateText(t);
  } };var shapeTypes = { circle: function circle(t) {
    return new Circle(t);
  }, rect: function rect(t) {
    return new Rect(t);
  }, polygon: function polygon(t) {
    return new Polygon(t);
  }, cshape: function cshape(t) {
    return new Cshape(t);
  }, line: function line(t) {
    return new Line(t);
  }, ellipse: function ellipse(t) {
    return new Ellipse(t);
  }, text: function text(t) {
    return new Text(t);
  }, image: function image(t) {
    return new Img(t);
  } },
    AnimationFrame = function AnimationFrame() {
  return "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : fakeAnimationFrame;
},
    animationFrame = AnimationFrame(),
    Animation = function Animation(t) {
  this.running = !1, this.paused = !0, this.bus = t, this.animationFragStore = {}, this.animationCompleteList = [], this.wraperAniCompleteOb = {}, this.bus.add("animationComplete", this, this.animationComplete), this.bus.add("wraperAniComplete", this, this.wraperAniComplete), this.bus.add("destoryAnimation", this, this.destroyAnimation), this.bus.add("clearAnimation", this, this.clearAnimation);
};Animation.prototype = { start: function start() {
    this.running = !0, this.loopAnimation();
  }, loopAnimation: function loopAnimation() {
    function t() {
      animationFrame(t), i.running && i.updateStep();
    }var i = this;animationFrame(t);
  }, updateStep: function updateStep() {
    Object.keys(this.animationFragStore).forEach(function (t) {
      this.animationFragStore[t][0].exeAnimate();
    }, this), this.bus.dispatch("update", "no");
  }, animationComplete: function animationComplete(t) {
    this.animationCompleteList.push(t), delete this.animationFragStore[t], Object.keys(this.wraperAniCompleteOb).length === Object.keys(this.animationFragStore).length && (this.running = !1);
  }, wraperAniComplete: function wraperAniComplete(t, i, n) {
    console.log(t, i), this.wraperAniCompleteOb[i] ? this.wraperAniCompleteOb[i].push(t) : this.wraperAniCompleteOb[i] = [t], console.log(this.wraperAniCompleteOb[i].length, this.animationFragStore[i].length), this.wraperAniCompleteOb[i].length == this.wraperAniCompleteOb.length && (n.restoreDrag(), this.bus.dispatch("animationComplete", "no", i));
  }, destroyAnimation: function destroyAnimation(t, i) {
    delete this.animationFragStore[i];
  }, clearAnimation: function clearAnimation() {
    this.animationFragStore = {}, this.running = !1;
  } }, WxDraw.prototype = { add: function add(t) {
    t.updateBus(this.bus), t._updateLayer(this.store.getLength()), this.store.add(t);
  }, draw: function draw() {
    this.store.store.forEach(function (t) {
      t.paint(this.canvas);
    }, this);
  }, tapDetect: function tapDetect(t) {
    this.bus.dispatch("clearDetectedLayers", "no");var i = this.getLoc(t.touches[0].pageX, t.touches[0].pageY);this.store.store.forEach(function (t) {
      t.detect(i.x, i.y, "tap");
    }, this);
  }, longpressDetect: function longpressDetect(t) {
    this.bus.dispatch("clearDetectedLayers", "no");var i = this.getLoc(t.touches[0].pageX, t.touches[0].pageY);this.store.store.forEach(function (t) {
      t.detect(i.x, i.y, "longpress");
    }, this);
  }, touchstartDetect: function touchstartDetect(t) {
    var i = { x: t.touches[0].x, y: t.touches[0].y };this.store.store.forEach(function (t) {
      t.detect(i.x, i.y, "touchstart");
    }, this);
  }, touchendDetect: function touchendDetect(t) {
    this.store.store.forEach(function (t) {
      t.upDetect();
    }, this);
  }, touchmoveDetect: function touchmoveDetect(t) {
    var i = { x: t.touches[0].x, y: t.touches[0].y };this.store.store.forEach(function (t) {
      t.moveDetect(i.x, i.y);
    }, this), this.draw(), this.canvas.draw();
  }, getLoc: function getLoc(t, i) {
    return { x: t - this.x > 0 ? t - this.x > this.w ? this.w : t - this.x : 0, y: i - this.y > 0 ? i - this.y > this.h ? this.h : i - this.y : 0 };
  }, update: function update() {
    this.draw(), this.canvas.draw();
  }, AnimationCenter: function AnimationCenter() {}, addAnimationFrag: function addAnimationFrag(t, i) {
    this.animation.animationFragStore[i] ? (this.animation.animationFragStore[i][this.animation.animationFragStore[i].length - 1].endCallWraper = t, this.animation.animationFragStore[i].push(t)) : this.animation.animationFragStore[i] = [t];
  }, getDetectedLayers: function getDetectedLayers(t) {
    this.detectedLayers.push(t), this.detectedLayers.length == this.store.getLength() && -1 != Math.max.apply(null, this.detectedLayers) && this.store.find(Math.max.apply(null, this.detectedLayers)).getChoosed(), this.detectedLayers.length == this.store.getLength() && -1 == Math.max.apply(null, this.detectedLayers) && this.clearDetectedLayers();
  }, clearDetectedLayers: function clearDetectedLayers() {
    this.detectedLayers = [];
  }, updateLayer: function updateLayer(t, i, n) {
    var s = 0,
        e = void 0;s = n, "string" == typeof n && (e = 0 === n.indexOf("-") ? -1 : 0 === n.indexOf("+") && 1), s = e ? i + e * parseInt(-1 == e ? n.split("-")[1] : n.split("+")[1]) : parseInt(n), s >= this.store.store.length - 1 && (s = this.store.store.length - 1), s <= 0 && (s = 0), this.store.changeIndex(t, i, s), this._updateLayer();
  }, destroy: function destroy(t) {
    this.store.store.splice(t, 1);
  }, _updateLayer: function _updateLayer() {
    this.store.store.forEach(function (t, i) {
      t._updateLayer(i);
    });
  }, clear: function clear() {
    this.canvas.clearActions(), this.store.clear(), this.canvas = null, this.bus.dispatch("clearAnimation", "no", "no");
  }, reset: function reset() {
    this.canvas.clearRect(this.x, this.y, this.w, this.h), this.canvas.draw(), this.clear();
  } };var wxDraw = { wxDraw: WxDraw, Shape: Shape, AnimationFrame: AnimationFrame() };module.exports = wxDraw;
//# sourceMappingURL=wxdraw.js.map
