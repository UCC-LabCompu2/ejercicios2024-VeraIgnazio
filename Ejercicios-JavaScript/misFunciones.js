/**
 * Conversion de unidades metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas o pulgadas
 * @return
 */
function CambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido " + id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (id === "metro") {
        document.lasUnidades.pulgada.value = valor * 39.3701;
        document.lasUnidades.pie.value = valor * 3.28084;
        document.lasUnidades.yarda.value = valor * 1.09361;
    } else if (unidad === "pulgada") {
        document.lasUnidades.metro.value = valor * 0.0254;
        document.lasUnidades.pie.value = valor * 0.08333;
        document.lasUnidades.yarda.value = valor * 0.027778;
    } else if (unidad === "pie") {
        document.lasUnidades.metro.value = valor * 0.3048;
        document.lasUnidades.pulgada.value = valor * 12;
        document.lasUnidades.yarda.value = valor * 0.333333;
    } else if (unidad === "yarda") {
        document.lasUnidades.metro.value = valor * 0.9144;
        document.lasUnidades.pulgada.value = valor * 36;
        document.lasUnidades.pie.value = valor * 3;
    }
}
{
    function ConvertirGR(id) {
        var grad, rad;
        if (id== "grados"){
            grad = document.getElementById("grados").value;
            rad = (grad*Math.PI)/180;
        } else if (id== "radianes"){
            rad = document.getElementById("radianes").value;
            grad = (rad*180)/Math.PI;
        }
        document.getElementById("grados").value=grad;
        document.getElementById("radianes").value=rad;
    }
}
/**
 * Mostrar y ocultar div
 * @method MostrarOcultar
 * @param {valorMO} valor - valor del radio seleccionado
 * @return
 */
function mostrarOcultar (valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }

}

