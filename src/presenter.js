 const titulo=document.querySelector("#Titulo")
 const detalle=document.querySelector("#Detalle")
 const form=document.querySelector("#post-form")
 const post = document.querySelector("#resultado-post");

 
 form.addEventListener("submit",event =>{
   event.preventDefault();
   //alert("post publicado "+titulo.value+" "+detalle.value);
   post.innerHTML = "<p>" +titulo.value+" "+detalle.value + "</p>";
 })