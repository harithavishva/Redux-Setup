import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './Redux/ReduxActions/actionCreators';
import { useState } from 'react';

function App() {
  const reduxStates = useSelector((state)=>state);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0)
  const [diffCount, setDiffCount] = useState(0)
  const [restore, setRestore] = useState(0)

  // binding all action crator 
  const {
    purchaseProduct, 
    restoreProduct
  } = 
  bindActionCreators(actionCreators,dispatch )

  console.log(reduxStates.inventory)
  //purchaseProduct(5)
  return (
    <div className="App">
             <div className='restore-component'>
        <input
        type="number"
        value = {restore}
        onChange={(e)=>setRestore(e.target.value)}
        />
       <button
       onClick={()=>restoreProduct(restore)}
       >Restore the inventory</button>
       </div>

       <div className='order-component'>

        <div className="product-info">
             <h3>Addidas shoe</h3>
            <img src= "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09a74b1023f2497989f9ad55005f1538_9366/CLEAR_FACTOR_SHOES_Black_EX2038_01_standard.jpg" alt="name"/>
        </div>

          <div className='product-action'>
             <button
             onClick={()=>setCount(count+1)}
             >+</button>

             <p>{count}</p>

             <button
              onClick={()=>setCount(count-1)}
             >-</button>

            <button
            onClick={()=>purchaseProduct(count)}
            >Buy</button>
            </div>

            <div>Left Items {reduxStates.inventory}</div>
       </div>







       <div className='order-component'>

<div className="product-info">
     <h3>Addidas shoe</h3>
    <img src= "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09a74b1023f2497989f9ad55005f1538_9366/CLEAR_FACTOR_SHOES_Black_EX2038_01_standard.jpg" alt="name"/>
</div>

  <div className='product-action'>
     <button
     onClick={()=>setDiffCount(diffCount+1)}
     >+</button>

     <p>{diffCount}</p>

     <button
      onClick={()=>setDiffCount(diffCount-1)}
     >-</button>

    <button
    onClick={()=>purchaseProduct(diffCount)}
    >Buy</button>
    </div>
    <div>Left Items {reduxStates.inventory}</div>
</div>


    </div>
  );
}

export default App;