let array = [1,2,3,5,3,4,6,7]

function multiplyArr(){
    return array.map(num => num * 2)
}

console.log(multiplyArr(array));

const arr = [1,[2,3,[4,5,[6,7]]]]


function flatenArr(arr){
    const result = []

    for (const item of arr){
        if(Array.isArray(item)){
            result.push(...flatenArr(item))
        }else{
            result.push(item)
        }
    }

    return result

}

console.log(flatenArr(arr))