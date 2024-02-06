const addBtn = document.getElementById("addBtn")
const modal = document.querySelector(".modal")
const closeBtn = document.getElementById("close")
const form = document.querySelector("#myForm")


const submitBtn = document.getElementById("submitBtn")

console.log(submitBtn)

addBtn.addEventListener("click", () => {
    modal.showModal()

})

closeBtn.addEventListener("click", () => {
    modal.close()
    // alert("hello")
})



const library = []

class FormOfficial {
    constructor(title, author, status) {
        this.title = title
        this.author = author
        this.status = status

    }

    display() {
        const title = document.querySelector("#title").value
        const author = document.querySelector("#Author").value
        const status = document.querySelector("#status").value
        // console.log(`the book ${this.title} was written by ${this.author}`)
        const bookToAdd = new FormOfficial(title, author, status)
        library.push(bookToAdd)
        console.log(library)



    }

    addBookToLib() {
        const displayDiv = document.querySelector(".display")
        displayDiv.textContent = ""
        for (let i = 0; i < library.length; i++) {
            const titleDiv = document.createElement("h2");
            titleDiv.classList.add("titleH2")
            titleDiv.textContent = library[i].title;
            titleDiv.setAttribute("contenteditable", "true"); // Make titleDiv editable
            titleDiv.addEventListener("blur", function () {
                library[i].title = titleDiv.textContent; // Update library data when editing is finished
            });
            displayDiv.appendChild(titleDiv);

            const authorDiv = document.createElement("h3");
            authorDiv.classList.add("authorH3")
            authorDiv.textContent = library[i].author;
            authorDiv.setAttribute("contenteditable", "true")
            authorDiv.addEventListener("blur", () => {
                library[i].author = authorDiv.textContent
            })
            displayDiv.appendChild(authorDiv);

            const statusDiv = document.createElement("p");
            statusDiv.classList.add("statusP")
            statusDiv.textContent = library[i].status;
            statusDiv.setAttribute("contenteditable", "true")
            statusDiv.addEventListener("blur", () => {
                library[i].status = statusDiv.textContent
            })
            displayDiv.appendChild(statusDiv);
        }
        // const titleDiv = document.createElement("h2")

    }
}
submitBtn.addEventListener("click", () => {
    const form = new FormOfficial()
    form.display()
    form.addBookToLib();

    modal.close()
    document.getElementById("title").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("status").value = "";
})

