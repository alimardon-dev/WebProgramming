// createFiled is value taken from input tag
let createField = document.getElementById("create-field");

// new element adding function 
function itemTemplate(plan) {
  return `
  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
  <span class="item-text">${plan.reja}</span>
  
  <div>
  <button data-id="${plan._id}" class="edit-me btn btn-secondary btn-sm mr-1">
  Modify
  </button>
  <button data-id="${plan._id}" class="delete-me btn btn-danger btn-sm">
  Delete
  </button>
    </div>
  </li>`;
}

// console.log(document);
// document
document

// selecting the form by its id
.getElementById("create-form")

// adding a task based on its function 
.addEventListener("submit", (e) => {
  
  // stops page from refreshing  
  e.preventDefault();
  
  // axios helps to send data from frontend to backend 
  
  // axios sends post request to backend route
  // qwerty = req.body.qwerty
  // so from now on input.name does not matter anymore
  // if (createField) {
    axios
    .post("/create-item", {reja: createField.value})
    
    // if sending data successfull it then do this below
    // response comes from server side as answer for the post request
    .then((response)=>{
      document
      .getElementById("item-list")
      .insertAdjacentHTML("beforeend",itemTemplate(response.data))
      
      // clearing the input field without refreshing
      createField.value = "";
      
      // putting the cursor back onto input field 
      createField.focus(); 
    })
    
    // if error happens it shows error     
    .catch((err)=>{
      console.log("Please try again!", err);
    });
  // }
});


document
.addEventListener("click", (e)=>{
  
  // console.log(e);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete?")) {

      // sending the clicked button id to server
      axios
      .post("/delete-item", ({id: e.target.getAttribute("data-id")}))
      .then((response) =>{
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err)=>{
        console.log("please try again");
      })
    }else{
      alert("No")
    }
  }
  if (e.target.classList.contains("edit-me")) {
    alert("Edit button clicked");
  }
})
