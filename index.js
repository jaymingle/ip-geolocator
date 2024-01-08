let ip = ""

function getIPAddress(){
    fetch("https://api.ipify.org?format=json")
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch data")
            }
            return response.json()
        })
        // .then(data => console.log(data))
        .then(data => ip = data)
        .catch(err => console.log(err))
}

console.log(ip)