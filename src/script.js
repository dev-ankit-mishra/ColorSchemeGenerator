let hex

document.querySelector("#color").addEventListener("input", (e) => {
    hex=e.target.value.slice(1);
    fetch(`https://www.thecolorapi.com/id?hex=${hex}&format=json`)
        .then(res=>res.json())
        .then(data => {
            document.querySelector("#scheme").innerHTML +=`
            <option selected>${data.name.value}</option>        
        `
        })
});



