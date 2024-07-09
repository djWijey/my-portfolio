function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"> Hi! My name is Anna</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Occupation</span>
            {""}
          </h1>
          <p className="hero--section-description">Description</p>
        </div>
        <button className="btn btn-primary"> Contact </button>
      </div>
      <div className="hero--section--img"> Hero Image</div>
    </section>
  );
}
export default HeroSection;
