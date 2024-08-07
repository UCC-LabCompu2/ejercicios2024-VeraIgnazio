/**
 * Conversion de unidades metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas o pulgadas
 * @return
 */
function CambiarUnidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido " + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (id === "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.08333;
        yarda = valor * 0.027778;
    } else if (id === "pie") {
        pie = valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333;
    } else if (id === "yarda") {
        yarda = valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda * 100) / 100;
}

{
    function ConvertirGR(id) {
        var grad, rad;
        if (id === "grados") {
            grad = document.getElementById("grados").value;
            rad = (grad * Math.PI) / 180;
        } else if (id === "radianes") {
            rad = document.getElementById("radianes").value;
            grad = (rad * 180) / Math.PI;
        }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }
}

/**
 * Mostrar y ocultar div
 * @method MostrarOcultar
 * @return
 * @param valorMO
 */
function mostrarOcultar(valorMO) {
    if (valorMO === "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO === "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }

}

function calcularSuma() {
    var num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2
}

function calcularResta() {
    var num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2
}

function calcularMultiplicacion() {
    var num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2
}

function calcularDivision() {
    var num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2
}

function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp)
}

function cargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1]
    un = urlComp.split("#")[2]

    document.getElementById("dist").value = can + " " + un;
}

function guardarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2_web.html");
}

function cargarLocalStorage() {
    let can, un;
    can = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = can + " " + un;
}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(margen, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgba(228,0,255,0.99)"
    ctx.fill();
}

var bandera;

function dibujar(event) {
    var canvas = document.getElementById("CanvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function limpiarCanvas() {
    var canvas = document.getElementById("CanvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculada() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var alturaMax = canvas.height;
    var anchoMax = canvas.width;
    //Dibujar Lineas Horizontales
    ctx.beginPath();
    for (i = 0; i < alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i)
        ctx.strokeStyle = "rgba(23,238,51,0.99)";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    //Dibujar Lineas Verticales
    ctx.beginPath();
    for (i = 0; i < anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax)
        ctx.strokeStyle = "rgba(23,238,51,0.99)";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2)
    ctx.strokeStyle = "rgba(255,0,0,0.99)";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax)
    ctx.strokeStyle = "rgba(0,0,0,0.99)";
    ctx.stroke();
    ctx.closePath();
}
function dibujarImagen(posX,posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width

    console.log(posX,posY);
    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
    ctx.drawImage(img, posX, posY);
    }
}
x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }
    if (x>canvas.width){
        x=0;

    }
}   x+=dx