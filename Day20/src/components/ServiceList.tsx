import  './serviceList.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceList = (props: any) => {
  return (
    <>
      <div className="list">
        <img src={`src/img/${props.img}.jpeg`} alt={props.service} />
        <p>{props.service}</p>
        <p>{props.price}</p>
      </div>
    </>
  );
};

export default ServiceList;
