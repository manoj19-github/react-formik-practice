import React from 'react'
import Input from "./Input"
import Textarea from "./Textarea"
import Select from "./Select"
import RadioButtons from "./RadioButtons"
import Checkboxes from "./Checkboxes"
import DatePicker from "./DatePicker"


function FormControl({control,...rest}) {
  switch(control){
    case "input":
      return <Input {...rest}/>

    case "select":
      return <Select {...rest}/>
    case "date":
        return <DatePicker {...rest}/>

    case "radio":
      return <RadioButtons {...rest}/>

    case "checkbox":
      return <Checkboxes {...rest}/>


    case "multiselect":


    case "textarea":
      return <Textarea {...rest}/>

    default: return null
  }

}

export default FormControl
