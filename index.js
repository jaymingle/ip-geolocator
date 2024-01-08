function getIPAddress(){
   fetch("https://api.bigdatacloud.net/data/client-ip")
        .then(response => console.log(response.json()))
       .then(data => console.log(data))
        .catch(err => console.log(err))
}