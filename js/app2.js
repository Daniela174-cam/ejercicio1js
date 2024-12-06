
// Datos de vehículos
const vehiculos = {
    toyota: {
        modelos: ["Corolla", "Camry", "RAV4"],
        imagenes: {
            Corolla: "https://example.com/toyota_corolla.jpg",
            Camry: "https://example.com/toyota_camry.jpg",
            RAV4: "https://example.com/toyota_rav4.jpg"
        }
    },
    ford: {
        modelos: ["Fiesta", "Focus", "Mustang"],
        imagenes: {
            Fiesta: "https://example.com/ford_fiesta.jpg",
            Focus: "https://example.com/ford_focus.jpg",
            Mustang: "https://example.com/ford_mustang.jpg"
        }
    },
    bmw: {
        modelos: ["Serie 3", "X5", "i8"],
        imagenes: {
            "Serie 3": "https://example.com/bmw_serie3.jpg",
            X5: "https://example.com/bmw_x5.jpg",
            i8: "img/i8.jpeg"
        }
    }
};

// Función para actualizar la lista de modelos y mostrar la foto
function mostrarFoto() {
    const marcaSelect = document.getElementById('marcas');
    const modeloSelect = document.getElementById('modelos');
    const fotoDiv = document.getElementById('foto');
    const fotoCarro = document.getElementById('fotoCarro');

    // Limpiar la lista de modelos
    modeloSelect.innerHTML = '<option value="">Selecciona un modelo</option>';

    // Verificar si se seleccionó una marca
    const marcaSeleccionada = marcaSelect.value;
    if (marcaSeleccionada) {
        // Llenar la lista de modelos de la marca seleccionada
        const modelos = vehiculos[marcaSeleccionada].modelos;
        modelos.forEach(modelo => {
            const option = document.createElement("option");
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });

        // Mostrar la foto cuando se seleccione un modelo
        modeloSelect.onchange = function () {
            const modeloSeleccionado = modeloSelect.value;
            if (modeloSeleccionado) {
                fotoCarro.src = vehiculos[marcaSeleccionada].imagenes[modeloSeleccionado];
                fotoCarro.style.display = "block"; // Mostrar la imagen
            } else {
                fotoCarro.style.display = "none"; // Ocultar la imagen si no hay modelo seleccionado
            }
        };
    } else {
        fotoDiv.innerHTML = ''; // Limpiar si no se selecciona ninguna marca
        fotoCarro.style.display = "none";
    }
}