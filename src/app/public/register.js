const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit",async(e)=>{
  e.preventDefault();
  console.log(e.target.children.user.value); //el valor que tiene el user que es hijo que tiene el fomulario
  // fetch para conectarno con la base de datos
  const res = await fetch("http://localhost:3000/api/register", {
    /*
    El método POST se utiliza para enviar datos al servidor. Por ejemplo, cuando completas un formulario en línea y haces clic en “Enviar”, los datos se envían al servidor utilizando una solicitud POST.
    */
    method: "POST",
    headers: {// aqui le decimos lo que le vamos a mandar , en este caso tipo json
      "Content-Type": "application/json",
    },
    body: JSON.stringify({// aqui mandamos el cuerpo de lo que enviamos
      user: e.target.children.user.value,
      email: e.target.children.email.value,
      password: e.target.children.password.value,
    }),
  });
  if (!res.ok) return mensajeError.classList.toggle("escondido", false);
  const resJson = await res.json();
  if (resJson.redirect) {
    window.location.href = resJson.redirect;
  }
})
