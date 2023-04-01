import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  MessageContext,
  handleSuccessMessage,
  handleErrorMessage,
} from "../contexts/messageContext";

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
    tag: [],
    create_at: null,
    author: "",
    isPublic: false,
    content: "",
  });

  const [tag, setTag] = useState("");
  const [tagArr, setTagArr] = useState([]);

  useEffect(() => {
    setTempData((prevState) => ({ ...prevState, tag: tagArr }));
  }, [tagArr]);

  // console.log("tag", tag);
  // console.log("tagArr", tagArr);

  // console.log("??", tempData);

  const [, dispatch] = useContext(MessageContext);

  useEffect(() => {
    if (type === "create") {
      setTempData({
        title: "",
        description: "",
        imageUrl: "",
        tag: [],
        create_at: new Date().getTime(),
        author: "",
        isPublic: false,
        content: "",
      });
      setTagArr([]);
    } else if (type === "edit") {
      (async () => {
        const res = await axios.get(
          `/v2/api/${process.env.REACT_APP_SHOPAPI_PATH}/admin/article/${tempArticle.id}`
        );
        let content = res.data.article.content;
        // console.log("99999", content);
        // console.log("QQQ", res.data);
        let tag = res.data.article.tag;
        // console.log("ttt", tag);

        setTempData({ ...tempArticle, content: content });
        setTagArr(tag);
      })();
    }
  }, [type, tempArticle]);

  const handleChange = (e) => {
    // console.log(e);
    const { value, name } = e.target;
    // console.log("tagArr", tagArr);

    if (name === "isPublic") {
      setTempData({ ...tempData, [name]: e.target.checked });
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

      if (Array.isArray(tempData.tag) && tempData.tag.length >= 1) {
        const res = await axios[method](api, { data: tempData });
        // console.log(res);
        handleSuccessMessage(dispatch, res);
        closeArticlesModal();
        getArticles();
        setTagArr([]);
        setTag("");
      } else {
        alert("請填寫標籤");
      }
    } catch (error) {
      handleErrorMessage(dispatch, error);
      // console.log(error);
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
              {type === "create" ? "建立新文章" : `編輯${tempData.title}`}
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
                <div className="row d-flex ">
                  <div className="form-group mb-2 col-md-6">
                    <label className="w-100" htmlFor="tag">
                      標籤{`(必填)`}
                      <input
                        type="text"
                        id="tag"
                        name="tag"
                        placeholder="請輸入標籤"
                        className="form-control"
                        onChange={(e) => {
                          setTag(e.target.value);
                        }}
                        value={tag}
                      />
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-6 m-auto ">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setTagArr([
                          ...tagArr,
                          { id: new Date().getTime(), tag: tag },
                        ]);
                        setTag("");
                      }}
                    >
                      新增標籤
                    </button>
                  </div>
                </div>

                {tagArr?.map((tagItem) => {
                  return (
                    <div key={tagItem?.id} className="row d-flex">
                      <div className="form-group mb-2 col-md-6">
                        <p>{tagItem.tag}</p>
                      </div>
                      <div className="form-group mb-2 col-md-6">
                        {tagArr?.length > 1 ? (
                          <button
                            onClick={() => {
                              setTagArr(
                                tagArr.filter((i) => i?.id !== tagItem?.id)
                              );
                            }}
                          >
                            刪除
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}

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
