let array = {
    "name": "sarath kumar.N",
    "fathername" : "G.Narayanasamy",
    "age":"26",
    "address":"NO:36 SPK St,Manali "
}
//FOR LOOP///
let array1 = Object.entries(array)
for (let i=0 ;i<array1.length;i++){
    let arr2 = array1[i]
    console.log(`${arr2[0]} : ${arr2[1]}`)
}
//FOR IN ///
for (let key in array)[
    console.log(`${key} : ${array[key]}`)
]

//FOR OF ///

for (let key1 of array1){
    console.log(`${key1[0]} : ${key1[1]}`)
}

//FOR EACH///
array1.forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});