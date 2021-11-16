function saveOptions() {
    var option = document.getElementById("newtab").checked ? "newtab" :
                 document.getElementById("newwindow").checked ? "newwindow" :
                 document.getElementById("popup").checked ? "popup" : "";
    //save to local storage
    localStorage.setItem("option", option);
    //close options window
    console.log("option: " + option);

    window.close();
}