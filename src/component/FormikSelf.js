import { Formik, useFormik } from "formik";

function FormikSelf() {
    function verifyDetails(UserDetails) {
        const errors = {
            UserName: '',
            Number: ''
        }
        if (UserDetails.UserName == "") {
            errors.UserName = 'Name required';
        } else if (UserDetails.UserName.length < 3) {
            errors.UserName = "Chota nam hai"
        } else if (UserDetails.UserName.length > 10) {
            errors.UserName = "Bada nam hai BC chota kr"
        }
        if (UserDetails.Number == "") {
            errors.Number = "Number is required";
        } else if (isNaN(UserDetails.Number)) {
            errors.Number = "phone no dalo ABCD nhi!"
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Number: ''
        },
        validate: verifyDetails,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Formik Reistration self</h1>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="UserName" values={formik.values.UserName} onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Phone</dt>
                    <dd><input type="text" name="Number" values={formik.values.Number} onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Number}</dd>
                </dl>
                <button className="btn btn-danger">Register Self</button>
            </form>
        </div>
    )
}
export default FormikSelf;