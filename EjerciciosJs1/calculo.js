/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Variables globales del programa
let TotalsinIva=0;
let TotalFinal=0;
let iva=0;

function sumarfactura(){
    Totalsiniva=0;
    //Creamos una variable que almacenará todos las etiquetas <select>
    let productos = document.getElementsByTagName("select");
    //Recorremos todos los select y guardamos el valor de cada uno de ellos
    //sumandolo al anterior en la variable Totalsiniva
    for (let i=0; i<productos.length; i++){
        Totalsiniva+=eval(productos[i].value);
    }
    
    document.getElementById("Total").value = Totalsiniva.toFixed(2) + " €.";
    iva = (Totalsiniva * 21 / 100);
    document.getElementById("Iva").value = iva.toFixed(2) + " €.";
    TotalFinal = Totalsiniva + iva;
    document.getElementById("TotalTotal").value = TotalFinal.toFixed(2) + " €.";
}

function imprimir()
{
	text = ("<HEAD><TITLE>Factura de tu ordenador</TITLE></HEAD>");
	text+="<BODY BGCOLOR='#FFFFFF'><B><FONT SIZE= 4 COLOR=BLUE>Factura desglosada de tu pedido.</FONT></B>";
	text+="<br><hr>";
        text+="<TABLE BORDER =0><TR VALIGN=Top><TD VALIGN=Top>";
        text+="<B>Caja de Ordenador:<BR>Disco Duro: <BR>Teclado: <BR>Ratones: <BR>Placa base: <BR>Tarjetas de sonido:";
        text+="<BR>Microprocesadores: <BR>Monitores: <BR>Tarjeta gráfica: <BR>Routers: <BR>Granadoras: <BR>Impresoras: ";
        text+="</B></TD><TD>";
  
        let productos = document.getElementsByTagName("select");
        //Recorremos todos los select y guardamos el valor de cada uno de ellos
        //sumandolo a la cadena anterior guardada en la variable text
        for (let i=0; i<productos.length; i++){
            text+="<b>" + productos[i].value + " €." + "<br>";
        }
	text=(text+"<br><br><CENTER><BUTTON onClick='window.print()'><img SRC='Imagenes/impre.gif' border='0' WIDTH='38' HEIGHT='34'></BUTTON>");
        text=(text+"</body></html>");
	msgWindow=window.open("","displayWindow","toolbar=no,width=375,height=480,directories=no,status=yes,scrollbars=no,resize=no,menubar=yes");
	msgWindow.document.write(text);
	msgWindow.document.close();
}
