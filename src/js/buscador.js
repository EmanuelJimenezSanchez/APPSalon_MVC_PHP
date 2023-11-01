document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  buscarPorFecha();
  eliminarCita();
}

function buscarPorFecha() {
  const fechaInput = document.querySelector('#fecha');
  fechaInput.addEventListener('input', function (e) {
    const fechaSeleccionada = e.target.value;

    window.location = `?fecha=${fechaSeleccionada}`;
  });
}

function eliminarCita() {
  const botonesEliminar = document.querySelectorAll('.boton-eliminar');

  botonesEliminar.forEach(botonEliminar => {
    botonEliminar.addEventListener('click', function () {
      const datos = new FormData();
      datos.append('id', botonEliminar.id);

      console.log(botonEliminar.id);

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async () => {
        try {
          // Peticion hacia la api
          const url = 'http://localhost:3000/api/eliminar';
          const respuesta = await fetch(url, {
            method: 'POST',
            body: datos
          });
        
          const resultado = await respuesta.json();
          console.log(resultado.resultado);
        
          if (resultado.resultado) {
            Swal.fire(
              'Eliminada!',
              'La cita ha sido eliminada',
              'success'
            ).then(() => {
              window.location.reload();
            });
          }
        } catch ( error ){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al eliminar la cita'
          })
        }
      })
 
    });
  })

  
}