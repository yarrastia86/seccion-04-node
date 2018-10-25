const argv = require('./config/yargs').argv;
const colors = require('colors');

const todos = require('./todo/todo');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let todo = todos.crear(argv.descripcion);
        console.log(todo);
        break;
    case 'listar':

        let listado = todos.getListado();

        for (let tarea of listado) {
            console.log('======== Por hacer ========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('============================'.red);
        }

        break;
    case 'actualizar':
        let estado = todos.actualizar(argv.descripcion, argv.completado);
        console.log(estado);
        break;

    case 'borrar':
        let borrado = todos.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no conocido');
        break;
}