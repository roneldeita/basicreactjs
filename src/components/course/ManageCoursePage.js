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
      course: Object.assign({}, props.course),
      errors: {},
      loading: false,
    }
    this.onStateUpdate = this.onStateUpdate.bind(this)
    this.onStateAuthorUpdate = this.onStateAuthorUpdate.bind(this)
    this.onSaveCourse = this.onSaveCourse.bind(this)
  }

  onSaveCourse(e){
    this.setState({loading:true})
    this.props.actions.saveCourse(this.state.course).then(()=>{
      this.props.history.push('/courses')
    })
  }

  onStateAuthorUpdate(value){
    let course = Object.assign({}, this.state.course);
    course['authorId'] = value;
    return this.setState({course: course})
  }

  onStateUpdate(event){
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course})
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course.id !== nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  render() {
    return (
      <CourseForm
        loading={this.state.loading}
        onSave={this.onSaveCourse}
        onChange={this.onStateUpdate}
        onSelect={this.onStateAuthorUpdate}
        course={this.state.course}
        allAuthors={this.props.authors}
        errors={this.state.errors}
        />
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
function getCourseById(courses, id){
  const course = courses.filter(course => course.id === id);
  if(course) return course[0];
  return null;
}

function mapStateToProps(state, ownProps){
  let course = { id:'', key: '', watchHref:'', title:'', authorId:'', length:'', category:''};
  let courseId = ownProps.match.params.id;
  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }
  return {
    course: course,
    authors: state.authors
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
