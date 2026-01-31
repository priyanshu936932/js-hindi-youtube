let currentTime=new Date()

// console.log("Current Date and Time:",currentTime.toString())
// console.log("Current Year:",currentTime.getFullYear())
// console.log(currentTime.toLocaleDateString())
// console.log(Date)

// let specificDate=new Date("2020-01-01")
// console.log("Specific Date:",specificDate.toDateString())
// console.log("Specific Date Time:",specificDate.toLocaleString())

// console.log("Timestamp of Specific Date:",specificDate.getTime())


console.log("Current Time in Milliseconds since Jan 1, 1970:",currentTime.getTime())

let newDate=new Date()
console.log(newDate.getMonth()) // 0-11
console.log(newDate.getDate()) // 1-31
console.log(newDate.getDay()) // 0-6
console.log(newDate.getHours()) // 0-23
console.log(newDate.getMinutes()) // 0-59
console.log(newDate.getSeconds()) // 0-59
console.log(newDate.getMilliseconds()) // 0-999

newDate.toLocaleString('Default',{
    weekday:'narrow',
    year:'numeric',
    month:'long',
})
console.log(newDate.toString())

