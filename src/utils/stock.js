// Se agrega propiedad stock a lista de productos
export function stock(data) {
  let num = 0;
  for (const elem of data) {
    num = num + 2;
    elem.stock = num;
  }
}

