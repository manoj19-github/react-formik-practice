import React from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"

const initialValues={
  name:'',
  email:'',
  channel:''
}
const onSubmit=(values)=>{
  console.log("form values",values)
}
const validationSchema=Yup.object({
  name:Yup.string().required("name is requried"),
  email:Yup.string().email("Invalid email format").required("email is required"),
  channel:Yup.string().required("channel is required")
})
const validate=(values)=>{
  let errors={}
  if(!values.name){
    errors.name="Requried"
  }
  if(!values.email){
    errors.email="Required"
  }else if(!/^[A-Za-z1-9_%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)){
    errors.email="Invalid Email format"
  }
  if(!values.channel){
    errors.channel="Required";
  }
  return errors
}

function Firstform() {
  const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  console.log("visited errors",formik.touched)
  console.log("errors",formik.errors)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 card mx-auto">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="form-header  mt-5">
              <h3 className="form-title text-center ">Simple form </h3>
            </div>
            <div className="form-group  mt-3">
              <label>Name</label>
              <input type="text"   id="name"   name="name"   className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.name}   />
              {formik.errors.name && formik.touched.name?<span style={{color:"red"}}>{formik.errors.name}</span>:null}
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input type="text"   id="email"  name="email" onChange={formik.handleChange}  className="form-control" onBlur={formik.handleBlur}  value={formik.values.email}  />
              {formik.errors.email && formik.touched.email?<span style={{color:"red"}}>{formik.errors.email}</span>:null}
            </div>
            <div className="form-group mt-3">
              <label>Channel</label>
              <input type="text"   id="channel" name="channel" onChange={formik.handleChange}    className="form-control"  value={formik.values.channel} onBlur={formik.handleBlur}/>
              {formik.errors.channel && formik.touched.channel?<span style={{color:"red"}}>{formik.errors.channel}</span>:null}
            </div>
            <div className="form-group mt-3">
              <input type="submit"   id="submit" name="submit" value="submit" className="btn btn-primary form-control btn-block"/>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Firstform
