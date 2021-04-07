Array.prototype.sum = function () {
    let total = 0 
    for(let i = 0; i < this.length; i++){
        total += this[i]
        

        return total
    }
}   

Array.prototype.average = function () {
 return this.sum() / this.length
}