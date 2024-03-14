import './Botle.css';

const Botle = ({bottle , handleAddToCard}) => {
    const {name ,img ,price} = bottle;
    // console.log(bottle)
   
    return (
        <div className='bottle'>
            <h3>bottle:{name}</h3>
            <img src={img} alt="" />
            <h3>price:${price}</h3>
            <button onClick={()=> handleAddToCard(bottle)}>purches</button>
          

        </div>
    );
};

export default Botle;