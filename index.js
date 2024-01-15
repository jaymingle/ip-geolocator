
function getIPAddress(){
    fetch("https://api.ipify.org?format=json")
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch data")
            }
            return response.json()
        })
        .then(data => {
            let theIP = data.ip
            let ipElement = document.querySelector("#ipAddressShow");
            console.log(ipElement)
            ipElement.innerHTML = theIP
            return theIP
        })
        .catch(err => console.log(err))
}

let theGotIP = getIPAddress();
console.log(theGotIP)

//154.160.20.89