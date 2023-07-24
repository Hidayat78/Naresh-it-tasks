import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormikValidationComponent = () => {
    return (
        <div className="container-fluid">
            <h1>Hidayat Mornin star</h1>
            <Formik
                initialValues={
                    {
                        "UserName": "",
                        "Age": 0,
                        "Mobile": ""
                    }
                }
                validationSchema={
                    yup.object({
                        "UserName": yup.string("Must be in string")
                            .required("This Fiels is Required")
                            .min(4, "Naaam chota hai..")
                            .max(10, "Naam bda hai.."),

                        "Age": yup.number("Age Must be a Number")
                            .required("Age is required"),

                        "Mobile": yup.string()
                            .required("Field required")
                            .matches(/\+91\d{10}/, "Invalid no use +91")
                    })
                }
                onSubmit={
                    (values) => {
                        alert(JSON.stringify(values));
                    }
                }
            >

                <Form>
                    {
                        <div>
                            <h2>Reiste user</h2>
                            <dl>
                                <dt>Name</dt>
                                <dd><Field type="text" name="UserName"></Field></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="UserName"></ErrorMessage>
                                </dd>
                                <dt>Age</dt>
                                <dd><Field type="text" name="Age"></Field></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Age"></ErrorMessage>
                                </dd>
                                <dt>Mobile</dt>
                                <dd><Field type="text" name="Mobile"></Field></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Mobile"></ErrorMessage>
                                </dd>
                            </dl>
                            <button className="btn btn-primary">Regiser</button>
                        </div>
                    }
                </Form>
            </Formik>

        </div>
    )
}
export default FormikValidationComponent;