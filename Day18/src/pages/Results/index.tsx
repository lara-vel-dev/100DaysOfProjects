import "./Results.css";

const Results = (params) => {
  return (
    <div className="container">
      <h1>{params.title}</h1>
      <img src={params.img} alt={params.title} />
      <p>{params.description}</p>
    </div>
  );
};

export default Results;
