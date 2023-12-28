import FormTracker from "../components/FormTracker";
import "./tracker.css";

const Tracker = () => {
  return (
    <div className="main">
      <div className="container">
        <h3>SERVICE TRACKER</h3>
        <br />
        <FormTracker/>
      </div>
    </div>
  );
};

export default Tracker;
