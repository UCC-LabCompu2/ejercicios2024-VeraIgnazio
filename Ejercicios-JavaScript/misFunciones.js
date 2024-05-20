/**
 * Conversion de unidades metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param (string) id - El id de los metros, yardas, pies o pulgadas
 * @param (number) valor - El valor de los inputs de los metros, yardas, pies o pulgadas
 * @return Valor que retorna
 */
function CambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido " + id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    } else if (id == "`pie`") {
        document.lasUnidades.unid_metro.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    } else if (id == "yarda") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    }
}
{
    function convertirGR(id) {
        var grad, rad;
        if (id=="grados"){
            grad = document.getElementById (elementld:"grados").value;
            rad=(grad*Math.PI)/180;
        } else if (id==radianes){
            rad=document.getElementById (elementld"radianes").value;
            grad = (rad*180)/Math.PI;
        }
        document.getElementById("grados").value=grad;
        document.getElementById("radianes").value=rad;
    }
}
let mostrarOcultar = (valor) => {
    if (valorMO === "val_mostrar") {
        document.getElementById("divMO").style.display = block;
    } else if (valorMO === "val_ocultar") {
        document.getElementById("divMO").style.display = none;
    }
}