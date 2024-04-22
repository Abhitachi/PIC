import "./ImageShow.css";
function ImageShow({ image }) {
  return (
    <div className="container">
      <img
        className="img"
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;
