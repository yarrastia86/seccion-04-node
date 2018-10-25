const fs = require('fs');

let todos = [];

const crear = (descripcion) => {

    cargar();

    let todo = {
        descripcion,
        completado: false
    }

    todos.push(todo);
    guardar();

    return todo;
}

const guardar = () => {

    let data = JSON.stringify(todos);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargar = () => {

    try {
        todos = require('../db/data.json');
    } catch (error) {
        todos = [];
    }

}
const getListado = () => {

    cargar();
    return todos;
}

const actualizar = (descripcion, completado = true) => {
    cargar();

    let index = todos.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        todos[index].completado = completado;
        guardar();

        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargar();

    let newtodo = todos.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if (newtodo.length !== todos.length) {
        todos = newtodo;
        guardar();
        return true;
    } else {
        return false;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}