import React from 'react';
import { Router} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Login from './views/Login';
import ViewPirate from './views/ViewPirate';



function App() {
  return (
    <div className="App">
        <div style={{border:"3px solid black", padding:'5px', margin:'5px'}}>
          <Router>
            <Main path='/pirates'/>
            <Login path='/'/>
            <Create path='/pirate/new'/>
            <ViewPirate path='/pirate/:id'/>
          </Router>
      </div>
    </div>
  );
}

export default App;
