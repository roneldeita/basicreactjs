import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Icon, Input, Row, Col } from 'antd';
import * as courseActions from '../../actions/courseAction';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: {title: ""}
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  onTitleChange(event){
    this.setState({course:{title:event.target.value}})
  }

  handleAdd(){
    this.props.createCourse({})
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <br/>
        <Row className="" type="flex" justify="center">
          <Col className="" span={8}>
            <h2>Add Course</h2>
            <Input
              placeholder="Course title"
              onChange={this.onTitleChange}
              value={this.state.course.title}/>

            <Button type="primary" style={{marginTop:"10px"}} onClick={this.handleAdd}>
              <Icon type="plus-circle-o"/> Add Course
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses,
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
