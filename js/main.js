  /* Cambia la imagen principal por la de zombie siempre y cuando
  la fecha sea 1 y 2 de noviembre */

  const fecha = new Date();
  let ocultarDev = document.getElementById("contenedor-imagen");
  let pokemon = document.getElementById("pokemon");
  let mostrarZombie = document.getElementById("contenedor-zombie");
  const descripcion = document.getElementById("descripcion");
  const mensaje = document.getElementById("mensaje");
  const btnOpcion = document.getElementById("btnOpcion");
  //const imagenes = document.getElementById("imagenes");


  function navidad(){
    ocultarDev.src = "./img/navidad.png";
    mensaje.innerHTML="Hey!! Feliz Navidad";
    ocultarDev.style.display="";
  }

  function rogerioPokemon(){
    pokemon.src = "./img/pokemon.png";
    mensaje.innerHTML="Hola!! Hijo";
    ocultarDev.style.display="";
   }

  function devRogerio(){
    ocultarDev.style.display="";
    mostrarZombie.style.display="none";
    ocultarDev.src = "./img/premium_15.png"; //agregar imagen cuando necesite cambiarla por otra
    
  }

 

  function diaMuertos(){
      ocultarDev.style.display="none";
      mostrarZombie.style.display="";
      descripcion.innerHTML="Hey!! Presiona el Botón de Vacuna";
      descripcion.style.color = "#fb5607";
      btnOpcion.style.visibility = "visible";
      btnOpcion.value="Vacuna";
  }

  /* function birthdayHija({
    
  }) */
 

 function eventosMensuales(){

  if (fecha.getMonth()+1 == 11 && fecha.getDate() <= 2){
    diaMuertos();
    }else if(fecha.getMonth()+1 == 12 && fecha.getDate() == 24){
      navidad();
    }else if(fecha.getMonth()+1 == 11 && fecha.getDate() == 8){
      rogerioPokemon();
    }else{
      devRogerio();
  }

 }

 eventosMensuales();

  function mostrar(input) {
   
      if(input.value=="Zombie")
      {
        ocultarDev.style.display="none";
        mostrarZombie.style.display="";
        
        input.value="Vacuna"
        
      }else{
        ocultarDev.style.display="";
        mostrarZombie.style.display="none";
        descripcion.innerHTML="Desarrollador Web, Back-End.";
        descripcion.style.color = "#fff";
        
        input.value="Zombie"
      } 
  
      
  }