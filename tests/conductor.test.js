const { agregar, obtener, modificar, eliminar } = require('../methods/gestion/gConductor');
const conductorModel = require('../methods/models/conductorModel');
const assert = require('chai').assert;

describe('Conductor Operations', () => {
  it('agregar() debería agregar un conductor', async () => {
    // Limpiamos la base de datos antes de la prueba
    await conductorModel.deleteMany({});

    const nuevoConductor = {
      nombre: 'John Doe',
      apellido: 'Florez Rodriguez',
      t_documento: 'Cedula',
      documento: '1002442323',
      n_licencia: '1234567890',
      f_inicio: '2023-01-01',
      f_fin: '2023-12-31'
    };

    const conductorAgregado = await agregar(nuevoConductor);
    const conductores = await obtener({});
    assert.isObject(conductorAgregado);
    assert.equal(conductores.length, 1);
  });

  it('obtener() debería devolver todos los conductores', async () => {
    const conductores = await obtener({});
    assert.isArray(conductores);
  });

  it('modificar() debería modificar un conductor', async () => {
    const nuevosDatos = {
      nombre: 'Juan David',
      apellido: 'Florez Rodriguez',
      t_documento: 'Cedula',
      documento: '1002442323',
      n_licencia: '0123456789',
      f_inicio: '2023-01-01',
      f_fin: '2023-12-31'
    };

    // Agregamos un conductor para poder modificarlo
    const conductorAgregado = await agregar(nuevosDatos);
    const idConductor = conductorAgregado._id;

    const conductorModificado = await modificar(idConductor, nuevosDatos);
    assert.isObject(conductorModificado);
  });

  it('eliminar() debería eliminar un conductor', async () => {
    const nuevosDatos = {
      nombre: 'Juan David',
      apellido: 'Florez Rodriguez',
      t_documento: 'Cedula',
      documento: '1002442323',
      n_licencia: '0123456789',
      f_inicio: '2023-01-01',
      f_fin: '2023-12-31'
    };

    // Agregamos un conductor para luego eliminarlo
    const conductorAgregado = await agregar(nuevosDatos);
    const idConductor = conductorAgregado._id;

    const conductorEliminado = await eliminar(idConductor);
    assert.isObject(conductorEliminado);
  });
});
