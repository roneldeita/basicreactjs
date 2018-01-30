import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Menu, Affix, Icon, BackTop, Row, Col  } from 'antd';

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Affix>
          <Menu mode="horizontal">
            <Menu.Item key="home"><Link to="/"><Icon type="home" />Home</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about"><Icon type="question-circle-o" />About</Link></Menu.Item>
            <Menu.Item key="courses"><Link to="/courses"><Icon type="appstore-o" />Courses</Link></Menu.Item>
          </Menu>
        </Affix>
        <br/>
        <Row className="" type="flex" justify="center">
          <Col className="" xs={20} sm={16} md={16}>
            { this.props.children }
          </Col>
        </Row>
        <BackTop>
          <Icon type="up-circle" style={{fontSize:"40px"}} />
        </BackTop>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
