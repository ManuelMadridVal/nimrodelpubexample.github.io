function cambiarTamano() {
  var formulario = document.getElementById("formulario");
  formulario.style.width = "700px"; /* Nuevo ancho del formulario */
  formulario.style.height = "400px"; /* Nueva altura del formulario */
}

const enlace = document.getElementById("mi-enlace");
const cuadro = document.getElementById("mi-cuadro");
const body = document.querySelector("body");
body.style.backgroundImage =
  "url('https://chefeel.com/chefgeneralfiles/2022/02/glass-of-whiskey-with-cinnamon-scaled-880x650.jpg')";

enlace.addEventListener("click", function (e) {
  e.preventDefault();
  cuadro.style.display = "block";
});

$(document).ready(function () {
  $("#my-image1").click(function () {
    $(this).toggleClass("zoomed");
  });
});

$(document).ready(function () {
  $("#my-image2").click(function () {
    $(this).toggleClass("zoomed");
  });
});

$(document).ready(function () {
  $("#my-image3").click(function () {
    $(this).toggleClass("zoomed");
  });
});

$(document).ready(function () {
  $("#my-form1").submit(function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var name = $("#name").val();
    var email = $("#email").val();
    var attendees = $("#attendees").val();

    // Enviar los datos del formulario mediante AJAX
    $.ajax({
      url: "send.php", // URL del script PHP que procesa los datos del formulario
      type: "POST",
      data: {
        name: name,
        email: email,
        attendees: attendees,
      },
      success: function (response) {
        // Mostrar la ventana de alerta
        alert(
          "Se han registrado " +
            attendees +
            " asistentes. Se ha enviado el código de confirmación al correo " +
            email +
            "."
        );
      },
      error: function (xhr, status, error) {
        // Manejar errores en caso de que el servidor no pueda procesar los datos del formulario
        alert("Ha ocurrido un error al enviar el formulario: " + error);
      },
    });
  });
});
