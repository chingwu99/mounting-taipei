import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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

  return (
    <>
      <div className="container mt-md-5 mt-3 mb-7">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3" key={product.id}>
                <div className="card border-0 mb-4 position-relative position-relative">
                  <img
                    src={product.imageUrl}
                    className="card-img-top rounded-0"
                    alt="..."
                  />

                  <div className="card-body p-0">
                    <h4 className="mb-0 mt-3">
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h4>
                    <p className="card-text text-muted mb-0">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-muted mt-3">{product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <nav className="d-flex justify-content-center">
          <Pagination pagination={pagination} changePage={getProducts} />
        </nav>
      </div>
    </>
  );
};

export default ProductsPage;
