// Add your functions here
let map = (sourceArray, f) => {
    let newArray = []
    sourceArray.forEach(element => newArray.push(f(element)))
    
    return newArray 
} 
//function(e, memo){return e + memo})
//[1,2,3,4,5]
//sourceArray = [1, 2, true, "razmatazz"]
let reduce = (sourceArray, f, startingPoint=null) => {
    let result, i=0
    if (startingPoint) {
        result = f(startingPoint, sourceArray[i])
        i++
    } else {
        result = f(sourceArray[i], sourceArray[i+1])
        i+=2
    }

    for (i; i<sourceArray.length; i++) {
        result = f(result, sourceArray[i])
    }
    
    return result 
}