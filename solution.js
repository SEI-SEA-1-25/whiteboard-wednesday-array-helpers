
const squarer = (arr) =>{

    let squaredArray = []
    let summedVal = 0
    for (let i=0; i < arr.length; i++){
       squaredArray.push(arr[i]**2)
    }
    for(let j=0; j <squaredArray.length; j++){
        summedVal += squaredArray[j]
    }
    console.log(summedVal)
}

squarer([45, 69, 7, 105, 52, 99, 302])


