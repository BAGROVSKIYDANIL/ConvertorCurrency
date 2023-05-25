import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';




// const walletServices = new WalletServices();

// walletServices.getCurrency().then(res => res.forEach(item => console.log(item.cc)));

// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
// .then(res => res.json())
// .then(data => console.log(data))


  // const res = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  //                 .then (res => res.json())
  //                 .then(data => 
  //                   document.getElementById('root').innerHTML = JSON.stringify(data[0]))

// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//   .then(res => res.json())
//   .then(data => console.log(data.Valute))

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);


