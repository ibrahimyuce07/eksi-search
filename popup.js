var query = "";
function searchPop() {
    query = document.getElementById("demo").value;
    if (a.length > 0) {
        window.open("https://eksisozluk.com/" + query);
    }
}
document.getElementById('do-search').onclick = searchPop;