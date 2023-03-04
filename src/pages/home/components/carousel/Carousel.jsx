import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Homeimg1 from "../../../../image/homeimg/homeimg1.jpg";
import Homeimg2 from "../../../../image/homeimg/homeimg2.jpg";
import Homeimg3 from "../../../../image/homeimg/homeimg3.jpg";

const Carousel = () => {
  return (
    <div className="container my-2">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-height "
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-5">
          <div className="carousel-item active carousel-item-height ">
            <img
              src={Homeimg1}
              className="d-block w-100  carousel-img-height"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="mb-5 pb-2 display-4">
                爬爬台北 <br />
                Mounting Taipei
              </h2>
              <p className="mb-5 pb-5 ">
                空出一些空閒的時間 看見臺北不一樣的美
              </p>
            </div>
          </div>
          <div className="carousel-item carousel-item-height ">
            <img
              src={Homeimg2}
              className="d-block w-100 carousel-img-height "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="mb-5 pb-2 display-4">
                爬爬台北 <br />
                Mounting Taipei
              </h2>
              <p className="mb-5 pb-5">逃離車水馬龍水泥陣 穿梭城市山林綠意間</p>
            </div>
          </div>
          <div className="carousel-item carousel-item-height">
            <img
              src={Homeimg3}
              className="d-block w-100 carousel-img-height "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="mb-5 pb-2 display-4">
                爬爬台北 <br />
                Mounting Taipei
              </h2>
              <p className="mb-5 pb-5 ">暫時放下煩悶心情 擁抱自然療癒身心</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;