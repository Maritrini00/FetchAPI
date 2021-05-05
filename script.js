
const url = "https://jsonplaceholder.typicode.com/photos";
const lista =  document.getElementById('lista')
/* fetch(url)
  .then(response => response.json())
  .then(fotos => {
      fotos.map(foto =>{
          let li = document.createElement('li');
          li.innerHTML = `<a href= "detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
          lista.appendChild(li);
      })
  })
  .catch(error=>{
      document.getElementById('error').innerHTML =error.message;
      console.log(error);
  })
  .finally(()=>{
      document.getElementById('cargando').innerHTML ="";
      document.getElementById('cargandoGif').src ="";
      console.log("proceso terminado");

  }) */
  //.then(json => console.log(json))

/* const miFetchApi = (url) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`La url ${url} respondió satisfactoriamente`);
            
        },3000);
    });
}


miFetchApi("uach.mx").then(respuesta => console.log(respuesta)); */


const obtenerFotos= async ()=>{
    const response = await fetch(url);
    const fotos = await response.json();
    return fotos;
}

obtenerFotos()
    .then(fotos =>{
        fotos.map(foto =>{
            let li = document.createElement('li');
            li.innerHTML = `<a href= "detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
            lista.appendChild(li);
        })
        })
        .catch(error=>{
            document.getElementById('error').innerHTML =error.message;
            console.log(error);
        })
        .finally(()=>{
            document.getElementById('cargando').innerHTML =" ";
            document.getElementById('cargandoGif').src ="";
            console.log("proceso terminado");
      
        })
    