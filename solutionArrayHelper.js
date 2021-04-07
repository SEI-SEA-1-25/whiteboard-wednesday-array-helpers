Array.prototype.sum = function (){
    let value = 0 
    for(let i=0; i < this.length; i++){
         value += this[i]
     }  
     return value 
} 

Array.prototype.average = function (){
    return (this.sum())/this.length
}

const nums = [2,2,2,2]
const added = nums.sum()

const average = nums.average()

console.log(added)
console.log(average)