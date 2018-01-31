import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Icon} from 'antd';
import CourseList from './presentation/CourseList'

class CoursesPage extends React.Component {
  constructor(props){
    super(props)
    this.redirectToManageCourse = this.redirectToManageCourse.bind(this)
  }

  redirectToManageCourse(){
    this.props.history.push('/course')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Button type="primary" onClick={this.redirectToManageCourse}><Icon type="plus-circle"/> Add Course</Button>
        <br/><br/>
        <CourseList courses={this.props.courses} routerHistory={this.props.history}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses,
    authors: state.authors
  }
}

export default connect(mapStateToProps)(CoursesPage);
