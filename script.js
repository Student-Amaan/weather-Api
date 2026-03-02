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


let search = document.getElementById("#search");

search.addEventListener('input',debounce(function(e){
console.log('searching',e.target.value)
},500))

function searchfnc(query){
    console.log('api calls from', query)
}

 const finalRes = debounce(search,1000)

 finalRes('R')
 finalRes('Re')
 finalRes('Res')
 finalRes('Resu')
 finalRes('Result')