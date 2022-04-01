import React from 'react'
import {Field,ErrorMessage} from "formik"
import TextError  from "./TextError"

function Select(props) {
  const {name,label,options,...rest}=props
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field as ="select" id={name} name={name} {...rest} className="form-control">
        {
          options.map((option,index)=>{
            return(
              <option
              key={index}
              value={option.value}
              >{option.key}</option>
            )
          })
        }
      </Field>
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

export default Select
