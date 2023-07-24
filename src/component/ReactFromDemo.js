import { useState } from "react";

function ReactFormDemo() {
    const [userDetails, setUserDetails] = useState({ UserName: '', Mobile: '' })
    const [errors, setErrors] = useState({ UserError: '', MobileError: '' })


    function NameChange(e) {

        setUserDetails({
            UserName: e.target.value,
            Mobile: userDetails.Mobile
        })
        if (userDetails.UserName != "") {
            setErrors({
                UserError: '',
                MobileError: errors.MobileError
            })
        }
    }
    function MobileChange(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Mobile: e.target.value
        })
        if (userDetails.Mobile != "") {
            setErrors({
                UserError: errors.MobileError,
                MobileError: ''
            })
        }
    }
    function SubmitClick(e) {
        // alert(JSON.stringify(userDetails));
        e.preventDefault();
        if (userDetails.UserName === "") {
            setErrors({
                UserError: 'User Name required',
                MobileError: errors.MobileError
            })
        } else if (userDetails.Mobile === "") {
            setErrors({
                UserError: errors.UserError,
                MobileError: 'Mobile number is required'
            })
        }
    }
    function VerifyMobile(e) {
        let pattern = /\+91\d{10}/;
        if (e.target.value.match(pattern)) {
            setErrors({
                MobileError: ''
            })
        } else {
            setErrors({
                MobileError: 'Invalid mobile for INDIA'
            })
        }
    }
    return (
        <div>
            <form onSubmit={SubmitClick} className="container-fluid">
                <h2>Reister User- React</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={NameChange} /></dd>
                    <dd className="text-danger">{errors.UserError}</dd>
                    <dt>Phone</dt>
                    <dd><input type="text" onKeyUp={VerifyMobile} onChange={MobileChange} /></dd>
                    <dd className="text-danger">{errors.MobileError}</dd>
                </dl>
                <button className="btn btn-primary">Reister </button>
            </form>
        </div>
    )
}
export default ReactFormDemo;