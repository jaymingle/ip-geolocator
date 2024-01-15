
let theIP = ""

function getIPAddress(callback){
    fetch("https://api.ipify.org?format=json")
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch data")
            }
            return response.json()
        })
        .then(data => {
            theIP = data.ip
            let ipElement = document.querySelector("#ipAddressShow");
            ipElement.innerHTML = theIP
            console.log(theIP)
            callback(theIP)
        })
        .catch(err => console.log(err))
}

let ourIP
getIPAddress(ip=>{
    ourIP = ip
    console.log("Outside IP Address", ip)
})

console.log("Herh Our", ourIP)

// console.log("Outside: ",theIP)
// let theValue = getIPAddress()
// console.log(theValue)

// let theMain = getIPAddress();
// let theGotIP = "Kwame";
// console.log(theGotIP)
// console.log(theMain)
//154.160.20.89