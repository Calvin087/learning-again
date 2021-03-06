import React from 'react';
import ReactDOM from 'react-dom';
import Tickets from './components/Tickets'
import TicketsComponent from './components/TicketsComponent'
import TicketContextProvidor from './contexts/TicketContext';
import * as serviceWorker from './serviceWorker'


ReactDOM.render(
  <React.StrictMode>
    
  <TicketContextProvidor>

    <Tickets />
    <TicketsComponent />

  </TicketContextProvidor>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
