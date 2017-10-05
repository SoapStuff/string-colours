const Assert = require("assert");
const formatter = require("../logger").formatter;
const setAnnotation = require("../logger").setAnnotation;

require("simple-tests-js").run({
    test1: {
        test: function (annotation,string, answer) {
            setAnnotation(annotation);
            var formatted = formatter(string);
            Assert.equal(formatted, answer);
        },
        parameters: [
            ["@","@{foobar}Test","Test"],
            ["&","&{black} Test &{!black}", "\u001b[30m Test \u001b[39m"],
            ["@","@{black} Test @{!black}", "\u001b[30m Test \u001b[39m"],
            ["@","@{black}@{white}@{green} Test @{!black}", "\u001b[30m\u001b[37m\u001b\[32m Test \u001b[39m"],
            ["@","@{yellow,white,green} Test @{!yellow}", "\u001b[33m\u001b[37m\u001b\[32m Test \u001b[39m"]
        ]
    }
}, "replacerTest");