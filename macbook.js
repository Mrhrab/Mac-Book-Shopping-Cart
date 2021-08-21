// memory
function extraMemoryPrice(memory){
    upgradeMemoryPrice = 180;
     regularMemoryPrice = 0;

     // add condition of function
    if(memory == true){
        document.getElementById('total-memory-cost').innerText = regularMemoryPrice;
    }
    else{document.getElementById('total-memory-cost').innerText = upgradeMemoryPrice}
}

// add price with click event listner
document.getElementById('ram-8gb').addEventListener('click',function(){
   extraMemoryPrice(true);
})
document.getElementById('ram-16gb').addEventListener('click',function(){
    extraMemoryPrice(false);
})