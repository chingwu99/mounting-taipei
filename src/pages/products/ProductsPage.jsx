import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { LoadingContext } from "../../contexts/loadingContext";
import { ProductContext } from "../../contexts/productContext";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loadingState } = useContext(LoadingContext);
  const { products, addToCart, pagination, getProducts } =
    useContext(ProductContext);

  return (
    <>
      <div className="container">
        <div className="container  mb-5 d-flex justify-content-center align-items-center flex-column">
          <h2 className="text-warning mt-5">所有商品</h2>
          <p className=" subtitle-light-text subtitle-light">
            所有商品皆符合無毒檢測，守護您的健康
          </p>

          <div className="row  w-100">
            {products.map((product) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-3 gy-4 "
                  key={product.id}
                >
                  <div className="card border-0 w-100">
                    <div className="productpage-img-container">
                      <img
                        src={product.imageUrl}
                        className="card-img-top productpage-object-fit"
                        alt="..."
                      />
                    </div>

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
                          <p className="text-danger fs-3 ">${product.price}</p>
                          <p className="text-muted text-decoration-line-through ">
                            {product.origin_price}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex w-100 justify-content-between">
                        <Link
                          to={`/product/${product.id}`}
                          type="button"
                          className="btn submit-button-color-reverse py-2 px-7 rounded-0 w-100  mx-1"
                          disabled={loadingState}
                        >
                          更多介紹
                        </Link>
                        <button
                          onClick={addToCart}
                          value={product.id}
                          type="button"
                          className="btn btn-primary py-2 px-7 rounded-0 w-100 mx-1"
                          disabled={loadingState}
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
        <nav className="d-flex justify-content-center">
          <Pagination pagination={pagination} changePage={getProducts} />
        </nav>
      </div>
    </>
  );
};

export default ProductsPage;
