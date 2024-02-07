import "./serviceList.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceList = (props: any) => {

  function handleDelete(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const answer = window.confirm(`Delete service ${props.service}`);
    if (answer) {
      console.log(props.id);
      props.deleteService(props.id);
    }
  }

  return (
    <>
      <div className="list">
        <img src={`src/img/${props.img}.jpeg`} alt={props.service} />
        <p className="service">{props.service}</p>
        <p className="price">${props.price}USD</p>
        <button className="btn" onClick={handleDelete}>DELETE</button>
      </div>
    </>
  );
};

export default ServiceList;
