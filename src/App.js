import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Menu, Icon } from 'antd';

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Menu mode="horizontal">
          <Menu.Item key="home"><Link to="/"><Icon type="home" />Home</Link></Menu.Item>
          <Menu.Item key="about"><Link to="/about"><Icon type="question-circle-o" />About</Link></Menu.Item>
          <Menu.Item key="courses"><Link to="/courses"><Icon type="appstore-o" />Courses</Link></Menu.Item>
        </Menu>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
