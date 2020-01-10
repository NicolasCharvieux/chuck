var d = document.getElementById("madiv");
d.addEventListener("click", function() { facta() });

var xhr = new XMLHttpRequest();

function facta() {
    xhr.onload = function() {
        fact = JSON.parse(xhr.responseText)
        document.getElementById("factdiv").innerHTML = fact[0].fact

    }
    xhr.open('GET', 'http://jihane.fr/ajax/chucknorris.php/api/get?data=nb:1;tri:alea');
    xhr.send();
}