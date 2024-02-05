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

submitBtn.addEventListener("click", () => {
    modal.close()
})