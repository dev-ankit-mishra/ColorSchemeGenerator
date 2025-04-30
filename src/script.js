let hex=document.getElementById("color").value.slice(1);

document.querySelector("#color").addEventListener("input", (e) => {
    hex=e.target.value.slice(1);
    fetch(`https://www.thecolorapi.com/id?hex=${hex}&format=json`)
        .then(res=>res.json())
        .then(data => {
            document.querySelector("#scheme").innerHTML =`
            <option selected>${data.name.value}</option>        
        `
        })
});

document.querySelector("#generate").addEventListener("click", (e) => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=analogic&count=5`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const container=document.querySelector(".color-img")
            const footer=document.querySelector(".footer")
            container.innerHTML =``
            footer.innerHTML =``
            for(let i=0;i<5;i++){
                container.innerHTML +=`
                    <img src="${data.colors[i].image.bare}" alt="color-img"/>
                `
                footer.innerHTML +=`
                    <span>${data.colors[i].hex.value}<span>
                `
            }


        })
})



