img_array=['26.jpg','27.jpg','28.jpg','29.jpg','31.jpg']
const array_length=img_array.length
let i=0
let set=setInterval(slider,2000)

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}


function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}

function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`
}