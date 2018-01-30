import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CourseList from './presentation/CourseList'

class CoursesPage extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <CourseList courses={this.props.courses}/>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses
})

export default connect(mapStateToProps)(CoursesPage);
