function getIPAddress(){
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json)
}