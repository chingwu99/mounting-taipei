import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../contexts/cartContext";
import Pagination from "../../components/Pagination";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = async (page = 1) => {
    (async () => {
      const productRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/products?page=${page}`
      );
      console.log("AAAA", productRes);

      setProducts(productRes.data.products);
      setPagination(productRes.data.pagination);
    })();
  };

  useEffect(() => {
    getProducts(1);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const { getCart } = useContext(CartContext);

  const addToCart = async (e) => {
    const data = {
      data: {
        product_id: e.target.value,
        qty: 1,
      },
    };

    setIsLoading(true);
    try {
      const res = await axios.post(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/cart`,
        data
      );
      console.log(res);
      setIsLoading(false);
      getCart();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container  mb-5 d-flex justify-content-center align-items-center flex-column">
          <h2 className="text-warning my-5">所有商品</h2>

          <div className="row    ">
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
                          disabled={isLoading}
                        >
                          更多資訊
                        </Link>
                        <button
                          onClick={addToCart}
                          value={product.id}
                          type="button"
                          className="btn btn-primary py-2 px-7 rounded-0 w-100 mx-1"
                          disabled={isLoading}
                        >
                          加入商品
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
