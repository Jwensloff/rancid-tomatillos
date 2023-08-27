import './Trailer.scss'

function Trailer ({ trailer }) {
const { key } = trailer

  return (
  <div className="trailer-page">
    <button>Home</button>
    <button>Back to movie</button>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${key}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
}

export default Trailer;
