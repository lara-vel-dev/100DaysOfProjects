import { useFormik } from "formik";
import * as Yup from "yup";


const FormSchema = Yup.object().shape({
    budget: Yup.string().required("This field is required").email(),
  });

const formTracker = () => {
  
  return (
    <>
      <p>ADD BUDGET</p>
      <form action="">
        <input type="text" placeholder="$0.00" />
        <button onClick={}>ADD</button>
      </form>
    </>
  );
};

export default formTracker;
