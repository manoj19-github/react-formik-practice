import React from 'react'
import {Formik,Form,Field} from "formik"
import * as Yup from "yup"
import FormControl from "./FormControl"
function Myform() {
  const options=[
    {key:"Select your Quanlification",value:''},
    {key:"Graduate",value:"Graduate"},
    {key:"Masters",value:"Masters"},
    {key:"Phd",value:"Phd"},
    {key:"Diploma",value:"Diploma"},
    {key:"MEd",value:"MEd"},
  ]
  const roptions=[
    {key:"cricket",value:'cricket'},
    {key:"football",value:"football"},
    {key:"hockey",value:"hockey"},
    {key:"tennis",value:"tennis"},
    {key:"swimming",value:"swimming"},
  ]
  const checkoptions=[
    {key:"Biriyani",value:'Biriyani'},
    {key:"moglai",value:"moglai"},
    {key:"rajma",value:"rajma"},
    {key:"chole",value:"chole"},
    {key:"parota",value:"parota"},
  ]
  const initialValue={email:'',description:'',qualification:'',sports:'',name:'',foods:[],date:null}
  const validationSchema=Yup.object({
    email:Yup.string().email("Invalid email format").required("email is required"),
    qualification:Yup.string().required("qualification is required"),
    sports:Yup.string().required("sports is required"),
    foods:Yup.array(),

    name:Yup.string().min(6, 'Must minimum 6 digits')
          .max(20, 'Must be maximum 20 digits').required("username is required"),

    date:Yup.date().required("Date Required").nullable(),
  })
  const onsubmit=values=>console.log("form values",JSON.parse(JSON.stringify(values)))

  return (
    <div className="row">
      <div className="col-md-5 mx-auto">
        <div className="d-flex justify-content-center align-items-center row mt-5">
            <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onsubmit}
            validateOnChange={false}

              >
              {
                formik=>{

                  return(
                    <Form>
                      <FormControl control="input" name="name" type="text" label="username" className="mt-3"/>
                      <FormControl control="input" name="email" type="email" label="Email" className="mt-3"/>
                      <FormControl control="textarea" name="description" label="Description"  className="mt-3"/>
                      <FormControl control="select" name="qualification" label="Qualification" className="mt-3" options={options}/>
                      <FormControl control="radio" name="sports"  label="Favourite Sports" options={roptions} className="mt-3"/>
                      <FormControl control="checkbox" name="foods"  label="Favourite Foods" options={checkoptions} className="mt-3"/>
                      <FormControl control="date" name="date"  label="Date Of Birth" className="mt-3"/>
                      <input type="submit"  className="btn btn-primary form-control mt-4" value="submit"/>

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

export default Myform
