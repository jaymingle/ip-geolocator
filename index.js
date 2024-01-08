function getIPAddress(){
   fetch("https://api.bigdatacloud.net/data/client-ip")
        .then(response => response.json())
       .then(data => console.log(data))
        .catch(err => console.log(err))
}