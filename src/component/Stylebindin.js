import { useState } from "react";

export function StyleBinding() {

    const [styleObject, setStyleObject] = useState({ position: '', left: '', top: '' });

    function GetPosition(e) {
        setStyleObject({
            position: 'fixed',
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        });
    }

    return (
        <div className="container-fluid" onMouseMove={GetPosition}>
            <div style={{ height: '1000px' }}>

            </div>
            <img style={styleObject} src="f.jpg" width="50" height="50" />
        </div>
    )
}
