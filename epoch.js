
let epoch = Date.now()  // milli seonds
console.log(epoch, typeof epoch) 

// let seonds = date / 1000 

const currentDate = new Date(epoch) 

console.log(currentDate)

console.log(currentDate.toDateString())

console.log(currentDate.toTimeString())


console.log(currentDate.toLocaleString())   

