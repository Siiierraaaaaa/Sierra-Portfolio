const contactBtn = document.getElementById('contactBtn');
const contactBtn2 = document.getElementById("contactBtn2");
contactBtn.addEventListener("click", openContact);
contactBtn2.addEventListener("click", openContact);

const contactPanel = document.getElementById('contactPanel')

const closeBtn =document.getElementById('closePanel')
closeBtn.addEventListener("click", closeContact )

function openContact() {
    contactPanel.classList.add("active")
}
function closeContact () {
    contactPanel.classList.remove("active")
}