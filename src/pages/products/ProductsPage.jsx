import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/Pagination";
import { BsInfoCircle, BsFillCartFill } from "react-icons/bs";

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

  return (
    <>
      <div className="container">
        <div className="container  mb-5 d-flex justify-content-center align-items-center flex-column">
          <h2 className="text-warning my-5">所有商品</h2>

          <div className="row row-cols-4   ">
            {products.map((product) => {
              return (
                <div className="col gy-4 " key={product.id}>
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

                      <div className="container w-100  d-flex   justify-content-between ">
                        <Link
                          to={`/product/${product.id}`}
                          type="button"
                          className="w-50 py-1 info-button  d-flex 
                          justify-content-center
                          align-items-center
                          text-decoration-none
                          text-black
                          d-flex 
                          justify-content-center
                          align-items-center
                          "
                        >
                          <BsInfoCircle className="mx-1" />
                          更多資訊
                        </Link>
                        <button
                          type="button"
                          className="w-50 py-1 productpage-add-cart-button d-flex 
                          justify-content-center
                          align-items-center"
                        >
                          <BsFillCartFill />
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
