import React from 'react';
import PropTypes from 'prop-types';
import { Form , Input, Select, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const authorOps = (allAuthors) => {
  return allAuthors.map((author, index)=>{
    return <Option key={index} value={author.id}>{`${author.firstName} ${author.lastName}`}</Option>
  })
}

const CourseForm = ({course, allAuthors, onSave, onSelect, onChange, loading, errors }) => {
  return (
    <Form>
      <h3>Manage Course</h3>
      <FormItem>
        <Input name="title" placeholder="Title" value={course.title} onChange={onChange} />
      </FormItem>
      <FormItem>
        <Select placeholder="Select an Author" value={course.authorId} onChange={onSelect}>
          {authorOps(allAuthors)}
        </Select>
      </FormItem>
      <FormItem>
        <Input name="category" placeholder="Category" value={course.category} onChange={onChange} />
      </FormItem>
      <FormItem>
        <Input name="length" placeholder="Length" value={course.length} onChange={onChange} />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="button" onClick={onSave} loading={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </FormItem>
    </Form>
  )
}

CourseForm.propTypes = {
  course : PropTypes.object,
  allAuthors : PropTypes.array,
  onSave : PropTypes.func,
  onChange : PropTypes.func,
  loading : PropTypes.bool,
  errors : PropTypes.object
}

export default CourseForm;
