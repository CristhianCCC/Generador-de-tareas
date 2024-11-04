const objects = []; //iniciando el array vacio

render();



function guardar() { //añadiendo funcionalidad al boton guardar
    const task = document.getElementById('tarea');
    const tarea = task.value;

    const date = document.getElementById('fecha');
    const fecha = date.value;

    objects.push({
        tarea: tarea,
        fecha: fecha
    });

    render();
}

function render() { //añadir el contenido al index
    document.getElementById('list-container').innerHTML = ''; 

    objects.forEach(function (object) {
        const element = document.createElement('div');
        element.innerHTML = object.tarea + ' ' + object.fecha;
        const objectList = document.getElementById('list-container');
        objectList.appendChild(element);
    });
}

function eliminar(index){ //boton para eliminar tarea
    objects.splice(index, 1);
    render();
}

