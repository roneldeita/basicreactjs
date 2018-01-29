import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Card, Row, Col} from 'antd';
import * as courseActions from '../../actions/courseAction';
import CourseList from './presentation/CourseList'

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: {title: ""}
    }
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
  }

  // onTitleChange(event){
  //   this.setState({course:{title:event.target.value}})
  // }
  //
  // handleAdd(){
  //   this.props.actions.createCourse(this.state.course.title);
  //   this.setState({course:{title:""}})
  // }

  componentDidMount(){
    this.props.actions.loadCourses();
    setTimeout(() =>{
        this.setState({loadingCard:false})
    }, 3000)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <br/>
        <Row className="" type="flex" justify="center">
          <Col className="" xs={20} sm={16} md={16}>
            <Card title="List of Available Courses">
              {/*<Input
                placeholder="Course title"
                onChange={this.onTitleChange}
                value={this.state.course.title}/>

              <Button type="primary" style={{marginTop:"10px", float:"right"}} onClick={this.handleAdd}>
                <Icon type="plus-circle-o"/> Cancel
              </Button>

              <Divider dashed>List of Available Courses</Divider>*/}
              <CourseList courses={this.props.courses}/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
