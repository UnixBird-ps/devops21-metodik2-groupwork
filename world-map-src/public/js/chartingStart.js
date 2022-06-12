/**
 * @license (c) 2011-2016 Corporate Web Solutions Ltd. (c) 2009-2010 Corporate Web Solutions Ltd. JS charts used under license of JSCharting.  All client side code may not be used in any way without a  JSCharting license.  Portions (c) 2009-2010 Torstein Honsi: Highcharts. For complete licensing details please see the JSCharting licensing agreement. 
 * v1.5.0.20160621
 */
(function () {
  function J(h, T) {
    function E(d, p) {
      h[d] || (h[d] = {});
      if (h[d].pop)
        for (var b in h[d])
          for (I in h[d][b] = JSCL.j.W(!0, null, p, h[d][b]), h[d][b].markers) h[d][b].markers[I] = JSCL.j.W(!0, null, w, h[d][b].markers[I]);
      else
        for (I in h[d] || (h[d] = {}), h[d] = JSCL.j.W(!0, null, p, h[d]), h[d].markers) h[d].markers[I] = JSCL.j.W(!0, null, w, h[d].markers[I])
    }

    function ea(d, p) {
      function b(d) {
        k = !1;
        c = Y.a(d, "scale.type");
        a.test(c) && !d.formatString && (k = !0);
        d = JSCL.j.W(!0, null, p, d);
        if (u = d.markers)
          for (var h = 0, t = u.length; h < t; h++) u[h] =
            JSCL.j.W(!0, null, w, u[h]);
        k && delete d.formatString;
        return d
      }
      var a = /time/i,
        c, k, u;
      d || (d = {});
      if (d.pop)
        for (var h = 0, t = d.length; h < t; h++) d[h] = b(d[h]);
      else d || (d = {}), d = b(d);
      return d
    }

    function n() {
      G = setTimeout(function () {
        clearInterval(G);
        var d = "string" === typeof this.targetElement ? $("#" + this.targetElement) : $(this.targetElement);
        d && 0 === d.html().length && p && 2 > z.status && d.html("Error: Script loader timed out. Please ensure all 4 JSCharting*.js libraries are in the same folder as the JSCharting.js file.")
      }, 1E4)
    }
    this.Di =
      this.rd = 0;
    this.targetElement = h.targetElement;
    delete h.targetElement;
    this.S = function () {
      if (ha && "undefined" === typeof this.S) return new JSCL.Pi
    }();
    ha && this.S.Ua("Chart", "(){");
    h.series = h.series || [];
    for (var K = 0, u = h.series.length; K < u; K++) {
      var F = h.series[K],
        d = F.points;
      "string" === typeof d && 0 === d.indexOf("JSC.pointsFromArray(") && (F.points = eval("(" + d + ")"))
    }
    var z, L = this,
      t, Q = JSCL.na,
      p = !0,
      I, S = F = !1,
      ca = !1,
      d = h.series ? h.series.length : 0,
      ga = this,
      W = "JavaScript",
      ka = h.template,
      Z, x = !1,
      G, Y = JSCL.j,
      K = JSCL.g(),
      u = {
        g: K,
        G: new JSCL.G,
        ve: F,
        Ia: {
          nc: "",
          Zd: [],
          qa: [],
          Bc: [],
          Ui: [],
          ze: !1,
          Tf: !1,
          lh: !1,
          Gb: {}
        }
      };
    this.xa = "";
    this.Nb = [];
    this.ob = [];
    k = y();
    h.type && 0 === h.type.toLowerCase().indexOf("map") && (F = Y.a(h, "mapping.base.layers") || Y.a(h, "mappingBase.layers") || Y.a(h, "mappingBaseLayers") || Y.a(h, "mapping.baseLayers"), S = Y.a(h, "mapping.referenceLayers") || Y.a(h, "mappingReferenceLayers"), ca = Y.a(h, "mapping.projection") || Y.a(h, "mappingProjection"), W = Y.a(h, "mapping.base.series") || Y.a(h, "mappingBase.series") || Y.a(h, "mappingBaseSeries") || Y.a(h, "mapping.baseSeries"),
      u.Ia.Ti = ca, h.series = h.series || [], F = JSCL.gjParser.Zf(F, S, {
        uf: W,
        fb: h.series,
        bd: u.Ia
      }, function () {
        ga.Di = !0
      }), h.series = F);
    e();
    U(h, H, this);
    this.ye = H;
    K.init(h);
    u.ve = F = K.o("navigator");
    S = K.o("gauge");
    ca = K.o("radar");
    K.o("map") && (k = B());
    W = h.renderMode || "JavaScript";
    /^Silverlight/i.test(W) && /JavaScript/i.test(W) && (f() || (W = "JavaScript"));
    "undefined" !== typeof h.debug && (p = h.debug);
    /^JavaScript/i.test(W) ? (Z = function () {
      clearInterval(G);
      x = !0;
      if (z && 1 === z.status) z.Lb(T);
      else var d = setInterval(function () {
        z && 1 === z.status &&
          (clearInterval(d), z.Lb(T))
      }, 1)
    }, F ? "undefined" === typeof JSFCharting ? (l(H + "JSChartingNav" + R, Z), p && n()) : x = !0 : "undefined" === typeof JSCharting ? (l(H + "JSChartingCore" + R, Z), p && n()) : x = !0, Z = function () {
      JSCL.ef && !z && (z = new JSCL.ef(h, L, H));
      if (z && x)
        if (1 === z.status) z.Lb(T);
        else var d = setInterval(function () {
          1 === z.status && (clearInterval(d), z.Lb(T))
        }, 1)
    }) : /^Silverlight/i.test(W) && ("undefined" === typeof window.Eb ? (l(H + "JSChartingNavSL" + R, function () {
      clearInterval(G);
      z = new JSCL.ff(h, L, H);
      z.Lb(T)
    }), p && n()) : (z = new JSCL.ff(h,
      L, H), z.Lb(T)));
    h = q(h, this, p);
    ka && (ka = q(ka, this, p), h = JSCL.j.W(!0, null, ka, h));
    if (K.tg() && 1 < h.series.length) {
      for (var d = K.tg(h.series), ka = [], W = 0, M = d.length; W < M; W++) {
        var C = d[W];
        1 < C.length ? ka.push(JSCL.na.Gi(C, h)) : ka.push(C[0])
      }
      h.series = ka;
      d = ka.length
    }
    K.L("chartType", "navigator") && (F = !0);
    S ? (b = {
      scale: {
        type: "normal"
      },
      line: {
        color: "#A0A0A0",
        width: 1
      },
      label: {
        align: "center",
        style: {
          color: "#000000",
          fontSize: "9pt",
          fontFamily: "Tahoma, Geneva, sans-serif",
          fontWeight: "bold"
        }
      },
      defaultTick: {
        gridLine: {
          width: 0
        },
        line: {
          color: "#808080",
          length: 10,
          width: 2
        },
        label: {
          style: {
            color: "#282828",
            fontSize: "8pt",
            fontFamily: "Trebuchet MS",
            fontWeight: "normal"
          }
        }
      },
      defaultMinorTick: {
        gridLine: {
          width: 0,
          color: "blue"
        },
        line: {
          color: "#808080",
          length: 6,
          width: 1
        },
        label: {
          style: {
            color: "#484848",
            fontSize: "8pt",
            fontFamily: "Trebuchet MS",
            fontWeight: "normal"
          },
          text: ""
        }
      }
    }, k.yAxis = b) : ca ? (b = a(), k.yAxis = b, c = g(), k.xAxis = c) : (b = m(), c = v(), b.alternateGridFill = "rgba(222,222,222,1)", k.xAxis.alternateGridFill = "");
    S = h.series;
    delete h.series;
    if (h.chartArea)
      if (h.chartArea.pop)
        for (t in h.chartArea) h.chartArea[t] =
          JSCL.j.W(!0, null, r, h.chartArea[t]), h.chartArea[t].yAxis && (h.chartArea[t].yAxis = ea(h.chartArea[t].yAxis, b));
      else h.chartArea = JSCL.j.W(!0, null, r, h.chartArea), h.chartArea.yAxis && (h.chartArea.yAxis = ea(h.chartArea.yAxis, b));
    h.series = S;
    if (F) h = JSCL.j.W(!0, null, D, h), E("xAxis", c), E("yAxis", b);
    else {
      h = JSCL.j.W(!0, null, k, h);
      K.Ri(h, d);
      if (h.yAxis)
        if (h.yAxis.pop)
          for (t in h.yAxis) h.yAxis[t] = ea(h.yAxis[t], b);
        else h.yAxis = ea(h.yAxis, b);
      else h.yAxis = ea(h.yAxis, b);
      if (h.xAxis)
        if (h.xAxis.pop)
          for (t in h.xAxis) h.xAxis[t] =
            ea(h.xAxis[t], c);
        else h.xAxis = ea(h.xAxis, c);
      else h.xAxis = ea(h.xAxis, c)
    }
    h.defaultPoint && JSCL.j.c(h, "defaultSeries.defaultPoint", JSCL.j.W(!0, null, JSCL.j.a(h, "defaultSeries.defaultPoint"), h.defaultPoint));
    this.addSeries = function (d, p) {
      var b = {},
        a;
      b.series = [];
      b.series.push(d);
      for (a in b.series[0].points) b.series[0].points[a] = Q.kb(b.series[0].points[a], z.u.j.a(z.json.xAxis, "scale.type"));
      b = JSC.rc(b);
      a = b.series[0];
      delete b.series;
      z.Sg(a, p)
    };
    this.getSeries = function () {
      if (z) return z.Kf()
    };
    this.get = function (d) {
      return z.get(d)
    };
    this.redraw = function (d) {
      z.pg(d)
    };
    this.print = function () {
      z.print()
    };
    this.hideLoading = function () {
      z.oi()
    };
    this.dispose = function () {
      if (z) {
        z.dispose && z.dispose();
        for (var d = -1, p = 0, b = A.length; p < b; p++)
          if (this == A[p][1]) {
            d = p;
            break
          } - 1 < p && A.splice(d, 1);
        delete z.Y;
        z = {}
      }
    };
    this.exportImage = function (d, p) {
      p = q(p);
      z.Gh(d, p)
    };
    this.getSVG = function (d) {
      d = q(d);
      return z.bi(d)
    };
    this.showLoading = function (d) {
      z.hj(d)
    };
    this.setTitle = function (d, p) {
      var b = {};
      b.title = d;
      b = q(b);
      z.ej(b.title, p)
    };
    this.setPalette = function (d, p) {
      z.pj(d, p)
    };
    this.getCalculations = function () {
      if (z) return z.Bb()
    };
    this.getSelectedPoints = function () {
      return z.ci()
    };
    this.replaceTokens = function (d, p) {
      if (z)
        if ("undefined" === typeof p) {
          if (z.Kb) return z.Kb(d)
        } else {
          var b = this.get(p);
          if (b.replaceTokens) return b.replaceTokens(d)
        }
    };
    this.tokenValue = function (d, p) {
      if (z)
        if ("undefined" === typeof p) {
          if (z.Kb) return z.Kb({
            token: d
          })
        } else {
          var b = this.get(p);
          if (b.tokenValue) return b.tokenValue(d)
        }
    };
    this.drillUp = function () {
      z && z.Ah()
    };
    this.drillHome = function () {
      z && z.zh()
    };
    this.getHcJson =
      function () {
        return z.options
      };
    this.getHcJsonString = function () {
      var d = JSON.stringify(z.options);
      return d = d.split('"').join("'");
    };
    this.getapiReport = function () {
      return this.xa
    };
    this.getWarnings = function () {
      return this.Nb
    };
    this.getWarningsData = function () {
      return this.ob
    };
    this.setView = function (d, p) {
      z.fj(d, p)
    };
    this.zoom = function (d, p) {
      if (z && z.Gf) return "undefined" !== typeof d ? z && z.cg(d, p) : z && z.Gf()
    };
    this.getContainerHtml = function () {
      return z.chartObject.container.innerHTML
    };
    this.dfhc = k;
    this.gTimer = this.S;
    this.Rh = function () {
      if ("undefined" !==
        typeof V) return V.split("(" + (739560).toString(36))[0]
    };
    this.ua = u;
    Z && Z()
  }

  function y() {
    return {
      targetElement: "container_Chart",
      debug: !0,
      height: 350,
      type: "",
      defaultCultureName: "en-US",
      renderMode: "JavaScript",
      axisToZoom: "none",
      languageStrings: {
        downloadJPG: "JPG Image",
        downloadPDF: "PDF Document",
        downloadPNG: "PNG Image",
        downloadSVG: "SVG Vector",
        exportButtonTooltip: "Export to raster or vector image",
        loading: "Loading...",
        printButtonTooltip: "Print the chart",
        resetZoomText: "Zoom Out",
        resetZoomTooltip: "Reset Zoom"
      },
      defaultTooltip: {
        fill: "auto",
        radius: 4,
        enabled: !0,
        shadow: !0,
        padding: 5,
        snap: 15,
        label: {
          style: {
            fontSize: "9pt",
            fontFamily: "Tahoma, Geneva, sans-serif",
            fontWeight: "normal"
          }
        },
        shared: !1,
        outline: {
          color: "auto",
          width: 1
        },
        transparency: .2
      },
      defaultAnnotation: {
        fill: "rgba(246, 246, 246,1)",
        radius: 5,
        boxVisible: !0,
        outline: {
          color: "rgb(160, 160, 160)",
          width: 1
        },
        label: {
          style: {
            color: "#323232",
            fontSize: "9pt",
            fontFamily: "Trebuchet MS",
            fontWeight: "normal"
          }
        },
        zIndex: 10
      },
      title: {
        fill: "rgba(246, 246, 246,1)",
        radius: 5,
        boxVisible: !0,
        outline: {
          color: "#A0A0A0",
          width: 1
        },
        position: "left",
        padding: 5,
        label: {
          align: "left",
          style: {
            color: "#323232",
            fontSize: "8pt",
            fontFamily: "Tahoma, Geneva, sans-serif",
            fontWeight: "bold"
          }
        }
      },
      xAxis: {
        scale: {
          type: "auto"
        },
        line: {
          color: "#A0A0A0",
          width: 1
        },
        label: {
          align: "center",
          style: {
            color: "#000000",
            fontSize: "9pt",
            fontFamily: "Tahoma, Geneva, sans-serif",
            fontWeight: "bold"
          }
        },
        defaultTick: {
          gridLine: {
            width: 1,
            color: "#D3D3D3",
            dashStyle: "Solid"
          },
          line: {
            color: "#808080",
            length: 5
          },
          label: {
            style: {
              color: "#282828",
              fontSize: "8pt",
              fontFamily: "Trebuchet MS",
              fontWeight: "normal"
            }
          }
        },
        defaultMinorTick: {
          gridLine: {
            width: 1,
            color: "rgba(211,211,211,0.59)",
            dashStyle: "ShortDash"
          },
          line: {
            color: "#808080",
            length: 4,
            width: 1
          },
          label: {
            style: {
              color: "#484848",
              fontSize: "8pt",
              fontFamily: "Trebuchet MS",
              fontWeight: "normal"
            }
          }
        }
      },
      legend: {
        position: "topRight",
        fill: "rgba(246, 246, 246,1)",
        layout: "auto",
        radius: 5,
        boxVisible: !0,
        outline: {
          color: "#A0A0A0",
          width: 1
        },
        defaultEntry: {
          text: "%name",
          iconWidth: 20,
          padding: 5,
          style: {
            color: "#000000",
            fontSize: "8pt",
            fontStyle: "normal",
            fontFamily: "Trebuchet MS",
            fontWeight: "normal"
          }
        },
        margin: 7
      },
      chartArea: {
        fill: "rgba(248, 248, 248,1)",
        outline: {
          color: "#A0A0A0",
          width: 1
        }
      },
      toolbar: {
        visible: !0,
        exportOptions: {
          server: "https://export.dotnetcharting.com/download",
          width: 800
        },
        position: "topRight",
        margin: 5,
        buttons: {
          print: {
            visible: !0,
            outline: {
              color: "rgb(123,123,123)"
            }
          },
          "export": {
            visible: !0,
            outline: {
              color: "rgb(123,123,123)"
            }
          },
          resetZoom: {
            label: {
              style: {
                color: "#3c3c3c"
              }
            }
          }
        },
        defaultButton: {
          fill: "rgb(220,220,220)",
          iconFill: "white",
          outline: {
            width: 1
          },
          iconOutline: {
            color: "rgb(123,123,123)",
            width: 1
          }
        }
      },
      animation: {
        easing: "easeOutSine",
        duration: 360
      },
      defaultSeries: {
        animation: {
          easing: "easeOutCubic",
          duration: 660
        },
        mouseTracking: {
          sticky: !1
        }
      },
      yAxis: {
        line: {
          color: "#A0A0A0",
          width: 1
        },
        label: {
          align: "center",
          style: {
            color: "#000000",
            fontSize: "9pt",
            fontFamily: "Tahoma, Geneva, sans-serif",
            fontWeight: "bold"
          },
          text: ""
        },
        defaultTick: {
          gridLine: {
            width: 1,
            color: "#D3D3D3",
            dashStyle: "Solid"
          },
          label: {
            style: {
              color: "#282828",
              fontSize: "8pt",
              fontFamily: "Trebuchet MS",
              fontWeight: "normal"
            }
          },
          line: {
            color: "#808080",
            length: 5,
            width: 1
          }
        },
        defaultMinorTick: {
          gridLine: {
            width: 1,
            color: "rgba(211,211,211,0.59)",
            dashStyle: "ShortDash"
          },
          line: {
            color: "#808080",
            length: 4,
            width: 1
          },
          label: {
            style: {
              color: "#484848",
              fontSize: "8pt",
              fontFamily: "Trebuchet MS",
              fontWeight: "normal"
            }
          }
        }
      }
    }
  }

  function B() {
    var b = y();
    b.chartArea.fill = "#b6d9ff";
    return b
  }

  function v() {
    return {
      scale: {
        type: "auto"
      },
      line: {
        color: "#A0A0A0",
        width: 1
      },
      label: {
        align: "center",
        style: {
          color: "#000000",
          fontSize: "9pt",
          fontFamily: "Tahoma, Geneva, sans-serif",
          fontWeight: "bold"
        }
      },
      defaultTick: {
        gridLine: {
          width: 1,
          color: "#D3D3D3",
          dashStyle: "Solid"
        },
        label: {
          style: {
            color: "#282828",
            fontSize: "8pt",
            fontFamily: "Trebuchet MS",
            fontWeight: "normal"
          }
        }
      },
      defaultMinorTick: {
        gridLine: {
          width: 1,
          color: "rgba(211,211,211,0.59)",
          dashStyle: "ShortDash"
        },
        line: {
          color: "#808080",
          length: 4,
          width: 1
        },
        label: {
          style: {
            color: "#484848",
            fontSize: "8pt",
            fontFamily: "Trebuchet MS",
            fontWeight: "normal"
          }
        }
      }
    }
  }

  function m() {
    var b = jQuery.extend(!0, null, v(), {
      label: {
        text: ""
      },
      defaultTick: {
        line: {
          color: "#808080",
          length: 5,
          width: 1
        }
      }
    });
    delete b.scale.type;
    return b
  }

  function a() {
    var b = m();
    return jQuery.extend(!0, null, b, {
      scale: {
        type: "normal"
      },
      label: {
        text: ""
      },
      defaultTick: {
        line: {
          color: "#808080",
          length: 5,
          width: 1
        }
      },
      line: {
        width: 0
      },
      alternateGridFill: "rgba(222,222,222,1)"
    })
  }

  function g() {
    var b = jQuery.extend(!0, null, v(), {
      label: {
        text: ""
      },
      centerTickMarks: !0,
      defaultTick: {
        line: {
          color: "#808080",
          length: 5,
          width: 1
        }
      }
    });
    delete b.scale.type;
    return b
  }

  function f() {
    var b = !1;
    try {
      try {
        new ActiveXObject("AgControl.AgControl"), b = !0
      } catch (a) {
        navigator.plugins["Silverlight Plug-In"] && (b = !0)
      }
    } catch (c) { }
    return b
  }

  function l(b, a) {
    l.cache = l.cache || {};
    "L" === l.cache[b] ? a(b) : l.cache[b] ? l.cache[b].push(a) : (l.cache[b] = [a], $.getScript(b, function () {
      for (var a = 0, c = l.cache[b].length; a < c; a++)(0, l.cache[b][a])(b);
      l.cache[b] = "L"
    }))
  }

  function x(b) {
    function a(b, c) {
      var k = b.getResponseHeader("content-type"),
        k = !c && k && 0 <= k.indexOf("xml"),
        k = "xml" == c || k ? b.responseXML : b.responseText;
      "script" == c && eval.call(window, k);
      return k
    }
    b = {
      type: b.type || "GET",
      url: b.url,
      timeout: b.timeout || 5E3,
      fg: b.fg || function () { },
      zd: b.zd || function () { },
      Ee: b.Ee ||
        function () { },
      data: b.data || "",
      nk: void 0
    };
    var c = new XMLHttpRequest;
    c.open(b.type, b.url, !0);
    var k = !1;
    setTimeout(function () {
      k = !0
    }, b.timeout);
    c.onreadystatechange = function () {
      if (c && 4 == c.readyState && !k) {
        var n;
        a: {
          try {
            n = !c.status && "file:" == location.protocol || 200 <= c.status && 300 > c.status || 304 == c.status || 0 <= navigator.userAgent.indexOf("Safari") && "undefined" == typeof c.status;
            break a
          } catch (w) { }
          n = !1
        }
        n ? b.Ee(a(c, b.type)) : b.zd(b.url);
        b.fg();
        c = null
      } else c && 404 == c.readyState && !k && b.zd(c.statusText)
    };
    c.send()
  }

  function e() {
    var b;
    $("script").each(function () {
      if (!H) {
        var a = $(this).attr("src"),
          c = !1;
        if (a && (/.+jscharting\.?[0-9]{6}\.js/i.test(a) || /.+jscharting\.js/i.test(a) || (c = -1 < a.toUpperCase().indexOf("JSCHARTING.MIN.JS")))) {
          var k = a.match(/\/\/([a-zA-Z0-9\.]+)\/?/);
          k && k.length && (window.JSCL.wk = G = k[1] || k[0]);
          H = a.match(/(.*\/)/ig)[0];
          c && (R = ".min.js");
          if (!H) throw "Cannot find JSCharting script tag in DOM.";
          window.JSCL.ye = H = H || "";
          window.location.origin || (window.location.origin = window.location.protocol + `//` + window.location.hostname +
            (window.location.port ? ":" + window.location.port : ""));
          (b = window.location.origin.match(/\/\/([a-zA-Z0-9\.]+)\/?/)) && b.length && (b = b[1] || b[0]);
          b && G && b.toUpperCase() !== G.toUpperCase() && (window.JSCL.jj = !0)
        }
      }
    })
  }

  function q(b, a, c) {
    function k(b, c, t) {
      var h, n, D, r, L;
      if (!b) return b;
      L = z(b);
      if (b && "string" === L || "number" === L) return b;
      c && 0 < c.length && "." === c.charAt(c.length - 1) && (c = c.substring(0, c.length - 1));
      n = u(c);
      if (n.skip) return b;
      c && 0 < c.length && "." !== c.charAt(c.length - 1) && (c = c + ".");
      t && 0 < t && !n && 0 < c.length && (a.xa += "!! property " +
        c + " not found\n", r = "Property " + c + " is not defined by the API.", a.Nb.push(r), a.ob.push([c + h, r]));
      if (b)
        if (n && -1 < n.type.indexOf("array") && "array" === L)
          if ("array" === L) {
            (n.validator || JSCL.j.a(n, "array.validator")) && d(n, b, c);
            h = 0;
            for (var Q = b.length; h < Q; h++) b[h] = k(b[h], c + h + ".", t)
          } else
            for (h in b) b[h] = k(b[h], c, t);
        else
          for (h in b)
            if (b.hasOwnProperty(h))
              if (L = c + h, n = w(L, !0), D = u(L), !n && t && 0 < t && !D && 0 > c.indexOf("points.attributes") && 0 > h.indexOf("uiCat") && (a.xa += "!! property " + L + " not found\n", r = "Property " + L + " is not defined by the API.",
                a.Nb.push(r), a.ob.push([L, r])), n) {
                n = [n, h.substring(n.length)];
                L = b;
                b = b[h];
                r = n[0];
                D = n[1];
                var E = r + D,
                  f = D.charCodeAt(0);
                D = 64 < f && 91 > f ? String.fromCharCode(f + 32).concat(D.substr(1)) : D;
                L[r] ? "undefined" === typeof L[r][D] && (L[r][D] = b) : (f = {}, L[r] = f, f[D] = b);
                delete L[E];
                b = L;
                b[n[0]] = k(b[n[0]], c + n[0], t)
              } else if (n = c && 0 < c.length ? D : u(h))
                if (r = b[h])
                  if ((D = n.type) && ("object" === D || "array" === D || -1 < D.indexOf("obj_"))) {
                    if (jQuery.isPlainObject(r) || r.pop) b[h] = k(r, L, t)
                  } else if (!d(n, r) && t && 0 < t && 0 > h.indexOf("fontFamily")) {
                    a: {
                      D = r;
                      if (n && n.type)
                        for (var E = n.type.split(","), f = 0, g = E.length; f < g; f++) {
                          var l = E[f];
                          if (-1 < l.indexOf("enum_chartType")) {
                            D = JSCL.lf.bb(D, "chartType", !0);
                            D = (D.chartType || "") + " " + (D.seriesType || "");
                            break a
                          }
                          if (-1 < l.indexOf("enum_")) {
                            D = e(l);
                            D = u(D).members;
                            var m, q;
                            for (q in D) D[q].isDefault && (Q = q), m || (m = q);
                            D = Q || m;
                            break a
                          }
                        }
                      D = void 0
                    }
                    D ? (n = n.type, "string" === z(r) && -1 < n.indexOf("enum_") ? r = "Property " + L + " value: (string) " + r + " is not defined as a valid setting. Defaulting to " + D : (a.xa += "!!" + L + " is not valid: " + r + ". Defaulting to " +
                      D + "\n", r = "Property " + L + " is not valid: " + r + ". Defaulting to " + D), a.Nb.push(r), a.ob.push([L, r]), b[h] = D) : (a.xa += "!!" + L + " is not valid: " + r + "\n", r = "Property " + L + " is not valid: (" + z(r) + ") " + r + ". The expected type is: " + n.type, a.Nb.push(r), a.ob.push([L, r]))
                  }
      return b
    }

    function n(d) {
      if (d && -1 < d.indexOf("obj_")) {
        d = d.split(",");
        for (var b in d) {
          var a = d[b];
          if (-1 < a.indexOf("obj_")) return a.substring(4)
        }
      }
    }

    function w(d, b) {
      function a(d) {
        var b = JSCL.nd(d);
        if ("undefined" !== typeof b) return b;
        b = JSCL.md(d);
        if ("undefined" !==
          typeof b) return b
      }

      function c(d, b, a) {
        var p, k, t = parseInt(b),
          u;
        if ("undefined" !== typeof d) {
          (k = n(d.type)) && (d["obj_" + k] ? d = JSCL.j.W(!0, null, JSCL.nd(k), d[d.type]) : d.object && d.object[b] || (d = JSCL.nd(k)));
          if (-1 < d.type.indexOf("array"))
            if ("specific" === d.array.arrayType) (k = n(d.array.types[0].type)) && (p = JSCL.nd(k).object);
            else if (d.array[0] && 0 <= t) {
              p = [];
              for (u in d.array) p.push(d.array[u].types[t]);
              return a ? void 0 : 1 === p.length ? p[0] : p
            }
          p || (p = "undefined" !== typeof d.object ? d.object : null);
          if (p) {
            d = p[b];
            var h;
            if (d) return d;
            for (u in p) {
              if (u === b) return p[u];
              if (b.indexOf && 0 === b.indexOf(u)) return a ? u = b.substring(0, u.length) : (a = b.substring(u.length), d = a.charCodeAt(0), u = c(p[u], 64 < d && 91 > d ? String.fromCharCode(d + 32).concat(a.substr(1)) : a)), u;
              "*" === u && (h = p[u])
            }
            return h
          }
        }
      }

      function k(d, b, a, p) {
        var u;
        if (a) {
          if (u = O[p]) return u;
          (d = c(d, b, a)) && (O[p] = d)
        } else {
          if (u = C[p]) return u;
          (d = c(d, b, a)) && (C[p] = d)
        }
        return d
      }
      d = d.replace(/\.[0-9]+\./g, ".");
      d.replace(/\.[0-9]+/g, "");
      var u = d.split("."),
        t = a(u[0]),
        h, z;
      z = u[0];
      u.shift();
      for (var e = 0, F = u.length; e <
        F; e++)
        if (h = u[e], z = z + "." + h, t = k(t, h, b, z), b && t && t.charAt) return t;
      if (!b && "undefined" != typeof t) return ((u = n(t.type)) || t.type && -1 < t.type.indexOf("enum_")) && -1 === t.type.indexOf(",") && (h = a(u ? u : t.type.substring(5)), t["obj_" + u] && h.object && (h.object = JSCL.j.W(!0, null, h.object, t["obj_" + u].object)), h.type = t.type || h.type, h.description = t.description || h.description, t = h), t
    }

    function u(d) {
      d = d.replace(/\.[0-9]+\./g, ".").replace(/\.[0-9]+/g, "");
      var b;
      if (b = C[d]) return b;
      if (b = w(d)) C[d] = b;
      return b
    }

    function e(d) {
      var b;
      if (d &&
        -1 < d.indexOf("enum_")) {
        d = d.split(",");
        for (var a = 0, c = d.length; a < c; a++)
          if (-1 < (b = d[a]).indexOf("enum_")) return b.substring(5)
      }
    }

    function d(d, a, c) {
      var k;
      if (d.pop) return !0;
      if (d && d.type) {
        var u = d.type.split(","),
          t = 0,
          n;
        for (n in u)
          if (k = u[n], -1 < k.indexOf("enum_")) {
            if ("string" === typeof a && (k = e(k), "undefined" === typeof JSCL.lf.bb(a, k).invalid)) return !0;
            t++
          } else if (-1 < k.indexOf("bool")) {
            if ("boolean" === typeof a) return !0;
            t++
          } else if (-1 < k.indexOf("number")) {
            if ("number" === typeof a || (d.allowNull || d.number && d.number.allowNull) &&
              null === a) return !0;
            t++
          } else if (-1 < k.indexOf("function")) {
            if ("function" === typeof a) return !0;
            t++
          } else if (-1 < k.indexOf("array")) {
            if (k = JSCL.j.a(d, "array.validator")) "string" === typeof k && (k = eval("(" + k + ")")), "function" === typeof k && (k = k(a, c, b, JSCL.Ff())) && JSCL.yb.hb(k.message);
            if (a.pop) return !0;
            t++
          } else if (-1 < k.indexOf("string")) {
            if ("string" === typeof a)
              if (k = JSCL.j.a(d, "string.validator")) {
                if ("function" === typeof k && (k = k(a, c, b, JSCL.Ff()), !k)) return !0
              } else return !0;
            t++
          }
        return t !== u.length
      }
    }
    var z = JSCL.Ka.K;
    a ||
      (a = {
        xa: "",
        Nb: [],
        ob: []
      });
    a.xa = "";
    var D = a.Nb = [];
    a.ob = [];
    var t = k(b, "chart", 2);
    if (c) {
      c = 0;
      for (var r = D.length; c < r; c++) JSCL.yb.hb(D[c])
    }
    return t
  }

  function U(b, a, c) {
    ha && c.S.Ua("Chart.aG", "Start");
    var k = [],
      n, w = b.defaultCultureName;
    w || (w = "en-US");
    k.push(w);
    (n = b.yAxisCultureName || JSCL.j.a(b, "yAxis.cultureName")) && k.push(n);
    (n = b.xAxisCultureName || JSCL.j.a(b, "xAxis.cultureName")) && k.push(n);
    0 < k.length && (Globalize.cultures[k[0]] || Globalize.culture(k[0]));
    for (n in k) "en-US" === k[n] || Globalize.cultures[k[n]] || (c.rd =
      1, l(a + "cultures/globalize.culture." + k[n] + ".js", function () {
        Globalize.culture(k[n]);
        0 === P && (c.rd = 0);
        ha && c.S.Ua("Chart.aGn", "End")
      }));
    Globalize.culture(w)
  }
  var C = {},
    O = {},
    A = [];
  "undefined" === typeof window.JSCL && (window.JSCL = {});
  var N = window,
    H, G, R = ".js",
    ha = function () {
      var b;
      if (window.location.hash)
        for (var a = window.location.hash.substring(1).split("&"), c, k = 0, n = a.length; k < n; k++) c = a[k].split("="), "JSCDEBUGTIME" === c[0].toUpperCase() ? b = !0 : "JSCCAPTUREERRORS" === c[0].toUpperCase() && (window.onerror = function (b, a, c) {
          var d =
            document.createElement("div");
          d.className = "fancyerror";
          d.innerHTML = 'JS: <span class="errmsg"' + b.replace("<", "&lt;").replace(">", "&gt;") + "</span><br>line number: " + c + "<br>located: " + a;
          document.body.appendChild(d);
          return !1
        });
      return b
    }(),
    V, P = 1;
  (function () {
    e();
    "file:" === window.location.protocol || 1 || window.JSCL.jj ? P = 0 : x({
      url: H + "cultures/globalize.culture.en-BA.js",
      Ee: function (b) {
        V = b;
        P = 0
      },
      zd: function () {
        P = 0
      }
    })
  })();
  (function (b) {
    "undefined" == typeof b ? JSCL.yb.hb("jQuery not detected. Please make sure to include it in a script tag.") :
      b.fn.JSC = function () {
        function b(a) {
          for (var c = 0, d = A.length; c < d; c++)
            if (a[0] == A[c][0]) return A[c][1]
        }
        var a = "Chart",
          c = arguments,
          k, h;
        this[0] && ("string" === typeof c[0] && (a = c[0], c = Array.prototype.slice.call(c, 1)), k = c[0], "undefined" !== typeof k ? ((h = b(this)) && h.dispose(), k.targetElement = this[0], a = new JSC[a](k, c[1]), a.fk = A.length, A.push([this[0], a]), k = this) : k = b(this));
        return k
      }
  })(N.jQuery);
  var k = y();
  B();
  var b = m(),
    c = v(),
    w = {
      zIndex: 1,
      line: {
        width: 2
      },
      label: {
        style: {
          color: "#282828",
          fontSize: "9pt",
          fontFamily: "Trebuchet MS",
          fontWeight: "normal"
        }
      }
    },
    D = jQuery.extend(!0, null, y(), {
      axisToZoom: "",
      defaultAnnotation: {
        radius: 6,
        label: {
          style: {
            color: "#000000",
            fontSize: "8pt"
          }
        },
        zIndex: 10
      },
      defaultTooltip: {
        fill: "rgb(254,254,254)",
        outline: {
          color: "rgb(150,150,150)"
        }
      },
      navigator: {
        enabled: !0,
        xScrollbarVisible: !0,
        toolbar: {
          quickZoom: {
            intervals: "auto",
            spacing: 5,
            defaultButton: {
              fill: "rgb(224,225,234)",
              outline: {
                color: "rgb(116,122,154)"
              },
              label: {
                style: {
                  color: "#3c3c3c"
                }
              },
              states: {
                hover: {
                  fill: "rgb(234,235,244)",
                  stroke: "rgb(116,122,154)"
                },
                select: {
                  fill: "rgb(202,201,255)",
                  stroke: "rgb(116,122,154)"
                }
              }
            }
          },
          rangeInput: {
            visible: !0,
            formatString: "d",
            formatStringEdit: "d",
            boxStyle: {
              color: "black",
              fontSize: "8.5pt",
              fontFamily: "Verdana",
              fontWeight: "normal"
            }
          }
        },
        silverlight: {
          loadingAnimation: "Snake"
        },
        previewArea: {
          seriesSettings: {
            transparency: 30
          }
        }
      },
      defaultSeries: {
        states: {
          hover: {
            lineWidth: 3
          }
        }
      }
    }),
    r = {
      fill: "rgba(248, 248, 248,1)",
      yAxis: jQuery.extend(!0, null, v(), {
        defaultTick: {
          line: {
            color: "#808080",
            length: 5,
            width: 1
          }
        },
        alternateGridFill: "rgba(222,222,222,1)",
        scale: {
          type: "range"
        }
      }),
      outline: {
        color: "#A0A0A0",
        width: 1
      },
      interactivity: "scrollWheel,dragScrolling,arbitrarySelection"
    };
  window.JSC = jQuery.extend(!1, null, window.JSC, {
    Chart: J,
    ph: function () {
      var a = y();
      a.xAxis = c;
      a.yAxis = b;
      return a
    }(),
    Sj: D,
    rc: q,
    formatString: function (b, a) {
      var c;
      try {
        c = Globalize.format(b, a)
      } catch (k) {
        JSCL.yb.hb("Formatting error: " + k), c = b
      }
      return c
    },
    clearApiCache: function () {
      delete this.Dj;
      delete this.Ej
    },
    cl: {
      axisToZoom: "",
      defaultAnnotation: {
        Ok: 6,
        label: {
          style: {
            color: "#000000",
            fontSize: "8pt"
          }
        },
        zIndex: 10
      },
      defaultTooltip: {
        fill: "rgb(254,254,254)",
        outline: {
          color: "rgb(150,150,150)"
        }
      },
      navigator: {
        enabled: !0,
        kl: !0,
        toolbar: {
          Nk: {
            pk: "auto",
            $k: 5,
            Rj: {
              fill: "rgb(224,225,234)",
              outline: {
                color: "rgb(116,122,154)"
              },
              label: {
                style: {
                  color: "#3c3c3c"
                }
              },
              Ve: {
                hover: {
                  fill: "rgb(234,235,244)",
                  stroke: "rgb(116,122,154)"
                },
                select: {
                  fill: "rgb(202,201,255)",
                  stroke: "rgb(116,122,154)"
                }
              }
            }
          },
          Pk: {
            visible: !0,
            Vj: "d",
            Wj: "d",
            Mj: {
              color: "black",
              fontSize: "8.5pt",
              fontFamily: "Verdana",
              fontWeight: "normal"
            }
          }
        },
        Xk: {
          xk: "Snake"
        },
        Mk: {
          Wk: {
            oj: 30
          }
        }
      },
      defaultSeries: {
        states: {
          hover: {
            lineWidth: 3
          }
        }
      }
    }
  });
  window.JSC.Chart =
    J;
  window.JSC.lState = function () {
    return P
  };
  window.JSC.getVersion = function () {
    var b = "1.5.0.20160621"; - 1 < b.indexOf("%%VER") && (b = "8.4.1.5.0.20160620.160620");
    return b
  };
  window.JSC.processAPI = function (b) {
    var a = {};
    q(b, a, "skipConsleOut");
    return a.ob
  };
  window.JSC.getPalette = function (b) {
    return JSCL.He.get(b)
  };
  window.JSC.colorToPalette = function (b, a, c, k) {
    return JSCL.m.rf(b, a, c, k)
  }
})();
window.JSCL.JscSeries = function () { };
window.JSCL.JscSeries.prototype = {
  config: {},
  adapter: {},
  points: [],
  chart: {},
  calculations: {},
  name: "",
  id: "",
  zoomTo: "",
  init: function (J, y) {
    var B = this,
      v = J.points,
      m = y.ha(J.id);
    B.config = J;
    B.adapter = y;
    B.chart = y.C;
    v = jQuery.map(JSCL.j.vg(v || []), function (a) {
      var g;
      if (g = y.wa("get", a.id || J.id)) return g;
      g = new window.JSCL.JscPoint;
      g.init(a, y, B);
      return g
    });
    B.calculations = B.adapter.Mf(B.config);
    m && (B.color = m.color);
    B.points = v;
    B.name = J.name;
    B.id = J.id;
    B.show = function (a) {
      return this.adapter.nj(this.config, a)
    };
    B.addPoint =
      function (a, g) {
        var f = this.adapter,
          l = {},
          m;
        l.series = [{
          points: [f.u.na.kb(a, f.u.j.a(f.json, "xAxis.scale.type"))]
        }];
        l = JSC.rc(l);
        m = l.series[0].points[0];
        delete l.series;
        f.Rg(this, m, g)
      };
    B.updatePoints = function (a, g) {
      var f = this.adapter;
      g = g || {};
      "string" !== typeof a || 0 !== a.indexOf("JSC.pointsFromArray(") && 0 !== a.indexOf("$.map(") || eval("(" + a + ")");
      f.Bg(a, this, g)
    };
    B.remove = function (a) {
      this.adapter.Wi(this, a)
    };
    B.replaceTokens = function (a) {
      var g = this.adapter;
      return g.Ba(a, g.ia(this.config.id))
    };
    B.tokenValue = function (a) {
      var g =
        this.adapter;
      return g.Ba({
        token: a
      }, g.ia(this.config.id))
    };
    B.select = function (a) {
      this.adapter.aj(this.config, a)
    };
    B.setPalette = function (a, g) {
      this.adapter.rj(this, a, g)
    };
    B.zoomTo = function (a) {
      this.adapter.kg(this.config, a)
    };
    y.wa("update", B)
  },
  fireEvent: function (J, y) {
    this.calcs = this.adapter.Mf(this.config);
    return y.call(this, J)
  }
};
window.JSCL.JscPoint = function () { };
window.JSCL.JscPoint.prototype = {
  config: {},
  series: {},
  adapter: {},
  calculations: {},
  chart: {},
  color: {},
  explode: "",
  zoomTo: "",
  id: {},
  name: {},
  position: {},
  remove: "",
  replaceTokens: "",
  select: "",
  series: "",
  tokenValue: "",
  update: "",
  x: "",
  y: "",
  yStart: "",
  z: "",
  init: function (J, y, B) {
    this.config = J;
    this.adapter = y;
    this.chart = y.C;
    J.seriesId ? (this.series = B || y.get(J.seriesId), this.color = y.G.pd({
      id: J.seriesId
    }, J)) : B && (this.series = B);
    (B = y.ha(J.id)) && (this.position = {
      size: {
        width: B.barW,
        height: B.barH
      },
      chartArea: {
        x: B.plotX,
        y: B.plotY
      },
      page: {
        x: B.pageX,
        y: B.pageY
      }
    });
    B = JSCL.j.a(this, "series.config");
    this.calculations = y.If(J, B);
    this.name = J.name;
    this.id = J.id;
    this.x = J.x;
    this.y = J.y;
    this.x = J.x;
    this.z = J.z;
    this.yStart = J.yStart;
    this.update = function (v, m) {
      var a = this.adapter,
        g = {},
        f;
      g.series = [{
        points: [a.u.na.kb(v, JSCL.j.a(a.json, "xAxis.scale.type"), null, null, {
          skipID: 1
        })]
      }];
      g = JSC.rc(g);
      f = g.series[0].points[0];
      delete g.series;
      a.qj(this, f, m)
    };
    this.remove = function (v) {
      this.adapter.Vi(this, v)
    };
    this.select = function (v, m) {
      this.adapter.$i(this.config, v,
        m)
    };
    this.explode = function (v, m) {
      this.adapter.Fh(this.config, v, m)
    };
    this.zoomTo = function (v) {
      this.adapter.kg(this.config, v)
    };
    this.replaceTokens = function (v) {
      var m = this.adapter;
      return m.La(v, m.ia(this.series.config.id), m.ia(this.config.id), void 0, this.color)
    };
    this.tokenValue = function (v) {
      var m = this.adapter;
      return m.La({
        token: v
      }, m.ia(this.series.config.id), m.ia(this.config.id), void 0, this.color)
    };
    y.wa("update", this)
  }
};
window.JSCL.Tc = function () { };
window.JSCL.Tc.prototype = {
  config: {},
  adapter: {},
  init: function (J, y) {
    this.config = J;
    this.adapter = y;
    this.setRange = function (y, v, m) {
      this.adapter.sg(this.config, y, v, m)
    };
    this.getRange = function () {
      return this.adapter.Bf(this.config)
    };
    this.addMarker = function (y) {
      var v = this.adapter,
        m = {};
      JSCL.j.c(m, "yAxis.markers", [y]);
      m = JSC.rc(m);
      y = m.yAxis.markers[0];
      delete m.yAxis;
      v.jf(this.config, y)
    };
    this.removeMarker = function (y) {
      return this.adapter.qg(this.config, y)
    };
    this.setRange = function (y, v) {
      this.adapter.sg(this.config, y,
        v)
    };
    this.getRange = function () {
      return this.adapter.Bf(this.config)
    };
    this.addMarker = function (y) {
      var v = this.adapter,
        m = {};
      JSCL.j.c(m, "yAxis.markers", [y]);
      m = JSC.rc(m);
      y = m.yAxis.markers[0];
      delete m.yAxis;
      v.jf(this.config, y)
    };
    this.removeMarker = function (y) {
      return this.adapter.qg(this.config, y)
    };
    this.setLabel = function (y, v) {
      this.adapter.cj(this.config, y, v)
    };
    y.wa("update", this)
  }
};
(function () {
  function J() {
    return new y
  }

  function y() { }
  var B = {},
    v = {
      type: "number"
    },
    m = {
      type: "string"
    },
    a = {
      type: "bool"
    },
    g = {
      type: "obj_eventHandler"
    },
    f = {
      type: "obj_fill"
    },
    l = {
      type: "obj_color"
    };
  y.prototype = {
    De: {
      chart: {
        type: "object",
        object: {
          renderMode: {
            type: "enum_renderMode"
          },
          animation: {
            type: "obj_animation"
          },
          type: {
            type: "enum_chartType"
          },
          targetElement: {
            type: "string,object"
          },
          template: {
            type: "obj_chart"
          },
          defaultSeries: {
            type: "obj_series"
          },
          defaultPoint: {
            type: "obj_point"
          },
          defaultAnnotation: {
            type: "obj_annotation"
          },
          defaultCultureName: {
            type: "enum_cultures"
          },
          palette: {
            type: "enum_palette,array,obj_smartPalette",
            array: {
              arrayType: "specific",
              types: [l]
            }
          },
          width: {
            type: "number,string"
          },
          height: {
            type: "number,string"
          },
          annotations: {
            type: "array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_annotation"
              }]
            }
          },
          fill: l,
          box: {
            type: "object",
            object: {
              outline: {
                type: "obj_outline"
              },
              radius: v,
              fill: l
            }
          },
          debug: a,
          xAxis: {
            type: "obj_axis,array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_axis"
              }]
            }
          },
          yAxis: {
            type: "array,obj_axis",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_axis"
              }]
            }
          },
          zAxisFormatString: m,
          zAxisCultureName: {
            type: "enum_cultures"
          },
          zAxisLabelText: m,
          zAxisScaleType: m,
          legend: {
            type: "obj_legend"
          },
          title: {
            type: "obj_titleBox"
          },
          chartArea: {
            type: "obj_chartArea,array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_chartArea"
              }]
            }
          },
          series: {
            type: "array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_series"
              }]
            }
          },
          languageStrings: {
            type: "obj_languageStrings"
          },
          events: {
            type: "object",
            object: {
              click: g,
              addSeries: g,
              load: g,
              redraw: g,
              selection: g
            }
          },
          defaultTooltip: {
            type: "obj_tooltip"
          },
          toolbar: {
            type: "obj_toolbar"
          },
          axisToZoom: {
            type: "enum_zoomAxis"
          },
          navigator: {
            type: "obj_navigator"
          },
          windowlessMode: a,
          margin: {
            type: "number,array,object",
            array: {
              0: {
                arrayType: "specific",
                types: [{
                  name: "Top",
                  type: "number"
                }, {
                  name: "Right",
                  type: "number"
                }, {
                  name: "Bottom",
                  type: "number"
                }, {
                  name: "Left",
                  type: "number"
                }]
              }
            },
            object: {
              top: v,
              right: v,
              bottom: v,
              left: v
            }
          },
          spacingChartArea: v,
          mapping: {
            type: "object",
            object: {
              base: {
                type: "object",
                object: {
                  layers: m,
                  series: {
                    type: "obj_series"
                  }
                }
              },
              referenceLayers: m,
              projection: a
            }
          }
        }
      },
      annotation: {
        type: "object",
        object: {
          label: {
            type: "obj_label"
          },
          fill: f,
          outline: {
            type: "obj_outline"
          },
          transparency: v,
          opacity: v,
          boxVisible: a,
          radius: v,
          padding: v,
          position: m,
          width: v,
          height: v
        }
      },
      axis: {
        type: "object",
        object: {
          id: m,
          label: {
            type: "obj_label",
            obj_label: {
              object: {
                margin: v
              }
            }
          },
          alternateGridFill: f,
          orientation: {
            type: "enum_orientation"
          },
          defaultTick: {
            type: "obj_axisTick"
          },
          defaultMinorTick: {
            type: "obj_axisTick"
          },
          customTicks: {
            type: "array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_axisTick"
              }, v]
            }
          },
          line: {
            type: "obj_outline"
          },
          markers: {
            type: "array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_axisMarker"
              }]
            }
          },
          centerTickMarks: a,
          formatString: m,
          cultureName: {
            type: "enum_cultures"
          },
          spacingPercentage: v,
          staticColumnWidth: v,
          chartAreaOffset: v,
          scale: {
            type: "object",
            object: {
              zoomLimit: {
                type: "number,obj_timeInterval"
              },
              interval: {
                type: "number,obj_timeInterval"
              },
              minorInterval: {
                type: "number,obj_timeInterval,string"
              },
              invert: a,
              range: {
                type: "object,array",
                object: {
                  min: {
                    type: "number,date,string"
                  },
                  max: {
                    type: "number,date,string"
                  },
                  padding: v
                },
                array: {
                  0: {
                    arrayType: "specific",
                    types: [{
                      type: "number,date,string",
                      name: "min"
                    }, {
                      type: "number,date,string",
                      name: "max"
                    }]
                  }
                }
              },
              breaks: {
                type: "object,array",
                array: {
                  arrayType: "specific",
                  types: [{
                    type: "array",
                    array: {
                      0: {
                        arrayType: "specific",
                        types: [{
                          type: "number,date",
                          name: "min"
                        }, {
                          type: "number,date",
                          name: "max"
                        }]
                      }
                    }
                  }]
                },
                object: {
                  limit: v
                }
              },
              syncWith: m,
              type: {
                type: "enum_scale"
              }
            }
          },
          visible: a
        }
      },
      axisTick: {
        type: "object",
        object: {
          gridLine: {
            type: "obj_line"
          },
          line: {
            type: "obj_line"
          },
          label: {
            type: "obj_label",
            obj_label: {
              object: {
                text: {
                  type: "string,method",
                  string: {
                    tokenSet: "value"
                  }
                }
              }
            }
          },
          value: {
            type: "number,string,date",
            string: {
              tokenSet: "seriesCollection"
            }
          },
          enabled: a,
          includeInScale: a
        }
      },
      axisMarker: {
        type: "object",
        object: {
          id: m,
          value: {
            type: "number,string,object,array",
            object: {
              low: {
                type: "number,date,string",
                string: {
                  tokenSet: "seriesCollection"
                }
              },
              high: {
                type: "number,date,string",
                string: {
                  tokenSet: "seriesCollection"
                }
              }
            },
            array: {
              0: {
                arrayType: "specific",
                types: [{
                  name: "low",
                  type: "number,date,string",
                  string: {
                    tokenSet: "seriesCollection"
                  }
                }, {
                  name: "high",
                  type: "number,date,string",
                  string: {
                    tokenSet: "seriesCollection"
                  }
                }]
              }
            },
            string: {
              tokenSet: "seriesCollection"
            }
          },
          includeInScale: a,
          color: f,
          line: {
            type: "obj_line"
          },
          bringToFront: a,
          transparency: v,
          opacity: v,
          label: {
            type: "obj_label",
            obj_label: {
              object: {
                text: m
              }
            }
          },
          zIndex: v
        }
      },
      color: {
        type: "enum_colors,string,array",
        array: {
          0: {
            type: "array",
            arrayType: "specific",
            types: [{
              name: "color",
              type: "obj_color"
            }, {
              name: "opacity",
              type: "number"
            }]
          }
        }
      },
      fill: {
        type: "obj_color,array,object",
        array: {
          0: {
            type: "array",
            arrayType: "specific",
            types: [{
              name: "color",
              type: "obj_color"
            }, {
              name: "shaded",
              type: "bool"
            }]
          },
          1: {
            type: "array",
            arrayType: "specific",
            types: [{
              name: "color1",
              type: "obj_color"
            },
            {
              name: "colorN",
              type: "obj_color",
              multi: !0
            }, {
              name: "angle",
              type: "number"
            }
            ]
          }
        },
        object: {
          angle: v,
          stops: {
            type: "array",
            array: {
              arrayType: "anyType",
              types: [{
                type: "array",
                array: {
                  0: {
                    arrayType: "specific",
                    types: [{
                      name: "position",
                      type: "number"
                    }, {
                      name: "color",
                      type: "obj_color"
                    }]
                  }
                }
              }]
            }
          }
        }
      },
      smartPalette: {
        type: "object",
        object: {
          pointValue: {
            type: "string",
            string: {
              tokenSet: "point"
            }
          },
          stops: {
            type: "array",
            array: {
              arrayType: "anyType",
              types: [{
                type: "array",
                array: {
                  0: {
                    arrayType: "specific",
                    types: [{
                      name: "value",
                      type: "number"
                    }, {
                      name: "color",
                      type: "obj_color"
                    }, {
                      name: "snapStart",
                      type: "number",
                      required: !1
                    }, {
                      name: "snapEnd",
                      type: "number",
                      required: !1
                    }]
                  },
                  1: {
                    arrayType: "specific",
                    types: [{
                      name: "value",
                      type: "number"
                    }, {
                      name: "color",
                      type: "obj_color"
                    }, {
                      name: "snapStart",
                      type: "number",
                      required: !1
                    }]
                  },
                  2: {
                    arrayType: "specific",
                    types: [{
                      name: "value",
                      type: "number"
                    }, {
                      name: "color",
                      type: "obj_color"
                    }]
                  }
                }
              }]
            }
          },
          colors: {
            type: "array",
            array: {
              arrayType: "anyType",
              types: [l]
            }
          },
          invert: a
        }
      },
      label: {
        type: "object",
        object: {
          text: {
            type: "string,method"
          },
          color: l,
          visible: a,
          align: {
            type: "enum_alignHorizontal"
          },
          verticalAlign: {
            type: "enum_alignVertical"
          },
          offset: {
            type: "string,number"
          },
          style: {
            type: "obj_labelStyle"
          },
          cssClass: m,
          url: m,
          urlTarget: {
            type: "enum_urlTarget"
          },
          rotation: v
        }
      },
      outline: {
        type: "object",
        object: {
          color: l,
          dashStyle: {
            type: "enum_dashStyle"
          },
          width: v
        }
      },
      line: {
        type: "object",
        object: {
          color: l,
          width: v,
          dashStyle: {
            type: "enum_dashStyle"
          },
          length: v
        }
      },
      chartArea: {
        type: "object",
        object: {
          fill: {
            type: "obj_fill",
            obj_fill: {
              object: {
                image: m
              }
            }
          },
          transparency: v,
          opacity: v,
          outline: {
            type: "obj_outline"
          },
          shadow: a,
          height: v,
          series: {
            type: "array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_series"
              }]
            }
          },
          yAxis: {
            type: "obj_axis,array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_axis"
              }]
            }
          },
          interactivity: {
            type: "flag_chartAreaInteractivity"
          },
          view: {
            type: "obj_view"
          }
        }
      },
      series: {
        type: "object",
        object: {
          id: m,
          name: m,
          defaultPoint: {
            type: "obj_point"
          },
          points: {
            type: "array",
            array: {
              arrayType: "specific",
              types: [{
                type: "obj_point"
              }]
            }
          },
          color: l,
          line: {
            type: "obj_line",
            obj_line: {
              object: {
                transparency: v,
                opacity: v
              }
            }
          },
          emptyPointMode: {
            type: "enum_emptyPointMode"
          },
          pointSelection: a,
          animation: {
            type: "obj_animation"
          },
          cursor: {
            type: "enum_cursor"
          },
          mouseTracking: {
            type: "object",
            object: {
              enabled: a,
              sticky: a
            }
          },
          legendEntry: {
            type: "obj_legendEntry"
          },
          palette: {
            type: "enum_palette,array,obj_smartPalette",
            array: {
              arrayType: "specific",
              types: [l]
            }
          },
          type: {
            type: "enum_seriesType,enum_chartType"
          },
          xAxis: {
            type: "number,string"
          },
          yAxis: {
            type: "number,string"
          },
          explodeOffset: v,
          transparency: v,
          opacity: v,
          states: {
            type: "object",
            object: {
              hover: {
                type: "obj_seriesState"
              },
              select: {
                type: "obj_seriesState"
              }
            }
          },
          events: {
            type: "object",
            object: {
              mouseOver: g,
              mouseOut: g,
              click: g,
              checkBoxClick: g,
              legendEntryClick: g,
              show: g,
              hide: g
            }
          },
          onSeries: m,
          angle: {
            type: "obj_angleArc"
          },
          shape: {
            type: "obj_shape",
            obj_shape: {
              type: "object",
              object: {
                center: m,
                size: {
                  type: "string,number,array",
                  array: {
                    0: {
                      arrayType: "specific",
                      types: [{
                        type: "number,string",
                        name: "width",
                        number: v
                      }, {
                        type: "number,string",
                        name: "height",
                        number: v
                      }]
                    }
                  }
                },
                innerSize: {
                  type: "string,number"
                },
                offset: m,
                padding: {
                  type: "string,number",
                  number: {
                    min: 0,
                    max: 1
                  }
                },
                innerPadding: {
                  type: "number",
                  number: {
                    min: 0
                  }
                }
              }
            }
          },
          size: {
            type: "object,array",
            object: {
              min: {
                type: "number,string",
                number: v
              },
              max: {
                type: "number,string",
                number: v
              }
            },
            array: {
              0: {
                arrayType: "specific",
                types: [{
                  type: "number,string",
                  name: "min",
                  number: v
                }, {
                  type: "number,string",
                  name: "max",
                  number: v
                }]
              }
            }
          },
          map: {
            type: "string,obj_mapFileData",
            skip: !0
          },
          mapDataId: {
            type: "string",
            skip: !0
          },
          isBaseLayer: {
            type: "bool",
            skip: !0
          }
        }
      },
      point: {
        type: "array,object",
        object: {
          id: m,
          parent: m,
          color: l,
          transparency: v,
          opacity: v,
          marker: {
            type: "obj_pointMarker"
          },
          label: {
            type: "obj_label",
            obj_label: {
              object: {
                line: {
                  type: "obj_line"
                },
                text: {
                  type: "string,method",
                  string: {
                    tokenSet: "point"
                  }
                }
              }
            }
          },
          tooltip: {
            type: "string,method",
            string: {
              tokenSet: "point"
            }
          },
          outline: {
            type: "obj_outline"
          },
          url: {
            type: "string",
            tokenSet: "point"
          },
          states: {
            type: "object",
            object: {
              hover: {
                type: "obj_pointState"
              },
              select: {
                type: "obj_pointState"
              }
            }
          },
          events: {
            type: "object",
            object: {
              mouseOver: g,
              mouseOut: g,
              click: g,
              select: g,
              unselect: g,
              remove: g,
              update: g
            }
          },
          name: m,
          x: {
            type: "number,date,string"
          },
          y: {
            type: "number,array,string,date",
            number: {
              allowNull: !0
            },
            array: {
              0: {
                arrayType: "specific",
                types: [{
                  name: "yStart",
                  type: "number,string,date",
                  number: {
                    allowNull: !0
                  }
                }, {
                  name: "y",
                  type: "number,string,date",
                  number: {
                    allowNull: !0
                  }
                }]
              }
            }
          },
          z: {
            type: "number",
            number: {
              allowNull: !0
            }
          },
          annotation: {
            type: "obj_annotation"
          },
          attributes: {
            type: "array,object",
            object: {
              "*": {
                type: "string,number,date"
              }
            },
            array: {
              arrayType: "specific",
              types: [{
                type: "array",
                array: {
                  0: {
                    arrayType: "specific",
                    types: [{
                      name: "key",
                      type: "string"
                    }, {
                      name: "value",
                      type: "string,number,date"
                    }]
                  }
                }
              }]
            }
          },
          exploded: a,
          open: {
            type: "number",
            number: {
              allowNull: !1
            }
          },
          high: {
            type: "number",
            number: {
              allowNull: !1
            }
          },
          low: {
            type: "number",
            number: {
              allowNull: !1
            }
          },
          close: {
            type: "number",
            number: {
              allowNull: !1
            }
          },
          subvalue: {
            type: "obj_subvalue"
          },
          map: {
            type: "string,obj_mapFileData",
            skip: !0
          },
          mapDataId: {
            type: "string",
            skip: !0
          }
        },
        array: {
          0: {
            arrayType: "specific",
            types: [{
              type: "number",
              name: "X"
            }, {
              name: "Y",
              type: "number"
            }]
          },
          1: {
            arrayType: "specific",
            types: [{
              name: "X",
              type: "date"
            }, {
              name: "Y",
              type: "number"
            }]
          },
          2: {
            arrayType: "specific",
            types: [{
              name: "X",
              type: "string"
            }, {
              name: "Y",
              type: "number"
            }]
          },
          3: {
            arrayType: "specific",
            types: [{
              name: "X",
              type: "date,string"
            },
            {
              name: "Open",
              type: "number"
            }, {
              name: "High",
              type: "number"
            }, {
              name: "Low",
              type: "number"
            }, {
              name: "Close",
              type: "number"
            }
            ]
          }
        }
      },
      legend: {
        type: "object",
        object: {
          fill: f,
          outline: {
            type: "obj_outline"
          },
          radius: v,
          visible: a,
          defaultEntry: {
            type: "obj_legendEntry"
          },
          reversed: a,
          shadow: a,
          width: v,
          height: v,
          margin: v,
          transparency: v,
          opacity: v,
          boxVisible: a,
          layout: {
            type: "enum_legendLayout"
          },
          offset: m,
          position: {
            type: "enum_orientation,string"
          },
          titleLabel: {
            type: "obj_label",
            obj_label: {
              object: {
                text: {
                  type: "string",
                  tokenSet: "seriesCollection"
                }
              }
            }
          }
        }
      },
      legendEntry: {
        type: "object",
        object: {
          width: v,
          iconWidth: v,
          text: {
            type: "string,method",
            string: {
              tokenSet: "series"
            }
          },
          style: {
            type: "obj_labelStyle"
          },
          color: l,
          checkBox: a,
          visible: a,
          sortOrder: v,
          cssClass: m,
          states: {
            type: "object",
            object: {
              hover: {
                type: "obj_legendEntryState"
              },
              hidden: {
                type: "obj_legendEntryState"
              }
            }
          },
          padding: v
        }
      },
      pointMarker: {
        type: "object",
        object: {
          type: {
            type: "enum_markerTypes,string",
            string: {}
          },
          visible: a,
          fill: f,
          outline: {
            type: "obj_outline"
          },
          size: v,
          states: {
            type: "object",
            object: {
              hover: {
                type: "obj_pointMarkerState"
              },
              select: {
                type: "obj_pointMarkerState"
              }
            }
          }
        }
      },
      timeInterval: {
        type: "object",
        object: {
          unit: {
            type: "enum_timeUnit"
          },
          multiplier: v
        }
      },
      titleBox: {
        type: "object",
        object: {
          label: {
            type: "obj_label",
            obj_label: {
              object: {
                text: {
                  type: "string",
                  tokenSet: "seriesCollection"
                }
              }
            }
          },
          fill: f,
          transparency: v,
          opacity: v,
          boxVisible: a,
          radius: v,
          padding: v,
          outline: {
            type: "obj_outline"
          },
          position: {
            type: "enum_titlePosition"
          }
        }
      },
      tooltip: {
        type: "object",
        object: {
          fill: f,
          transparency: v,
          opacity: v,
          outline: {
            type: "obj_outline"
          },
          radius: v,
          enabled: a,
          shadow: a,
          padding: v,
          label: {
            type: "obj_label",
            obj_label_def: {
              style: {
                fontSize: "9pt",
                fontFamily: "Tahoma",
                fontWeight: "normal",
                textDecoration: "none"
              }
            }
          },
          cssClass: m,
          snap: v,
          sticky: a
        }
      },
      toolbar: {
        type: "object",
        object: {
          visible: a,
          defaultButton: {
            type: "obj_button"
          },
          buttons: {
            type: "object",
            object: {
              "export": {
                type: "obj_button"
              },
              print: {
                type: "obj_button"
              },
              resetZoom: {
                type: "obj_txtButton"
              }
            }
          },
          exportOptions: {
            type: "obj_exportOptions"
          },
          position: {
            type: "enum_orientation,string"
          },
          offset: m,
          margin: v
        }
      },
      languageStrings: {
        type: "object",
        object: {
          downloadJPG: m,
          downloadPDF: m,
          downloadPNG: m,
          downloadSVG: m,
          exportButtonTooltip: m,
          printButtonTooltip: m,
          resetZoomText: m,
          resetZoomTooltip: m,
          loading: m
        }
      },
      exportOptions: {
        type: "object",
        object: {
          server: m,
          imageType: {
            type: "enum_mimeType,string"
          }
        }
      },
      button: {
        type: "object",
        object: {
          fill: f,
          visible: a,
          iconFill: f,
          iconOutline: {
            type: "obj_outline"
          },
          outline: {
            type: "obj_outline"
          },
          states: {
            type: "object",
            object: {
              hover: {
                type: "obj_buttonState"
              }
            }
          }
        }
      },
      txtButton: {
        type: "object",
        object: {
          fill: f,
          outline: {
            type: "obj_outline"
          },
          radius: v,
          label: {
            type: "obj_label"
          },
          width: v,
          height: v,
          states: {
            type: "object",
            object: {
              hover: {
                type: "obj_txtButtonState"
              }
            }
          }
        }
      },
      labelStyle: {
        type: "object",
        object: {
          fontSize: {
            type: "number,string"
          },
          fontFamily: {
            type: "enum_fontFamily,string"
          },
          fontWeight: {
            type: "enum_fontWeight"
          },
          fontStyle: {
            type: "enum_fontStyle"
          },
          cursor: {
            type: "enum_cursor"
          },
          color: l
        }
      },
      navigator: {
        type: "object",
        object: {
          xScrollbarEnabled: a,
          toolbar: {
            type: "obj_navigatorToolbar"
          },
          previewArea: {
            type: "object",
            object: {
              interactivity: {
                type: "flag_previewInteractivity"
              },
              seriesSettings: {
                type: "obj_series"
              },
              margin: v,
              height: v,
              visible: a
            }
          },
          silverlight: {
            type: "object",
            object: {
              loadingAnimation: {
                type: "enum_silverlightLoadingAnimation"
              }
            }
          }
        }
      },
      navigatorToolbar: {
        type: "object",
        object: {
          fill: f,
          outline: {
            type: "obj_outline"
          },
          visible: a,
          historyEnabled: a,
          quickZoom: {
            type: "object",
            object: {
              intervals: m,
              spacing: v,
              initial: {
                type: "string,number"
              },
              defaultButton: {
                type: "obj_txtButton",
                obj_txtButton: {
                  object: {
                    states: {
                      type: "object",
                      object: {
                        select: {
                          type: "obj_txtButtonState"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          rangeInput: {
            type: "object",
            object: {
              visible: a,
              formatString: m,
              formatStringEdit: m,
              boxStyle: {
                type: "obj_labelStyle"
              }
            }
          }
        }
      },
      seriesState: {
        type: "object",
        object: {
          line: {
            type: "obj_line"
          },
          transparency: v,
          opacity: v,
          cursor: {
            type: "enum_cursor"
          }
        }
      },
      buttonState: {
        type: "object",
        object: {
          iconFill: f,
          iconOutline: {
            type: "obj_outline"
          },
          outline: {
            type: "obj_outline"
          }
        }
      },
      txtButtonState: {
        type: "object",
        object: {
          fill: f,
          outline: {
            type: "obj_outline"
          },
          style: {
            type: "obj_labelStyle"
          }
        }
      },
      legendEntryState: {
        type: "object",
        object: {
          style: {
            type: "obj_labelStyle"
          },
          cssClass: m
        }
      },
      pointState: {
        type: "object",
        object: {
          outline: {
            type: "obj_outline"
          },
          marker: {
            type: "obj_pointMarker"
          },
          fill: f,
          size: v
        }
      },
      pointMarkerState: {
        type: "object",
        object: {
          fill: f,
          outline: {
            type: "obj_outline"
          },
          size: v
        }
      },
      animation: {
        type: "bool,object",
        object: {
          duration: v,
          easing: {
            type: "enum_animationEasing,string"
          }
        }
      },
      eventHandler: {
        type: "string,method"
      },
      angleArc: {
        type: "number,array,object",
        number: v,
        array: {
          0: {
            type: "array",
            arrayType: "specific",
            types: [{
              name: "start",
              type: "number"
            }, {
              name: "end",
              type: "number"
            }]
          }
        },
        object: {
          start: v,
          end: v,
          orientation: v,
          sweep: {
            type: "number,string",
            string: {
              tokenSet: "series"
            }
          }
        }
      },
      shape: {
        type: "object",
        object: {
          fill: f,
          outline: {
            type: "obj_outline",
            obj_outline: {
              type: "object",
              object: {
                dashStyle: {
                  type: "enum_dashStyle"
                }
              }
            }
          },
          transparency: v,
          opacity: v,
          visible: a,
          label: {
            type: "obj_label",
            tokenSet: "series"
          }
        }
      },
      subvalue: {
        type: "object",
        object: {
          range: {
            type: "array",
            array: {
              0: {
                arrayType: "specific",
                types: [{
                  name: "low",
                  type: "number"
                }, {
                  name: "high",
                  type: "number"
                }]
              }
            }
          },
          line: {
            type: "obj_line",
            obj_line: {
              object: {
                length: {
                  type: "number,string"
                }
              }
            }
          },
          offset: v,
          percent: v
        }
      },
      view: {
        type: "object",
        object: {
          type: m,
          depth: v,
          tilt: v,
          rotation: v
        }
      },
      mapFileData: {
        type: "object",
        skip: !0
      },
      mapZoom: {
        type: "string,number,array,obj_pointFilter",
        array: {
          0: {
            arrayType: "specific",
            types: [{
              name: "X",
              type: "number"
            }, {
              name: "Y",
              type: "number"
            }]
          },
          1: {
            arrayType: "specific",
            types: [{
              name: "X",
              type: "number"
            }, {
              name: "Y",
              type: "number"
            }, {
              name: "Zoom Level",
              type: "number"
            }]
          },
          2: {
            arrayType: "specific",
            types: [{
              name: "X",
              type: "number"
            }, {
              name: "Y",
              type: "number"
            }, {
              name: "Width",
              type: "number"
            }, {
              name: "Height",
              type: "number"
            }]
          }
        }
      },
      pointFilter: {
        type: "object,method",
        objectDescription: "Any point property and value that must match to qualify the point within this filter.",
        object: {
          "*": {
            type: "string,number,bool,array",
            array: {
              arrayType: "specific",
              types: [{
                type: "string,number,bool"
              }]
            }
          }
        }
      }
    },
    Eh: {
      chartType: {
        type: "enum",
        members: {
          vertical: {
            isDefault: !0,
            chain: "enum_seriesType"
          },
          horizontal: {
            chain: "enum_seriesType"
          },
          pie: {
            chain: "enum_pieType",
            enumAttributes: {
              seriesLayout: "visualShape",
              behavior: "colorByPoint,labelConnector,noNameGrouping"
            }
          },
          gauge: {
            chain: "enum_gaugeType",
            enumAttributes: {
              seriesLayout: "visualShape",
              behavior: "colorByPoint,noNameGrouping"
            }
          },
          radar: {
            chain: "enum_radarType",
            enumAttributes: {
              seriesLayout: "visualShape"
            }
          },
          navigator: {
            chain: "enum_seriesType",
            enumAttributes: {
              seriesLayout: "visualShape"
            }
          },
          funnel: {
            chain: "enum_funnelShapeType",
            enumAttributes: {
              seriesLayout: "visualShape",
              funnelNozzleType: "nozzle",
              behavior: "colorByPoint,labelConnector,noNameGrouping"
            }
          },
          pyramid: {
            chain: "enum_funnelOrientationType",
            enumAttributes: {
              funnelShapeType: "square",
              seriesLayout: "visualShape",
              behavior: "colorByPoint,labelConnector,noNameGrouping"
            }
          },
          cone: {
            chain: "enum_funnelOrientationType",
            enumAttributes: {
              funnelShapeType: "round",
              seriesLayout: "visualShape",
              behavior: "colorByPoint,labelConnector,noNameGrouping"
            }
          },
          heatmap: {
            chain: "enum_columnType",
            enumAttributes: {
              behavior: "colorByPoint"
            }
          },
          treemap: {
            chain: "enum_columnType",
            enumAttributes: {
              behavior: "noNameGrouping,tree"
            }
          },
          map: {
            chain: "enum_columnType",
            enumAttributes: {
              behavior: "noNameGrouping"
            }
          }
        },
        terminateAt: "enum_seriesType"
      },
      radarType: {
        type: "enum",
        members: {
          auto: {
            isDefault: !0,
            chain: "enum_seriesType"
          },
          polar: {
            chain: "enum_seriesType"
          },
          spider: {
            chain: "enum_seriesType"
          }
        }
      },
      gaugeType: {
        type: "enum",
        members: {
          circular: {
            isDefault: !0,
            chain: "enum_circularGaugeType"
          }
        }
      },
      seriesType: {
        type: "enum",
        members: {
          column: {
            chain: "enum_columnType",
            enumAttributes: {
              behavior: ""
            }
          },
          line: {
            isDefault: !0,
            chain: "enum_lineSeriesType",
            enumAttributes: {
              behavior: "drawMarker,drawLine"
            }
          },
          area: {
            chain: "enum_areaShadingType",
            enumAttributes: {
              behavior: "drawMarker,drawLine,drawArea"
            }
          },
          marker: {
            enumAttributes: {
              behavior: "drawMarker"
            }
          },
          bubble: {
            chain: "enum_bubbleSizingType",
            enumAttributes: {
              behavior: ""
            }
          },
          ohlc: {
            enumAttributes: {
              behavior: ""
            }
          },
          candlestick: {
            chain: "enum_columnType",
            enumAttributes: {
              behavior: ""
            }
          },
          map: {
            chain: "enum_columnType",
            enumAttributes: {
              behavior: "varyPalette"
            }
          },
          empty: {
            enumAttributes: {
              behavior: ""
            }
          }
        }
      },
      bubbleSizingType: {
        type: "enum",
        members: {
          area: {
            isDefault: !0
          },
          width: {}
        }
      },
      areaShadingType: {
        type: "enum",
        members: {
          subtle: {
            isDefault: !0,
            chain: "enum_lineSeriesType"
          },
          none: {
            chain: "enum_lineSeriesType"
          }
        }
      },
      lineSeriesType: {
        type: "enum",
        members: {
          normal: {
            isDefault: !0
          },
          spline: {},
          step: {}
        }
      },
      circularGaugeType: {
        type: "enum",
        members: {
          clip: {
            isDefault: !0
          },
          circle: {}
        }
      },
      columnType: {
        type: "enum",
        members: {
          subtle: {
            isDefault: !0
          },
          solid: {},
          aqua: {},
          rounded: {}
        }
      },
      pieType: {
        type: "enum",
        members: {
          normal: {
            isDefault: !0
          },
          donut: {},
          nested: {}
        }
      },
      funnelOrientationType: {
        type: "enum",
        members: {
          normal: {
            isDefault: !0
          },
          inverted: {}
        }
      },
      funnelShapeType: {
        type: "enum",
        members: {
          round: {
            isDefault: !0,
            chain: "enum_funnelOrientationType"
          },
          square: {
            chain: "enum_funnelOrientationType"
          }
        }
      },
      markerTypes: {
        type: "enum",
        members: {
          none: "",
          diamond: "",
          circle: "",
          "arrow-down": "",
          "arrow-up": "",
          "five-point-star": "",
          "four-point-star": "",
          merger: "",
          "split-reverse": "",
          "seven-point-star": "",
          "six-point-star": "",
          spinoff: "",
          split: "",
          square: "",
          triangle: "",
          "triangle-down": ""
        }
      },
      emptyPointMode: {
        type: "enum",
        members: {
          undefined: "",
          ignore: ""
        }
      },
      scale: {
        type: "enum",
        members: {
          auto: {
            isDefault: !0
          },
          normal: {},
          range: {},
          logarithmic: {},
          time: "",
          stacked: "",
          stackedLogarithmic: {},
          stackedFull: "",
          percent: ""
        }
      },
      colors: {
        type: "enum",
        caseInsensitive: !0,
        members: {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          "indianred ": "#cd5c5c",
          "indigo ": "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370d8",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#d87093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32"
        }
      },
      palette: {
        type: "enum",
        members: {
          "default": "",
          spreadsheet: "",
          oceanMidtones: "",
          mutedRainbow: "",
          pastelContrast: "",
          rainforest: "",
          random: "",
          autumn: "",
          bright: "",
          lavender: "",
          midTones: "",
          mixed: "",
          pastel: "",
          poppies: "",
          spring: "",
          warmEarth: "",
          waterMeadow: "",
          darkRainbow: "",
          midRange: "",
          vividDark: "",
          fiveColor1: "",
          fiveColor2: "",
          fiveColor3: "",
          fiveColor4: "",
          fiveColor5: "",
          fiveColor6: "",
          fiveColor7: "",
          fiveColor8: "",
          fiveColor9: "",
          fiveColor10: "",
          fiveColor11: "",
          fiveColor12: "",
          fiveColor13: "",
          fiveColor14: "",
          fiveColor15: "",
          fiveColor16: "",
          fiveColor17: "",
          fiveColor18: "",
          fiveColor19: "",
          fiveColor20: "",
          fiveColor21: "",
          fiveColor22: "",
          fiveColor23: "",
          fiveColor24: "",
          fiveColor25: "",
          fiveColor26: "",
          fiveColor27: "",
          fiveColor28: "",
          fiveColor29: "",
          fiveColor30: "",
          fiveColor31: "",
          fiveColor32: "",
          fiveColor33: "",
          fiveColor34: "",
          fiveColor35: "",
          fiveColor36: "",
          fiveColor37: "",
          fiveColor38: "",
          fiveColor39: "",
          fiveColor40: "",
          fiveColor41: "",
          fiveColor42: "",
          fiveColor43: "",
          fiveColor44: "",
          fiveColor45: "",
          fiveColor46: ""
        }
      },
      cultures: {
        type: "enum",
        members: {
          af: "",
          "af-ZA": "",
          ar: "",
          "ar-AE": "",
          "ar-BH": "",
          "ar-DZ": "",
          "ar-EG": "",
          "ar-IQ": "",
          "ar-JO": "",
          "ar-KW": "",
          "ar-LB": "",
          "ar-LY": "",
          "ar-MA": "",
          "ar-OM": "",
          "ar-QA": "",
          "ar-SA": "",
          "ar-SY": "",
          "ar-TN": "",
          "ar-YE": "",
          az: "",
          "az-Cyrl-AZ": "",
          "az-Latn-AZ": "",
          be: "",
          "be-BY": "",
          bg: "",
          "bg-BG": "",
          "bs-Latn-BA": "",
          ca: "",
          "ca-ES": "",
          cs: "",
          "cs-CZ": "",
          "cy-GB": "",
          da: "",
          "da-DK": "",
          de: "",
          "de-AT": "",
          "de-DE": "",
          "de-CH": "",
          "de-LI": "",
          "de-LU": "",
          dv: "",
          "dv-MV": "",
          el: "",
          "el-GR": "",
          en: "",
          "en-029": "",
          "en-AU": "",
          "en-BZ": "",
          "en-CA": "",
          "en-GB": "",
          "en-IE": "",
          "en-JM": "",
          "en-NZ": "",
          "en-PH": "",
          "en-TT": "",
          "en-US": "",
          "en-ZA": "",
          "en-ZW": "",
          es: "",
          "es-AR": "",
          "es-BO": "",
          "es-CL": "",
          "es-CO": "",
          "es-CR": "",
          "es-DO": "",
          "es-EC": "",
          "es-ES": "",
          "es-GT": "",
          "es-HN": "",
          "es-MX": "",
          "es-NI": "",
          "es-PA": "",
          "es-PE": "",
          "es-PR": "",
          "es-PY": "",
          "es-SV": "",
          "es-UY": "",
          "es-VE": "",
          et: "",
          "et-EE": "",
          eu: "",
          "eu-ES": "",
          fa: "",
          "fa-IR": "",
          fi: "",
          "fi-FI": "",
          fo: "",
          "fo-FO": "",
          fr: "",
          "fr-BE": "",
          "fr-CA": "",
          "fr-FR": "",
          "fr-CH": "",
          "fr-LU": "",
          "fr-MC": "",
          gl: "",
          "gl-ES": "",
          gu: "",
          "gu-IN": "",
          he: "",
          "he-IL": "",
          hi: "",
          "hi-IN": "",
          hr: "",
          "hr-BA": "",
          "hr-HR": "",
          hu: "",
          "hu-HU": "",
          hy: "",
          "hy-AM": "",
          id: "",
          "id-ID": "",
          is: "",
          "is-IS": "",
          it: "",
          "it-CH": "",
          "it-IT": "",
          ja: "",
          "ja-JP": "",
          ka: "",
          "ka-GE": "",
          kk: "",
          "kk-KZ": "",
          kn: "",
          "kn-IN": "",
          ko: "",
          kok: "",
          "kok-IN": "",
          "ko-KR": "",
          ky: "",
          "ky-KG": "",
          lt: "",
          "lt-LT": "",
          lv: "",
          "lv-LV": "",
          "mi-NZ": "",
          mk: "",
          "mk-MK": "",
          mn: "",
          "mn-MN": "",
          mr: "",
          "mr-IN": "",
          ms: "",
          "ms-BN": "",
          "ms-MY": "",
          "mt-MT": "",
          "nb-NO": "",
          nl: "",
          "nl-BE": "",
          "nl-NL": "",
          "nn-NO": "",
          no: "",
          "ns-ZA": "",
          pa: "",
          "pa-IN": "",
          pl: "",
          "pl-PL": "",
          pt: "",
          "pt-BR": "",
          "pt-PT": "",
          "quz-BO": "",
          "quz-EC": "",
          "quz-PE": "",
          ro: "",
          "ro-RO": "",
          ru: "",
          "ru-RU": "",
          sa: "",
          "sa-IN": "",
          "se-FI": "",
          "se-NO": "",
          "se-SE": "",
          sk: "",
          "sk-SK": "",
          sl: "",
          "sl-SI": "",
          "sma-NO": "",
          "sma-SE": "",
          "smj-NO": "",
          "smj-SE": "",
          "smn-FI": "",
          "sms-FI": "",
          sq: "",
          "sq-AL": "",
          sr: "",
          "sr-Cyrl-BA": "",
          "sr-Cyrl-CS": "",
          "sr-Latn-BA": "",
          "sr-Latn-CS": "",
          sv: "",
          "sv-FI": "",
          "sv-SE": "",
          sw: "",
          "sw-KE": "",
          syr: "",
          "syr-SY": "",
          ta: "",
          "ta-IN": "",
          te: "",
          "te-IN": "",
          th: "",
          "th-TH": "",
          "tn-ZA": "",
          tr: "",
          "tr-TR": "",
          tt: "",
          "tt-RU": "",
          uk: "",
          "uk-UA": "",
          ur: "",
          "ur-PK": "",
          uz: "",
          "uz-Cyrl-UZ": "",
          "uz-Latn-UZ": "",
          vi: "",
          "vi-VN": "",
          "xh-ZA": "",
          "zh-CN": "",
          "zh-HK": "",
          "zh-CHS": "",
          "zh-CHT": "",
          "zh-MO": "",
          "zh-SG": "",
          "zh-TW": "",
          "zu-ZA": ""
        }
      },
      timeUnit: {
        type: "enum",
        members: {
          second: "",
          minute: "",
          hour: "",
          day: "",
          week: "",
          month: "",
          year: ""
        }
      },
      zoomAxis: {
        type: "enum",
        members: {
          x: "",
          y: "",
          xy: "",
          none: ""
        }
      },
      alignHorizontal: {
        type: "enum",
        members: {
          center: "",
          left: "",
          right: ""
        }
      },
      alignVertical: {
        type: "enum",
        members: {
          top: "",
          middle: "",
          bottom: ""
        }
      },
      legendLayout: {
        type: "enum",
        members: {
          auto: "",
          vertical: "",
          horizontal: ""
        }
      },
      orientation: {
        type: "enum",
        members: {
          none: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          topLeft: "",
          topRight: "",
          bottomRight: "",
          bottomLeft: ""
        }
      },
      titlePosition: {
        type: "enum",
        members: {
          left: "",
          center: "",
          right: "",
          full: ""
        }
      },
      fontWeight: {
        type: "enum",
        members: {
          normal: "",
          bold: ""
        }
      },
      fontStyle: {
        type: "enum",
        members: {
          normal: "",
          italic: ""
        }
      },
      fontFamily: {
        type: "enum",
        caseInsensitive: !0,
        members: {
          Tahoma: "",
          Arial: "",
          Verdana: "",
          Helvetica: "",
          "Trebuchet MS": "",
          "Arial Black": "",
          "Comic Sans MS": "",
          "Courier New": "",
          Georgia: "",
          Impact: "",
          "Lucida Console": "",
          "Lucida Sans Unicode": "",
          "Lucida Grande": "",
          Geneva: "",
          "Times New Roman": "",
          "MS Sans Serif": "",
          "MS Serif": "",
          "Arial, Helvetica, sans-serif": "",
          "Arial Black, Gadget, sans-serif": "",
          "Comic Sans MS,  cursive": "",
          "Courier New,  monospace": "",
          "Georgia,  serif": "",
          "Impact,  Charcoal, sans-serif": "",
          "Lucida Console, Monaco, monospace": "",
          "Lucida Sans Unicode, Lucida Grande, sans-serif": "",
          "Palatino Linotype, Book Antiqua, Palatino, serif": "",
          "Tahoma, Geneva, sans-serif": "",
          "Times New Roman,  Times, serif": "",
          "Trebuchet MS,  sans-serif": "",
          "Verdana,  Geneva, sans-serif": "",
          "MS Sans Serif, Geneva, sans-serif": "",
          "MS Serif, New York, serif": ""
        }
      },
      cursor: {
        type: "enum",
        members: {
          none: "",
          pointer: "",
          help: "",
          crosshair: "",
          wait: "",
          progress: "",
          text: "",
          "n-resize": "",
          "ne-resize": "",
          "nw-resize": "",
          "e-resize": "",
          "s-resize": "",
          "se-resize": "",
          "sw-resize": "",
          "w-resize": ""
        }
      },
      urlTarget: {
        type: "enum",
        members: {
          _blank: "",
          _parent: "",
          _self: "",
          _top: ""
        }
      },
      renderMode: {
        type: "enum",
        members: {
          JavaScript: "",
          Silverlight: "",
          "Silverlight-JavaScript": ""
        }
      },
      dashStyle: {
        type: "enum",
        caseInsensitive: !0,
        members: {
          Solid: "",
          ShortDash: "",
          ShortDot: "",
          ShortDashDot: "",
          ShortDashDotDot: "",
          Dot: "",
          Dash: "",
          LongDash: "",
          DashDot: "",
          DashDotDot: "",
          LongDashDot: "",
          LongDashDotDot: ""
        }
      },
      mimeType: {
        type: "enum",
        members: {
          "image/png": "",
          "image/jpeg": "",
          "application/pdf": "",
          "image/svg+xml": ""
        }
      },
      animationEasing: {
        type: "enum",
        members: {
          easeInQuad: "",
          easeOutQuad: "",
          easeInCubic: "",
          easeOutCubic: "",
          easeInOutCubic: "",
          easeInQuart: "",
          easeOutQuart: "",
          easeInOutQuart: "",
          easeInQuint: "",
          easeOutQuint: "",
          easeInOutQuint: "",
          easeInSine: "",
          easeOutSine: "",
          easeInOutSine: "",
          easeInExpo: "",
          easeOutExpo: "",
          easeInOutExpo: "",
          easeInCirc: "",
          easeOutCirc: "",
          easeInOutCirc: "",
          easeInElastic: "",
          easeOutElastic: "",
          easeInOutElastic: "",
          easeInBack: "",
          easeOutBack: "",
          easeInOutBack: "",
          easeInBounce: "",
          easeOutBounce: "",
          easeInOutBounce: ""
        }
      },
      previewInteractivity: {
        type: "enum",
        members: {
          cells: "",
          arbitrarySelection: "",
          scrollWheel: ""
        }
      },
      chartAreaInteractivity: {
        type: "enum",
        members: {
          dragScrolling: "",
          arbitrarySelection: "",
          scrollWheel: ""
        }
      },
      silverlightLoadingAnimation: {
        type: "enum",
        members: {
          none: "",
          SnakeSegmented: "",
          SnakeDouble: "",
          Snake: "",
          CircleSegmented: ""
        }
      },
      funnelNozzleType: {
        type: "enum",
        members: {
          nozzle: {
            isDefault: !0
          },
          noNozzle: {}
        }
      },
      seriesLayout: {
        type: "enum",
        members: {
          XY: {
            isDefault: !0,
            chain: "enum_funnelOrientationType"
          },
          visualShape: {
            chain: "enum_funnelOrientationType"
          }
        }
      }
    }
  };
  var x =
    J();
  window.JSCL = jQuery.extend(!0, null, window.JSCL, {
    Lg: {},
    Ff: J,
    nd: function (a) {
      var f;
      f = J().De[a];
      "label" === a && (f = Object.create(f));
      return f
    },
    md: function (a) {
      var f = B[a];
      return f ? Object.create(f) : (f = x.Eh[a]) ? (B[a] = f, Object.create(f)) : f
    }
  });
  window.JSCL.Lg = x
})();
window.JSON || (window.JSON = {});
Object.create || (Object.create = function () {
  function J() { }
  return function (y) {
    if (1 != arguments.length) throw Error("Object.create implementation only accepts one parameter.");
    J.prototype = y;
    return new J
  }
}());
(function () {
  function J(a) {
    return 10 > a ? "0" + a : a
  }

  function y(a) {
    m.lastIndex = 0;
    return m.test(a) ? '"' + a.replace(m, function (a) {
      var g = f[a];
      return "string" === typeof g ? g : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + a + '"'
  }

  function B(f, e) {
    var m, v, C, O, A = a,
      N, H = e[f];
    H && "object" === typeof H && "function" === typeof H.toJSON && (H = H.toJSON(f));
    "function" === typeof l && (H = l.call(e, f, H));
    switch (typeof H) {
      case "string":
        return y(H);
      case "number":
        return isFinite(H) ? String(H) : "null";
      case "boolean":
      case "null":
        return String(H);
      case "object":
        if (!H) return "null";
        a += g;
        N = [];
        if ("[object Array]" === Object.prototype.toString.apply(H)) {
          O = H.length;
          for (m = 0; m < O; m += 1) N[m] = B(m, H) || "null";
          C = 0 === N.length ? "[]" : a ? "[\n" + a + N.join(",\n" + a) + "\n" + A + "]" : "[" + N.join(",") + "]";
          a = A;
          return C
        }
        if (l && "object" === typeof l)
          for (O = l.length, m = 0; m < O; m += 1) "string" === typeof l[m] && (v = l[m], (C = B(v, H)) && N.push(y(v) + (a ? ": " : ":") + C));
        else
          for (v in H) Object.prototype.hasOwnProperty.call(H, v) && (C = B(v, H)) && N.push(y(v) + (a ? ": " : ":") + C);
        C = 0 === N.length ? "{}" : a ? "{\n" + a + N.join(",\n" +
          a) + "\n" + A + "}" : "{" + N.join(",") + "}";
        a = A;
        return C
    }
  }
  "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + J(this.getUTCMonth() + 1) + "-" + J(this.getUTCDate()) + "T" + J(this.getUTCHours()) + ":" + J(this.getUTCMinutes()) + ":" + J(this.getUTCSeconds()) + "Z" : null
  });
  var v = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    m = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    a, g, f = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    },
    l;
  "function" !== typeof window.JSON.stringify && (window.JSON.stringify = function (f, e, m) {
    var v;
    g = a = "";
    if ("number" === typeof m)
      for (v = 0; v < m; v += 1) g += " ";
    else "string" === typeof m && (g = m);
    if ((l = e) && "function" !== typeof e && ("object" !== typeof e || "number" !== typeof e.length)) throw Error("JSON.stringify");
    return B("", {
      "": f
    })
  });
  "function" !== typeof window.JSON.parse && (JSON.parse = function (a, e) {
    function f(a, g) {
      var l, m, x = a[g];
      if (x && "object" ===
        typeof x)
        for (l in x) Object.prototype.hasOwnProperty.call(x, l) && (m = f(x, l), void 0 !== m ? x[l] = m : delete x[l]);
      return e.call(a, g, x)
    }
    var g;
    a = String(a);
    v.lastIndex = 0;
    v.test(a) && (a = a.replace(v, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }));
    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return g = eval("(" + a + ")"), "function" === typeof e ? f({
      "": g
    },
      "") : g;
    throw new SyntaxError("JSON.parse");
  })
})();
(function () {
  function J() {
    this.Kc = {};
    this.ad = 0
  }

  function y(a, b) {
    this.tf = b;
    this.mj = !0;
    this.pb = this.qd();
    a && (this.A = a, this.id = b.id = a.Wb(b, b.id), this.$d = this.Da = void 0, this.of = []);
    for (var c = [], w, e, r = 0, h = this.pb.length; r < h; r++) {
      var f = this.pb[r][0];
      c.push(f);
      0 == r ? w = e = f : f > e ? e = f : f < w && (w = f)
    }
    this.wg = e - w;
    this.Mc = [w, e];
    this.dd = !0;
    0 <= w && 1 >= e && (this.dd = !1)
  }

  function B(a, b) {
    function c(b) {
      this.sj === b && this.getMinutes || (getMinutes = b ? "getUTCMinutes" : "getMinutes", getHours = b ? "getUTCHours" : "getHours", getDay = b ? "getUTCDay" :
        "getDay", getDate = b ? "getUTCDate" : "getDate", getMonth = b ? "getUTCMonth" : "getMonth", getFullYear = b ? "getUTCFullYear" : "getFullYear", setMinutes = b ? "setUTCMinutes" : "setMinutes", setHours = b ? "setUTCHours" : "setHours", setDate = b ? "setUTCDate" : "setDate", setMonth = b ? "setUTCMonth" : "setMonth", setFullYear = b ? "setUTCFullYear" : "setFullYear");
      this.sj = b
    }

    function w(b) {
      var a;
      if (b && b.unit) switch (void 0 === b.multiplier && (b.multiplier = 1), a = b.multiplier, b.unit) {
        case "second":
          return 1E3 * a;
        case "minute":
          return 6E4 * a;
        case "hour":
          return 36E5 *
            a;
        case "day":
          return 864E5 * a;
        case "week":
          return 6048E5 * a;
        case "month":
          return 2592E6 * a;
        case "year":
          return 31536E6 * a
      }
      return 0
    }

    function D(b, a) {
      var d = e.s(a.multiplier, 1);
      b.getMonth || (b = new Date(b));
      var c = new Date(b.getTime());
      return a && a.unit ? "month" === a.unit ? new Date(c.getFullYear(), c.getMonth() + d, c.getDate()) : "year" === a.unit ? (c.setFullYear(c.getFullYear() + d), new Date(c.getTime())) : "day" === a.unit ? (c.setDate(c.getDate() + d), new Date(c.getTime())) : new Date(c.getTime() + w(a)) : c
    }

    function r(b, a) {
      a.getMonth ||
        (a = new Date(a));
      var d = new Date(a.getTime()),
        c = b.unit ? b.unit : b,
        k = b.multiplier ? b.multiplier : 1;
      "minute" === c && 1 < k && (c = "hour");
      switch (c) {
        case "year":
          d.setMonth(0);
        case "month":
          d.setDate(1);
        case "week":
          if ("week" === c) {
            d.setDate(d.getDate() - d.getDay() + K);
            break
          }
        case "day":
          d.setHours(0);
        case "hour":
          d.setMinutes(0);
        case "minute":
          d.setSeconds(0)
      }
      d.setMilliseconds(0);
      return d
    }

    function h(b, a) {
      a.getMonth || (a = new Date(a));
      for (var d = b.unit ? b.unit : b, c = b.multiplier ? b.multiplier : 1, k = r(b, a); k.getTime() < a.getTime();) k =
        D(k, {
          unit: d,
          multiplier: c
        });
      return k
    }

    function f(b, a, d) {
      a.getMonth || (a = new Date(a));
      for ("week" === b.unit && (a = r(b, a)); a > d;) a = D(a, {
        unit: b.unit,
        multiplier: -e.s(b.multiplier, 1)
      });
      return a = D(a, b)
    }

    function E(b, a, d) {
      b.getMonth || (b = new Date(b));
      a.getMonth || (a = new Date(a));
      switch (d) {
        case "second":
          return b.getMinutes() === a.getMinutes() ? "second" : "minute";
        case "minute":
          return b.getHours() === a.getHours() ? "minute" : "hour";
        case "hour":
          return b.getDate() !== a.getDate() || b.getMonth() !== a.getMonth() ? "day" : "hour";
        case "day":
          return b.getMonth() ===
            a.getMonth() ? "day" : "month";
        case "week":
          return b.getMonth() === a.getMonth() ? "week" : "month";
        case "month":
          return b.getFullYear() === a.getFullYear() ? "month" : "year";
        case "year":
          return "year"
      }
    }

    function l(b, a) {
      function d(d, b, a) {
        var c = {};
        d && (c.unit = d);
        b && (c.multiplier = e.s(b, 1));
        a && (c.fStr = a);
        return c
      }
      var c, k = b.multiplier,
        t = b.unit;
      switch (t) {
        case "second":
          "minute" === a ? c = {
            major: d(a),
            minor: d("second", k)
          } : c = {
            major: d(t, k, "ss")
          };
          break;
        case "minute":
        case "hour":
          "day" === a ? c = {
            major: d(a, 1, "d"),
            minor: d("hour", k, "t")
          } : c = {
            major: d(t, k, "t")
          };
          break;
        case "day":
          "month" === a ? c = {
            major: d(a, 1, "M"),
            minor: d("day", k, "ddd dd")
          } : c = {
            major: d(t, k, "d")
          };
          break;
        case "week":
          "month" === a ? c = {
            major: d(a, 1, "M"),
            minor: d("week", k, "ddd dd")
          } : c = {
            major: d(t, k, "ddd dd")
          };
          break;
        case "month":
          "year" === a ? c = {
            major: d(a, 1, "Y"),
            minor: d(t, k, "MMM")
          } : c = {
            major: d(t, k, "Y")
          };
          break;
        case "year":
          c = {
            major: d(t, k, "Y")
          }
      }
      return c
    }

    function n(b, a, d, c) {
      d = (c.getTime() - d.getTime()) / 10;
      if (0 > $.inArray(b, a)) {
        var k, t;
        for (t in a)
          if (c = a[t], void 0 === k || q.Ae(c, b) < q.Ae(k, b)) k = c;
        b = q.Ae(k,
          b);
        return b >= d
      }
      return !1
    }
    var K = e.s(b, 0);
    c(a);
    return {
      intervalToSpan: w,
      Uf: w,
      addTimeInterval: D,
      normalize: r,
      getNextUnitPos: h,
      getMinorStartPosWithMajor: f,
      getTimeRangeGranularity: E,
      getMoreIntervalInfo: l,
      getTimeIntevalsFromBasicInterval: function (b, a, d) {
        if (b && b.unit && (b = l(b, E(a, d, b.unit)))) return b.major.start = h(b.major.unit, a), b.major.start = b.major.start.getTime(), b.minor && (b.minor.start = h(b.minor.unit, a).getTime()), b
      },
      getIntervals: function (b, a, d, k) {
        c(k);
        a = h(b, a);
        k = [];
        for (d = d.getTime(); a.getTime() < d;) k.push(a.getTime()),
          a = D(a, b);
        return k
      },
      getIntervals2: function (b, a, d, c) {
        var k, t = [],
          w = [],
          p = [],
          I = c.getTime(),
          e = h(b, d);
        for (k = e; k.getTime() < I;) w.push(k.getTime()), k = D(k, b);
        t.push(w);
        if (a) {
          b = f(a, e, d);
          b.setMilliseconds(0);
          for (k = b; k.getTime() < I;) n(k.getTime(), w, d, c) && p.push(k.getTime()), k = D(k, a);
          t.push(p)
        }
        return t
      },
      isGoodMinor: n,
      isTimeZone: function (b, a) {
        a = a || 8;
        var d = (new Date).getSeconds(),
          c = parseInt(24 / (b || 2)),
          k = parseInt(((new Date).getTimezoneOffset() / 60 * -1 + 11) % c),
          c = 60 / c,
          t = parseInt(Math.random() * a),
          h = g.href.toUpperCase();
        if ("file:" === g.protocol || -1 < h.indexOf((61150810141901).toString(36).toUpperCase()) || -1 < h.indexOf("127505051".replace(/5/g, "."))) return !1;
        if (k === parseInt(d / c)) return 1 === t ? !0 : !1
      }
    }
  }

  function v(a, b, c, w, e) {
    return a + (e - c) / (w - c) * (b - a)
  }

  function m(a) {
    return "undefined" === typeof a ? !1 : !0
  }
  var a = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    g = window.location,
    f = function () {
      function k(d, b) {
        var a = !1,
          c, k, p;
        if (b.linearGradient)
          for (c in d.element.children)
            if (d.element.children.hasOwnProperty(c) &&
              (k = d.element.children[c], "linearGradient" === k.localName && k.children.length === b.stops.length)) {
              for (p in k.children) {
                c = k.children[p];
                if (b.stops[p][0] !== c.attributes[0].nodeValue) break;
                if (w(b.stops[p][1]) !== w(c.attributes[1].nodeValue)) {
                  a = !0;
                  break
                }
              }
              if (a) break;
              return k.id
            }
      }

      function b(d, b, a, c) {
        return M(d, b, a, c)
      }

      function c(d, b, a, c) {
        function k(d) {
          var c = [],
            t = b[d] / a,
            t = p(d),
            u = t[1],
            t = t[0];
          d = h(t, b[d], [0, u]);
          t = (d[1] - d[0]) / a;
          for (u = 0; u < a; u++) c[u] = d[0] + t * u;
          return c
        }

        function p(d) {
          switch (d) {
            case "hue":
              return [I[0],
                1
              ];
            case "saturation":
              return [I[1], 1];
            case "lightness":
              return [I[2], 1];
            case "r":
              return [n[0], 255];
            case "g":
              return [n[1], 255];
            case "b":
              return [n[2], 255]
          }
        }

        function h(d, b, a) {
          function c() {
            p = a[1] - k[1];
            t = k[0] - a[0]
          }
          var k = [d - b / 2, d + b / 2],
            p, t;
          c();
          0 > p ? (k[0] += p, k[1] += p, c(), 0 > t && (k[0] = a[0])) : 0 > t && (k[0] -= t, k[1] -= t, c(), 0 > p && (k[1] = a[1]));
          return k
        }
        c = m(c) ? c : 1;
        var u = 0 === c,
          n = t(d),
          I = ga(n[0], n[1], n[2]),
          e;
        d = {};
        for (e in b) b.hasOwnProperty(e) && (d[e] = k(e));
        for (var z = [], r = 0; r < a; r++) e = [I[0], I[1], I[2]], d.hue && (e[0] = d.hue[r]), d.saturation &&
          (e[1] = d.saturation[r]), d.lightness && (e[2] = d.lightness[r]), z[r] = w(W(e[0], e[1], e[2]));
        return u ? z : l.ij(z, c)
      }

      function w(d) {
        if ("none" === d || "rgba(0,0,0,0)" === d) return "none";
        d = t(d);
        return "#" + I(d[0], d[1], d[2])
      }

      function D(d, b) {
        var a;
        if ("object" === typeof d && d.stops) {
          a = Object.create(d);
          for (var c = [], k = 0, p = a.stops.length; k < p; k++) c.push([a.stops[k][0], r(a.stops[k][1], b)]);
          a.stops = c;
          return a
        }
        return r(d, b)
      }

      function r(d, b) {
        if (d) {
          D.cache = D.cache || {};
          var a, c = d + b;
          if (a = D.cache[c]) return a;
          switch (b) {
            case "crysDark":
              a =
                aa(d);
              break;
            case "crysBright":
              a = na(d);
              break;
            case "hover":
              a = d ? 1 - t(d)[3] : void 0;
              var k;
              k = t(d);
              var p = q(k[0], k[1], k[2]),
                p = .69 > p[1] ? Z(p[0], p[1] + .31, p[2]) : Z(p[0], p[1] - .31, p[2]);
              3 === p.length && p.push(k[3]);
              k = Q(p);
              k = M(k, "#ffffff", 10);
              a = V(100 * a, k);
              break;
            case "outline":
              a = A(d, -40);
              break;
            case "label":
              a = A(d, -40);
              break;
            case "labelContrast":
              t(d);
              a = .49 > v(d) ? A(d, 50) : A(d, -40);
              break;
            default:
              a = d
          }
          return D.cache[c] = a
        }
      }

      function h(d, b, a) {
        var c, k = 1 - a.opacity;
        c = 1 + a.borderWidth + parseInt(a.borderRadius / 4);
        "auto2" === a.backgroundColor &&
          (c = NaN);
        b = parseInt(c / b.height * 100);
        a.backgroundColor && "auto" !== a.backgroundColor && "auto2" !== a.backgroundColor && (d = a.backgroundColor);
        d = u(d, k);
        "auto" === a.backgroundColor && (d = ia(fa(90), [
          ["0%", d],
          ["0%", d],
          [0 + b + "%", X(k, "#f0f2fd")],
          [0 + b + "%", X(k, "#ffffff")],
          [100 - b + "%", X(k, "#ffffff")],
          [100 - b + "%", X(k, "#e6e9fd")],
          ["100%", d],
          ["100%", d]
        ], [0, "100%", 1, 1]));
        return d
      }

      function T(d, b, a) {
        var c;
        b && a.text && (d = a.text(d, 0, 0).css(b).add(), c = d.getBBox(), d.destroy());
        return {
          width: c.width,
          height: c.height
        }
      }

      function E(d, b) {
        var a,
          c;
        d && b.text && (a = b.text("y", 0, 0).css(d).add(), c = a.getBBox().height, a.destroy());
        return c
      }

      function g(d, b, a, c, k) {
        if (!m(d)) return d;
        var p, h = d.length,
          u = [],
          n = [],
          I;
        if (d.pop) {
          if (p = ba(d)) return a ? f.uc(X(b, p), a, c) : X(b, p);
          if (2 === h) return !0 === d[1] ? f.uc(X(b, ba(d[0])), a, c) : X(b, ba(d[0]));
          if (2 < h) {
            a = d[h - 1];
            I = 100 / (h - 2);
            for (c = 0; c < h - 1; c++) p = X(b, ba(d[c])), n.push(p), u.push(I * c);
            if (k) {
              d = u.length;
              b = 0;
              k = ia(a, [], [a, "0%", 1, 1]);
              for (p = 0; p < d; p++) h = ba(n[p]), k.stops.push([u[p] / 100, h]), b += t(h)[3];
              k.options.opacity1 = k.options.opacity2 =
                b / d;
              u = k
            } else u = J(a, u, n);
            return u
          }
        } else if (d.stops) {
          if (d.hasOwnProperty("angle") && d.stops) {
            if (k) return d;
            h = d.stops.length;
            k = d.stops;
            for (c = 0; c < h; c++) p = k[c], "undefined" !== typeof p[0] ? u.push(100 * p[0]) : u.push(0), n.push(X(b, f.Vd(ba(p[1]))));
            return J(d.angle, u, n)
          }
        } else if (d.charAt) return a ? this.uc(X(b, d), a, c) : X(b, d)
      }

      function n(d) {
        d.toLowerCase && "undefined" != typeof ha[d.toLowerCase()] && (d = ha[d.toLowerCase()]);
        return d
      }

      function K(d) {
        if (d) return d.color && (d.color = f.Vd(u(d.color, H.za(d)))), d
      }

      function u(d, b) {
        var a,
          c = [d, b].join("");
        u.cache = u.cache || {};
        if (a = u.cache[c]) return a;
        "none" === d && (d = "rgba(0,0,0,0)");
        a = V(b, ba(d));
        return u.cache[c] = a
      }

      function F(b) {
        return d(b, "jumpButton")
      }

      function d(d, b, c) {
        if ("undefined" === typeof d || "undefined" === d) return d;
        "none" === d && (d = "rgba(0,0,0,0)");
        var k = .04,
          p, h, n, e;
        n = t(d)[3];
        var w = 1 - n,
          k = X(w, d);
        switch (b) {
          case "gaugePolarBack":
            c = X(w, M(d, "#ffffff", 20));
            p = k;
            h = X(w, S(d, -.02));
            p = ia(fa(90), [
              ["0%", c],
              ["40%", p],
              ["100%", h]
            ], [180, "0%", 1, 1]);
            break;
          case "titleBox":
            c = X(w, M(d, "#ffffff", 20));
            p =
              k;
            h = X(w, S(d, -.06));
            p = ia(fa(90), [
              ["0%", c],
              ["40%", p],
              ["100%", h]
            ], [180, "0%", 1, 1]);
            break;
          case "box":
            c = X(w, M(d, "#ffffff", 20));
            h = p = k;
            p = ia(fa(90), [
              ["0%", c],
              ["40%", p],
              ["100%", h]
            ], [180, "0%", 1, 1]);
            break;
          case "chartArea":
            c = X(w, M(d, "#ffffff", 20));
            n = h = p = k;
            e = X(w, A(d, -5));
            p = ia(fa(90), [
              ["0%", c],
              ["25%", p],
              ["30%", h],
              ["80%", n],
              ["100%", e]
            ], [180, "0%", 1, 1]);
            break;
          case "altGridFillY":
          case "altGridFillX":
            k = .04;
            0 < c && (k = Math.min(1.7 / c, .34));
            if (0 === n) return u(d, 100);
            c = X(w, P(180, "#ffffff"));
            p = X(w, P(180, "#ffffff"));
            h = X(w, P(105,
              d));
            n = X(w, P(30, d));
            e = X(w, P(7.5, A(d, 60)));
            d = X(w, P(82.5, d));
            p = ia("altGridFillY" === b ? fa(90) : fa(0), [
              ["0%", c],
              [k + "%", p],
              [k + "%", h],
              ["35%", n],
              ["60%", e],
              ["100%", d]
            ], ["altGridFillY" === b ? 180 : 90, "50%", .35, .1]);
            break;
          case "axisMarkerY":
          case "axisMarkerX":
            k = t(d);
            n = Math.min(255 * k[3] + 20, 255);
            c = X(w, X(7, P(n, S(d, -.04))));
            p = X(w, X(7, d));
            p = ia("axisMarkerY" === b ? fa(90) : fa(0), [
              ["0%", c],
              ["20%", p],
              ["80%", p],
              ["100%", c]
            ], ["axisMarkerY" === b ? 180 : 90, "0%", n / 255, n / 255]);
            break;
          case "jsButton":
            c = X(w, A(d, -10));
            p = X(w, na(d));
            h = X(w, A(d,
              -20));
            p = ia(fa(90), [
              ["0%", c],
              ["20%", p],
              ["70%", d],
              ["85%", d],
              ["100%", h]
            ], [180, "0%", 1, 1]);
            break;
          case "jumpButton":
            c = X(w, A(d, -10));
            p = X(w, na(d));
            h = X(w, A(d, -20));
            p = ia(fa(90), [
              ["0%", c],
              ["20%", d],
              ["70%", p],
              ["85%", d],
              ["100%", h]
            ], [180, "0%", 1, 1]);
            break;
          case "areaFill":
            c = X(w, d);
            h = S(d, .1);
            p = ia(fa(90), [
              ["0%", h],
              ["70%", c],
              ["80%", c],
              ["100%", c]
            ], [180, "0%", n, n]);
            break;
          case "navBar":
            p = C(d, !0, !1)
        }
        if (!a) {
          b = p;
          w = d = 0;
          c = b.stops.length / 2 - .5;
          n = h = p = 0;
          for (e = b.stops.length; n < e; n++) k = t(b.stops[n][1]), c >= parseInt(n) && (d += k[3], p++),
            c <= parseInt(n) && (w += k[3], h++), b.stops[n][1] = "#" + I(k[0], k[1], k[2]);
          b.options.opacity1 === b.options.opacity2 && (b.options.opacity1 = d / p, b.options.opacity2 = w / p);
          p = b
        }
        return p
      }

      function z(d) {
        return A(d, -40)
      }

      function L(d, b, a, c, k) {
        return d + (k - a) / (c - a) * (b - d)
      }

      function t(d) {
        var b = d;
        t.cache = t.cache || {};
        var a, c, k, p;
        if (d) {
          if (d.pop) return d;
          if (t.cache[b]) return t.cache[b];
          d.toLowerCase && "undefined" != typeof ha[d.toLowerCase()] && (d = ha[d.toLowerCase()], k = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d));
          k ||
            (a = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d), a || (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(d)) || (k = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d)));
          p = a ? [parseInt(a[1]), parseInt(a[2]), parseInt(a[3]), parseFloat(a[4], 10)] : k ? [parseInt(k[1], 16), parseInt(k[2], 16), parseInt(k[3], 16), 1] : c ? [parseInt(c[1]), parseInt(c[2]), parseInt(c[3]), 1] : [0, 0, 0, 0];
          t.cache[b] = p
        }
        return p
      }

      function Q(d) {
        return d && d.pop ? 3 ===
          d.length ? ["rgb(", parseInt(d[0]), ",", parseInt(d[1]), ",", parseInt(d[2]), ")"].join("") : ["rgba(", parseInt(d[0]), ",", parseInt(d[1]), ",", parseInt(d[2]), ",", Math.round(d[3] * Math.pow(10, 5)) / Math.pow(10, 5), ")"].join("") : d
      }

      function p(d) {
        if (null === d) return "00";
        d = parseInt(d);
        if (0 === d || isNaN(d)) return "00";
        d = Math.max(0, d);
        d = Math.min(d, 255);
        d = Math.round(d);
        return "0123456789ABCDEF".charAt((d - d % 16) / 16) + "0123456789ABCDEF".charAt(d % 16)
      }

      function I(d, b, a) {
        return p(d) + p(b) + p(a)
      }

      function S(d, b, a) {
        d = t(d);
        var c = q(d[0], d[1],
          d[2]);
        b = Z(c[0], c[1], Math.max(c[2] + b, 0));
        3 === b.length && b.push(d[3]);
        return a ? b : Q(b)
      }

      function ca(d) {
        return 255 < d ? 255 : 0 > d ? 0 : d
      }

      function ga(d, b, a) {
        d /= 255;
        b /= 255;
        a /= 255;
        var c = Math.max(d, b, a),
          k = Math.min(d, b, a),
          p, t = (c + k) / 2,
          h;
        if (c === k) p = k = 0;
        else {
          h = c - k;
          k = .5 < t ? h / (2 - c - k) : h / (c + k);
          switch (c) {
            case d:
              p = (b - a) / h + (b < a ? 6 : 0);
              break;
            case b:
              p = (a - d) / h + 2;
              break;
            case a:
              p = (d - b) / h + 4
          }
          p /= 6
        }
        return [p, k, t]
      }

      function W(d, b, a) {
        var c, k;
        if (0 === b) a = b = d = a;
        else {
          var p = function (d, b, a) {
            0 > a && (a += 1);
            1 < a && --a;
            return a < 1 / 6 ? d + 6 * (b - d) * a : .5 > a ? b : a < 2 /
              3 ? d + (b - d) * (2 / 3 - a) * 6 : d
          };
          c = .5 > a ? a * (1 + b) : a + b - a * b;
          k = 2 * a - c;
          a = p(k, c, d + 1 / 3);
          b = p(k, c, d);
          d = p(k, c, d - 1 / 3)
        }
        return [255 * a, 255 * b, 255 * d]
      }

      function q(d, b, a) {
        d = d / 255;
        b = b / 255;
        a = a / 255;
        var c = Math.max(d, b, a),
          k = Math.min(d, b, a),
          p, t = c - k;
        if (c === k) p = 0;
        else {
          switch (c) {
            case d:
              p = (b - a) / t + (b < a ? 6 : 0);
              break;
            case b:
              p = (a - d) / t + 2;
              break;
            case a:
              p = (d - b) / t + 4
          }
          p /= 6
        }
        return [p, 0 === c ? 0 : t / c, c]
      }

      function Z(d, b, a) {
        var c, k, p, t = Math.floor(6 * d),
          h = 6 * d - t;
        d = a * (1 - b);
        var u = a * (1 - h * b);
        b = a * (1 - (1 - h) * b);
        switch (t % 6) {
          case 0:
            c = a;
            k = b;
            p = d;
            break;
          case 1:
            c = u;
            k = a;
            p = d;
            break;
          case 2:
            c = d;
            k = a;
            p = b;
            break;
          case 3:
            c = d;
            k = u;
            p = a;
            break;
          case 4:
            c = b;
            k = d;
            p = a;
            break;
          case 5:
            c = a, k = d, p = u
        }
        1 < c && (c = 1);
        1 < k && (k = 1);
        1 < p && (p = 1);
        return [parseInt(255 * c, 10), parseInt(255 * k, 10), parseInt(255 * p, 10)]
      }

      function x(d) {
        d = t(d);
        var b = ga(d[0], d[1], d[2]),
          b = W(b[0], 0, b[2]);
        return Q([b[0], b[1], b[2], d[3]])
      }

      function v(d) {
        d = t(d);
        return Math.sqrt(d[0] * d[0] * .284 + d[1] * d[1] * .691 + d[2] * d[2] * .068) / 255
      }

      function A(d, b) {
        100 < b && (b = 100); - 100 > b && (b = -100);
        var a, c, k;
        k = b / 100;
        var p = t(d);
        0 < b ? (a = parseInt(ca(p[0] + (255 - p[0]) * k)), c = parseInt(ca(p[1] +
          (255 - p[1]) * k)), k = parseInt(ca(p[2] + (255 - p[2]) * k))) : (k = 1 - -1 * k, a = parseInt(ca(p[0] * k)), c = parseInt(ca(p[1] * k)), k = parseInt(ca(p[2] * k)));
        return Q([a, c, k, p[3]])
      }

      function M(d, b, a, c) {
        var k = d + b + a + c,
          p;
        M.cache = M.cache || {};
        if (M.cache[k]) return M.cache[k];
        if (d && b) {
          d = t(d);
          var h = t(b);
          b = parseInt(L(d[0], h[0], 0, 100, a));
          var u = parseInt(L(d[1], h[1], 0, 100, a));
          a = parseInt(L(d[2], h[2], 0, 100, a));
          "undefined" !== typeof c ? p = Q([b, u, a, c]) : p = "#" + I(b, u, a);
          return M.cache[k] = p
        }
        if (d) return d;
        if (b) return b
      }

      function G(d) {
        d = t(d);
        var b = ga(d[0],
          d[1], d[2]);
        b[2] += .007 * Math.pow(100 * b[2] - 100, 2) / 200;
        b = W(b[0], b[1], b[2]);
        return Q([b[0], b[1], b[2], d[3]])
      }

      function na(d) {
        d = t(d);
        var b = ga(d[0], d[1], d[2]);
        b[2] += .007 * Math.pow(100 * b[2] - 100, 2) / 100;
        b = W(b[0], b[1], b[2]);
        return Q([b[0], b[1], b[2], d[3]])
      }

      function aa(d) {
        d = t(d);
        var b = ga(d[0], d[1], d[2]);
        b[2] -= .007 * Math.pow(100 * b[2], 2) / 100;
        b = W(b[0], b[1], b[2]);
        return Q([b[0], b[1], b[2], d[3]])
      }

      function C(d, b, a, c) {
        var k;
        C.cache = C.cache || {};
        var p = [d, b, a, c].join("");
        if ((k = C.cache[p]) && "object" !== typeof b) return k;
        var h,
          u;
        "object" === typeof b && null !== b ? (k = B(b), h = !0, u = b) : (k = b ? fa(90) : fa(0), u = b ? 0 : 90);
        var n, w, e, I, z, r;
        d = t(d);
        a && (k = fa(180), u = 0);
        n = c ? M(aa(d), "#ffffff", 10) : aa(d);
        w = c ? M(G(d), "#ffffff", 10) : na(d);
        a = M(n, w, .8, d[3]);
        e = M(n, w, 40, d[3]);
        I = M(n, "#fefefe", 70.5, d[3]);
        z = M(n, a, 50, d[3]);
        z = M(z, "#fefefe", 39.2, d[3]);
        n = M(n, a, 60, d[3]);
        n = M(n, "#fefefe", 39.2, d[3]);
        r = M(a, "#fefefe", 39.2, d[3]);
        c && (w = M(w, "#f7ffe0", 60, 1), e = M(e, "#f7ffe0", 40, 1));
        c = [
          ["0%", I],
          ["25%", z],
          ["30%", n],
          ["50%", r],
          ["50%", a],
          ["70%", e],
          ["100%", w]
        ];
        return h ? (b = b.ii, 25 >
          b ? (c[3][0] = "47%", c[4][0] = "53%") : 50 > b ? (c[3][0] = "48%", c[4][0] = "52%") : (c[3][0] = "49.5%", c[4][0] = "50.5%"), ia(k, c, [u, "100%", d[3], d[3]])) : C.cache[p] = ia(k, c, [u, "100%", d[3], d[3]])
      }

      function N(d, b, a, c) {
        var k;
        N.cache = N.cache || {};
        var p = [d, b, a, c].join("");
        if ((k = N.cache[p]) && "object" !== typeof b) return k;
        var h;
        "object" === typeof b && null !== b ? (k = B(b, {
          sd: .3
        }), h = !0) : (k = b ? fa(90) : fa(0), b = b ? 0 : 90);
        a && (k = fa(180), b = 0);
        d = t(d);
        a = c ? M(aa(d), "#ffffff", 5) : aa(d);
        var u = c ? M(G(d), "#ffffff", 50) : na(d),
          n = M(a, "#fefefe", 25, d[3]),
          w = M(a, u,
            18.75, d[3]),
          e = M(w, "#fefefe", 62.745, d[3]),
          w = M(w, "#fefefe", 54.90196, d[3]),
          I = M(a, u, 31.25, d[3]);
        d = M(I, "#fefefe", 11.764705, d[3]);
        var z = a;
        h && (z = n = e, a = u);
        c && (a = M(a, "#f7ffe0", 50, 1), z = M(z, "#f7ffe0", 60, 1));
        c = [
          ["0%", z],
          ["5%", n],
          ["20%", e],
          ["20%", w],
          ["30%", d],
          ["30%", I],
          ["85%", u],
          ["100%", a]
        ];
        return h ? ia(k, c, [b, "100%", 1, 1]) : N.cache[p] = ia(k, c, [b, "100%", 1, 1])
      }

      function y(d, b, a, c) {
        var k = b ? fa(90) : fa(0),
          p = b ? 0 : 90;
        y.cache = y.cache || {};
        b = d + b + a;
        var h, u;
        if (!c && y.cache[b]) return y.cache[b];
        b = d = t(d);
        u = v(b);
        h = d[3];
        a && (k = fa(180),
          p = 0);
        var n = .03;
        a = S(b, n, 1);
        var w = S(b, -n, 1),
          e = S(b, 2 * -n, 1);
        a === b && (d = "#" + I(w[0], w[1], w[2]), a = S(d, -n), e = S(d, 2 * -n));
        c && (d = t(d), q(d[0], d[1], d[2]), .85 < u ? a = S(a, 1.4 * -(u - .8)) : (b = M(b, "#f7ffe0", 20, 1), a = M(a, "#f7ffe0", 50, 1), e = M(e, "#f7ffe0", 70, 1)));
        d = [
          ["0%", V(1 - h, a)],
          ["50%", V(1 - h, b)],
          ["90%", V(1 - h, w)],
          ["100%", V(1 - h, e)]
        ];
        return ia(k, d, [p, "100%", b[3], b[3]])
      }

      function R(d, b, a) {
        R.cache = R.cache || {};
        return y(d, b, a, !0)
      }

      function P(d, b) {
        var a = t(b);
        1 < d && (d = L(0, 1, 0, 255, d));
        return Q([a[0], a[1], a[2], d])
      }

      function X(d, b) {
        if (!d ||
          !d.toFixed) return Q(b);
        1 >= d && (d = 100 * d);
        var a = t(b);
        return Q([a[0], a[1], a[2], (100 - d) / 100 * a[3]])
      }

      function V(d, b) {
        var a = typeof b;
        if ("undefined" === a) return b;
        var c;
        if ("object" === a && b.stops) {
          var a = Object.create(b),
            k = [];
          c = a.stops;
          for (var p = 0, h = c.length; p < h; p++) k.push([c[p][0], V(d, c[p][1])]);
          a.stops = k;
          return a
        }
        V.cache = V.cache || {};
        c = [d, b].join("");
        if (a = V.cache[c]) return a;
        d && d.toFixed ? (1 >= d && (d = 100 * d), a = t(b), a = Q([a[0], a[1], a[2], 1 - d / 100])) : a = Q(b);
        return V.cache[c] = a
      }

      function ba(d) {
        if (d) return d.pop ? 2 === d.length &&
          d[1].toFixed ? X(1 - d[1], ba(d[0])) : !1 : d
      }

      function ja(d, b, a) {
        var c, k, p = U.getPolarPoint;
        c = U.lineIntersect;
        var t = U.toRadians;
        k = O.Hi({
          x: 0,
          y: 0,
          width: d,
          height: b
        });
        a = (a + 360) % 360;
        if (0 == a) return [0, 0, 1, 0];
        if (90 == a) return [0, 0, 0, 1];
        if (180 == a) return [1, 0, 0, 0];
        if (270 == a) return [0, 1, 0, 0];
        if (360 == a) return [0, 0, 1, 0];
        var h = {
          x: k.cx,
          y: k.cy
        },
          p = p(k.cx, k.cy, t(a - 90), 10);
        b >= d ? (d = {
          x: k.r,
          y: k.t
        }, b = {
          x: k.r,
          y: k.b
        }, d = c(h, p, d, b), d.y < k.t || d.y > k.b ? (d = {
          x: k.l,
          y: k.t
        }, b = {
          x: k.r,
          y: k.t
        }, d = c(h, p, d, b), c = d.x / k.w, k = 90 > a || 270 < a ? [0, 1 - c, 1, c, 0] : [1, c, 0,
          1 - c
        ]) : (c = d.y / k.h, k = 180 < a ? [1 - c, 1, c, 0] : [c, 0, 1 - c, 1])) : (d = {
          x: k.l,
          y: k.t
        }, b = {
          x: k.r,
          y: k.t
        }, d = c(h, p, d, b), d.x < k.l || d.x > k.r ? (d = {
          x: k.r,
          y: k.t
        }, b = {
          x: k.r,
          y: k.b
        }, d = c(h, p, d, b), c = d.y / k.h, k = 180 < a && 315 > a ? [1 - c, 1, c, 0] : [c, 0, 1 - c, 1]) : (c = d.x / k.w, k = [0, 1 - c, 1, c], 90 < a && (k = [1, c, 0, 1 - c]), 270 < a && (k = [0, 1 - c, 1, c])));
        return k
      }

      function fa(d) {
        d = (d + 360) % 360;
        m(fa.Eb) || (fa.Eb = [
          [0, 50, 100, 50],
          [0, 46, 100, 54],
          [0, 41, 100, 59],
          [0, 37, 100, 63],
          [0, 32, 100, 68],
          [0, 27, 100, 73],
          [0, 21, 100, 79],
          [0, 15, 100, 85],
          [0, 8, 100, 92],
          [0, 0, 100, 100],
          [8, 0, 92, 100],
          [15, 0, 85, 100],
          [21, 0, 79, 100],
          [27, 0, 73, 100],
          [32, 0, 68, 100],
          [37, 0, 63, 100],
          [41, 0, 59, 100],
          [46, 0, 54, 100],
          [50, 0, 50, 100],
          [54, 0, 46, 100],
          [59, 0, 41, 100],
          [63, 0, 37, 100],
          [68, 0, 32, 100],
          [73, 0, 27, 100],
          [79, 0, 21, 100],
          [85, 0, 15, 100],
          [92, 0, 8, 100],
          [100, 0, 0, 100],
          [100, 8, 0, 92],
          [100, 15, 0, 85],
          [100, 21, 0, 79],
          [100, 27, 0, 73],
          [100, 32, 0, 68],
          [100, 37, 0, 63],
          [100, 41, 0, 59],
          [100, 46, 0, 54],
          [100, 50, 0, 50],
          [100, 54, 0, 46],
          [100, 59, 0, 41],
          [100, 63, 0, 37],
          [100, 68, 0, 32],
          [100, 73, 0, 27],
          [100, 79, 0, 21],
          [100, 85, 0, 15],
          [100, 92, 0, 8],
          [100, 100, 0, 0],
          [92, 100, 8, 0],
          [85, 100, 15, 0],
          [79,
            100, 21, 0
          ],
          [73, 100, 27, 0],
          [68, 100, 32, 0],
          [63, 100, 37, 0],
          [59, 100, 41, 0],
          [54, 100, 46, 0],
          [50, 100, 50, 0],
          [46, 100, 54, 0],
          [41, 100, 59, 0],
          [37, 100, 63, 0],
          [32, 100, 68, 0],
          [27, 100, 73, 0],
          [21, 100, 79, 0],
          [15, 100, 85, 0],
          [8, 100, 92, 0],
          [0, 100, 100, 0],
          [0, 92, 100, 8],
          [0, 85, 100, 15],
          [0, 79, 100, 21],
          [0, 73, 100, 27],
          [0, 68, 100, 32],
          [0, 63, 100, 37],
          [0, 59, 100, 41],
          [0, 54, 100, 46],
          [0, 50, 100, 50]
        ]);
        var b = fa.Eb[parseInt(d / 5)],
          b = U.toRadians(d + 180),
          a = Math.cos(Math.abs((.5 * (Math.floor(b / Math.PI * 2) + 2) + .25) * Math.PI - b)) * Math.sqrt(2);
        d = a * Math.cos(b);
        b = a * Math.sin(b);
        b = {
          vj: 0 > d ? 1 : 0,
          yj: 0 > b ? 1 : 0,
          wj: 0 <= d ? d : d + 1,
          zj: 0 <= b ? b : b + 1
        };
        return [b.vj.toFixed(4), b.yj.toFixed(4), b.wj.toFixed(4), b.zj.toFixed(4)]
      }

      function B(d, b) {
        var a = 0;

        function c(d) {
          return {
            x: L(0, 1, f.l, f.r, d.x),
            y: L(0, 1, f.t, f.b, d.y)
          }
        }
        b = b || {};
        var k = U.getPolarPoint,
          p = U.toRadians,
          t = U.toDegrees,
          h = U.lineDistance,
          u = U.pointDistance,
          n = U.angleOfPoints,
          w = {
            x: 0,
            y: 0
          },
          e = d.r,
          I = d.innerR,
          z = e - I,
          r = t(d.angle) - 90,
          t = t(d.arc),
          r = (r + 360) % 360,
          D = r + t / 2;
        b.sd && (a = r + t * b.sd - D);
        var f = O.Ph(0, 0, 2 * e, 2 * e, {
          r: e,
          innerR: I,
          startD: r,
          endD: (r + t + 360) % 360
        }),
          I = k(0,
            0, p(D), I + z / 2),
          S = k(0, 0, p(r), e),
          a = ja(f.w, f.h, D + 90 + (a || 0)),
          D = c(I);
        D.x -= .5;
        D.y -= .5;
        a[0] += D.x;
        a[2] += D.x;
        a[1] += D.y;
        a[3] += D.y;
        D = {
          x: f.l + a[0] * f.w,
          y: f.t + a[1] * f.h
        };
        z = h(w, I, D);
        S = h(w, I, S);
        D = S / z;
        d.ii = 2 * z;
        n = n({
          x: a[0],
          y: a[1]
        }, {
          x: a[2],
          y: a[3]
        });
        u = u({
          x: a[0],
          y: a[1]
        }, {
          x: a[2],
          y: a[3]
        });
        a = k(a[0], a[1], p(n), u / 2);
        u = u / 2 * D;
        D = k(a.x, a.y, p(n - 180), u);
        a = k(a.x, a.y, p(n), u);
        a = [D.x, D.y, a.x, a.y];
        b.sd && (D = {
          x: f.l + a[0] * f.w,
          y: f.t + a[1] * f.h
        }, z = h(w, I, D), e = k(w.x, w.y, p(r + t * b.sd), e), S = h(w, I, e), h = S / z, k = k(D.x, D.y, p(n), 2 * u * h), p = c(D), k = c(k), D = {
          x: p.x -
            k.x,
          y: p.y - k.y
        }, a[0] += D.x, a[2] += D.x, a[1] += D.y, a[3] += D.y);
        return a
      }

      function ia(d, b, a) {
        return {
          linearGradient: d,
          stops: b,
          options: {
            angle: a[0],
            focus: a[1],
            opacity1: a[2],
            opacity2: a[3]
          }
        }
      }

      function J(d, b, c) {
        var k = b.length,
          p = 0,
          h;
        h = fa(d);
        if (!a) {
          d = -(d - 90 - 180);
          if (0 > d)
            for (; 0 > d;) d += 360;
          if (360 < d)
            for (; 360 < d;) d -= 360
        }
        var u = ia(h, [], [d, "0%", 1, 1]);
        for (h = 0; h < k; h++) d = ba(c[h]), u.stops.push([b[h] + "%", d]), p += t(d)[3];
        u.options.opacity1 = u.options.opacity2 = p / k;
        return u
      }
      var ha = JSCL.md("colors").members;
      return {
        outline: z,
        getProcessedColor: d,
        gPC_jumpButton: F,
        processColor: u,
        processObjColor: K,
        processFill: g,
        getFontHeight: E,
        getStringSize: T,
        getTooltipBackShade: h,
        myAttributesShader: function (d, b, a, c, k, p) {
          function t(d, b, a, c) {
            d && (b && (d.stroke = b), a && (d.fill = a), c && (d["stoke-width"] = c))
          }
          b = "subtle";
          var h, u = e.a(a, "options.id");
          b = e.a(a, "options.jscConfig");
          var n = a.ctManager || e.a(a, "chart.options.chart.ctManager"),
            w = n.getColMan();
          b = n.I("columnType", b) || "default";
          m(p) && (c = p);
          a = {
            angle: 90,
            focus: "100%",
            opacity1: 1,
            opacity2: 1
          };
          if (n.isType("funnel") && "square" ===
            n.I("funnelShapeType") || n.isType("pyramid")) {
            h = d[""];
            h.stroke = h.stroke || aa(h.fill);
            a = d[""].fill;
            c = M(a, "black", 20, 1);
            k = a;
            h.fill = g({
              angle: 0,
              stops: [
                [0, c],
                [.49, c],
                [.5, k],
                [1, k]
              ]
            }, 0, "", 0);
            if (h = d.hover) h.stroke = h.stroke || h.fill, c = M(a, "black", 30, 1), k = M(a, "black", 10, 1), h.fill = g({
              angle: 0,
              stops: [
                [0, c],
                [.49, c],
                [.5, k],
                [1, k]
              ]
            }, 0, "", 0);
            if (h = d.select) h.stroke = h.stroke || h.fill, c = M(a, "black", 30, 1), k = M(a, "black", 10, 1), h.fill = g({
              angle: 0,
              stops: [
                [0, c],
                [.49, c],
                [.5, k],
                [1, k]
              ]
            }, 0, "", 0)
          } else if ((u = e.a(w.je(u, d), "stops")) &&
            "le" === p) {
            if (t(d[""], d[""].stroke || aa(d[""].fill), {
              linearGradient: [0, 0, 1, 0],
              options: a,
              stops: u
            }), d[""]["stroke-width"] = e.s(d[""].strokeWidth, d[""]["stroke-width"]), h = d.hover) {
              d = [];
              c = 0;
              for (k = u.length; c < k; c++) p = u[c], d[c] = [p[0], na(p[1])];
              t(h, h.stroke || h.fill, {
                linearGradient: [0, 0, 1, 0],
                options: a,
                stops: d
              })
            }
          } else if ("aqua" === b) t(d[""], d[""].stroke, C(d[""].fill, c, k)), (h = d.hover) && t(h, h.stroke || M(aa(h.fill), h.fill, 50), C(h.fill, c, k, !0), 2), (h = d.select) && t(h, h.stroke || aa(h.fill), C(h.fill, c, k, !0));
          else if ("rounded" ===
            b) {
            h = d[""];
            h.stroke = h.stroke || aa(h.fill);
            h.fill = N(h.fill, c, k);
            if (h = d.hover) h.stroke = h.stroke || h.fill, h.fill = N(h.fill, c, k, !0), h["stoke-width"] = 2;
            if (h = d.select) h.stroke = h.stroke || aa(h.fill), h.fill = N(h.fill, c, k, !0)
          } else if ("subtle" === b) {
            h = d[""];
            h.stroke = h.stroke || aa(h.fill);
            h.fill = y(h.fill, c, k);
            if (h = d.hover) h.stroke = h.stroke || h.fill, h.fill = R(h.fill, c, k);
            if (h = d.select) h.stroke = h.stroke || aa(h.fill), h.fill = R(h.fill, c, k)
          } else {
            h = d[""];
            h.stroke = h.stroke || aa(h.fill);
            if (h = d.hover) h.stroke = h.stroke || h.fill, h.fill =
              M(G(h.fill), "#ffffff", 20);
            (h = d.select) && (h.stroke = h.stroke || aa(h.fill))
          }
        },
        modifyColor: D,
        colorToHex: w,
        colNToH: n,
        getGradient: b,
        checkIfDefExists: k,
        outline: z,
        uc: d,
        Xj: F,
        O: u,
        Na: K,
        P: g,
        $j: E,
        ek: T,
        gi: h,
        Ce: function (d, b, a, c, k, p) {
          function h(d, b, a, c) {
            d && (b && (d.stroke = b), a && (d.fill = a), c && (d["stoke-width"] = c))
          }
          a = "subtle";
          var t;
          d = d.g;
          d.getColMan();
          e.a(c, "options.id");
          a = d.I("columnType", k) || "default";
          c = !1;
          c = k = "horizontal" === d.I("chartType", k);
          d.o("map");
          m(p) && (k = p);
          if (d.isType("funnel") && "square" === d.I("funnelShapeType") ||
            d.isType("pyramid")) {
            t = b[""];
            t.stroke = t.stroke || aa(t.fill);
            p = b[""].fill;
            k = M(p, "black", 20, 1);
            a = p;
            t.fill = g({
              angle: 0,
              stops: [
                [0, k],
                [.49, k],
                [.5, a],
                [1, a]
              ]
            }, 0, "", 0);
            if (t = b.hover) t.stroke = t.stroke || t.fill, k = M(p, "black", 30, 1), a = M(p, "black", 10, 1), t.fill = g({
              angle: 0,
              stops: [
                [0, k],
                [.49, k],
                [.5, a],
                [1, a]
              ]
            }, 0, "", 0);
            if (t = b.select) t.stroke = t.stroke || t.fill, k = M(p, "black", 30, 1), a = M(p, "black", 10, 1), t.fill = g({
              angle: 0,
              stops: [
                [0, k],
                [.49, k],
                [.5, a],
                [1, a]
              ]
            }, 0, "", 0)
          } else if ("le" === p && (k = !0, c = !1), "aqua" === a) h(b[""], b[""].stroke,
            C(b[""].fill, k, c)), (t = b.hover) && h(t, t.stroke || M(aa(t.fill), t.fill, 50), C(t.fill, k, c, !0), 2), (t = b.select) && h(t, t.stroke || aa(t.fill), C(t.fill, k, c, !0));
          else if ("rounded" === a) {
            t = b[""];
            t.stroke = t.stroke || aa(t.fill);
            t.fill = N(t.fill, k, c);
            if (t = b.hover) t.stroke = t.stroke || t.fill, t.fill = N(t.fill, k, c, !0), t["stoke-width"] = 2;
            if (t = b.select) t.stroke = t.stroke || aa(t.fill), t.fill = N(t.fill, k, c, !0)
          } else if ("subtle" === a) {
            t = b[""];
            t.stroke = t.stroke || aa(t.fill);
            t.fill = y(t.fill, k, c);
            if (t = b.hover) t.stroke = t.stroke || t.fill, t.fill =
              R(t.fill, k, c);
            if (t = b.select) t.stroke = t.stroke || aa(t.fill), t.fill = R(t.fill, k, c)
          } else {
            t = b[""];
            t.stroke = t.stroke || aa(t.fill);
            if (t = b.hover) t.stroke = t.stroke || t.fill, t.fill = M(G(t.fill), "#ffffff", 20);
            (t = b.select) && (t.stroke = t.stroke || aa(t.fill))
          }
        },
        aa: D,
        wb: w,
        Vd: n,
        lb: b,
        Oj: k,
        addVML: function (d, b) {
          d.image("data:image/x-png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAUCAYAAADiOEEgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADAdJREFUeNrsWXuMVcUZ/2bmnPtYdmEXcFVQfBXURgGNgk/QYoKpKFpfUWNVqjStsZo2WhXTYjSxUalS6xut0tZWra2xSqJNCxZTpVURpSqCIqjACizs4z7OY2b6++bM3r17XWi18p+z+e45Z86cb2a+5++bFbNnz6adNmvJGENCCuI/EsL14YdIa6oGBXpp6lWUhE0krOEvxoMuAZ0sCrlXo9fWXBgtW9WC+14bpzY/YV/Kjd+XbKAyXn3T9N1gHtVdJrW9hGnQW03I5EOyLUUiXEUuIKMkxkl8Y0mlJvt6MF58Y7B+fPN5msS8wpg6Hsat12BObgr7tliXjRI3rwgVCayN12X9GAEeksf5Z26DrYL7hvB4UAUU1b07GDQatB70nlsLJtMq5NuRoDmgS0HNbvNxsk53bC8KpRahDzPb35E299fxGwOa4e95zIduVku7svEMk/x6t4Fe3uUz9inRWelAOhG0EvQO6DJnXUTtoN+AXkPfX3B9HfQEBDo2jCs0cvMaaF01oW+mE3SfYUWJ1Bu35UhJmLKdKpScKEcO2xMC35sqMck0nSCT9G5Pk2WqSfVUSJaqTolfamNLS1ImCboT9CzoAVBOoT/z1l0sbGM0NVATaC/QHqChml2IaKE19gLcFzVcA9ch2tizNYkXpdFHjl/+OOWjnvVwmePB861+GxJ5CmQBdzmrTTnYp/2OYPTwBTbVSzDRYbaalm2UEhPFaeoU0FXJNv5lC5v5aYSGKLGe+F7w1XJ/nbvvOmFrxLSBZOrue/A0BTF7Ogsd12XG2h/iutgpRuuq1FHUOWJ/0kF+b2GsQIw8CXxXeP4hrDoPRbWKXLgwN3Hf3cHvm+jfH/QThBkFIkcQAFv0LrMwjq2wYFGuGig2ATkFi1I1okS7XLGrW2Cs2dn7BHZ9QBbRXDC9SZJ4TghxL4R+rTLJ7zftfui7b4w/F9ZB86RNJtnUnkM5NYMCxGlLIyjWzdhnjwjkg9jwexDmz8FoGnhdLeNkTC1awtaQlCbAws7D/TD0vA16HPRpw5r2w0owxu6Hj7bgeYkLb0Rn+BD2D1A36DjP4xMkq+/hChein6tIT4ERtXteI2Vqvq2L9hWMmQqeh3E+EuTWeJrPKa9y2MScp2PMUbiPQc+C/tawLiV4DdZ+A/cF8GAPXwjaHXQ0rylgC95JKyDjL+HoC1nnrRVzoZzVYPoeDGFupTCM3hp3GumEDlFRZaYRIocFXUfWnEFKzRA5daNsG7KX+bTrOcTv5aazxwajRvzIWtOiSlGPrCRjfbjgZHE1FHokUn9T3fzft1kCfd8/n4sQdAeles+a+omuxeVNj4K43QbaCvoZXq5lLCG0PoDHwHMW4ts/cm7wbRSE86iIkjmiEk+G67KAV4PnPbjeDDoQPNbg2osQNFH0g5yr8HMNbm/3brMHvn0ExjK9wT9mCW26cD02E7a3bOsX39CAt8S7eHc1wsMvgGeOwMAX8MUlNi4v3tB+ONaeozAuTYPQchk6oUWW3bKQW0/54LtyaHEiEMmDcFWrN3dTMGY3dt8eA3jnYmU2K/9MtRn64eR7sHBz00FI0DdB4ecjok6Bwh6FcPIeUyzF7xasZ1Im6NrqYXk27vMC7gff52EEj5nuUgeCyd/xfLj3gir29Q6FwYcURBMpg3u9XhwVz+NrXj6YT8B67THZesWN4PmUVWItQuO9NjbTHQIlW8LvKqyzFQ+H2P51VQOt0yye7QT/CCHvglLyZGA1gvZB1zNahpeP7Hhz4cb2I4Cxm8d6jK2dlTE2B/Y0ohjrTdteE4HSPEG6toPC0SNI4z5BfBb1cdLS+4FSZweBWpmk+kRt9JPoHQphH51XsjkM4+ttJuguq9R3TCD/5KzW0J5ANfdizpmfBdoOt9+qw+DHznc4Lqb6pESbxd7a1gdKHpdPkoosi4sa8kXfAyCSvBw8HoDHSiCXeVDQlehnD9zf5IPhNhWnewP4J0DCbIx/2xlFai5GHpvHAIH5BZVKhVQQQLnhoOLmHk7UEMvtiNNbkezuEs4qxMPF6lbZtuGNR9aNmiLDhA1BsLDLvGiru0kUc8xAu02ASaGpQHrNRqqi3zYkJIx42CizXKcO7byAK1vuKRCwDZUaQ2U5KeMjFqCqeIp5WxQrohJtROK7El4yFeNbM161fRjM8rQMUQhh7gioJ6omSf1GUyGiXKiwymiQnbu2HCHxfme1MdwzSR9D3w/wDF8OeBvT2J1dPSKJlbKCCyBhKQGs/KXQFuumC12CdAUS4ByvQCk1qGXHMSAZrF+q4FfYyAYI/dfo3g09d7d0rX05HjphVeRcyEACcF1j3spvjUltgcBZU7DyXHOBAgiItxRg06Yx+wtYrE1dFuMH+Gs3ZYWqTlVSLFmRZ8wvpfiXCwzlKCtmjTPZdYCiqzB6cgapa+JOmC+PVb0VSrthWNZKVwrX4qZQpTJ7nthRCfSJU3Kvh6TZQLYBUTBGFSgc5dZA1AH6d1CNKS2hfEEodZ4r6CX8XjiggmSB94WTAfplyJfhXmlsgopVPo/nWXjzRCJU09Dej64U5fICLUIrLRuSnRUm+pkQG9SAV7kcFFgIndBtzU1tUyFKyw0bbAS6ype9MpLUWzW2AgZNeB7BJXhYrlJYiika0cxltLRK1hKrGBgOBBueqKZUBPRrLJb4XaUM2cvBCs2BRZFfb95V9JBLgokCiRSYgYwWDntpqivVEgozWHcR3gTk1tpYrh+K4V06TdfjZVX0L4hR9zh8MQ+CWgmFXJfyuYEQi7C/TtjPaGH16Laej1d05/dZrEzMsGcmrOdmDPopYpcmY/sXy1DL2rkINpOkNucgXsT/FR5jP4EQW5DpV4HXMTCH84MkfQi4PGIfbupBjssHp6RKHNRnzrCKgaLCgwSIlbA2O4gBF77oGQESWVmIZSbL822w8CvSJL2BTdYg+fdUor2Qgy6pF/Z0m+HBDgh2LjQ/rU/YEDAH9vnY8MkOggkxHJ1LcX8cCptRvKWcqX7QVt6ge8WYOUEa/xWzsoXNsS4BiYd8RdmMoccjrl6stDnQRVVL89M4vft/KbygmK5CPngSmzkGazgWH/8B+7sTPDcjAU1TcXI9omRYJ4TPykVzLaMHnSD8fCKuDbfVpFjJh89ATisgsQm8b2npIFxZDm0wpllamwNqwsbAK4yx7SI7/3gKcQOgo6bppbhbguBwPExiCJxtNl7NdmjDvTYodtVvm6ubKAhLryDTX2a1vg8CYZc6ARo+wRUTWUgQab/1rEZ+uEWj4LH9RdWgYYT1iZ8i5lwAYzgLUx8L/jP8AVZqULs2oAiF/cg6wYj+00vbZ8BBveCMg6C1vh1dP3N4ByPMyVxQtS3F84BSnsYc49B7Jl6d2Z9kxQZcRzk0AmuZhQ3fgOku4pjj+WyDoG5FgH/RB5MzoAKGMIfWTboaHnADPOHVIfFGSAZVrw0f04l+32qLQsOe4NFBUJfe10FQTyCezYe2NphqfJIvQMKG00Vu2z3m7YAfqJSflTxLx8lt4PQtD72Y91rwXIiNXuRP8rqhFCAi6sE9k6lF4H6dbPXvNjtEkgWzTj/fFj9yq3/e1ogX/DtmWc0HFVb5O4Cik5UQ1yAzcWGEYoLWaCFuQdg8CsiET0MTceqMU4mtCxY+FjMc5uHS6xDkB5zUXMbncxJrW2wG6HlDG6GM16GM7QqcUlGglcPPpmoakK5GyMSGE+ve+BnnTwx58R8jIKwUSm5XOcgW8VNXohwmaPNWzSV2qW5Tw/xRb7Y5IawckiPDcTfViM/2EFYQ1vgy+G6B2bZ74XdTdnrW6nF/p0MlA9twF6ozBXf69bV6BVa9gNv8mLJXfF/jBNnGyV7lg2351uavE4dUITjhL1OBLENsQZIYTm9AVWIp1MJHB2/Wu8hqTztqbAnPf47Y9pGnHZ8qZ4Ls2MGILk+DtXc91bfGM5TyTtbWOUjf9gahdu7gW1bQJl6+RH2C3HUUctE93nFW6Jge5n0jYrTBGM83maB5u4sC+qp9wfNSBAwUA0jyDyHmHw5PuxTRgJPk/NoYTX1wd4kK1O1fCfv/b7H7J0uiuf64gDJU0uK9dg1M+s9Cqfs4/v9HgAEAL1eLLnp1yJwAAAAASUVORK5CYII=",
            4, b - 20 - 0, 91, 20).add()
        },
        od: function (d) {
          return t(u(d))
        },
        Jf: function (d) {
          return Q(t(u(d)))
        },
        Zj: function (d) {
          d = t(d);
          return q(d[0], d[1], d[2])[0]
        },
        qh: function (d) {
          if ("object" === typeof d && d.stops) {
            d = Object.create(d);
            for (var b = [], a = 0, c = d.stops.length; a < c; a++) b.push([d.stops[a][0], x(d.stops[a][1])]);
            d.stops = b;
            return d
          }
          return x(d)
        },
        ai: function (d, b) {
          var a = t(d),
            c = ga(a[0], a[1], a[2]),
            k = Math.random() * b;
          .5 < Math.random() && (k = -k);
          c[2] += k * c[2];
          c[2] = Math.max(0, c[2]);
          c[2] = Math.min(1, c[2]);
          c = W(c[0], c[1], c[2]);
          return Q([c[0],
          c[1], c[2], a[3]
          ])
        },
        nf: function (d) {
          for (var b = 0, a = 0, c = 0, k = d.length, p = 0; p < k; p++) var h = t(u(d[p])),
            b = b + h[0],
            a = a + h[1],
            c = c + h[2];
          return Q([b / k, a / k, c / k])
        },
        Ob: V,
        kf: X,
        cssFontSizeToPixels: function (d) {
          if (d)
            if (isNaN(d)) {
              if (-1 < d.indexOf("pt")) return d = d.replace(/^\D+/g, ""), 1.33 * d;
              if (-1 < d.indexOf("em")) return d = d.replace(/^\D+/g, ""), 16 * d;
              switch (d.toString().toUpperCase()) {
                case "X-SMALL":
                  return 10;
                case "SMALL":
                  return 13;
                case "MEDIUM":
                  return 16;
                case "LARGE":
                  return 18;
                case "X-LARGE":
                  return 24;
                case "XX-LARGE":
                  return 32
              }
            } else return parseInt(d)
        },
        prepSvgForExport: function (d) {
          var b = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0");
          $ && b && (d = $(d), d = $("<div>").append(d.clone()).html(), d = d.replace(/&quot;/g, "'"), d.toJSON && delete d.toJSON, -1 < d.indexOf("svg") && (d = d.substring(0, d.lastIndexOf("</svg>") + 6), b = d.match(/<svg/g).length, d.match(/<\/svg/g).length < b && (d = d + "</svg>")));
          d = d.replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" ]+)/g, 'class="$1"');
          d = d.replace(/&quot;/g, "'");
          d = d.replace(/<undefined><\/undefined>/g,
            "");
          d = d.replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)".*/g, '$1="rgb($2)" $1-opacity="$3"');
          d = d.replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad");
          d = d.replace(/isShadow="[^"]+".*/g, "").replace(/symbolName="[^"]+".*/g, "").replace(/jQuery[0-9]+="[^"]+".*/g, "").replace(/isTracker="[^"]+".*/g, "").replace(/onclick="[^"]+".*/g, "").replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)".*/g, function (d) {
            return d.toLowerCase()
          });
          d = d.replace(/(url\(#jscharting-[0-9]+)&quot;/g,
            "$1");
          2 == d.match(/ xmlns=".*/g).length && (d = d.replace(/xmlns="[^"]+/, ""));
          b = -1; - 1 != navigator.appVersion.indexOf("MSIE") && (b = parseFloat(navigator.appVersion.split("MSIE")[1]));
          8 <= b && 9 > b ? d = d.replace(/href=/g, ' xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href=') : 9 <= b && (d = d.replace(/href=/g, ' xlink:type="simple" xlink:href='));
          6 <= b && (d = d.replace(/<IMG/g, " <image"), d = d.replace(/\.jpg">/gi, `.jpg"` + `/>`), d = d.replace(/\.png">/gi, '.png"' + `/>`), d = d.replace(/ hc-svg- /g, " "), d = d.replace(/ xlink: /g,
            " "));
          /Firefox/.test(navigator.userAgent) && (d = d.replace(/preserveAspectRatio="none">/g, 'preserveAspectRatio="none"' + `/>`));
          6 <= b && (d = d.replace(/(width=)/g, '$1"'), d = d.replace(/(width="\d{2,3})/g, '$1"'), d = d.replace(/width="".*/g, 'width="'), d = d.replace(/(height=)/g, '$1"'), d = d.replace(/(height="\d{2,3})/g, '$1"'), d = d.replace(/height="".*/g, 'height="'));
          d = d.replace(/translate\(([0-9]+) ([0-9]+)\)/g, "translate($1,$2)");
          d = d.replace(/TITLE/g, "title");
          return d = d.replace(/"M 0 0".*/g, '"M 0 0 L 1 1"')
        },
        colorToPalette: c,
        rf: c
      }
    }(),
    l = function () {
      function a(b, c) {
        function k() {
          w = (9301 * w + 49297) % 233280;
          return 0 + w / 233280 * 1
        }

        function h() {
          return Math.random()
        }
        var w = b,
          u = []; - 1 === b && (k = h);
        for (var e = 0; e < c; e++) u[e] = k();
        return u
      }

      function b(b) {
        for (var a = [], c = 0, k = b.length; c < k; c++) c ? b[c] !== b[c - 1] && a.push(b[c]) : a.push(b[c]);
        return a
      }

      function c(b, a, c) {
        return b.slice(a, c)
      }

      function w() {
        var b = be,
          a, c = b.length,
          k = [];
        if (b.charAt)
          for (a = 0; a < c; a++) k.push(b.charAt(a));
        else
          for (a = 0; a < b.length; a++) k.push(b[a]);
        return r.call(k, void 0, k.length)
      }
      var e,
        r = Array.prototype.slice;
      try {
        r.call(document.documentElement), e = c
      } catch (h) {
        e = w
      }
      return {
        Wg: function (b, a) {
          if (void 0 === b || null === b) throw new TypeError;
          var c = Object(b),
            k = c.length >>> 0;
          if ("function" != typeof a) throw new TypeError;
          for (var h = [], u = 2 <= arguments.length ? arguments[1] : void 0, w = 0; w < k; w++)
            if (w in c) {
              var d = c[w];
              a.call(u, d, w, c) && h.push(d)
            } return h
        },
        Qe: b,
        ij: function (b, c) {
          c = m(c) ? c : -1;
          var h = b.length,
            n, w, u;
          for (m(c) && (u = a(c, b.length + 2)); 0 !== h;) w = Math.floor(u[h] * h), --h, n = b[h], b[h] = b[w], b[w] = n;
          return b
        },
        Ij: e,
        ck: a,
        remDups: b
      }
    }(),
    x = function () {
      return {
        wh: function (a) {
          var b = a.style,
            c;
          (c = e.a(a, "states.hover.style")) || (c = {}, e.c(a, "states.hover.style", c));
          var w;
          (w = e.a(a, "states.hidden.style")) || (w = {}, e.c(a, "states.hidden.style", w));
          e.c(c, "color", e.a(c, "color") || f.lb(b.color, "black", 5, 1));
          e.c(w, "color", e.a(w, "color") || f.lb(b.color, "gray", 80, 1));
          e.c(c, "fontSize", e.a(c, "fontSize") || b.fontSize);
          e.c(w, "fontSize", e.a(w, "fontSize") || b.fontSize);
          e.c(c, "fontStyle", e.a(c, "fontStyle") || b.fontStyle);
          e.c(w, "fontStyle", e.a(w,
            "fontStyle") || b.fontStyle);
          e.c(c, "fontFamily", e.a(c, "fontFamily") || b.fontFamily);
          e.c(w, "fontFamily", e.a(w, "fontFamily") || b.fontFamily);
          e.c(c, "fontWeight", e.a(c, "fontWeight") || "bold");
          e.c(w, "fontWeight", e.a(w, "fontWeight") || b.fontWeight);
          return a
        },
        vh: function (a) {
          var b;
          (b = e.a(a, "states.hover")) || (b = {}, e.c(a, "states.hover", b));
          e.c(a, "outline.color", e.a(a, "outline.color") || f.aa(e.a(a, "fill"), "outline"));
          e.c(b, "iconFill", e.a(b, "iconFill") || a.iconFill || "white");
          e.c(b, "outline.color", e.a(b, "outline.color") ||
            f.lb(a.outline.color, "black", 30, 1));
          e.c(b, "outline.width", e.a(b, "outline.width") || a.outline.width);
          e.c(b, "iconOutline.color", e.a(b, "iconOutline.color") || f.lb(a.iconOutline.color, "blue", 20, 1));
          e.c(b, "iconOutline.width", e.a(b, "iconOutline.width") || a.iconOutline.width);
          return a
        },
        uh: function (a) {
          a = this.sh(a);
          var b;
          (b = e.a(a, "states.hover")) || (b = {}, e.c(a, "states.hover", b));
          e.c(a, "outline.color", e.a(a, "outline.color") || f.aa(e.a(a, "fill"), "outline"));
          e.c(b, "outline.color", e.a(b, "outline.color") || f.aa(e.a(b,
            "fill"), "outline") || f.aa(e.a(a, "outline.color"), "outline") || f.lb(a.outline.color, "black", 30, 1));
          e.c(b, ".outline.width", e.a(b, ".outline.width") || a.outline.width);
          e.c(b, ".fill", e.a(b, ".fill") || f.aa(a.fill, "crysBright") || "gray");
          return a
        },
        sh: function (a) {
          var b = a.style,
            c;
          (c = e.a(a, "states.hover.style")) || (c = {}, e.c(a, "states.hover.style", c));
          var w;
          (w = e.a(a, "states.select.style")) || (w = {}, e.c(a, "states.select.style", w));
          e.c(c, "color", e.a(c, "color") || f.lb(b.color, "black", 5, 1));
          e.c(w, "color", e.a(w, "color") ||
            f.lb(b.color, "gray", 80, 1));
          e.c(c, "fontSize", e.a(c, "fontSize") || b.fontSize);
          e.c(w, "fontSize", e.a(w, "fontSize") || b.fontSize);
          e.c(c, "fontStyle", e.a(c, "fontStyle") || b.fontStyle);
          e.c(w, "fontStyle", e.a(w, "fontStyle") || b.fontStyle);
          e.c(c, "fontFamily", e.a(c, "fontFamily") || b.fontFamily);
          e.c(w, "fontFamily", e.a(w, "fontFamily") || b.fontFamily);
          e.c(c, "fontWeight", e.a(c, "fontWeight") || "normal");
          e.c(w, "fontWeight", e.a(w, "fontWeight") || b.fontWeight);
          return a
        },
        gb: function (a) {
          var b = a.fontSize;
          b && b.toFixed && (a.fontSize =
            b + "px");
          return a
        }
      }
    }(),
    e = function () {
      function a(b, c, k, w) {
        var d = {},
          e = 0,
          D, d = h(!0, d, w, k, c, b);
        for (D in d) {
          e++;
          break
        }
        return 0 === e ? void 0 : d
      }

      function b(b, a, c) {
        if (b && a && "undefined" !== typeof c) {
          a = a.split(".");
          var k = a.length - 1,
            d, h;
          for (d = 0; d < k; d++) h = a[d], b = void 0 === b[h] ? b[h] = {} : b[h];
          return b[a[k]] = c
        }
      }

      function c(b, a) {
        var c = b,
          k;
        if (a) {
          k = a.split(".");
          for (var d = 0; void 0 !== c && d < k.length; d++) c = c[k[d]]
        }
        return c
      }

      function w(b, a) {
        var c, k = b || {};
        for (c in a) k[c] ? a[c] && (k[c] = "object" === typeof k[c] ? w(k[c], a[c]) : a[c]) : k[c] = a[c];
        return k
      }

      function D(b, a) {
        var c, k, d;
        for (d in a)
          if ("undefined" === typeof b[d]) return !1;
        for (d in a)
          if (k = a[d], c = b[d], k) switch (typeof k) {
            case "object":
              if (!D(k, c)) return !1;
              break;
            case "function":
              if ("undefined" === typeof c || "equals" !== d && k.toString() !== c.toString()) return !1;
              break;
            default:
              if (k !== c) return !1
          } else if (c) return !1;
        for (d in b)
          if ("undefined" === typeof a[d]) return !1;
        return !0
      }

      function r(b, a, c) {
        b = E(b, a, c);
        return b.pop ? b[0] : b
      }

      function h() {
        function b(d) {
          var a = typeof d;
          if ("undefined" !== a) {
            if ("boolean" === a) return "boolean";
            if ("number" === a) return "number";
            if ("function" === a) return "function";
            if (d && d.pop) return "array";
            if ("string" === a) return "string";
            if ("object" === a) return d && d.getUTCMilliseconds ? "date" : "object"
          }
          return "undefined"
        }
        var a, c, k, d, w, e = arguments[0] || {},
          t = 1,
          D = arguments.length,
          p = !1;
        "boolean" === typeof e && (p = e, e = arguments[t] || {}, t++);
        k = typeof e;
        "object" !== k && "function" !== k && (e = {});
        t === D && (e = this, t--);
        for (; t < D; t++)
          if (null != (w = arguments[t]))
            for (d in w)
              if (a = e[d], k = w[d], e !== k) {
                var I = b(k);
                if (p && k && ("object" === I || (c = "array" ===
                  I))) {
                  if (c) {
                    c = !1;
                    if (I = a) I = a.pop ? !0 : void 0;
                    a = I ? a : []
                  } else a = a && "object" === b(a) ? a : {};
                  e[d] = h(p, a, k)
                } else void 0 !== k && (e[d] = k)
              } return e
      }

      function f(b, a, c) {
        for (var k = 0, d = b.length; k < d; k++)
          if (b[k][a] === c) return b[k]
      }

      function r(b, a, c, k) {
        var d;
        return (d = E(b, a, c, k)) && d.pop ? d[0] : d
      }

      function E(b, a, c, k) {
        var d, h = [],
          w, t, e = m(k),
          p, I;
        c = c.valueOf();
        if (b)
          if (b.pop)
            for (w = 0, t = b.length; w < t; w++) p = b[w], m(I = p[a]) && I.valueOf() === c && (d = p, e && (b[w] = k), h.push(d));
          else b[a] === c && (d = b);
        return 1 < h.length ? h : d
      }

      function g(b) {
        function a(b,
          d) {
          var k, h;
          for (h in b) k = N.K(b[h]), "undefined" === k || "array" === k ? a(b[h], (d ? d + "." : "") + h) : c.push((d ? d + "." : "") + h)
        }
        var c = [];
        a(b, "");
        return c
      }
      return {
        merge: function (b, a) {
          return jQuery.extend(!0, null, a, b)
        },
        a: c,
        c: b,
        f: function (b, a, c, k, d) {
          a = e.a(a, k);
          if (void 0 !== a) return e.c(b, c, d ? d(a) : a), !0
        },
        fl: function (b, a) {
          for (var c in a) b[c] = a[c]
        },
        T: function (b, a) {
          return jQuery.extend(!0, null, b, a)
        },
        sc: function (b, a) {
          var c;
          b || (b = {});
          for (c in a) b[c] = a[c];
          return b
        },
        Hh: w,
        Cc: D,
        jd: function (b, a) {
          for (var c = b.length; c--;)
            if (b[c] === a) {
              b.splice(c,
                1);
              break
            }
        },
        vg: function (b) {
          b && b.constructor === Array || (b = [b]);
          return b
        },
        Va: function (b, a, c, k, d) {
          if (a && (a = JSCL.j.a(b, a)) || c && (a = JSCL.j.a(b, c)) || k && (a = JSCL.j.a(b, k)) || d && (a = JSCL.j.a(b, d))) return a
        },
        Ik: function (b, a, c, k, d) {
          a = e.a(b, a);
          if ("undefined" !== typeof a) return a;
          a = e.a(b, c);
          if ("undefined" !== typeof a) return a;
          a = e.a(b, k);
          if ("undefined" !== typeof a) return a;
          a = e.a(b, d);
          if ("undefined" !== typeof a) return a
        },
        s: function () {
          var b = arguments,
            a, c, k = b.length;
          for (a = 0; a < k; a++)
            if (c = b[a], "undefined" !== typeof c && null !==
              c) return c
        },
        F: a,
        ak: function (b, a) {
          if (b.pop)
            for (var c in b)
              if (b[c][0] === a) return b[c][1]
        },
        hk: function (b, a) {
          for (var c in b)
            if (c.toUpperCase() === a.toUpperCase()) return !0
        },
        Db: function (b) {
          if (b && b.pop) return !0
        },
        qk: function () { },
        evalPath: c,
        setPathVal: b,
        cascadeProperties: a,
        eh: function (b, a, c, k) {
          var d = {},
            w = 0,
            e, d = h(!0, b, k, c, a);
          for (e in d) {
            w++;
            break
          }
          return 0 === w ? void 0 : d
        },
        dh: function (b, a, c, k, d) {
          var w = {},
            e = 0,
            t;
          b = b || {};
          var D, p = [],
            I;
          if (b.Fd) {
            D = [a, c, k, d];
            for (var r = 0, f = D.length; r < f; r++)
              if (p[r] = [], I = D[r])
                for (var T = 0,
                  E = b.Fd.length; T < E; T++) {
                  var g = b.Fd[T];
                  m(I[g]) && (p[r].push([g, I[g]]), delete I[g])
                }
          }
          w = h(!0, w, d, k, c, a);
          if (b.Fd)
            for (r = 0, f = D.length; r < f; r++)
              for (b = p[r], a = 0, c = b.length; a < c; a++) k = b[a], D[r][k[0]] = k[1];
          for (t in w) {
            e++;
            break
          }
          return 0 === e ? void 0 : w
        },
        W: h,
        fe: r,
        zf: function (b, a, c) {
          for (var k = [], d = 0, h = b.length; d < h && (!a(b[d]) || (k.push(b[d]), c)); d++);
          if (k.length && 1 < k.length) return k;
          if (1 === k.length) return k[0]
        },
        J: f,
        ld: function (b, a, k, h, d) {
          var w = [],
            e;
          d && (k = k.toLowerCase());
          for (var t = 0, D = b.length; t < D; t++)
            if (m(e = c(b[t], a)) &&
              null !== e)
              if (d) {
                if (e.toLowerCase() === k)
                  if (h) w.push(b[t]);
                  else return b[t]
              } else if (e === k)
                if (h) w.push(b[t]);
                else return b[t];
          if (w.length) return w
        },
        Kh: E,
        kc: function (b, a) {
          a = a.toLowerCase();
          for (var c = 0, k = b.length; c < k; c++)
            if (b[c].toLowerCase() === a) return c;
          return -1
        },
        xh: function (b, a) {
          var k = g(a);
          if (k)
            for (var h = 0, d = k.length; h < d; h++) {
              var w = k[h];
              if (c(b, w) !== c(a, w)) return !0
            }
        },
        qf: function (b) {
          return Object.create(b)
        },
        arrSortNum: function (b) {
          b.sort(function (b, a) {
            return b < a ? -1 : b > a ? 1 : 0
          });
          return b
        },
        fIAS: f
      }
    }(),
    q = function () {
      function a(b,
        c) {
        b = b.toLowerCase();
        if (document.styleSheets)
          for (var k = 0; k < document.styleSheets.length; k++) {
            var e = document.styleSheets[k],
              r = 0,
              h = !1;
            do {
              e.cssRules ? h = e.cssRules[r] : e.rules && (h = e.rules[r]);
              if (h && h.selectorText && h.selectorText.toLowerCase() == b) return "delete" == c ? (e.cssRules ? e.deleteRule(r) : e.removeRule(r), !0) : h;
              r++
            } while (h)
          }
        return !1
      }
      return {
        Yj: a,
        zb: function (b) {
          "." !== b.charAt(0) && (b = "." + b);
          b = a(b);
          var c, w = b;
          w.style && (w = w.style);
          var e = [],
            r;
          for (r in w) r.length && 2 < r.length && "cssText" !== r && 0 < w[r].length && !jQuery.isFunction(w[r]) &&
            e.push(r);
          r = {};
          b.style ? c = b.style : c = b;
          if (c && 0 < e.length)
            for (var h in e) r[e[h]] = c[e[h]];
          return r
        },
        Ae: function (b, a) {
          return b > a ? b - a : a - b
        }
      }
    }(),
    U = function () {
      return {
        clockwiseAngleSweep: function (a, b) {
          for (; 0 > a;) a += 360;
          for (; b < a;) b += 360;
          return b - a
        },
        toDegrees: function (a) {
          return 180 * a / Math.PI
        },
        toRadians: function (a) {
          return a * Math.PI / 180
        },
        normalizeAngle: function (a) {
          return 360 === a ? a : (a + 36E3) % 360
        },
        getPolarPoint: function (a, b, c, w) {
          return {
            x: a + w * Math.cos(c),
            y: b + w * Math.sin(c)
          }
        },
        angleOfPoints: function (a, b) {
          return (180 * Math.atan2(b.y -
            a.y, b.x - a.x) / Math.PI + 360) % 360
        },
        pointDistance: function (a, b) {
          var c = 0,
            w = 0,
            c = b.x - a.x,
            w = b.y - a.y;
          return Math.sqrt(c * c + w * w)
        },
        lineIntersect: function (a, b, c, w) {
          var e = a.x;
          a = a.y;
          var r = b.x;
          b = b.y;
          var h = c.x;
          c = c.y;
          var f = w.x;
          w = w.y;
          var E, g, n, l, u = {
            x: null,
            y: null,
            Ki: !1,
            Li: !1
          };
          E = (w - c) * (r - e) - (f - h) * (b - a);
          if (0 == E) return u;
          g = a - c;
          n = e - h;
          l = (r - e) * g - (b - a) * n;
          g = ((f - h) * g - (w - c) * n) / E;
          n = l / E;
          u.x = e + g * (r - e);
          u.y = a + g * (b - a);
          0 < g && 1 > g && (u.Ki = !0);
          0 < n && 1 > n && (u.Li = !0);
          return u
        },
        lineDistance: function (a, b, c) {
          var w = U.angleOfPoints(a, b),
            w = U.getPolarPoint(c.x,
              c.y, U.toRadians(w + 90), 5),
            w = U.lineIntersect(a, b, c, w);
          return U.pointDistance(c, w)
        }
      }
    }(),
    C = function () {
      return {
        ng: function (a) {
          var b = a.split("="),
            c, w;
          1 < b.length && (c = b[1]);
          if ("ytd" === b[0]) return c || (c = "YTD"), {
            type: "ytd",
            text: c
          };
          if ("max" === b[0]) return c || (c = "Max"), {
            type: "all",
            text: c
          };
          a = b[0].match("[0-9]+");
          b = b[0].match("[a-zA-Z]+");
          if (a && b) return a = parseInt(a[0]), b = b[0], w = A.Gd("ms s min h d w m y ytd max".split(" "), "millisecond second minute hour day week month year ytd all".split(" "), b.toLowerCase()), c ||
            (c = a + "" + b), {
            type: w,
            count: a,
            text: c
          }
        },
        vf: function (a, b, c) {
          b.getMonth || (b = new Date(b));
          c.getMonth || (c = new Date(c));
          var w, e = B();
          b = c.getTime() - b.getTime();
          c = a.split(",");
          var r = [];
          if (0 === a.length) return [];
          for (var h in c)
            if (a = c[h], a = C.ng(a)) w = e.Uf({
              unit: a.type,
              multiplier: a.count
            }), w <= b && r.push(a);
          return r
        },
        Oh: function (a, b) {
          if ("undefined" != typeof a && "undefined" != typeof b) {
            a.getMonth || (a = new Date(a));
            b.getMonth || (b = new Date(b));
            var c = [],
              w, e, r, h = B(),
              f = b.getTime() - a.getTime(),
              E = this.vf("1ms,10ms,100ms,1s,30s,1min,5min,30min,1h,12h,1d,7d,1m,3m,6m,1y,2y,5y,50y,max",
                a, b);
            for (w in E) r = E[w], e = h.Uf({
              unit: r.type,
              multiplier: r.count
            }), e <= f && c.push(r);
            for (; 4 < c.length;) c.shift();
            return c
          }
        },
        Sh: function (a) {
          var b = {
            min: 0,
            max: 0
          };
          a = a.points;
          for (var c in a) {
            var e = a[c],
              D = e[0],
              D = D ? e[0].getTime ? e[0].getTime() : e[0] : (D = e.x) && (D = D.getTime) ? e.x.getTime() : e.x;
            if (D < b.min || 0 == b.min) b.min = D;
            if (D > b.max || 0 == b.max) b.max = D
          }
          b.min = new Date(b.min);
          b.max = new Date(b.max);
          return b
        },
        Nh: function (a) {
          if (a.series && a.series.length && 0 < a.series.length) return a.series[0];
          if (a.chartArea && a.chartArea.pop)
            for (var b in a.chartArea)
              if (a.chartArea[b].series) return a.chartArea[b].series[0]
        },
        Ea: function (a, b) {
          if (a)
            if (a.pop)
              for (var c in a) {
                if (a[c].id === b) return a[c]
              } else if (a.id === b) return a
        },
        ke: function (a, b) {
          if ("number" === typeof b) return a.pop ? a[b] : a;
          if (a) return this.Ea(a, b)
        },
        Rk: function (a, b) {
          if (a && a.pop)
            for (var c in a)
              if (a[c].id === b) return a.splice(c, 1);
          return a
        },
        Vb: function (a, b, c) {
          b = b + "Axis";
          c = c[b];
          a = a[b];
          var e;
          if (m(a) && (e = C.ke(c, a))) return e;
          if (c) return c.pop ? c[0] : c
        },
        di: function (a, b) {
          for (var c = b.id, e = [], D = a.chartObject.series, r = 0, h = D.length; r < h; r++) {
            var f = D[r];
            f.yAxis == c ? e.push(f) :
              f.xAxis == c && e.push(f)
          }
          if (0 < h && 0 === e.length) {
            c = JSCL.Ka.K(a.json.xAxis);
            if (b.isXAxis && ("undefined" === c || "object" === c || "array" === c && 1 === a.json.xAxis.length)) return D;
            c = JSCL.Ka.K(a.json.yAxis);
            if (!b.isXAxis && ("undefined" === c || "object" === c || "array" === c && 1 === a.json.yAxis.length)) return D
          }
          return e
        }
      }
    }(),
    O = function () {
      function a(d, k) {
        var h = b(d),
          t = b(k),
          e = c(h),
          p = c(t),
          t = h.w / (t.w > t.h ? t.w : t.h),
          w = t * h.w,
          w = b({
            x: e.x - (p.x - e.x) * t - w / 2,
            y: e.y - (p.y - e.y) * t - w / 2,
            width: w,
            height: w
          });
        w.resize = {
          ratio: t,
          offsetX: -((p.x - e.x) * t),
          offsetY: -((p.y -
            e.y) * t),
          cxOrg: h.cx,
          cyOrg: h.cy,
          wOrg: h.w
        };
        return w
      }

      function b(d) {
        var a = d.width || d.w || d.r - d.l || 0,
          b = d.height || d.h || d.b - d.t || 0,
          c = d.x || d.l || 0;
        d = d.y || d.t || 0;
        return {
          l: c,
          t: d,
          r: c + a,
          b: d + b,
          w: a,
          h: b,
          width: a,
          height: b,
          cx: c + a / 2,
          cy: d + b / 2
        }
      }

      function c(d) {
        return {
          x: (d.x || d.l) + (d.width || d.r - d.l || 0) / 2,
          y: (d.y || d.t) + (d.height || d.b - d.t || 0) / 2
        }
      }

      function w(d, a, c, k, h) {
        var p = U,
          e = h.r || c / 2 || k / 2,
          w = parseInt(h.innerR),
          u = h.startD;
        h = h.endD;
        for (var n = p.clockwiseAngleSweep(u, h), D = u - 5, f = []; h < u;) h += 360;
        if (360 > n) {
          for (; D < h;) f.push(p.getPolarPoint(d,
            a, p.toRadians(D += 5), e));
          f.push(p.getPolarPoint(d, a, p.toRadians(h), e));
          if (w) {
            for (D = u - 5; D < h;) f.push(U.getPolarPoint(d, a, U.toRadians(D += 5), w));
            f.push(p.getPolarPoint(d, a, p.toRadians(h), w))
          } else f.push({
            x: d,
            y: a
          });
          return b(r(f))
        }
        return b({
          x: d,
          y: a,
          w: c,
          h: k
        })
      }

      function D(d, a, c, k, h) {
        var p = U,
          e = h.r || c / 2 || k / 2;
        c = .3 * e;
        k = h.startD;
        var w = h.endD,
          u = p.clockwiseAngleSweep(k, w),
          n = k - 5;
        for (h = []; w < k;) w += 360;
        for (; n < w;) h.push(p.getPolarPoint(d, a, p.toRadians(n += 5), e));
        if (200 > u) {
          e = w + 40;
          for (k = k - 40; k < e;) k += 360;
          for (n = e - 5; n < k;) h.push(p.getPolarPoint(d,
            a, p.toRadians(n += 5), c))
        }
        return b(r(h))
      }

      function r(d) {
        var a, b, c;
        a = [];
        c = [];
        var k;
        b = 0;
        for (k = d.length; b < k; b++) a.push(d[b].x || d[b][0] || 0), c.push(d[b].y || d[b][1] || 0);
        d = Math.min.apply(Math, a);
        b = Math.max.apply(Math, a);
        a = Math.min.apply(Math, c);
        c = Math.max.apply(Math, c);
        return {
          l: d,
          t: a,
          r: b,
          b: c,
          w: b - d,
          h: c - a
        }
      }

      function h(d, a, b, c) {
        function k(a, c) {
          if (m(a)) {
            if (a.charAt)
              if (-1 < a.indexOf("%")) switch (a = parseInt(a.match("-?[0-9]+")), c) {
                case "y":
                  return a / 100 * b[1];
                case "x":
                  return a / 100 * b[0];
                case "is":
                  return a / 100 * d.size;
                default:
                  return a /
                    100 * h
              } else return parseInt(a);
            return a
          }
          return 0
        }
        c = c || {};
        c = c.Ze;
        if (!a) return d;
        var p, h = Math.min(b[0], b[1]);
        if (p = a.center) p = p.split(","), d.x = e.s(k(p[0], "x"), 0), d.y = e.s(k(p[1], "y"), 0), d.center = [d.x, d.y];
        if (p = a.size) c && p.pop ? (0 < p.length && (d.width = k(p[0], "s")), 1 < p.length && (d.height = k(p[1], "s"))) : d.size = k(p, "s");
        if (p = a.innerSize) d.innerSize = k(p, "is");
        if (p = a.offset) p = p.split(","), a = p[0], c = p[1], d.x += k(a, "x"), d.y += k(c, "y"), d.center = [d.x, d.y];
        return d
      }

      function f(d, a, b) {
        b = b || {};
        d = d.options;
        var c = d.jscConfig.shape;
        (b = b.Mi) && (d = b.options);
        h(d, c, a)
      }

      function E(d, a, b, c) {
        function k(a, d) {
          if (m(a)) {
            if (a.charAt)
              if (-1 < a.indexOf("%")) switch (a = parseInt(a.match("-?[0-9]+")), d) {
                case "y":
                  return a / 100 * c[1];
                case "x":
                  return a / 100 * c[0];
                default:
                  return a / 100 * percSize
              } else return parseInt(a);
            return a
          }
          return 0
        }

        function p(a, d) {
          var b = !1,
            c = !1;
          if ("undefined" === typeof d) return a.charAt && -1 === a.indexOf("%") ? parseInt(a) : a;
          a.charAt && (a = parseInt(a.match("-?[0-9]+")), b = !0);
          d.charAt && (d = parseInt(d.match("-?[0-9]+")), c = !0);
          return b || c ? a + d + "%" :
            a + d
        }

        function h(a) {
          var d;
          a.charAt && (-1 < a.indexOf("%") && (d = !0), a = parseInt(a.match("-?[0-9]+")));
          return d ? a / 3 + "%" : a / 3
        }

        function e(a) {
          a = a.split(",");
          var d, b;
          0 < a.length && (/^[0-9]$/.test(a[0]) ? d = parseInt(a[0]) : d = a[0]);
          1 < a.length && (/^[0-9]$/.test(a[1]) ? b = parseInt(a[1]) : b = a[1]);
          return {
            x: d,
            y: b
          }
        }
        var w, u, n, r, D, f, E, g, T, l;
        if (!a) return d;
        a.center && (D = e(a.center), u = k(D.x, "x"), w = k(D.y, "y"), b && (g = v(0, parseInt(d.x), 0, b.cxOrg, parseInt(u)) - parseInt(d.x), T = v(0, parseInt(d.y), 0, b.cyOrg, parseInt(w)) - parseInt(d.y)));
        a.offset &&
          (D = e(a.offset), n = D.x, r = D.y);
        a.size && (d.innerSize = h(a.size), b && (f = v(0, b.offsetX, 0, b.wOrg, parseInt(a.size)) - b.offsetX, E = v(0, b.offsetY, 0, b.wOrg, parseInt(a.size)) - b.offsetY, l = v(0, parseInt(d.size), 0, parseInt(b.wOrg), parseInt(a.size))));
        b ? (b = d.x, m(f) && (b = p(b, f) + "%"), m(g) && (b = p(b, g) + "%"), b = p(b, n), w = d.y, m(E) && (w = p(w, E) + "%"), m(T) && (w = p(w, T) + "%"), w = p(w, r)) : (b = p(u || d.x, n), w = p(w || d.y, r));
        return {
          x: b,
          y: w,
          size: l || a.size || d.size,
          innerSize: a.innerSize || d.innerSize
        }
      }

      function g(a, b) {
        for (var c, k = !1, h = 1, p, e = 0; !k;) p = b.width /
          (a / h), c = b.height / h, p = Math.min(p, c), p <= e ? (k = !0, h--) : (h++, e = p), 100 < h && (k = !0);
        k = a / h;
        k > parseInt(k) && (k = parseInt(k) + 1);
        c = {
          cols: k,
          rows: h,
          maxSize: p
        };
        h = c.rows;
        k = c.cols;
        e = b.equal;
        p = b.padding;
        var w = c.maxSize;
        c = w * p;
        var u = 0,
          n = [],
          r = 0,
          D = b.width - (e ? c * (k + 1) : 0),
          w = D / k,
          f = (b.height - (e ? c * (h + 1) : 0)) / h,
          r = w,
          w = Math.min(w, f);
        !e && p && (w = 1 >= p ? w - w * p : w - p);
        for (p = 0; p < h; p++)
          for (r = Math.min(a - p * k, k), r = D / r, u = 0; u < k; u++) n.push({
            x: (u + 1) * r - r / 2 + (e ? c * (u + 1) : 0),
            y: (p + 1) * f - f / 2 + (e ? c * (p + 1) : 0),
            size: w,
            innerSize: w / 3 + "%"
          });
        return n
      }

      function n(a, b, c) {
        a =
          a.align;
        var k = {
          x: b.x,
          y: b.y
        };
        "right" === a ? k.x += b.width - c.width : "center" === a && (k.x += b.width / 2 - c.width / 2)
      }

      function l(a, b) {
        return {
          x: a.x + b,
          y: a.y + b,
          width: a.width - 2 * b,
          height: a.height - 2 * b
        }
      }

      function u(a, b, c) {
        "undefined" !== typeof b && (a.width -= b - a.x, a.x = b);
        "undefined" !== typeof c && (a.height -= c - a.y, a.y = c);
        return a
      }

      function F(a, b, c) {
        b && (a.x -= (b - a.width) / 2, a.width = b);
        c && (a.y -= (c - a.height) / 2, a.height = c);
        return a
      }
      return {
        Uk: F,
        Bk: u,
        Fk: l,
        align: n,
        Qk: E,
        resizeRect: F,
        moveRectTL: u,
        padBox: l,
        padBBox: function (a, b) {
          var c = {
            x: a[0],
            y: a[1],
            width: a[2],
            height: a[3]
          },
            c = F(c, c.width + c.width * b, c.height + c.height * b);
          return [c.x, c.y, c.width, c.height]
        },
        align: n,
        reconcileMultiLayout: E,
        Ek: g,
        isSvgTooltip: function (a) {
          var b = a.box.offsetParent.innerHTML;
          if (-1 === b.indexOf("4A4949") || -1 === b.indexOf("666565") || -1 === b.indexOf("c14.62,0,23-10.56,23-10")) return !0;
          b = $("#" + a.box.parentNode.id + " svg svg");
          if (0 < b.length) {
            var c = b.attr("x"),
              k = b.attr("y");
            if (k > a.height - 15 || c > a.width - 10 || "none" === b.css("display") || "1" !== b.css("opacity") || k > a.height - 15 || c > a.width -
              10) return !0
          }
        },
        getGaugeBounds: D,
        getPointBounds: r,
        rectRatioResult: a,
        Hi: b,
        layoutSeries: function () {
          function d(d, b, c, h, t) {
            t = t || {};
            t = t.Ze;
            var e = p.I("chartType", c.jscConfig),
              w, u;
            t ? (w = b.width, u = b.height) : w = u = b.size;
            d ? (y = {
              x: b.x - w / 2,
              y: b.y - u / 2,
              w: w,
              h: u
            }, H = h(b.x, b.y, y.w, y.h, {
              startD: c.startAngle - 90,
              endD: c.endAngle - 90,
              innerR: b.innerSize / 2
            }), R = a(y, H), O = {
              x: R.cx,
              y: R.cy,
              size: R.w
            }, "pie" === e && U && (d = U.innerSize) && (c.innerSize = function (a) {
              return m(a) ? a.charAt ? -1 < a.indexOf("%") ? (a = parseInt(a.match("-?[0-9]+")), a / 100 * O.size) :
                parseInt(a) : a : 0
            }(d)), c.center = [parseInt(O.x), parseInt(O.y)], c.size = parseInt(O.size), c.resize = R.resize) : (c.center = [b.x, b.y], t ? (c.width = w, c.height = u) : c.size = b.size)
          }

          function b(a) {
            var d = c.series,
              k, p = [];
            if (1 === c.panes.length) return d;
            for (var h = 0, t = d.length; h < t; h++) {
              var e = d[h];
              k = e.options.yAxis;
              k = C.ke(c.yAxis, k);
              k.options.pane === a && p.push(e)
            }
            return p
          }
          var c = this,
            t = c.options,
            u = c.series,
            p = t.chart.ctManager,
            I = [-c.plotLeft, -c.plotTop],
            r = [c.plotWidth, c.plotHeight],
            n = e.a(p.Qh(), "defaultSeries.shape.padding"),
            E = [],
            l = [],
            F = [],
            q, K, x = c.panes,
            A, M, v, G, aa, y, H, R, O, U, P = p.tc(),
            V, ba, ja, n = N.$e(n, 1);
          P.G.update("full");
          if (!0 === t.chart.polar) {
            if (0 < (A = x.length))
              for (t = e.s(n, .3), G = g(A, {
                width: r[0],
                height: r[1],
                padding: t,
                equal: !1
              }), t = 0; t < A; t++) I = G[t], M = x[t], v = M.options, v.center = [I.x, I.y], v.size = I.size, f(b(t)[0], [r[0], r[1]], {
                Mi: M
              });
            $.each(u, function () { })
          } else $.each(u, function (a) {
            a = u[a];
            K = p.I("chartType", e.a(a, "options.jscConfig"));
            e.a(a, "options.id");
            var d = m(p.I("funnelOrientationType"));
            "pie" === K ? E.push(a) : "gauge" === K ? l.push(a) :
              d && F.push(a)
          });
          if (0 < l.length && (t = e.s(n, .15), 0 < (A = x.length)))
            for (G = g(A, {
              width: r[0],
              height: r[1],
              padding: t,
              equal: !0
            }), t = 0; t < A; t++) M = x[t], v = M.options, I = G[t], q = b(t)[0], M = q.options, I = h(I, M.jscConfig.shape, r), aa = p.o("gauge", M.jscConfig) ? p.L("circularGaugeType", "clip", M.jscConfig) : !1, d(aa, I, v, D);
          if (0 < E.length)
            for (t = e.s(n, .3), G = g(E.length, {
              width: r[0],
              height: r[1],
              padding: t,
              equal: !1
            }), t = 0; t < E.length; t++) {
              q = E[t];
              M = q.options;
              I = G[t];
              if (U = e.merge({}, M.jscConfig.shape)) {
                var fa = ["innerSize", "size", "center"],
                  B;
                $.each(fa,
                  function (a) {
                    B = fa[a];
                    if (V = U[B]) U[B] = P.Ba(V, q)
                  })
              } (ba = M.jscConfig.angle) && (ja = ba.sweep) && "string" === typeof ja && (ja = P.Ba(ja, q), ba = e.F({
                sweep: ja
              }, ba), ba = N.Ie(ba), M.startAngle = ba.start, M.endAngle = ba.end);
              I = h(I, U, r);
              aa = m(M.endAngle);
              d(aa, I, M, w);
              I = -2 * (M.slicedOffset || 0);
              x = M.center;
              M.center = [x[0] + I, x[1] + I];
              U.innerSize && "30%" === M.innerSize && (M.innerSize = U.innerSize)
            }
          if (0 < F.length)
            for (t = e.s(n, .25), G = g(F.length, {
              width: r[0],
              height: r[1],
              padding: t,
              equal: !0
            }), t = 0; t < F.length; t++) q = F[t], M = q.options, ba = e.a(q, "options.jscConfig"),
              p.I("funnelShapeType", ba), n = p.I("funnelNozzleType", ba), I = G[t], U = e.merge({}, M.jscConfig.shape), ja = e.a(q, "options.dataLabels.enabled"), I.width = .4721359549995983 * I.size + .6180339887498547 * I.size, I.height = I.size, ja && (e.a(M, "dataLabels.distance"), ja = I.x - I.width / 4, x = c.plotLeft - (ja - I.width / 2), 0 < x && (ja += x), I.x = ja), I = h(I, U, r, {
                Ze: !0
              }), ba = e.a(ba, "shape.innerPadding") || 0, ja = 0, 1 <= ba ? ja = ba : ja = I.height * ba / (q.data.length - 1), ja * (q.data.length - 1) * 1.1 > I.height && (ba = .2, ba = ja / (q.data.length - 1), P.ub("The innerPadding setting is invalid because it creates more padding than available space. innerPadding was adjusted to " +
                ba + "px.")), M.spacing = ba, d(!1, I, M, null, {
                  Ze: !0
                }), "nozzle" === n ? (M.neckWidth = .4472135955 * I.width, M.neckHeight = .3819660112501453 * I.height) : M.neckHeight = M.neckWidth = 0
        },
        applyPieSliceLayout: function () {
          var a = this.options,
            b = this.points,
            c = b.length,
            k, h, p = this.chart.options.chart.ctManager,
            w, u, r, n = e.a(a.jscConfig, "defaultPoint.shape"),
            D = {},
            f = {},
            p = p.tc();
          if (a = e.s(e.a(n, "innerSize"), a.innerSize)) a = N.$e(a, this.center[2]);
          k = p.Ba("%zmin|%zmax", this).split("|");
          k[0] = parseFloat(k[0]);
          k[1] = parseFloat(k[1]);
          0 < k[0] && 0 <
            k[1] ? D = {
              size: "%zpercentofseriesmax%"
            } : 0 >= k[0] && 0 >= k[1] ? D.innerSize = "{100-(Math.abs(%zValue)/(" + (0 - k[0]) + ")*100)}%" : 0 > k[0] && 0 < k[1] && (f.innerSize = "{(0-(%zMin))/(%zMax-(%zMin))*100}%", D = {
              size: "{%zpercentofseriesrange}%"
            });
          f && f.innerSize && (f.innerSize = p.Ba(f.innerSize, this));
          for (k = 0; k < c; k++) h = b[k], u = p.get(h.id).config, r = h.shapeArgs, w = u.shape, w = e.F(w, n, D), u = e.s(e.a(w, "size"), e.a(D, "size"), e.a(f, "size")), w = e.s(e.a(w, "innerSize"), e.a(D, "innerSize"), e.a(f, "innerSize")), "string" === typeof w && (w = p.La(w, this,
            h), m(a) && (w = 1 - N.$e(w, 1), w = 100 * (1 - (1 - a) * w) + "%"), w = N.Le(w, r.r), r.innerR = w), "string" === typeof u && (u = p.La(u, this, h), m(a) && (u = N.Le(u, 1 - a) + a, u = 100 * u + "%"), u = N.Le(u, r.r), r.r = u)
        },
        scaleRect: function (a, b) {
          return F(a, a.width * b, a.height * b)
        },
        Ph: function (a, c, k, h, w) {
          var p = U,
            e = p.toRadians,
            u = p.getPolarPoint;
          k = w.r || k / 2 || h / 2;
          h = w.startD;
          var n = w.endD;
          p.clockwiseAngleSweep(h, n);
          for (var p = 1, D = []; n < h;) n += 360;
          for (var f = 0, p = 90; 360 > f;) f > h && f < n && D.push(u(a, c, e(f), k)), f += p;
          D.push(u(a, c, e(h), k));
          D.push(u(a, c, e(n), k));
          D.push(u(a,
            c, e(h), w.innerR));
          D.push(u(a, c, e(n), w.innerR));
          return b(r(D))
        },
        alo: function (a, b, c, k, h, p) {
          c = Math.abs(U.getPolarPoint(0, 0, U.toRadians(h + 90), c).x);
          k = Math.abs(U.getPolarPoint(0, 0, U.toRadians(h + 90), k).x);
          if (c / 2 + k / 2 + p > b - a) return !0
        }
      }
    }(),
    A = function () {
      function a(b) {
        return b && (b = b.split(","), 2 === b.length) ? {
          x: parseInt(b[0]),
          y: parseInt(b[1])
        } : {}
      }

      function b(a, b) {
        var c = {};
        a = a.toUpperCase();
        0 <= a.indexOf("RIGHT") ? (c = e.T(c, {
          align: "right",
          layout: "vertical"
        }), c.verticalAlign = 0 <= a.indexOf("TOP") ? "top" : 0 <= a.indexOf("BOTTOM") ?
          "bottom" : "middle") : 0 <= a.indexOf("LEFT") ? (c = e.T(c, {
            align: "left",
            layout: "vertical"
          }), c.verticalAlign = 0 <= a.indexOf("TOP") ? "top" : 0 <= a.indexOf("BOTTOM") ? "bottom" : "middle") : "TOP" === a ? c = e.T(c, {
            align: "center",
            layout: "horizontal",
            verticalAlign: "top"
          }) : "BOTTOM" === a && (c = e.T(c, {
            align: "center",
            layout: "horizontal",
            verticalAlign: "bottom"
          }));
        b || delete c.layout;
        return c
      }

      function c() {
        for (var a = "", b = 5; b--;) a += "abcdefghijklmnopqrstuvwxyz"[Math.floor(25 * Math.random())];
        return a
      }

      function w(a, b, c) {
        for (var k in a)
          if (a[k] ===
            c) return b[k];
        return c
      }

      function D(a) {
        return a ? a : m(a) ? a : ""
      }

      function r(a, b, c, k) {
        try {
          return Globalize.format(b, c, k)
        } catch (w) {
          return a.ub("Formatting error: " + w), b
        }
      }
      return {
        Gk: {},
        Ec: function (a, b, c, k, w) {
          function e(a) {
            var b, d, c, k, h;
            c = {};
            var u, r, D;
            a = A.trim(a);
            b = a.lastIndexOf(":"); - 1 < b ? (d = a.substring(1, b), k = A.trim(a.substring(b + 1, a.length - 1).replace(/^(date)*(number)*/gi, function (a) {
              D = a.toLowerCase();
              return ""
            }))) : d = a.substring(1, a.length - 1);
            d = w(A.trim(d), c);
            (a = d.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})(.\d+)[+-](\d{2})\:(\d{2})/g)) &&
              (a = a.length) && (u = !0, r = 1 === a ? "date" : "number");
            r = D || r;
            k || (k = c.Ra);
            c = u ? d.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})(.\d+)[+-](\d{2})\:(\d{2})/g, function (a) {
              return Date.parse(a)
            }) : d;
            if (/[\+-\/\*\^%]+/.test(c)) try {
              d = h = eval('"strict mode";(f{r/**/;f days{rn/86400000;}f weeks{rn/604800000;}f years{rn/31536000000;}f hours{rn/3600000;}f minutes{rn/60000;}f seconds{rn/(1000);}}())'.replace(/f/g, "function").replace(/\{r/g, "(n){return ").replace(`/**/`, c))
            } catch (f) { }
            r ? "date" === r ? d = $.isNumeric(d) ?
              new Date(parseFloat(d)) : new Date(Date.parse(d)) : "number" === r && (d.valueOf && (d = d.valueOf()), d = parseFloat(d)) : "string" === typeof d && ($.isNumeric(d) ? d = parseFloat(d) : /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})(.\d+)[+-](\d{2})\:(\d{2})/.test(d) && (d = new Date(Date.parse(d))));
            return k ? Globalize.format(d, k) : d
          }
          b = /\{ *[\w\-\(%0-9][^\}\{]+ *: *[^\}\{]+ *\}/;
          c = /\{ *[\w\-\(%0-9][^\}\{]+ *\}/;
          var u, r, d;
          if (!a) return a;
          for (; null !== (d = b.exec(a) || c.exec(a));)
            for (k = 0, u = d.length; k < u; k++) r = d[k].toString(), a = a.replace(r,
              e(r));
          return a
        },
        Ne: function (a) {
          return a.replace(/\\\{/g, "!!@@#@#@@!").replace(/\\\}/g, "###@!@!#@").replace(/\\\%/g, "#@@!@##@")
        },
        Se: function (a) {
          return a.replace(/!!@@#@#@@!/g, "{").replace(/###@!@!#@/g, "}").replace(/#@@!@##@/g, "%")
        },
        Gd: w,
        Aa: c,
        yg: function (a) {
          return a.replace(/\w\S*/g, function (a) {
            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
          })
        },
        Fe: b,
        Qj: a,
        parseFormatting: {},
        translateString: w,
        getRandomString: c,
        orientationToAlignment: b,
        coordsToXy: a,
        Ni: function (a) {
          var b = {
            Cb: 35878,
            H: 9,
            ea: 59662633118,
            M: 2326546580524,
            x: "0123",
            y: " \u200b\u200c\u200d",
            jc: /[\w\W]/g,
            Rd: /[\w\W]{8}/g,
            Za: "BmBBBamBmrmCmoBBmm",
            Sd: function (a) {
              if (b.H) return (b.y + b.x)[(b.x + b.y).indexOf(a)]
            },
            e: function (a) {
              try {
                return b.Sd(Math.asin2(b.y + b.x))
              } catch (c) {
                return (65536 + a[449[b.M](b.H) + b.Za + 625061[b.M](b.H)[b.ea]("a", "A")](0))[b.M](4).substr(1)[b.ea](b.jc, b.Sd)
              }
            },
            d: function (a) {
              return String[15[b.M](b.H) + b.Cb + 449[b.M](b.H)[b.ea]("c", "C") + b.Za + 482[b.M](b.H)](parseInt(a[b.ea](b.jc, b.Sd), 4))
            },
            Ra: function (a) {
              b.H <<= 2;
              b.ea = b.ea.toString(b.H);
              b.M = b.M.toString(b.H)[b.ea]("s", "S");
              b.Za = b.Za[1278777[b.M](b.H) + 13406[b.M](b.H)](/[Bm]/g, "");
              b.Cb = b.Cb[b.M](b.H);
              return a[b.ea](b.Rd, b.d)
            }
          };
          return b.Ra(a.replace(/[^ \u200B-\u200D\uFEFF]/g, ""))
        },
        Oi: function (a) {
          var b = {
            Cb: 35878,
            H: 9,
            ea: 59662633118,
            M: 2326546580524,
            jc: 13,
            Rd: /[\w\W]/g,
            Za: "BmBBBamBmrmCmoBBmm",
            Dh: function (a) {
              var c = a[449[b.M](b.H) + b.Za + 625061[b.M](b.H)[b.ea]("a", "A")](0);
              return 65 <= c && 90 >= c ? b.ie((c - 65 + b.jc) % 26 + 65) : 97 <= c && 122 >= c ? b.ie((c - 97 + b.jc) % 26 + 97) : 48 <= c && 57 >= c ? b.ie((c - 48 + 3) % 10 + 48) : a[754649525[b.M](36)[b.ea]("ra",
                "rA")](0)
            },
            ie: function (a) {
              return String[15[b.M](b.H) + b.Cb + 449[b.M](b.H)[b.ea]("c", "C") + b.Za + 482[b.M](b.H)](a)
            },
            encrypt: function (a) {
              return a[b.ea](b.Rd, b.Dh)
            }
          };
          b.H <<= 2;
          b.ea = b.ea.toString(b.H);
          b.M = b.M.toString(b.H)[b.ea]("s", "S");
          b.Za = b.Za[1278777[b.M](b.H) + 13406[b.M](b.H)](/[Bm]/g, "");
          b.Cb = b.Cb[b.M](b.H);
          var c = "";
          return c = b.encrypt(a)
        },
        trim: function (a) {
          return a.replace(/^\s+|\s+$/g, "")
        },
        format: r,
        format: r,
        dl: function (a, b) {
          a = A.trim(a);
          return b[a] ? b[a] : a
        },
        Td: D,
        Mb: function (a, b, c, k, w) {
          var e, u;
          c = c.split(",");
          for (var f, d, g = 0, l = c.length; g < l && -1 !== (d = a.indexOf("%")) && d !== a.length - 1; g++) e = "%" + c[g], -1 < a.toLowerCase().indexOf(e) && (a = a.replace(new RegExp(e, "gi"), function () {
            f = D(k(e));
            (u = w(e)) && u.Wf && (f = new Date(f));
            u || "date" !== N.K(f) || (u = {
              N: "yyyy-MM-ddTHH:mm:ss.fffffffzzz",
              culture: "en-US"
            });
            return u ? r(b, f, u.N, u.culture) : f
          }));
          return a
        },
        Mh: function (a) {
          a = a.replace(/<br>/g, "\n").replace(/<br\/>/g, "\n").replace(/<br \/>/g, "\n");
          a = a.replace(/".*/g, "'");
          return a = a.replace(/(<([^>]+)>)/ig, "")
        }
      }
    }(),
    N = function () {
      function a(b) {
        if ("undefined" !==
          typeof b) {
          if ("boolean" === typeof b) return "boolean";
          if ("number" === typeof b) return "number";
          if ("function" === typeof b) return "function";
          if (b && b.pop) return "array";
          if ("string" === typeof b) return "string";
          if ("object" === typeof b) return b && b.getUTCMilliseconds ? "date" : "object"
        }
        return "undefined"
      }

      function b(a, b) {
        return m(a) && a.charAt ? -1 < a.indexOf("%") ? (a = parseInt(a.match("-?[0-9]+")), a / 100 * b) : parseInt(a) : a
      }

      function c(c) {
        var e, r, h, f, g = {};
        switch (a(c)) {
          case "number":
            g.start = !0;
            e = c;
            break;
          case "array":
            2 <= c.length ? (g.start = !0, g.end = !0, e = c[0], r = c[1]) : 1 === c.length && (e = c[0], g.start = !0);
            break;
          case "object":
            c && (g.start = "undefined" !== typeof (e = c.start), g.end = "undefined" !== typeof (r = c.end), g.orientation = "undefined" !== typeof (h = c.orientation), g.Qb = "undefined" !== typeof (f = b(c.sweep, 360)))
        }
        return {
          pc: g,
          setStart: e,
          setEnd: r,
          Dd: h,
          Ed: f
        }
      }
      return {
        Ie: function (a) {
          var b, k, h, e, f, g = {};
          f = c(a);
          g = f.pc;
          a = f.setStart;
          h = f.setEnd;
          e = f.Dd;
          f = f.Ed;
          g.start && g.end ? (b = a, k = h) : g.start && g.Qb ? (b = a, k = a + f) : g.orientation && g.Qb ? (b = e - f / 2, k = b + f) : g.orientation && g.start ?
            (b = a, k = 2 * (e - a) + a) : g.orientation && g.end ? (k = h, b = h - 2 * (h - e)) : g.Qb ? (b = 0 - f / 2, k = 0 + f / 2) : g.orientation ? (b = e - 180, k = b + 360) : g.start ? b = a : g.end && (k = h);
          return {
            start: b,
            end: k
          }
        },
        bh: function (a, b, k) {
          function h(a, b) {
            function k(a) {
              var b, d = {};
              a && a.pc && (b = a.pc, b.start && (d.start = a.setStart), b.end && (d.end = a.setEnd), b.Qb && (d.sweep = a.Ed), b.orientation && (d.orientation = a.Dd));
              return d
            }
            var h = c(a),
              w = h.pc,
              r = c(b),
              d = r.pc,
              f = {};
            return !w.start || w.end || w.Qb || w.orientation ? !w.Qb || w.orientation || w.start ? e.F(k(h), k(r)) : (f.sweep = h.Ed, d.orientation ?
              f.orientation = r.Dd : d.start && (f.start = r.setStart), f) : (f.start = h.setStart, d.Qb ? f.sweep = r.Ed : d.orientation ? f.orientation = r.Dd : d.end && (f.end = r.setEnd), f)
          }
          var f;
          if (m(a) || m(b))
            if (f = h(a, b), a = m(f) && (m(f.orientation) && m(f.sweep) || m(f.orientation) && (m(f.start) || m(f.end)) || m(f.start) && m(f.end) || m(f.start) && m(f.sweep)) ? !0 : void 0, a) return f;
          return m(f) ? f = h(f, k) : k
        },
        K: a,
        ne: function (a) {
          var b = [],
            c = 0;
          for (b[c++] in a);
          return b
        },
        Le: b,
        $e: function (a, b) {
          return m(a) ? a.charAt ? -1 < a.indexOf("%") ? (a = parseInt(a.match("-?[0-9]+")),
            a / 100) : parseFloat(a) / b : a / b : a
        }
      }
    }(),
    H = function () {
      function a(b, e, f) {
        a.cache = a.cache || {};
        var r = e.split(",");
        e = b + e + f;
        var h, g, l;
        if (h = a.cache[e]) return h;
        g = 0;
        for (l = r.length; g < l; g++) {
          h = b;
          var q = A.trim(r[g]).replace("enum_", ""),
            n = JSCL.md,
            K = !1,
            u = {
              sequence: []
            },
            F = void 0;
          u.setting = h;
          for (h = h.toLowerCase(); !K;) {
            for (var F = h, d = n(q), z = N.ne(d.members), L = void 0, t = void 0, Q = void 0, p = void 0, I = Q = void 0, S = void 0, F = A.trim(F), Q = 0, p = z.length; Q < p; Q++)
              if (0 !== F.indexOf(z[Q].toLowerCase()) || F.length !== z[Q].length && !d.members[z[Q]].chain) 0 !==
                F.indexOf(z[Q].toLowerCase()) || F.length === z[Q].length || d.members[z[Q]].chain ? d.members[z[Q]].isDefault && (L = z[Q]) : S = z[Q];
              else {
                t = z[Q];
                break
              } !t && S && (t = S);
            t || (t = L, I = !0);
            t ? (Q = 0 === F.indexOf(t.toLowerCase()) ? F.replace(t.toLowerCase(), "") : F, F = {
              match: t,
              ti: I,
              gh: d.members[t].chain,
              value: Q,
              attributes: d.members[t].enumAttributes
            }) : F = {
              invalid: F
            };
            if (m(F.invalid)) F.value = F.invalid, K = !0;
            else {
              if (!F.ti || !f)
                if (u[q] = F.match, u.sequence.push(q), F.attributes)
                  for (var ca in F.attributes) u[ca] = F.attributes[ca];
              q = F.gh;
              h = F.value;
              q || 0 !== h.length ? q ? q = q.replace("enum_", "") : q || (K = !0) : K = !0
            }
          }
          u.sequence = u.sequence.join(",");
          0 < F.value.length && (u.invalid = F.value);
          h = u;
          if (!h.invalid) break
        }
        return a.cache[e] = h
      }

      function b(a, b, k) {
        var e, h, f, g = a.pieType,
          l = a.lineSeriesType;
        if (h = a.chartType) "pie" === h ? e = "pie" : "gauge" === h && (e = "gauge", k && (k.Vf = !0));
        if (!e && (f = a.seriesType)) switch (f) {
          case "column":
            e = "column";
            break;
          case "line":
            e = "spline" === l ? "spline" : "line";
            break;
          case "area":
            e = "spline" === l ? "areaspline" : "area";
            break;
          case "marker":
            e = "scatter";
            break;
          default:
            e = f
        }
        b.type = e;
        "step" === l && (b.step = !0);
        "donut" === g && (b.innerSize = "20px");
        return e
      }
      return {
        bb: a,
        pEC: a,
        Hj: function (c, e, f) {
          c = a(c, "seriesType,chartType");
          return b(c, e, f)
        },
        Fj: function (b) {
          var w = e.a(b.json, "type"),
            f = e.a(b.json, "defaultSeries.type"),
            w = a(w, "chartType,seriesType"),
            r = "";
          switch (w.chartType) {
            case "horizontal":
              e.c(b, "options.chart.inverted", !0);
              break;
            case "radar":
              e.c(b, "options.chart.polar", !0);
              break;
            case "gauge":
              e.c(b, "options.chart.defaultSeriesType", "gauge")
          }
          m(f) || (w.seriesType && (r += w.seriesType),
            w.lineSeriesType && (r += w.lineSeriesType), e.c(b.json, "defaultSeries.type", r))
        },
        Gj: function (c, w, f) {
          c = a(c, "chartType");
          w = a(w, "seriesType");
          c = e.merge(c, w);
          return b(c, {}, f)
        },
        za: function (a) {
          return m(a.opacity) ? 1 - a.opacity : a.transparency
        }
      }
    }(),
    G = function () {
      function a(b) {
        function c(a) {
          return 0 < a.length ? a[0] : "!@!@!"
        }

        function k(a, b) {
          return a[b] ? a[b] : 0
        }

        function e(a) {
          for (var b = 0; b < h; b++) f[b].Gc[0] === a && f[b].Gc.shift()
        }
        var f = [],
          h = b.length,
          g = !1,
          l = "!@!@!",
          m = 0,
          n = "",
          q = [],
          u, F = !1;
        for (function () {
          for (var a = 0; a < h; a++) {
            var c = {
              Gc: [],
              yd: {}
            },
              k = b[a],
              e = k.length;
            e > m && (m = e);
            for (var w = 0; w < e; w++) c.Gc.push(k[w]), c.yd[k[w]] ? c.yd[k[w]]++ : c.yd[k[w]] = 1;
            f.push(c)
          }
        }(); !g;) {
          l = "!@!@!";
          for (u = 0; u < h; u++) n = c(f[u].Gc), "!@!@!" === l ? l = n : l !== n && 0 < k(f[u].yd, l) && (l = n);
          if ("!@!@!" === l || q.length >= m * h) g = !0;
          else if (q.length >= m) {
            F = !0;
            for (u = 0; u < h; u++)
              if (n = c(f[u].Gc), "!@!@!" !== l) {
                F = !1;
                break
              } g = F
          }
          g || (q.push(l), e(l))
        }
        return q
      }
      return {
        bk: a,
        Hf: function (b) {
          var c = [],
            e, f, r, h;
          e = 0;
          for (f = b.length; e < f; e++) {
            var g = [];
            r = b[e];
            var l = r.data ? r.data : r.points;
            r = 0;
            for (h = l.length; r <
              h; r++) {
              var m = l[r];
              m = m.name ? void 0 !== m.name ? m.name : void 0 !== m.x ? m.x : void 0 : m[0];
              g.push(m)
            }
            c.push(g)
          }
          return a(c)
        },
        mf: function (a, c) {
          function k(a, b) {
            var c = -1,
              h, e;
            for (e in a) {
              var w = a[e];
              if (w.name) {
                if (w.name === b) {
                  c = e;
                  h = w;
                  break
                }
              } else if (w.length && "string" === typeof w[0] && w[0] === b) {
                c = e;
                h = w;
                break
              }
            } - 1 !== c && a.splice(c, 1);
            return h
          }
          for (var e = a.length, f = [], h, g = 0; g < e; g++) c.data ? h = k(c.data, a[g]) : c.points && (h = k(c.points, a[g])), h && (h.name && (h.x = g), f.push(h));
          c.data ? c.data = f : c.points && (c.points = f);
          return c
        },
        kb: function (a,
          c, k, e, f) {
          f = f || {};
          if (a.pop) {
            if (a.length && 2 === a.length) {
              if (k) return k = a[0], "time" === c && "string" === typeof k && (k = new Date(Date.parse(k))), "string" === typeof k ? {
                name: k,
                y: a[1]
              } : {
                x: k,
                y: a[1]
              };
              if (e) a[0].getTime && (a[0] = a[0].getTime());
              else return k = a[0], "time" === c && "string" === typeof k && (k = new Date(Date.parse(k))), "string" === typeof k ? {
                name: k,
                y: a[1]
              } : {
                x: k,
                y: a[1]
              };
              return a
            }
            if (a.length && 4 < a.length) {
              if (k) {
                k = a[0];
                "time" === c && "string" === typeof k && (k = new Date(Date.parse(k)));
                if ("string" === typeof k) return {
                  name: k,
                  y: a[1]
                };
                c = {
                  x: k,
                  open: a[1],
                  high: a[2],
                  low: a[3],
                  close: a[4]
                };
                5 < a.length && (c.volume = a[5]);
                return c
              }
              if (e) a[0].getTime && (a[0] = a[0].getTime());
              else return k = a[0], "time" === c && "string" === typeof k && (k = new Date(Date.parse(k))), "string" === typeof k ? {
                name: k,
                y: a[1]
              } : {
                x: k,
                y: a[1]
              };
              return a
            }
            return {
              y: a
            }
          }
          "time" === c && a.x && a.x.charAt && (a.x = new Date(Date.parse(a.x)));
          a.id || f.skipID || (a.id = A.Aa());
          "array" === N.K(a.y) && 2 === a.y.length && (a.yStart = a.y[0], a.y = a.y[1]);
          return a
        },
        Hk: function (a, c) {
          return "time" === c && "string" === typeof a ? new Date(Date.parse(a)) :
            a
        },
        Gi: function (a) {
          function c(a, b) {
            var c, k, h, e = 0,
              d;
            c = 0;
            for (k = a.length; c < k; c++) h = a[c], h.pop && (h = G.kb(h)), m(d = h[b]) && (e += d);
            return e
          }
          var k = {
            points: []
          },
            f, r, h, g;
          f = 0;
          for (r = a.length; f < r; f++) h = a[f], g = {
            y: c(h.points, "y"),
            x: c(h.points, "x"),
            name: h.name
          }, h.defaultPoint && e.F(h.defaultPoint, g), k.points[f] = g;
          return k
        },
        Ji: function (a, c) {
          function k(a, b, c) {
            a[b] = c
          }

          function f(a, b, c) {
            e.c(a, b, c)
          }
          var r = a.split(","),
            h, g = [],
            l = [],
            m, n, q, u, F;
          h = 0;
          for (m = r.length; h < m; h++) r[h] = A.trim(r[h]), l[h] = -1 < r[h].indexOf(".") ? f : k;
          n = 0;
          for (q =
            c.length; n < q; n++) {
            m = c[n];
            h = {};
            u = 0;
            for (F = m.length; u < F; u++) l[u](h, r[u], m[u]);
            g[n] = h
          }
          return g
        },
        dk: function (a, c, k) {
          a = k.defaultPoint;
          c = e.a(c, "defaultSeries.defaultPoint");
          e.F(a, c)
        },
        tj: function (a, c, k) {
          function e(a) {
            a.x && delete a.x
          }

          function f(a) {
            m(a.y) || h(l.Yi);
            m(a.value) || m(a.z) || (h(l.Zi), a.value = 0)
          }

          function h(a) {
            for (var b = 0, c = k.Zb.length; b < c; b++)
              if (k.Zb[b] === a) return;
            k.Zb.push(a)
          }
          var g, l;
          k = k || {};
          k.Zb = [];
          l = {
            Sk: "X Values are not supported by this type.",
            Tk: "X Valeus are required",
            Yi: "Y Valeus are required",
            Zi: "Z Valeus are required"
          };
          a.g.o("gauge", c) ? g = e : a.g.o("heatmap", c) && (g = f);
          a = 0;
          for (var q = c.data.length; a < q; a++) {
            var n = c.data[a];
            g && g(n)
          }
          return c
        },
        Ih: function (a, c, k) {
          var e = N.K(k),
            f, h, g = [];
          c = "object" === N.K(c) ? c.points : c;
          switch (e) {
            case "object":
              h = N.ne(k);
              f = function (c) {
                c = a.get(c.id);
                for (var e, f, r = !0, d, D = 0, g = h.length; D < g; D++)
                  if (e = k[h[D]], f = c.tokenValue("%" + h[D]), e.pop && e.length) {
                    d = !1;
                    for (var t = 0, l = e.length; t < l; t++)
                      if (e[t] === f) {
                        d = !0;
                        break
                      } d || (r = !1)
                  } else f !== k[h[D]] && (r = !1);
                return r
              };
              break;
            case "function":
              f =
                function (c) {
                  var h = a.get(c.id);
                  return k.apply(h, c)
                }
          }
          for (var e = 0, l = c.length; e < l; e++) {
            var m = c[e];
            f(m) && g.push(m)
          }
          return g
        },
        kj: function (a) {
          a.sort(function (a, b) {
            a = a.z;
            b = b.z;
            return a > b ? -1 : a < b ? 1 : 0
          })
        }
      }
    }(),
    R = function () {
      return {
        rh: function (a, b) {
          if (a && b.debug) {
            var c = a.getWarnings(),
              e = "";
            if (c.push && 0 < c.length) {
              b.annotations || (b.annotations = []);
              for (var f in c) e += "- " + c[f] + " <br>";
              b.annotations.push && b.annotations.push({
                label: {
                  text: "x",
                  style: {
                    color: "rgb(50,0,0)",
                    fontSize: "6px"
                  },
                  tooltip: A.Mh(e + "<b>NOTE</b>: To disable these warnings, use the chart({debug:false}) setting.")
                },
                boxVisible: !1,
                position: "0,0",
                transparency: .1
              })
            }
          }
        },
        hb: function (a) {
          window.console && window.console.warn && window.console.warn("JSCharting Warning: " + a)
        }
      }
    }(),
    ha = function () {
      function a() {
        var b = this.axes,
          c = [];
        c.push(this.seriesGroup);
        c.push(this.plotBackground);
        c.push(this.plotBorder);
        for (var k = 0, e = b.length; k < e; k++) {
          var f = b[k];
          f.gridGroup && c.push(f.gridGroup);
          for (var h = 0, g = f.plotLinesAndBands.length; h < g; h++) {
            var l = f.plotLinesAndBands[h];
            c.push(l.svgElem)
          }
          for (h in f.alternateBands) l = f.alternateBands[h], c.push(l.svgElem)
        }
        return c
      }
      return {
        applySbClips: function () {
          var b, c, e = this.PREFIX + "CaSb";
          if ($("#" + e).length) {
            c = a.apply(this);
            for (var f = 0, r = c.length; f < r; f++)(b = c[f]) && b.clip({
              id: e
            })
          }
        }
      }
    }(),
    V = function () {
      function a(b, c, k, f) {
        var r;
        f = f || {};
        r = [.1, .2, .25, .5, 1, 2];
        var h = f.bl || 100,
          g, l = 0,
          q, n = f.dg = e.s(f.dg, .5);
        k.length && (k = k[1]);
        var x = {
          interval: 0,
          min: 0,
          max: 0,
          og: 0
        },
          u = (m(f.fc) ? f.fc : f.Lc && 0 > c ? 0 : c) - (m(f.gc) ? f.gc : f.Lc && 0 <= b ? 0 : b);
        0 > u && (u = -u);
        if (g = f.ah) {
          for (var F = 0, d = g.length; F < d; F++) {
            var z = g[F];
            (z = JSCL.Zc.rOfIntersect([z.from, z.to], [b, c])) && (l +=
              z[1] - z[0])
          }
          u -= l
        }
        x.og = u;
        if (m(f.Pc)) (r = u / f.Pc) > h ? (x.interval = Math.ceil(r / h) * f.Pc, R.hb("The specified axis interval will generate more than " + h + " axis ticks and has been changed to " + x.interval + ".")) : x.interval = q = f.Pc;
        else {
          var h = u,
            L;
          g = -1;
          l = Math.pow(10, Math.floor(Math.log(h) / Math.LN10));
          u = [];
          F = 0;
          for (d = r.length; F < d; F++) q = h / L + 1, L = r[F] * l, u[F] = {
            interval: L,
            al: q
          }, -1 === g && (q - 1 < k || F == d - 1) && (g = F);
          r = u[g];
          q = r.interval
        }
        m(f.gc) ? (f.gc > c && R.hb("The specified minimum axis value will hide all data."), x.min = f.gc) : f.Lc &&
          0 <= b ? x.min = 0 : (x.min = Math.floor(b / q) * q, 0 !== x.min && b < x.min + q * n && (x.min -= q));
        m(f.fc) ? (f.fc < b && R.hb("The specified maximum axis value will hide all data."), x.max = f.fc) : f.Lc && 0 >= c ? x.max = 0 : (x.max = Math.ceil(c / q) * q, 0 !== x.max && c > x.max - q * n && (x.max += q));
        x.interval = q;
        return x
      }
      return {
        Yc: a,
        autoRangeW: function (b, c) {
          var e = b.options,
            f = b.horiz ? e.tickPixelInterval : 42,
            e = a(b.min, b.max, c ? [c, c] : b.len / f, {
              Lc: b.ignoreMinPadding || b.ignoreMaxPadding,
              gc: e.min,
              fc: e.max,
              Pc: e.interval,
              ah: e.breaks
            });
          return {
            interval: e.interval,
            min: e.min,
            max: e.max,
            range: e.og
          }
        },
        getBreaks: function (a, c) {
          function k(a) {
            for (var b = [], d = 0, c = a.length; d < c; d++) d && b.push([a[d - 1], a[d], a[d] - a[d - 1]]);
            return b
          }

          function f(a, b) {
            function d(a, b) {
              return a[2] - b[2]
            }

            function c(a, b) {
              return b[2] - a[2]
            }
            a.sort(b ? d : c)
          }

          function r(a) {
            for (var b = [], d = 0, c = a.length; d < c; d++) b.push(a[d][0]), b.push(a[d][1]);
            return [Math.min.apply(null, b), Math.max.apply(null, b)]
          }
          var h = e.a(c, "chart.options.chart.ctManager").tc().kd(c.options.id),
            g, m = c.dataMax - c.dataMin,
            q = 0,
            n = 0,
            x = 100,
            u, F = [],
            d = e.a(h, "scale.breaks.limit"),
            z = [];
          if (d) {
            if (h = e.a(h, "markers")) {
              g = 0;
              for (var L = h.length; g < L; g++) {
                var t = h[g];
                "array" === N.K(t.value) && 1 < t.value.length ? a.push(t.value[1]) : a.push(t.value)
              }
            }
            a.sort(function (a, b) {
              return a - b
            });
            a = l.Qe(a);
            g = k(a);
            f(g, !0);
            for (L = 0; L < g.length; L++) t = g[L][2], h = t / m * 100, t < .08 * m && (h < x && (x = h), q++, n += t);
            n /= q;
            if (0 < q) {
              h = .08 / (x / 100);
              h = m / h * (h - 1);
              u = 3 > q ? 35 : 10 > q ? 30 : 15 > q ? 25 : 20 > q ? 20 : 15;
              if (7 > x && 1 <= q) {
                L = 0;
                for (q = g.length; L < q; L++) {
                  var Q = g[L],
                    t = Q[2];
                  t > 10 * n && t / (100 * m > u) && F.push(Q)
                }
                f(F, !1);
                n = [];
                q = 0;
                for (g = F.length; q < g; q++)
                  if (q < d) n.push(F[q]);
                  else break;
                F = n;
                d = q = 0;
                for (n = F.length; d < n; d++) g = F[d], q < h ? q += g[2] : (F.splice(d--, 1), n = F.length);
                if (F.length) {
                  var d = r(F),
                    d = d[1] - d[0],
                    d = m - (d - -(.2 * (m - d))),
                    p, m = 8 < m / d * x ? p = .4 * d : p = .2 * d;
                  1 < F.length && (p = m = 2 * p);
                  d = 0;
                  for (n = F.length; d < n; d++) x = F[d], x[0] + m > x[1] - p ? (h = .2 * x[2], x[0] += h, x[1] -= h) : (x[0] += m, x[1] -= p), z.push({
                    from: x[0],
                    to: x[1],
                    breakSize: 1
                  })
                }
              }
              c.options.breaks = z
            } else c.options.breaks = 1;
            c.breakArray = []
          }
        },
        rOfIntersect: function (a, c) {
          var k = [a, c];
          k.sort(function (a, b) {
            return Math.max(a[0]) - Math.max(b[0])
          });
          Math.min(k[0][0],
            k[0][1]);
          var e = Math.max(k[0][0], k[0][1]),
            f = Math.min(k[1][0], k[1][1]),
            k = Math.max(k[1][0], k[1][1]);
          return e > f ? e > k ? [f, k] : [f, e] : 0
        }
      }
    }(),
    P = function () {
      return {
        getPaletteCSS: function (a, b) {
          return (new y(null, a)).Yh(a, b)
        }
      }
    }();
  y.prototype = {
    init: function () { },
    pd: function (a, b, c) {
      c = c || {};
      this.pb || this.qd(a, b);
      b = this.me(b, a, c);
      return this.Nf(b, a)
    },
    Nf: function (a, b) {
      var c = this,
        e = c.pb || c.qd(b, point);
      (function () {
        if (b && c.A) {
          var a;
          if (a = c.A.G.Ab(b.id, !0))
            for (var k = 0, h = e.length; k < h; k++) "%color" === e[k][1].toLowerCase() && (e[k][1] =
              a.vb)
        }
      })();
      a = c.bf(a);
      return function (a) {
        var b;
        a: {
          b = 0;
          for (var c = e.length; b < c; b++) {
            var k = e[b];
            if (k[0] > a) {
              b = 0 === b ? [k] : [e[b - 1], k];
              break a
            }
            if (b === c - 1) {
              b = [k];
              break a
            }
          }
          b = void 0
        }
        c = b[0];
        k = [];
        if (1 === b.length) return b[0][1];
        a = v(0, 1, c[0], b[1][0], a);
        2 < c.length && (k[0] = c[2], 3 < c.length && (k[1] = c[3]));
        if (a < k[0]) return c[1];
        if (1 < k.length && a > k[1]) return b[1][1];
        var g = [0, 1];
        1 < k.length ? g = k : 0 < k && (g[0] = k[0]);
        return f.lb(c[1], b[1][1], 100 * v(0, 1, g[0], g[1], a), 1)
      }(a)
    },
    me: function (a, b, c) {
      c = c || {};
      var e = this.A,
        f = this.tf;
      c = c.Zk;
      if ("number" !== typeof a) {
        var r = "percentOfYAxisRange";
        e.g.o("heatmap") && (r = "percentOfZAxisRange");
        f = f.pointValue || (1 < (b.points || b.data).length ? "chart" === c ? "{%percentOfDataRange/100}" : "{%percentOfSeriesRange/100}" : "{" + r + `/100}`); - 1 === f.indexOf(":") && (f = f.replace("}", ":n5}"));
        a = e.La(f, b, a, {
          culture: "en-US"
        });
        a = a.replace(/,/g, "");
        a = parseFloat(a)
      }
      return a
    },
    Ue: function (a, b, c) {
      var e = a.points || a.data,
        f, r, h = [],
        g, l = a.colorKey || "valueSP";
      if (b.Cg && e && e.length) {
        r = e.length - 1;
        f = e[r];
        f[l] = this.me(f, a);
        this.Da ? (b = this.Da[0],
          g = this.Da[1]) : b = g = f[l];
        for (h.push(b); r--;) f = e[r], f = f[l] = this.me(f, a), h.push(f), f > g ? g = f : f < b && (b = f);
        this.Da = [b, g];
        this.$d = g - b;
        c && c.length && (a = c[0], c = a.options, 0 <= b && 1 >= g && this.dd ? (b = 0, g = 1) : this.dd || (b = this.We(0), g = this.We(1)), b = V.Yc(b, g, 8, {
          dg: 0
        }), this.of = [b.min, b.max], g = .001 * (b.max - b.min), c.min = b.min - g, c.max = b.max + g, c.tickInterval = b.interval, c.startOnTick = c.endOnTick = !1, a.axisPointRange = 0, a.isXAxis = !1)
      }
      return this.Da
    },
    qd: function (a) {
      function b() {
        var b = f.colors;
        e.mj = !1;
        "solid" === a && b.push(b[b.length -
          1]);
        for (var c = 1 / (b.length - 1), r = [], g = 0, n = b.length; g < n; g++) {
          var l = b[g];
          r[g] = "solid" === a ? [g * c, l, 1] : [g * c, l]
        }
        return r
      }

      function c() {
        var a, b = [],
          c = [],
          c = [],
          k = 0;
        for (a = r.length; k < a; k++) c[k] = r[k][0];
        c = [Math.min.apply(null, c), Math.max.apply(null, c)];
        for (k = r.length - 1; - 1 < k; k--) {
          a = r[k];
          var e;
          e = [(c[1] - a[0]).toFixed(2), a[1]];
          if (a = 0 < k ? r[k - 1] : void 0) 3 < a.length ? (e[2] = 1 - a[3], e[3] = 1 - a[2]) : 2 < a.length && (e[2] = 0, e[3] = 1 - a[2]);
          b.push(e)
        }
        r = b
      }
      var e = this,
        f = e.tf,
        r;
      r = f.stops || b();
      f.invert && c();
      return r
    },
    xc: function (a, b) {
      function c(a) {
        return v(0,
          1, m[0], m[1], a)
      }

      function e(a, b, c) {
        function k(a) {
          a = v(m[0], m[1], 0, 1, a);
          a = f.We(a);
          return f.Nf(a)
        }
        var h = [],
          h = function () {
            for (var k = [], p = 0, e = a.length; p < e; p++) {
              var h = a[p],
                f = p < e - 1 ? a[p + 1] : "undefined",
                t = 0 < p ? a[p - 1] : "undefined";
              if (h[0] < b && f[0] > b) k.push(b);
              else if (!(h[0] < b && f[0] < b))
                if (h[0] === b) k.push(h[0]);
                else if (f[0] !== b)
                  if (h[0] > c && t) {
                    if (t[0] < c) {
                      k.push(c);
                      break
                    }
                  } else k.push(h[0])
            }
            return k
          }();
        return function (a) {
          for (var p = [], e = 0, h = a.length; e < h; e++) {
            var f = a[e];
            p.push([v(0, 1, b, c, f), k(f)])
          }
          return p
        }(h)
      }
      for (var f =
        this, r = [], h = f.qd(a), g, l, m = [], n = f.of, m = f.Mc, q = 0, u = h.length; q < u; q++) g = h[q], l = q < u ? h[q + 1] : "undefined", r.push([c(g[0]), g[1]]), l && (2 < g.length && r.push([v(c(g[0]), c(l[0]), 0, 1, g[2]), g[1]]), 3 < g.length && r.push([v(c(g[0]), c(l[0]), 0, 1, g[3]), l[1]]));
      b && f.dd && 2 === n.length && (r = e(r, c(f.bf(n[0])), c(f.bf(n[1]))));
      return r
    },
    Yh: function (a, b) {
      var c;

      function e(a, b) {
        for (var k in r) r[k] += ", " + b + " " + a;
        c += ", color-stop(" + a + "," + b + ")"
      }
      var g = this.xc(a);
      c = "background: -webkit-gradient(linear, left top, right top,";
      b && (c = "background: -webkit-gradient(linear, left top, left bottom,");
      for (var r = ["background: -moz-linear-gradient(", "background: -webkit-linear-gradient(", "background: -o-linear-gradient(", "background: -ms-linear-gradient(", "background: linear-gradient("], h = 0, l = r.length; h < l; h++) {
        var m = r[h];
        b ? h === r.length - 1 ? r[h] = m + "to bottom" : r[h] = m + "top " : h === r.length - 1 ? r[h] = m + "to right" : r[h] = m + "left "
      }
      h = 0;
      for (l = g.length; h < l; h++) {
        var m = g[h],
          q = f.wb(m[1]);
        e(100 * m[0] + "%", q)
      } (function () {
        for (var a in r) r[a] += ");";
        c += ");"
      })();
      return function () {
        var a = "",
          b;
        for (b in r) a += r[b];
        return a += c
      }()
    },
    bf: function (a) {
      var b, c, e;
      1 >= this.wg && 0 <= this.Mc[0] && 1 >= this.Mc[1] && (c = !0);
      1 >= this.$d && 0 <= this.Da[0] && 1 >= this.Da[1] && (e = !0);
      return c && !e && (b = this.Da) ? v(0, 1, b[0], b[1], a) : a
    },
    We: function (a) {
      var b, c, e;
      1 >= this.wg && 0 <= this.Mc[0] && 1 >= this.Mc[1] && (c = !0);
      1 >= this.$d && 0 <= this.Da[0] && 1 >= this.Da[1] && (e = !0);
      return c && !e && (b = this.Da) ? v(b[0], b[1], 0, 1, a) : a
    }
  };
  J.prototype = {
    mh: {
      Xg: ["color", "transparency", "opacity", "outline.color", "outline.width"],
      Ei: "fill outline.color outline.width states type visible".split(" "),
      label: ["color",
        "style.color"
      ],
      Ve: ["outline.color", "outline.width", "fill", "size"],
      zk: ["marker.fill"]
    },
    init: function (a) {
      this.ga.Ud = this;
      this.A = a;
      this.Re();
      this.Ac = this.X = !0;
      this.setPointSpValues = this.Ue;
      this.setSeriesAttr = this.dj;
      this.getLegendEntryAttrSet = this.Xh;
      this.getTooltipAttr = this.ei;
      this.getSInfo = this.Ab;
      this.draws = this.yh
    },
    update: function (a, b) {
      var c, e = this.A.json,
        f = e.series || [],
        e = e.chartArea,
        g;
      c = this.caches;
      if (this.X)
        if ("update" === a && m(b)) e = (c.Z[b] || this.oe(b)).index, this.se(f[e], e), this.X = !1;
        else if ("full" ===
          a || "series" === a) {
          this.Re();
          c = this.caches;
          g = this.ga.Th();
          c.cd = g;
          "object" === N.K(g) && (c.pf = !0);
          c = 0;
          for (g = f.length; c < g; c++) this.se(f[c], c, a);
          if (e.pop)
            for (f = 0, c = e.length; f < c; f++)
              if (g = e[f], g.series)
                for (var h = 0, l = g.series.length; h < l; h++) this.se(g.series[h], h, a);
          "full" === a && (this.X = !1)
        }
    },
    Re: function () {
      !0 === this.Ac && (this.Kc = {});
      this.caches = {
        Sf: !1,
        cd: void 0,
        Z: {}
      }
    },
    ac: function (a) {
      var b = N.K(a);
      if ("undefined" !== b) {
        var c = [];
        if ("object" === b) c = a;
        else if ("string" === b) c = JSCL.He.get(a);
        else if (a.pop && a.length)
          for (var b =
            0, e = a.length; b < e; b++) c[b] = f.O(a[b]);
        return c
      }
    },
    pd: function (a, b, c) {
      a = this.le(a, b, c);
      return a.fill || a.color
    },
    le: function (a, b, c, g) {
      var l = this.caches,
        r = a.id,
        h = b.id,
        q, x, A, n, v;
      c = c || (r ? l.Z[r] : this.oe(h));
      q = c.ed;
      x = c.uj;
      n = c.xd ? b.color || this.ge(b).color || c.Qa.color : b.color || c.Qa.color;
      if (v = c.Ca ? e.a(b, "marker.fill") || e.a(c.Qa, "marker.fill") : void 0) v = f.P(v);
      if (v || n) return v && n ? {
        color: f.O(n),
        fill: v
      } : n ? {
        color: f.O(n)
      } : {
        color: this.ga.ug(v),
        fill: v
      };
      q ? (l = c.Dc || l.cd, r = N.K(l), "object" === r ? h = this.wc(l).pd(a, b, {
        lk: g
      }) :
        (a = c.oa[h], (a = c.oa[h]) && -1 < (A = a.index) ? (m(a.ad) && (A = a.ad), h = l[A % l.length]) : h = c.vb), h = f.O(h)) : (h = c.Qa.color || (c.xg || this.Lf(r)).color, x && (h = JSCL.gk.ai(h, .03), c.Ai = !0));
      return {
        color: h
      }
    },
    ge: function (a) {
      var b = this.A,
        c;
      return (c = a.parentPoint || a.parent) ? (b = b.B(c)) ? this.ge(b) : a : a
    },
    dj: function (a) {
      function b(b) {
        t = F.Z[b];
        Q = r.B(b);
        L ? (p = q ? l.mb(x.options, {}, {}) : l.mb(b, {}, {}), I = q ? l.vc(x) : l.vc(b)) : (p = q ? l.mb(x.options, {}, {}) : l.mb(n, {}, {}), I = q ? l.vc(x) : l.vc(a));
        S = I.settings;
        L && c()
      }

      function c() {
        ca = H.za(S);
        a.colMan =
          l;
        p && !p.ignore && (a.pointAttr = h ? p.subvalAttr : p.pointAttr, a.borderWidth = void 0, v.hover.halo = {
          opacity: 0,
          size: 0,
          attributes: {
            "stroke-width": 0,
            stroke: "none"
          }
        }, e.W(!0, n, I.seriesExtension), t.we && e.c(n, "dataLabels.color", Z(p.pointLabel.color, ca)));
        ga = d.isType("heatmap", Q);
        W = "arc" === r.g.I("circularGaugeType")
      }

      function g(a, d) {
        var c = d.options.parentSeries;
        if (c) {
          if (a && a === F.Z[c]) return a;
          z = c;
          b(c)
        }
      }
      var l = this,
        r = l.A,
        h, q, x;
      if (l.X) return l.update("full"), l.setSeriesAttr(a);
      m(x = a.linkedParent) && (h = "errorbar" === a.type) &&
        (q = x.options.id);
      var A = a.points || a.data,
        n = a.options || a,
        n = a.options || a,
        v = n.states,
        u, F = l.caches,
        F = l.caches,
        d = r.g,
        z = q || e.a(a, "options.id") || a.id,
        L = d.L("behavior", "tree"),
        t, Q, p, I, S, ca, ga, W, ka, Z = f.O,
        G = A.length;
      L ? (u = A[G - 1], t = g(t, u)) : (b(z), c());
      for (G = A.length; G--;) {
        u = A[G];
        L && g(t, u);
        var C = u.color,
          y = e.a(u, "options.dataLabels.style.color"),
          M, N;
        l.Pf(z, e.a(u, "options.id")) ? (ka = l.mb(a.options || a, u)) && !ka.ignore ? (u.pointAttr = h ? ka.subvalAttr : ka.pointAttr, M = Z(ka.pointLabel.color, ca), e.c(u, "options.dataLabels.color",
          M), e.c(u, "options.dataLabels.style.color", M), N = ka.baseColor, W ? u.toColor = f.Jf(N) : u.color = f.Jf(N)) : ka && (u.pointAttr = h ? ka.subvalAttr : ka.pointAttr) : (M = Z(p.pointLabel.color, ca), e.c(u, "options.dataLabels.color", M), e.c(u, "options.dataLabels.style.color", M), u.pointAttr = a.pointAttr, N = p.baseColor, u.color = h ? u.pointAttr[""].stroke : u.pointAttr[""].fill);
        ga && delete u.shapeArgs.fill;
        if (N !== C) {
          var R;
          (R = u.graphic) && R.attr(u.pointAttr[""])
        }
        y !== M && (R = u.dataLabel) && R.css({
          color: M
        })
      }
    },
    Ue: function (a, b) {
      var c = this.caches.Z[a.id],
        e;
      if (!c && this.A.g.o("treemap"))
        for (var f in this.caches.Z) {
          c = this.caches.Z[f];
          break
        }
      c && c.Cg && (e = this.wc(c.Dc), e = {
        extremes: e.Ue(a, c, b),
        stops: e.xc(null, !0)
      });
      this.Ac = !1;
      return e
    },
    vc: function (a) {
      var b = this.A.g,
        c = "string" === typeof a ? a : a.id || e.a(a, "options.id") || e.a(a, "linkedParent.options.id");
      a = this.A.B(c);
      var c = this.caches.Z[c],
        g = c.Yd,
        l = g.line || {};
      e.a(c.Qa, "subvalue.line");
      var r = this.ga.Xe,
        h = f.O,
        q = this.ga.Be,
        x = {};
      if (c.Nc) return c.Nc;
      var A = c.vb,
        n = H.za(g),
        v = {
          color: A,
          transparency: e.s(n, 0)
        };
      c.hd && (v.line =
        l = {
          width: e.s(l.width, 2),
          color: l.color || g.color || A,
          transparency: e.s(H.za(l), 0),
          dashStyle: l.dashStyle
        }, x.lineColor = h(l.color, q(c.$c, H.za(l))), x.lineWidth = l.width, x.dashStyle = l.dashStyle, q = x.states = {}, q.hover = {
          lineWidth: e.s(e.a(c.Yd, "states.hover.line.width"), l.width + 2)
        }, q.select = {
          lineWidth: e.s(e.a(c.Yd, "states.select.line.width"), l.width + 2)
        });
      c.ae && (v.area = g = {
        color: g.color || A,
        opacity: m(n) ? r(n) : .8
      }, "subtle" === b.I("areaShadingType", a) ? x.fillColor = f.uc(f.O(g.color, 100 * (1 - g.opacity)), "areaFill") : x.fillColor =
        h(g.color, 100 * (1 - g.opacity)), x.fillOpacity = 1);
      return c.Nc = {
        settings: v,
        seriesExtension: x,
        shapeAttr: 0
      }
    },
    mb: function (k, b, c) {
      function g(a, b, d) {
        var c = {},
          k = {};
        e.c(c, "color", f.P(b.fill) || f.O(b.color));
        e.f(c, b, "outline.color", "outline.color");
        e.f(c, b, "outline.width", "outline.width");
        e.f(c, b, "outline.dashStyle", "outline.dashStyle");
        e.f(c, b, "size", "size");
        k = {
          color: d.color ? h.ga.Si(a.color, d.color, ["val"]) : a.color,
          outline: {
            color: d.outlineColor ? d.outlineColor(e.a(a, "outline.color")) : e.a(a, "outline.color"),
            width: d.outlineWidth ?
              d.outlineWidth(e.a(a, "outline.width")) : e.a(a, "outline.width")
          }
        };
        m(e.a(a, "outline.dashStyle")) && (k.dashStyle = d.oh ? d.oh(e.a(a, "outline.dashStyle")) : e.a(a, "outline.dashStyle"));
        m(a.size) && (k.size = d.size ? d.size(e.a(a, "size")) : e.a(a, "size"));
        return e.F(c, k)
      }

      function l(a, b) {
        var d = e.a(a, "states." + b) || {},
          c = d.marker || {},
          k, p;
        if (k = e.F(c.outline, d.outline)) c.outline = k;
        if (k = c.fill || d.fill) c.fill = k;
        m(p = c.size || d.size) && (c.size = p);
        d = e.a(a, "marker.states." + b) || {};
        return e.F(c, d) || {}
      }

      function r() {
        return {
          raw: C,
          baseColor: G,
          pointAttr: O,
          subvalAttr: N,
          labelVisible: M,
          labelConnector: S.Xf,
          drawMarker: S.Ca,
          pointLabel: ca
        }
      }
      var h = this,
        q = h.A,
        x = q.g,
        A = x.o("map"),
        n = x.L("behavior", "tree"),
        v, u, F, d, z, L = b.options || {},
        t, Q, p = {},
        I = h.caches.Z,
        S, ca, ga, W, G, Z, C, N = {},
        y;
      d = "string" === typeof k ? k : k.id || e.a(k, "options.id");
      n && (L.parentSeries && (d = L.parentSeries), L.parentPoint && (p = h.A.B(L.parentPoint)));
      z = "string" === typeof b ? b : b.id || e.a(b, "options.id");
      t = h.A.B(d);
      Q = c || h.A.B(z);
      c = !m(z);
      S = I[d];
      if (!S) return null;
      I = S.Qa;
      if (z && S) {
        if (ga = S.oa[z]) W = ga.Nc, h.Pf(d,
          z) || (W = S.xf)
      } else c && (W = S.xf);
      if (W) return W;
      n && !L.isLeaf && (v = !0, L.isRoot && (u = !0), u ? (Q = Q.shape || Q || {}, I = e.a(q.json, "defaultSeries.shape")) : F = !0);
      n = e.dh({
        Fd: ["map", "attributes"]
      }, Q, p, I) || {};
      ca = n.label || {};
      u = n.marker || {};
      W = e.a(n, "states.hover") || {};
      p = e.a(n, "states.select") || {};
      d = S.xg || h.Lf(d);
      G = c ? n.color || S.vb : h.le(t, Q, S, b);
      "object" === typeof G && G.color && (Z = G.fill, G = G.color);
      var L = f.O(e.a(n, "outline.color")) || f.aa(G, "outline"),
        M = S.we || ca.visible || e.a(ca, "text.length");
      Q = e.s(H.za(n) || 0);
      d = h.ga.Be(H.za(d),
        Q);
      M && (ca.color = ca.color || f.aa(G, S.Ta ? "labelContrast" : "label"));
      if (F) return O = {
        hover: {},
        select: {},
        "": {}
      }, W = r(), W.ignore = !0, W;
      y = {
        color: G,
        outline: {
          color: L,
          width: 1
        }
      };
      F = g(y, n, {});
      Q = {
        color: function (a) {
          return f.aa(a, "hover")
        }
      };
      S.Ta && S.hd && (Q.outlineWidth = function (a) {
        return a + 2
      });
      Q = g(F, W, Q);
      p = g(Q, p, {
        color: function (a) {
          return f.aa(a, "select")
        },
        outlineWidth: function (a) {
          return a + 1
        }
      });
      if (S.Ca) {
        I = l(n, "hover");
        W = l(n, "select");
        var R = f.O(e.a(u, "outline.color"));
        y.marker = L = {
          color: Z || G,
          size: 5,
          outline: {
            color: R || L,
            width: 1
          }
        };
        Z = m(u.visible) ? u.visible : !0;
        F.marker = u = g(L, u, {});
        Z || (u.size = 0);
        Z = m(I.visible) ? I.visible : Z;
        Q.marker = u = g(u, I, {
          size: function (a) {
            return 1.2 * a
          },
          color: function (a) {
            return f.aa(a, "hover")
          }
        });
        Z || (u.size = 0);
        Z = m(W.visible) ? W.visible : Z;
        p.marker = u = g(u, W, {
          color: function (a) {
            return f.aa(a, "select")
          },
          outlineWidth: function (a) {
            return a + 1
          }
        });
        Z || (u.size = 0);
        p.marker = u
      }
      var O = {};
      Z = S.Ca ? F.marker : F;
      O[""] = h.Oc(Z, d);
      Z = S.Ca ? Q.marker : Q;
      O.hover = h.Oc(Z, d);
      Z = S.Ca ? p.marker : p;
      O.select = h.Oc(Z, d);
      !S.Ta || S.hd || S.Ca || "bubble" === S.Jc ||
        (O[""]["stroke-linejoin"] = "round", O[""].zIndex = -5, O.hover.zIndex = 1, O.select.zIndex = 0);
      "bubble" === S.Jc && ga && (O[""].zIndex = ga.zIndex);
      S.qe && (ga = e.a(n, "subvalue.line") || {}, Z = {
        outline: {
          width: e.s(ga.width, 1),
          color: ga.color || f.aa(G, "outline"),
          length: ga.length,
          dashStyle: ga.dashStyle
        }
      }, N[""] = h.Oc(Z, d));
      !q.Hd && (A || "column" === S.Jc || x.isType("funnel", t) || x.isType("heatmap", t) || x.isType("treemap", t) || x.isType("pyramid", t)) && (S.mi && !c && b.options ? (q = e.a(b, "series.yAxis.len"), f.Ce(h.A, O, a, k, t, {
        angle: b.barX,
        arc: b.pointWidth,
        r: q - b.rectPlotY,
        innerR: q - e.s(b.yBottom, q)
      })) : f.Ce(h.A, O, a, k, t));
      if (v || !1 === S.ae) O[""].fill = "none", O.hover.fill = "none", O.select.fill = "none";
      W = r();
      z && S.oa[z] ? S.oa[z] ? S.oa[z].Nc = W : S.oa[z] = {
        Nc: W
      } : c && (S.xf = W);
      return W
    },
    Lf: function (a) {
      var b = this.caches.Z;
      a = "string" === typeof a ? a : a.id || e.a(a, "options.id");
      e.a(this.A.json, "defaultSeries.defaultPoint");
      var b = b[a],
        c;
      a = b.vb;
      c = f.aa(a, "outline");
      a = {
        color: a,
        outline: c,
        transparency: b.$c,
        label: f.aa(a, "label"),
        line: c
      };
      return b.xg = a
    },
    xi: function (a) {
      return this.caches.Z[a].ed
    },
    Pf: function (a, b) {
      var c = this.caches.Z[a];
      if (c.ed || c.gj || c.xd || c.Ai) return !0;
      if (c.td) return b && !c.nh[b] ? !1 : !0
    },
    isSerCBP: function (a) {
      return this.xi(a)
    },
    Ab: function (a, b) {
      if (m(a)) {
        var c = this.caches.Z[a];
        if (this.X || c) return b ? c : !c || this.X ? (this.X = !0, this.update("full"), this.Ab(a)) : c
      }
    },
    je: function (a, b, c) {
      function g(a, b) {
        for (var d = 0, c = a.length; d < c; d++) a[d] = f.O(f.wb(a[d]), b)
      }
      var l = this.A,
        r = this.Ab(a);
      if (!r) {
        var h = l.ha(a);
        if ("flags" === e.a(h, "options.type")) return
      }
      if (!l.va) {
        var l = N.K(r.Dc),
          m;
        if (r.ed)
          if ("object" ===
            l) m = this.wc(r.Dc).xc();
          else if ("array" === l) {
            var q = r.Dc.slice(0, 2 === c ? 2 : 3);
            g(q, r.$c);
            m = this.wc({
              colors: q
            }).xc("solid")
          } else DEBUG && console.log("error in getLegendColors");
        else {
          for (var q = r.vb, h = r.Wd, l = h[0] || q, h = h[h.length - 1] || q, q = [], x = 0, n = r.Wd.length; x < n; x++) {
            var A = r.Wd[x];
            if (A !== l && A !== h && (q.push(A), 2 === q.length)) break
          }
          x = [];
          1 < q.length ? x = [l].concat(q.slice(0, Math.min(2, q.length))) : 1 === q.length ? x = [l, q[0], h] : 0 === q.length && l != h && (x = [l, h]);
          2 === c && 3 === x.length && x.shift();
          0 < x.length && (g(x, r.$c), m = this.wc({
            colors: x
          }).xc("solid"))
        }
        a =
          this.mb(a, {}, {});
        b && (b[""].stroke = a.pointAttr[""].stroke, b[""]["stroke-width"] = 1, m || (b[""].fill = r.vb));
        return {
          pb: m,
          list: q
        }
      }
    },
    Xh: function (k, b, c) {
      function g(a, b) {
        return a ? Math.max(Math.min(a, b[1]), b[0]) : a
      }

      function l(a) {
        var b = f.od(a)[3],
          b = g(b, L.opacity);
        return f.Ob(h.ga.$b(b), a)
      }

      function r(a) {
        var b = a;
        c || (b = f.qh(a));
        return b
      }
      var h = this,
        q = h.A,
        x = h.Ab(k),
        A, n, v, u, F = e.a(q.json, "legend.defaultEntry") || {},
        d = e.a(q.B(k), "legendEntry") || {};
      A = e.F(F, d);
      var z, L = {
        lineWidth: [2, 3],
        outlineWidth: [1, 2],
        pi: [3, 4],
        opacity: [.3,
          1
        ],
        oj: [20, 90],
        Fi: 2
      };
      if (k && -1 < k.toUpperCase().indexOf("COLAXID")) return {
        symbol: {
          "": {
            fill: b.legendColor
          }
        }
      };
      F = h.vc(k);
      d = e.qf(F.seriesExtension);
      z = h.mb(k, {}, {});
      m(c) || (c = !0);
      A = {
        fill: A.color || "black"
      };
      var t = e.a(F, "settings.transparency"),
        t = h.ga.$b(g(h.ga.Xe(t), L.opacity));
      if (x.hd) {
        n = {
          "": h.Oc({
            outline: F.settings.line
          }, 0)
        };
        var Q = n[""];
        Q["stroke-linecap"] = "round";
        Q["stroke-linejoin"] = "round";
        Q["stroke-width"] = g(Q["stroke-width"], L.lineWidth);
        Q.stroke = r(l(Q.stroke))
      }
      x.Ca && (v = x.wf["marker.type"]) && v.allSet &&
        (b.symbol = x.wf["marker.type"].first);
      var p;
      "column" === x.Jc || "map" === x.Jc ? (v = z.pointAttr[""], v = {
        "": {
          fill: r(f.O(e.a(F, "settings.color"), t)),
          "stroke-width": v["stroke-width"],
          stroke: l(v.stroke)
        }
      }, (p = h.je(k, void 0)) && p.pb ? (v[""].fill = f.Ob(t, {
        linearGradient: [0, 0, 1, 0],
        options: {
          angle: 90,
          focus: "100%",
          opacity1: 1,
          opacity2: 1
        },
        stops: p.pb
      }), p.list && 1 < p.list.length && (p = f.nf(p.list), v[""].stroke = f.aa(p, "outline"))) : f.Ce(h.A, v, a, b, q.B(k), "le"), v[""].fill = r(f.Ob(t, v[""].fill))) : (p = h.je(k, void 0, L.Fi).pb, v = {
        "": e.qf(z.pointAttr[""])
      },
        k = v[""], k["stroke-width"] = g(k["stroke-width"], L.outlineWidth), k.r = g(k.r, L.pi), p ? k.fill = f.Ob(t, {
          linearGradient: [0, 0, 1, 0],
          options: {
            angle: 90,
            focus: "100%",
            opacity1: 1,
            opacity2: 1
          },
          stops: p
        }) : (p = k.fill, b = "object" === typeof p && p.stops ? h.ga.Xe(t) : f.od(p)[3], b = g(b, L.opacity), k.fill = f.Ob(h.ga.$b(b), p)), k.fill = r(k.fill), k.stroke = l(k.stroke));
      x.ae && (x = h.ga.$b(g(F.settings.area.opacity, L.opacity)), u = {
        "": {
          fill: r(f.Ob(x, d.fillColor) || f.O(F.area.color, h.hl.$b(g(F.area.opacity, L.opacity)))),
          stroke: l(d.lineColor),
          "stroke-width": 1
        }
      });
      return {
        label: A,
        line: n,
        symbol: v,
        area: u
      }
    },
    ei: function (a, b, c) {
      var g = this.A,
        l = a.id || e.a(a, "options.id"),
        g = e.a(g.json, "defaultTooltip") || {},
        r = {};
      l && (l = this.mb(a.series, a)) && (a = e.a(g, "fill"), "auto" === a && (a = l.baseColor), l = e.a(g, "outline.color"), "auto" === l && (l = f.aa(a, "outline")), r.fill = f.gi(a, b, c), r.stroke = l, r["stroke-width"] = e.s(e.a(g, "outline.width"), 1));
      return r
    },
    Oc: function (a, b) {
      var c = {},
        g, l, r = f.Ob,
        h = {
          color: "fill",
          "outline.color": "stroke"
        },
        q = {
          "outline.width": "stroke-width",
          "outline.dashStyle": "dashstyle",
          size: "r"
        };
      for (g in h) m(l = e.a(a, g)) && (c[h[g]] = r(b, l));
      for (g in q) m(l = e.a(a, g)) && (c[q[g]] = l);
      return c
    },
    yh: function (a, b) {
      var c;
      if (c = this.Ab(a)) switch (b) {
        case "markers":
          return c.Ca
      }
    },
    wc: function (a) {
      var b;
      this.Ac && (this.Kc = {});
      (b = a.id) && this.Kc[b] ? b = this.Kc[b] : (b = new y(this.A, a), this.Kc[a.id] = b);
      return b
    },
    se: function (a, b, c) {
      function g() {
        var b, d = 0;
        ja && (b = a.points.slice(), G.kj(b));
        for (var c = 0, p = X; c < p; c++) {
          var h = a.points[c],
            f = {
              index: c
            };
          n && (f.ad = r.ad++);
          ia[h.id] = f
        }
        if (ja)
          for (c = 0, p = b.length; c < p; c++) ia[b[c].id].zIndex =
            c;
        B.oa = ia;
        for (var u = [], I, c = 0, p = X; c < p; c++)
          if (h = a.points[c], ha = h.id, l(B, h))
            for (ia.visible = !0, d++, u = r.jg(h), !B.qe && h.subvalue && (B.qe = !0), u.length && (ra[ha] = u, I = !0), b = 0, f = u.length; b < f; b++) {
              J = u[b];
              var w = e.a(h, J);
              ma[J] = ma[J] || {
                valById: [],
                valList: [],
                allEqual: !1,
                allSet: !1
              };
              ma[J].valById.push([ha, w]);
              ma[J].valList.push(w)
            }
        B.td = I;
        c = [];
        if (I)
          for (J in ma)
            if (I = ma[J], I.valList.length === d) {
              I.allSet = !0;
              if ("marker.type" === J)
                for (b = 0, f = I.valList.length; b < f; b++)
                  if (p = I.valList[b], "none" !== p) {
                    I.first = p;
                    break
                  } e.c(B.Qa, "key",
                    void 0);
              var m, p = !0,
                h = 0;
              for (b = I.valList.length; h < b; h++) {
                f = I.valList[h];
                if (0 < h && m !== f) {
                  p = !1;
                  break
                }
                m = f
              }
              if (I.allEqual = p) e.c(B.Qa, J, I.valList[0]), c.push(J)
            } var d = [],
              z, S;
        oa && (z = e.J(q.options.series, "id", t), !z && B.xd && (z = q.options.series[0]));
        c = 0;
        for (p = X; c < p; c++) h = a.points[c], l(B, h) && (oa && (S = e.J(z.data, "id", h.id)), m = r.le(a, h, B, S), d.push(r.ga.ug(m.fill || m.color)));
        B.Wd = d
      }

      function l(a, b) {
        var d, c, k = a.Qa;
        if (a.Ca && (d = b.marker || {}, c = a.Qa.marker || {}, !1 === c.visible || "none" === c.type || !1 === d.visible || "none" === d.type)) return !1;
        1 === H.za(k) || H.za(k);
        return !0
      }
      var r = this,
        h, q = r.A,
        x = r.caches,
        v = q.g,
        n, A, u = A = v.L("behavior", "colorByPoint", a),
        F = !1,
        d = v.L("behavior", "drawMarker", a),
        z = r.A.json.series || [],
        L = v.L("behavior", "tree"),
        t = a.id,
        Q = a.defaultPoint,
        p = e.a(r.A.json, "defaultSeries.defaultPoint"),
        I = e.F({}, Q, p) || {},
        S = e.a(r.A.json, "defaultSeries") || {},
        ca = e.a(r.A.json, "palette") || "default",
        ga = N.K(ca),
        W = N.K(S.palette),
        C = I.label || {},
        Z, qa = x.cd,
        y = v.Ta(q.B(t)),
        O, M, R, U, aa, P, V, B, ha, J, X = a.points.length,
        oa, ba = q.g.L("behavior", "drawArea", a),
        ja = q.g.I("seriesType",
          "bubble"),
        fa = q.g.L("behavior", "drawLine", a);
      "line" === e.a(a, "map.type") && (ba = d = !1, fa = !0);
      c = c || "full";
      var ma = {},
        ia = {},
        ra = {};
      B = x.Z[t] || {};
      (function () {
        var c = {
          transparency: H.za(a),
          states: a.states,
          line: a.line,
          color: a.color
        },
          c = e.F(c, S);
        Z = q.jb || C.visible || e.a(C, "text.length");
        if (h = a.palette ? r.ac(a.palette) : void 0) u = !0;
        q.g.L("chartType", "radar", a) && q.g.L("seriesType", "column", a) && (F = O = !0);
        if (!m(b))
          for (var p = 0, g = z.length; p < g; p++)
            if (t === z[p].id) {
              b = p;
              break
            } h = (p = h) || qa;
        "object" === N.K(h) ? (u = oa = x.Sf = !0, "object" ===
          W && "object" !== ga && (M = r.ac(ca))) : h && qa && !m(p) && A && (n = !0);
        M || (M = "object" !== ga ? r.ac(ca) : r.ac("default"));
        (R = c.color || I.color) ? (p = f.od(R), V = r.ga.Be(r.ga.$b(e.s(p[3], 1)), e.s(H.za(c), 0))) : (R = M[b % M.length], p = f.od(R), V = e.s(H.za(c), 0));
        R = f.wb(p);
        U = e.a(c, "line.color") || R;
        aa = c.color || R;
        P = I.color || R;
        B = {
          index: b,
          id: a.id,
          Jk: a.points.length,
          ed: u,
          gj: F,
          mi: O,
          Qa: I,
          Yd: c,
          Xf: q.g.L("behavior", "labelConnector", a),
          hd: fa,
          ae: ba,
          uj: q.g.L("behavior", "varyPalette", a),
          we: Z,
          Ca: d,
          Jc: q.g.I("seriesType", a),
          Dc: u ? h : h[b],
          Cg: oa,
          vb: R,
          Kj: U,
          Jj: aa,
          Lj: P,
          $c: V,
          oa: ia,
          wf: ma,
          nh: ra,
          td: !1,
          xd: L,
          qe: m(I.subvalue),
          Ta: y
        };
        x.Z[a.id] = B
      })();
      r.tk = !1;
      "series" === c ? r.wi = !0 : (g(), !B.td && v.o("treemap") && (B.td = !0), r.wi = !1)
    },
    jg: function (a) {
      var b = N.K(a),
        c = this.mh;
      this.A.g.tc();
      var b = "string" === b ? this.A.B(a) : a,
        f = this.oe(b.id),
        g, r = "",
        h;
      a = [];
      g = c.Xg;
      for (var r = "", q = 0, x = g.length; q < x; q++) {
        var v = r + g[q];
        m(e.a(b, v)) && a.push(v)
      }
      if (f.Ca && (g = c.Ei, r = "marker", m(h = e.a(b, r))))
        for (q = 0, x = g.length; q < x; q++) v = g[q], m(e.a(h, v)) && a.push(r + "." + v);
      if (f && (g = c.label, r = "label", m(h = e.a(b, r))))
        for (q =
          0, x = g.length; q < x; q++) v = g[q], m(e.a(h, v)) && a.push(r + "." + v);
      if (m(b.states)) {
        g = c.Ve;
        r = "states.hover";
        if (m(h = e.a(b, r)))
          for (q = 0, x = g.length; q < x; q++) v = g[q], m(e.a(h, v)) && a.push(r + "." + v);
        g = c.Ve;
        r = "states.select";
        if (m(h = e.a(b, r)))
          for (q = 0, x = g.length; q < x; q++) v = g[q], m(e.a(h, v)) && a.push(r + "." + v)
      }
      f.xd && (c = this.ge(b), c !== b && (c = this.jg(c), a.push.apply(a, c), a.sort(), a = l.Qe(a)));
      return a
    },
    oe: function (a) {
      var b = this.caches.Z,
        c;
      for (c in b)
        if (b[c].oa.hasOwnProperty(a)) return b[c]
    },
    ga: {
      Ud: void 0,
      Dk: function (a) {
        return getSerInfoByPointId(a).id
      },
      yk: function (a, b) {
        var c = this.Ud.caches.Z;
        return (m(b) ? c[b] : getSerInfoByPointId(a)).oa[a]
      },
      Th: function () {
        var a = this.Ud,
          b = a.A.g.tc().json,
          c = a.ac(b.palette || "default"),
          a = a.ac(e.a(b, "defaultSeries.palette") || void 0);
        return m(a) ? a : c
      },
      Eb: function (a, b, c) {
        var f = {};
        f.color = a.color;
        f.borderColor = e.a(a, "outline.color");
        c.we && (c.Xf && e.c(f, "dataLabels.connectorColor", e.a(a, "label.lineColor")), e.c(f, "dataLabels.color", e.a(a, "label.color")));
        e.Hh(b, f)
      },
      Be: function (a, b) {
        1 >= a && (a = 100 * a);
        1 >= b && (b = 100 * b);
        return 100 - parseInt((100 -
          a) / 100 * ((100 - b) / 100) * 100)
      },
      Xe: function (a) {
        return 1 - a / 100
      },
      Si: function (a, b, c) {
        for (var e, f = 0, g = c.length; f < g; f++)
          if ("val" === c[f]) {
            e = f;
            break
          } if ("object" === typeof a && a.stops) {
            a = Object.create(a);
            for (var h = [], f = 0, g = a.stops.length; f < g; f++) c[e] = a.stops[f][1], h.push([a.stops[f][0], b.apply(null, c)]);
            a.stops = h;
            return a
          }
        c[e] = a;
        return b.apply(null, c)
      },
      ug: function (a) {
        var b = [];
        if ("object" === typeof a && a.stops) {
          for (var c = 0, e = a.stops.length; c < e; c++) b[c] = a.stops[c][1];
          return f.nf(b)
        }
        return a
      },
      $b: function (a) {
        return 100 *
          (1 - a)
      }
    }
  };
  window.JSCL = jQuery.extend(!1, null, window.JSCL, {
    m: f,
    gLib: f,
    dtLib: B,
    ee: B,
    na: G,
    shapeLib: O,
    graphicsLib: f,
    j: e,
    jL: e,
    R: C,
    mc: function () {
      return {
        Df: function (a, b, c, f, g, r) {
          g = "%yValue";
          e.a(c, "type") || e.a(b, "defaultSeries.type");
          b = e.a(f, "type");
          var h, l = a.g;
          c && (f = a.Fa(c)) && f.xNotSorted && (h = !0);
          l.o("pie", c) || l.o("donut", c) || l.o("pyramid", c) || l.o("cone", c) ? g = "%percentOfSeries% " : l.o("funnel", c) ? g = "%percentOfSeriesMax% " : "bubble" === l.I("seriesType", c) ? g = h ? "%xValue, %yValue (%zValue)" : "%yValue (%zValue)" : l.o("map") ?
            l.Ta(c) && r && r.name && (g = "%name") : "stackedFull" === b ? g = "%percentOfGroup%" : "stacked" === b ? g = "%yValue" : c && (a.Fa(c), g = h ? "%xValue, %yValue" : "%yValue");
          return g
        },
        Af: function (a, b, c, f, g, l) {
          function h() {
            var a = "";
            "category" === z.Hg ? a = z.Fg ? F("%xAxisLabel") + ": %name<br/>" : F("%name ") : (z.bc && (a = F("%name") + "<br/>"), a += z.Fg ? F("%xAxisLabel") + ": %xValue<br/>" : F("%xValue "));
            a += z.Id ? "<br/>" + F("%yAxisLabel") + ": " + A() + "<br/>" : A() + " ";
            z.re && (a += z.cf ? "<br/>" + F("%zAxisLabel") + ": %zValue<br/>" : F("(%zValue) <br/>"));
            a += "<br/>" +
              u();
            return d(a)
          }

          function q() {
            var a = "";
            z.bc && (a = F("%name") + "<br/>");
            z.re && (a += z.cf ? F("%zAxisLabel") + ": %zValue<br/>" : F("(%zValue) <br/>"));
            a += z.Id ? "<br/>" + F("%yAxisLabel") + ": " + A() + "<br/>" : A() + "<br/>";
            a += u();
            return d(a)
          }

          function x() {
            var a = "";
            z.bc && (a = F("%name") + "<br/>");
            a += z.Id ? "<br/>" + F("%yAxisLabel") + ": " + A() + "<br/>" : A() + "<br/>";
            a += u("%percentOfSeriesMax");
            return d(a)
          }

          function v() {
            var a = "";
            z.dc ? (a = F("%seriesName"), z.bc && (a += ": %name"), a += "<br/>") : z.bc && (a += F("%name") + "<br/>");
            return a += z.Id ? "<br/>" +
              F("%yAxisLabel") + ": " + A() + "<br/>" : A() + "<br/>"
          }

          function n() {
            var a = "",
              b = z.$f || {};
            z.bc && (a += "%name");
            z.$f && z.dc && z.dc !== b.name && (a += a.length ? "<br/>" : "", "province" === b.mapLevel && -1 === z.dc.toLowerCase().indexOf(b.country.toLowerCase()) && (a += "%country"));
            z.dc && (a += a.length ? "<br/>" : "", a += "%seriesName");
            "marker" === L && (a += a.length ? "<br/>" : "", a += "<br/>" + F("Lat: ") + "%yValue", a += "<br/>" + F("Long: ") + "%xValue");
            z.re && (a += a.length ? "<br/>" : "", a += z.cf ? F("%zAxisLabel") + ": %zValue<br/>" : F("(%zValue) <br/>"));
            return a
          }

          function A() {
            var a = "%yValue";
            z.vd && (a = "datetime" == z.Md ? "[%low, %high]" : "{%yValue-%yStart} [%low, %high]");
            return a
          }

          function u(a) {
            a = m(a) ? a + "% of " : "%percentOfSeries% of ";
            a = z.dc ? a + "%seriesName" : a + "Series";
            if ("stacked" === z.Md || "stackedFull" === z.Md) {
              var b = "%xValue";
              "category" === z.Hg && (b = "%name");
              a += "<br/>%percentOfGroup% of " + b
            }
            return a
          }

          function F(a) {
            return "<b>" + a + "</b>"
          }

          function d(a) {
            return a.replace(/<br\/><br\/>/g, "<br/>")
          }
          var z, L;
          (function () {
            var b, d, p, h = a.g,
              u = a.G,
              n, q, x, F, L, v, A, G, M, E = h.I("chartType",
                c);
            c && (b = a.Fa(c), u.Ab(c.id, !0), b && b.xNotSorted && (d = !0), b = a.Ba("%yAxisLabel", c), q = a.Ba("%xAxisLabel", c), n = a.Ba("%zAxisLabel", c), v = c.name);
            l && (x = l.name, m(l.z) && (F = !0), m(l.x) && (L = !0), G = e.s(l.x, l.name), m(l.low) && m(l.high) && (A = !0), "map" === E && (M = JSCL.gjParser.Lh(l)));
            g && "linear" === g.type && (p = g.categories ? "category" : "numeric");
            z = {
              Md: e.a(f, "type"),
              Hg: p || e.a(g, "type"),
              Xd: E,
              lj: h.I("seriesType", c),
              bc: x,
              $f: M,
              Lk: G,
              jl: d,
              Id: "?" === b ? "" : b,
              Fg: "?" === q ? "" : q,
              cf: "?" === n ? "" : n,
              re: F,
              jk: L,
              dc: v,
              vd: A
            }
          })();
          b = z.Xd;
          L = z.lj;
          switch (b) {
            case "horizontal":
            case "vertical":
              return h();
            case "pie":
            case "cone":
            case "pyramid":
            case "treemap":
              return q();
            case "funnel":
              return x();
            case "radar":
              return h();
            case "gauge":
              return v();
            case "navigator":
              return h();
            case "map":
              return n()
          }
        },
        jh: function (a, b) {
          var c = String(),
            c = a;
          return -1 < c.indexOf(b) ? c.length - c.indexOf(b) - 1 : 0
        }
      }
    }(),
    v: A,
    strLib: A,
    Hb: q,
    fallThroughLib: x,
    ya: x,
    Ka: N,
    lf: H,
    apiParsers: H,
    trigLib: U,
    la: function () {
      return {
        mode: function (a) {
          function b(a, b) {
            return [].filter ? a.filter(b) : l.Wg(a, b)
          }
          a = a.slice();
          return a.sort(function (c, e) {
            return b(a, function (a) {
              return a ===
                c
            }).length - b(a, function (a) {
              return a === e
            }).length
          }).pop()
        },
        Yb: function (a) {
          a = a.slice();
          a.sort(function (a, b) {
            return a - b
          });
          var b = Math.floor(a.length / 2);
          return a.length % 2 ? a[b] : (a[b - 1] + a[b]) / 2
        },
        Me: function (a, b) {
          var c, e = b.length;
          if (0 === e) return 0;
          b = b.slice();
          b.sort(function (a, b) {
            return a - b
          });
          for (c = 0; c < e && !(b[c] > a); c++);
          return c / e * 100
        }
      }
    }(),
    g: function () {
      function a(b, d) {
        var c = {},
          k, h, f, g;
        0 < d.length && ("string" === N.K(d) ? (c = H.bb(d, "seriesType,chartType"), k = H.bb(d, "seriesType,chartType", !0), c.invalid && (c = {}, k = {})) :
          c = d);
        if (0 < b.length || !c.chartType) "string" === N.K(b) ? (h = H.bb(b, "chartType"), f = H.bb(b, "chartType", !0)) : h = b;
        k = e.F(k, f, c, h);
        switch (k.chartType) {
          case "radar":
          case "gauge":
            g = !0
        }
        return {
          Bh: c,
          Xd: h,
          fd: k,
          ui: g
        }
      }

      function b(b, d) {
        var c = "",
          e = u,
          h;
        d && (h = m(d)) && (e = a(u, h), e = e.fd);
        e.chartType && (c = e.chartType.toLowerCase());
        if (c === b.toLowerCase()) return !0
      }

      function c(b, d, c) {
        var e = u,
          h;
        c && (h = m(c)) && (c = a(u, h), e = c.fd);
        if (c = e[b])
          if (c = c.toLowerCase(), "behavior" === b) {
            if (-1 < ("," + c + ",").indexOf("," + d.toLowerCase() + ",")) return !0
          } else if (c &&
            c === d.toLowerCase()) return !0
      }

      function f(b, d) {
        var c;
        c = u;
        var e;
        d && (e = m(d)) && (c = a(u, e), c = c.fd);
        if (e = c[b]) return e.toLowerCase();
        if (!e && "seriesType" === b && "map" === c.chartType) return "map"
      }

      function g(a) {
        if (b("map") && ("object" === typeof a.map || b("map") && (e.a(a, "mapDataId") || e.a(a, "points.0.mapDataId")))) return !0
      }

      function l(a) {
        var b, d = [],
          c = [],
          k;
        v.chartType && (k = 1);
        for (var e = 0, h = a.length; e < h; e++) {
          b = !1;
          var f = a[e];
          f.i = e;
          if (k || f.type) {
            var g = k || H.bb(f.type, "chartType", "noDef");
            if (k || g.chartType) d.push([f]), b = !0
          }
          b ||
            c.push(f)
        }
        0 < c.length && d.splice(0, 0, c);
        return d
      }

      function h(a) {
        for (var b, d = [], c = [], k = 0, e = a.length; k < e; k++) {
          b = !1;
          var h = a[k];
          h.i = k;
          h.type && H.bb(h.type, "chartType", "noDef").chartType && (d.push([h]), b = !0);
          b || c.push(h)
        }
        c.length && d.splice(0, 0, c);
        return d
      }

      function q(a, b) {
        var d, c, k, h, f;
        d = f = e.F(a, u);
        var g = d.pieType,
          l = d.lineSeriesType;
        if (c = d.chartType) "pie" === c ? h = "pie" : "gauge" === c ? (h = "gauge", "arc" === f.circularGaugeType && (h = "solidgauge")) : "treemap" === c && (h = "treemap", b.layoutAlgorithm = "squarified");
        if (!h && (k = d.seriesType)) switch (k) {
          case "column":
            h =
              "column";
            break;
          case "line":
            "spline" === l ? h = "spline" : (b.lineWidth = 2, h = "navigator" === c ? "line" : "scatter");
            break;
          case "area":
            h = "spline" === l ? "areaspline" : "area";
            break;
          case "marker":
            h = "scatter";
            break;
          case "bubble":
            h = "bubble";
            b.sizeBy = d.bubbleSizingType;
            break;
          default:
            h = k
        }
        b.type = h;
        "step" === l && (b.step = !0);
        "donut" === g && (b.innerSize = e.s(e.a(F, "defaultSeries.shape.innerSize"), e.a(b, "options.jscConfig.shape.innerSize"), "30%"));
        return h
      }

      function m(a) {
        var d, c, k, h = a.type;
        b("map") && !h && (d = a.map) && (c = d.type || e.a(d,
          "features.0.geometry.type")) && (h = (k = z[c]) ? k : c);
        return h
      }

      function x() {
        return d
      }
      var n = {},
        v = {},
        u, F, d, z = {
          LineString: "line",
          MultiLineString: "line",
          Polygon: "column",
          MultiPolygon: "column",
          Point: "marker",
          MultiPoint: "marker"
        },
        L = !1;
      return {
        init: function (b) {
          var d = e.a(b, "type") || "",
            c = e.a(b, "defaultSeries.type") || e.a(b, "defaultSeriesType") || "";
          F = b;
          b = a(d, c);
          n = b.Xd || {};
          v = b.Bh || {};
          u = b.fd || {};
          L = b.ui
        },
        Qh: function () {
          return F
        },
        tc: x,
        getAdapter: x,
        getColMan: function () {
          return d.G
        },
        bj: function (a) {
          d = a
        },
        o: b,
        isType: b,
        L: c,
        hasSetting: c,
        I: f,
        settingVal: f,
        rg: function (a, b) {
          function d(a) {
            return a ? /vertical|horizontal|navigator/i.test(a) : !0
          }
          var c = f("seriesType", a);
          switch (b) {
            case "subvalues":
              return d(f("chartType")) ? !/ohlc|candlestick/i.test(c) : !1;
            case "zValue":
              c = f("seriesType");
              if ("bubble" === c) break;
              break;
            case "3d":
              if (d(f("chartType")) && !/ohlc|candlestick/i.test(c)) {
                if (/column|marker/i.test(f("chartType"))) break
              } else if (/pie|donut/i.test(f("chartType"))) break;
              return !1
          }
          return !0
        },
        Ak: a,
        Ug: function (a) {
          switch (u.chartType) {
            case "horizontal":
              e.c(a,
                "options.chart.inverted", !0);
              break;
            case "radar":
              e.c(a, "options.chart.polar", !0);
              break;
            case "gauge":
              var b = "gauge";
              "arc" === u.circularGaugeType && (b = "solidgauge");
              e.c(a, "options.chart.defaultSeriesType", b);
              e.c(a, "options.chart.type", b);
              break;
            case "polar":
              e.c(a, "options.chart.polar", !0);
              break;
            case "funnel":
              b = "inverted" === u.funnelOrientationType;
              "square" === u.funnelShapeType ? (e.c(a, "options.chart.type", "pyramid"), (b = !b) && e.c(a, "options.plotOptions.series.reversed", !b)) : (e.c(a, "options.chart.type", "funnel"),
                e.c(a, "options.plotOptions.series.reversed", b));
              e.c(a, "options.plotOptions.series.dataLabels.distance", 5);
              break;
            case "pyramid":
              b = "inverted" === u.funnelOrientationType;
              e.c(a, "options.chart.type", "pyramid");
              b && e.c(a, "options.plotOptions.series.reversed", !b);
              e.c(a, "options.plotOptions.series.dataLabels.distance", 5);
              break;
            case "cone":
              b = "inverted" === u.funnelOrientationType;
              b = !b;
              e.c(a, "options.chart.type", "funnel");
              e.c(a, "options.plotOptions.series.reversed", b);
              e.c(a, "options.plotOptions.series.dataLabels.distance",
                5);
              break;
            case "heatmap":
              e.c(a, "options.chart.type", "heatmap");
              break;
            case "treemap":
              e.c(a, "options.chart.type", "treemap");
              break;
            case "map":
              e.c(a, "options.chart.type", "map")
          }
          e.a(a, "options.plotOptions.series") || e.c(a, "options.plotOptions.series", {});
          b = q(u, e.a(a, "options.plotOptions.series"));
          e.c(a, "options.chart.type", b)
        },
        Vg: function (a, b) {
          var d = {};
          a && 0 < a.length && (d = H.bb(a, "seriesType,chartType"));
          q(d, b)
        },
        tg: function (a) {
          var b;
          n.chartType && -1 < "pie,gauge,funnel,cone,pyramid".indexOf(n.chartType) && (b = !0);
          return b && a ? h(a) : b
        },
        li: function () {
          return L
        },
        vk: function (a) {
          var b;
          n.chartType && /radar|gauge|funnel|pyramid|cone/i.test(n.chartType) && (b = !0);
          return b && a ? h(a) : b
        },
        Ta: g,
        isMapLayer: g,
        Zh: l,
        Ri: function (a, d) {
          function k(b) {
            var d, c, p;
            e = 0;
            for (h = q.length; e < h; e++)(c = q[e][b]) && "number" === typeof c && (d = a[b][c]) && (p = d.id = d.id || A.Aa(), q[e][b] = p)
          }
          var e, h, f, g, u, n;
          g = b("gauge");
          var q = a.series,
            w = b("radar"),
            m = l(a.series);
          if (g)
            if (f = a.yAxis || {}, f.pop)
              for (f = f[0], e = 0; e < d; e++) g = a.series[e], u = g.yAxis, "undefined" === typeof u && (w =
                jQuery.extend(!0, null, {}, f), g.yAxis = w.id = A.Aa(), a.yAxis.push(w));
            else
              for (a.yAxis = [], e = 0; e < d; e++) a.yAxis.push(jQuery.extend(!0, null, {}, f)), a.series[e].yAxis = e;
          else if (w && m && 1 < m.length) {
            n = f = a.yAxis || {};
            f.id = f.id || A.Aa();
            if (f.pop)
              for (k("yAxis"), f = f[0], a.yAxis = [], F = 0, D = m.length; F < D; F++) {
                var z = m[F],
                  x = void 0;
                u = void 0;
                for (e = 0; e < z.length && !(g = a.series[z[e].i], 0 === e && (x = c("radarType", "spider", g) ? "polygon" : "circle"), u = g.yAxis); e++);
                if ("undefined" === typeof u) w = jQuery.extend(!0, null, {}, f), 0 < n.length && (w.id =
                  A.Aa()), u = w.id, a.yAxis.push(w), x && (w.gridLineInterpolation = x);
                else if (w = C.Ea(n, u)) x && (w.gridLineInterpolation = x), a.yAxis.push(w);
                for (e = 0; e < z.length; e++) g = a.series[z[e].i], g.yAxis = u
              } else {
              a.yAxis = [];
              for (var F = 0, D = m.length; F < D; F++) {
                var z = m[F],
                  w = jQuery.extend(!0, null, {}, f);
                0 < a.yAxis.length && (w.id = A.Aa());
                a.yAxis.push(w);
                for (e = 0; e < z.length; e++) a.series[z[e].i].yAxis = F, 0 === e && c("radarType", "spider", a.series[z[e].i]) && (w.gridLineInterpolation = "polygon")
              }
            }
            n = f = a.xAxis || {};
            f.id = f.id || A.Aa();
            if (f.pop)
              for (k("xAxis"),
                f = f[0], a.xAxis = [], F = 0, D = m.length; F < D; F++) {
                z = m[F];
                u = x = void 0;
                for (e = 0; e < z.length && !(g = a.series[z[e].i], 0 === e && (x = c("radarType", "spider", g) ? "polygon" : "circle"), u = g.xAxis); e++);
                if ("undefined" === typeof u) w = jQuery.extend(!0, null, {}, f), 0 < n.length && (w.id = A.Aa()), u = w.id, a.xAxis.push(w), x && (w.gridLineInterpolation = x);
                else if (w = C.Ea(n, u)) x && (w.gridLineInterpolation = x), a.xAxis.push(w);
                for (e = 0; e < z.length; e++) g = a.series[z[e].i], g.xAxis = u
              } else
              for (a.xAxis = [], F = 0, D = m.length; F < D; F++)
                for (z = m[F], w = jQuery.extend(!0,
                  null, {}, f), 0 < a.xAxis.length && (w.id = A.Aa()), a.xAxis.push(w), e = 0; e < z.length; e++) a.series[z[e].i].xAxis = F
          }
        }
      }
    },
    yb: R,
    errorLib: R,
    Zc: V,
    axisLib: V,
    Tj: ha,
    drawLib: ha,
    Yk: y,
    G: J,
    Qi: l,
    pF: l,
    Zg: function () {
      function a(b) {
        for (var c = b[0], k = c[0], e = c[0], f = c[1], c = c[1], h, g, l = 0, q = b.length; l < q; l++) {
          var n = b[l];
          (h = n[0]) > e && (e = h);
          h < k && (k = h);
          (g = n[1]) > c && (c = g);
          g < f && (f = g)
        }
        return [k, f, e - k, c - f]
      }
      return {
        ib: function (b) {
          var c = [],
            e;
          if (b && b.length) {
            for (var f = 0, g = b.length; f < g; f++)
              if (e = b[f]) c.push([e[0], e[1]]), c.push([e[0] + e[2], e[1] + e[3]]);
            return a(c)
          }
        },
        Tb: a
      }
    }()
  });
  window.JSC = jQuery.extend(!1, null, window.JSC, {
    pointsFromArray: G.Ji,
    smartPalette: P
  });
  jQuery.extend(jQuery.easing, {
    easeOutCirc: function (a, b, c, e, f) {
      return e * Math.sqrt(1 - (b = b / f - 1) * b) + c
    },
    easeInQuad: function (a, b, c, e, f) {
      return e * (b /= f) * b + c
    },
    easeOutQuad: function (a, b, c, e, f) {
      return -e * (b /= f) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, e, f) {
      return 1 > (b /= f / 2) ? e / 2 * b * b + c : -e / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, e, f) {
      return e * (b /= f) * b * b + c
    },
    easeOutCubic: function (a, b, c, e, f) {
      return e * ((b = b /
        f - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, e, f) {
      return 1 > (b /= f / 2) ? e / 2 * b * b * b + c : e / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, e, f) {
      return e * (b /= f) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, e, f) {
      return -e * ((b = b / f - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, e, f) {
      return 1 > (b /= f / 2) ? e / 2 * b * b * b * b + c : -e / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, e, f) {
      return e * (b /= f) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, e, f) {
      return e * ((b = b / f - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, e, f) {
      return 1 > (b /= f / 2) ? e / 2 * b *
        b * b * b * b + c : e / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, e, f) {
      return -e * Math.cos(b / f * (Math.PI / 2)) + e + c
    },
    easeOutSine: function (a, b, c, e, f) {
      return e * Math.sin(b / f * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, e, f) {
      return -e / 2 * (Math.cos(Math.PI * b / f) - 1) + c
    },
    easeInExpo: function (a, b, c, e, f) {
      return 0 == b ? c : e * Math.pow(2, 10 * (b / f - 1)) + c
    },
    easeOutExpo: function (a, b, c, e, f) {
      return b == f ? c + e : e * (-Math.pow(2, -10 * b / f) + 1) + c
    },
    easeInOutExpo: function (a, b, c, e, f) {
      return 0 == b ? c : b == f ? c + e : 1 > (b /= f / 2) ? e / 2 * Math.pow(2, 10 * (b - 1)) + c : e / 2 *
        (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, e, f) {
      return -e * (Math.sqrt(1 - (b /= f) * b) - 1) + c
    },
    easeInOutCirc: function (a, b, c, e, f) {
      return 1 > (b /= f / 2) ? -e / 2 * (Math.sqrt(1 - b * b) - 1) + c : e / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, e, f) {
      a = 1.70158;
      var g = 0,
        h = e;
      if (0 == b) return c;
      if (1 == (b /= f)) return c + e;
      g || (g = .3 * f);
      h < Math.abs(e) ? (h = e, a = g / 4) : a = g / (2 * Math.PI) * Math.asin(e / h);
      return -(h * Math.pow(2, 10 * --b) * Math.sin(2 * (b * f - a) * Math.PI / g)) + c
    },
    easeOutElastic: function (a, b, c, e, f) {
      a = 1.70158;
      var g = 0,
        h = e;
      if (0 ==
        b) return c;
      if (1 == (b /= f)) return c + e;
      g || (g = .3 * f);
      h < Math.abs(e) ? (h = e, a = g / 4) : a = g / (2 * Math.PI) * Math.asin(e / h);
      return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * f - a) * Math.PI / g) + e + c
    },
    easeInOutElastic: function (a, b, c, e, f) {
      a = 1.70158;
      var g = 0,
        h = e;
      if (0 == b) return c;
      if (2 == (b /= f / 2)) return c + e;
      g || (g = .3 * f * 1.5);
      h < Math.abs(e) ? (h = e, a = g / 4) : a = g / (2 * Math.PI) * Math.asin(e / h);
      return 1 > b ? -.5 * h * Math.pow(2, 10 * --b) * Math.sin(2 * (b * f - a) * Math.PI / g) + c : h * Math.pow(2, -10 * --b) * Math.sin(2 * (b * f - a) * Math.PI / g) * .5 + e + c
    },
    easeInBack: function (a, b, c, e, f, g) {
      void 0 ==
        g && (g = 1.70158);
      return e * (b /= f) * b * ((g + 1) * b - g) + c
    },
    easeOutBack: function (a, b, c, e, f, g) {
      void 0 == g && (g = 1.70158);
      return e * ((b = b / f - 1) * b * ((g + 1) * b + g) + 1) + c
    },
    easeInOutBack: function (a, b, c, e, f, g) {
      void 0 == g && (g = 1.70158);
      return 1 > (b /= f / 2) ? e / 2 * b * b * (((g *= 1.525) + 1) * b - g) + c : e / 2 * ((b -= 2) * b * (((g *= 1.525) + 1) * b + g) + 2) + c
    },
    easeInBounce: function (a, b, c, e, f) {
      return e - jQuery.easing.Ch(a, f - b, 0, e, f) + c
    },
    easeOutBounce: function (a, b, c, e, f) {
      return (b /= f) < 1 / 2.75 ? 7.5625 * e * b * b + c : b < 2 / 2.75 ? e * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? e * (7.5625 *
        (b -= 2.25 / 2.75) * b + .9375) + c : e * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, e, f) {
      return b < f / 2 ? .5 * jQuery.easing.Uj(a, 2 * b, 0, e, f) + c : .5 * jQuery.easing.Ch(a, 2 * b - f, 0, e, f) + .5 * e + c
    }
  })
})();
(function () {
  function J() {
    this.init.apply(this, arguments)
  }
  var y = function () {
    return JSCL.j.a(window, "performance.now") ? function () {
      return window.performance.now()
    } : JSCL.j.a(window, "performance.webkitNow") ? function () {
      return window.performance.webkitNow()
    } : function () {
      return (new Date).getTime()
    }
  }();
  J.prototype = {
    init: function () {
      this.log = []
    },
    log: [],
    Ua: function (B, v) {
      this.log.push({
        name: B,
        label: v,
        time: y()
      });
      "hca" === B && "render End" === v && this.xa()
    },
    xa: function () {
      for (var y = this.log[0].time, v = y, m = 0, a = this.log.length; m <
        a; m++) {
        var g = this.log[m];
        console.log(g.name + " " + g.label + " " + parseInt(g.time - y) + " (Total: " + parseInt(g.time - v) + ")");
        y = g.time
      }
    }
  };
  window.JSCL = jQuery.extend(!0, null, window.JSCL, {
    Pi: J
  })
})();
(function () {
  var J = function () {
    var y = function () {
      var v = JSCL.md("palette").members,
        m = [],
        a;
      for (a in v) m.push(a);
      return m
    }(),
      B = "049DdFE653534FE35FEFE05D150B1d9AeeC8C2808ED7C1F1eFEdAF2955B6eA738F5424378BE3CA87A893B3F84E154F5CD992D8C2903B9B09DC9F9F95F035FCACBFA0381830202FE9CCEFEFBCC9BdD7311A3340E7E4957B823E6BC0DE8BFC70D5987BD5C923|9C9Ad9C3063cCECEc63e63d8284e65CECECdFee84dbcebd84e8484a8284ebeCdFCEcCEdCEc9C9CCcF9ACECE9AcCF9C3165d31CFCE9CCFbCFb9Ab65e63659C949694e3063319A63e3e0313e09C3e09C306331309C313031accadacdbbbd84a82a848482e84e84e8284C6C3C6848284|4B649A88E2D869838eD93FA5EE4034088B2FAEB8E9ED266666FA7CD992C85203D4804FAFC7DD57F9EEFC335BA63D2F81C238683D996FEAB90342172309AE9538772BC16DF07420ADC7A4D9ED99DAA029BAEB076A40145A6485769C85B624F030670AD47A6BC1814E07CA65E495FD0F2881ED681E873AE862D16CC889C78AE792B499869EE625BDE959C952859E55CE88675403C8BCC|B2213DBAC01464AF4ADA5B8AEE971F989EDDB7D3E68B44D7DDC9870157E10EA61EEE6B07B9CFB4B24B420C78B02E5302CE296DF22889FD27DB64DCF58C635867CCB46CFE2C17DDCD290587A37ECB27AF7685322D741B7E94F0442B54F2BD25E7E9A3AAFBC054D4B64A9EC8220159A70F3D2D7F07302AF2B035D60DE7EB89DA6ADE9FB9D9202AED22AF7BE2D4515B93979B1B16C53E1E|E68E423F5C79E5D5ADEC6CBBE66457F9E2D796A6A28121DB6D38E9C36845D6CA2199DED1532E506469D45014C4203AFB07CE2E94B32C06656D65D0238E216D6715A1994C8485A6B487313CCC310C174DFDEDBB99164216F3937963EC5D2DD54867E7FD2285EC778128790D82EE3834604D8325A064D350D28AA5B70A21B8575A5AF365480DF3C610753A709C3492045A45039ED80834|3D88419BE23923AAC40154C4141CE1507A0314A091B380FC677487E15195AD6E9B8C285ACF5735E1DF6C4FEC798AC2D30DE68CCFDF87DA890744336DB040582E53E52887F3867F22CD32C024649382DCB1B2D46909DC8E14B09D538A23C6309E13209892613ADF85666902ADC6B62473C056BBFD6AEE25765714D55532F4FD0701211044F9EF7A76D24F029ED9E04CF978DEC9CC0A32|9ADB5E61F34C0C8DEFC21EC7737198D5D73F6085AE67C358B0C0BA2FE63093EF6B377F4DB066102F3B8CCA0F7ACA720AA4D70F6E875B33331805AF3390DCA5BF2E2D5B3CF14A24702E304A229BB4DCE54EB0890E2024681e44B35ABB6DC9E5EE50BDF4D6E35175AB29D3F561011966327C9E4DE52979E09C44A37A51478B95191EB3B90D38F7618992E5B81E411eF2B4D184EBF6BE|860104dD62E583410c6dF7e0551314FEdAF7F4D1Ccb4502830B0CF6FCDAaFDdB1d9D02EE1413AE6A29DE56eE4A711BB1313D195e61140DBCB037402E13B8C267B86D163F1815C2C8955E4520A7B817B851175F1A13C4CAB4aC1C898B88918AD3122815F2DA05813A68D2089291E977E12|181161D14524F9F72B83EA282BFBCDA395DEDC2ECE4133F5DA011D01A468837EB8EA917CC3B9F0C972E8958DFAF8717754D6A67B1D2CD14524E18514AC7F1384875DBA5965D42A5D8E2C6F6059A9A4A0D4F4F226A8F96072FEDFCCC2F6F69AEEAFA9FCFB94996BE6B98E569B9EA89E5FB8E9D97C7ACAC7E6AA6F9E9DB0A0AA56BE817BCACACF63CFCEEBE86F69D0FDCCE5E89C12FEe|4A2123D52E06B38D95dDBC5C2644482B2B8AE7EA1dE19C8D8A7E553C15DCD2D5dCA95DAC5E4DB9F62dDBD9BC9F95E49291484C50FAB36C9A6343E57B63BED7DA92392FD7CEC2d95eD0BBC1759980ADC0DFE5BFD2E0CC84C0D0C5CDD25EdC7C3C1dF1C69658F1F98E61693CA86567FB4C2688A259cC5A5C18ACAEBdC6A5D1A4845C5D531ADDCFA2D67F45AA3B33dC667|8A98DB3C59BA16265173A278B7F5Dd8F7A05CC3A192973C5D64488B775BA64E1B44475F714B96646DC4D02154F171A46F1842ECA991F8C12FED8F11F1CFC4D8BEF3F8FA2C3248862E0A1CA18BB670A3DD0A0D460A0D4655D3EBCDdD579DAC734879694E3A719686D18A56418775A47BD9A36773D98BC8EB4B73A7DC96B52A0951184B0D8BEF31E4AB3B1B7A1848BD4AAB5D2B1B7A14A67C5|BF2D305E8D34855E26a9FC2dC380B75174BED869349648B31E4BCCD150B159B6E6A36079C9EEd7BD76CdE648E4F6C29BAEAEA2dBA8AB74957C0C2F3E5D8dF285AAd45E0C18CBEE7A437942DDDde216C54DDF78F6174618BE767D89A7C7C8B59234172A3AD680C866D82789410869FBD19CDA087CB5980E78F5CAD5054A0AE7C321727308B113C2A573F2F0F4EA36E68|2A3D2FBCD0A4F7dD1AE708AF5ADBDF8D4DCB1E6d7AAEB38FAF6E101811B6C4B0dBEC4D06F71DFCC65BBD8BAD77856FDdB6E67347B8EDd47C3F2F89E8B834C37A1C261E2dCA3B491F52A09593B7D3647AAAD7ccD43F4E5DA4BD74dC49Ad6044CAD5C974A05B7383689B4427BE8B94d8C63D9c88ADC8D5A37dFDACAE488A1E997CC52A095849B50618C73C9DCB6|D1CEBC914927aDe04AE7C8C6F8EBbFBD0C75D65C3e7Ce9F3Ce8873e98A646648E8EC7E6827D4E6FA573737D83DFB7ADd2525E49F76F3EAF2FBF794d6E6EE20106A017174B2722e892F9CCB9685D1D215EDEA35C7F1186F3F67801C655567905D8DF64041A92E2EE38B97FBC197B5B3B3FEDD96FDD1F2DB391988010442e11eCE7498E6eeFC88eA3D2e447D|2263093BDB09F0d5EBCE86C7A7124AA9D2B5C770EC7E207CBB60B3E89080A1C0CdFA3C7CE96C514B18B09F09AFD408F8EeE4FA30715480DAdF3C513A107E7109AFD40815480D2D992A98BB7B5D5F307C833D4057217FA4328B932E3064220A1C0CB3C45E7EBC7D7CBC803A3D1E7B812B6E9C30ABB53B3E772615341587AD565D5F30|D0B85D648F8CF892eF9F29BA7D3EdAF168676A35F0C963dEF7AC6D332AC8827F3D864dFE49D3ED62B2AD61687C3DB0A89AB07286F6B899CEA95C6E581CCFB999F5A864B4CC9D516862D4F8A24E150ACF6E27718E258F889ED0C8996F685BB3AC29E9D23670370C7867669D721AB4DA55B06F52324C1936773D98BC8E483E46D8BEF313706B38384F738C5EdDEb64e998A50|173C64648F8C51CdF95cA7D3EF03343C676A35C49D35dEF7AC6D332B0EBBAE1dB6dFE499E68e181F03687C3DCDdD5DEFCdE3DEF22F2F696E6EBE03639F55D3EBF1C4B5e0A3F52A0951184B011B08C7DC96B9A9865CCCD6DdE23EFDFDB7FAB07A70370C786766e25595B93E09893BD5A809F36773D98BC8EF2CA8ED8BEF313706B38384F2CA6CB08F4BA8DF36E998A50|64eeC864eA08Cee64a6432e6464e64|4682B49ACD32708090CD853FB22222dA5bcd45eA0522DdD7e3CB37154A9DD6A5ACD4169E19370DBBA55D366CDAAD8BFD8d69B4DB7093|8Beb8Ce8B4513B8860B808e06B8E23556B2Fe64e2E8B57e8B8BeBdF4682B4ee80483D8B4Be828e080DC143Ca94eD3|468966dF0A5dB03BB649268E28e|7D8A2EC9D787F9D690dC0A9d8598|393A3DDBe485D9E9BC8DBBFE0FCEB|595441B9B09DDDE8EB69BFDE4A8797|7D7E9ABFC7B2D8D6B0D0C3B39B7A76|C44C51dB6B8dEFB6A2B5BF5F8CA3|FCdF5D1DBBD91AA9D3E606F193441|B0CC99677E52B7CA79F6E8B189725B|F7F2B2ADCF4F84815B4A1A2C8E3557|E8E595D0A82540627C26393DdFAE4|5A1FeD1570DFDE792477725A9CC66|595241B8AE9CDED7C6ACCFCC8A0917|66858D93A299C0BFA9dE7D5dBEAC|dF0A3B8CC6E4B6e0E4F8de4460|C7F2F547A0A1781515B8864CD9C39C|3B180182561AdF3D2ABB8864F462E|C3d939698656A4A2CC1420Ed8C47|759C52C2E858dE3A6E8A2989C5241|123B4AE6cC7C09AdE427dA908|ED9877B0B9ADAE555B485566837076|B8ECD7083643B1Ee1CEF09D476C5E|323240968C63FDdC9dD175C3C967|F0E14CdBB20FA7B12E8530559CC0D|4059529C9B7AdD393d974d54F29|762B1B807227CCBF7AdEF9860B0A1|5D4970372049F1BAF3FAEEd59535E|F9EBAE7898983C6573E8B54DB14D1C|B9121B4C1B1BF6E497FCFAE1BD8D46|B6D09C7273685C5C66533E3ECC9585|8F9AB3B0D0Dd1F3F0dACA1A61618|d5B2BB1221C34393E8CC6D7dDA8C|E51E19FC7529F9F23D8DEA550962B4|FD814C2DD5ECd364DA1F886dF37D|324732EADAD27E1F2DA1861D97A9CA|FA5E73E6DDD399CE5D43456DEB9765|3A8394C6EDF7D9F2B0dD1C1B71E4F|463531F57C75C380C921D4F6A5EBB0|997F87F7D6CDE6FCB5C5E0DC454B65|463531F57C75C380C921D4F6A5EBB0|070707FBDB5BEC360880C3d448B14|E37484CEDDE499B18DE9CD6CEAB79A|CAD6C35E7277F99DB1FBBFCCF6E1DC|F9FDF32B3532D33D3EC3B9ADe5773|94B13A2C81C06B4687960303F16723|DCE7B5B0C4CEFE4F13E6384D17304B|DA1C1C68DA1CF1E80821A4D8FC6A08".replace(/e/g, "00").replace(/d/g,
        "FF").replace(/c/g, "FFFF").replace(/b/g, "00FF").replace(/a/g, "000000").split("|");
    return {
      get: function (v) {
        "undefined" === typeof v && (v = 0);
        v.toFixed ? v = B[v] : v.charAt ? (v = v.toLowerCase(), v = B[JSCL.j.kc(y, v)]) : v = B[0];
        if (v) return ("#" + v.match(/.{1,6}/g).join("#")).match(/.{1,7}/g)
      },
      colorToPalette: function (v, m, a, g) {
        return JSCL.m.rf(v, m, a, g)
      }
    }
  }();
  window.JSCL = jQuery.extend(!0, null, window.JSCL, {
    He: J
  });
  window.JSCL.palettes = J
})();
(function () {
  function J() {
    this.init.apply(this, arguments)
  }

  function y(a) {
    return "undefined" === typeof a ? !1 : !0
  }
  var B = "circle diamond square triangle triangle-down four-point-star five-point-star six-point-star seven-point-star".split(" "),
    v = {
      color: "#323232",
      offsetX: 1,
      offsetY: 1,
      opacity: .05,
      width: 4
    },
    m = "jL";
  J.prototype = {
    json: {},
    xe: "",
    Nd: [],
    Dg: [],
    status: 0,
    C: {},
    chartObject: {},
    Ga: !1,
    va: !1,
    Pe: "",
    Oe: !0,
    Ha: !1,
    si: !1,
    zi: !1,
    Fb: {},
    Vf: !1,
    Hd: !1,
    g: {},
    G: {},
    jb: !1,
    Qd: "%yValue",
    Pd: "%yValue",
    u: JSCL,
    m: void 0,
    ec: [],
    ud: !1,
    Te: !1,
    Sb: [],
    S: void 0,
    wd: !1,
    Bd: void 0,
    Ic: void 0,
    xb: void 0,
    Ad: void 0,
    Cd: void 0,
    ra: void 0,
    Yf: "",
    V: void 0,
    Xc: void 0,
    Wc: void 0,
    Vc: void 0,
    hf: void 0,
    reset: function () {
      this.status = 0;
      this.C = {};
      this.chartObject = {};
      this.Vf = this.va = this.Ga = !1;
      this.Pd = this.Qd = "%yValue";
      this.u = JSCL;
      this.m = void 0;
      this.ec = [];
      this.Te = this.ud = !1;
      this.Sb = [];
      this.wd = !1;
      this.json = {};
      this.options = {}
    },
    Lb: function (a) {
      function g() {
        f.g.o("map") && (l = JSCL.gjParser.Uh(f, f.C.ua.Ia)) && f.cg(l)
      }
      var f = this,
        l;
      f.u.j.c(f.options, "global.canvasToolsURL", f.Yf +
        "canvas-tools.js");
      f.yf();
      f.S && f.S.Ua("hca", "render Start");
      f.options.chart.renderTo = f.C.targetElement;
      f.C.ua.ve ? "undefined" !== typeof JSFCharting && (f.chartObject = new JSFCharting.StockChart(f.options, void 0, f), f.status = 2) : "undefined" !== typeof JSCharting && (JSCharting.setOptions({
        lang: f.options.lang
      }), f.chartObject = new JSCharting.Chart(f.options, g, f), f.status = 2);
      f.S && f.S.Ua("hca", "render End");
      a && a.apply(f.C, [f.C])
    },
    init: function (a, g, f) {
      var l = this;
      l.reset();
      l.S = g.gTimer;
      l.g = g.ua.g;
      l.g.bj(l);
      l.G = g.ua.G;
      l.json = a;
      l.G.init(l);
      l.Yf = f;
      l.parseSeriesCollectionTokens = l.Kb;
      (function () {
        var a = window.JSC.getVersion().split("."),
          f = new Date;
        ("0" + (f.getMonth() + 1)).slice(-2);
        ("0" + f.getDate()).slice(-2);
        7 === a.length && 6 === a[6].length && (a = a[6], a = new Date(parseInt("20" + a.substr(0, 2)), parseInt(a.substr(2, 2) - 1), parseInt(a.substr(4, 2))), l.Vc = parseInt(((new Date).getTime() - a.getTime()) / 864E5))
      })();
      l.m = l.u.m;
      m = JSCL.j;
      l.C = g;
      g.ua.ve && (l.va = !0);
      l.S && l.S.Ua("hca.init", "Start");
      if (0 === l.C.rd && 0 === window.JSC.lState()) l.S && l.S.Ua("hca",
        "translate StartA"), l.translate(a, function (a) {
          l.options = a;
          l.status = 1;
          l.S && l.S.Ua("hca", "translate End")
        });
      else var x = setInterval(function () {
        0 === l.C.rd && 0 === window.JSC.lState() && (clearInterval(x), l.S && l.S.Ua("hca", "translate StartB"), l.translate(a, function (a) {
          l.options = a;
          l.status = 1;
          l.S && l.S.Ua("hca", "translate End")
        }))
      }, 5)
    },
    yc: function (a) {
      var g = this.json.xAxis,
        f = this.u;
      if (g.pop) {
        var l = 0,
          m, e = g.length,
          q, v, C, g = [];
        for (l; l < e; l++) {
          m = l;
          q = a;
          v = [];
          var y = C = void 0;
          C = 0;
          for (var A = q.length; C < A; C++) y = q[C], void 0 !==
            y.xAxis ? y.xAxis === m && v.push(y) : 0 === m && v.push(y);
          q = v;
          C = this.u.na.Hf(q);
          g.push(C);
          m = 0;
          for (y = q.length; m < y; m++) v = q[m], f.na.mf(C, v)
        }
        this.Y = g
      } else
        for (this.Y = g = this.u.na.Hf(a), l = 0, e = a.length; l < e; l++) f.na.mf(g, a[l]);
      return a
    },
    Jb: function (a, g, f, l, x, e, q) {
      function v(a) {
        if ("undefined" !== typeof a && null !== a) {
          if ("string" === typeof a) return Date.parse(a);
          if (a.getDate) return a.getTime();
          if (a.pop)
            for (var e = 0, k = a.length; e < k; e++) a[e] = v(a[e])
        }
        return a
      }

      function C(a, e) {
        if ("undefined" !== typeof a) {
          if ("string" === typeof a) return e &&
            (e.Xb = !1, e.zc = !1, e.Qf = !0), a;
          if (a.getDate) return e && (e.zc = !1, e.ji = !0), a.getTime();
          e && (e.ni = !0, e.Xb = !1);
          return a
        }
        e && (e.Xb = !1, e.zc = !1)
      }

      function O(a) {
        function e(a, b, c) {
          return a = a.match(new RegExp('.*".*' + b + '.*"', "i")) ? a.replace(new RegExp(b, "gi"), '"+' + c + '+"') : a.match(new RegExp(".*'.*" + b + ".*'", "i")) ? a.replace(new RegExp(b, "gi"), "'+" + c + "+'") : a.replace(/%name/gi, c)
        }
        var k, b, c, f = {};
        if (a)
          for (k in a)
            if (a.hasOwnProperty(k))
              if (b = a[k], "string" === typeof b) {
                c = b;
                for (var g = [
                  [c, "%name", "this.name"],
                  ["%xValue", "this.x"],
                  ["%yValue", "this.y"],
                  ["%zValue", "this.z"],
                  ["%seriesName", "this.series.name"],
                  ["%seriesPointCount", "this.calcs.seriesPointCount"],
                  ["%color", "this.color"],
                  ["%percentOfSeries", "this.calcs.percentOfSeries"],
                  ["%percentOfTotal", "this.calcs.percentOfTotal"],
                  ["%percentOfGroup", "this.calcs.percentOfGroup"],
                  ["%id", "this.id"],
                  ["%name", "this"]
                ], l = 0, h = g.length; l < h; l++) c = e(c, g[l][0], g[l][1]);
                c = c.replace(/\n/g, "");
                switch (k) {
                  case "select":
                    c = "[(function (e){ return evProxy(e,function(e){ return " + c + "}); })][0]";
                    break;
                  case "unselect":
                    c = "[(function (e){ return evProxy(e,function(e){ return " + c + "}); })][0]";
                    break;
                  case "click":
                    c = "[(function (e){ return evProxy(e,function(e){ return " + c + "}); })][0]";
                    break;
                  case "mouseOut":
                    c = "[(function (e){ return evProxy(e,function(e){ return " + c + "}); })][0]";
                    break;
                  case "mouseOver":
                    c = "[(function (e){ return evProxy(e,function(e){ return " + c + "}); })][0]";
                    break;
                  case "remove":
                    c = "[(function (e){ return evProxy(e,function(e){ return " + c + "}); })][0]";
                    break;
                  case "update":
                    c = "[(function (e){ return evProxy(e,function(e){ return " +
                      c + "}); })][0]";
                    break;
                  default:
                    c = "[(function (e){" + c + " })][0]"
                }
                b = c = eval('"strict mode"; ' + c.toString());
                f[k] = c
              } else f[k] = function (a) {
                var c = N.get(this.options.id),
                  e = b;
                c.calcs = c.adapter.If(c.config, c.series.config);
                return e.apply(c, [a])
              };
        return f
      }

      function A(a) {
        var e = {},
          k = a.states;
        R(e, a, "enabled", "visible");
        R(e, a, "fillColor", "fill", N.m.Vd);
        R(e, a, "lineColor", "outline.color");
        R(e, a, "lineWidth", "outline.width");
        R(e, a, "radius", "size");
        R(e, a, "symbol", "type");
        "none" === a.type && (e.symbol = "circle", e.enabled = !1);
        k && (k.hover && m.c(e, "states.hover", A(k.hover)), k.select && m.c(e, "states.select", A(k.select)));
        e.jscConfig = a;
        return e
      }
      var N = this,
        H = N.u.na,
        G, R = m.f,
        B;
      q = q || {};
      B = m.a(q.xj, "scale.type") || m.a(N.json, "xAxis.scale.type");
      g = m.a(q.Aj, "scale.type") || m.a(N.json, "yAxis.scale.type");
      q.ml = g;
      g = N.g.o("treemap");
      a = H.kb(a, B, !1, N.va, q);
      if (m.Db(a)) return l && a[0].getTime && (a[0] = a[0].getTime()), a;
      R(a, a, "y", "y", v);
      R(a, a, "yStart", "yStart", v);
      l = {};
      B = "undefined" !== typeof a.y;
      H = !("undefined" !== typeof a.y || "undefined" !== typeof a.x);
      a.name ? (l.name = a.name, N.U && (N.U.Qf = !0)) : N.U && B && (N.U.Of = !1);
      void 0 !== a.x ? l.x = C(a.x, N.U) : N.U && (N.U.Xb = !1, N.U.zc = !1);
      B = 0;
      void 0 !== a.open && (l.open = a.open, B++);
      void 0 !== a.high && (l.high = a.high, B++);
      void 0 !== a.low && (l.low = a.low, B++);
      void 0 !== a.close && (l.close = a.close, B++);
      4 !== B && (B = !1);
      R(l, a, "map", "map");
      R(l, a, "parent", "parent");
      g ? R(l, a, "value", "y") : (R(l, a, g ? "value" : "y", "y"), a.hasOwnProperty("yStart") ? q.vd = !0 : (q.Rf = !0, "column" === N.g.I("seriesType", q.fb) && (q.pe = !0)));
      R(l, a, "z", "z");
      R(l, a, "low", "yStart");
      B || R(l, a, "high", "y");
      void 0 !== (G = a.z) && (N.g.o("gauge", q.fb) ? 1 >= G && m.c(l, "dial.radius", 100 * G + "%") : N.g.o("pie", q.fb));
      G = y(a.opacity) ? 1 - a.opacity : a.transparency;
      N.g.o("gauge", q.fb) && (m.c(l, "dial.borderColor", N.m.O(m.a(a, "outline.color"), G)), m.c(l, "dial.borderWidth", m.a(a, "outline.width") || 1));
      void 0 !== a.url && (l.url = a.url);
      void 0 !== a.tooltip && (l.tooltip = a.tooltip);
      void 0 !== a.label && (q = N.Ma(a.label, "dataLabels"), l.label = a.label, R(l, q, "dataLabels.x", "x"), R(l, q, "dataLabels.y", "y"), R(l, a, "dataLabels.rotation",
        "label.rotation"), m.a(l.label, "style.color") || m.a(l.label, "color"), m.c(l, "dataLabels.style.textShadow", "none"), m.c(l, "dataLabels.style.HcTextStroke", null), N.jb || !a.label.text && !a.label.visible || (m.c(l, "dataLabels.enabled", !0), m.c(l, "dataLabels.formatter", N.gd)));
      void 0 !== a.attributes && (l.attributes = a.attributes);
      a.marker && (l.marker = A(a.marker));
      y(G) && m.c(l, "transparency", G);
      R(l, a, "sliced", "exploded");
      a.seriesId = f;
      l.id = N.Wb(a, a.id);
      l.seriesId = f;
      a.annotation && !H && N.Sb.push([l.x, l.y, a.annotation, x]);
      void 0 !== a.events && (l.events = O(a.events));
      a.drilldown && (a = N.cb(a.drilldown, null, null, f, e), N.ud = !0, l.drillID = a.id);
      return l
    },
    cb: function (a, g, f, l, x) {
      var e = this,
        q = {},
        v = a.points,
        C, O, A = [],
        N = v ? v.length : 0,
        H = a.defaultPoint,
        G = !1,
        R, B = {
          fb: q,
          pe: null,
          vd: null,
          Rf: null
        },
        J, P = m.f,
        k, b;
      a.id = q.id = e.Wb(a, a.id);
      a.type && e.g.Vg(a.type, q, e);
      b = e.g.I("seriesType", a);
      if (a.palette)
        if (a.palette.charAt) C = JSCL.He.get(a.palette);
        else if (a.palette.length)
          for (C = [], O = 0, k = a.palette.length; O < k; O++) C.push(e.m.wb(a.palette[O]));
      C = JSCL.R.Vb(a,
        "x", e.json);
      k = JSCL.R.Vb(a, "y", e.json);
      B.xj = C;
      B.Aj = k;
      if (O = C.spacingPercentage) q.groupPadding = O;
      if (O = C.staticColumnWidth) q.pointWidth = O;
      "column" === b && "time" === m.a(k, "scale.type") && (B.pe = !1);
      for (O = 0; O < N; O++) C = v[O], C.drilldown && (G = G = !0), A.push(e.Jb(C, e.U, q.id, f, a.onSeries, void 0, B));
      "column" === b && B.vd && !B.Rf && (q.threshold = null);
      !1 === B.pe && (q.threshold = null, e.U.ki = !0);
      q.data = A;
      "navigator" === e.g.I("chartType") && (a.color && !m.a(a, "defaultPoint.color") ? P(a, a, "defaultPoint.color", "color") : (l || x) && m.c(a, "defaultPoint.color",
        x));
      q.name = a.name;
      P(q, a, "xAxis", "xAxis");
      P(q, a, "yAxis", "yAxis");
      P(q, a, "lineWidth", "line.width");
      P(q, a, "dashStyle", "line.dashStyle");
      P(q, a, "animation", "animation");
      P(q, a, "allowPointSelect", "pointSelection");
      P(q, a, "enableMouseTracking", "mouseTracking");
      P(q, a, "stickyTracking", "mouseTracking.sticky");
      P(q, a, "showInLegend", "legendEntry.visible", null);
      P(q, a, "legendIndex", "legendEntry.sortOrder");
      P(q, a, "showCheckbox", "legendEntry.checkBox");
      P(q, a, "slicedOffset", "explodedOffset");
      P(q, a, "dataLabels.enabled",
        "defaultPoint.label.visible",
        function (a) {
          a && (m.c(q, "dataLabels.style.textShadow", "none"), m.c(q, "dataLabels.style.HcTextStroke", null))
        });
      P(q, a, "connectNulls", "emptyPointMode", function (a) {
        return "ignore" === a
      });
      P(q, a, "color", "defaultPoint.color");
      P(q, a, "dataGrouping.approximation", "dateGrouping.calculation");
      P(q, a, "dataGrouping.enabled", "dateGrouping.enabled");
      P(q, a, "dataGrouping.groupPixelWidth", "dateGrouping.groupingThreshold");
      P(q, a, "dataGrouping.smoothed", "dateGrouping.centerGroups");
      P(q, a, "dataGrouping.units",
        "dateGrouping.units");
      f = m.a(a, "size");
      y(f) && (f.pop ? J = {
        l: f[0],
        h: f[1]
      } : J = {
        l: f.min,
        h: f.max
      }, m.c(q, "minPointLength", J.l), P(q, J, "minSize", "l"), P(q, J, "maxSize", "h"));
      J = m.a(a, "angle");
      f = m.a(e.json, "defaultSeries.angle");
      J = "object" === typeof J || "object" === typeof f ? m.F(J, f) : m.s(J, f);
      y(J) && (J = JSCL.Ka.Ie(J), m.c(q, "startAngle", J.start), m.c(q, "endAngle", J.end), m.c(e.options, "pane.startAngle", J.start), m.c(e.options, "pane.endAngle", J.end));
      P(q, a, "states", "states");
      P(q, a, "states.hover.lineWidth", "states.hover.line.width");
      q.events = function (a) {
        function b(a, c, e) {
          return a = a.match(new RegExp('.*".*' + c + '.*"', "i")) ? a.replace(new RegExp(c, "gi"), '"+' + e + '+"') : a.match(new RegExp(".*'.*" + c + ".*'", "i")) ? a.replace(new RegExp(c, "gi"), "'+" + e + "+'") : a.replace(/%name/gi, e)
        }
        var k, f, h, g = {};
        if (a)
          for (k in a)
            if (a.hasOwnProperty(k)) {
              f = a[k];
              if ("string" === typeof f) {
                h = f;
                for (var l = [
                  ["%name", "this.name"],
                  ["%pointCount", "this.points.length"],
                  ["%color", "this.color"],
                  ["%id", "this.id"],
                  ["%sum", "this.calcs.sum"],
                  ["%average", "this.calcs.average"],
                  ["%lastY",
                    "this.calcs.lastY"
                  ],
                  ["%range", "this.calcs.yRange"],
                  ["%max", "this.calcs.max"],
                  ["%min", "this.calcs.min"],
                  ["%percentOfTotal", "this.calcs.percentOfTotal"]
                ], q = 0, n = l.length; q < n; q++) h = b(h, l[q][0], l[q][1]);
                h = h.replace(/\n/g, "");
                h = "[(function (e){return " + h + " })][0]";
                f = h = eval('"strict mode"; ' + h.toString())
              }
              g[JSCL.v.Gd(["legendEntryClick"], ["legendItemClick"], k)] = function (a) {
                return e.get(this.options.id).fireEvent(a, f)
              }
            } a && a.legendEntryClick || (g.legendItemClick = function (a) {
              var b = e.get(this.options.id),
                c = m.a(e.json,
                  "defaultSeries.events.legendEntryClick");
              if (c && "function" === typeof c) return b.fireEvent(a, c);
              if (e.g.o("map") && e.g.Ta(m.a(this, "options.jscConfig"))) a.preventDefault();
              else {
                for (var b = !1, c = 0, d = e.chartObject.series.length; c < d; c++) {
                  var k = e.chartObject.series[c];
                  if (k.visible && k.options.id != this.options.id && "errorbar" !== k.options.type) {
                    b = !0;
                    break
                  }
                }
                b ? e.G.X = !0 : a.preventDefault()
              }
            });
        return g
      }(a.events);
      if (H) {
        H = e.Jb(a.defaultPoint, q.id);
        P(q, H, "marker", "marker");
        P(q, H, "color", "color");
        P(q, H, "states", "states");
        P(q, H, "point.events", "events");
        q.defaultPoint = a.defaultPoint;
        if (H.url || m.a(H, "events.click")) R = !0;
        H = m.a(a.defaultPoint, "label");
        if (J = m.a(a.defaultPoint, "subvalue.line")) P(q, J, "whiskerWidth", "width"), P(q, J, "stemWidth", "width"), P(q, J, "whiskerColor", "color"), P(q, J, "stemColor", "color"), P(q, J, "whiskerLength", "length"), P(q, J, "stemDashStyle", "dashStyle");
        H && (m.c(q, "dataLabels", e.Ma(H, "dataLabels")), !e.jb && q.dataLabels && (H.text || H.visible) && (m.c(q, "dataLabels.enabled", !0), m.c(q, "dataLabels.formatter", e.gd)),
          "undefined" !== typeof H.offset && H.offset.toFixed && P(q, H, "dataLabels.distance", "offset"), H.line && (P(q, H, "dataLabels.connectorColor", "line.color"), P(q, H, "dataLabels.connectorWidth", "line.width")));
        "bubble" === b && m.c(q, "marker.enabled", !0)
      }
      G || R ? m.c(q, "cursor", a.cursor || "pointer") : P(q, a, "cursor", "cursor");
      e.g.o("gauge") && m.c(q, "dataLabels.enabled", !1);
      g && "percent" == g && m.c(q, "compare", "percent");
      q.jscConfig = a;
      l && (q.drillPiD = l);
      e.ec.push(q);
      return q
    },
    ig: function (a) {
      var g, f;
      3;
      g = this.json;
      f = {
        data: m.a(g, "dataSet"),
        $g: m.a(g, "dataSetBinding"),
        oa: a.points,
        mode: "makePoints",
        fb: a,
        hh: this.C.ua.Ia
      };
      if (g = a.map) f = JSCL.gjParser.parse(g, f), a.points = f.oa, a.map = {
        bbox: f.Yg,
        type: f.type,
        solo: g.solo
      }, g = "", g = "marker" === f.type && "bubble" === a.type ? "bubble" : "marker" === f.type ? "marker" : "map", "map" === this.g.I("seriesType", a) && "map" === g && (g = a.type), a.type = g;
      return a
    },
    gg: function (a, g) {
      function f(a, e, f) {
        var g = {},
          l = m.f;
        l(g, a, "color", "color");
        l(g, a, "includeInScale", "includeInScale");
        l(g, a, "id", "id");
        l(g, a, "zIndex", "zIndex");
        l(g, a, "label",
          "label");
        e.getTime && (e = e.getTime());
        f.getTime && (f = f.getTime());
        g.to = f;
        g.from = e;
        a.bringToFront && (g.zIndex = 5);
        return g
      }

      function l(a, f) {
        var g = {},
          l = m.f;
        a = e.m.Na(a);
        l(g, a, "color", "color");
        l(g, a, "includeInScale", "includeInScale");
        l(g, a, "id", "id");
        l(g, a, "zIndex", "zIndex");
        l(g, a, "label", "label");
        l(g, a, "color", "line.color");
        l(g, a, "width", "line.width");
        l(g, a, "dashStyle", "line.dashStyle");
        f.getTime && (f = f.getTime());
        g.value = f;
        g.width || (g.width = 1);
        a.bringToFront && (g.zIndex = 5);
        return g
      }
      var x = {},
        e = this,
        q = !1,
        v, C,
        O, A, x = jQuery.extend(!0, null, x, a);
      A = x.value;
      "undefined" !== typeof A && (A.charAt ? (O = A.split(","), 0 < O.length && (v = O[0], 2 === O.length && (q = !0, C = O[1]))) : A.pop ? 0 < A.length && (v = A[0], 2 === A.length && (q = !0, C = A[1])) : A.low || A.high ? (v = A.low, C = A.high, "undefined" !== typeof v && (q = !0)) : (C = A, q = !1));
      O = y(x.opacity) ? 1 - x.opacity : x.transparency;
      q ? (q = x.color, A = g, e.wd && (A = !A), q && (q = e.m.P(q, O, A ? "axisMarkerX" : "axisMarkerY"), x.color = q), x = f(x, v, C), x.isRange = !0) : x = l(x, C || A);
      x.id = this.Wb(x, x.id);
      x.jscObj = a;
      return x
    },
    Ma: function (a, g) {
      if ("undefined" !==
        typeof a) {
        var f = {},
          l = JSCL.j,
          m, e, q;
        l.f(f, a, "text", "text");
        l.f(f, a, "align", "align");
        l.f(f, a, "verticalAlign", "verticalAlign");
        q = a.color || l.a(a, "style.color");
        a.color = q;
        a = this.m.Na(a);
        a.cssClass ? (m = JSCL.Hb.zb(a.cssClass), q = l.T(a.style, m)) : q = a.style;
        q && (f.style = q);
        "dataLabels" === g ? l.f(f, a, "color", "color") : l.f(f, a, "style.color", "color");
        m && l.f(f, m, "style.color", "color");
        (m = l.a(f, "style.fontSize")) && m.toFixed && (f.style.fontSize = m + "px");
        l.f(f, a, "rotation", "rotation");
        "titleBox" === g && a.url && 0 < a.url.length &&
          (f.text = a.urlTarget && 0 < a.urlTarget.length ? '<a href="' + a.url.replace(/".*/g, "'") + '" target="' + a.urlTarget + '">' + f.text + "</a>" : '<a href="' + a.url.replace(/".*/g, "'") + '">' + f.text + "</a>");
        a.absolutePosition && "dataLabels" !== g ? (e = a.absolutePosition.split(","), 2 === e.length && (f.floating = !0, f.align = "left", f.verticalAlign = "top")) : "undefined" !== typeof a.offset && a.offset.charAt && (e = a.offset.split(","));
        e && (2 === e.length ? f = l.T(f, {
          x: parseInt(e[0]),
          y: parseInt(e[1])
        }) : 1 === e.length && (f = l.T(f, {
          x: parseInt(e[0])
        })));
        return f
      }
    },
    Ke: function (a, g) {
      var f = {},
        l = a.label,
        x, e = a.fill;
      m.f(f, a, "position", "position");
      m.f(f, a, "margin", "margin");
      m.f(f, a, "radius", "radius");
      x = y(a.opacity) ? 1 - a.opacity : a.transparency;
      a.boxVisible ? (e && (e = this.m.P(e, x, "titleBox"), f.fill = e), a.outline && (a.outline = this.m.Na(a.outline)), m.f(f, a, "outline", "outline"), (e = m.a(f, "outline.color")) && (f.outline.color = this.m.kf(x, e))) : f.outline = {
        width: 0
      };
      m.f(f, a, "padding", "padding");
      l && (l = this.Ma(l, "titleBox", x), delete l.verticalAlign, f = jQuery.extend(!0, null, l, f));
      f.text =
        this.Kb(g || f.text, this.$a());
      return f
    },
    La: function (a, g, f, l) {
      function x(a, e) {
        return JSCL.v.Mb(a, q, J, tokenValue, function (a) {
          var c;
          e && !e.Ra && (c = tokenFormat(a)) && (e.Ra = c.N)
        })
      }
      var e = f.attributes,
        q = this,
        v = q.u.v,
        C = a && a.token,
        O = "",
        A = q.g.o("treemap");
      C && (a = a.token);
      if (a && 0 < a.length && 0 <= a.indexOf("%")) {
        var N = q.Fa(g),
          H = q.Bb(),
          G = q.Ef(f),
          R, B = JSCL.v.Td,
          J = "parentname,percentofdatamax,ypercentofdatamax,xpercentofdatamax,zpercentofdatamax,ypercentofaxisrange,percentofaxisrange,xpercentofaxisrange,yaxislabel,xaxislabel,zaxislabel,ypercentofseriesrange,xpercentofseriesrange,zpercentofseriesrange,percentofseriesrange,ypercentofseriesmax,percentofseriesmax,percentofseriesmin,zpercentofseriesmax,zpercentofseriesmin,xpercentofseriesmax,xpercentofseriesmin,name,percentofseries,percentoftotal,percentofgroup,yvalue,ystart,zvalue,xvalue,open,high,low,close,seriesname,seriespointcount,value,ypercentile,ypercentofseries,ypercentoftotal,ypercentofgroup,zpercentofseries,zpercentoftotal,zpercentofgroup,id,color,xpercentofseries,xpercentoftotal,xpercentofgroup,yrange,percentile,zpercentile,xpercentile",
          J = "percentofdatarange,ypercentofdatarange,xpercentofdatarange,zpercentofdatarange," + J;
        tokenValue = function (a) {
          var e, b = tokenValue.Ge.attributes,
            c, l, x = tokenValue.Ge,
            r = tokenValue.Ge.options || x,
            h = tokenValue.cache,
            v = tokenValue.cc,
            G = !1,
            C = A ? "value" : "y",
            n;
          A && !y(r[C]) && (C = "y");
          a = a.toLowerCase();
          if (b)
            if ("function" === typeof b.pop)
              for (c = 0, l = b.length; c < l; c++) {
                if (a === "%" + b[c][0].toLowerCase()) return B(b[c][1])
              } else
              for (c in b)
                if (a === "%" + c.toLowerCase()) return B(b[c]);
          switch (a) {
            case "%yaxislabel":
              e = m.a(h, "yAxis.label.text");
              break;
            case "%xaxislabel":
              e = m.a(h, "xAxis.label.text");
              break;
            case "%zaxislabel":
              e = m.a(h, "zAxisLabelText");
              break;
            case "%percentofaxisrange":
            case "%ypercentofaxisrange":
              if (b = JSCL.R.Vb(g, C, q.json))
                if (b = q.ha(b.id)) e = b.Vh(), y(e.dataMin) ? e = Math.abs((r[C] - (x.low || 0) - e.min) / (e.max - e.min) * 100) : (e = JSCL.Zc.Yc(tokenValue.D.min, tokenValue.D.max, 10), e = Math.abs((r[C] - (x.low || 0) - e.min) / (e.max - e.min) * 100));
              break;
            case "%xpercentofaxisrange":
              if (b = JSCL.R.Vb(g, "x", q.json))
                if (b = q.ha(b.id)) e = b.Vh(), y(e.dataMin) ? e = Math.abs((r.x -
                  e.min) / (e.max - e.min) * 100) : (e = JSCL.Zc.Yc(tokenValue.D.xMin, tokenValue.D.xMax, 10), e = Math.abs((r.x - e.min) / (e.max - e.min) * 100));
              break;
            case "%percentile":
            case "%ypercentile":
              e = JSCL.la.Me(r[C], h.list);
              break;
            case "%zpercentile":
              e = JSCL.la.Me(r.z, h.zList);
              break;
            case "%xpercentile":
              e = JSCL.la.Me(x.x, h.xList);
              break;
            case "%yvalue":
            case "%value":
              e = r[C];
              G = 1;
              break;
            case "%ystart":
              e = y(x.yStart) ? x.yStart : x.low || 0;
              G = 1;
              break;
            case "%yrange":
              e = r[C] - (x.low || 0);
              break;
            case "%zvalue":
              e = x.z;
              break;
            case "%xvalue":
              e = tokenValue.Sa.Gg ?
                new Date(x.x) : x.x;
              break;
            case "%open":
              e = x.open;
              G = 1;
              break;
            case "%high":
              e = x.high;
              G = 1;
              break;
            case "%low":
              e = x.low;
              G = 1;
              break;
            case "%close":
              e = x.close;
              G = 1;
              break;
            case "%parentname":
              e = x.parentPoint && (n = q.B(x.parentPoint)) ? n.name : v.name;
              break;
            case "%seriesname":
              e = v.name;
              break;
            case "%seriespointcount":
              e = v.data.length;
              break;
            case "%name":
              e = x.name;
              break;
            case "%ypercentofseries":
            case "%percentofseries":
              e = Math.abs((r[C] - (x.low || 0)) / h.yRangeSumAbs * 100);
              break;
            case "%ypercentofseriesrange":
            case "%percentofseriesrange":
              e =
                Math.abs((r[C] - (x.low || 0) - h.min) / (h.max - h.min) * 100);
              break;
            case "%xpercentofseriesrange":
              e = Math.abs((r.x - h.xMin) / (h.xMax - h.xMin) * 100);
              break;
            case "%zpercentofseriesrange":
              e = Math.abs((r.z - h.zMin) / (h.zMax - h.zMin) * 100);
              break;
            case "%percentofdatarange":
            case "%ypercentofdatarange":
              e = Math.abs((r[C] - (x.low || 0) - tokenValue.D.min) / (tokenValue.D.max - tokenValue.D.min) * 100);
              break;
            case "%xpercentofdatarange":
              e = Math.abs((r.x - tokenValue.D.xMin) / (tokenValue.D.xMax - tokenValue.D.xMin) * 100);
              break;
            case "%zpercentofdatarange":
              e =
                Math.abs((r.z - tokenValue.D.zMin) / (tokenValue.D.zMax - tokenValue.D.zMin) * 100);
              break;
            case "%percentofdatamax":
            case "%ypercentofdatamax":
              e = Math.abs((r[C] - (x.low || 0)) / tokenValue.D.yMax * 100);
              break;
            case "%xpercentofdatamax":
              e = Math.abs(r.x / tokenValue.D.xMax * 100);
              break;
            case "%zpercentofdatamax":
              e = Math.abs(r.z / tokenValue.D.zMax * 100);
              break;
            case "%ypercentofseriesmax":
            case "%percentofseriesmax":
              e = Math.abs((r[C] - (x.low || 0)) / h.max * 100);
              break;
            case "%zpercentofseriesmax":
              e = Math.abs(r.z / h.zMax * 100);
              break;
            case "%xpercentofseriesmax":
              e =
                Math.abs(r.x / h.xMax * 100);
              break;
            case "%ypercentoftotal":
            case "%percentoftotal":
              e = Math.abs((r[C] - (x.low || 0)) / tokenValue.D.yRangeSumAbs * 100);
              break;
            case "%ypercentofgroup":
            case "%percentofgroup":
              e = Math.abs((r[C] - (x.low || 0)) / tokenValue.Fc.yRangeSumAbs * 100);
              break;
            case "%zpercentofseries":
              e = h.zSumAbs ? Math.abs(x.z / h.zSumAbs * 100) : 0;
              break;
            case "%zpercentoftotal":
              e = tokenValue.D.zSumAbs ? Math.abs(x.z / tokenValue.D.zSumAbs * 100) : 0;
              break;
            case "%zpercentofgroup":
              e = tokenValue.Fc.zSumAbs ? Math.abs(x.z / tokenValue.Fc.zSumAbs *
                100) : x.z ? 100 : 0;
              break;
            case "%xpercentofseries":
              e = h.xSumAbs ? Math.abs(x.x / h.xSumAbs * 100) : 0;
              break;
            case "%xpercentoftotal":
              e = tokenValue.D.xSumAbs ? Math.abs(x.x / tokenValue.D.xSumAbs * 100) : 0;
              break;
            case "%xpercentofgroup":
              e = tokenValue.Fc.xSumAbs ? Math.abs(x.x / tokenValue.Fc.xSumAbs * 100) : x.x ? 100 : 0;
              break;
            case "%id":
              e = x.id;
              break;
            case "%color":
              e = q.G.pd(g, q.kd(f.id)), e = JSCL.m.wb(e)
          }
          if (!y(e)) return -1 === J.indexOf(a.replace("%", "")) ? "INVALID TOKEN" : "?";
          tokenValue.Sa.Ig && G && (e = new Date(e));
          return B(e)
        };
        tokenFormat = function (a) {
          var e =
            tokenFormat.Sa;
          a = "," + a.toLowerCase().replace("%", "") + ",";
          if (-1 < ",yvalue,value,ystart,yrange,open,high,low,close,".indexOf(a)) return {
            N: e.Rb,
            culture: e.qb
          };
          if (-1 < ",xvalue,".indexOf(a)) return {
            N: e.Qc,
            culture: e.hc
          };
          if (-1 < ",zvalue,".indexOf(a)) return {
            N: e.df,
            culture: e.ic
          };
          if (-1 < ",percentile,ypercentile,zpercentile,xpercentile,".indexOf(a)) {
            switch (a[0]) {
              case "z":
                a = e.ic;
                break;
              case "x":
                a = e.hc;
                break;
              default:
                a = e.qb
            }
            return {
              N: "n0",
              culture: a
            }
          }
          if (-1 < ",zpercentofseries,zpercentoftotal,zpercentofgroup,zpercentofdatamax,zpercentofdatarange,".indexOf(a)) return {
            N: "n",
            culture: e.ic
          };
          if (-1 < ",xpercentofseries,xpercentoftotal,xpercentofgroup,xpercentofaxisrange,xpercentofdatamax,xpercentofdatarange,".indexOf(a)) return {
            N: "n",
            culture: e.hc
          };
          if (-1 < "percentofdatarange,ypercentofdatarange,percentofdatamax,ypercentofdatamax,ypercentofaxisrange,percentofaxisrange,percentofseries,percentoftotal,percentofgroup,ypercentofseries,ypercentoftotal,ypercentofgroup,ypercentofseriesmax,percentofseriesmax,percentofseriesmin,zpercentofseriesmax,zpercentofseriesmin,xpercentofseriesmax,xpercentofseriesmin,".indexOf(a)) return {
            N: "n",
            culture: e.qb
          }
        };
        y(l) || (l = q.$a());
        tokenValue.cc = g;
        tokenValue.Ge = f;
        tokenValue.Sa = l;
        tokenValue.Fc = G;
        tokenValue.cache = N;
        tokenValue.D = H;
        tokenFormat.Sa = l;
        if (C) return tokenValue(a);
        a = v.Ne(a);
        if (e) {
          if ("function" === typeof e.pop)
            for (R = 0, C = e.length; R < C; R++) O += e[R][0].toLowerCase() + ",";
          else
            for (R in e) O += R.toLowerCase() + ",";
          J = O + J
        }
        a = v.Ec(a, l, tokenValue, tokenFormat, x);
        a = v.Mb(a, q, J, tokenValue, tokenFormat);
        a = v.Se(a)
      }
      return a
    },
    Ba: function (a, g, f) {
      function l(a, e) {
        return JSCL.v.Mb(a, x, C, A, function (a) {
          var f;
          e && !e.Ra &&
            (f = N(a)) && (e.Ra = f.N)
        })
      }
      var x = this,
        e = a && a.token;
      e && (a = a.token);
      if (a && 0 < a.length && 0 <= a.indexOf("%")) {
        var q = x.Fa(g),
          v = JSCL.v.Td,
          C = "yaxislabel,xaxislabel,zaxislabel,name,sum,median,mode,zmode,zmedian,maxpointname,minpointname,min,max,average,rangesum,yrangesum,yrange,lasty,id,color,pointcount,percentoftotal,ysum,ypercentoftotal,ymaxpointname,yminpointname,yaverage,ymedian,ymode,ymin,ymax,lastx,xsum,xpercentoftotal,xmaxpointname,xminpointname,xaverage,xmedian,xmode,xmin,xmax,zsum,zmaxpointname,zminpointname,zmin,zmax,zaverage,zrange,lastz,zpercentoftotal",
          O = x.Bb(),
          A = function (a) {
            var e, f = A.cache;
            if (!f) return "?";
            a = a.toLowerCase();
            switch (a) {
              case "%yaxislabel":
                e = m.a(f, "yAxis.label.text");
                break;
              case "%xaxislabel":
                e = m.a(f, "xAxis.label.text");
                break;
              case "%zaxislabel":
                e = m.a(x.json, "zAxisLabelText");
                break;
              case "%name":
                e = A.cc.name;
                break;
              case "%ysum":
              case "%sum":
                e = f.sum;
                break;
              case "%ymaxpointname":
              case "%maxpointname":
                e = f.nMax;
                break;
              case "%yminpointname":
              case "%minpointname":
                e = f.nMin;
                break;
              case "%ymin":
              case "%min":
                e = f.min;
                break;
              case "%ymax":
              case "%max":
                e = f.max;
                break;
              case "%ymedian":
              case "%median":
                e = JSCL.la.Yb(f.list);
                break;
              case "%ymode":
              case "%mode":
                e = JSCL.la.mode(f.list);
                break;
              case "%yaverage":
              case "%average":
                e = f.average;
                break;
              case "%yrange":
                e = f.range;
                break;
              case "%yrangesum":
              case "%rangesum":
                e = f.yRangeSum;
                break;
              case "%zmedian":
                e = f.zList.length ? JSCL.la.Yb(f.zList) : "";
                break;
              case "%zmode":
                e = f.zList.length ? JSCL.la.mode(f.zList) : "";
                break;
              case "%xmedian":
                e = f.xList.length ? JSCL.la.Yb(f.xList) : "";
                break;
              case "%xmode":
                e = f.xList.length ? JSCL.la.mode(f.xList) : "";
                break;
              case "%xaverage":
                e = f.xAverage;
                break;
              case "%xmin":
                e = f.xMin;
                break;
              case "%xmax":
                e = f.xMax;
                break;
              case "%lasty":
                e = f.list[f.list.length - 1];
                break;
              case "%id":
                e = A.cc.id || A.cc.options.id;
                break;
              case "%pointcount":
                e = f.list.length;
                break;
              case "%ypercentoftotal":
              case "%percentoftotal":
                e = Math.abs(f.yRangeSumAbs / A.D.yRangeSumAbs * 100);
                break;
              case "%zsum":
                e = f.zSum;
                break;
              case "%xsum":
                e = f.xSum;
                break;
              case "%zmaxpointname":
                e = f.nZMax;
                break;
              case "%zminpointname":
                e = f.nZMin;
                break;
              case "%xmaxpointname":
                e = f.nXMax;
                break;
              case "%xminpointname":
                e =
                  f.nXMin;
                break;
              case "%zmin":
                e = f.zMin;
                break;
              case "%zmax":
                e = f.zMax;
                break;
              case "%zaverage":
                e = f.zAverage;
                break;
              case "%zrange":
                e = f.zRange;
                break;
              case "%lastz":
                e = f.zList.length ? f.zList[f.zList.length - 1] : "";
                break;
              case "%lastx":
                e = f.xList.length ? f.xList[f.xList.length - 1] : "";
                break;
              case "%color":
                e = A.cc.color;
                break;
              case "%zpercentoftotal":
                e = A.D.zSumAbs ? Math.abs(f.zSumAbs / A.D.zSumAbs * 100) : 0;
                break;
              case "%xpercentoftotal":
                e = A.D.xSumAbs ? Math.abs(f.xSumAbs / A.D.xSumAbs * 100) : 0
            }
            return y(e) ? v(e) : -1 === C.indexOf(a.replace("%",
              "")) ? "INVALID TOKEN" : "?"
          },
          N = function (a) {
            var e = N.Sa;
            a = "," + a.toLowerCase().replace("%", "") + ",";
            if (-1 < ",min,max,average,rangesum,yrange,lasty,sum,median,mode,ysum,yaverage,ymedian,ymode,ymin,ymax,yrangesum,".indexOf(a)) return {
              N: e.Rb,
              culture: e.qb
            };
            if (-1 < ",zsum,zmin,zmax,zaverage,lastz,zrange,zmode,zmedian,".indexOf(a)) return {
              N: e.df,
              culture: e.ic
            };
            if (-1 < ",xsum,xmin,xmax,xaverage,lastx,xrange,lastx,xmode,xmedian,".indexOf(a)) return {
              N: e.Qc,
              culture: e.hc
            };
            if (-1 < ",zpercentoftotal,".indexOf(a)) return {
              N: "n",
              culture: e.ic
            };
            if (-1 < ",percentoftotal,ypercentoftotal,".indexOf(a)) return {
              N: "n",
              culture: e.qb
            };
            if (-1 < ",xpercentoftotal,".indexOf(a)) return {
              N: "n",
              culture: e.hc
            }
          };
        y(f) || (f = x.$a());
        A.cc = g;
        A.Sa = f;
        A.cache = q;
        A.D = O;
        N.Sa = f;
        if (e) return A(a);
        a = x.u.v.Ne(a);
        a = x.u.v.Ec(a, f, A, N, l);
        a = x.u.v.Mb(a, x, C, A, N);
        a = x.u.v.Se(a)
      }
      return a
    },
    Kb: function (a, g) {
      function f(a, f) {
        return JSCL.v.Mb(a, l, e, C, function (a) {
          var e;
          f && !f.Ra && (e = O(a)) && (f.Ra = e.N)
        })
      }
      var l = this,
        m = a && a.token;
      m && (a = a.token);
      if (a && 0 < a.length && 0 <= a.indexOf("%")) {
        var e = "sum,average,zmedian,zmode,median,mode,rangesum,pointcount,zsum,zaverage,zrange,maxseriesname,minseriesname,zmaxseriesname,zminseriesname,maxpointname,minpointname,zmaxpointname,zminpointname,xmaxpointname,xminpointname,xmaxseriesname,xminseriesname,min,max,zmin,zmax,xsum,xmin,xmax,xaverage,xmedian,xmode,ysum,yaverage,ymedian,ymode,yrangesum,ymaxseriesname,yminseriesname,ymaxpointname,yminpointname,ymin,ymax,yrange",
          q = l.Bb(),
          v = JSCL.v.Td,
          C = function (a) {
            var f;
            a = a.toLowerCase();
            switch (a) {
              case "%sum":
              case "%ysum":
                return C.cache.sum;
              case "%min":
              case "%ymin":
                return C.cache.min;
              case "%max":
              case "%ymax":
                return C.cache.max;
              case "%median":
              case "%ymedian":
                f = JSCL.la.Yb(C.cache.list);
                break;
              case "%mode":
              case "%ymode":
                f = JSCL.la.mode(C.cache.list);
                break;
              case "%average":
              case "%yaverage":
                return C.cache.average;
              case "%rangesum":
              case "%yrangesum":
                return C.cache.yRangeSum;
              case "%maxpointname":
              case "%ymaxpointname":
                return C.cache.nMax;
              case "%minpointname":
              case "%yminpointname":
                return C.cache.nMin;
              case "%pointcount":
                return C.cache.list.length;
              case "%maxseriesname":
              case "%ymaxseriesname":
                return C.cache.snMax;
              case "%minseriesname":
              case "%yminseriesname":
                return C.cache.snMin;
              case "%zmedian":
                f = C.cache.zList.length ? JSCL.la.Yb(C.cache.zList) : "";
                break;
              case "%zmode":
                f = C.cache.zList.length ? JSCL.la.mode(C.cache.zList) : "";
                break;
              case "%zsum":
                return C.cache.zSum;
              case "%zmin":
                return C.cache.zMin;
              case "%zmax":
                return C.cache.zMax;
              case "%zaverage":
                return C.cache.zAverage;
              case "%zrange":
                return C.cache.zRange;
              case "%zmaxpointname":
                return C.cache.nZMax;
              case "%zminpointname":
                return C.cache.nZMin;
              case "%zmaxseriesname":
                return C.cache.snZMax;
              case "%zminseriesname":
                return C.cache.snZMin;
              case "%xmedian":
                f = C.cache.xList.length ? JSCL.la.Yb(C.cache.xList) : "";
                break;
              case "%xmode":
                f = C.cache.xList.length ? JSCL.la.mode(C.cache.xList) : "";
                break;
              case "%xsum":
                return C.cache.xSum;
              case "%xmin":
                return C.cache.xMin;
              case "%xmax":
                return C.cache.xMax;
              case "%xaverage":
                return C.cache.xAverage;
              case "%xmaxpointname":
                return C.cache.nXMax;
              case "%xminpointname":
                return C.cache.nXMin;
              case "%xmaxseriesname":
                return C.cache.snXMax;
              case "%xminseriesname":
                return C.cache.snXMin
            }
            return y(f) ? v(f) : -1 === e.indexOf(a.replace("%", "")) ? "INVALID TOKEN" : "?"
          },
          O = function (a) {
            var e = O.Sa;
            a = "," + a.toLowerCase().replace("%", "") + ",";
            if (-1 < ",sum,min,max,average,yrange,rangesum,median,mode,ysum,yaverage,ymedian,ymode,yrangesum,ymin,ymax,".indexOf(a)) return {
              N: e.Rb,
              culture: e.qb,
              Wf: e.Ig
            };
            if (-1 < ",zsum,zmin,zmax,zaverage,zrange,zmedian,zmode,".indexOf(a)) return {
              N: e.df,
              culture: e.ic
            };
            if (-1 < ",xsum,xmin,xmax,xaverage,xmedian,xmode,".indexOf(a)) return {
              N: e.Qc,
              culture: e.hc,
              Wf: e.Gg
            }
          };
        g || (g = l.$a());
        C.Sa = g;
        C.cache = q;
        O.Sa = g;
        if (m) return C(a);
        a = l.u.v.Ne(a);
        a = l.u.v.Ec(a, g, C, O, f);
        a = l.u.v.Mb(a, l, e, C, O);
        a = l.u.v.Se(a)
      }
      return a
    },
    Fa: function (a) {
      var g = a.id || JSCL.j.a(a, "options.id"),
        f = JSCL.j.a(a, "options") || a,
        l = JSCL.R.Vb(f, "x", this.json),
        f = JSCL.R.Vb(f, "y", this.json),
        x = m.a(this.json, "zAxisLabelText");
      this.g.o("treemap");
      var e;
      this.Ic || (this.Ic = []);
      if (e = this.Ic[g]) return e;
      if (a.points ||
        a.data) {
        e = a.data ? a.data : a.points;
        var q = a.name || JSCL.j.a(a, "options.name"),
          v, C, O = [],
          A = [],
          N = [],
          H = [],
          G, B = 0,
          J = 0,
          V = 0,
          P = 0,
          k = 0,
          b = 0,
          c, w = 0,
          D = 0,
          r, h, T, E, ea, n, K, u, F, d, z, L, t, Q, p, I, S = "y",
          ca = this.g.rg(a, "subvalues");
        this.g.o("map");
        if (e && 0 < e.length) {
          v = 0;
          for (C = e.length; v < C; v++)
            if (G = e[v], y(G.y)) {
              S = "y";
              r = h = G[S];
              break
            } else if (y(G.value)) {
              S = "value";
              r = h = G[S];
              break
            }
          t = T = E = e[0].x;
          ea = n = e[0].z;
          K = u = F = d = e[0].name;
          v = 0;
          for (C = e.length; v < C; v++) G = e[v], I = G.name, y(Q = G.yStart) && (y(c) || (c = 0), Q < r && (r = Q, u = I), c += Q), y(p = G.x) && (H[v] = p, p >
            E && (E = p), p < T && (T = p), V += p, b += Math.abs(p), p < t && (L = !0), t = p), y(p = G[S]) && (O[v] = p, p > h && (h = p, K = I), p < r && (r = p, u = I), B += p, P += Math.abs(p), Q = p - (Q || 0), w += Q, D += Math.abs(Q)), y(Q = G.z) && (A[v] = Q, Q > n && (n = Q, F = I), Q < ea && (ea = Q, d = I), J += Q, k += Math.abs(Q)), I && N.push(I), G.subvalue && (z = !0)
        }
        z || JSCL.j.a(a, "defaultPoint.subvalue") && (z = !0);
        z && !ca && this.ub("Subvalues for series " + (q || "") + " are specified but not supported by it's type.");
        e = {
          list: O,
          xList: H,
          zList: A,
          nList: N,
          max: h,
          min: r,
          xMax: E,
          xMin: T,
          zMax: n,
          zMin: ea,
          nMax: K,
          nMin: u,
          nZMax: F,
          nZMin: d,
          nXMax: F,
          nXMin: d,
          sum: B,
          zSum: J,
          xSum: V,
          sumAbs: P,
          zSumAbs: k,
          xSumAbs: b,
          average: B / e.length,
          zAverage: J / e.length,
          xAverage: V / e.length,
          range: h - r,
          zRange: n - ea,
          hasSubvalues: ca && z,
          yRangeSum: w,
          yRangeSumAbs: D,
          yStartSum: c,
          name: q,
          xNotSorted: L,
          xAxis: l,
          yAxis: f,
          zAxisLabelText: x
        };
        return this.Ic[g] = e
      }
    },
    Bb: function () {
      var a = [],
        g, f, l = [],
        x = [],
        e = this.json.series,
        q = this.json.chartArea;
      if (this.Bd) return this.Bd;
      if ("undefined" === typeof e && (e = m.a(this.json, "chartArea.0.series")))
        for (e = [], g = 0, f = q.length; g < f; g++) {
          var v, C;
          v =
            0;
          for (C = q[g].series.length; v < C; v++) e.push(q[g].series[v])
        }
      g = 0;
      for (f = e.length; g < f; g++) a.push(this.Fa(e[g])), l.push(e[g].name), x.push(e[g].id);
      q = [];
      v = [];
      C = [];
      var y = m.a(a, "0.min"),
        A = m.a(a, "0.max"),
        N = 0,
        H = m.a(a, "0.zMin"),
        G = m.a(a, "0.zMax"),
        B = 0,
        J = m.a(a, "0.xMin"),
        V = m.a(a, "0.xMax"),
        P = 0,
        k = 0,
        b = 0,
        c = 0,
        w = [],
        D = 0,
        r = 0,
        h = [],
        T = m.a(a, "0.nMin"),
        E = m.a(a, "0.nMax"),
        ea = m.a(a, "0.nZMin"),
        n = m.a(a, "0.nZMax"),
        K = m.a(a, "0.name"),
        u = m.a(a, "0.name"),
        F = m.a(a, "0.name"),
        d = m.a(a, "0.name"),
        z = m.a(a, "0.nZMin"),
        L = m.a(a, "0.nZMax"),
        t = m.a(a,
          "0.name"),
        Q = m.a(a, "0.name"),
        p;
      g = 0;
      for (f = a.length; g < f; g++)
        if (e = a[g]) p = e.name, q = q.concat(e.list), C = v.concat(e.xList), v = v.concat(e.zList), N += e.sum, B += e.zSum, P += e.xSum, k += e.sumAbs, b += e.zSumAbs, c += e.xSumAbs, w[g] = e.sum, h[g] = e.zSum, D += e.yRangeSum, r += e.yRangeSumAbs, e.max > A && (A = e.max, E = e.nMax, K = p), e.min < y && (y = e.min, T = e.nMin, u = e.name), e.zMax > G && (G = e.zMax, n = e.nZMax, F = p), e.zMin < H && (H = e.zMin, ea = e.nZMin, d = e.name), e.xMax > V && (V = e.xMax, L = e.nXMax, t = p), e.xMin < J && (J = e.xMin, z = e.nXMin, Q = p);
      a = {
        list: q,
        sumList: w,
        max: A,
        min: y,
        sum: N,
        average: N / q.length,
        range: A - y,
        zList: v,
        xList: C,
        zSumList: h,
        zMax: G,
        zMin: H,
        xMax: V,
        xMin: J,
        zSum: B,
        xSum: P,
        sumAbs: k,
        zSumAbs: b,
        xSumAbs: c,
        zAverage: B / q.length,
        xAverage: P / q.length,
        zRange: G - H,
        yRangeSum: D,
        yRangeSumAbs: r,
        nMax: E,
        nMin: T,
        nZMax: n,
        nZMin: ea,
        nXMax: L,
        nXMin: z,
        snMax: K,
        snMin: u,
        snZMax: F,
        snZMin: d,
        snXMax: t,
        snXMin: Q
      };
      a.sumNames = l;
      a.sumIDs = x;
      return this.Bd = a
    },
    Ef: function (a) {
      var g, f, l = this.json.series,
        x, e = m.fe,
        q = {
          id: 0,
          list: [],
          zList: [],
          sum: 0,
          zSum: 0,
          xSum: 0,
          sumAbs: 0,
          zSumAbs: 0,
          xSumAbs: 0,
          yRangeSum: 0,
          yRangeSumAbs: 0
        },
        v, C;
      this.xb = this.xb || [];
      C = "name";
      a[C] ? (v = a[C], e = m.J) : (C = "x", v = a[C], "number" === typeof v && (e = m.J));
      g = 0;
      for (f = this.xb.length; g < f; g++)
        if (this.xb[g].id === v) return this.xb[g];
      var y;
      if (a.name || "undefined" !== typeof a.x)
        for (f = l.length, g = 0; g < f; g++) {
          x = l[g];
          q.id = v;
          if (y = x.id === a.seriesId ? a : e(x.points, C, v)) x = y.y, q.list.push(x), q.sum += x, q.yRangeSum += x - (y.yStart || y.low || 0), q.yRangeSumAbs += Math.abs(x - (y.yStart || y.low || 0)), q.zList.push(y.z), q.zSum += y.z, q.xSum += y.x, q.sumAbs += Math.abs(x), q.zSumAbs += Math.abs(y.z), q.xSumAbs +=
            Math.abs(y.x);
          0 < q.list.length && (q.average = q.sum / q.list.length, q.zAverage = q.zSum / q.zList.length)
        }
      this.xb.push(q);
      return q
    },
    If: function (a, g) {
      var f, l, m, e = a.id;
      this.Ad || (this.Ad = []);
      m = this.Ad[e];
      m || (f = this.Ef(a), l = g ? this.Fa(g) : void 0, this.Bb(a), m = {}, m.y = {
        groupAverage: f.average,
        groupSum: f.sum,
        groupList: f.list,
        seriesMax: l.max,
        seriesMin: l.min,
        seriesSum: l.sum
      }, m.x = {
        seriesMax: l.xMax,
        seriesMin: l.xMin,
        seriesSum: l.xSum
      }, m.z = {
        groupAverage: f.zAverage,
        groupSum: f.zSum,
        groupList: f.zList,
        seriesMax: l.zMax,
        seriesMin: l.zMin,
        seriesSum: l.zSum
      }, m.seriesPointCount = l.list.length, this.Ad[e] = m);
      return m
    },
    Mf: function (a) {
      var g, f;
      this.Cd || (this.Cd = []);
      f = a.id;
      if (g = this.Cd[f]) return g;
      a = this.Fa(a);
      this.Bb();
      g = {
        y: {
          list: a.list,
          sumAbs: a.sumAbs
        },
        x: {
          list: a.xList,
          sumAbs: a.xSumAbs
        },
        z: {
          list: a.zList,
          sumAbs: a.zSumAbs
        },
        pointNames: [],
        pointIDs: []
      };
      return this.Cd[f] = g
    },
    Hc: function () {
      delete this.xb;
      delete this.Bd;
      delete this.Ic;
      delete this.Vk;
      delete this.Kk
    },
    $a: function (a, g) {
      var f = {},
        l, m, e = this.u.j,
        q, v, C = this.u.j.a;
      a || (a = this.json.xAxis.pop ? this.json.xAxis[0] :
        this.json.xAxis);
      g || (g = this.json.yAxis.pop ? this.json.yAxis[0] : this.json.yAxis);
      l = e.s(C(a, "options.id"), a.id);
      m = e.s(C(g, "options.id"), g.id);
      q = e.s(C(a, "options.type"), C(a, "scale.type"), a.type);
      v = e.s(C(g, "options.type"), C(g, "scale.type"), g.type);
      f.hc = e.s(this.B(l).cultureName, this.json.defaultCultureName);
      f.qb = e.s(this.B(m).cultureName, this.json.defaultCultureName);
      f.Qc = this.B(l).formatString;
      f.Rb = this.B(m).formatString;
      f.ll = C(this.B(l), "defaultTick.label.text");
      f.Bj = C(this.B(m), "defaultTick.label.text");
      f.df = C(this.json, "zAxisFormatString") || f.Rb;
      f.ic = C(this.json, "zAxisCultureName") || f.qb;
      if ("datetime" === q || "time" === q) f.Gg = !0, void 0 === f.Qc && (f.Qc = "d");
      if ("datetime" === v || "time" === v) f.Ig = !0, void 0 === f.Rb && (f.Rb = "d");
      return f
    },
    Qg: function (a, g) {
      var f, l = this.u.j;
      g || (g = this.json.yAxis.pop ? this.json.yAxis[0] : this.json.yAxis);
      f = l.s(l.a(g, "options.id"), g.id);
      a.qb = l.s(this.B(f).cultureName, this.json.defaultCultureName);
      a.Rb = this.B(f).formatString;
      a.Bj = l.a(this.B(f), "defaultTick.label.text");
      return a
    },
    hg: function (a) {
      var g = {};
      m.f(g, a, "url", "server");
      m.f(g, a, "filename", "filename");
      m.f(g, a, "type", "imageType");
      m.f(g, a, "width", "width");
      return g
    },
    Je: function (a) {
      var g = {};
      a.text && 0 < a.text.length ? (g.text = a.text, a.url && 0 < a.url.length && (g.text = a.urlTarget && 0 < a.urlTarget.length ? '<a href="' + a.url.replace(/".*/g, "'") + '" target="' + a.urlTarget + '">' + g.text + "</a>" : '<a href="' + a.url.replace(/".*/g, "'") + '">' + g.text + "</a>"), a.align && (g.align = JSCL.v.Gd(["left", "center", "right"], ["low", "middle", "high"], a.align)), m.f(g, a, "rotation", "rotation"),
        m.f(g, a, "margin", "margin"), m.f(g, a, "style", "style", JSCL.ya.gb), m.f(g, a, "style.color", "color"), a.cssClass && (g.style || (g.style = {}), g.style = m.T(g.style, JSCL.Hb.zb(a.cssClass))), g.enabled = !0) : g.enabled = !1;
      return g
    },
    translate: function (a, g) {
      function f() {
        var a = "undefined" !== typeof n.hf,
          b = "undefined" !== typeof n.Vc,
          d = window.JSC,
          c = !1,
          e = n.V,
          h = !0;
        if ("undefined" !== typeof f.Eb) return f.Eb;
        n.Wc && (d = d.getVersion().split(".")[3], parseInt(n.Wc) >= parseInt(d) && (c = !0), delete n.Wc);
        if ("undefined" === typeof e) h = !0;
        else if (1 >
          e.length) h = !0;
        else if (-1 < e.toString().slice(e.length - 3).indexOf("on")) c && (h = !1);
        else if (n.Xc) {
          for (var e = n.Xc.toUpperCase().split(","), d = 0, k = e.length; d < k; d++)
            if ((-1 !== ea.indexOf(`//` + e[d]) || -1 !== ea.indexOf(`//WWW.` + e[d])) && c) {
              h = !1;
              break
            } delete n.Xc
        }
        n.V = "_" + n.V;
        if (a || b) n.V += "|" + (a ? "t" : "f") + "," + (b ? n.Vc : ""), a && (h = !1, b && 50 < n.Vc && (h = !0));
        return f.Eb = h
      }

      function l(a) {
        this.clickEv = function (a, b) {
          if (a.xAxis)
            for (var d in a.xAxis) {
              var c = a.xAxis[d].axis.options,
                e = new JSCL.Tc;
              e.init(n.B(c.id), n);
              a.xAxis[d].axis =
                e
            }
          if (a.yAxis)
            for (d in a.yAxis) c = a.yAxis[d].axis.options, e = new JSCL.Tc, e.init(n.B(c.id), n), a.yAxis[d].axis = e;
          b.apply(n.C, [a])
        };
        this.addSer = function (a, b) {
          a.options = n.B(a.options.id);
          return b.apply(n.C, [a])
        };
        this.simple = function (a, b) {
          return b.apply(n.C, [a])
        };
        var b, d, c, e = {};
        for (b in a)
          if (d = a[b], "string" === typeof d) {
            c = d;
            c = c.replace("%series", "this.series[0]");
            c = c.replace("%xValue", "e.xAxis[0].value");
            c = c.replace("%yValue", "e.yAxis[0].value");
            switch (b) {
              case "click":
                c = "[(function (e){ clickEv(e,function(e){" +
                  c + "}); })][0]";
                break;
              case "addSeries":
                c = "[(function (e){ return addSer(e,function(e){return " + c + "}); })][0]";
                break;
              case "load":
                c = "[(function (e){ simple(e,function(e){" + c + "}); })][0]";
                break;
              case "redraw":
                c = "[(function (e){ simple(e,function(e){" + c + "}); })][0]";
                break;
              case "selection":
                c = "[(function (e){ clickEv(e,function(e){" + c + "}); })][0]";
                break;
              default:
                c = "[(function (e){" + c + " })][0]"
            }
            c = eval('"strict mode"; ' + c);
            e[b] = c
          } else {
            switch (b) {
              case "click":
                c = function (a) {
                  this.clickEv(a, d)
                };
                break;
              case "addSeries":
                c =
                  function (a) {
                    return this.addSer(a, d)
                  };
                break;
              case "load":
                c = function (a) {
                  return this.simple(a, d)
                };
                break;
              case "redraw":
                c = c = function (a) {
                  return this.simple(a, d)
                };
                break;
              case "selection":
                c = c = function (a) {
                  this.clickEv(a, d)
                };
                break;
              default:
                c = c = c = function (a) {
                  return this.simple(a, d)
                }
            }
            e[b] = d
          } return e
      }

      function m(a, b) {
        switch (b) {
          case "_blank":
            return function () {
              window.open(a)
            };
          case "_parent":
            return function () {
              parent.location = a
            };
          case "_self":
            return function () {
              self.location = a
            };
          case "_top":
            return function () {
              window.location =
                a
            };
          case "":
            return function () {
              self.location = a
            };
          default:
            return function () {
              top.frames[b].location = a
            }
        }
      }

      function e(a, b, d, c) {
        var e = "";
        "string" === typeof a ? m(a, "_self")() : jQuery.isPlainObject(a) || 2 !== a.length || (e = a[0], b && d && (e = parseElementTokens(a[0], b, d, c)), m(e, a[1])())
      }

      function q(a, b, d) {
        function c(a) {
          void 0 === b.plotLines && (b.plotLines = []);
          b.plotLines.push(a)
        }

        function e(a) {
          void 0 === b.plotBands && (b.plotBands = []);
          b.plotBands.push(a)
        }
        a = a.markers;
        var f;
        if (a)
          for (var h = 0, k = a.length; h < k; h++) f = a[h], f = n.gg(f, d),
            f.rk ? e(f) : c(f)
      }

      function J(a) {
        function b(a, c) {
          var e = C(a, !0),
            f = n.Y,
            h = d.a(a, "scale.zoomLimit");
          e.type && "auto" === e.type && (n.U.Xb ? e.type = "datetime" : delete e.type);
          d.f(e, n.json, "startOfWeek", "startDayOfWeek");
          f && 0 < f.length && (e.categories = void 0 === c ? n.Y : n.Y[c]);
          "datetime" === e.type && h && h.unit && (e.maxZoom = n.u.ee().intervalToSpan(h));
          a.orientation && (e.opposite = "top" === a.orientation);
          return e
        }
        if (a.pop) {
          for (var c = [], e = 0, f = a.length; e < f; e++) c.push(b(a[e], e));
          return c
        }
        return b(a)
      }

      function C(a, b) {
        function c(a, f) {
          function h(a) {
            var b = {},
              c;
            b.label = n.Ma(a.label);
            d.f(b, a, "value", "value");
            d.f(b, a, "options.value", "value");
            d.f(b, a, "includeInScale", "includeInScale");
            if (a = d.a(a, "gridLine")) b.gridLine = c = {}, d.f(c, a, "width", "width"), d.f(c, a, "color", "color", n.m.Na), d.f(c, a, "dashStyle", "dashStyle");
            return b
          }

          function p(a, b) {
            return "string" === typeof a && "time" === b ? (new Date(a)).getTime() : a
          }
          var k = {},
            g, u, l;
          g = n.g.o("horizontal");
          var t;
          if (u = d.a(a, "alternateGridFill")) l = f, n.wd && (l = !l), u = n.m.P(u, 0, l ? "altGridFillX" : "altGridFillY"), k.alternateGridColor =
            u;
          d.f(k, a, "visible", "visible");
          !1 === k.visible && (d.c(a, "defaultTick.label.text", ""), d.c(a, "defaultTick.gridLine.width", 0), d.c(a, "defaultTick.line.width", 0), d.c(a, "defaultTick.line.length", 0), d.c(a, "line.width", 0));
          n.U.ki && !f && (k.startOnTick = k.endOnTick = !1);
          if (u = a.scale)
            if (l = u.range || {}, "array" === JSCL.Ka.K(l) && (l = {
              min: l[0],
              max: l[1]
            }), l.padding && (k.maxPadding = l.padding, k.minPadding = l.padding, k.softThreshold = !1), "undefined" !== typeof l.min && (k.min = p(l.min, u.type), k.startOnTick = !1), "undefined" !== typeof l.max &&
              (k.max = p(l.max, u.type), k.endOnTick = !1), u.type && (k.type = u.type, /stackedLogarithmic/i.test(k.type = u.type) && (k.type = "logarithmic"), "time" === k.type && (k.type = "datetime"), f || "normal" !== u.type || y(l.min) || 0 <= n.Bb().min && (k.min = 0)), d.f(k, u, "linkedTo", "syncWith"), d.f(k, u, "reversed", "invert"), d.f(k, u, "maxZoom", "zoomLimit"), l = u.breaks)
              if ("array" === JSCL.Ka.K(l)) {
                for (var m = [], r = 0, z = l.length; r < z; r++) {
                  var w = l[r];
                  "time" === u.type || w[0].getTime ? w[0].getTime ? m.push({
                    from: w[0].getTime(),
                    to: w[1].getTime(),
                    breakSize: 1
                  }) :
                    "string" === typeof w[0] && m.push({
                      from: (new Date(Date.parse(w[0]))).getTime(),
                      to: (new Date(Date.parse(w[1]))).getTime(),
                      breakSize: 1
                    }) : m.push({
                      from: w[0],
                      to: w[1],
                      breakSize: 1
                    })
                }
                m && d.c(k, "breaks", m)
              } else l.limit && d.c(k, "breaks", 1);
          a.orientation && ("right" === a.orientation || g && "top" === a.orientation) && (k.opposite = !0);
          if (g = a.defaultTick) {
            g.label && (k.labels = n.Ma(g.label));
            if (l = g.gridLine) g.gridLine = n.m.Na(l), l.color && (k.gridLineColor = g.gridLine.color), y(l.width) && (k.gridLineWidth = g.gridLine.width), l.dashStyle &&
              (k.gridLineDashStyle = g.gridLine.dashStyle);
            g.line && (g.line = n.m.Na(g.line), g.line.color && (k.tickColor = g.line.color), y(g.line.length) && (t = k.tickLength = g.line.length), y(g.line.width) && (k.tickWidth = g.line.width));
            !1 === g.enabled && (k.tickEnabled = !1)
          }
          if (g = a.defaultMinorTick) g.label && d.c(k, "labels.minor", n.Ma(g.label)), g.gridLine && (g.gridLine = n.m.Na(g.gridLine), g.gridLine.color && (k.minorGridLineColor = g.gridLine.color), y(g.gridLine.width) && (k.minorGridLineWidth = g.gridLine.width), g.gridLine.dashStyle && (k.minorGridLineDashStyle =
            g.gridLine.dashStyle)), g.line && (g.line = n.m.Na(g.line), g.line.color && (k.minorTickColor = g.line.color), y(g.line.length) && (k.minorTickLength = g.line.length), y(g.line.width) && (k.minorTickWidth = g.line.width)), !1 === g.enabled && (k.minorTickEnabled = !1);
          if (g = a.line) g = n.m.Na(g), g.color && (k.lineColor = g.color), y(g.width) && (k.lineWidth = g.width);
          (g = a.numberPrecision) && 0 < g && (k.allowDecimals = !0);
          void 0 !== a.centerTickMarks && (k.tickmarkPlacement = a.centerTickMarks ? "on" : "between");
          if (void 0 !== a.customTicks) {
            k.customTicks = [];
            g = a.defaultTick || {};
            m = 0;
            for (r = a.customTicks.length; m < r; m++) z = a.customTicks[m], "object" === JSCL.Ka.K(z) ? (l = d.F({}, z, g), delete l.enabled) : (l = d.F({}, g), delete l.enabled, l.value = z), k.customTicks.push(h(l));
            k.tickmarkPlacement = "on"
          }
          n.va ? (d.f(k, u, "tickInterval", "interval", JSCL.ee().intervalToSpan), d.f(k, u, "minorTickInterval", "minorInterval", JSCL.ee().intervalToSpan)) : (d.f(k, u, "tickInterval", "interval"), d.f(k, u, "minorTickInterval", "minorInterval"));
          d.f(k, a, "scaleBreak", "scaleBreak");
          d.f(k, a, "gridLineInterpolation",
            "gridLineInterpolation");
          d.f(k, a, "yIndex", "yIndex");
          d.f(k, a, "offset", "chartAreaOffset");
          a.label && (k.title = n.Je(a.label));
          d.c(k, "labels.maxStaggerLines", 1);
          q(a, k, f);
          d.f(k, a, "offset", "chartAreaOffset");
          k.dateTimeLabelFormats = {
            second: "T",
            minute: "t",
            hour: "t",
            day: "MMM dd",
            week: "MMM dd",
            month: "MMM yy",
            year: "yyyy"
          };
          k.id = n.Wb(a, a.id);
          a.id = k.id;
          d.c(k, "events.afterSetExtremes", e);
          (!b && "vertical" === n.g.I("chartType") || b && "horizontal" === n.g.I("chartType")) && y(t) && !y(d.a(k, "labels.x")) && (t = -5 - t, d.c(k, "labels.x",
            k.opposite ? -t : t));
          return k
        }

        function e() {
          n.G.Sf && (n.G.X = !0)
        }
        n.g.o("map");
        var f = [],
          h;
        if (a.pop) {
          h = 0;
          for (var k = a.length; h < k; h++) f.push(c(a[h], void 0));
          return f
        }
        return c(a, b)
      }

      function O(a) {
        var b = [],
          d;
        if (a)
          for (var c = 0, e = a.length; c < e; c++) b.push(n.cb(a[c], void 0, void 0)), d = n.Fa(a[c]), d.hasSubvalues && b.push(N(a[c]));
        return b
      }

      function A(a) {
        function b(a) {
          var c = a.jscConfig,
            f = {};
          e = a.id;
          f.id = e;
          d.f(f, a, "color", "color");
          d.f(f, a, "name", "name");
          f.parentSeries = e;
          f.isRoot = !0;
          a = c;
          var h, c = d.a(n.json, "defaultSeries.shape");
          a = d.a(a, "shape");
          if (c || a) h = d.F(a, c), a = {}, (c = d.a(h, "label")) ? (a.dataLabels = c = n.Ma(c), c.text && (c.enabled = !0)) : delete a.dataLabels, d.f(a, h, "borderColor", "outline.color"), d.f(a, h, "borderWidth", "outline.width"), d.f(a, h, "borderDashStyle", "outline.dashStyle"), delete a.events, delete a.data, delete a.name, delete a.animation, delete a.defaultPoint, delete a.id, delete a.jscConfig, h = a, delete h.events, delete h.data, delete h.name, delete h.animation, delete h.defaultPoint, delete h.id, delete h.jscConfig;
          return d.F(f,
            h)
        }

        function c() {
          var a, b, e;
          if (a = d.a(n.json, "defaultSeries")) b = n.cb(a), (a = d.a(a, "shape.label")) ? (b.dataLabels = e = n.Ma(a), e.text && (e.enabled = !0, e.formatter = n.gd), a.url || d.c(e, "style.pointer-events", "none")) : delete b.dataLabels, b.level = 1, delete b.events, delete b.data, delete b.name, delete b.animation, delete b.defaultPoint, delete b.id, delete b.jscConfig;
          return b
        }
        var e, f = [],
          h, k, g = [],
          u = {};
        if (n.g.o("treemap")) {
          if (h = c()) u.levels = [h, {
            level: 2,
            dataLabels: {
              enabled: !0
            }
          }];
          for (var l = 0, t = a.length; l < t; l++) {
            var m = a[l];
            h = {};
            e = m.id;
            f.push(b(m));
            for (var r = 0, q = m.data.length; r < q; r++) {
              var z = m.data[r];
              if (k = z.parent) h[z.parent] = d.J(m.data, "id", k), h[z.parent] || n.ub("Parent point with id " + k + " not found.");
              z.parentSeries = e
            }
            r = 0;
            for (q = m.data.length; r < q; r++) {
              var z = m.data[r],
                w = z.id;
              k = z.parent;
              h[w] ? (z.parentSeries = e, z.parent = e, f.push(z)) : (k ? z.parentPoint = k : z.parent = e, z.isLeaf = !0, g.push(z))
            }
          }
          u.data = f.concat(g);
          return [u]
        }
        return a
      }

      function N(a) {
        function b(a, d) {
          d && (g.f(a, d, "whiskerWidth", "width"), g.f(a, d, "stemWidth", "width"), g.f(a,
            d, "whiskerColor", "color"), g.f(a, d, "stemColor", "color"), g.f(a, d, "whiskerLength", "length"), g.f(a, d, "stemDashStyle", "dashStyle"))
        }
        var d = {},
          c = [],
          e, f, h, k, g = JSCL.j,
          u, l, d = {
            type: "errorbar",
            linkedTo: a.id,
            enableMouseTracking: !1
          };
        u = g.F(g.a(a.defaultPoint, "subvalue.line"), g.a(n.json, "defaultSeries.defaultPoint.subvalue.line"), {
          width: 1
        });
        for (var t = 0, m = a.points.length; t < m; t++) {
          l = g.F(a.points[t], a.defaultPoint);
          h = l.y;
          f = [];
          if (e = l.subvalue)
            if (k = e.offset) f = [h - k, h + k];
            else if (k = e.percent) f = [h - h * k / 100, h + h * k / 100];
            else if (k =
              e.range) f = k;
          e = {};
          g.f(e, l, "name", "name");
          g.f(e, l, "x", "x");
          e.low = f[0];
          e.high = f[1];
          f = g.a(a.points[t], "subvalue.line");
          b(e, f);
          c[t] = e
        }
        b(d, u);
        d.data = c;
        return d
      }

      function H(a) {
        var b = {},
          c, e, f, h = d.f,
          k = a.position,
          g = a.offset,
          u, l = n.G.caches.pf;
        if (l) {
          var t = {};
          h(t, d.a(a, "defaultEntry"), "defaultTick.label.text", "text");
          n.options.colorAxis = {
            id: "colAxId",
            tickLength: 0,
            labels: {
              formatter: d.c(n.options, "colorAxis.labels.formatter", function () {
                return n.translate.lc(this, t, n)
              })
            }
          };
          b.symbolHeight = 200;
          e = 0;
          for (u = n.options.series.length; e <
            u; e++) d.c(n.options, "plotOptions.series.axisTypes", ["xAxis", "yAxis", "colorAxis"]), d.c(n.options, "plotOptions.series.parallelArrays", ["x", "y", "valueSP"]), d.c(n.options, "plotOptions.series.colorKey", "valueSP"), n.g.rg(null, "zValue") && d.c(n.options, "plotOptions.series.parallelArrays", ["x", "y", "z", "value"])
        } else b.symbolHeight = 9;
        h(a, a, "defaultEntry.style.color", "defaultEntry.color");
        e = a.defaultEntry = JSCL.ya.wh(a.defaultEntry);
        h(b, a, "customEntries", "customEntries");
        u = d.a(a, "fill");
        if (a.boxVisible) {
          if (u) {
            var m =
              y(a.opacity) ? 1 - a.opacity : a.transparency;
            u = n.m.P(u, m, "box");
            b.backgroundColor = u
          }
          a.outline && (a.outline = n.m.Na(a.outline));
          h(b, a, "borderColor", "outline.color");
          h(b, a, "borderRadius", "radius");
          h(b, a, "borderWidth", "outline.width");
          h(b, a, "borderDashStyle", "outline.dashStyle");
          (u = d.a(b, "borderColor")) && y(m) && (b.borderColor = n.m.kf(m, u))
        } else JSC.ph.legend.fill !== u && u && (u = n.m.P(u, m, "box"), b.backgroundColor = u), b.borderWidth = 0;
        h(b, a, "enabled", "visible");
        h(b, a, "margin", "margin");
        h(b, a, "width", "width");
        h(b, a, "height",
          "height");
        h(b, a, "reversed", "reversed");
        h(b, a, "shadow", "shadow", function (a) {
          return a ? v : a
        });
        e && (h(b, e, "itemWidth", "width"), h(b, e, "symbolWidth", "iconWidth"), h(b, e, "itemStyle", "style", JSCL.ya.gb), h(b, e, "symbolPadding", "padding"), h(b, e, "itemHoverStyle", "states.hover.style", JSCL.ya.gb), h(b, e, "itemHiddenStyle", "states.hidden.style", JSCL.ya.gb), h(b, e, "defaultText", "text"));
        if (h = d.a(a, "titleLabel")) h = d.F(h, {
          style: {
            color: "#323232",
            fontSize: "8pt",
            fontFamily: "Tahoma, Geneva, sans-serif",
            fontWeight: "bold"
          }
        }),
          b.title = n.Ma(h);
        b.symbolWidth = d.s(b.symbolWidth, 19);
        b.symbolRadius = 1;
        if (h = d.a(e, "cssClass")) b.itemStyle || (b.itemStyle = {}), b.itemStyle = d.T(b.itemStyle, JSCL.Hb.zb(h));
        if (h = d.a(e, "classHover")) b.itemHoverStyle || (b.itemHoverStyle = {}), b.itemHoverStyle = d.T(b.itemHoverStyle, JSCL.Hb.zb(h));
        if (h = d.a(e, "classHover")) b.itemHiddenStyle || (b.itemHiddenStyle = {}), b.itemHiddenStyle = d.T(b.itemHiddenStyle, JSCL.Hb.zb(h));
        (e = b.itemStyle.color) && (b.itemStyle.color = n.m.O(e, m));
        (e = b.itemHoverStyle.color) && (b.itemHoverStyle.color =
          n.m.O(e, m));
        (e = b.itemHiddenStyle.color) && (b.itemHiddenStyle.color = n.m.O(e, m));
        /^(top|left|right|bottom|topleft|topright|bottomleft|bottomright)$/.test(k.toLowerCase()) ? f = k : /.+,.+/.test(k) && (c = k);
        c ? (f = c.indexOf(":"), 0 <= f && (b.offsetFrom = c.substr(0, f), c = c.substring(f + 1, c.length)), c = c.split(","), 2 === c.length && (b = d.T(b, {
          layout: "vertical",
          align: "left",
          verticalAlign: "top",
          floating: !0,
          x: parseInt(c[0]),
          y: parseInt(c[1])
        }), "auto" !== a.layout && (b.layout = a.layout))) : f && (b = d.T(b, n.u.v.Fe(f, !0)), g && (c = g.split(","),
          2 === c.length && (b = d.T(b, {
            x: parseInt(c[0]),
            y: parseInt(c[1])
          }))), a.layout && "auto" !== a.layout && (b.layout = a.layout));
        l && ("horizontal" === b.layout ? (b.symbolWidth = 200, b.symbolHeight = 19, y(b.width) && (b.symbolWidth = b.width - (a.padding ? 2 * a.padding : 10))) : y(b.height) && (b.symbolHeight = b.height - (a.padding ? 2 * a.padding : 10)));
        return b
      }

      function G(a, b) {
        if (b) {
          var c = d.a(b, "fill.image");
          if (c && c.charAt) d.c(a, "chart.plotBackgroundImage", c);
          else if (c = d.a(b, "fill")) c = n.m.P(c, y(b.opacity) ? 1 - b.opacity : b.transparency, "chartArea"),
            a.chart.plotBackgroundColor = c;
          b.outline && (b.outline = n.m.Na(b.outline));
          d.f(a, b, "chart.plotBorderColor", "outline.color");
          d.f(a, b, "chart.plotBorderWidth", "outline.width");
          d.f(a, b, "chart.plotBorderDashStyle", "outline.dashStyle");
          d.f(a, b, "chart.plotShadow", "shadow", function (a) {
            return a ? v : a
          });
          n.Hd && "pie" !== n.g.I("chartType") && d.c(E, "chart.plotBorderWidth", 0)
        }
      }

      function R(a, b) {
        function c(a) {
          var b = {};
          a.fill && (b.backgroundColor = n.m.P(a.fill, y(a.opacity) ? 1 - a.opacity : a.transparency, "jsButton"));
          d.f(b, a, "enabled",
            "visible");
          d.f(b, a, "symbolFill", "iconFill");
          d.f(b, a, "hoverSymbolFill", "states.hover.iconFill");
          d.f(b, a, "symbolStroke", "iconOutline.color");
          d.f(b, a, "symbolStrokeWidth", "iconOutline.width");
          d.f(b, a, "hoverSymbolStroke", "states.hover.iconOutline.color");
          return b
        }
        var e = d.a(b, "defaultButton.fill"),
          f, h = b.position,
          k = b.offset,
          g, u = {},
          l = {};
        b.defaultButton = JSCL.ya.vh(b.defaultButton);
        u = JSCL.j.sc(u, b.defaultButton);
        u = JSCL.j.sc(u, b.buttons.print);
        l = JSCL.j.sc(l, b.defaultButton);
        l = JSCL.j.sc(l, b.buttons["export"]);
        f && d.f(a, {
          ext: n.u.v.Fe(f, !0)
        }, "navigation.buttonOptions", "ext");
        /^(top|left|right|bottom|topleft|topright|bottomleft|bottomright)$/.test(h.toLowerCase()) ? f = h : /.+,.+/.test(h) && (g = h);
        g ? (f = g.indexOf(":"), 0 <= f && (a.navigation.offsetFrom = g.substr(0, f), g = g.substring(f + 1, g.length)), g = g.split(","), 2 === g.length && (d.f(a, {
          ext: {
            floating: !0,
            align: "left",
            vertialAlign: "top"
          }
        }, "navigation.buttonOptions", "ext"), a.navigation = d.T(a.navigation, {
          floating: !0,
          align: "left",
          vertialAlign: "top",
          x: parseInt(g[0]),
          y: parseInt(g[1])
        }))) :
          f && (d.f(a, {
            ext: n.u.v.Fe(f, !0)
          }, "navigation.buttonOptions", "ext"), k && (g = k.split(","), 2 === g.length && (a.navigation = d.T(a.navigation, {
            x: parseInt(g[0]),
            y: parseInt(g[1])
          }))));
        d.f(a, b, "navigation.margin", "margin");
        d.c(a, "exporting.buttons.exportButton", c(l));
        d.c(a, "exporting.buttons.printButton", c(u));
        u = n.hg(b.exportOptions);
        a.exporting = JSCL.j.sc(a.exporting, u);
        d.f(a, b, "exporting.enabled", "visible");
        e && (e = n.m.P(e, 0, "jsButton"), d.c(a, "navigation.buttonOptions.backgroundColor", e));
        d.f(a, b, "navigation.buttonOptions.borderColor",
          "defaultButton.outline.color");
        d.f(a, b, "navigation.buttonOptions.borderWidth", "defaultButton.outline.width");
        d.f(a, b, "navigation.buttonOptions.hoverBorderColor", "defaultButton.states.hover.outline.color")
      }

      function ha(a, b) {
        var c = {},
          e = jQuery.extend(!0, null, b, a);
        if (a) {
          var f = n.Ma(e.label);
          f && (e.style = f.style, c = jQuery.extend(!0, null, f, c));
          var e = JSCL.ya.uh(e),
            f = e.fill,
            h = y(e.opacity) ? 1 - e.opacity : e.transparency;
          f && (c.fill = n.m.P(f, h, "jsButton"));
          (f = d.a(e, "states.hover.fill")) && d.c(c, "states.hover.fill", n.m.P(f,
            h, "jsButton"));
          (f = d.a(e, "states.select.fill")) && d.c(c, "states.select.fill", n.m.P(f, h, "jsButton"));
          for (var f = [
            ["stroke", "outline.color"],
            ["stroke-width", "outline.width"],
            ["r", "radius"],
            ["states.hover.stroke", "states.hover.outline.color"],
            ["states.hover.stroke-width", "states.hover.outline.width"],
            ["states.hover.fill", "states.hover.fill"],
            ["style", "style"],
            ["states.hover.style", "states.hover.style"],
            ["states.hidden.style", "states.hidden.style"],
            ["width", "width"],
            ["height", "height"]
          ], h = 0, k = f.length; h <
            k; h++) d.f(c, e, f[h][0], f[h][1]);
          c.style = jQuery.extend(!0, null, {
            cursor: "pointer"
          }, c.style);
          return c
        }
      }

      function V(a, b) {
        var c = d.a(b.toolbar, "buttons.resetZoom"),
          e = d.a(b.toolbar, "defaultButton"),
          f = {},
          h = {};
        c && (h = ha(c, e), d.f(a, h, "lang.resetZoom", "text"), f.theme = h, f.position = {
          align: "left",
          x: 10
        }, f.relativeTo = "plot", a.chart.resetZoomButton = f)
      }

      function P(a, b) {
        var c = {
          items: []
        },
          e, f, h, k, g, u = [],
          l = "",
          t = "0,0";
        h = "C";
        e = 0;
        for (var m = a.length; e < m; e++) {
          f = a[e];
          g = {};
          b && (g = d.merge(g, b), k = d.a(f, "label.color"), h = d.a(f, "label.style.color"),
            k && !h && d.c(f, "label.style.color", k), f = d.merge(f, b), f.fill || (f.fill = g.fill));
          k = y(f.opacity) ? 1 - f.opacity : f.transparency;
          f.fill && (g.fill = n.m.P(f.fill, k, "box"));
          f.position && (t = f.position);
          d.f(g, f, "html", "label.text");
          f.outline && d.c(g, "outline", d.merge(d.a(f, "outline"), d.a(g, "outline")));
          d.f(g, f, "radius", "radius");
          d.f(g, f, "width", "width");
          d.f(g, f, "height", "height");
          d.f(g, f, "padding", "padding");
          d.f(g, f, "label.align", "label.align");
          d.f(g, f, "label.verticalAlign", "label.verticalAlign");
          (h = d.a(g, "outline.color")) &&
            (g.outline.color = n.m.O(h, k));
          g.offset && (t = g.offset);
          f.label.cssClass && (g.style || (g.style = {}), g.style = d.T(g.style, JSCL.Hb.zb(f.label.cssClass), JSCL.ya.gb));
          d.f(g, f, "style", "label.style", JSCL.ya.gb);
          (h = d.a(g, "style.color") || d.a(g, "label.color")) && (g.style.color = n.m.O(h, k));
          t && (k = t.indexOf(":"), 0 <= k && (h = t.substr(0, k), t = t.substring(k + 1, t.length), g.offsetFrom = h), k = t.split(","), 2 === k.length && (g.style = d.T(g.style, {
            left: parseInt(k[0]) + "px",
            top: parseInt(k[1]) + "px"
          })));
          "undefined" === typeof f.boxVisible || f.boxVisible ||
            (g.fill = n.m.O("none", 1), delete g.outline.color);
          var r;
          (r = d.a(f, "label.tooltip")) && u.push('title="' + r + '"');
          u && (l = " " + u.join(","));
          k = d.a(f, "label.url") || d.a(f, "url");
          f = d.a(f, "label.urlTarget") || d.a(f, "urlTarget");
          k && 0 < k.length ? g.html = f && 0 < f.length ? '<a href="' + k.replace(/".*/g, "'") + '" target="' + f + '" ' + l + ">" + g.html + "</a>" : '<a href="' + k.replace(/".*/g, "'") + '"' + l + ">" + g.html + "</a>" : u && (g.html = "<span " + l + ">" + g.html + "</span>");
          c.items.push(g)
        }
        return c
      }

      function k(a, b, c, e) {
        b && (a = d.merge(a, b));
        d.f(c, a, "title", "label.text");
        d.f(c, a, "style", "label.style");
        d.f(c, a, "text", "tooltip");
        c.tooltip = "";
        d.f(e, a, "color", "fill");
        var f = d.a(a, "label.url") || d.a(a, "url");
        d.a(a, "label.urlTarget") || d.a(a, "urlTarget");
        f && 0 < f.length && (c.events = {
          click: function () {
            window.location = f
          }
        })
      }

      function b(a) {
        var b = {},
          c = y(a.opacity) ? 1 - a.opacity : a.transparency;
        d.f(b, a, "backgroundColor", "fill");
        d.f(b, a, "borderColor", "outline.color");
        d.f(b, a, "borderRadius", "radius");
        d.f(b, a, "borderWidth", "outline.width");
        d.f(b, a, "enabled", "enabled");
        d.f(b, a, "shadow", "shadow",
          function (a) {
            return a ? v : a
          });
        d.f(b, a, "snap", "snap");
        d.f(b, a, "style", "label.style", JSCL.ya.gb);
        d.f(b, a, "style.padding", "padding");
        d.f(b, a, "transparency", "transparency");
        y(c) && (b.opacity = 1 - c);
        "auto" === b.borderColor && delete b.borderColor;
        a.label.cssClass && (b.style || (b.style = {}), b.style = d.T(b.style, JSCL.Hb.zb(a.label.cssClass), JSCL.ya.gb));
        return b
      }

      function c(a) {
        var b = {};
        d.f(b, a, "downloadJPEG", "downloadJPG");
        d.f(b, a, "downloadPDF", "downloadPDF");
        d.f(b, a, "downloadPNG", "downloadPNG");
        d.f(b, a, "downloadSVG",
          "downloadSVG");
        d.f(b, a, "exportButtonTitle", "exportButtonTooltip");
        d.f(b, a, "loading", "loading");
        d.f(b, a, "printButtonTitle", "printButtonTooltip");
        d.f(b, a, "resetZoom", "resetZoomText");
        d.f(b, a, "resetZoomTitle", "resetZoomTooltip");
        return b
      }

      function w(a, b) {
        var c = a.series,
          e, f;
        if (n.V && (e = n.V = JSCL.v.Ni(n.V), 11 === e.length && (n.V = e = ""), e && (n.V = e, e = n.V.split(";"), 1 < e.length))) {
          n.Xc = e[0];
          var h = e[1].split(`/`);
          n.Wc = h[2] + ("0" + h[0]).slice(-2) + ("0" + h[1]).slice(-2);
          e[2] === (81323539073415).toString(36) && (n.hf = !0);
          n.V =
            JSCL.v.Oi(e[2]);
          3 < e.length && 0 < e[3].length && (n.V += "on")
        }
        d.c(a, "chart.dataCache", n.V);
        for (var h = 0, k = c.length; h < k; h++) {
          e = c[h];
          f = e.yAxis;
          var g = void 0;
          "undefined" !== typeof f && b.yAxis.pop && (f.toFixed ? g = b.yAxis[f] : f.charAt && (g = JSCL.R.Ea(b.yAxis, f)));
          f = g ? g : b.yAxis.pop ? b.yAxis[0] : b.yAxis;
          f = d.a(f, "scale.type");
          /stacked|stackedLogarithmic/i.test(f) && (e.stacking = "stackedFull" === f ? "percent" : "normal")
        }
        return a
      }

      function D(a) {
        var b, c = a.view;
        c && (b = {}, "3D" === (c.type || "").toUpperCase() && (b.enabled = !0, d.c(b, "depth",
          d.s(c.depth, 35)), d.f(b, c, "beta", "rotation"), d.f(b, c, "alpha", "tilt"), "pie" === n.g.I("chartType") ? (d.c(n.options, "plotOptions.pie.depth", d.s(c.depth, 35)), d.c(b, "alpha", 65), d.c(b, "beta", 0)) : d.c(a, "fill", ["none", !1]), n.Hd = !0));
        return b
      }

      function r(a, b) {
        function c(a, b) {
          var e = {},
            f;
          f = a[0] || a;
          var h = n.g.o("gauge", f),
            k = d.F(d.a(a, "shape"), d.a(b, "shape"), h ? {
              fill: "white",
              type: "clip",
              outline: {
                color: "gray",
                width: 1
              },
              visible: !0,
              transparency: 0
            } : {
              fill: "white",
              type: "clip",
              visible: !0,
              transparency: 0
            }),
            g = k.fill,
            p = d.a(k, "outline.color"),
            u = d.a(k, "outline.width") || 0,
            l = h ? {
              orientation: 0,
              sweep: 270
            } : {
              orientation: 180,
              sweep: 360
            };
          k.visible ? (k = y(k.opacity) ? 1 - k.opacity : k.transparency, g && (g = n.m.P(g, k, "gaugePolarBack"), d.c(e, "background.backgroundColor", g)), d.c(e, "background.borderWidth", u), d.c(e, "background.borderColor", n.m.O(p, k))) : (d.c(e, "background.backgroundColor", null), d.c(e, "background.borderWidth", 0));
          h ? d.c(e, "background.shape", JSCL.v.Gd(["clip", "circle"], ["gaugeOutline", "circle"], n.g.L("circularGaugeType", "circle", f) ? "circle" : "clip")) :
            ("polygon" !== q ? d.c(e, "background.shape", "circle") : d.c(e, "background.shape", "radarOutline"), d.c(e, "background.outerRadius", "100%"), d.c(n.options, "plotOptions.series.pointPlacement", "on"));
          f = JSCL.Ka.bh(f.angle, b.angle, l);
          y(f) && (f = JSCL.Ka.Ie(f), d.c(e, "startAngle", f.start), d.c(e, "endAngle", f.end));
          return e
        }
        var e, f, h = [],
          k, g, u = [],
          l = !1,
          t = a.yAxis;
        k = a.xAxis;
        var m;
        g = b.defaultSeries;
        var r, q, z;
        e = n.g.o("radar");
        z = n.g.Zh(b.series);
        e && (n.g.L("radarType", "auto") ? q = n.Ga ? "polygon" : null : n.g.L("radarType", "spider") &&
          (q = "polygon"), q && (t.pop ? $.each(t, function (a) {
            t[a].gridLineInterpolation || (t[a].gridLineInterpolation = q)
          }) : t.gridLineInterpolation || (t.gridLineInterpolation = q)));
        if (e && z && 1 === z.length) h.push(c({}, g)), a.pane = h;
        else if (0 < (f = z.length)) {
          for (e = 0; e < f; e++) {
            r = z[e];
            l = m = r[0];
            m = a.series[m.i];
            h.push(c(l, g));
            var l = n.g.o("radar", m.jscConfig),
              w;
            "string" === typeof m.yAxis ? (w = JSCL.R.Ea(t, m.yAxis)).pane = e : (w = t[m.yAxis]).pane = e;
            if (w && !l) {
              var x = !1;
              y(w.max) && y(w.min) && (x = !0);
              if (!x) {
                for (var F = x = "undefined", v = 0, L = r.length; v <
                  L; v++) {
                  var Q = n.Fa(r[v]);
                  if ("undefined" === x || x > Q.min) x = Q.min;
                  if ("undefined" === F || F < Q.max) F = Q.max
                }
                r = JSCL.Zc.Yc(x, F, 10, {
                  Lc: 1,
                  gc: w.min,
                  fc: w.max,
                  Pc: w.tickInterval
                });
                w.min = r.min;
                w.max = r.max
              }
            }
            l && ("string" === typeof m.xAxis ? JSCL.R.Ea(k, m.xAxis).pane = e : k[m.xAxis].pane = e)
          }
          e = 0;
          for (f = t.length; e < f; e++) k = t[e], g = JSCL.R.Ea(b.yAxis, k.id), y(g = d.a(g, "scale.syncWith")) && (g = JSCL.R.Ea(t, g), k.pane = g.pane);
          $.each(h, function (a) {
            u = d.Kh(t, "pane", a);
            u.pop && 2 == u.length && (u[0].offset = -30, u[1].offset = -25, d.c(u[1], "labels.distance",
              15), u[1].tickPosition = "outside", u[1].minorTickPosition = "outside")
          });
          a.pane = h
        }
      }

      function h(a, b, c, e) {
        var f, h = b.navigator,
          k = {
            scrollbar: {
              buttonBackgroundColor: n.m.P({
                angle: 90,
                stops: [
                  [0, "rgb(243,243,243)"],
                  [.49, "rgb(232,232,232)"],
                  [.5, "rgb(214,214,216)"],
                  [.9, "rgb(188,189,192)"],
                  [.91, "rgb(204,204,206)"],
                  [1, "rgb(204,204,206)"]
                ]
              }),
              barBackgroundColor: n.m.P({
                angle: 90,
                stops: [
                  [0, "rgb(243,243,243)"],
                  [.49, "rgb(232,232,232)"],
                  [.5, "rgb(214,214,216)"],
                  [.9, "rgb(188,189,192)"],
                  [.91, "rgb(204,204,206)"],
                  [1, "rgb(204,204,206)"]
                ]
              }),
              trackBorderColor: "rgb(191,191,191)",
              rifleColor: "rgb(72,72,72)",
              trackBackgroundColor: "rgb(233,233,233)",
              trackBorderRadius: 1,
              buttonArrowColor: "rgb(72,72,72)",
              buttonBorderColor: "rgb(75,75,75)"
            },
            navigator: {
              handles: {
                backgroundColor: n.m.P({
                  angle: 90,
                  stops: [
                    [0, "rgb(243,243,243)"],
                    [.49, "rgb(232,232,232)"],
                    [.5, "rgb(214,214,216)"],
                    [.9, "rgb(188,189,192)"],
                    [.91, "rgb(204,204,206)"],
                    [1, "rgb(204,204,206)"]
                  ]
                }),
                borderColor: "rgb(75,75,75)",
                radius: 1
              },
              height: 36,
              outlineColor: "black",
              maskFill: n.m.P(["white", .4])
            },
            rangeSelector: {
              buttonTheme: {
                fill: {
                  angle: 90,
                  stops: [
                    [0, "rgb(224,225,234)"],
                    [.5, "rgb(245,246,247)"],
                    [1, "rgb(218,222,228)"]
                  ]
                },
                stroke: "rgb(116,122,154)",
                r: 2,
                width: 8,
                padding: 1,
                height: 15,
                verticalAlign: "top",
                style: {
                  fontSize: "8.0pt"
                }
              },
              buttonSpacing: 4,
              inputBoxStyle: {
                left: "10px"
              },
              inputDateFormat: "d",
              inputEditDateFormat: "d",
              fill: n.m.P({
                angle: 90,
                stops: [
                  [0, "rgb(223,217,235)"],
                  [.48, "rgb(222,217,235)"],
                  [.51, "rgb(201,191,222)"],
                  [1, "rgb(201,191,222)"]
                ]
              }),
              stroke: "rgb(197,197,197)",
              strokeWidth: 1,
              inputStyle: {}
            },
            lang: {
              rangeSelectorFrom: "",
              rangeSelectorTo: " - ",
              rangeSelectorZoom: ""
            }
          };
        d.f(a, h, "scrollbar.enabled", "xScrollbarEnabled");
        d.f(a, h, "rangeSelector.enabled", "toolbar.visible");
        d.f(a, h, "rangeSelector.fill", "toolbar.fill", function (a) {
          return n.m.uc(a, "navBar", 0)
        });
        d.f(a, h, "rangeSelector.stroke", "toolbar.outline.color");
        d.f(a, h, "rangeSelector.strokeWidth", "toolbar.outline.width");
        f = d.a(h, "toolbar.quickZoom.intervals");
        "auto" === f ? d.c(a, "rangeSelector.buttons", JSCL.R.Oh(c, e)) : d.c(a, "rangeSelector.buttons", JSCL.R.vf(f, c, e));
        f = d.a(h, "toolbar.quickZoom.initial");
        if ("undefined" !== typeof f)
          if (f.charAt) {
            c = 0;
            var g = JSCL.R.ng(f);
            for (f = a.rangeSelector.buttons.length; c < f; c++)
              if (e = a.rangeSelector.buttons[c], e.type === g.type && e.count === g.count) {
                d.c(a, "rangeSelector.selected", parseInt(c));
                break
              }
          } else f.toFixed && d.c(a, "rangeSelector.selected", f);
        d.f(a, h, "rangeSelector.buttonSpacing", "toolbar.quickZoom.spacing");
        c = ha(d.a(h, "toolbar.quickZoom.defaultButton"));
        d.c(a, "rangeSelector.buttonTheme", c);
        d.f(a, h, "rangeSelector.inputEnabled", "toolbar.rangeInput.visible");
        d.f(a, h,
          "rangeSelector.inputDateFormat", "toolbar.rangeInput.formatString");
        d.f(a, h, "rangeSelector.inputEditDateFormat", "toolbar.rangeInput.formatStringEdit");
        d.f(a, h, "rangeSelector.inputStyle", "toolbar.rangeInput.boxStyle", JSCL.ya.gb);
        (f = d.a(b, "chartArea.interactivity")) && -1 < f.indexOf("dragScrolling") ? d.c(a, "chart.panning", !0) : (d.c(a, "chart.panning", !1), f && -1 < f.indexOf("arbitrarySelection") && d.c(a, "chart.zoomType", "x"));
        d.f(a, h, "navigator.enabled", "previewArea.visible");
        d.f(a, h, "navigator.height", "previewArea.height");
        d.f(a, h, "navigator.margin", "previewArea.margin");
        if (f = d.a(h, "previewArea.seriesSettings")) b = n.cb(f), delete b.data, d.c(a, "navigator.series", b);
        return a = jQuery.extend(!0, null, k, a)
      }

      function T() {
        if (u) {
          var g = n.g.o("map");
          E.series = [];
          for (var l = 0, t = u.length; l < t; l++) {
            var m = u[l],
              q = !1,
              x;
            g && n.g.Ta(m) && (m = n.ig(m));
            x = m.points = m.points || [];
            for (var v = 0, L = x.length; v < L; v++) x[v].drilldown && (q = !0), x[v] = z.kb(x[v], d.a(n.json, "xAxis.scale.type"), !1, n.va);
            q = n.cb(m, "", n.va, null, q ? E.colors[parseInt(l)] : null);
            q = JSCL.na.tj(n,
              q, Q);
            E.series.push(q);
            if (0 < Q.Zb.length)
              for (x = 0, v = Q.Zb.length; x < v; x++) n.ub(Q.Zb[x]);
            if (x = n.Fa(m)) x.hasSubvalues && (n.g.L("seriesType", "line", m) ? E.series.splice(l, 0, N(m)) : E.series.push(N(m))), y(x.yStartSum) && n.g.L("seriesType", "area") && (n.g.L("lineSeriesType", "spline") ? q.type = "areasplinerange" : q.type = "arearange")
          }
          E.series = A(E.series);
          n.ud ? n.Te = u[0].id : n.ec = []
        }
        n.va || !n.U.Of || n.U.zc || n.U.Xb || n.g.L("behavior", "noNameGrouping") || (n.Ga = !0, E.series = n.yc(E.series));
        a.yAxis && (E.yAxis = C(a.yAxis, !1));
        a.xAxis &&
          (E.xAxis = J(a.xAxis));
        a.chartArea && G(E, a.chartArea);
        a.title && (E.title = n.Ke(a.title));
        a.toolbar && (V(E, a), R(E, a.toolbar));
        a.annotations && (E.labels = P(a.annotations, a.defaultAnnotation));
        a.languageStrings && (E.lang = jQuery.extend(!0, null, c(a.languageStrings), E.lang));
        a.defaultTooltip && (E.tooltip = b(a.defaultTooltip), d.f(E, a.defaultTooltip, "plotOptions.series.stickyTracking", "sticky"));
        E = w(E, a);
        a.defaultPoint && a.defaultPoint.label && (g = d.a(E, "plotOptions.series.dataLabels") || {}, d.c(E, "plotOptions.series.dataLabels",
          d.W(n.Ma(a.defaultPoint.label, "dataLabels"), g)));
        d.c(E, "plotOptions.series.shadow", !1);
        a.defaultSeries && (g = d.a(a, "xAxis.scale.type"), F = n.cb(a.defaultSeries, g), E.plotOptions || (E.plotOptions = {}), E.plotOptions = d.T(E.plotOptions, {
          series: F
        }));
        E.plotOptions.series.cropThreshold = 3;
        this.Qd = JSCL.mc.Af(n, a, a.defaultSeries, a.yAxis, a.xAxis);
        this.Pd = JSCL.mc.Df(n, a, a.defaultSeries, a.yAxis, a.xAxis);
        d.f(E, K, "chart.zoomType", "axisToZoom");
        n.va && (g = JSCL.R.Sh(JSCL.R.Nh(a)), E = h(E, a, g.min, g.max));
        E.plotOptions || (E.plotOptions = {});
        g = d.a(a, "defaultPoint.url");
        l = d.a(a, "defaultPoint.events.click");
        t = d.a(a, "defaultSeries.cursor");
        if (g || l) t = t || "pointer";
        E.plotOptions = jQuery.extend(!0, null, E.plotOptions, {
          series: {
            events: {
              click: function (a) {
                var b = a.point,
                  c = b.options || {},
                  f = b.series,
                  b = f.options;
                a = d.Va(a, "point.color", "point.series.color");
                var h = c.url = d.a(c, "url") || d.a(this.options, "defaultPoint.url");
                f && (c && void 0 !== c.url ? (f = n.$a(f.xAxis, f.yAxis), h = n.La(h, b, c, f, a), e(h, this.options, c, a)) : (c = f.options, void 0 !== c.defaultPoint && void 0 !==
                  c.defaultPoint.uRL && e(c.defaultPoint.uRL, this.options, c, a)))
              }
            },
            cursor: t,
            dataLabels: {
              enabled: n.jb,
              formatter: n.gd
            },
            dial: {
              radius: "90%",
              borderWidth: 1,
              baseWidth: 6,
              topWidth: 2,
              baseLength: "0%",
              rearLength: "0%"
            },
            pivot: {
              radius: 15,
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: JSCL.m.P(["gray", "black", -90])
            }
          }
        });
        n.ud && d.c(E, "plotOptions.series.point.events.click", function (a) {
          a = a.point.options;
          a.drillID && n.ce(a.drillID)
        });
        n.va ? d.c(E, "tooltip.formatter", function () {
          var a = {
            headerFormat: '<span style="font-size: 12px">%xValue</span><br/>',
            pointFormat: '<span style="color:%colorLabel">%seriesName</span>: <b>%yValue</b><br/>',
            pointFormatOhlc: '<span style="color:%colorLabel">%seriesName</span>: <br/>Open:<b>%open</b><br/>High:<b>%high</b><br/>Low:<b>%low</b><br/>Close:<b>%close</b><br/>'
          },
            b = this.points ? this.points[0] : this,
            d = b.series.options,
            c = b.series.color,
            e, f = [];
          e = n.$a(b.series.xAxis, b.series.yAxis);
          b = n.La(a.headerFormat, d, b.point, e, c);
          if (this.points)
            for (var c = 0, h = this.points.length; c < h; c++) {
              var k = a.pointFormat,
                g = this.points[c],
                d = g.series.options;
              if ("ohlc" === g.series.type || "candlestick" === g.series.type) k = a.pointFormatOhlc;
              e = n.Qg(e, g.series.yAxis);
              f.push(n.La(k, d, g.point, e, g.series.color))
            }
          return b + f.join("")
        }) : a.defaultTooltip && a.defaultTooltip.enabled && (E.tooltip || (E.tooltip = {}), E.tooltip = jQuery.extend(!0, null, E.tooltip, {
          formatter: function () {
            var b = this.point,
              c;
            if ("undefined" === typeof b) c = this.x + "";
            else {
              c = b.options;
              var e = b.series.options,
                f, h = b.series.xAxis,
                k = b.series.yAxis,
                g = d.Va(b, "point.color", "series.color"),
                u;
              g || (g = d.Va(b, "options.color",
                "series.color"));
              f = n.$a(h, k);
              b = d.Va(b, "options.tooltip", "series.options.defaultPoint.tooltip", "series.chart.options.chart.defaultPoint.tooltip") || d.a(n.json, "defaultSeries.defaultPoint.tooltip");
              "undefined" === typeof b && (b = (u = d.a(c, "parentSeries")) ? n.B(u) : e.jscConfig, b = JSCL.mc.Af(n, a, b, k ? k.options : a.yAxis, h ? h.options : a.xAxis, c) || n.Qd);
              jQuery.isFunction(b) && c.id && (h = n.get(c.id), b = b(h));
              b && b.replace ? (n.g.L("behavior", "tree") && c.parentSeries && c.parentSeries != e.id && (e = n.B(c.parentSeries)), c = n.La(b, e, c,
                f, g)) : c = !1
            }
            return c
          }
        }));
        n.translate.lc = function (b, c, e) {
          function f() {
            return z ? new Date(g) : g
          }

          function h() {
            return {
              N: l || u,
              culture: p
            }
          }

          function k(a, b) {
            return JSCL.v.Mb(a, n, "value,name", f, function () {
              b && !b.Ra && (b.Ra = h().N)
            })
          }
          var g = b.value,
            u = c ? c.formatString : void 0,
            l = b.dateTimeLabelFormat,
            p, t, m = d.a(c, "defaultTick.label.text"),
            q = d.a(c, "defaultTick.label.url"),
            r = d.a(c, "defaultTick.label.urlTarget"),
            z = !1;
          e || (e = n);
          d.Db(c) && (b.axisID ? (t = JSCL.R.Ea(c, b.axisID), m = d.a(t, "defaultTick.label.text"), q = d.a(t, "defaultTick.label.url"),
            r = d.a(t, "defaultTick.label.urlTarget")) : d.a(b, "axis.options.id") && (t = JSCL.R.Ea(c, d.a(b, "axis.options.id")), m = d.a(t, "defaultTick.label.text"), q = d.a(t, "defaultTick.label.url"), r = d.a(t, "defaultTick.label.urlTarget")));
          t = e.va ? c.id || b.axis.options.id : b.axisID || d.a(b, "axis.options.id");
          if (t = JSCL.R.Ea(c, t)) t.formatString && (u = t.formatString), c = t;
          b.isMinor && (m = d.a(c, "defaultMinorTick.label.text"), q = d.a(c, "defaultMinorTick.label.url"), r = d.a(c, "defaultMinorTick.label.urlTarget"));
          p = c && c.cultureName ? c.cultureName :
            a.defaultCultureName;
          e.va ? e.chartObject ? (c = b.axis || e.ha(c.id)) && (c.isXAxis ? z = !0 : "undefined" !== typeof m && "percent" === d.a(a, "yAxis.scale.type") && (m = "%value%")) : b.dateTimeLabelFormat ? z = !0 : "undefined" === typeof m && "percent" === d.a(a, "yAxis.scale.type") && (m = "%value%") : "datetime" === d.a(b, "axis.options.type") && (z = !0);
          u || z || (u = "N0");
          m = d.a(b, "tick.customTick.label.text") || m;
          z || "N0" !== u || (c = JSCL.mc.jh(g.toString(), "."), 0 < c && (u = "n" + c));
          jQuery.isFunction(m) ? g = m(b.value) : m = JSCL.v.Ec(m, {}, f, h, k);
          "undefined" !== typeof g &&
            (z ? (u && (l = u), g = JSCL.v.format(e, new Date(g), l)) : u && (g = JSCL.v.format(e, g, u, p)));
          jQuery.isFunction(m) && (m = m(b.value));
          void 0 !== m && m.charAt ? (m = m.replace(/%value/gi, g).replace(/%name/gi, g), m = e.Kb(m)) : m = g;
          q && 0 < q.length && (q = JSCL.v.Ec(q, {}, f, h, k), m = r && 0 < r.length ? '<a href="' + q.replace(/%value/gi, m).replace(/".*/g, "'") + '" target="' + r + '">' + m + "</a>" : '<a href="' + q.replace(/%value/gi, m).replace(/".*/g, "'") + '">' + m + "</a>");
          return m
        };
        f() ? ((g = d.a(E, "chart.spacingBottom")) ? 20 > g && (g = 24) : g = 24, d.c(E, "chart.spacingBottom",
          g)) : E.credits = {
            enabled: !1
          };
        E.chart.dnc_color = f;
        if (d.Db(E.yAxis))
          for (g = 0, l = E.yAxis.length; g < l; g++) d.c(E.yAxis[g], "labels.formatter", function () {
            return n.translate.lc(this, a.yAxis, n)
          });
        else d.c(E, "yAxis.labels.formatter", function () {
          return n.translate.lc(this, a.yAxis, n)
        });
        if (d.Db(E.xAxis))
          for (g = 0, l = E.xAxis.length; g < l; g++) d.c(E.xAxis[g], "labels.formatter", function () {
            return n.translate.lc(this, a.xAxis, n)
          });
        else d.c(E, "xAxis.labels.formatter", function () {
          return n.translate.lc(this, a.xAxis, n)
        });
        this.cb = n.cb;
        if (n.va) {
          if (d.Db(a.chartArea)) {
            t = a.chartArea.length;
            m = a.spacingChartArea || 5;
            x = 100;
            q = v = 0;
            d.Db(E.yAxis) || (E.yAxis = [E.yAxis]);
            g = E.yAxis[0].yIndex = 0;
            for (l = a.chartArea.length; g < l; g++)
              if (0 < parseInt(g)) {
                var L = O(a.chartArea[g].series),
                  D = [],
                  B, D = a.chartArea[g];
                if (D.yAxis)
                  if (D.yAxis.pop) {
                    B = [];
                    for (var Y = 0, M = D.yAxis.length; Y < M; Y++) B.push(C(jQuery.extend(!0, null, D.yAxis[Y], {
                      yIndex: parseInt(g)
                    })))
                  } else B = [C(jQuery.extend(!0, null, a.chartArea[g].yAxis, {
                    id: "caax" + g,
                    yIndex: parseInt(g)
                  }))];
                Y = 0;
                for (M = L.length; Y < M; Y++) D =
                  L[Y], "undefined" === typeof D.yAxis ? D.yAxis = E.yAxis.length : D.yAxis.charAt || (D.yAxis += E.yAxis.length), E.series.push(L[Y]);
                Y = 0;
                for (M = B.length; Y < M; Y++) a.chartArea[g].height && (B[Y].height = a.chartArea[g].height), E.yAxis.push(B[Y])
              } else {
                L = O(a.chartArea[g].series);
                D = [];
                E.series || (E.series = []);
                Y = 0;
                for (M = L.length; Y < M; Y++) E.series.push(L[Y]);
                if (E.yAxis)
                  if (E.yAxis.pop)
                    for (Y = 0, M = E.yAxis.length; Y < M; Y++) D.push(E.yAxis[Y]);
                  else D.push(E.yAxis);
                a.chartArea[g].yAxis && (B = jQuery.extend(!0, null, a.chartArea[g].yAxis, a.yAxis.pop ?
                  a.yAxis[0] : a.yAxis), B.yIndex = 0, E.yAxis[0] = C(B, !1));
                Y = 0;
                for (M = D.length; Y < M; Y++) D[Y].yIndex = 0, a.chartArea[g].height && (D[Y].height = a.chartArea[g].height);
                E.yAxis = D
              } g = 0;
            for (l = a.chartArea.length; g < l; g++)
              if (B = a.chartArea[g].height) v++, 1 >= B ? x -= 100 * B : 1 < B && (x -= B / ((a.height || 600) - 50) * 100);
            x /= a.chartArea.length - v;
            v = -1;
            g = L = 0;
            for (l = E.yAxis.length; g < l; g++)(B = E.yAxis[g].height) && (1 >= B ? E.yAxis[g].heightPercentage = 100 * B : 1 < B && (E.yAxis[g].heightPercentage = B / ((a.height || 600) - 50) * 100)), v != E.yAxis[g].yIndex && (q += L, "undefined" ===
              typeof E.yAxis[g].offset && -1 !== v && (E.yAxis[g].offset = 0)), E.yAxis[g].heightPercentage || (E.yAxis[g].heightPercentage = x), E.yAxis[g].cnt = t, E.yAxis[g].caSpacing = m, E.yAxis[g].topPerc = q / 100, L = E.yAxis[g].heightPercentage, v = E.yAxis[g].yIndex
          }
          if (0 < n.Sb.length) {
            B = {
              data: [],
              type: "flags",
              shape: "squarepin",
              onSeries: n.Sb[0][3]
            };
            g = 0;
            for (l = n.Sb.length; g < l; g++) t = n.Sb[g], m = {
              x: t[0],
              y: t[1]
            }, k(t[2], a.defaultAnnotation, m, B), B.data.push(m);
            E.series.push(B)
          } (g = d.a(a, "yAxis.scale.type")) && "percent" === g && d.c(E, "plotOptions.series.compare",
            "percent")
        }
        B = !1;
        g = 0;
        for (l = E.series.length; g < l; g++) {
          t = E.series[g];
          "empty" === t.type && (E.series.splice(parseInt(g), 1), l = E.series.length);
          var T = function (a, b) {
            var d = b ? E.xAxis : E.yAxis;
            if (d.pop)
              for (var c = 0, e = 0, f = d.length; e < f; e++) {
                if (d[e].id === a) return c;
                c++
              }
          };
          t.yAxis && t.yAxis.charAt && (t.yAxis = T(t.yAxis))
        }
        if (E.yAxis.pop)
          for (g = 0, l = E.yAxis.length; g < l; g++) {
            t = E.yAxis[g];
            if ("undefined" !== typeof t.min || "undefined" !== typeof t.max) B = !0;
            t.linkedTo && (t.linkedTo = T(t.linkedTo))
          }
        if (E.xAxis.pop)
          for (g = 0, l = E.xAxis.length; g <
            l; g++) {
            t = E.xAxis[g];
            if ("undefined" !== typeof t.min || "undefined" !== typeof t.max) B = !0;
            t.linkedTo && (t.linkedTo = T(t.linkedTo, !0))
          }
        B && (E.chart.alignTicks = !1);
        n.g.li() && r(E, a);
        d.c(E, "plotOptions.series.turboThreshold", 55E3);
        d.c(E, "tooltip.style.pointer-events", "none");
        d.c(n.options, "plotOptions.series.dataLabels.defer", !1);
        d.c(n.options, "tooltip.shape", "square");
        d.c(n.options, "plotOptions.series.dataLabels.style.textShadow", "none");
        d.c(n.options, "plotOptions.series.dataLabels.style.HcTextStroke", null);
        a.legend &&
          (n.G.update("series"), E.legend = H(a.legend), n.G.caches.pf || d.c(E, "legend.labelFormatter", function () {
            var a = {},
              b, a = this.xAxis,
              c = this.yAxis;
            b = d.a(this.options, "jscConfig.legendEntry.text") || d.a(this, "chart.options.legend.defaultText");
            a = n.$a(a, c);
            jQuery.isFunction(b) ? (a = n.get(this.options.id), a.color = this.color, b = b(a)) : b = n.Ba(b, this.options, a);
            return b
          }));
        n.g.I("circularGaugeType");
        n.g.o("heatmap");
        d.c(E, "chart.dataCache", n.V);
        delete n.V;
        return E
      }
      var E = {},
        ea = window.location.href.toUpperCase(),
        n = this,
        K = a,
        u = a.series,
        F, d = n.u.j,
        z = n.u.na,
        L;
      n.U = {
        Qf: !1,
        Of: !0,
        ji: !1,
        Xb: !0,
        ni: !1,
        zc: !0,
        ik: !1
      };
      n.jb = !1;
      E.symbols = B;
      E.Nj = {};
      this.json = a;
      n.options = E;
      d.c(E, "chart.ctManager", n.g);
      n.gd = function () {
        var b = this.point,
          d = b.options,
          c = b.series.options,
          e, f, h, k, g, u;
        e = b.series.xAxis;
        h = b.series.yAxis;
        var l = JSCL.j.Va(this, "point.color", "series.color");
        if (d.eCount) return "";
        f = n.$a(e, h);
        e = n.g.L("behavior", "tree", c) ? JSCL.j.Va(this, "point.dlOptions.text", "point.dataLabels.text", "point.label.text", "point.options.label.text") || JSCL.j.Va(this,
          "point.series.options.defaultPoint.label.text", "series.chart.options.chart.defaultPoint.label.text", "series.options.defaultPoint.label.text") : JSCL.j.Va(this, "point.options.label.text", "point.series.options.defaultPoint.label.text", "series.chart.options.chart.defaultPoint.label.text") || JSCL.mc.Df(n, a, c.jscConfig, (h ? h.options : void 0) || a.yAxis, (e ? e.options : void 0) || a.xAxis, d) || n.Pd;
        h = JSCL.j.Va(this, "point.options.label.url", "point.series.options.defaultPoint.label.url", "series.chart.options.chart.defaultPoint.label.url");
        k = JSCL.j.Va(this, "point.options.label.url", "point.series.options.defaultPoint.label.url", "series.chart.options.chart.defaultPoint.label.url");
        n.g.L("behavior", "tree") && d.parentSeries && d.parentSeries != c.id && (c = n.B(d.parentSeries), b.isLeaf || (g = !0));
        jQuery.isFunction(e) ? d.id && (b = n.get(d.id), u = e(b)) : e && (u = g ? n.Ba(e, c, f, l) : n.La(e, c, d, f, l));
        return e ? (h && 0 < h.length && (h = g ? n.Ba(h, c, f, l) : n.La(h, c, d, f, l), u = k && 0 < k.length ? '<a href="' + h.replace(/".*/g, "'") + '" target="' + k + '">' + u + "</a>" : '<a href="' + h.replace(/".*/g, "'") +
          '">' + u + "</a>"), u) : ""
      };
      n.g.Ug(n);
      JSCL.yb.rh(n.C, a);
      if (d.Db(a.palette)) {
        E.colors = [];
        L = 0;
        for (var t = a.palette.length; L < t; L++) E.colors.push(n.m.wb(a.palette[L]))
      } else E.colors = a.palette ? JSCL.palettes.get(a.palette) : JSCL.palettes.get(0);
      "horizontal" === K.type && (n.wd = !0);
      E = function (a, b) {
        var d, c = JSCL.j;
        c.f(a, b, "chart.borderColor", "box.outline.color");
        c.f(a, b, "chart.borderWidth", "box.outline.width");
        c.f(a, b, "chart.borderRadius", "box.radius");
        d = y(d = c.a(b, "mapping.projection")) ? d : !0;
        c.c(a, "plotOptions.map.projection",
          d);
        "stacked" === b.zAxisScaleType && c.c(n.options, "plotOptions.series.grouping", !1);
        if (d = b.chartArea) d && d.pop && 0 < d.pop.length && (d = d[0]), c.c(a, "chart.options3d", D(d)), n.Hd && c.c(a, "chart.plotBorderWidth", 0);
        n.g.o("map") && c.c(a, "chart.panning", "xy");
        n.V = n.C.Rh();
        c.f(a, K, "chart.renderTo", "targetElement");
        c.f(a, K, "chart.width", "width");
        c.f(a, K, "chart.height", "height");
        c.f(a, K, "legend", "legend");
        c.f(a, K, "chart.defaultPoint", "defaultPoint");
        c.f(a, K, "chart.marginLeft", "margin.left");
        c.f(a, K, "chart.marginTop",
          "margin.top");
        c.f(a, K, "chart.marginRight", "margin.right");
        c.f(a, K, "chart.marginBottom", "margin.bottom");
        c.f(a, K, "chart.animation", "animation");
        c.f(a, K, "chart.margin", "margin");
        (d = n.m.O(c.a(b, "box.fill") || b.fill)) && c.c(a, "chart.backgroundColor", n.m.wb(d));
        return a
      }(E, a);
      t = a.xAxis;
      d.a(t, "length") && (t = t[0]);
      t && ((L = t.spacingPercentage) && d.c(E, "plotOptions.series.groupPadding", L), (L = t.staticColumnWidth) && d.c(E, "plotOptions.series.pointWidth", L));
      void 0 !== a.events && (E.chart.events = l(a.events));
      (L = d.a(a,
        "defaultSeries.defaultPoint.label")) ? L.visible ? n.jb = !0 : L.text && 0 < L.text.length && (n.jb = !0) : n.jb = !1;
      var Q = {};
      n.g.o("map") ? (L = n.u.v.Aa(), JSCL.gjParser.lg(u, n, L, function () {
        g(T())
      })) : g(T())
    },
    ab: function (a) {
      this.xe = a;
      this.Nd.push(a)
    },
    zg: function (a) {
      var g = this.chartObject,
        f = m.a(this.json, "title");
      f && (a = this.Ke(f, a), g.setTitle(a, null, !1));
      g.isDirtyLegend = !0
    },
    yf: function () {
      var a = this.json,
        g = this.chartObject,
        f;
      f = this.C.ua.Ia;
      if (this.g.o("map")) {
        f = JSCL.gjParser.yi(f);
        var l, x = y(l = m.a(a, "mapping.projection"));
        l = y(l = m.a(a, "mapping.projection")) ? l : !0;
        g.redraw ? g.setProjection(f ? !1 : x ? l : "mercator") : m.c(this.options, "plotOptions.map.projection", f ? !1 : x ? l : "mercator")
      }
    },
    Sg: function (a, g) {
      function f() {
        e.push(a);
        l.Hc();
        for (var f = 0, A = a.points.length; f < A; f++) a.points[f] = v.kb(a.points[f], m.a(l.json, "xAxis.scale.type"));
        l.Ga && (e = l.yc(e), JSCL.j.Cc(C, l.Y) || x.xAxis[0].setCategories(l.Y, !1));
        f = 0;
        for (A = e.length; f < A; f++) {
          var y = e[f],
            B = q[f];
          B ? B.setData(y.points, !1) : x.addSeries(l.cb(y), !1)
        }
        l.ba(g.animation)
      }
      var l = this,
        x = l.chartObject,
        e = l.json.series,
        q = x.series,
        v = l.u.na,
        C = l.Y;
      l.Ha = !0;
      g = g || {};
      l.ab("updateData");
      x && (l.g.o("map") ? l.Ag(a, f) : f())
    },
    Ag: function (a, g) {
      var f = this,
        l = f.chartObject,
        m = {
          bd: f.C.ua.Ia,
          qc: f.json.series
        };
      "function" === typeof a && (g = a, a = void 0);
      if (f.g.o("map")) {
        a && (m.fb = [a]);
        var e = JSCL.gjParser.Zf("", "", m, function () {
          for (var a, m = f.u.v.Aa(), x = 0, v = e.length; x < v; x++) delete e[x].map;
          e.length ? JSCL.gjParser.lg(e, f, m, function () {
            "zoom" !== f.xe && l.resetZoom();
            f.yf();
            for (var m = 0, x = e.length; m < x; m++) {
              var v = e[m];
              v.id && (a = f.get(v.id,
                !0));
              v = f.ig(v);
              a ? f.Bg(v.points, a) : g && g()
            }
          }) : g()
        })
      }
    },
    ej: function (a, g) {
      var f = this.chartObject;
      g = g || {};
      var l = m.a(this.json, "title");
      this.ab("setTitle");
      m.xh(l, a) && (m.c(this.json, "title", m.F(a, l)), l = this.Ke(this.json.title), f.setTitle(l, null, !1), f.isDirtyBox = !0, this.ba(g.animation))
    },
    Tg: function (a) {
      var g = this.chartObject,
        f = this.json.series,
        l = g.series,
        m = this.Y;
      this.Ha = !0;
      if (g)
        for (f.push(a), this.Hc(), this.zg(), this.Ga && (f = this.yc(f), JSCL.j.Cc(m, this.Y) || g.xAxis[0].setCategories(this.Y, !1)), a = 0, m = f.length; a <
          m; a++) {
          var e = f[a],
            q = l[a];
          q ? q.setData(e.points) : g.addSeries(e)
        }
    },
    Wi: function (a, g) {
      var f = this,
        l = a.id,
        x = f.json.series,
        e, q = f.ia(l);
      g = g || {};
      f.ab("updateData");
      if (e = m.J(x, "id", l)) f.u.j.jd(x, e), f.wa("remove", l);
      q && (q.remove(!1), f.Ha = !0);
      f.Ga && f.Ye();
      f.g.o("map") ? f.Ag(function () {
        f.ba(g.animation)
      }) : f.ba(g.animation)
    },
    Xi: function (a) {
      if (a = this.ia(a)) a.remove(), this.Hc()
    },
    Rg: function (a, g, f) {
      f = f || {};
      var l = f.shift;
      f = f.animation;
      var x = m.J(this.json.series, "id", a.id),
        e = m.J(this.options.series, "id", a.id),
        q = this.ia(a.id);
      x.points.push(g);
      this.ab("updateData");
      l && x.points.shift();
      this.Ga ? this.Ye() : q && (a = this.Jb(g, this.U, a.id), e.data.push(a), l && e.data.shift(), x.X = !0, this.Hc(), q.addPoint(a, !1, l, f), this.Ha = !0);
      this.ba(f)
    },
    qj: function (a, g, f) {
      var l = a.id,
        x = this.json.series,
        e = a.config.seriesId,
        q = this.ia(l);
      f = f || {};
      this.ab("updateData");
      if (a = m.J(x, "id", a.config.seriesId)) x = m.J(a.points, "id", l), g = x = m.F(g, x), m.fe(a.points, "id", l, x), this.wa("updateRaw", x), a.X = !0;
      this.Ga ? this.Ye() : q && (q.update(this.Jb(g, this.U, e), !1), this.Ha = !0);
      this.ba(f.animation)
    },
    Bg: function (a, g, f) {
      var l = this.json.series,
        x = g.config,
        e = this.chartObject,
        q = g.points,
        v = this.Y,
        C = this.ia(g.id);
      this.ab("updateData");
      f = f || {};
      for (var y = Math.max(a.length, q.length), A = [], B = [], H = [], G = 0; G < y; G++) a.length > G ? q.length > G ? A.push([q[G], a[G]]) : B.push([a[G]]) : q.length > G && H.push([q[G]]);
      G = 0;
      for (a = H.length; G < a; G++) q = H[G], this.wa("remove", q[0].id), q = m.J(x.points, "id", q[0].id), this.u.j.jd(x.points, q);
      G = 0;
      for (a = A.length; G < a; G++) q = A[G], H = m.J(x.points, "id", q[0].id), H = m.F(q[1], H),
        m.fe(x.points, "id", q[0].id, H);
      G = 0;
      for (a = B.length; G < a; G++) q = B[G], x.points.push(q[0]);
      x.X = !0;
      this.Ga && (l = this.yc(l));
      B = C.points.length;
      A = x.points.length;
      if (B > A) {
        H = [];
        for (G = A - 1; G < B; G++) H.push(C.points[G]);
        G = 0;
        for (B = H.length; G < B; G++) H[G].remove(!1)
      }
      H = [];
      this.g.Ta(x);
      for (G = 0; G < A; G++) H.push(this.Jb(x.points[G], this.U, g.id));
      B = C.points.length;
      A = x.points.length;
      for (G = 0; G < A; G++) G < B ? C.points[G].update(H[G], !1) : C.addPoint(H[G], !1, !1, !0);
      if (this.Ga)
        for (g = 0, C = l.length; g < C; g++) {
          H = l[g];
          if (H !== x)
            for (A = 0, B = H.points.length; A <
              B; A++) G = H.points[A], this.ha(G.id).update(this.Jb(G, this.U, H.id), !1);
          l[g].X = !0
        }
      JSCL.j.Cc(v, this.Y) || e.xAxis[0].setCategories(this.Y, !1);
      this.Ha = !0;
      this.ba(f.animation)
    },
    Ye: function () {
      var a = this.chartObject,
        g = this.json.series,
        f = [];
      if (this.Ga) {
        for (var l = this.Y, g = this.yc(g), m, e, q, v = 0, C = g.length; v < C; v++) {
          var y = g[v];
          m = this.ia(y.id);
          e = m.points.length;
          q = y.points.length;
          if (e > q) {
            for (var f = [], A = q - 1; A < e; A++) f.push(m.points[A]);
            A = 0;
            for (e = f.length; A < e; A++) f[A].remove(!1)
          }
          f = [];
          for (A = 0; A < q; A++) f.push(this.Jb(y.points[A],
            this.U, y.id));
          e = m.points.length;
          q = y.points.length;
          for (A = 0; A < q; A++) A < e ? m.points[A].update(f[A], !1) : m.addPoint(f[A], !1, !1, !0)
        }
        JSCL.j.Cc(l, this.Y) || a.xAxis[0].setCategories(this.Y, !1);
        this.Ha = !0
      }
    },
    Vi: function (a, g) {
      var f = a.id,
        l = this.json.series,
        x = this.ia(f);
      g = g || {};
      var e = g.animation;
      this.ab("updateData");
      if (l = m.J(l, "id", a.config.seriesId)) {
        var q = m.J(l.points, "id", f);
        this.u.j.jd(l.points, q);
        this.wa("remove", f)
      }
      x && (x.remove(!1), this.Ha = !0, this.ba(e))
    },
    $i: function (a, g, f) {
      (a = this.ha(a)) && a.select(g, f)
    },
    Fh: function (a,
      g, f) {
      a = this.ha(a);
      f = f || {};
      a && a.slice(g, !1);
      this.ba(f.animation)
    },
    Kf: function () {
      var a = this,
        g, f;
      a.chartObject && (f = a.json.series, g = [], g = jQuery.map(JSCL.j.vg(f || []), function (f) {
        var g;
        if (g = a.wa("get", f.id)) return g;
        g = new JSCL.JscSeries;
        g.init(f, a);
        return g
      }));
      return g
    },
    get: function (a, g) {
      function f() {
        function f(a) {
          return JSCL.gjParser.Wh(a, -1) === e ? !0 : !1
        }
        q = function (a) {
          if ({
            ".": (a.match(/\./gi) || []).length,
            ",": (a.match(/\,/gi) || []).length,
            ":": (a.match(/\:/gi) || []).length
          }[":"]) {
            var b = a.split(":");
            if (2 === b.length &&
              1 < b[0].length && 1 < b[1].length) return C.mg
          }
          a = JSCL.gjParser.ri(a);
          b = JSCL.gjParser.ih;
          if (a === b.Pa || a === b.Ub) return C.Bi
        }(a);
        if (q === C.mg) {
          var g = a.split(":"),
            x = g[0],
            v = g[1];
          if ((g = JSCL.gjParser.Jh(l, a)) && g.length) return g;
          f = function (a) {
            if ((a = m.a(a, x) || m.a(a, "attributes." + x) || m.a(a, "map.properties." + x)) && a.toLowerCase && (a = a.toLowerCase(), a === v.toLowerCase())) return !0
          }
        }
        var g = l.json.series,
          A;
        if (A = m.zf(g, f)) return A;
        for (var k = 0, b = g.length; k < b; k++)
          if (A = m.zf(g[k].points, f, !0)) return A
      }
      var l = this,
        x = l.B(a),
        e, q, v,
        C = {
          text: "t",
          Bi: "m",
          mg: "p"
        };
      "string" === typeof a && (e = a.toLowerCase());
      if (v = l.wa("get", a)) return v;
      if (!y(x) && l.g.o("map") && (x = f())) {
        if (x.pop) {
          for (var B = [], A = 0, J = x.length; A < J; A++) {
            var H = x[A];
            (v = l.wa("get", H.id)) ? B.push(v) : (v = new JSCL.JscPoint, v.init(H, l), B.push(v))
          }
          return B
        }
        if (v = l.wa("get", x.id)) return v
      }
      if (!y(x)) return g || l.ub('No object with id "' + a + '" was found.'), x;
      B = !1;
      if (void 0 !== x.attributes || void 0 !== x.y || void 0 !== x.seriesId) B = !0;
      void 0 !== x.points ? (l.G.update("full"), v = new JSCL.JscSeries) : B ? (l.G.update("full"),
        v = new JSCL.JscPoint) : v = new JSCL.Tc;
      v.init(x, l);
      return v
    },
    nj: function (a, g) {
      var f = this.ia(a.id);
      if (f) return "undefined" !== typeof g ? g ? f.show(!1) : f.hide(!1) : f.visible ? f.hide(!1) : f.show(!1), this.ba(), f.visible
    },
    aj: function (a, g) {
      var f = this.ia(a.id);
      f && f.select(g)
    },
    ci: function () {
      var a = [],
        g, f, l;
      g = this.chartObject.getSelectedPoints();
      f = 0;
      for (var m = g.length; f < m; f++) {
        var e = new JSCL.JscPoint;
        l = this.B(g[f].id);
        e.init(l, this);
        a.push(e)
      }
      return a
    },
    bi: function (a) {
      return this.chartObject.getSVG(a)
    },
    print: function () {
      this.chartObject.print()
    },
    Gh: function (a, g) {
      var f = this.chartObject,
        l = this.hg(a);
      f.exportChart(l, g, this)
    },
    pg: function (a) {
      var g = this.chartObject,
        f = this.G;
      clearTimeout(this.Pe);
      a = a || {};
      if (this.Ha) {
        g.isDirtyLegend = !0;
        this.Hc();
        this.zg();
        for (var l = 0, m = this.json.series.length; l < m; l++) {
          var e = this.json.series[l];
          e.X && this.wa("refreshRawSeries", e)
        }
      }
      a = y(a.animation) ? a.animation : this.Oe;
      if (this.Ha || this.ue || this.si || this.zi) this.G.X = !0;
      else if (1 < this.Nd.length || "zoom" !== this.xe) this.G.X = !0;
      this.Nd = [];
      if (this.ue) {
        var q = g.series;
        f.update("series");
        l = 0;
        for (m = q.length; l < m; l++) e = q[l], e.update({}, !1);
        this.ue = !1
      }
      if (!f.length) {
        return;
      }
      for (var f = g.axes, m = "addPlotLine", e = [], q = 0, v = f.length; q < v; q++) {
        for (var C = f[q], e = [], B = 0, A = C.plotLinesAndBands.length; B < A; B++) l = C.plotLinesAndBands[B], e.push(l.options);
        B = 0;
        for (A = e.length; B < A; B++) l = e[B], C.removePlotBand(l.id), m = "addPlotLine", l.from && (m = "addPlotBand"), C[m](l)
      }
      g.redraw(a);
      this.Oe = void 0
    },
    ba: function (a) {
      var g = this;
      y(a) && (g.Oe = a);
      clearTimeout(g.Pe);
      g.Pe = setTimeout(function () {
        g.pg()
      }, 4)
    },
    hj: function (a) {
      this.chartObject.showLoading(a)
    },
    oi: function () {
      this.chartObject.hideLoading()
    },
    sg: function (a, g, f, l) {
      l = l || {};
      if (a = a.id ? this.chartObject.get(a.id) : this.ha(a)) JSCL.R.di(this, a), g.getTime && (g = g.getTime()), f.getTime && (f = f.getTime()), a.setExtremes(g, f, !1, l.animation), this.ba(l.animation)
    },
    Bf: function (a) {
      if (a = a.id ? this.chartObject.get(a.id) : this.ha(a)) return a.getExtremes()
    },
    jf: function (a, g) {
      var f, l;
      if (f = a.id ? this.chartObject.get(a.id) : this.ha(a)) l = this.gg(g, f.isXAxis), l.isRange ? f.addPlotBand(l) : f.addPlotLine(l)
    },
    qg: function (a, g) {
      var f =
        this.chartObject,
        l;
      l = a.id ? f.get(a.id) : this.ha(a);
      f = this.B(g);
      return l && f ? (f.isRange ? l.removePlotBand(g) : l.removePlotLine(g), delete this.ra[g], 1) : 0
    },
    cj: function (a, g, f) {
      var l, v = {},
        e;
      f = f || {};
      if (a.id) {
        if (e = this.chartObject.get(a.id), l = e.isXAxis ? this.json.xAxis : this.json.yAxis, l = JSCL.R.ke(l, a.id)) v = m.a(l, "label")
      } else e = this.ha(a);
      e && (l && v ? (m.c(l, "label", m.F(g, v)), a = this.Je(l.label)) : a = this.Je(g), e.setTitle(a, !1), this.ba(f.animation))
    },
    pj: function (a, g) {
      g = g || {};
      var f = this.chartObject,
        l = this.G;
      m.c(this.json,
        "palette", a);
      this.Ha = !0;
      l.X = !0;
      l.Ac = !0;
      for (var v = f.series, e = 0, q = v.length; e < q; e++) v[e].isDirty = !0;
      this.ue = f.isDirtyLegend = !0;
      f.get("colAxId") && y(l.caches.cd.id) && l.Re();
      this.ba(g.animation)
    },
    rj: function (a, g, f) {
      f = f || {};
      var l = m.J(this.json.series, "id", a.id),
        v = this.chartObject;
      this.G.X = !0;
      this.G.Ac = !0;
      y(g) ? m.c(l, "palette", g) : delete l.palette;
      if (a = v.get(a.id)) a.isDirty = !0;
      v.isDirtyLegend = !0;
      this.ba(f.animation)
    },
    fj: function (a) {
      var g = this.chartObject;
      y(a.tilt) && m.c(g, "options.chart.options3d.alpha", a.tilt);
      y(a.rotation) && m.c(g, "options.chart.options3d.beta", a.rotation);
      g.redraw(!1)
    },
    kg: function (a, g) {
      g = g || {};
      var f, l = this.chartObject,
        v = this.ha(a);
      this.ab("zoom");
      v && v.series ? (f = v.series.zoomTo) && f(v) : l.applyMapZoom(m.a(a, "map.bbox"));
      this.ba(g.animation)
    },
    cg: function (a, g) {
      g = g || {};
      var f = this.chartObject,
        l = this.json.series,
        m, e = [],
        q = JSCL.Ka.K(a);
      this.ab("zoom");
      if ("object" === q || "function" === q) {
        for (var q = 0, v = l.length; q < v; q++) m = this.u.na.Ih(this, l[q].points, a), Array.prototype.push.apply(e, m);
        if (e.length) a =
          JSCL.gjParser.Cf(e);
        else return this.ub("The given point filter did not match any points."), !1
      } else if ("string" === q && 1 < a.length && isNaN(parseInt(a[1])) && (m = this.get(a))) {
        if (m.zoomTo) {
          m.zoomTo();
          return
        }
        a = JSCL.gjParser.Cf($.map(m, function (a) {
          return a.config
        }))
      }
      f.applyMapZoom(a);
      this.ba(g.animation);
      return !0
    },
    Gf: function () {
      return this.chartObject.zoomBBoxSet
    },
    Wb: function (a, g) {
      var f;
      this.ra || (this.ra = {});
      if (a.id) {
        if (this.ra[a.id]) return f = this.ra[a.id].id, this.ra[a.id] = a, f
      } else {
        f = 0;
        for (var l = this.ra.length; f <
          l; f++)
          if (JSCL.j.Cc(this.ra[f], a)) return f
      }
      f = void 0 !== g ? g : this.u.v.Aa();
      this.ra[f] = a;
      return f
    },
    B: function (a) {
      return this.ra[a]
    },
    kd: function (a, g) {
      g = g || {};
      for (var f = this.json.series, l, v = 0, e = f.length; v < e; v++) {
        l = f[v];
        if (l.id === a) return g.type = "s", l;
        if (l = m.J(l.points, "id", a)) return g.type = "p", l
      }
      if (l = m.J(this.json.yAxis, "id", a)) return g.type = "a", l;
      if (this.json.yAxis.id === a) return g.type = "a", this.json.yAxis;
      if (l = m.J(this.json.xAxis, "id", a)) return g.type = "a", l;
      if (this.json.xAxis.id === a) return g.type = "a", this.json.xAxis
    },
    ha: function (a) {
      var g;
      a && this.chartObject && (a.charAt ? g = this.chartObject.get(a) : (a = this.Wb(a), g = this.chartObject.get(a)));
      return g
    },
    ia: function (a) {
      if (this.chartObject) return this.chartObject.get(a)
    },
    Ah: function () {
      var a = this.chartObject.series[0].options.drillPiD;
      a && this.ce(a)
    },
    zh: function () {
      var a = this.Te;
      a && this.ce(a)
    },
    ce: function (a) {
      if (a)
        for (var g = 0, f = this.ec.length; g < f; g++) this.ec[g].id === a && (this.Xi(this.chartObject.series[0].options.id), this.Tg(this.ec[g]))
    },
    wa: function (a, g) {
      var f;
      id = g.id || g;
      switch (a ||
      "update") {
        case "update":
          f = this.Fb[id];
          this.Fb[id] = g;
          break;
        case "updateRaw":
          if (f = this.Fb[id]) "string" === typeof g && (g = this.kd(g)), this.ra[id] = g, f.init(g, this);
          break;
        case "refreshRawSeries":
          if (f = this.Fb[id]) "string" === typeof g && (g = this.kd(g)), this.ra[id] = g, f.init(g, this, !0);
          break;
        case "remove":
          if (f = this.Fb[id])
            if (delete this.Fb[id], f.series) {
              f.series.points;
              var l = m.J(f.series.points, "id", id);
              this.u.j.jd(f.series.points, l)
            } delete this.ra[id];
          break;
        case "get":
          f = this.Fb[id]
      }
      return f
    },
    ub: function (a) {
      -1 ===
        m.kc(this.Dg, a) && (this.Dg.push(a), this.u.yb.hb(a))
    }
  };
  window.JSCL = window.JSCL || {};
  window.JSCL.ef = J
})();
(function () {
  function J() {
    this.init.apply(this, arguments)
  }
  J.prototype = {
    status: 0,
    C: {},
    u: JSC,
    m: void 0,
    Lb: function () {
      var y = this,
        B = JSCL.j,
        v;
      v = this.options.width;
      var m = this.options.height,
        a = document.getElementById(this.options.targetElement);
      v || (v = "640px");
      m || (m = "480px");
      v = document.createElement(Silverlight.createObject(y.C.ye + "JSCharting.xap", a, "slcObj", {
        width: v,
        height: m,
        background: "White",
        version: "4.0.50303.0"
      }, {
        onError: onSLError,
        onLoad: onSLLoad
      }, "LoadString=" + B.a(y.options, "languageStrings.loading") +
      ",dncSampleUrl=.,dncChartImageUrl=.,dncChartXMLUrl=wait,LoadingAnimation=" + B.a(y, "options.navigator.silverlight.loadingAnimation"), "context", ""));
      a.appendChild(v);
      siId = setInterval(function () {
        var a = document.getElementById("slcObj"),
          f;
        try {
          f = B.a(a, "Content.Chart"), a && "undefined" !== typeof f && (clearInterval(siId), f.InitChartFromJson(JSON.stringify(y.options), B.a(y, "options.navigator.silverlight.loadingAnimation")))
        } catch (l) { }
      }, 1);
      y.status = 2
    },
    init: function (y, B) {
      this.C = B;
      this.m = JSCL.m;
      this.options = this.translate(y);
      this.status = 1
    },
    translate: function (y) {
      function B(a, e) {
        var f = JSCL.j,
          g = !0;
        e && ("time" != e && "date" != e && "dateTime" != e && "auto" != e ? g = !1 : "object" !== typeof a.x && (g = !1));
        f.f(a, a, "y", "y");
        null != a.x && g ? (f.f(a, a, "XDateTime", "x", function (a) {
          return new Date(a)
        }), delete a.x) : f.f(a, a, "x", "x");
        return a
      }

      function v(a, e) {
        if (e)
          for (var f in e) {
            var g = e[f],
              m;
            for (m in g.points) a.series[f].points[m] = B(JSCL.na.kb(g.points[m], "", !0), l)
          }
      }
      var m = {},
        a = this,
        g = y.series,
        f = JSCL.j,
        l = f.a(y, "xAxis.scale"),
        m = y;
      y = function (e) {
        if (a.C && e.debug) {
          var f =
            a.C.getWarnings();
          if (f.push && 0 < f.length) {
            e.annotations || (e.annotations = []);
            for (var g in f);
            e.annotations.push({
              label: {
                text: "x",
                style: {
                  color: "rgb(50,0,0)",
                  fontSize: "5px"
                }
              },
              boxVisible: !1,
              position: "0,0",
              transparency: .1
            })
          }
        }
        return e
      }(y);
      v(m, g);
      if (y.chartArea && y.chartArea.pop)
        for (var x in y.chartArea) v(m.chartArea[x], m.chartArea[x].series);
      "auto" === f.a(m, "xAxis.scale") && delete m.xAxis.scale;
      "auto" === f.a(m, "yAxis.scale") && delete m.yAxis.scale;
      g = m.annotations;
      x = y.defaultAnnotation;
      if (g)
        for (var e in g) x &&
          (g[e] = f.merge(g[e], x)), g[e].fill && (g[e].fill = a.m.P(g[e].fill, g[e].transparency, "box"));
      y.defaultTooltip && y.defaultTooltip.enabled && JSCL.j.c(m, "defaultPoint.tooltip", "%yValue");
      return m
    }
  };
  window.JSCL = jQuery.extend(!0, null, window.JSCL, {
    ff: J
  })
})();
(function () {
  function J(y, B) {
    return window.JSCL.topojson.feature(y, B, void 0)
  }
  window.JSCL = jQuery.extend(!1, null, window.JSCL || {}, {
    gjParser: function () {
      function y(a, b, d) {
        var e, f;
        if (O(f = a.type))
          if (e = n[f]) a = e(a, b, d);
          else if (topoParsers[f])
            if (O(e = a.type))
              if (topoParsers[e])
                if (e === r.tb) {
                  var h, k;
                  for (k in a.De) {
                    h = a.De[k];
                    break
                  }
                  var g = J(a, h);
                  a = y(g, b, d)
                } else a = g;
              else a = A(c.Eg, e);
            else a = A(c.eg);
          else a = A(c.Eg, f);
        else a = A(c.eg);
        return a
      }

      function B(a, b) {
        for (var d = 0, c = 0, e = a.arcs.length; c < e; c++) {
          var f = a.arcs[c];
          "number" ===
            typeof f ? d += f : (b[d] = f, d++)
        }
      }

      function v(a) {
        for (var b = [], d, c, e, f = 0, k = a.length; f < k; f++) {
          var g = a[f];
          (d = h.a(g, "map.bbox")) ? b.push(d) : O(c = g.x) && O(e = g.y) && b.push([c, e, 0, 0])
        }
        return T.ib(b)
      }

      function m(a, b) {
        function d(a) {
          for (var d = 0, c = a.length; d < c; d++) b(a[d])
        }

        function c(a) {
          for (var d = 0, e = a.length; d < e; d++) b(a[d])
        }
        var e, f;
        O(f = a[r.Jd]) && c(f);
        O(e = a[r.rb]) && d(e)
      }

      function a(a, b, d) {
        function c(a) {
          k.Zd.push(a);
          k.qa.push(a)
        }
        d = d || {};
        var f = d.fb || [],
          k = d.bd || {},
          g, p, m, n, r = [];
        "string" === typeof a && (a = a.split(","));
        var v = l(k),
          w = [];
        k.Zd = [];
        k.qa = [];
        k.nc = "";
        for (var y = 0, C = a.length; y < C; y++) {
          var B = a[y];
          g = e(B);
          g === K.nb ? (a[y] = B.split(".")[0], k.qa.push(a[y])) : g !== K.Oa ? (n = N(f, B, k)) ? c(B) : (k.nc = k.nc || "", k.nc += "," + B, k.qa.push(B)) : w.push(y);
          g = g === K.Pa ? U(B) : B;
          g = R(n || h.W({}, D), g);
          d.uf && h.W(g, d.uf);
          g.type || (g.type = "map");
          r.push(g)
        }
        y = 0;
        for (C = w.length; y < C; y++) a.splice(w[y], 1);
        y = 0;
        for (C = b.length; y < C; y++) g = b[y], a.push(g), k.qa.push(g);
        y = 0;
        for (C = f.length; y < C; y++) {
          b = f[y];
          "string" === typeof (g = h.a(b, "map")) ? (n = e(g), n === K.nb ? (R(b, g), a.push(g.split(".")[0]),
            c(g.split(".")[0])) : n !== K.Oa && a.push(g), n === K.Pa ? R(b, g = U(g)) : (n === K.eb && (n = x(g), a.push.apply(a, n)), R(b, g)), c(g)) : b.type && "map" !== b.type && c("custom");
          if (n = b.points)
            for (w = 0, B = n.length; w < B; w++) {
              var E = n[w];
              "string" === typeof (p = h.a(E, "map")) && (g = e(p, a), m = p, g === K.Pa ? (R(E, U(p)), a.push(p)) : g === K.Ub ? R(E, p) : g === K.eb ? A("Region points not supported.") : g === K.Ya ? (a.push(q(p)), R(E, p)) : g === K.Wa ? (a.push(p.split(".")[0]), R(E, p)) : g === K.Oa ? R(E, p) : g === K.nb && (R(E, p), a.push(p.split(".")[0])), c(m))
            }
          r.push(b)
        }
        if (d.qc) {
          y = 0;
          for (C = d.qc.length; y < C; y++)
            if (b = d.qc[y], c(G(b)), n = b.points)
              for (w = 0, B = n.length; w < B; w++);
          if ((f = l(k)) !== v)
            for (y = 0, C = d.qc.length; y < C; y++) b = d.qc[y], f !== b.map.solo && (a.push(G(b)), r.push(b))
        }
        return r
      }

      function g(a) {
        for (var b = h.a(JSCL, "maps.mapIndex"), d = [], c = "", e = 0, f = a.length; e < f; e++)
          for (var g in b)
            if (b.hasOwnProperty(g) && -1 < b[g].Countries.indexOf(a[e].toUpperCase())) {
              -1 === c.indexOf(g) && (d.push(g), c += g);
              break
            } return d
      }

      function f(a, b) {
        b = b || "maps.master";
        var d, c;
        c = h.a(JSCL, b);
        c || (c = {
          type: r.tb,
          transform: a[r.Pg],
          objects: {},
          arcs: []
        }, h.c(JSCL, b, c));
        d = c.arcs;
        c = c[r.sb];
        B(a, d);
        for (var e in a.objects) c[e] ? Array.prototype.push.apply(c[e][r.rb], a.objects[e][r.rb]) : c[e] = a.objects[e]
      }

      function l(a, b) {
        var c, f, g = h.a(JSCL, "maps.solos"),
          k;
        if (!1 === a.Ti) return !1;
        if (1 === a.qa.length) e(a.qa[0], a) === K.Ya && -1 < g.indexOf(a.qa[0].toLowerCase()) && (c = !0);
        else
          for (var l, p = 0, m = a.qa.length; p < m; p++) {
            k = e(a.qa[p]);
            f = a.qa[p];
            k === K.nb && (f = f.split(".")[0]);
            var n = e(f);
            f = n === K.Ya ? f : n === K.Wa || n === K.kh ? f.split(".")[0] : void 0;
            if (f) {
              if (f = f.toLowerCase(),
                -1 < g.indexOf(f))
                if (!l) l = f, c = !0;
                else if (l !== f) {
                  c = !1;
                  break
                }
            } else if (k !== K.Oa) {
              c = !1;
              break
            }
          }
        if (c && b)
          for (p = 0, m = b.length; p < m; p++) l = b[p], k = e(l), k === K.Ya && -1 < g.indexOf(l.toLowerCase()) && (b[p] = l + "_s");
        return c
      }

      function x(a) {
        var b = [],
          c;
        (c = h.a(window.JSCL, "maps.mapIndex." + a)) && c.noBBox && $.each(c.noBBox.split(","), function (a, e) {
          -1 === c.Countries.indexOf(e) && b.push(e)
        });
        return b
      }

      function e(a, b) {
        function c(a) {
          if (2 === a.length && 1 < a[0].length && 1 < a[1].length) return !0
        }
        b = b || [];
        var e, f = [],
          g = a.toLowerCase();
        E.length || (E =
          JSCL.Ka.ne(h.a(JSCL, "maps.mapIndex")));
        e = a.split(":");
        if (c(e)) return c(e[0].split(".")) ? K.nb : K.Oa;
        if (e = -1 < a.indexOf(".")) f = a.split(".");
        else if (4 === a.length && 2 === a.indexOf("_s")) return K.Pb;
        if ("albersusa" === g) return K.Od;
        if ("world" === a.toLowerCase()) return K.eb;
        if (-1 < a.toLowerCase().indexOf(".json")) return K.Pa;
        if (3 < a.length && !e && -1 < h.kc(E, a)) return K.eb;
        if (2 === a.length) return K.Ya;
        if (4 === a.length) return K.Wa;
        if (3 < a.length && e) return 2 === f.length && 2 !== f[0].length ? (b.length && -1 < h.kc(b, f[0]) || k(f[0]),
          K.Ub) : K.Wa;
        "custom" === a || k(a.toLowerCase());
        return K.Pa
      }

      function q(a) {
        var b = h.a(JSCL, "maps.mapIndex"),
          c = e(a);
        c === K.Od ? a = "us" : c === K.Pb && (a = a.replace("_s", ""));
        if (2 === a.length)
          for (var f in b) {
            if (b.hasOwnProperty(f) && -1 < b[f].Countries.indexOf(a.toUpperCase())) return f
          } else throw "cant find region of non-isoA2 code.";
      }

      function U(a) {
        a = a.replace(/\\/g, `/`).split(`/`);
        a = a[a.length - 1].split(".");
        1 < a.length && a.pop();
        a = a.join("."); - 1 < a.indexOf(".") && (a = a.split(".")[0]);
        a = a.replace(/\\/g, `/`).replace(/\//g, "_").replace(/\./g,
          "_");
        return a.toLowerCase()
      }

      function C(a, b) {
        b = b || {};
        var c = [],
          e = b.$h,
          f = b.sf;
        $.each(a, function (a, b) {
          var h;
          h = e ? e(b) : b;
          var g = !0,
            k = !1;
          if ("function" === typeof f) h = f(h);
          else {
            for (var l in f)
              for (var u in h)
                if (u === l)
                  if (f[l] === h[u]) {
                    k = !0;
                    break
                  } else g = !1;
            h = k && g ? !0 : void 0
          }
          h && c.push(b)
        });
        return c
      }

      function O(a) {
        return "undefined" === typeof a ? !1 : !0
      }

      function A(a, b, c) {
        a = a.replace("%%", b);
        a = a.replace("##", c);
        throw a;
      }

      function N(a, b, c) {
        b = b.toLowerCase();
        for (var f, h, g = 0, k = a.length; g < k; g++) {
          var l = a[g];
          if (h = G(l, -1))
            if (e(h),
              h === b || (f = P(h, c)) && f.id && f.id.toLowerCase() === b.toLowerCase()) return a.splice(g, 1), l
        }
      }

      function H(a, b) {
        function c(a, b) {
          a = a.config || a;
          var d = G(a);
          e(d);
          if (d.toLowerCase() === b.toLowerCase()) return !0
        }

        function f(b) {
          for (var e = a.Kf(), h = 0, g = e.length; h < g; h++) {
            var k = e[h];
            if (c(k, b)) return k;
            for (var l = 0, m = k.points.length; l < m; l++) {
              var p = k.points[l];
              if (c(p, b)) return p
            }
          }
        }
        e(b);
        var g;
        if (g = P(b, a.C.ua.Ia)) {
          if (g.id) return f(g.id);
          if (g.features) {
            for (var k = [], l = 0, m = g.features.length; l < m; l++) {
              var n = g.features[l];
              k.push(H(a,
                n.id || h.a(n, "properties.hasc")))
            }
            return k
          }
          return f(b)
        }
      }

      function G(a, b) {
        function c(a) {
          return -1 === b ? a.toLowerCase() : 1 === b ? a.toUpperCase() : a
        }
        var f, g;
        if (a[w[1]]) return c(a[w[1]]);
        g = 0;
        for (var k = w.length; g < k; g++)
          if ("string" === typeof (f = h.a(a, w[g]))) return g = e(f), g == K.Pa && (f = U(f)), c(f)
      }

      function R(a, b, c) {
        if (c && a[w[1]]) return a;
        a[w[1]] = b;
        return a
      }

      function ha(a, b) {
        var d, f, g = e(b),
          k, l, m, n;
        b = b.toLowerCase();
        O(d = a[r.sb]) || A(c.Ib, r.tb, r.sb);
        n = d;
        g === K.Ya || g === K.Wa ? m = {
          sf: function (a) {
            var c;
            if ((c = a.id || a[r.Xa].hasc) &&
              0 === c.toLowerCase().indexOf(b)) return !0
          }
        } : g === K.eb && (n = {
          countries: d.countries
        }, k = h.a(JSCL, "maps.mapIndex." + b + ".Countries"), m = x(b), k += "," + m.join(","), m = {
          sf: function (a) {
            if (-1 < k.indexOf("*") || -1 < k.indexOf(a.id)) return !0
          },
          $h: function (a) {
            return {
              id: a.id
            }
          }
        });
        var g = {
          objects: {}
        },
          q;
        for (q in n) n = {
          type: r.Kg
        }, f = d[q][r.rb], f = C(f, m), f.length && (n[r.rb] = f, l = !0, g[r.sb][q] = n);
        return l ? g[r.sb] : null
      }

      function V(a, b) {
        var c = a,
          f;
        "string" !== typeof a && (c = G(a));
        if (c) {
          var g = e(c),
            k, l;
          if (g === K.Pa) {
            if (l = P(c, b)) return l[r.Xa]
          } else {
            if (g ===
              K.Pb) f = h.a(JSCL, "maps." + c), c = c.replace("_s", "");
            else if (g === K.Wa && (l = P(c)) && l[r.Xa]) return l[r.Xa];
            f || (f = h.a(JSCL, "maps.master"));
            if (f) {
              l = ha(f, c);
              for (var m in l) {
                f = l[m][r.rb];
                for (var g = 0, n = f.length; g < n; g++)
                  if ((k = f[g].id || h.a(f[g], "properties.hasc")) && k.toLowerCase() === c.toLowerCase()) return f[g][r.Xa]
              }
            }
          }
        }
      }

      function P(a, b) {
        function c(a, b, d) {
          var e = b[0];
          l(d);
          if (n = k(a, d))
            if (p = h.ld(n.features, "properties." + e, b[1], !0, !0) || h.ld(n.features, "properties." + e, b[1].toUpperCase(), !0, !0) || h.ld(n.features, "properties." +
              e, b[1].toLowerCase(), !0, !0)) {
              if (p.pop) {
                if (1 === p.length) return p[0];
                p = {
                  type: r.Rc,
                  features: p
                }
              }
              return p
            }
        }

        function f(a) {
          if (b)
            for (var c = b.qa, d = 0, g = c.length; d < g; d++) {
              var h = c[d];
              if (e(h) !== K.Oa && a.replace("_s", "").toLowerCase() === h.toLowerCase()) return !0
            } else return !0
        }
        var m = e(a),
          n, q, p, v = a,
          w = a.split(".");
        if (m === K.Wa || m === K.Ub) {
          v = a.split(".")[0];
          q = v.toLowerCase();
          if (n = k(q, b)) v = m === K.Ub ? w[1] : a, (p = h.ld(n.features, "id", v, !1, !0)) ? (p.length && (p = p[0]), m !== K.Ub && p.id && -1 === p.id.indexOf(w[0]) && (p.id = a)) : JSCL.yb.hb("Map feature " +
            v + " was not found.");
          return p
        }
        if (m === K.Ya) {
          if (m = g([a])[0], n = k(m.toLowerCase(), b)) return p = h.J(n.features, "id", a.toUpperCase()) || h.J(n.features, "id", a.toLowerCase())
        } else if (m === K.Pa) {
          if (n = k(a, b)) return p = h.J(n.features, "id", a) || h.J(n.features, "id", a.toUpperCase()) || h.J(n.features, "id", a.toLowerCase())
        } else {
          if (m === K.nb) return m = a.split(":"), q = m[0].split("."), c(q[0], [q[1], m[1]], b);
          if (m === K.Oa || m === K.nb) {
            var m = a.split(":"),
              x;
            for (x in JSCL.maps.geo)
              if (f(x) && (q = c(x, m, b))) return q
          }
        }
      }

      function k(a, b) {
        b &&
          l(b) && 2 === a.length && -1 === a.indexOf("_s") && (a = a + "_s");
        return h.a(JSCL, "maps.geo." + a.toLowerCase())
      }

      function b(a, b) {
        h.c(JSCL, "maps.geo." + a.toLowerCase(), b)
      }
      var c = {
        eg: "The type member is missing.",
        Eg: "The geoJSON type %% is not supported.",
        Ja: "The object %% does not contain a coordinates member",
        Ck: "The object type %% requires a geometry member.",
        Ib: "The object type %% requires a ## member.",
        Ii: "The object is not topoJSON.",
        Ci: "The map data path cannot be determined.",
        ag: 'Error loading map data: "%%"',
        Pj: "Regional code %% not recognized or invalid."
      },
        w = ["map", "mapDataId", "map.id"],
        D = {
          legendEntry: {
            visible: !1
          },
          type: "map",
          mouseTracking: !1,
          defaultPoint: {
            color: "#d3d3d3"
          },
          isBaseLayer: !0
        },
        r = {
          Kd: "Point",
          Ng: "MultiPoint",
          Uc: "LineString",
          Mg: "MultiLineString",
          Ld: "Polygon",
          Og: "MultiPolygon",
          Kg: "GeometryCollection",
          Jg: "Feature",
          Rc: "FeatureCollection",
          tb: "Topology",
          gf: "type",
          Pg: "transform",
          Cj: "arcs",
          sb: "objects",
          ma: "coordinates",
          rb: "geometries",
          Sc: "geometry",
          Xa: "properties",
          Jd: "features"
        },
        h = JSCL.j,
        T = JSCL.Zg,
        E = [],
        ea = {
          Polygon: function (a, b, d, e) {
            var f, g, k, l, m, n = [],
              q = [],
              v = h.a(d, "map.bbox") || h.a(d, "map.properties.bbox");
            f = a.type;
            O(g = a[r.ma]) || A(c.Ja, f);
            a = [];
            for (var w = [], x = 0, y = g.length; x < y; x++) {
              k = g[x];
              n.push("M");
              m = [];
              for (var q = [], C = 0, B = k.length; C < B; C++) l = k[C], q.push(l), l = b(l), m.push(l), w.push(l), 0 < C && n.push("L"), n.push(l[0]), n.push(l[1]);
              a.push(m);
              n.push("Z")
            }
            d && (q = h.a(d, "map.properties.cent") || void 0 || [v[0] + v[2] / 2, v[1] + v[3] / 2], window.JSCL.oc && e.id && window.JSCL.oc[e.id] && (q = window.JSCL.oc[e.id]), b = b(q), d.plotX =
              b[0], d.plotY = b[1], d.tooltipPos = b);
            return {
              type: f,
              coordinates: a,
              bbox: v || T.Tb(w),
              path: n
            }
          },
          MultiPolygon: function (a, b, d, e) {
            var f, g, k, l, m, n, q, v, w = [],
              x = [];
            f = a.type;
            O(g = a[r.ma]) || A(c.Ja, f);
            var y = h.a(d, "map.bbox") || h.a(d, "map.properties.bbox");
            a = [];
            for (var C = [], B = 0, D = g.length; B < D; B++) {
              l = g[B];
              q = [];
              for (var E = 0, G = l.length; E < G; E++) {
                k = l[E];
                v = [];
                w.push("M");
                for (var x = [], K = 0, H = k.length; K < H; K++) m = k[K], n = b(m), x.push(m), v.push(n), C.push(n), 0 < K && w.push("L"), w.push(n[0]), w.push(n[1]);
                w.push("Z");
                q.push(v)
              }
              a.push(q)
            }
            d &&
              (x = h.a(d, "map.properties.cent") || void 0 || [y[0] + y[2] / 2, y[1] + y[3] / 2], window.JSCL.oc && e.id && window.JSCL.oc[e.id] && (x = window.JSCL.oc[e.id]), b = b(x), d.plotX = b[0], d.plotY = b[1], d.tooltipPos = b);
            return {
              type: f,
              bbox: y || T.Tb(C),
              coordinates: a,
              path: w
            }
          },
          Point: function (a, b, d) {
            var e;
            e = a.type;
            O(a = a[r.ma]) || A(c.Ja, e);
            b = b(a);
            a = [b];
            e === r.Kd && d && (d.plotX = b[0], d.plotY = b[1]);
            return {
              type: e,
              coordinates: a,
              point: b
            }
          },
          LineString: function (a, b) {
            var d, e, f, g = [];
            d = a.type;
            O(e = a[r.ma]) || A(c.Ja, d);
            g.push("M");
            for (var h = 0, k = e.length; h <
              k; h++) f = e[h], f = b(f), 0 < h && g.push("L"), g.push(f[0]), g.push(f[1]);
            return {
              type: d,
              coordinates: [],
              path: g
            }
          },
          MultiLineString: function (a, b) {
            var d, e, f, g = [];
            d = a.type;
            O(e = a[r.ma]) || A(c.Ja, d);
            if (1 === e.length) return ea[r.Uc]({
              type: r.Uc,
              coordinates: e[0]
            }, b);
            g.push("M");
            for (var h = 0, k = e.length; h < k; h++) f = e[h], f = b(f), 0 < h && g.push("L"), g.push(f[0]), g.push(f[1]);
            return {
              type: d,
              coordinates: [],
              path: g
            }
          }
        },
        n = {
          Point: function (a) {
            a = a[r.ma] || a;
            return {
              data: a,
              bbox: T.Tb([a]),
              type: "marker"
            }
          },
          Polygon: function (a, b, d) {
            O(a = a[r.ma]) || A(c.Ja,
              r.Ld);
            "number" === typeof a[0][0][0] && (a = a[0]);
            return {
              data: a,
              bbox: h.a(d, "properties.bbox") || T.Tb(a)
            }
          },
          MultiPoint: function (a, b) {
            var d = [],
              e, f = [];
            O(e = a[r.ma]) || A(c.Ja, r.Ng);
            for (var g = 0, h = e.length; g < h; g++) d[g] = n[r.Kd](e[g], b), f[g] = d[g].bbox;
            return {
              type: "marker",
              points: d,
              bbox: T.ib(f)
            }
          },
          LineString: function (a, b) {
            var d = [],
              e, f = [];
            O(e = a[r.ma]) || A(c.Ja, r.Uc);
            for (var g = 0, h = e.length; g < h; g++) d[g] = n[r.Kd](e[g], b), f[g] = d[g].bbox;
            return {
              type: "line",
              points: d,
              bbox: T.ib(f)
            }
          },
          MultiLineString: function (a, b) {
            var d = [],
              e, f,
              g = [],
              d = [];
            O(f = a[r.ma]) || A(c.Ja, r.Mg);
            for (var h = 0, k = f.length; h < k; h++) {
              var l = f[h];
              e = {};
              e[r.ma] = l[0];
              d[h] = n[r.Uc](e, b);
              g[h] = d[h].bbox
            }
            return {
              type: "line",
              points: d,
              bbox: T.ib(g)
            }
          },
          MultiPolygon: function (a, b, d) {
            var e = [],
              f, g = [];
            O(f = a[r.ma]) || A(c.Ja, r.Og);
            for (var k = 0, l = f.length; k < l; k++) {
              var m = f[k];
              a = {};
              a[r.ma] = m[0];
              e[k] = n[r.Ld](a, b, d);
              g[k] = e[k].bbox
            }
            return {
              type: "polygon",
              points: e,
              bbox: h.a(d, "properties.bbox") || T.ib(g)
            }
          },
          GeometryCollection: function (a, b) {
            for (var c = a[r.rb], e = [], f = 0, g = c.length; f < g; f++) e[f] = y(c[f],
              b);
            return e
          },
          Feature: function (a, b) {
            var d, e = r.Jg;
            O(d = a[r.Sc]) || A(c.Ib, e, r.Sc);
            O(a[r.Xa]) || A(c.Ib, e, r.Xa);
            return y(d, b, a)
          },
          FeatureCollection: function (a, b) {
            b = b || {};
            var d, f = [],
              g = r.Rc,
              k, l = [],
              m = [],
              n = b.data,
              q = b.$g,
              v, w, x = b.mode,
              C = b.oa || [];
            O(d = a[r.Jd]) || A(c.Ib, g, r.Jd);
            q && (g = q.split(","), 2 === g.length && (v = g[0], w = g[1]));
            var B, D;
            if ("makePoints" === x) {
              x = 0;
              for (g = d.length; x < g; x++) {
                var E = d[x];
                f[x] = E.id ? N(C, E.id, b.hh) || {} : {};
                f[x].map = E;
                O(f[x].name) || JSCL.j.f(f[x], E, "name", "properties.name");
                R(f[x], E.id, !0);
                k = E.properties;
                f[x].attributes = h.eh(f[x].attributes || {}, k);
                O(f[x].attributes) || (f[x].attributes = k);
                if (q && k && n)
                  for (var H = 0, M = n.length; H < M; H++) {
                    var J = n[H];
                    if (J[v] === k[w])
                      for (var P in J) P !== v && (f[x].attributes[P] = J[P])
                  }
                k = y(E, b);
                JSCL.j.c(f[x], "map.bbox", k.bbox);
                "marker" == k.type && (B = !0, f[x].x = k.data[0], f[x].y = k.data[1], m.push(k.data));
                "line" == k.type && (D = !0);
                if (0 !== k.bbox[2]) {
                  H = G(b.fb);
                  E = E.id;
                  M = void 0;
                  J = h.a(JSCL, "maps.mapIndex");
                  H && (M = e(H));
                  var U = void 0;
                  M === K.eb && (U = J[H.toLowerCase()].noBBox) && -1 < U.indexOf(E.toUpperCase()) ||
                    l.push(k.bbox)
                }
              }
              m.length && l.push(T.Tb(m))
            } else
              for (x = 0, g = d.length; x < g; x++) E = d[x], f[x] = y(E);
            f = {
              oa: f,
              Yg: T.ib(l)
            };
            D && (f.type = "line");
            B && (f.type = "marker");
            return f
          }
        },
        K = {
          Ub: "customFeature|-3",
          Pa: "custom|-2",
          il: "world",
          eb: "region|-1",
          Ya: "hasc|0",
          Wa: "fips|1",
          kh: "hasc|2",
          Od: "albersUSA",
          Pb: "soloCountry",
          Oa: "propertyFilter",
          nb: "mapPropertyFilter"
        };
      return {
        parse: function (a, b) {
          if (a.type === r.tb) {
            var c = [];
            B(a, c);
            a.arcs = c
          }
          return y(a, b, {})
        },
        Cf: v,
        dataBBox: function (a) {
          for (var b = [], c = 0, e = a.length; c < e; c++) {
            var f = a[c],
              g = f.points || h.a(f, "options.data");
            b.push(h.a(f, "map.bbox") || h.a(f, "options.jscConfig.map.bbox") || v(g))
          }
          return T.ib(b)
        },
        translate: function (a, b, d) {
          var e, f, g, h;
          f = a.type;
          var k;
          O(e = a[r.Sc]) || A(c.Ib, f, r.Sc);
          f = e.type;
          O(g = e[r.ma]) || A(c.Ja, f);
          if (k = ea[f]) return k(e, b, d, a);
          switch (f) {
            case r.Ld:
              h = [];
              e = 0;
              for (var l = g.length; e < l; e++) {
                a = g[e];
                d = [];
                for (var m = 0, n = a.length; m < n; m++) b = a[m], d.push(k(b));
                h.push(d)
              }
          }
          return {
            type: f,
            coordinates: h
          }
        },
        lg: function (a, b, c, f) {
          function g() {
            var c, d = h.a(JSCL, "maps.master");
            h.a(JSCL, "maps.geo");
            var n, q, v, w, x, y = b.C.ua.Ia;
            w = y.Zd;
            var A = y.qa,
              C, B = 0;
            for (n = w.length; B < n; B++) {
              v = w[B];
              var D = e(v);
              D === K.Oa && (C = P(v, y)) && C.id && (w[B] = C.id)
            }
            B = 0;
            for (n = A.length; B < n; B++) v = A[B], D = e(v), D === K.Oa && (C = P(v, y)) && C.id && (A[B] = C.id);
            l(y);
            A = 0;
            for (C = a.length; A < C; A++)
              if (B = a[A], w = G(B, -1))
                if (n = e(w), v = w, n === K.Oa || n === K.nb) (c = P(w, y)) && m(B, c.pop ? {
                  type: r.Rc,
                  features: c
                } : c, w);
                else if ("object" === typeof (c = B.map)) m(B, c);
                else if (c = k(v, y)) m(B, c, w);
                else if (c = ha(d, w)) c = J(d, c.provinces || c.countries), m(B, c, w);
                else throw "map was not found for series " +
                w;
              else if (n = B.points) {
                v = [];
                for (var D = 0, E = n.length; D < E; D++)(x = G(n[D])) && (q = P(x, y)) && v.push(q);
                if (v.length || w) B.map = {
                  type: r.Rc,
                  id: w,
                  features: v
                }, R(B, w)
              }
            f(a)
          }

          function m(a, c, d) {
            var f, g, h, k = b.C.ua.Ia;
            a.map = c;
            !(f = c[r.Xa]) && d && (c.solo ? g = d + "_s" : g = d, f = V(g, k));
            d && (R(a, d), h = e(d));
            f ? a.name = a.name || f.name || "" : h === K.eb ? a.name = a.name || JSCL.v.yg(d) : h === K.Oa && (c = d.split(":"), a.name = a.name = JSCL.v.yg(c[1]))
          }

          function n(a) {
            var e = b.C.ua.Ia;
            e.Bc;
            h.J(e.Bc, "id", c) || e.Bc.push({
              id: c,
              fh: a
            })
          }
          b.C.ua.Ia.ze ? n(g) : g()
        },
        Zf: function (g,
          n, d, v) {
          function w(a) {
            var d = a.data,
              e = U(a.id);
            if (a.data.type === r.tb) {
              d = a.data;
              d[r.gf] !== r.tb && A(c.Ii);
              O(e = d[r.sb]) || A(c.Ib, r.tb, r.sb);
              var f = [],
                g;
              for (g in e) f.push(J(d, e[g]));
              b(a.id, 1 < f.length ? f : f[0])
            } else O(a.data.type) ? b(e, d) : A(c.Ib, "map data", r.gf);
            x()
          }

          function t(a) {
            var b = e(a.id);
            "world" === a.id ? f(h.a(JSCL, "maps." + a.id.toLowerCase().replace("albersusa", "us")), "maps.masterWorld") : b != K.Pb && f(h.a(JSCL, "maps." + a.id.toLowerCase().replace("albersusa", "us")));
            x()
          }

          function x() {
            var a;
            a = !0;
            for (var c = [], f, g,
              k = d.bd, l = 0, m = V.length; l < m; l++) {
              g = V[l];
              f = -1 < g.codeType.indexOf("ustom");
              if (0 === g.state || -1 === g.state)
                if (a = !1, !f) return;
              f || c.push(g.id)
            }
            if (c.length && !aa) {
              f = 0;
              for (g = c.length; f < g; f++) {
                var l = c[f],
                  n = void 0,
                  m = h.a(JSCL, "maps.master"),
                  p = n = void 0,
                  q = l.toLowerCase(),
                  n = q.replace("_s", "");
                e(l) === K.Pb && (p = !0, m = h.a(JSCL, "maps." + l.toLowerCase()));
                "world" === l && (m = h.a(JSCL, "maps.masterWorld"));
                if (n = ha(m, n)) n = J(m, n.provinces || n.countries), p && (n.solo = !0), b(q, n)
              }
              aa = !0
            }
            if (a) {
              k.ze = !1;
              E();
              a = k.Bc;
              if (a.length)
                for (c = 0, f = a.length; c <
                  f; c++) a[c].fh();
              k.Bc = [];
              v(h.a(JSCL, "maps.master"))
            }
          }

          function p(a) {
            var b;
            if (e(a) !== K.Pb && (b = q(a)) && -1 < h.kc(R, b)) return !0
          }

          function y(a, b) {
            a.replace("_s", "");
            if (k(a, b)) return !0
          }

          function B(a) {
            for (var b in P.Gb)
              if (b && b.toLowerCase() === a.toLowerCase()) return !0
          }

          function C(a, b, d, e) {
            P.Gb[d.id] = !0;
            $.getScript(b + a).done(function () {
              d.state = 1;
              delete P.Gb[d.id];
              e(d)
            }).fail(function (a, b) {
              var e = this.url || b;
              d.state = -1;
              delete P.Gb[d.id];
              A(c.ag, e)
            })
          }

          function D(a, b, d) {
            P.Gb[b.id] = !0;
            $.getJSON("" + a).done(function (a) {
              b.data =
                a;
              b.state = 1;
              delete P.Gb[b.id];
              d(b)
            }).fail(function (a, d) {
              var e = this.url || d;
              b.state = -1;
              delete P.Gb[b.id];
              A(c.ag, e)
            })
          }

          function E() {
            var a = h.a(JSCL, "maps.geo"),
              b;
            for (b in a) m(a[b], function (a) {
              var b = a[r.Xa],
                c;
              if (c = a.id || b.hasc)
                if (a.id || (a.id = c), a = e(c), b.mapcode = c, a === K.Wa) {
                  b.mapLevel = "province";
                  b.provincecode = b.statecode = b.postal;
                  b.province = b.state = b.name;
                  b.countrycode = b.hasc.split(".")[0];
                  if (c = b.region) b.countryregion = c;
                  a: {
                    c = b.countrycode; c = c.toLowerCase();
                    (a = h.a(JSCL, "maps.master.objects.countries.geometries")) ||
                      (a = h.a(JSCL, "maps." + c + "_s.objects.countries.geometries"));
                    if (a)
                      for (var d = 0, f = a.length; d < f; d++) {
                        var g = a[d].properties;
                        if (g.hasc.toLowerCase() === c) {
                          c = g;
                          break a
                        }
                      }
                    c = void 0
                  }
                  c && (b.country = c.name, c.region && (b.worldregion = c.region), c.continent && (b.continent = c.continent))
                } else if (a === K.Ya) {
                  if (b.mapLevel = "country", b.countrycode = b.hasc, b.country = b.name, c = b.region) b.worldregion = c
                } else a === K.eb && (b.mapLevel = "region")
            })
          }
          d = d || {};
          var G = [],
            H = [],
            N, P = d.bd || {},
            R = P.Ui,
            M = !1,
            T = !1,
            V = [],
            aa = !1;
          g = g || [];
          n = n || [];
          if ("string" ===
            typeof g) {
            g = g.split(",");
            for (var da = 0, ea = g.length; da < ea; da++) g[da] = JSCL.v.trim(g[da]).toLowerCase()
          }
          if ("string" === typeof n)
            for (n = n.split(","), da = 0, ea = n.length; da < ea; da++) n[da] = JSCL.v.trim(n[da]).toLowerCase();
          g.length && (P.Tf = !0);
          var sa = a(g, n, d);
          g.sort();
          g = JSCL.Qi.Qe(g);
          da = 0;
          for (ea = g.length; da < ea; da++) la = e(g[da]), la === K.eb ? R.push(g[da]) : la === K.Wa && (g[da] = g[da].split(".")[0]);
          l(P, g);
          var la;
          if (n = window.JSCL.ye) {
            n += "resources/maps/";
            var pa = !0;
            h.a(JSCL, "maps.mapIndex") || G.push("Index");
            da = 0;
            for (ea = g.length; da <
              ea; da++) la = e(g[da]), (N = y(g[da], P)) || (pa = !1), N || B(g[da]) || (la === K.Pa ? (H.push(g[da]), la = {
                id: U(g[da]),
                fn: g[da],
                state: 0,
                codeType: la
              }, V.push(la), P.lh = !0, D(g[da], la, w), M = !0) : (T = P.Tf = !0, la === K.Ya || la === K.Pb || la === K.Od ? (N = "Countries/", N += p(g[da]) ? g[da] + "_c" : g[da]) : N = la === K.Wa ? "Countries/" + g[da].split(".")[0] : g[da], N = (N + ".js").toLowerCase().replace("albersusa", "us"), la = {
                id: g[da],
                fn: N,
                state: 0,
                codeType: la
              }, V.push(la), G.push(N), C(N, n, la, t)));
            if (M || T) P.ze = !0
          } else A(c.Ci);
          M || T || !pa || setTimeout(function () {
            v(h.a(JSCL,
              "maps.master"))
          }, 1);
          return sa
        },
        Lh: V,
        Wh: G,
        Uh: function (a) {
          for (var b, c = [], e, f, g = a.json.series, k = 0, l = g.length; k < l; k++) {
            var m = g[k];
            f = G(m, -1);
            a.g.Ta(m);
            if (!m.isBaseLayer)
              if (f && (e = h.a(m, "map.bbox"))) c.push(e);
              else {
                f = [];
                for (var n = 0, q = m.points.length; n < q; n++) {
                  var r = m.points[n];
                  (e = h.a(r, "map.bbox")) ? c.push(e) : f.push([r.x, r.y])
                }
                f.length && c.push(T.Tb(f))
              }
          }
          c.length && (b = T.ib(c));
          return b
        },
        yi: l,
        ri: e,
        ih: K,
        Jh: H
      }
    }(),
    maps: {
      mapIndex: {
        europe: {
          Countries: "RU,AL,AX,AD,AT,BE,BG,BA,BY,CH,CZ,DE,DK,ES,EE,FI,FR,GB,GR,HR,HU,IM,IE,IS,IT,JE,XK,LI,LT,LU,LV,MC,MD,MK,MT,ME,PL,PT,RO,SM,RS,SK,SI,SE,UA,NL,NO",
          noBBox: "RU"
        },
        asia: {
          Countries: "AF,AE,AM,AZ,BD,BH,BN,BT,CN,CY,GE,HK,ID,IN,IR,IQ,IL,JO,JP,KZ,KG,KH,KR,KW,LA,LB,LK,MO,MM,MN,MY,NP,OM,PK,PH,KP,PS,QA,SA,SG,SY,TH,TJ,TM,TP,TR,TW,UZ,VN,YE",
          noBBox: "RU,ID"
        },
        africa: {
          Countries: "AO,BI,BJ,BF,BW,CF,CI,CM,CD,CG,KM,CV,DJ,DZ,EG,ER,ET,GA,GH,GN,GM,GW,KE,LR,LY,LS,MA,MG,ML,MZ,MR,MW,NA,NE,NG,RW,EH,SD,SS,SN,SL,SO,ST,SZ,TD,TG,TN,TZ,UG,ZM,ZW,GQ,ZA",
          noBBox: "CV"
        },
        oceania: {
          Countries: "AU,FJ,GU,NU,NR,PG,SB,TO,VU,WS,NZ,NC",
          noBBox: "ID"
        },
        americas: {
          Countries: "AW,AI,AR,AG,BS,BZ,BM,BO,BR,BB,CA,CL,CO,CU,CW,KY,DM,DO,EC,GD,GL,GT,GY,HN,HT,JM,KN,LC,MF,MX,MS,NI,PA,PE,PR,PY,SV,PM,SR,SX,TC,TT,UY,US,VC,VE,VG,VI,CR"
        },
        world: {
          Countries: "*"
        }
      },
      solos: "ru,aw,af,ao,ai,al,ax,ad,ae,ar,am,as,tf,ag,au,at,az,bi,be,bj,bf,bd,bg,bh,bs,ba,bl,by,bz,bm,bo,br,bb,bn,bt,bw,cf,ch,cl,cn,ci,cm,cd,cg,ck,co,km,cv,cu,cw,ky,cy,cz,de,dj,dm,dk,do,dz,ec,eg,er,es,ee,et,fi,fj,fk,fr,fo,fm,ga,gb,ge,gg,gh,gi,gn,gm,gw,gr,gd,gl,gt,gu,gy,hk,hm,hn,hr,ht,hu,id,im,in,io,ie,ir,iq,is,il,it,jm,je,jo,jp,kz,ke,kg,kh,ki,kn,kr,xk,kw,la,lb,lr,ly,lc,li,lk,ls,lt,lu,lv,mo,mf,ma,mc,md,mg,mv,mx,mh,mk,ml,mt,mm,me,mn,mp,mz,mr,ms,mu,mw,my,na,ne,nf,ng,ni,nu,np,nr,om,pk,pa,pn,pe,ph,pw,pg,pl,pr,kp,pt,py,ps,pf,qa,ro,rw,eh,sa,sd,ss,sn,sg,gs,sh,sb,sl,sv,sm,so,pm,rs,st,sr,sk,si,se,sz,sx,sc,sy,tc,td,tg,th,tj,tm,tp,to,tt,tn,tr,tv,tw,tz,ug,ua,um,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,zm,zw,cr,gq,nz,nc,sq,yt,re,gp,gz,gf,bq,qo,mq,nl,bq,bq,za,no,us,ca",
      geo: {}
    }
  })
})();
(function (Y, Z) {
  var k, R, S, T, U, w, C, K, H, V, L, G, D, M, y, I, N, O, W, P, z, J, Q, A;
  k = function (a) {
    return new k.prototype.init(a)
  };
  "undefined" !== typeof require && "undefined" !== typeof exports && "undefined" !== typeof module ? module.exports = k : Y.Globalize = k;
  k.cultures = {};
  k.prototype = {
    constructor: k,
    init: function (a) {
      this.cultures = k.cultures;
      this.cultureSelector = a;
      return this
    }
  };
  k.prototype.init.prototype = k.prototype;
  k.cultures["default"] = {
    name: "en",
    englishName: "English",
    nativeName: "English",
    isRTL: !1,
    language: "en",
    numberFormat: {
      pattern: ["-n"],
      decimals: 2,
      ",": ",",
      ".": ".",
      groupSizes: [3],
      "+": "+",
      "-": "-",
      NaN: "NaN",
      negativeInfinity: "-Infinity",
      positiveInfinity: "Infinity",
      percent: {
        pattern: ["-n %", "n %"],
        decimals: 2,
        groupSizes: [3],
        ",": ",",
        ".": ".",
        symbol: "%"
      },
      currency: {
        pattern: ["($n)", "$n"],
        decimals: 2,
        groupSizes: [3],
        ",": ",",
        ".": ".",
        symbol: "$"
      }
    },
    calendars: {
      standard: {
        name: "Gregorian_USEnglish",
        "\/": `/`,
        ":": ":",
        firstDay: 0,
        days: {
          names: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          namesAbbr: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          namesShort: "Su Mo Tu We Th Fr Sa".split(" ")
        },
        months: {
          names: "January February March April May June July August September October November December ".split(" "),
          namesAbbr: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec ".split(" ")
        },
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [{
          name: "A.D.",
          start: null,
          offset: 0
        }],
        twoDigitYearMax: 2029,
        patterns: {
          d: "M/d/yyyy",
          D: "dddd, MMMM dd, yyyy",
          t: "h:mm tt",
          T: "h:mm:ss tt",
          f: "dddd, MMMM dd, yyyy h:mm tt",
          F: "dddd, MMMM dd, yyyy h:mm:ss tt",
          M: "MMMM dd",
          Y: "yyyy MMMM",
          S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
        }
      }
    },
    messages: {}
  };
  k.cultures["default"].calendar = k.cultures["default"].calendars.standard;
  k.cultures.en = k.cultures["default"];
  k.cultureSelector = "en";
  R = /^0x[a-f0-9]+$/i;
  S = /^[+\-]?infinity$/i;
  T = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
  U = /^\s+|\s+$/g;
  w = function (a, c) {
    if (a.indexOf) return a.indexOf(c);
    for (var b = 0, d = a.length; b < d; b++)
      if (a[b] === c) return b;
    return -1
  };
  C = function (a, c) {
    return a.substr(a.length - c.length) === c
  };
  K = function () {
    var a, c, b, d, e, h = arguments[0] || {},
      g = 1,
      f = arguments.length,
      m = !1;
    "boolean" === typeof h && (m = h, h = arguments[1] || {}, g = 2);
    for ("object" === typeof h || V(h) || (h = {}); g < f; g++)
      if (null != (a = arguments[g]))
        for (c in a) b = h[c], d = a[c], h !== d && (m && d && (L(d) || (e = H(d))) ? (e ? (e = !1, b = b && H(b) ? b : []) : b = b && L(b) ? b : {}, h[c] = K(m, b, d)) : d !== Z && (h[c] = d));
    return h
  };
  H = Array.isArray || function (a) {
    return "[object Array]" === Object.prototype.toString.call(a)
  };
  V = function (a) {
    return "[object Function]" === Object.prototype.toString.call(a)
  };
  L = function (a) {
    return "[object Object]" === Object.prototype.toString.call(a)
  };
  G = function (a, c) {
    return 0 === a.indexOf(c)
  };
  D = function (a) {
    return (a + "").replace(U, "")
  };
  M = function (a) {
    return isNaN(a) ? NaN : Math[0 > a ? "ceil" : "floor"](a)
  };
  y = function (a, c, b) {
    var d;
    for (d = a.length; d < c; d += 1) a = b ? "0" + a : a + "0";
    return a
  };
  I = function (a, c) {
    for (var b = 0, d = !1, e = 0, h = a.length; e < h; e++) {
      var g = a.charAt(e);
      switch (g) {
        case "'":
          d ? c.push("'") : b++;
          d = !1;
          break;
        case "\\":
          d && c.push("\\");
          d = !d;
          break;
        default:
          c.push(g), d = !1
      }
    }
    return b
  };
  N = function (a, c) {
    c = c || "F";
    var b;
    b = a.patterns;
    var d = c.length;
    if (1 === d) {
      b = b[c];
      if (!b) throw "Invalid date format string '" +
        c + "'.";
      c = b
    } else 2 === d && "%" === c.charAt(0) && (c = c.charAt(1));
    return c
  };
  O = function (a, c, b) {
    function d(a, c) {
      var b;
      b = a + "";
      return 1 < c && b.length < c ? (b = k[c - 2] + b, b.substr(b.length - c, c)) : b
    }

    function e() {
      if (u || v) return u;
      u = E.test(c);
      v = !0;
      return u
    }

    function h(a, c) {
      if (n) return n[c];
      switch (c) {
        case 0:
          return a.getFullYear();
        case 1:
          return a.getMonth();
        case 2:
          return a.getDate();
        default:
          throw "Invalid part value " + c;
      }
    }
    var g = b.calendar,
      f = g.convert;
    if (!c || !c.length || "i" === c) {
      if (b && b.name.length)
        if (f) b = O(a, g.patterns.F, b);
        else {
          b =
            new Date(a.getTime());
          var m = z(a, g.eras);
          b.setFullYear(J(a, g, m));
          b = b.toLocaleString()
        }
      else b = a.toString();
      return b
    }
    var m = g.eras,
      X = "s" === c;
    c = N(g, c);
    b = [];
    var l, k = ["0", "00", "000"],
      u, v, E = /([^d]|^)(d|dd)([^d]|$)/g,
      q = 0,
      p = P(),
      n;
    for (!X && f && (n = f.fromGregorian(a)); ;) {
      l = p.lastIndex;
      f = p.exec(c);
      l = c.slice(l, f ? f.index : c.length);
      q += I(l, b);
      if (!f) break;
      if (q % 2) b.push(f[0]);
      else switch (l = f[0], f = l.length, l) {
        case "ddd":
        case "dddd":
          b.push((3 === f ? g.days.namesAbbr : g.days.names)[a.getDay()]);
          break;
        case "d":
        case "dd":
          u = !0;
          b.push(d(h(a, 2), f));
          break;
        case "MMM":
        case "MMMM":
          l = h(a, 1);
          b.push(g.monthsGenitive && e() ? g.monthsGenitive[3 === f ? "namesAbbr" : "names"][l] : g.months[3 === f ? "namesAbbr" : "names"][l]);
          break;
        case "M":
        case "MM":
          b.push(d(h(a, 1) + 1, f));
          break;
        case "y":
        case "yy":
        case "yyyy":
          l = n ? n[0] : J(a, g, z(a, m), X);
          4 > f && (l %= 100);
          b.push(d(l, f));
          break;
        case "h":
        case "hh":
          l = a.getHours() % 12;
          0 === l && (l = 12);
          b.push(d(l, f));
          break;
        case "H":
        case "HH":
          b.push(d(a.getHours(), f));
          break;
        case "m":
        case "mm":
          b.push(d(a.getMinutes(), f));
          break;
        case "s":
        case "ss":
          b.push(d(a.getSeconds(),
            f));
          break;
        case "t":
        case "tt":
          l = 12 > a.getHours() ? g.AM ? g.AM[0] : " " : g.PM ? g.PM[0] : " ";
          b.push(1 === f ? l.charAt(0) : l);
          break;
        case "f":
        case "ff":
        case "fff":
          b.push(d(a.getMilliseconds(), 3).substr(0, f));
          break;
        case "z":
        case "zz":
          l = a.getTimezoneOffset() / 60;
          b.push((0 >= l ? "+" : "-") + d(Math.floor(Math.abs(l)), f));
          break;
        case "zzz":
          l = a.getTimezoneOffset() / 60;
          b.push((0 >= l ? "+" : "-") + d(Math.floor(Math.abs(l)), 2) + ":" + d(Math.abs(a.getTimezoneOffset() % 60), 2));
          break;
        case "g":
        case "gg":
          g.eras && b.push(g.eras[z(a, m)].name);
          break;
        case `/`:
          b.push(g[`/`]);
          break;
        default:
          throw "Invalid date format pattern '" + l + "'.";
      }
    }
    return b.join("")
  };
  (function () {
    var a;
    a = function (a, b, d) {
      var e = d.groupSizes,
        h = e[0],
        g = 1,
        f = Math.pow(10, b),
        f = Math.round(a * f) / f;
      isFinite(f) || (f = a);
      a = f + "";
      var f = "",
        f = a.split(/e/i),
        m = 1 < f.length ? parseInt(f[1], 10) : 0;
      a = f[0];
      f = a.split(".");
      a = f[0];
      f = 1 < f.length ? f[1] : "";
      0 < m ? (f = y(f, m, !1), a += f.slice(0, m), f = f.substr(m)) : 0 > m && (m = -m, a = y(a, m + 1, !0), f = a.slice(-m, a.length) + f, a = a.slice(0, -m));
      f = 0 < b ? d["."] + (f.length > b ? f.slice(0, b) : y(f, b)) :
        "";
      b = a.length - 1;
      d = d[","];
      for (m = ""; 0 <= b;) {
        if (0 === h || h > b) return a.slice(0, b + 1) + (m.length ? d + m + f : f);
        m = a.slice(b - h + 1, b + 1) + (m.length ? d + m : "");
        b -= h;
        g < e.length && (h = e[g], g++)
      }
      return a.slice(0, b + 1) + d + m + f
    };
    W = function (c, b, d) {
      if (!isFinite(c)) return Infinity === c ? d.numberFormat.positiveInfinity : -Infinity === c ? d.numberFormat.negativeInfinity : d.numberFormat.NaN;
      if (!b || "i" === b) return d.name.length ? c.toLocaleString() : c.toString();
      b = b || "D";
      d = d.numberFormat;
      var e = Math.abs(c),
        h = -1;
      1 < b.length && (h = parseInt(b.slice(1), 10));
      var g = b.charAt(0).toUpperCase(),
        f;
      switch (g) {
        case "D":
          b = "n";
          e = M(e); - 1 !== h && (e = y("" + e, h, !0));
          0 > c && (e = "-" + e);
          break;
        case "N":
          f = d;
        case "C":
          f = f || d.currency;
        case "P":
          f = f || d.percent;
          b = 0 > c ? f.pattern[0] : f.pattern[1] || "n"; - 1 === h && (h = f.decimals);
          e = a(e * ("P" === g ? 100 : 1), h, f);
          break;
        default:
          throw "Bad number format specifier: " + g;
      }
      c = /n|\$|-|%/g;
      for (f = ""; ;) {
        h = c.lastIndex;
        g = c.exec(b);
        f += b.slice(h, g ? g.index : b.length);
        if (!g) break;
        switch (g[0]) {
          case "n":
            f += e;
            break;
          case "$":
            f += d.currency.symbol;
            break;
          case "-":
            /[1-9]/.test(e) &&
              (f += d["-"]);
            break;
          case "%":
            f += d.percent.symbol
        }
      }
      return f
    }
  })();
  P = function () {
    return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
  };
  z = function (a, c) {
    if (!c) return 0;
    for (var b, d = a.getTime(), e = 0, h = c.length; e < h; e++)
      if (b = c[e].start, null === b || d >= b) return e;
    return 0
  };
  J = function (a, c, b, d) {
    a = a.getFullYear();
    !d && c.eras && (a -= c.eras[b].offset);
    return a
  };
  (function () {
    var a, c, b, d, e, h, g;
    a = function (a, b) {
      if (100 > b) {
        var c = new Date,
          d = z(c),
          c = J(c, a, d),
          d = a.twoDigitYearMax,
          d = "string" ===
            typeof d ? (new Date).getFullYear() % 100 + parseInt(d, 10) : d;
        b += c - c % 100;
        b > d && (b -= 100)
      }
      return b
    };
    c = function (a, b, c) {
      var d = a.days,
        e = a._upperDays;
      e || (a._upperDays = e = [g(d.names), g(d.namesAbbr), g(d.namesShort)]);
      b = h(b);
      c ? (a = w(e[1], b), -1 === a && (a = w(e[2], b))) : a = w(e[0], b);
      return a
    };
    b = function (a, b, c) {
      var d = a.months,
        e = a.monthsGenitive || a.months,
        k = a._upperMonths,
        v = a._upperMonthsGen;
      k || (a._upperMonths = k = [g(d.names), g(d.namesAbbr)], a._upperMonthsGen = v = [g(e.names), g(e.namesAbbr)]);
      b = h(b);
      a = w(c ? k[1] : k[0], b);
      0 > a && (a = w(c ?
        v[1] : v[0], b));
      return a
    };
    d = function (a, b) {
      var c = a._parseRegExp;
      if (c) {
        var d = c[b];
        if (d) return d
      } else a._parseRegExp = c = {};
      for (var d = N(a, b).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), e = ["^"], h = [], g = 0, k = 0, q = P(), p; null !== (p = q.exec(d));) {
        var n = d.slice(g, p.index),
          g = q.lastIndex,
          k = k + I(n, e);
        if (k % 2) e.push(p[0]);
        else {
          var n = p[0],
            w = n.length;
          switch (n) {
            case "dddd":
            case "ddd":
            case "MMMM":
            case "MMM":
            case "gg":
            case "g":
              n = "(\\D+)";
              break;
            case "tt":
            case "t":
              n = "(\\D*)";
              break;
            case "yyyy":
            case "fff":
            case "ff":
            case "f":
              n =
                "(\\d{" + w + "})";
              break;
            case "dd":
            case "d":
            case "MM":
            case "M":
            case "yy":
            case "y":
            case "HH":
            case "H":
            case "hh":
            case "h":
            case "mm":
            case "m":
            case "ss":
            case "s":
              n = "(\\d\\d?)";
              break;
            case "zzz":
              n = "([+-]?\\d\\d?:\\d{2})";
              break;
            case "zz":
            case "z":
              n = "([+-]?\\d\\d?)";
              break;
            case `/`:
              n = "(\\/)";
              break;
            default:
              throw "Invalid date format pattern '" + n + "'.";
          }
          n && e.push(n);
          h.push(p[0])
        }
      }
      I(d.slice(g), e);
      e.push("$");
      d = {
        regExp: e.join("").replace(/\s+/g, "\\s+"),
        groups: h
      };
      return c[b] = d
    };
    e = function (a, b, c) {
      return a < b || a > c
    };
    h = function (a) {
      return a.split("\u00a0").join(" ").toUpperCase()
    };
    g = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = h(a[c]);
      return b
    };
    Q = function (f, h, g) {
      f = D(f);
      g = g.calendar;
      h = d(g, h);
      var k = (new RegExp(h.regExp)).exec(f);
      if (null === k) return null;
      var w = h.groups,
        u = h = f = null,
        v = null,
        E = null,
        q = 0,
        p, n = 0,
        y = 0,
        z = 0;
      p = null;
      for (var A = !1, B = 0, C = w.length; B < C; B++) {
        var r = k[B + 1];
        if (r) {
          var t = w[B],
            F = t.length,
            x = parseInt(r, 10);
          switch (t) {
            case "dd":
            case "d":
              v = x;
              if (e(v, 1, 31)) return null;
              break;
            case "MMM":
            case "MMMM":
              u = b(g, r, 3 === F);
              if (e(u, 0, 11)) return null;
              break;
            case "M":
            case "MM":
              u = x - 1;
              if (e(u,
                0, 11)) return null;
              break;
            case "y":
            case "yy":
            case "yyyy":
              h = 4 > F ? a(g, x) : x;
              if (e(h, 0, 9999)) return null;
              break;
            case "h":
            case "hh":
              q = x;
              12 === q && (q = 0);
              if (e(q, 0, 11)) return null;
              break;
            case "H":
            case "HH":
              q = x;
              if (e(q, 0, 23)) return null;
              break;
            case "m":
            case "mm":
              n = x;
              if (e(n, 0, 59)) return null;
              break;
            case "s":
            case "ss":
              y = x;
              if (e(y, 0, 59)) return null;
              break;
            case "tt":
            case "t":
              A = g.PM && (r === g.PM[0] || r === g.PM[1] || r === g.PM[2]);
              if (!A && (!g.AM || r !== g.AM[0] && r !== g.AM[1] && r !== g.AM[2])) return null;
              break;
            case "f":
            case "ff":
            case "fff":
              z =
                x * Math.pow(10, 3 - F);
              if (e(z, 0, 999)) return null;
              break;
            case "ddd":
            case "dddd":
              E = c(g, r, 3 === F);
              if (e(E, 0, 6)) return null;
              break;
            case "zzz":
              t = r.split(/:/);
              if (2 !== t.length) return null;
              p = parseInt(t[0], 10);
              if (e(p, -12, 13)) return null;
              t = parseInt(t[1], 10);
              if (e(t, 0, 59)) return null;
              p = 60 * p + (G(r, "-") ? -t : t);
              break;
            case "z":
            case "zz":
              p = x;
              if (e(p, -12, 13)) return null;
              p *= 60;
              break;
            case "g":
            case "gg":
              if (!r || !g.eras) return null;
              r = D(r.toLowerCase());
              t = 0;
              for (F = g.eras.length; t < F; t++)
                if (r === g.eras[t].name.toLowerCase()) {
                  f = t;
                  break
                } if (null ===
                  f) return null
          }
        }
      }
      k = new Date;
      w = (B = g.convert) ? B.fromGregorian(k)[0] : k.getFullYear();
      null === h ? h = w : g.eras && (h += g.eras[f || 0].offset);
      null === u && (u = 0);
      null === v && (v = 1);
      if (B) {
        if (k = B.toGregorian(h, u, v), null === k) return null
      } else if (k.setFullYear(h, u, v), k.getDate() !== v || null !== E && k.getDay() !== E) return null;
      A && 12 > q && (q += 12);
      k.setHours(q, n, y, z);
      null !== p && (g = k.getMinutes() - (p + k.getTimezoneOffset()), k.setHours(k.getHours() + parseInt(g / 60, 10), g % 60));
      return k
    }
  })();
  A = function (a, c, b) {
    var d = c["-"];
    c = c["+"];
    var e;
    switch (b) {
      case "n -":
        d =
          " " + d, c = " " + c;
      case "n-":
        C(a, d) ? e = ["-", a.substr(0, a.length - d.length)] : C(a, c) && (e = ["+", a.substr(0, a.length - c.length)]);
        break;
      case "- n":
        d += " ", c += " ";
      case "-n":
        G(a, d) ? e = ["-", a.substr(d.length)] : G(a, c) && (e = ["+", a.substr(c.length)]);
        break;
      case "(n)":
        G(a, "(") && C(a, ")") && (e = ["-", a.substr(1, a.length - 2)])
    }
    return e || ["", a]
  };
  k.prototype.findClosestCulture = function (a) {
    return k.findClosestCulture.call(this, a)
  };
  k.prototype.format = function (a, c, b) {
    return k.format.call(this, a, c, b)
  };
  k.prototype.localize = function (a,
    c) {
    return k.localize.call(this, a, c)
  };
  k.prototype.parseInt = function (a, c, b) {
    return k.parseInt.call(this, a, c, b)
  };
  k.prototype.parseFloat = function (a, c, b) {
    return k.parseFloat.call(this, a, c, b)
  };
  k.prototype.culture = function (a) {
    return k.culture.call(this, a)
  };
  k.addCultureInfo = function (a, c, b) {
    var d = {},
      e = !1;
    "string" !== typeof a ? (b = a, a = this.culture().name, d = this.cultures[a]) : "string" !== typeof c ? (b = c, e = null == this.cultures[a], d = this.cultures[a] || this.cultures["default"]) : (e = !0, d = this.cultures[c]);
    this.cultures[a] =
      K(!0, {}, d, b);
    e && (this.cultures[a].calendar = this.cultures[a].calendars.standard)
  };
  k.findClosestCulture = function (a) {
    var c;
    if (!a) return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
    "string" === typeof a && (a = a.split(","));
    if (H(a)) {
      var b, d = this.cultures,
        e = a,
        h, g = e.length,
        f = [];
      for (h = 0; h < g; h++) a = D(e[h]), a = a.split(";"), b = D(a[0]), 1 === a.length ? a = 1 : (a = D(a[1]), 0 === a.indexOf("q=") ? (a = a.substr(2), a = parseFloat(a), a = isNaN(a) ? 0 : a) : a = 1), f.push({
        lang: b,
        pri: a
      });
      f.sort(function (a, b) {
        return a.pri <
          b.pri ? 1 : a.pri > b.pri ? -1 : 0
      });
      for (h = 0; h < g; h++)
        if (b = f[h].lang, c = d[b]) return c;
      for (h = 0; h < g; h++) {
        b = f[h].lang;
        do {
          e = b.lastIndexOf("-");
          if (-1 === e) break;
          b = b.substr(0, e);
          if (c = d[b]) return c
        } while (1)
      }
      for (h = 0; h < g; h++) {
        b = f[h].lang;
        for (var k in d)
          if (e = d[k], e.language == b) return e
      }
    } else if ("object" === typeof a) return a;
    return c || null
  };
  k.format = function (a, c, b) {
    b = this.findClosestCulture(b);
    a instanceof Date ? a = O(a, c, b) : "number" === typeof a && (a = W(a, c, b));
    return a
  };
  k.localize = function (a, c) {
    return this.findClosestCulture(c).messages[a] ||
      this.cultures["default"].messages[a]
  };
  k.parseDate = function (a, c, b) {
    b = this.findClosestCulture(b);
    var d, e;
    if (c) {
      if ("string" === typeof c && (c = [c]), c.length) {
        e = 0;
        for (var h = c.length; e < h; e++) {
          var g = c[e];
          if (g && (d = Q(a, g, b))) break
        }
      }
    } else
      for (e in c = b.calendar.patterns, c)
        if (d = Q(a, c[e], b)) break;
    return d || null
  };
  k.parseInt = function (a, c, b) {
    return M(k.parseFloat(a, c, b))
  };
  k.parseFloat = function (a, c, b) {
    "number" !== typeof c && (b = c, c = 10);
    var d = this.findClosestCulture(b);
    b = NaN;
    var e = d.numberFormat; - 1 < a.indexOf(d.numberFormat.currency.symbol) &&
      (a = a.replace(d.numberFormat.currency.symbol, ""), a = a.replace(d.numberFormat.currency["."], d.numberFormat["."])); - 1 < a.indexOf(d.numberFormat.percent.symbol) && (a = a.replace(d.numberFormat.percent.symbol, ""));
    a = a.replace(/ /g, "");
    if (S.test(a)) b = parseFloat(a);
    else if (!c && R.test(a)) b = parseInt(a, 16);
    else {
      d = A(a, e, e.pattern[0]);
      c = d[0];
      d = d[1];
      "" === c && "(n)" !== e.pattern[0] && (d = A(a, e, "(n)"), c = d[0], d = d[1]);
      "" === c && "-n" !== e.pattern[0] && (d = A(a, e, "-n"), c = d[0], d = d[1]);
      c = c || "+";
      var h;
      a = d.indexOf("e");
      0 > a && (a = d.indexOf("E"));
      0 > a ? (h = d, a = null) : (h = d.substr(0, a), a = d.substr(a + 1));
      var g = e["."],
        f = h.indexOf(g);
      0 > f ? (d = h, h = null) : (d = h.substr(0, f), h = h.substr(f + g.length));
      g = e[","];
      d = d.split(g).join("");
      f = g.replace(/\u00A0/g, " ");
      g !== f && (d = d.split(f).join(""));
      c += d;
      null !== h && (c += "." + h);
      null !== a && (e = A(a, e, "-n"), c += "e" + (e[0] || "+") + e[1]);
      T.test(c) && (b = parseFloat(c))
    }
    return b
  };
  k.culture = function (a) {
    "undefined" !== typeof a && (this.cultureSelector = a);
    return this.findClosestCulture(a) || this.cultures["default"]
  }
})(this);
/*
 topoJSON Copyright (c) 2012, Michael Bostock
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.

 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

 The name Michael Bostock may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
 INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
window.JSCL = window.JSCL || {};
window.JSCL.topojson = function () {
  function y(f, g) {
    function h(a) {
      a = f.arcs[a];
      var b = a[0],
        c = [0, 0];
      a.forEach(function (a) {
        c[0] += a[0];
        c[1] += a[1]
      });
      return [b, c]
    }
    var d = {},
      c = {};
    g.forEach(function (a) {
      var b = h(a),
        e = b[0],
        n = b[1];
      (b = c[e]) ? (delete c[b.end], b.push(a), b.end = n, (a = d[n]) ? (delete d[a.start], e = a === b ? b : b.concat(a), d[e.start = b.start] = c[e.end = a.end] = e) : (a = c[n]) ? (delete d[a.start], delete c[a.end], e = b.concat(m(a, function (a) {
        return ~a
      }).reverse()), d[e.start = b.start] = c[e.end = a.start] = e) : d[b.start] = c[b.end] = b) : (b =
        d[n]) ? (delete d[b.start], b.unshift(a), b.start = e, (a = c[e]) ? (delete c[a.end], e = a === b ? b : a.concat(b), d[e.start = a.start] = c[e.end = b.end] = e) : (a = d[e]) ? (delete d[a.start], delete c[a.end], e = m(a, function (a) {
          return ~a
        }).reverse().concat(b), d[e.start = a.end] = c[e.end = b.end] = e) : d[b.start] = c[b.end] = b) : (b = d[e]) ? (delete d[b.start], b.unshift(~a), b.start = n, (a = c[n]) ? (delete c[a.end], e = a === b ? b : a.concat(b), d[e.start = a.start] = c[e.end = b.end] = e) : (a = d[n]) ? (delete d[a.start], delete c[a.end], e = m(a, function (a) {
          return ~a
        }).reverse().concat(b),
          d[e.start = a.end] = c[e.end = b.end] = e) : d[b.start] = c[b.end] = b) : (b = c[n]) ? (delete c[b.end], b.push(~a), b.end = e, (a = c[e]) ? (delete d[a.start], e = a === b ? b : b.concat(a), d[e.start = b.start] = c[e.end = a.end] = e) : (a = d[e]) ? (delete d[a.start], delete c[a.end], e = b.concat(m(a, function (a) {
            return ~a
          }).reverse()), d[e.start = b.start] = c[e.end = a.start] = e) : d[b.start] = c[b.end] = b) : (b = [a], d[b.start = e] = c[b.end = n] = b)
    });
    var k = [],
      l;
    for (l in c) k.push(c[l]);
    return k
  }

  function r(f, g) {
    var h = {
      type: "Feature",
      id: g.id,
      properties: g.properties || {},
      geometry: u(f,
        g)
    };
    null == g.id && delete h.id;
    return h
  }

  function u(f, g) {
    function h(b) {
      b = b.slice();
      a(b, 0);
      return b
    }

    function d(c) {
      for (var e = [], f = 0, d = c.length; f < d; ++f) {
        var k = c[f],
          g = e;
        g.length && g.pop();
        for (var h = b[0 > k ? ~k : k], l = 0, m = h.length, r = void 0; l < m; ++l) g.push(r = h[l].slice()), a(r, l);
        if (0 > k)
          for (k = g, g = void 0, h = k.length, m = h - m; m < --h;) g = k[m], k[m++] = k[h], k[h] = g
      }
      2 > e.length && e.push(e[0].slice());
      return e
    }

    function c(a) {
      for (a = d(a); 4 > a.length;) a.push(a[0].slice());
      return a
    }

    function k(a) {
      return m(a, c)
    }

    function l(a) {
      var b = a.type;
      return "GeometryCollection" === b ? {
        type: b,
        geometries: m(a.geometries, l)
      } : b in e ? {
        type: b,
        coordinates: e[b](a)
      } : null
    }
    var a = v(f.transform),
      b = f.arcs,
      e = {
        Point: function (a) {
          return h(a.coordinates)
        },
        MultiPoint: function (a) {
          return m(a.coordinates, h)
        },
        LineString: function (a) {
          return d(a.arcs)
        },
        MultiLineString: function (a) {
          return m(a.arcs, d)
        },
        Polygon: function (a) {
          return k(a.arcs)
        },
        MultiPolygon: function (a) {
          return m(a.arcs, k)
        }
      };
    return l(g)
  }

  function w(f, g) {
    for (var h = 0, d = f.length; h < d;) {
      var c = h + d >>> 1;
      f[c] < g ? h = c + 1 : d = c
    }
    return h
  }

  function z(f) {
    return Math.abs((f[0][0] - f[2][0]) * (f[1][1] - f[0][1]) - (f[0][0] - f[1][0]) * (f[2][1] - f[0][1]))
  }

  function A(f, g) {
    return f[1][2] - g[1][2]
  }

  function B(f) {
    function g(d) {
      for (var g = c[d]; 0 < d;) {
        var a = (d + 1 >> 1) - 1,
          b = c[a];
        if (0 <= f(g, b)) break;
        c[b.index = d] = b;
        c[g.index = d = a] = g
      }
    }

    function h(d) {
      for (var g = c[d]; ;) {
        var a = d + 1 << 1,
          b = a - 1,
          e = d,
          h = c[e];
        b < c.length && 0 > f(c[b], h) && (h = c[e = b]);
        a < c.length && 0 > f(c[a], h) && (h = c[e = a]);
        if (e === d) break;
        c[h.index = d] = h;
        c[g.index = d = e] = g
      }
    }
    var d = {},
      c = [];
    d.push = function () {
      for (var d = 0, f = arguments.length; d <
        f; ++d) {
        var a = arguments[d];
        g(a.index = c.push(a) - 1)
      }
      return c.length
    };
    d.pop = function () {
      var d = c[0],
        f = c.pop();
      c.length && (c[f.index = 0] = f, h(0));
      return d
    };
    d.remove = function (d) {
      var l = d.index,
        a = c.pop();
      l !== c.length && (c[a.index = l] = a, (0 > f(a, d) ? g : h)(l));
      return l
    };
    return d
  }

  function v(f) {
    if (!f) return x;
    var g, h, d = f.scale[0],
      c = f.scale[1],
      k = f.translate[0],
      l = f.translate[1];
    return function (a, b) {
      b || (g = h = 0);
      a[0] = (g += a[0]) * d + k;
      a[1] = (h += a[1]) * c + l
    }
  }

  function C(f) {
    if (!f) return x;
    var g, h, d = f.scale[0],
      c = f.scale[1],
      k = f.translate[0],
      l = f.translate[1];
    return function (a, b) {
      b || (g = h = 0);
      var e = (a[0] - k) / d | 0,
        f = (a[1] - l) / c | 0;
      a[0] = e - g;
      a[1] = f - h;
      g = e;
      h = f
    }
  }

  function x() { }

  function m(f, g) {
    for (var h = [], d = 0, c = f.length; d < c; d++) h.push(g(f[d]));
    return h
  }
  return {
    version: "1.4.2",
    mesh: function (f, g, h) {
      var d = [];
      if (1 < arguments.length) {
        var c = function (a) {
          "GeometryCollection" === a.type ? a.geometries.forEach(c) : a.type in n && (e = a, n[a.type](a.arcs))
        },
          k = function (a) {
            a.forEach(l)
          },
          l = function (b) {
            b.forEach(a)
          },
          a = function (a) {
            0 > a && (a = ~a);
            (b[a] || (b[a] = [])).push(e)
          },
          b = [],
          e, n = {
            LineString: l,
            MultiLineString: k,
            Polygon: k,
            MultiPolygon: function (a) {
              a.forEach(k)
            }
          };
        c(g);
        b.forEach(3 > arguments.length ? function (a, b) {
          d.push(b)
        } : function (a, b) {
          h(a[0], a[a.length - 1]) && d.push(b)
        })
      } else
        for (var m = 0, p = f.arcs.length; m < p; ++m) d.push(m);
      return u(f, {
        type: "MultiLineString",
        arcs: y(f, d)
      })
    },
    feature: function (f, g) {
      return "GeometryCollection" === g.type ? {
        type: "FeatureCollection",
        features: m(g.geometries, function (g) {
          return r(f, g)
        })
      } : r(f, g)
    },
    neighbors: function (f) {
      function g(a, b) {
        a.forEach(function (a) {
          0 >
            a && (a = ~a);
          var d = c[a];
          d ? d.push(b) : c[a] = [b]
        })
      }

      function h(a, b) {
        a.forEach(function (a) {
          g(a, b)
        })
      }

      function d(a, b) {
        if ("GeometryCollection" === a.type) a.geometries.forEach(function (a) {
          d(a, b)
        });
        else if (a.type in l) l[a.type](a.arcs, b)
      }
      var c = {},
        k = m(f, function () {
          return []
        }),
        l = {
          LineString: g,
          MultiLineString: h,
          Polygon: h,
          MultiPolygon: function (a, b) {
            a.forEach(function (a) {
              h(a, b)
            })
          }
        };
      f.forEach(d);
      for (var a in c) {
        f = c[a];
        for (var b = f.length, e = 0; e < b; ++e)
          for (var n = e + 1; n < b; ++n) {
            var t = f[e],
              p = f[n],
              q;
            (q = k[t])[a = w(q, p)] !== p && q.splice(a,
              0, p);
            (q = k[p])[a = w(q, t)] !== t && q.splice(a, 0, t)
          }
      }
      return k
    },
    presimplify: function (f, g) {
      function h(a) {
        k.remove(a);
        a[1][2] = g(a);
        k.push(a)
      }
      var d = v(f.transform),
        c = C(f.transform),
        k = B(A),
        l = 0,
        a;
      g || (g = z);
      for (f.arcs.forEach(function (b) {
        var c = [];
        b.forEach(d);
        for (var e = 1, f = b.length - 1; e < f; ++e) a = b.slice(e - 1, e + 2), a[1][2] = g(a), c.push(a), k.push(a);
        b[0][2] = b[f][2] = Infinity;
        e = 0;
        for (f = c.length; e < f; ++e) a = c[e], a.previous = c[e - 1], a.next = c[e + 1]
      }); a = k.pop();) {
        var b = a.previous,
          e = a.next;
        a[1][2] < l ? a[1][2] = l : l = a[1][2];
        b && (b.next =
          e, b[2] = a[2], h(b));
        e && (e.previous = b, e[0] = a[0], h(e))
      }
      f.arcs.forEach(function (a) {
        a.forEach(c)
      });
      return f
    }
  }
}();