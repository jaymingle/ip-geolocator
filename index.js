let ip = ""

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
            console.log(theIP)
            // document.querySelector("#ipAddressShow").innerHTML = data.ip
        })
        .catch(err => console.log(err))

    console.log(ip)

}

console.log(ip)