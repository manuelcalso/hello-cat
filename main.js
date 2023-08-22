// 1. VARIABLES
// 1A. IMPORTACIONES
import "./style.css"

// 1B. VARIABLES LOCALES
const app = document.querySelector("#app")

// 2. EJECUCIONES
// 2A. VISTAS

// UN PROCESO ASÍNCRONO GRACIAS A LA PALABRA "ASYNC"
//https://dog.ceo/api/breeds/image/random

// cat  https://cataas.com/cat?json=true
const getData = async () => {
  try {
    // 1. OBTENER LA RESPUESTA DEL SERVIDOR
    const response = await fetch("https://cataas.com/cat?json=true")
    console.log("response:", response)

    if (response.status === 404) {
      console.log("ha ocurrido un error", response.status)
    }

    // 2. OBTENER EL DATO EN JSON (ÚNICO)
    const data = await response.json()
    console.log("data", data)

    // 3. PINTAR EN LA VISTA

    app.innerHTML = /* HTML */ `
      <div>
        <h1>Hello Cat!</h1>
        <img src="https://cataas.com/${data.url}" />
      </div>
    `
  } catch (error) {
    console.log("error", error)
  }
}

getData()
