import React, { Component } from 'react';
import { Provider } from 'react-redux'
import CurrentWorker from './containers/currentWorker'
import store from './rematch'
import Notification from './containers/Notification'
import styles from './styles'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <div style={styles.wrapper}>
              <CurrentWorker />
            </div>
            <div style={styles.notification}>
              <Notification />
            </div>
          </div>
      </Provider>
    );
  }
}

export default App;
