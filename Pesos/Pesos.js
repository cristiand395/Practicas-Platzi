var peso_tierra = prompt("Cual es tu peso?");
var planeta = prompt("Elige un planeta\n1 es Marte y 2 es Jupiter");
var peso = parseInt(peso_tierra);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
if (planeta == 1)
{
    peso_final = peso * g_marte / g_tierra;
    planeta = "Marte";
}
else if (planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra;
    planeta = "Jupiter";
}
else
{
    peso_final = 0;
    planeta = ("donde sea que hayas puesto")
}
peso_final = parseInt(peso_final);
document.write("Tu peso en " + planeta + " es <strong>" + peso_final + " kilos</strong>");
