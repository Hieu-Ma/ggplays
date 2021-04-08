let renameBtn = document.getElementById('rename');
let deleteBtn = document.getElementById('delete');

window.addEventListener("DOMContentLoaded", () => {
  renameBtn.addEventListener('click', (event) => {
    event.target.id
    console.log("rename");
  })
  
  deleteBtn.addEventListener('click', (event) => {
    console.log("delete");
  })
 
})



