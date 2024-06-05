//Creo el archivo Mocks para el Servicio GatosService con las funciones de la linea 3,4 y 5.
//Sirve para que las pruebas no hagan llamadas reales a la API y en su lugar utilicen el mock.
const GatosServiceMock = {
  getBreeds: jest.fn(),
  getBreedById: jest.fn(),
  searchBreeds: jest.fn(),
};

export default GatosServiceMock;