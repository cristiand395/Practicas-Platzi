
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var lineas = 30;
var l = 0;
var xi, yf;
var color_del_trazo = "blue";

while (l < lineas)
{
   yi = 10 * l;
   xf = 10 * (l + 1);
   trazos(color_del_trazo, 0, yi, xf, 300);
   console.log("linea " + 1 );
   l = l + 1;
}

trazos(color_del_trazo, 1, 1, 1, 299);
trazos(color_del_trazo, 1, 299, 299, 299);

function trazos(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
