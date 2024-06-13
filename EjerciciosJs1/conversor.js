function limpia(n)
{
    if (n==1)
    document.getElementById('dolar').value="";
    //Si es un uno se borra el contenido de la casilla Dolares
    if (n==2)
    document.getElementById('euros').value="";
    //Si es un dos se borra el contenido de la casilla Euros
}

function convEuros(valor)
{
    //Procedimiento de cálculo de euros
    if (valor=="")
    return true; //Si esta en blanco regresamos sin hacer nada
    document.getElementById('euros').value=valor/1.436; //Realizamos el cálculo
    if (document.getElementById('euros').value=="NaN") //si se produce un error
    document.getElementById('euros').value="Error!"; //mostraremos un mensaje
}

function convDolares(valor)
{
    //Procedimiento de cálculo de Dolares
    if (valor=="")
    return true; //Si está en blanco salimos de la función
    document.getElementById('dolar').value=valor*1.436; //Realizamos el cálculo
    if (document.getElementById('dolar').value=="NaN") //Si se produce un error
    document.getElementById('dolar').value="Error!"; //mostraremos un mensaje
}      