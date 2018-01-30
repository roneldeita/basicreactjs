import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Row, Col} from 'antd';
import CourseList from './presentation/CourseList'

class CoursesPage extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <Row className="" type="flex" justify="center">
          <Col className="" xs={20} sm={16} md={16}>
            <Card title="List of Available Courses">
              <CourseList courses={this.props.courses}/>
            </Card>
          </Col>
        </Row>
      </div>
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
