function getIPAddress(){
    const getData = fetch("https://ipinfo.io/41.218.196.221/json?token=28b9a5040d38ce")
        .then(response => console.log(response.json()))
        .catch(err => console.log(err))
}