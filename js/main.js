  
  
  const fecha = new Date();
  //let mes = fecha.getMonth() +1;
  let ocultar = document.getElementById("contenedor-imagen");
  let mostrar = document.getElementById("contenedor-zombie");

  if (fecha.getMonth()+1 == 11 && fecha.getDate() <= 2){
    ocultar.style.display="none";
    mostrar.style.display="";
   
  }else{
    ocultar.style.display="";
    mostrar.style.display="none";
    input.value="Zombie"
  }





  function mostrar(input) {
    let ocultar = document.getElementById("contenedor-imagen");
    let mostrar = document.getElementById("contenedor-zombie");
    
  
      if(input.value=="Zombie")
      {
        ocultar.style.display="none";
        mostrar.style.display="";
        
        input.value="Vacuna"
        
      }else{
        ocultar.style.display="";
        mostrar.style.display="none";
        
        input.value="Zombie"
      }
  
      
  }