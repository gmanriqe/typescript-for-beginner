/* PARAMETRO OPCIONAL */
// el signo de interrogación despues de momento, quiere decir que es un parametro opcional
// momento?:string
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "curso"; }
    var mensaje;
    if (momento) {
        mensaje = quien + "activo el" + objeto;
        console.log(mensaje);
    }
    else {
        mensaje = "Nadie activo el " + objeto;
    }
}
// activar("devmaster");
activar("devmaster", "curso virtual");
