import { useEffect, useState } from "react";
import Botle from "../Botle/Botle";
import './botles.css'
import { addTols, getStoredCard } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Botles = () => {
const [botles ,setBotles] =useState([])
const [cart ,setCart] =useState([])

    useEffect(() =>{
        fetch('Botles.json')
        .then(res => res.json())
        .then(data => setBotles(data))
    },[])

    //load card from lokal storage
    useEffect(() =>{
        console.log('called the useEffect',botles.length)
        if(botles.length>0){
        const storeCard = getStoredCard();
        console.log(storeCard,botles);
        const savedCard =[];
        for(const id of storeCard){
            console.log(id);
            const x =botles.find(bottle =>bottle.id === id);
            if(x){
                savedCard.push(x)
            }
        }
         
        setCart(savedCard)
        // console.log('saved card',savedCard)
        }
    },[botles])

    const handleAddToCard = bottle =>{
        const newCart =[...cart,bottle]
        setCart(newCart);
        addTols(bottle.id)

    }
    return (
        <div>
            <h4>Botles Avaiable:{botles.length}</h4>
            {/* <h5>Cart:{cart.length}</h5> */}
            <Cart cart={cart}></Cart>
         <div className="botles-containar">
         {
                botles.map(bottle => <Botle key={bottle.id} bottle ={bottle}
                    handleAddToCard ={handleAddToCard}
                ></Botle>)
            }
         </div>
               
        </div>
    );
};

export default Botles;

