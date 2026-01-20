
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
  if (createField) {
  
  // stops page from refreshing  
  e.preventDefault();
  
  // axios helps to send data from frontend to backend 
  
  // axios sends post request to backend route
  // qwerty = req.body.qwerty
  // so from now on input.name does not matter anymore
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
  }
});


document
.addEventListener("click", (e)=>{
  
  // console.log(e);

  // deleting an item
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete?")) {

      // sending the clicked button id to server
      axios
      .post("/delete-item", ({id: e.target.getAttribute("data-id")}))
      .then((response) =>{
        console.log("Deleted the item!")
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err)=>{
        console.log("please try again", err);
      })
    }else{
      alert("No")
    }
  }

// modify 
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Enter the new value: ", 
      
      // show the original value as default values in prompt part
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    // console.log(userInput);
      if (userInput ) {
      axios
        .post("/edit-item", 
          // this data goes to backend server
          {
          id: e.target.getAttribute("data-id"), 
          new_input: userInput,
        })
        .then(response => {
          console.log("serverdan javob keldi!");
          console.log(response);
          e.target.parentElement.parentElement
          .querySelector(
            ".item-text")
            .innerHTML = userInput;
        })
        .catch((err) => {
          console.log("ERROR: ", err);
        })
    }
  }
})

// delete-all
document
  .getElementById("clean-all")
  .addEventListener("click", async() =>{
    try {
      const response = 
        await axios
          .post("/delete-all",
            {delete_all: true})

      alert(response.deletedCount);
      console.log(response.data);
      document.location.reload();
    } catch (err) {
      console.log("Error occured while deleting all", err);
    }
  })
