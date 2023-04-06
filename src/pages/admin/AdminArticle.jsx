import { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import ArticleModal from "../../components/ArticleModal";
import { Modal } from "bootstrap";
import DeleteModal from "../../components/DeleteModal";
import Pagination from "../../components/Pagination";
import { LoadingContext } from "../../contexts/loadingContext";

const AdminArticle = () => {
  const [article, setArticle] = useState([]);
  const [pagination, setPagination] = useState({});
  //type決定modal用途
  const [type, setType] = useState("create"); //edit
  const [tempArticle, setTempArticle] = useState({});

  const articleModal = useRef(null);
  const deleteModal = useRef(null);

  const { setLoadingState } = useContext(LoadingContext);

  const getArticles = useCallback(
    async (page = 1) => {
      setLoadingState(true);
      const articleRes = await axios.get(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/articles?page=${page}`
      );

      setArticle(articleRes.data.articles);
      setPagination(articleRes.data.pagination);
      setLoadingState(false);
    },
    [setArticle, setPagination, setLoadingState]
  );

  useEffect(() => {
    articleModal.current = new Modal("#articleModal", {
      backdrop: "static",
    });

    deleteModal.current = new Modal("#deleteModal", {
      backdrop: "static",
    });

    getArticles();
  }, [getArticles]);

  const openArticlesModal = (type, tempArticle) => {
    setType(type);
    setTempArticle(tempArticle);

    articleModal.current.show();
  };

  const closeArticlesModal = () => {
    articleModal.current.hide();
  };

  const openDeleteModal = (tempArticle) => {
    setTempArticle(tempArticle);
    deleteModal.current.show();
  };

  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };

  const deleteArticle = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/article/${id}`
      );

      if (res.data.success) {
        getArticles();
        deleteModal.current.hide();
      }
    } catch (error) {}
  };
  return (
    <div className="p-3 bg-white">
      <ArticleModal
        closeArticlesModal={closeArticlesModal}
        getArticles={getArticles}
        tempArticle={tempArticle}
        type={type}
      />
      <DeleteModal
        close={closeDeleteModal}
        text={tempArticle.title}
        handleDelete={deleteArticle}
        id={tempArticle.id}
      />
      <h3>文章列表</h3>
      <hr />
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => openArticlesModal("create", {})}
        >
          建立新文章
        </button>
      </div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">標題</th>
            <th scope="col">作者</th>
            <th scope="col">日期</th>
            <th scope="col">啟用狀態</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          {article.map((article) => {
            return (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.create_at}</td>
                <td>{article.isPublic ? "公開" : "未公開"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => openArticlesModal("edit", article)}
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    onClick={() => openDeleteModal(article)}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination pagination={pagination} changePage={getArticles} />
    </div>
  );
};

export default AdminArticle;
