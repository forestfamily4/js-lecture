const cityNames=["New York","Tokyo","Paris","London","Sydney"]

for(let i=0;i<cityNames.length;i++){
    console.log(cityNames[i])
}

for(let cityName of cityNames){
    console.log(cityName)
}

cityNames.forEach(city=>{
    console.log(city)
})