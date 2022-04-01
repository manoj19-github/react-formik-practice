import React from 'react'
import {Field,ErrorMessage} from "formik"
import TextError from "./TextError"

function RadioButtons(props) {
  const {label,name,options,...rest}=props

  return (
    <div className="form-group mt-2">
      <label>{label}</label>
      <br/>
      <Field name={name}{...rest} >
      {

        ({field})=>{

          return options.map((option,index)=>{
            return(
              <React.Fragment key={index}>
                <input type="radio"
                        id={option.value}
                        {...field}
                        value={option.value}
                        checked={field.value===option.value}

                        className="mx-2"

                  />
                  <label htmlFor={option.value}>{option.key}</label>

              </React.Fragment>
            )
          })
        }
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

export default RadioButtons
