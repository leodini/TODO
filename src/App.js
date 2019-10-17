import React, {useState, useEffect} from 'react';
import boy_picture from './profile/boy_picture.png';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import uuid from 'uuid/v4';

function App() {
  const [ card, setCard ] = useState([{}]);
  const [ task, setTask] = useState('');
  const [ desc, setDesc] = useState('');
  const [ data, setData] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(desc);
    const newTask = {id: uuid(), task, desc, data};
    setCard([...card, newTask]);
    setTask('');
    setDesc('');
    setData('');
    console.log('funcao chamada');
  }

  return (
    <div>
      <div className="topnav">
        <img className="profile" src={boy_picture} alt="profile"/>

        <form className="form" onSubmit={handleSubmit}>
          <input className="input-text" type="text" name="task" required placeholder="task" onChange={(event) => setTask(event.target.value)}/>
          <input className="input-text" type="text" name="description" placeholder="description" onChange={(event) => setDesc(event.target.value)} />
          <input className="input-text" type="text" name="data" placeholder="data" onChange={(event) => setData(event.target.value)} />
          <Button type="submit" className="btn" variant="outline-success">add</Button>
        </form>

      </div>

      <div className="container">
          <div className="andamento">
            <h3>Em andamento</h3>
            
            {card && card.map(cards => (
                
                  <div className="row card-tamanho">
                      <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                          <div className="card-content white-text">
                            <span className="card-title">{cards.task}</span>
                            <p>{cards.desc}</p>
                          </div>
                          <div className="card-action">
                            <p className="data">Data: {cards.data}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                
              ))
            }
            

          </div>
          <div className="pausado">
           <h3>Pausado</h3>
           
          </div>


          <div className="acabado">
            <h3>Acabado</h3>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>I am a very simple card. I amtively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
