function getIPAddress(){
    const getData = fetch("https://api.ipify.org")
        .then(response => console.log(response))
        .catch(err => console.log(err))
}