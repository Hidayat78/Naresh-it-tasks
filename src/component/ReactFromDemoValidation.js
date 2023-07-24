import { useState } from "react";

function ReactFormDemoValidation() {
    const [userDetails, setUserDetails] = useState({ UserName: '', Phone: '' })
    const [errors, setErrors] = useState({ UserError: '', PhoneError: '' })
    function NameChange(e) {
        setUserDetails({
            UserName: e.target.value,
            Phone: userDetails.Phone
        })
        if (userDetails.UserName != "") {
            setErrors({
                UserError: '',
                PhoneError: errors.PhoneError
            })
        }
    }
    function MobileChange(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Phone: e.target.value
        })
        if (userDetails.Phone != '') {
            setErrors({
                UserError: errors.UserError,
                PhoneError: ''
            })
        }
    }
    function Submitclick(e) {
        // alert(JSON.stringify(userDetails))
        e.preventDefault();
        if (userDetails.UserName === "") {
            setErrors({
                UserError: 'Name Field is Mandatory',
                PhoneError: errors.PhoneError
            })
        } else if (userDetails.Phone === "") {
            setErrors({
                UserError: errors.UserError,
                PhoneError: 'Numer is Required'
            })

        }
    }
    function verifymobile(e) {
        var pattern = /\+91\d{10}/;
        if (e.target.value.match(pattern)) {
            setErrors({
                PhoneError: ''
            })
        } else {
            setErrors({
                PhoneError: 'Invalid phone for india(+91)'
            })
        }
    }
    return (
        <div className="container-fluid">
            <form onSubmit={Submitclick}>
                <h1>Registration From with Validation</h1>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="name" onChange={NameChange} /></dd>
                    <dd className="text-danger">{errors.UserError}</dd>
                    <dt>Phone</dt>
                    <dd><input type="text" name="phone" onKeyUp={verifymobile} onChange={MobileChange} /></dd>
                    <dd className="text-danger">{errors.PhoneError}</dd>
                </dl>
                <button className="btn btn-danger" on>Reister</button>
            </form>
        </div>
    )
}
export default ReactFormDemoValidation;