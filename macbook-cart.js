function updateTotal(){
    const bestPrice = 1299;
    const memoryText = document.getElementById('total-memory-cost');
    const memoryPrice =parseFloat(memoryText.innerText);

    const ssdText = document.getElementById('total-storage-cost');
    const ssdPrice = parseFloat(ssdText.innerText);

    const deliveryText = document.getElementById('total-delivery-cost');
    const deliveryPrice = parseFloat(deliveryText.innerText);

    const newTotalPrice = bestPrice + memoryPrice + ssdPrice + deliveryPrice;
    return newTotalPrice;
}

function updateExtraPrice(cost, price){
    const defaultPrice = price;
    const defaultText = document.getElementById(cost);
    defaultText.innerText = defaultPrice;


    const totalPrice = document.getElementById('total-price');
    const totalText = parseFloat(totalPrice.innerText);
    if(totalText>0){
        return totalPrice.innerText = updateTotal();
    }
};

//memory price
document.getElementById('ram-8gb').addEventListener('click', function(){
    updateExtraPrice('total-memory-cost', 0)
});
document.getElementById('ram-16gb').addEventListener('click', function(){
    updateExtraPrice('total-memory-cost', 180)
});

//storage price
document.getElementById('storage-256gb').addEventListener('click', function(){
    updateExtraPrice('total-storage-cost', 0)
});
document.getElementById('storage-512gb').addEventListener('click', function(){
    updateExtraPrice('total-storage-cost', 100)
});
document.getElementById('storage-1tb').addEventListener('click', function(){
    updateExtraPrice('total-storage-cost', 180)
});

//delivery cost
document.getElementById('free-shipping').addEventListener('click', function(){
    updateExtraPrice('total-delivery-cost', 0)
});
document.getElementById('fast-shipping').addEventListener('click', function(){
    updateExtraPrice('total-delivery-cost', 20)
});