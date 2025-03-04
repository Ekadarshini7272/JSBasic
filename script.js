function handleClick(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log("Response received", response)
        return response.json()
    })
    .then(data => {
        console.log("Data fetching successfully", data)
        return data.json()
    })
    .catch(error => {
      console.log("Error fetching data", error)
    });
}