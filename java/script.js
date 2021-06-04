var surname = prompt(" Cognome")
var arraySurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
var output = document.getElementById("result")
arraySurname.push (surname)
arraySurname.sort()
output.innerHTML = arraySurname
output.innerHTML += "<br/>" + parseInt(arraySurname.indexOf(surname)+1)

