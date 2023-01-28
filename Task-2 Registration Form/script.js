const submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", submitForm);

function validate() {
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var contact = document.getElementById("contact").value;
     var city = document.getElementById("city").value;

     if (name == "") {
          alert("Please enter your name");
          return false;
     }
     if (email == "") {
          alert("Please enter your email");
          return false;
     }
     if (contact == "" || isNaN(contact)) {
          alert("Please enter a valid contact");
          return false;
     }
     if (city == "") {
          alert("Please enter your city");
          return false;
     }
     return true;

}

function submitForm() {
     if (validate() == true) {
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var contact = document.getElementById("contact").value;
          var city = document.getElementById("city").value;
          var gender = document.querySelector('input[name="gender"]:checked').value;

          var newItem = document.createElement("li");
          newItem.innerHTML = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Contact: " + contact + "<br>" + "City: " + city + "<br>" + "Gender: " + gender + "<br>";

          var list = document.getElementById("users");
          list.appendChild(newItem);
     }
}


