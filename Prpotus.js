// -- esto es una funcion para el menu -- 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  
// -- esto es para el registro de usuario --
  var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// -- esto es para la busqueda --

function funcButton() {
  var inputButton, filter, section,div, a, i, txtValue;
  inputButton = document.getElementById("buscador");
  filter = inputButton.value.toUpperCase();
  section = document.getElementById("myTopnav");
  div = myTopnav.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
      a = div[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          div[i].style.display = "";
      } else {
          div[i].style.display = "none";
      }
  }
}