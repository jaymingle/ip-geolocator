function getIPAddress(){
   fetch("https://api.bigdatacloud.net/data/client-ip")
        .then(response => console.log(response.json()))
        .catch(err => console.log(err))
}