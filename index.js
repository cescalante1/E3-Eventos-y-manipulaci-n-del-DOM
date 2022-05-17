let PIZZAS = [

    {
    
    id: 1,
    nombre:`Especial`,
    ingredientes:["Muzzarella","Jamon","Morrones"],
    precio:800,


    },

    {
    
        id: 2,
        nombre:`Napolitana`,
        ingredientes:["Muzzarella","Tomate","Ajo"],
        precio:750,
    
    
        },

        {
    
            id:3,
            nombre:`Huevon`,
            ingredientes:["Muzzarella","Huevo","Jamon"],
            precio:550,
        
        
            },

            {
    
                id:4,
                nombre:`Calabresa`,
                ingredientes:["Muzzarella","Salame"],
                precio:500,
            
            
                },

                {
    
                    id:5,
                    nombre:`Tropical`,
                    ingredientes:["Muzzarella","Jamon","Anana"],
                    precio:780,
                
                
                    },

                    {
    
                        id:6,
                        nombre:`Anchoas`,
                        ingredientes:["Muzzarella","Anchoas","Alcaparras"],
                        precio:850,
                    
                    
                        }




];




const titleh2 = document.querySelector("h2");
const titleh4 = document.querySelector("h4");
const inputID = document.getElementById('ingreso');
const sendbutton = document.querySelector("button");


funcionrender = (ID) => {

    while (titleh2.firstChild) {
		titleh2.removeChild(titleh2.firstChild);
	}

	while (titleh4.firstChild) {
		titleh4.removeChild(titleh4.firstChild);
	}

    const pizza = PIZZAS.find(p => p.id === ID);

    if(!pizza){

        alert("No existe la pizza con ese ID");
    }

    const nuevoh2 = document.createTextNode(`Pizza: ${pizza.nombre}`);
    const nuevoh4 = document.createTextNode(`Precio: ${pizza.precio}`);

    titleh2.appendChild(nuevoh2);
    titleh4.appendChild(nuevoh4);


}

sendbutton.addEventListener('click', () =>{

    let valor = inputID.value;

    funcionrender(Number(valor));

    

})







