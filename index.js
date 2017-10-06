const getCode = require("./util/map").getCode;
/**
 * @type {string}
 */
var annotation = "@";

/**
 * Logs the string with the given colour.
 * @param {string} string
 */
var logger = function (string) {
    if (typeof string === "string") {
        console.log(formatter(string));
    } else {
        console.log(string)
    }
};

/**
 * Gets all the markups
 * @param {string[]} markups - The markups
 */
var getCodes = function (markups) {
    var format = "";
    for (var i = 0; i < markups.length; i++) {
        if (markups[i][0] === "!") {
            format += getCode(markups[i].substring(1, markups[i].length), true);
        } else {
            format += getCode(markups[i]);
        }
    }
    return format;
};

/**
 * Formats the string to a colour string.
 * @param {string} string
 * @returns {string} the formatted string
 */
var formatter = function (string) {
    if (typeof string !== "string") {
        throw new Error("Formatter can only take a string");
    }
    var regex = new RegExp(annotation+"{[a-zA-Z\\s,!]*}", "g");
    while (string.match(regex)) {
        var match = regex.exec(string);
        var markUp = match[0].substring(2, match[0].length - 1);
        var markups = markUp.trim().split(/[.,\s]/);
        var format = getCodes(markups);

        var firstPart = string.substring(0, match.index);
        var secondPart = string.substring(match.index + match[0].length, string.length);
        string = firstPart + format + secondPart;
    }
    return string + getCode("reset");
};

/**
 * Set the annotation used for the colours.
 * @param {string} char
 */
var setAnnotation = function (char) {
    if (typeof char !== "string" && char.length !== 1) {
        throw new Error("Invalid Argument Exception: input should be a string with only 1 character");
    }
    var allowed = ["!","@","#","&","~"];
    if (allowed.indexOf(char) === -1) {
        throw new Error("Not allowed character. Use one of these:" + allowed.toString());
    }
    annotation = char;
};

/**
 * Returns the annotation
 * @returns {string} annotation
 */
var getAnnotation = function () {
    return annotation;
};
/**
 * @type {setAnnotation}
 */
module.exports.setAnnotation = setAnnotation;
/**
 * @type {logger}
 */
module.exports.logger = logger;
/**
 * @type {logger}
 */
module.exports.log = logger;
/**
 * @type {formatter}
 */
module.exports.formatter = formatter;
