 const titulo=document.querySelector("#Titulo")
 const detalle=document.querySelector("#Detalle")
 const form=document.querySelector("#post-form")
 
 form.addEventListener("submit",event =>{
   event.preventDefault();
   alert("post publicado "+titulo.value+" "+detalle.value);
 })