/* eslint-disable react-hooks/exhaustive-deps */
import "./serviceList.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PriceTracker = (props: any) => {
  return (
    <>
      <div className="price_container">
        <p>Budget: ${(props.budget).toFixed(2)}USD</p>
        <p>Available: ${props.available.toFixed(2)}USD</p>
        <p>Spent: ${(props.price).toFixed(2)}USD</p>
      </div>
    </>
  );
};

export default PriceTracker;
