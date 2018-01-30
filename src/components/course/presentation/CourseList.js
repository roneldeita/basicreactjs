import React from 'react';
import PropTypes from 'prop-types';
import {Card, Table} from 'antd';
import {Link} from 'react-router-dom';

const CourseList = ({courses}) => {
  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text, record, index) => {return <Link to={'course/'+record.key}>{text}</Link>},
  },{
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  }, {
    title: 'Author',
    dataIndex: 'authorId',
    key: 'authorId',
  }, {
    title: 'Length',
    dataIndex: 'length',
    key: 'length',
  }];

  return (
    <Card title="List of Available Courses">
      <Table dataSource={courses} columns={columns} />
    </Card>
  )
}

CourseList.propTypes = {
  courses : PropTypes.array.isRequired
}

export default CourseList;
