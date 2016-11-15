
function agregar() {
	//identicar contenedor HTML
	var guardaContenedor = document.getElementById('contenedor');

	var quitar_borrar = document.getElementById('desplega');
	quitar_borrar.classList.toggle('quitar');

	//padre de js
	var contenedorJs = document.createElement('div');
	contenedorJs.setAttribute('id', 'jsContiene');

	var texto = document.createElement('textarea');
	texto.setAttribute('id', 'agregar');

	var boton = document.createElement('a');
	boton.setAttribute('type', 'a');

	//crear un mnodo de texto para agregar guardar al boton
	var nodoText = document.createTextNode('guardar');

	boton.appendChild(nodoText);

	contenedorJs.appendChild(texto);
	contenedorJs.appendChild(boton);
	//contenedorJs.appendChild(boton_borrar);
	guardaContenedor.appendChild(contenedorJs);

	//BOTON MOSTRAR

	boton.addEventListener('click',function(){

		var guarda_contenido = document.getElementById('contenedor_guardar');
		var rescatar = document.getElementById('agregar').value;

		var padre_guarda = document.createElement('div');
		padre_guarda.setAttribute('class', 'para_guardar');

		var mostrar_enlace = document.createElement('span');
		var muestra = document.createTextNode(rescatar);
		
		var mostrar_texto = document.createElement('textarea');
		var mostrar = document.createTextNode(rescatar);

		var mi_boton = document.createElement('a');
        mi_boton.setAttribute('class', 'boton_guarder');

        var texto_boton = document.createTextNode('Crear nueva lsita');
        mi_boton.appendChild(texto_boton);
		
        var mi_texto = document.getElementById('agregar')

		mostrar_enlace.appendChild(muestra);
		padre_guarda.appendChild(mostrar_enlace);
		padre_guarda.appendChild(mostrar_texto);
		padre_guarda.appendChild(mi_boton);
		guarda_contenido.appendChild(padre_guarda);

		padre_guarda.setAttribute('class', 'col-md-3');
		padre_guarda.setAttribute('id', 'border');
		
	})


}