import { useState } from 'react';
import './tracker.css';

const Tracker = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="main">
            <div className="container" style={!active ? {"display": "none"} : {}}>
                <h3>SUBSCRIPTION TRACKER</h3>
                <br />
                <p>ADD BUDGET</p>
                <input type="text" placeholder="$0.00"/>
                <button onClick={() => setActive(!active)}>ADD</button>
            </div>
        </div>
    )

}

export default Tracker;
