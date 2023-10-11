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

    const baseUrl = "https://cataas.com/cat?"

    app.innerHTML = /* HTML */ `
      <div>
        <h1>Hello Cat!</h1>
        <img src=" ${baseUrl}${data.url}" />
        <div id="reproductor">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1637329092&color=%2300ff18&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
          >
            <a
              href="https://soundcloud.com/calibresignature"
              title="Calibre"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
              >Calibre</a
            >
            ·
            <a
              href="https://soundcloud.com/calibresignature/more-fool-me"
              title="More Fool Me"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
              >More Fool Me</a
            >
          </div>
        </div>
      </div>
    `
  } catch (error) {
    console.log("error", error)
  }
}

getData()
