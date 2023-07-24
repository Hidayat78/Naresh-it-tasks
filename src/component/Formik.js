import { Form, useFormik } from "formik";

function Formik() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Mobile: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className="container-fluid">
            <h2>Registration- Formik</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName} /></dd>
                    <dt>Phone</dt>
                    <dd><input type="number" name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} /></dd>
                </dl>
                <button className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}
export default Formik;