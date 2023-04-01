import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../contexts/loadingContext";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import Loading from "../../components/Loading";

const ArticleDetail = () => {
  const [article, setArticle] = useState([]);
  const { setLoadingState } = useContext(LoadingContext);
  const { id } = useParams();

  const getArticle = useCallback(
    async (id) => {
      setLoadingState(true);
      const articleRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/article/${id}`
      );
      // console.log("YYY", articleRes);
      setArticle(articleRes.data.article);
      setLoadingState(false);
    },
    [setLoadingState]
  );

  // console.log(article);

  useEffect(() => {
    getArticle(id);
  }, [getArticle, id]);

  return (
    <div className="bg-white">
      <Loading />
      <div className="container d-flex  align-items-center flex-column  articleDetail-box-width">
        <div className=" row  mt-4  m-2">
          <div className="col-12 ">
            <div>
              <div className="d-flex flex-wrap">
                <div>
                  <Link to="/">首頁</Link>
                </div>
                <span>{" > "}</span>
                <div>
                  <Link to="/article">最新消息</Link>
                </div>
                <span>{" > "}</span>
                <div className="text-secondary-emphasis">{article.title}</div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <h1 className="fs-2 mt-3">{article.title}</h1>
                <p className="text-secondary-emphasis">
                  <BsFillPencilFill />
                  {article.author}
                </p>

                {article?.tag?.map((i) => {
                  return (
                    <small
                      className=" bg-warning rounded-pill tag me-2 p-1"
                      key={i.id}
                    >
                      {i.tag}
                    </small>
                  );
                })}
              </div>
            </div>
            <div>
              <div>
                <img src={article.imageUrl} alt="" className="w-100" />
              </div>
              <div className="my-3">
                <p className="fs-5 fst-italic text-primary">
                  {article.description}
                </p>
              </div>
              <div>
                <p>{article.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
