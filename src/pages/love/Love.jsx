import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";
import LoveImg from "../../image/loveimg/love.svg";
import { LoveContext } from "../../contexts/loveContext";
import { AiOutlineHeart } from "react-icons/ai";
import { ProductContext } from "../../contexts/productContext";

const Love = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useContext(ProductContext);

  const [state, dispatch] = useContext(LoveContext);

  const [loveList, setLoveList] = useState([]);

  useEffect(() => {
    setLoveList(state?.loveList);
  }, [state]);

  return (
    <>
      {state?.loveList?.length === 0 ? (
        <div className="bg-white d-flex justify-content-center align-items-center flex-column ">
          <div className="container mt-5 mb-3  d-flex justify-content-center align-items-center ">
            <div
              className="row  w-100 d-flex justify-content-center align-items-center "
              style={{ height: "800px" }}
            >
              <div className="  d-flex justify-content-center align-items-center flex-column">
                <p className="fs-2">哎呀！您的收藏是空的！</p>

                <img
                  src={LoveImg}
                  alt="LoveImg"
                  className=" mb-5"
                  style={{ maxWidth: "200px" }}
                />
                <Link
                  to="/productspage"
                  className="btn btn-primary mt-3 mb-5 d-flex fs-5"
                >
                  <FaHandPointRight className="my-auto me-2 " />
                  立刻收藏商品
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="container  pb-5 d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-primary mt-5">收藏商品</h2>
            <p className=" text-secondary-emphasis subtitle-dark">
              您收藏的商品
            </p>

            <div className="row  w-100">
              {loveList?.map((product) => {
                return (
                  <div
                    className="col-sm-12 col-md-6 col-lg-3 gy-4 "
                    key={product.id}
                  >
                    <div className="card border border-primary shadow w-100">
                      <Link to={`/product/${product.id}`}>
                        <div className="productpage-img-container">
                          <img
                            src={product.imageUrl}
                            className="card-img-top productpage-object-fit"
                            alt="..."
                          />
                        </div>
                      </Link>

                      <div
                        className="card-body d-flex flex-column d-flex 
                                justify-content-center
                                align-items-center"
                      >
                        <div
                          className="  d-flex flex-column
        justify-content-center
        align-items-center h-25 w-100"
                        >
                          <h4 className="my-1">{product.title}</h4>
                          <div className="d-flex ">
                            <p className="text-danger fs-3 ">
                              ${product.price}
                            </p>
                            <p className="text-muted text-decoration-line-through ">
                              {product.origin_price}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex w-100 justify-content-between">
                          <button
                            type="button"
                            className={`rounded-0 w-25  mx-1 ${
                              loveList.some((item) => item.id === product.id)
                                ? "like-button-color-active"
                                : "like-button-color"
                            }`}
                            onClick={() => {
                              dispatch({
                                type: "ADD_TO_LOVE",
                                payload: {
                                  ...product,
                                },
                              });
                            }}
                          >
                            <AiOutlineHeart />
                          </button>
                          <button
                            onClick={addToCart}
                            value={product.id}
                            type="button"
                            className="btn btn-primary  rounded-0 w-75 mx-1"
                          >
                            加入購物車
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Love;
