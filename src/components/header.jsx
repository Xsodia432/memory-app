export function Header(props) {
  return (
    <>
      <nav>
        <h1 className="title">PoKeMeM</h1>
        <div>
          {" "}
          <h3>Current Score: {props.curScore}</h3>
          <h3>Best Score: {props.bestScore}</h3>
        </div>
        <p className="instruction">
          Click on the pokemons, make sure that the images that you are going to
          click next aren't the one that you already choose earlier.
        </p>
      </nav>
    </>
  );
}
