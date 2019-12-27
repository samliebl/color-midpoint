# Color Difference

Get the color midway between two array-formatted rgb or rgba values as a string.

## Installation

```sh
npm install color-midpoint
```

## Usage

```js
var colorMidpoint = require('color-midpoint');

// Blue: rgba(11, 92, 208, 1.0)
var blue = [11, 92, 208, 1.0];

// Red: rgba(252, 39, 42, 1.0)
var red = [252, 39, 42, 1.0];

var purple = colorMidpoint(blue, red);

console.log(purple);
// Expected result: `rgba(132, 66, 125, 0.9)`
```

## License

MIT