import React from 'react'
import PHForm from '../../../components/form/PHForm'
import PHInput from '../../../components/form/PHInput'
import {  FieldValues, SubmitHandler } from 'react-hook-form'
import { Button } from 'antd'

const CreateStudent = () => {
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
 console.log(data)
 const formData= new FormData()
 formData.append('data',JSON.stringify(data))
  }
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type='text' name='name' label='Name'></PHInput>
      <Button htmlType='submit'>Submit</Button>
    </PHForm>
  )
}

export default CreateStudent
