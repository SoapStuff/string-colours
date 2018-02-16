# A colour formatting framework.
A string formatter for printing colours to terminals with colour support.
## Install
```
npm install colours-logger --save
```
## How to use

To insert a colour or decoration in a string insert `"@{colour}"` to set the colour at this point.
With `"@{!colour}"` you can reset the colour. You can use `@{reset}` to reset all the styles.
To combine multiple decorations you can chain the decorations like `@{colour}@{text-decoration}@{background}` or seperate them with comma and or space like
`@{colour, decoration, background-colour}`

#### Example
```javascript
const colours = require("colours-logger");
var string = "@{red}THIS IS IN RED@{!red} This is not red anymore.";

colours.log(string);
// THIS IS IN RED. This is not in red anymore.

var formatted = colours.formatter(string);
// formatted = "\u001b[31m THIS IS IN RED. \u001b[39m This is not in red anymore\u001b[0m"

console.log(formatted);
// THIS IS IN RED. This is not in red anymore.
```
#### Changing prefix.
You can change the annotation to one of the following characters:
`allowed = ["!","@","#","&","~"];`
Use this only when needed since this is can break compatibility between other packages.
```javascript
const colours = require("colours-logger");
colours.setAnnotation("#");
// You can now use "#{color}"
```



#### Disabling
Disable colours with passing the --disable-colour flag to the node arguments.

#### Allowed styles

##### Decoration
* reset
* bold
* dim
* italic
* underline
* inverse
* hidden
* strikethrough
##### Text colour
* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* gray
* grey

##### Background colour.
* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite