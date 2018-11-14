import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (    
    <div className='container'>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
