function getIPAddress(){
    const getData = fetch("https://api.bigdatacloud.net/data/client-ip")
        .then(response => console.log(response))
        .catch(err => console.log(err))
}