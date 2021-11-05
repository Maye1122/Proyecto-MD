console.log("prueba1potus");
debugger;
      const ingresoLogin = document.getElementById("id01");
      // const nombreUsuario = document.getElementById("nombreDeUsuario");
      // const email = document.getElementById("email");
      // const password = document.getElementById("password");

      function crearNuevoRegistroHTML(nombre,mail,password) {
        
      const nombreUsuario = document.getElementById("id01");
      const email = document.getElementById("email");
      const botonRegistrar = document.getElementById("botonRegistro");
      // const password = document.getElementById("password");

        
        nombreUsuario.textContent = `${nombre}`;
        email.textContent = `${mail}`;
        password.textContent = `${password}`;
      
       
      }
     debugger;

     
      console.log("prueba2");
      botonRegistrar.addEventListener("click", function () {
        console.log("prueba3");
        fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({


        name: nombreUsuario.value,
        mail:  email.value,
        password: password.value,
     
       
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) =>  {

      console.log("respuesta exitosa");
      const crearNuevoRegistro = respuestaJSON.crearNuevoRegistro;

      crearNuevoRegistroHTML(
        crearNuevoRegistro.nombre,
        crearNuevoRegistro.mail,
        crearNuevoRegistro.password
      );
    });
});
