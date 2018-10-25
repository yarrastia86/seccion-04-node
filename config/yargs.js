const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento', {
        descripcion,
        completado

    })
    .command('borrar', 'Borrar un elemento', {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}