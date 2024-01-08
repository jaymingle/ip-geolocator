function getIPAddress(){
    const getData = fetch("https://api.ipify.org?format=jsonp&callback=getip")
        .then(response => console.log(response.getip))
        .catch(err => console.log(err))
}