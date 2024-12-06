function saveToFile() {
    // Obtiene el valor del campo de identificación
    const idNumero = document.getElementById("idNumero").value;
    // Obtiene el valor del campo de nombre completo
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    // Obtiene el valor del campo de contraseña
    const contraseña = document.getElementById("contraseña").value;
    // Obtiene el valor del campo de confirmación de contraseña
    const confirmContraseña = document.getElementById("confirmContraseña").value;
    // Obtiene el valor de la acción seleccionada (radio button)
    const accion = document.querySelector('input[name="accion"]:checked').value;
    // Obtiene el valor del campo de destino
    const destino = document.getElementById("destino").value;
    // Obtiene el valor del campo de hotel
    const hotel = document.getElementById("hotel").value;
    // Obtiene el valor del campo de comentarios
    const comentarios = document.getElementById("comentarios").value;
    // Verifica si el registro es completo o parcial
    const registroCompleto = document.getElementById("registroCompleto").checked ? "Completo" : "Parcial";

    // Verifica si la contraseña y la confirmación de contraseña coinciden
    if (contraseña !== confirmContraseña) {
        // Muestra un mensaje de alerta si las contraseñas no coinciden
        alert("Las contraseñas no coinciden.");
        return; // Sale de la función si las contraseñas no coinciden
    }

    // Crea una cadena de texto con los datos recopilados
    const data = `
        Número de Identificación: ${idNumero}
        Nombre Completo: ${nombreCompleto}
        Acción: ${accion}
        Ciudad de Destino: ${destino}
        Hotel: ${hotel}
        Comentarios: ${comentarios}
        Registro: ${registroCompleto}
    `;

    // Crea un nuevo Blob con los datos y especifica que es de tipo texto
    const blob = new Blob([data], { type: 'text/plain' });
    // Crea una URL para el Blob
    const url = URL.createObjectURL(blob);
    // Crea un enlace para descargar el archivo
    const link = document.createElement("a");
    link.href = url;
    link.download = "registro.txt"; // Nombre del archivo a descargar
    link.click(); // Simula un clic en el enlace para iniciar la descarga

    // Revoca la URL creada para liberar recursos
    URL.revokeObjectURL(url);
    // Resetea el formulario después de guardar
    document.getElementById("Form-registro").reset();
}
