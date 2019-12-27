function colorMidpoint(color1, color2) {
  var color3 = [];

  if ((color1.length < 3) | (color1.length > 4)) {
    console.log('The first color is formatted incorrectly.');
  } else if ((color2.length < 3) | (color2.length > 4)) {
    console.log('The second color is formatted incorrectly.');
  } else if (color1.length === 3) {
    color3[0] = Math.round((color1[0] - color2[0]) / 2 + color2[0]);
    color3[1] = Math.round((color1[1] - color2[1]) / 2 + color2[1]);
    color3[2] = Math.round((color1[2] - color2[2]) / 2 + color2[2]);
    return 'rgb('
      .concat(color3[0], ', ')
      .concat(color3[1], ', ')
      .concat(color3[2], ')');
  } else {
    color3[0] = Math.round((color1[0] - color2[0]) / 2 + color2[0]);
    color3[1] = Math.round((color1[1] - color2[1]) / 2 + color2[1]);
    color3[2] = Math.round((color1[2] - color2[2]) / 2 + color2[2]);
    color3[3] = (color1[3] - color2[3]) / 2 + color2[3];
    return 'rgba('
      .concat(color3[0], ', ')
      .concat(color3[1], ', ')
      .concat(color3[2], ', ')
      .concat(color3[3], ')');
  }
}

module.exports = colorMidpoint;