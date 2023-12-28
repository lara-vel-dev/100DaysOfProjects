import { useState, useEffect } from "react";
import ServiceList from "./ServiceList";
import PriceTracker from "./PriceTracker";
import "../pages/tracker.css";

const FormTracker = () => {
  const [active, setActive] = useState(true);
  const [budget, setBudget] = useState(0);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [serviceList, setServiceList] = useState([
    { service: "", image: "", price: 0 },
  ]);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getBudget(event: any) {
    setBudget(parseFloat(event.target.value));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleAdd() {
    handleAddElement(title);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSelect(event: any) {
    setTitle(event.target.value);
  }

  function handleAddElement(title: string) {
    let price = 0;
    switch (title) {
      case "Netflix":
        price = 22.99;
        break;
      case "HBO Max":
        price = 15.99;
        break;
      case "Spotify":
        price = 11.98;
        break;
      case "Disney+":
        price = 7.99;
        break;
      default:
        console.log("Error");
        break;
    }
    setServiceList([
      ...serviceList,
      { service: title, image: title, price: price },
    ]);
  }

  const options = [
    {
      label: "Select a service",
      value: "1",
    },
    {
      label: "Netflix -- $22.99USD",
      value: "Netflix",
      disabled: budget - price < 22.99,
    },
    {
      label: "HBO Max -- $15.99USD",
      value: "HBO Max",
      disabled: budget - price < 15.99,
    },
    {
      label: "Spotify -- $11.98USD",
      value: "Spotify",
      disabled: budget - price < 11.98,
    },
    {
      label: "Disney+ -- $7.99USD",
      value: "Disney+",
      disabled: budget - price < 7.99,
    },
  ];

  useEffect(() => {
    const total = serviceList.reduce(
      (totalSum: number, current) => totalSum + current.price,
      0
    );

    setPrice(total);
  }, [serviceList]);

  return (
    <>
      {active ? (
        <div className="content">
          <p>ADD BUDGET</p>
          <form className="form">
            <input
              id="budget"
              type="string"
              placeholder="$0.00"
              onChange={getBudget}
            />
            <button onClick={() => setActive(!active)}>ADD</button>
          </form>
        </div>
      ) : (
        <div className="content">
          <p>ADD SUBSCRIPTION</p>
          <div className="main_containter">
            <PriceTracker
              budget={budget}
              available={budget - price}
              price={price}
            />

            <div className="content_tracker">
              <form className="form">
                <select
                  name="services"
                  id="service-select"
                  onChange={handleSelect}
                >
                  {options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </form>
              <button disabled={budget - price < 7.99} onClick={() => handleAdd()}>ADD</button>
            </div>
          </div>
          {serviceList.slice(1).map((service, index) => (
            <ServiceList
              key={index}
              img={service.image}
              service={service.service}
              price={service.price}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FormTracker;
