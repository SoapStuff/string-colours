var enabled = true;
var map = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],

    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],

    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49]
};

/**
 * Gets a formatted string that represents the style.
 * @param {string} markup - The chosen colour or text decoration.
 * @param {boolean} [reset] - If you want to reset this style.
 */
var getCode = function (markup, reset) {
    if (!enabled) return "";
    var _style = map[markup];
    if (!_style) {
        console.error("Unsupported text markup: " + markup);
        return "";
    }
    var i = 0;
    if (reset === true) {
        i = 1;
    }
    return "\u001b[" + _style[i] + "m";
};

/**
 * @type {getCode}
 */
module.exports.getCode = getCode;

(function () {
    enabled = process.argv.indexOf("--disable-colour") === -1;
})();