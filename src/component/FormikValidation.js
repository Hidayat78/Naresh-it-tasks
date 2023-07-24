import { Formik, useFormik } from "formik";

function FormikValidation() {
    function VerifyUserDetails(FormValues) {
        const errors = {
            UserName: '',
            Age: '',
            Email: ''
        }

        if (FormValues.UserName == "") {
            errors.UserName = "Name required";
        } else if (FormValues.UserName.length < 4) {
            errors.UserName = "Name is too short..."
        } else if (FormValues.UserName.length > 10) {
            errors.UserName = "Name is to Long.."
        }
        if (FormValues.Age == "") {
            errors.Age = "Agge is required"
        } else if (isNaN(FormValues.Age)) {
            errors.Age = "Age must be a number"
        }
        if (FormValues.Email == "") {
            errors.Email = "Email is required"
        } else if (FormValues.Email.indexOf("@") < 2) {
            errors.Email = "invalid email"
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: '',
            Email: ''
        },
        validate: VerifyUserDetails,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Formik validation</h1>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange} /></dd>
                    {formik.touched.UserName && formik.errors.UserName && (<dd className="text-danger">{formik.errors.UserName}</dd>)}

                    <dt>Age</dt>
                    <dd><input type="text" name="Age" value={formik.values.Age} onChange={formik.handleChange} /></dd>
                    {formik.touched.Age && formik.errors.Age && (<dd className="text-danger">{formik.errors.Age}</dd>)}
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" value={formik.values.Email} onChange={formik.handleChange} /></dd>
                    {formik.touched.Email && formik.errors.Email && (<dd className="text-danger">{formik.errors.Email}</dd>)}
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
export default FormikValidation;