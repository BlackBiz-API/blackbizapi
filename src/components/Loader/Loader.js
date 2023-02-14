import { useEffect, useState } from "react";

function Loader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000)
    }, [])

    return (
       <div className={`loader ${show ? 'active' : ''}`}>
        <div className='bb-ripple'><div></div><div></div></div>
       </div>
    );
}

export default Loader;