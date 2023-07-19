function siempreTrue() {
  return true;
}

async function mensajePromesa() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Hola soy una promesa");
}

function* indicesPares() {
  let index = 0;
  while (true) {
    yield index;
    index += 2;
  }
}

console.log(siempreTrue());

mensajePromesa();

const generador = indicesPares();
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
