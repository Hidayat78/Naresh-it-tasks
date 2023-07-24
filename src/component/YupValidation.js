import { useFormik } from "formik";
import * as yup from "yup";

function YupValidation() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: '',
            Mobile: ''
        },
        validationSchema: yup.object({
            UserName: yup.string()
                .min(4, "Name is to short")
                .required("Name is required")
                .max(10, "Name bda hai.."),

            Age: yup.number()
                .required("Age is required"),

            Mobile: yup.string()
                .required("Moile required")
                .matches(/\+91\d{10}/, "+91 with 10 digit number")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleChange} >
                <h1>Hidayat Yup valiodation</h1>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="UserName" {...formik.getFieldProps("UserName")} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" {...formik.getFieldProps("Age")} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile"{...formik.getFieldProps("Mobile")} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button className="btn btn-danger">Register Yup</button>
            </form>
        </div>
    );
}
export default YupValidation;