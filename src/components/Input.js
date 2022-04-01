import React from 'react'
import {ErrorMessage,Field} from "formik"
import TextError from "./TextError"

function Input(props) {
  const {label,name,...rest}=props

  return (
    <div className="form-group d-flex flex-column">
      <label htmlFor={name}> {label}</label>
      <Field id={name} name={name} {...rest} className="form-control"/>
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

export default Input
