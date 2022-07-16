function cl(dat) {
  console.log(dat);
}
const body = document.querySelector(".main");
function celsius(data) {
  cel = data - 273.15;

  return cel.toFixed();
}
async function obtenerClima(nombre) {
  const appid = "91ab016d5fe053ada7546beb013a9645";
  const id = nombre;
  try {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=` +
      id +
      `&appid=` +
      appid;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    weather = resultado.main;
    temp = resultado.main.temp;

    crearElemento(nombre, celsius(temp));

    return celsius(temp);
  } catch (error) {
    cl(error);
  }
}
const txt = document.querySelector("#text");

txt.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let name = txt.value;
    obtenerClima(name);
  }
  setTimeout(() => {
    const close = document.querySelectorAll(".close");
    close.forEach((colseElem) => {
      colseElem.addEventListener("click", function (e) {
        cl(colseElem.parentElement.classList.add("none"));
      });
    });
  }, 4000);
});

function crearElemento(n, c) {
  const contenedor = document.createElement("DIV");
  const name = document.createElement("H2");
  const cant = document.createElement("H1");
  const close = document.createElement("P");

  contenedor.classList.add("div");
  name.classList.add("nombre");
  cant.classList.add("cantidadMin");
  close.classList.add("close");

  name.textContent = n;
  cant.textContent = c + " °";
  close.textContent = "X";
  contenedor.appendChild(name);
  contenedor.appendChild(cant);
  contenedor.appendChild(close);

  body.appendChild(contenedor);

  cl(contenedor);
}
