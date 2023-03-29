import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { LoadingContext } from "../../contexts/loadingContext";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { useCallback } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  const { setLoadingState } = useContext(LoadingContext);

  const getArticles = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const articlesRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/articles?page=${page}`
      );
      //   console.log("AAAA", articlesRes);
      setArticles(articlesRes.data.articles);
      setPagination(articlesRes.data.pagination);
      setLoadingState(false);
    },
    [setLoadingState]
  );

  useEffect(() => {
    getArticles(1);
  }, [getArticles]);

  //   const getArticles = async (page = 1) => {
  //     (async () => {
  //   setLoadingState(true);
  //   const articlesRes = await axios.get(
  //     `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/articles?page=${page}`
  //   );

  //   console.log("AAAA", articlesRes);

  //   setArticles(articlesRes.data.articles);
  //   setPagination(articlesRes.data.pagination);
  //   setLoadingState(false);
  //     })();
  //   };

  //   useEffect(() => {
  //     getArticles(1);
  //   }, []);

  return (
    <>
      <Loading />
      <div className="bg-white">
        <div className="container">
          <div className="  mb-5 d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-primary my-5">最新消息</h2>

            <div className="row  w-100">
              {articles.map((articles) => {
                return (
                  <div className="col-sm-12 col-md-6  gy-4  " key={articles.id}>
                    <Link to={`/articledetail/${articles.id}`}>
                      <div className="card mb-3  h-100 rounded-0 border-top-0 border-end-0 border-start-0 border-bottom-primary box-hover">
                        <div className="row g-0 h-100 d-flex justify-content-center align-items-center">
                          <div className="col-md-4 ">
                            <img
                              src={articles.imageUrl}
                              className="img-fluid rounded"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8 h-100 ">
                            <div className="card-body  h-100 ">
                              <h5 className="card-title">{articles.title}</h5>
                              <p className="my-2 text-secondary-emphasis">
                                <BsFillPencilFill />
                                {articles.author}
                              </p>
                              <p className="card-text fst-italic">
                                {articles.description}
                              </p>
                              <p className="card-text  ">
                                <small className="text-body-secondary bg-warning rounded-pill tag">
                                  {articles.tag[0]}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <nav className="d-flex justify-content-center">
            <Pagination pagination={pagination} changePage={getArticles} />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Article;