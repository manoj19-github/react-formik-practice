  import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from "formik"
import * as Yup from "yup"

const initialValues={
  name:'',
  email:'',
  channel:'',
  phone:['',''],
  fMovies:[''],
}
const savedValues={
  name:'manoj santra',
  email:'santra@gmail.com',
  channel:'codevolution',
  phone:['8908238449','9051014938'],
  fMovies:['codevoltion'],
}
const onSubmit=(values,onSubmitProps)=>{
  console.log("onsubmitprops",onSubmitProps)
  console.log("form values",values)
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm(true)

}
const validationSchema=Yup.object({
  name:Yup.string().required("name is requried"),
  email:Yup.string().email("Invalid email format").required("email is required"),
  //channel:Yup.string().required("channel is required")
})
const validateChannel=value=>{
  let error;
  if(!value){
    error="Requried channel"
  }
  return error
}
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

function Secondform() {
  const [formData,setFormData]=useState(null)
  // const formik=useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  // })
  // console.log("visited errors",formik.touched)
  // console.log("errors",formik.errors)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 card mx-auto">
          <Formik
            initialValues={formData||initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
            enableReinitialize
            >
            {
              formik=>{
                console.log(formik)
                return(
                  <Form  autoComplete="off">
                    <div className="form-header  mt-5">
                      <h3 className="form-title text-center ">Second form </h3>
                    </div>
                    <div className="form-group  mt-3">
                      <label>Name</label>
                    <Field type="text"   id="name"   name="name"   className="form-control"    />
                    <ErrorMessage name="name">
                      {
                        errors=>{
                          return <span style={{color:"red"}}>{errors}</span>
                        }
                      }
                    </ErrorMessage>
                      {/* {formik.errors.name && formik.touched.name?<span style={{color:"red"}}>{formik.errors.name}</span>:null} */}
                    </div>
                    <div className="form-group mt-3">
                      <label>Email</label>
                    <Field type="text"   id="email"  name="email" className="form-control"  />
                    <ErrorMessage name="email">
                      {
                        errors=>{
                          return <span style={{color:"red"}}>{errors}</span>
                        }
                      }
                    </ErrorMessage>
                      {/* {formik.errors.email && formik.touched.email?<span style={{color:"red"}}>{formik.errors.email}</span>:null} */}
                    </div>
                    <div className="form-group mt-3">
                      <label>Channel</label>
                      <Field type="text"   id="channel" name="channel" className="form-control" validate={validateChannel}  />
                    <ErrorMessage name="channel">
                        {
                          errors=>{
                            return <span style={{color:"red"}}>{errors}</span>
                          }
                        }
                      </ErrorMessage>

                      {/* {formik.errors.channel && formik.touched.channel?<span style={{color:"red"}}>{formik.errors.channel}</span>:null} */}
                    </div>
                    <div className="form-group mt-3">
                      <label>enter first phone number</label>
                      <Field type="phone"name="phone[0]" className="form-control"/>
                    </div>
                    <div className="form-group mt-3">
                      <label>enter second phone number</label>
                      <Field type="phone"name="phone[1]" className="form-control"/>
                    </div>
                    <div className="form-group mt-3">
                      <label>enter favourite Movie</label>
                    <FieldArray name="fMovies" className="form-control">
                    {
                        FieldArrayProps=>{
                        //  const {push,remove,form:{values:{fMovies}}}=FieldArrayProps
                        const {push,remove,form}=FieldArrayProps
                        const {values}=form
                        const{fMovies}=values
                        return(
                          <>
                            {
                              fMovies.map((fmov,index)=>(
                                <div key={index} className="d-flex">
                                  <Field name={`fMovies[${index}]`} className="form-control"/>
                                <button type="button" onClick={()=>push('')} className="btn btn-primary">Add</button>
                                {index!==0?
                                    <button type="button" onClick={()=>remove(index)} className="btn btn-danger">Delete</button>
                                :null}

                                </div>
                              ))
                            }
                          </>
                        )

                      }
                    }
                  </FieldArray>
                    </div>
                    <button type="button" onClick={()=>setFormData(savedValues)} className="btn btn-primary">click</button>
                    <div className="form-group mt-3">

                      <Field type="submit" disabled={ formik.isSubmitting}  id="submit" name="submit" value="submit" className="btn btn-primary form-control btn-block"/>
                    </div>


                  </Form>
                )
              }
            }


        </Formik>
      </div>
    </div>
  </div>
  )
}

export default Secondform
