document.addEventListener("DOMContentLoaded", function() {
  const excuseParagraph = document.getElementById("excusa");

  window.excuseGenerator = function() {
    const excuse = generateExcuse();
    excuseParagraph.innerHTML = excuse;
  };

  function generateExcuse() {
    let who = [
      "El perro",
      "Mi tortuga",
      "El pez de mi prima",
      "La hormiga",
      "El repartidor"
    ];
    let action = ["se comió", "se robó", "se llevó", "se escondió", "se tragó"];
    let what = [
      "mi billete de lotería",
      "el teléfono fijo",
      "la llave de la casa",
      "el control remoto",
      "la tarea de mi hermano"
    ];
    let when = [
      "ayer",
      "hace un rato",
      "hace un mes",
      "hace un instante",
      "hace una semana"
    ];

    let WhoRandomIndex = Math.floor(Math.random() * who.length);
    let ActionRandomIndex = Math.floor(Math.random() * action.length);
    let WhatRandomIndex = Math.floor(Math.random() * what.length);
    let WhenRandomIndex = Math.floor(Math.random() * when.length);

    return (`${who[WhoRandomIndex]} ${action[ActionRandomIndex]} ${what[WhatRandomIndex]} ${when[WhenRandomIndex]}`);
  }
});
