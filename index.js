function getIPAddress(){
    fetch("https://api.ipify.org?format=json")
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch data")
            }

            return response.json()
        })

        .catch(err => console.log(err))
}