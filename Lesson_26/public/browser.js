console.log("front-end part starts here...");

let createField = document.getElementById("create-field");

function itemTemplate(plan) {
    return `
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${plan.plan}</span>
    
    <div>
      <button data-id="${plan._id}" class="edit-me btn btn-secondary btn-sm mr-1">
        Ozgartirish
      </button>
      <button data-id="${plan._id}" class="delete-me btn btn-danger btn-sm">
        Ochirish
      </button>
    </div>

    </li>`;
}

document
    .getElementById("create-form")
    .addEventListener("submit", function(e) {
        e.preventDefault();
        axios
        .post("/create-item", { reja: createField.value })
        .then((response)=>{
            document
            .getElementById("item-list")
            .insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createField.value = "";
        createField.focus(); 
        })
        .catch((err)=>{
            console.log("Please try again!", err);
        });
    });