const isString = (value) => typeof value === 'string' && value.trim() !== '';
const isDecimal = (value) => typeof value === 'number' && !Number.isInteger(value);
const isInteger = (value) => Number.isInteger(value);

const validateProductData = (nombreProducto, descripcion, precio, stock) => {
  if (!isString(nombreProducto)) {
    return 'Invalid nombreProducto';
  }
  if (!isString(descripcion)) {
    return 'Invalid descripcion';
  }
  if (!isDecimal(precio)) {
    return 'Precio can only be decimal';
  }
  if (!isInteger(stock)) {
    return 'Stock can only be integer ';
  }
  return null;
};
const validateOnlyStock = (stock) =>{
    if (!isInteger(stock)) {
        return 'Stock can only be integer ';
      }
      return null;
}

module.exports = {
  validateProductData,
  validateOnlyStock
};