import React from 'react'
import {Field,ErrorMessage} from "formik"
import TextError from "./TextError"
function Textarea(props) {
  const {name,label,...rest}=props
  return (
    <div className="form-group d-flex flex-column">
      <label htmlFor={name}> {label}</label>
      <Field as="textarea" id={name} name={name} {...rest} className="form-control"/>
      <ErrorMessage name={name}>
        {
          errors=>{
            return <span style={{color:"red"}}>{errors}</span>
          }
        }
      </ErrorMessage>
    </div>

  )
}

export default Textarea
