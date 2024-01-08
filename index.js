function getIPAddress(){
    const getData = fetch("https://api.ipify.org?format=jsonp&callback=getip")
        .then(response => console.log())
        .catch(err => console.log(err))
}