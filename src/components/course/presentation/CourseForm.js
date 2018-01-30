import React from 'react';
import PropTypes from 'prop-types';
import { Form , Input, Select, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors }) => {
  //console.log(course)
  return (
    <Form>
      <h3>Manage Course</h3>
      <FormItem>
        <Input name="title" placeholder="Username" />
      </FormItem>
      <FormItem>
        <Select value="rmb" placeholder="Select an Author">
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Input name="category" placeholder="Category" />
      </FormItem>
      <FormItem>
        <Input name="length" placeholder="Length" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="button" onClick={onSave} loading={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </FormItem>
    </Form>
  )
}
console.log(CourseForm)

CourseForm.propTypes = {
  course : PropTypes.object,
  allAuthors : PropTypes.array,
  onSave : PropTypes.func,
  onChange : PropTypes.func,
  loading : PropTypes.bool,
  errors : PropTypes.object
}

export default CourseForm;
