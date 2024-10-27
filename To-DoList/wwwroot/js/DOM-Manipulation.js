document.getElementById("nameBtn").addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput");
    const nameText = nameInput.value;

    if (nameText) {
        const li = document.createElement("li");
        li.textContent = nameText;

        document.getElementById("nameList").appendChild(li);

        nameInput.value = "";
    } else {
        alert("No names given.")
    }


    

    
});

const letterInput = document.querySelector("letterInput");
const sendBtn = document.querySelector("sendBtn");
const letterDisplay = document.querySelector("letterDisplay");
const errorMessage = document.querySelector("errorMessage");

sendBtn.addEventListener("click", () => {
    const letterText = letterInput.value;

    if (letterText === "") {
        errorMessage.style.display = "block";
        return;
    }
    errorMessage.style.display = "none";

    //Create 
    const letterElement = document.createElement("div");
    letterElement.classList.add("letterInput");

    if (letterText.length > 20) {
        letterElement.classList.add("italic");
    }

    const deleteBtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.classList.add("delete-btn");
    deletebtn.addEventListener("click", () => {
        letterElement.remove();
    });

    letterElement.appendChild(deleteBtn);
    letterDisplay.appendChild(letterElement);


    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("Edit-btn");
    editButton.addEventListener("click", () => {
        const currentLetter = letterElement.querySelector("strong").textContent;

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = currentLetter;

        letterElement.querySelector("strong").replaceWith(editInput);
    })
})
