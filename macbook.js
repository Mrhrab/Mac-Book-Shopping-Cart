// memory
function memoryPrice(memory){
    upgradeMemoryPrice = 180;
     regularMemoryPrice = 0;

     // add condition of function
    if(memory == true){
        document.getElementById('total-memory-cost').innerText = regularMemoryPrice;
    }
    else{document.getElementById('total-memory-cost').innerText = upgradeMemoryPrice}
}

// add memory price with click event listener
document.getElementById('ram-8gb').addEventListener('click',function(){
   memoryPrice(true);
})
document.getElementById('ram-16gb').addEventListener('click',function(){
    memoryPrice(false);
});


// storage
function storagePrice(storage){
     regularStoragePrice = 0;
     upgradeStorageTo512GbPrice = 100;
     upgradeStorageTo1TbPrice = 180;

    // add conditions of storage function
    if (storage == true){
        document.getElementById('total-storage-cost').innerText = regularStoragePrice;
    }
   else if (storage == false){
        document.getElementById('total-storage-cost').innerText =  upgradeStorageTo512GbPrice;
    }
   else {document.getElementById('total-storage-cost').innerText = upgradeStorageTo1TbPrice;
     }
     }
// add storage price with click event listener
document.getElementById('storage-256gb').addEventListener('click',function(){
    storagePrice(true);
})
document.getElementById('storage-512gb').addEventListener('click',function(){
   storagePrice(false); 
})
document.getElementById('storage-1tb').addEventListener('click',function(){
    storagePrice('to1TbStorage');
});




// memory
function deliveryPrice(memory){
    upgradeDeliveryPrice = 20;
     regularDeliveryPrice = 0;

     // add condition of function
    if(memory == true){
        document.getElementById('total-delivery-cost').innerText = regularDeliveryPrice;
    }
    else{document.getElementById('total-delivery-cost').innerText = upgradeDeliveryPrice}
}

// add memory price with click event listener
document.getElementById('free-shipping').addEventListener('click',function(){
   deliveryPrice(true);
})
document.getElementById('fast-shipping').addEventListener('click',function(){
    deliveryPrice(false);
});