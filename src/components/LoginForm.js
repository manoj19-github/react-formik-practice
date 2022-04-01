import React from 'react'
import FormControl from "./FormControl"
import * as Yup from "yup"
import {Formik,Form} from "formik"

function LoginForm() {
  const initialValues={username:'',password:''}
  const validationSchema=Yup.object({
    username:Yup.string().trim().required("username is required"),
    password:Yup.string().trim().required("password is requried"),
  })
  const onSubmit=values=>console.log("formvalues",values)

  return (
    <div className="row">
      <div className="col-md-7 mx-auto" style={{marginTop:"10vh"}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
        {
          formik=>{
            return(
              <Form>
                <FormControl name="username" control="input" type="text" label="username" className="mt-4"/>
                <FormControl name="password" control="input" type="password" label="password" className="mt-4" />
                <input type="submit" className="form-control mt-4 btn btn-primary" value="Sign in"/>
              </Form>
            )
          }
        }
        </Formik>
      </div>
    </div>

  )
}

export default LoginForm
