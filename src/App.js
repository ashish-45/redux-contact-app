import React from 'react';
import '../src/style/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Contact from './components/contact/Contacts';
import { Provider } from 'react-redux';
import store from './store';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className='py-3'>
              <Switch>
                <Route exact path='/' component={Contact} />
                <Route exact path='/addcontact' component={AddContact} />
                <Route exact path='/editcontact/:id' component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
