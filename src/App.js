import {Component, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import WalletServices from './WalletServices';
import './App.css';


const Slider = (props) => {
    
    // const [slide, setSlide] = useState(0);
    // const [autoplay, setAutoplay] = useState(false);
    const[char, setChar] = useState([]);
    const[course, setCourse] = useState('Choose currency');


    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(res => res.json())
            .then(setChar)
    }, [])

    // const rename = (char) =>
    // {
    //     setChar({
    //             "CharCode": char.CharCode,
    //             "Name": char.Name,
    //             "Value": char.Value

    //         })
    // }

    // const  getCurrency = () =>
    // {
    //    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    //         .then(res => res.json())
    //         .then(char)
    // }

    const _transformCurrency = (currencycode) =>
    {
        const target = char.find(item => item.cc === currencycode);
        setCourse(`1${target.cc} = ${target.rate}UAH`)
    }
    
    return (
        
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">{course}<br /></div>
                <div className="buttons mt-3 text-center">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => _transformCurrency('USD')}>USD</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => _transformCurrency('EUR')}>EUR</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => _transformCurrency('RUB')}>RUB</button>
                </div>
            </div>
        </Container>
        
    )
}


function App() {
    const [slide, setSlide] = useState(true);
  return (
        <>
        <button onClick={() => setSlide(false)}>Click</button>
          {slide ? <Slider /> : null}
        </>
        
  );
}

export default App;
