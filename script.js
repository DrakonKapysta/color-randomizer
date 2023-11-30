class BackgrondRandomizer {
  _COLORS_FOR_CONVERT = {
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
    indigo: "#4b0082",
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
    lightgrey: "#d3d3d3",
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
    rebeccapurple: "#663399",
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
    yellowgreen: "#9acd32",
  };
  get randomSimpleColor() {
    const colorArray = Object.keys(this._COLORS_FOR_CONVERT);
    let resultColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return resultColor[0].toUpperCase() + resultColor.slice(1);
  }
  get randomHexColor() {
    let colorBitsArray = [];
    let colorBits = "";
    for (let i = 0; i < 3; i++) {
      colorBits = Math.floor(Math.random() * 256).toString("16");
      if (colorBits.length < 2) {
        colorBits = `0${colorBits}`;
      }
      colorBitsArray.push(colorBits);
      colorBits = "";
    }
    return "#" + colorBitsArray.join("").toUpperCase();
  }
  get randomRGBColor() {
    let colorBitsArray = [];
    let colorBits = 0;
    for (let i = 0; i < 3; i++) {
      colorBits = Math.floor(Math.random() * 256);
      colorBitsArray.push(colorBits);
    }
    return `rgb(${colorBitsArray.join(",")})`;
  }
  convert(color, typeToConvert, fromType) {
    let currentBits = [];
    switch (fromType) {
      case "Simple":
        color = this._COLORS_FOR_CONVERT[color.toLowerCase()];
        color = color.slice(1);
        for (let i = 0; i < 3; i++) {
          currentBits.push(parseInt(color.slice(0, 2), 16));
          color = color.slice(2);
        }
        return this._convertTo(currentBits, typeToConvert);
      case "Hex":
        color = color.slice(1);
        for (let i = 0; i < 3; i++) {
          currentBits.push(parseInt(color.slice(0, 2), 16));
          color = color.slice(2);
        }
        return this._convertTo(currentBits, typeToConvert);
      case "RGB":
        for (let bits of color.slice(4, color.length - 1).split(",")) {
          currentBits.push(+bits);
        }
        return this._convertTo(currentBits, typeToConvert);
    }
  }
  _convertTo(colorBits, typeToConvert) {
    let res = "";
    let tempColor = "";
    switch (typeToConvert) {
      case "Simple":
        for (let color of colorBits) {
          tempColor = color.toString(16);
          if (tempColor.length < 2) {
            tempColor = `0${tempColor}`;
          }
          res += tempColor;
        }

        res = "#" + res.toLowerCase();
        for (let key in this._COLORS_FOR_CONVERT) {
          if (this._COLORS_FOR_CONVERT[key] === res) {
            return key[0].toUpperCase() + key.slice(1);
          }
        }
        return "White";
      case "Hex":
        for (let color of colorBits) {
          tempColor = color.toString(16);
          if (tempColor.length < 2) {
            tempColor = `0${tempColor}`;
          }
          res += tempColor;
        }
        res = "#" + res.toUpperCase();
        return res;
      case "RGB":
        return `rgb(${colorBits.join(",")})`;
    }
  }
}

const backgrondRandomizer = new BackgrondRandomizer();
const togglers = document.querySelectorAll(".header__toggler span");
const wrapper = document.querySelector(".wrapper");
const backgroundText = document.querySelector(".content__backgroundColor p");
const btn = document.querySelector(".content__button");

btn.setAttribute("listener", togglers[0].textContent);
const handleClick = (e) => {
  const toggleType = btn.getAttribute("listener");
  const color = backgrondRandomizer[`random${toggleType}Color`];
  if (!color) {
    window.alert(
      "This function still doesn't have implementation or occured unexpected problem."
    );
    return;
  }
  backgroundText.lastElementChild.textContent = color;
  wrapper.style.background = color;
};

btn.addEventListener("click", handleClick);
togglers.forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    checkActive(e.target);
    const colorType = toggler.textContent;
    if (colorType === btn.getAttribute("listener")) return;
    const convertedColor = backgrondRandomizer.convert(
      backgroundText.lastElementChild.textContent,
      colorType,
      btn.getAttribute("listener")
    );
    btn.setAttribute("listener", colorType);
    backgroundText.lastElementChild.textContent = convertedColor;
    wrapper.style.background = convertedColor;
  });
});
function checkActive(target) {
  for (let element of togglers) {
    if (target === element) {
      target.className = "header__toggler-active";
    } else {
      element.className = "header__toggler";
    }
  }
}
