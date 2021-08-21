function updateTotal(){
    const bestPrice = 1299;
    const ramText = document.getElementById('total-memory-cost');
    const ramPrice =parseFloat(ramText.innerText);

    const storageText = document.getElementById('total-storage-cost');
    const storagePrice = parseFloat(storageText.innerText);

    const deliveryText = document.getElementById('total-delivery-cost');
    const deliveryPrice = parseFloat(deliveryText.innerText);

    const newTotalPrice = bestPrice + ramPrice + storagePrice + deliveryPrice;
    return newTotalPrice;
}

function updateThePrice(cost, price){
    const basicPrice = price;
    const basicText = document.getElementById(cost);
    basicText.innerText = basicPrice;


    const totalPrice = document.getElementById('total-price');
    const totalText = parseFloat(totalPrice.innerText);
    if(totalText>0){
        return totalPrice.innerText = updateTotal();
    }
};

//memory price
document.getElementById('ram-8gb').addEventListener('click', function(){
    updateThePrice('total-memory-cost', 0)
});
document.getElementById('ram-16gb').addEventListener('click', function(){
    updateThePrice('total-memory-cost', 180)
});

//storage price
document.getElementById('storage-256gb').addEventListener('click', function(){
    updateThePrice('total-storage-cost', 0)
});
document.getElementById('storage-512gb').addEventListener('click', function(){
    updateThePrice('total-storage-cost', 100)
});
document.getElementById('storage-1tb').addEventListener('click', function(){
    updateThePrice('total-storage-cost', 180)
});

//delivery cost
document.getElementById('free-shipping').addEventListener('click', function(){
    updateThePrice('total-delivery-cost', 0)
});
document.getElementById('fast-shipping').addEventListener('click', function(){
    updateThePrice('total-delivery-cost', 20)
});