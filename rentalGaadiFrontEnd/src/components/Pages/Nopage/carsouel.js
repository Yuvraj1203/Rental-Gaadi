const slide = document.querySelectorAll(".slide");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

slide.forEach((ele,index)=>{
    ele.style.transform = `translateX(${index * 100}%)`
})

let counter = 0;
let total = slide.length;

setInterval(()=>{
    counter++;
    nextFunc();
},5000);

const prevFunc = () =>{
    if(counter >= 0){
        slide.forEach((ele,index)=>{
            ele.style.transform = `translateX(${(index+counter) * 100}%)`
        })
    }else{
        counter = 5;
        slide.forEach((ele,index)=>{
            ele.style.transform = `translateX(${(index-counter) * 100}%)`
        })
    }
}

const nextFunc = () =>{
    if(counter < 6){
        slide.forEach((ele,index)=>{
            ele.style.transform = `translateX(${(index-counter) * 100}%)`
        })
    }else{
        counter = 0;
        slide.forEach((ele,index)=>{
            ele.style.transform = `translateX(${(index-counter) * 100}%)`
        })
    }
}


prev.addEventListener('click',()=>{
    counter--;
    prevFunc();
})

next.addEventListener('click',()=>{
    counter++;
    nextFunc();
})