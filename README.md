#Storm Equal Height

Layout helper to equalise the height of a set of DOM elements

##Usage
```
npm install storm-equal-height
```

```javascript
var equalHeight = require('storm-equal-height')
equalHeight.init('js-equal-height',  {minWidth: 768});
```
The selector class refers to the parent node, and equalises the height of all children.

###Options
minWidth, Number, minimum window width at which to apply equal height across elements