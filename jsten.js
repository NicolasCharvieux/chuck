var t = document.getElementById("ten");
t.addEventListener("click", function() { factc() });

function factc() {
    fetch('http://jihane.fr/ajax/chucknorris.php/api/get?data=nb:10')
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                for (i = 0; i <= 9; i++) {
                    document.getElementById("factdiv").innerHTML += "<p>" + data[i].fact + "</p>"
                }
            }
        )
}

var page = 1
document.getElementById("next").addEventListener("click", function() { affichages() });

function affichages() {
    page++
    fetch('http://jihane.fr/ajax/chucknorris.php/api/get?data=nb:10;page:' + page)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("factdiv").innerHTML = " "
                for (i = 0; i <= 9; i++) {
                    document.getElementById("factdiv").innerHTML += "<p>" + data[i].fact + "</p>"
                }
            }
        )
}


var page = 1
document.getElementById("previous").addEventListener("click", function() { affichagep() });

function affichagep() {
    page--
    fetch('http://jihane.fr/ajax/chucknorris.php/api/get?data=nb:10;page:' + page)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                document.getElementById("factdiv").innerHTML = " "
                for (i = 0; i <= 9; i++) {
                    document.getElementById("factdiv").innerHTML += "<p>" + data[i].fact + "</p>"
                }
            }
        )
}