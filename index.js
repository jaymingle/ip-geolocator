function getIPAddress(){
   fetch("https://api.ipify.org?format=jsonp")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}