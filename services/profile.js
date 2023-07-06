const cat = localStorage.getItem("selectedUser");
function rendeUsers(user) {
    console.log (user)
    const data = document.getElementById("data")
    const mapUsers = user.map((users) =>
    `<div class="information">
   <p class="info">Nombre:</p>
   <p class="info">julio jaramillo</p>
</div>
`)
data.innerHTML = mapUsers 
}
rendeUsers (cat) 