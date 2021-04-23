import {Component} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {initialValues} from "./initialValues";

import {fields} from "./fields";

class FormAddCase extends Component {

    render(){

      const onSubmit = (values) => {
        console.log(values)
      }

      const validate = (values)=>{
        const errors = {};
        if(values.caseValue.length < 2){
            errors.caseValue = "В названии дела должно быть больше 1 буквы"
        }
        return errors;
      }

        return (
          <Formik 
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit} >
              <Form>
                <Field {...fields.caseValue} />
                <ErrorMessage name={fields.caseValue.name} />
                <Field {...fields.isDone} />
              </Form>
          </Formik>
        )
    }
}

export default FormAddCase;