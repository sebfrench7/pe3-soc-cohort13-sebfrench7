import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.image} alt="" />
      <h2 className="title">{props.title}</h2>
      <p className="content">{props.content}</p>
      <p>{props.date}</p>
      <p>{props.source}</p>
      <p>{props.author}</p>
      <button className="linkButton" onClick={() => window.open(props.url)}>
        {" "}
        Read More{" "}
      </button>
    </div>
  );
}
