import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css';
import { useState, useEffect} from 'react';

const App = () => {
  const [centigrados, setCentigrados] = useState(0);
  const [Kelvin, setKelvin] = useState(0);
  const [KelvinScale, setKelvinScale] = useState(0);
  const [Farenheit, setfarenheit] = useState(0);
  const [farenheitScale, setFarenheitScale] = useState(0);
  const [input, setInput] = useState('');


  useEffect(() => {
    setKelvin(centigrados + 273.15);
    setfarenheit((1.8 * centigrados) + 32);
    setKelvinScale((Kelvin * 100) / 373.15);
    setFarenheitScale((Farenheit * 100) / 212);
  }, [centigrados, Kelvin, Farenheit]);


  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setCentigrados(+(input));
  }

  return (
    <div className='container'>
      Visualizador de Temp en diferentes escalas

      <div className='temps'>

        <div className='thermomether'>
          <p>Centigrados</p>
          <ProgressBar variant='danger' now={centigrados} />
          <p>{centigrados}</p>
        </div>
        <div className='thermomether'>
          <p>Kelvin</p>
          <ProgressBar variant='danger' now={KelvinScale} />
          <p>{Kelvin}</p>
        </div>
        <div className='thermomether'>
          <p>Farenheit</p>
          <ProgressBar variant='danger' now={farenheitScale} />
          <p>{Farenheit}</p>
        </div>

      </div>
      <div className='input'>
        <form>
          <input type='text' placeholder='Temp en C' value={input}
          onChange={handleChange}
          />
          <button className='btn btn-secondary' type='submit'
            onClick={handleClick}>set Centigrados</button>
        </form>

      </div>
    </div>
  )
}
export default App;