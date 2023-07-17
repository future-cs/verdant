function InfoComponent() {
  return (
    <section className="section-info">
      <div className="info">
        <div className="info-div-img">
          <div className="info-div-img-absolute">
            <img
              className="info-img"
              // src="img/plant-idea.png"
              src="img/plant-lamp-outline-white.png"
              alt="Computer Drawing"
            ></img>
          </div>
        </div>
        <div className="info-div-content">
          <h3>Do shade growing plants need any sunlight?</h3>
          <p>
            Yes, shade growing plants do need sunlight, althought they require
            less then others.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoComponent;
