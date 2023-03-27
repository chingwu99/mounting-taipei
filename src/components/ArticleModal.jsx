import axios from "axios";
import { useEffect, useState } from "react";
// import {
//   MessageContext,
//   handleSuccessMessage,
//   handleErrorMessage,
// } from "../contexts/messageContext";

const ArticleModal = ({
  closeArticlesModal,
  getArticles,
  tempArticle,
  type,
}) => {
  const [tempData, setTempData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tag: [""],
    create_at: 1555459220,
    author: "",
    isPublic: false,
    content: "",
  });

  console.log("??", tempData);

  //   const [, dispatch] = useContext(MessageContext);

  useEffect(() => {
    if (type === "create") {
      setTempData({
        title: "",
        description: "",
        imageUrl: "",
        tag: [""],
        create_at: 1555459220,
        author: "",
        isPublic: false,
        content: "",
      });
    } else if (type === "edit") {
      (async () => {
        const res = await axios.get(
          `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/article/${tempArticle.id}`
        );
        let content = res.data.article.content;
        console.log("99999", content);

        setTempData({ ...tempArticle, content: content });
      })();
    }
  }, [type, tempArticle]);

  const handleChange = (e) => {
    // console.log(e);
    const { value, name } = e.target;

    if (name === "isPublic") {
      setTempData({ ...tempData, [name]: e.target.checked });
    } else if (name === "tag") {
      setTempData({ ...tempData, [name]: [value] });
    } else {
      setTempData({ ...tempData, [name]: value });
    }
  };

  const submit = async () => {
    try {
      let api = `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/article`;
      let method = "post";
      if (type === "edit") {
        api = `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/article/${tempArticle.id}`;
        method = "put";
      }

      const res = await axios[method](api, { data: tempData });
      console.log(res);
      //   handleSuccessMessage(dispatch, res);
      closeArticlesModal();
      getArticles();
    } catch (error) {
      //   handleErrorMessage(dispatch, error);
      console.log(error);
    }
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="articleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {type === "create" ? "建立新商品" : `編輯${tempData.title}`}
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeArticlesModal}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="imageUrl">
                    輸入圖片網址
                    <input
                      type="text"
                      name="imageUrl"
                      id="imageUrl"
                      placeholder="請輸入圖片連結"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.imageUrl}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  {/* <label className="w-100" htmlFor="customFile">
                    或 上傳圖片
                    <input
                      type="file"
                      id="customFile"
                      className="form-control"
                    />
                  </label> */}
                </div>
                {/* <img src="" alt="" className="img-fluid" /> */}
              </div>
              <div className="col-sm-8">
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="title">
                    標題
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="請輸入標題"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.title}
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="tag">
                      標籤
                      <input
                        type="text"
                        id="tag"
                        name="tag"
                        placeholder="請輸入標籤"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData.tag[0]}
                      />
                    </label>
                  </div>
                  {/* <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="unit">
                      時間
                      <input
                        type="unit"
                        id="unit"
                        name="unit"
                        placeholder="請輸入單位"
                        className="form-control"
                        // onChange={handleChange}
                        // value={tempData.unit}
                      />
                    </label>
                  </div> */}
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="author">
                      作者
                      <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="請輸入作者"
                        className="form-control"
                        onChange={handleChange}
                        value={tempData.author}
                      />
                    </label>
                  </div>
                </div>
                <hr />
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="description">
                    文章簡介
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      placeholder="請輸入文章簡介"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.description}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <label className="w-100" htmlFor="content">
                    內文(必填)
                    <textarea
                      type="text"
                      id="content"
                      name="content"
                      placeholder="請輸入內文"
                      className="form-control"
                      onChange={handleChange}
                      value={tempData.content}
                    />
                  </label>
                </div>
                <div className="form-group mb-2">
                  <div className="form-check">
                    <label
                      className="w-100 form-check-label"
                      htmlFor="isPublic"
                    >
                      是否公開
                      <input
                        type="checkbox"
                        id="isPublic"
                        name="isPublic"
                        className="form-check-input"
                        onChange={handleChange}
                        checked={tempData.isPublic}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeArticlesModal}
            >
              關閉
            </button>
            <button type="button" className="btn btn-primary" onClick={submit}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
