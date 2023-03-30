import { Link } from "react-router-dom";

const HomeCard = ({ img, title, p }) => {
  return (
    <div className="col-sm-12 col-md-4 mt-3">
      <div className="card border-0">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{p}</p>
          <Link to="/mountingroute" className="btn btn-secondary  w-100 ">
            更多步道
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
