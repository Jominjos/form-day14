console.log("dd");

function addfunction(params) {
   document.getElementById('modcon').style.display="block";
   document.getElementById('overlay').style.display="block";
   console.log(window.document);
   document.getElementById('modal').style.display='flex';

}

function closeModal(){
   document.getElementById('modcon').style.display ="none";
   document.getElementById('overlay').style.display="none";
  
}
 function resetForm(){
   document.getElementById('modal').reset();
 }
function formdata(){
   console.log('gdf');
}


let  form = document.getElementById("modal");
let gendercell ;
let foodcell="";
function submitForm(event) {
 
  
   event.preventDefault();
   let gender=document.getElementsByName('gender');
  
   gender.forEach(d=>{
    if(d.checked){
      gendercell= d.value
    }
      
   })
   let foods =document.getElementsByName('food')
   
   foods.forEach(d=>{
      if(d.checked){
         foodcell +=`${d.value},`
      }
      
   })
   

  

   document.getElementById('tablu').innerHTML+=`</tr>
   <tr align="center">
       <td>${
         document.getElementById('first-name').value
       }</td>
       <td>${
         document.getElementById('lastName').value
       }</td>
       <td>${
         document.getElementById('address').value
       }</td>
       <td>${
         document.getElementById('pincode').value
       }</td>
       <td>${
         gendercell
       }</td>
       <td>${
         foodcell
       }</td>
       <td>${
         document.getElementById('state').value
       }</td>
       <td>${
         document.getElementById('country').value
       }</td>
       
   </tr>
       

`
resetForm()
gendercell='';
foodcell='';
}
form.addEventListener('submit', submitForm);


async function fatchdata(){
  await fetch("/details.json")
   .then(res=>res.json())
   .then(data=>console.log(data.details))
   
document.createElement('p')



}

function formsubmitted(){
   console.log('submitted');
}

fatchdata()