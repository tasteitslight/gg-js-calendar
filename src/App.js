import React, { Component } from 'react';

import CalendarBody from './components/CalendarBody/CalendarBody';
import Layout from './Layout/Layout';

class App extends Component {

  render () {
    return (
      <Layout>
        <CalendarBody/>
      </Layout>
    );
  }
}

export default App;
