
const paisCapital = { "Argentina": "Buenos Aires", "Brasil": "Brasilia", "Colombia": "Bogotá", "Chile": "Santiago", "Uruguay": "Montevideo", "Ecuador": "Quito" }; 
const paisesSelect = document.getElementById('paises'); 
const capitalesSelect = document.getElementById('capitales'); 

paisesSelect.addEventListener('change', function(){ 
    const paisSeleccionado = this.value;
    if (paisSeleccionado){
        const capital = paisCapital[paisSeleccionado]; 
        document.getElementById('capitales').value = capital;
        capitalesSelect.disabled = false; 
        console.log(`País seleccionado: ${paisSeleccionado}`); 
        console.log(`Capital correspondiente: ${capital}`); 
    } else { 
        capitalesSelect.disabled = true; 
    }
}
);

capitalesSelect.addEventListener('change', function()
    { 
    document.getElementById('capitales').value = "";
    document.getElementById('paises').value = ""; 
    capitalesSelect.disabled = true; 
    }
);

