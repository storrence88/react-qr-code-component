const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src="/public/image-qr-code.png" alt="QR Code" />
      </div>
      <div className="card__content">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
