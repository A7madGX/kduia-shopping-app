import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AppProvider  from './context/AppContext';
import Balance from './components/Balance';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import Purchase from './components/Purchase';

function App() {
  return (
    <AppProvider>
      <div className='container'>
                <h1 className='mt-3'>Shop Store</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Balance />
                        </div>  
                        <div className='col-sm'>
                            <CartValue />
                        </div>  
                        <div className='col-sm'>
                            <Location />
                        </div>
                        <div>
                            <ExpenseList />
                        </div>  
                        <div>
                            <ItemSelected />
                        </div>  
                        <div>
                            <Purchase />
                        </div>  
                </div>
            </div>
    </AppProvider>
  );
}

export default App;
