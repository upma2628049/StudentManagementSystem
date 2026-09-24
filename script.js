function addStudent() {
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;

  if (name === "" || roll === "") {
    alert("Please enter name and roll number");
    return;
  }

  var li = document.createElement("li");
  li.textContent = roll + " - " + name;
  document.getElementById("studentList").appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
}