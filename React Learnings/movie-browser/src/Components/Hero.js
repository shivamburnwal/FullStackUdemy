const Hero = ({ text, backgroundImage }) => {
  return (
    <div className="bg-black text-white p-4 hero-container">
      <h1 className="hero-text">{text}</h1>
      {backgroundImage !== "" && (
        <div
          className="hero-background-image"
          style={{ backgroundImage: `Url(${backgroundImage})` }}
        ></div>
      )}
    </div>
  );
};

export default Hero;
