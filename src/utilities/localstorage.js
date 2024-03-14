const getStoredCard =() =>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString)
       
    }
    return [];
}

const saveCartTols = cart =>{
    const cartStringified =JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addTols =id =>{
    const cart = getStoredCard();
    cart.push(id)
    saveCartTols(cart);
}
export{addTols,getStoredCard}