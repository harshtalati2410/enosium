import React from "react";
import { useState } from "react";
import FormI from "./FormI";
import FormII from "./FormII";
import FormIII from "./FormIII";


function Form(props) {
  const [formNumber, setFormNumber] = useState(1);
  return (
    <form>
      {formNumber === 1 && <FormI setFormNumber={setFormNumber} />}
      {formNumber === 2 && <FormII setFormNumber={setFormNumber} />}
      {formNumber === 3 && <FormIII setFormNumber={setFormNumber} handleClose={props.handleClose}/>}
    </form>
  );
}

export default Form;
