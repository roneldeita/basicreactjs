import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './presentation/CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }
  }
  render() {
    return (
      <CourseForm loading={false} course={this.state.course} errors={this.state.errors} />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
}

const course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''}

const mapStateToProps = (state, ownProps) => ({
  course: course
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
