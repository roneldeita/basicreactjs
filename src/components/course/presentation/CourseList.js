import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

const CourseList = ({courses}) => {

  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title - b.title,
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
    <Table dataSource={courses} columns={columns} />
  )
}

CourseList.propTypes = {
  courses : PropTypes.array.isRequired
}

export default CourseList;
