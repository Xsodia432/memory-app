export function Tiles(props) {
  return (
    <>
      <div
        onClick={() => props.clickTileHandler(props.id)}
        className="content-container"
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="img-container">
          <img src={props.imgURL} />
        </div>
        <div className="content-name">
          <h1>{props.name}</h1>
        </div>
      </div>
    </>
  );
}
