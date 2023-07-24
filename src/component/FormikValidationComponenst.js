import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikValidationComponenst() {
    return (
        <div className="container-fluid">
            <Formik
                initialValues={
                    {
                        "UserName": "",
                        "Age": 0,
                        "Mobile": "",
                        "City": ""
                    }
                }

                validationSchema={
                    yup.object({
                        "UserName": yup.string()
                            .required("User Name Required")
                            .matches(/^[a-zA-Z ]/, "alpha numreic onl")
                            .min(4, "Name too short")
                            .max(10, "Name too long"),
                        "Age": yup.number("Age Must be Number")
                            .required("Age Required"),

                        "Mobile": yup.string()
                            .matches(/\+91\d{10}/, "Invalid Mobile")
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
                            <h2>Register User</h2>
                            <dl>
                                <dt>User Name</dt>
                                <dd> <Field type="text" name="UserName"></Field> </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="UserName"></ErrorMessage>
                                </dd>
                                <dt>Age</dt>
                                <dd>
                                    <Field type="text" name="Age"></Field>
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Age"></ErrorMessage>
                                </dd>
                                <dt>Mobile</dt>
                                <dd>
                                    <Field type="text" name="Mobile"></Field>
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Mobile"></ErrorMessage>
                                </dd>
                                <dt>Your City</dt>
                                <dd>
                                    <Field name="City" as="select">
                                        <option>Delhi</option>
                                        <option>Hyd</option>
                                    </Field>
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
