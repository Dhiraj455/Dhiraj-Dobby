import React, { useRef, useState } from "react";
import { uploadImage } from "../Services/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "../Assets/css/modal.css";

const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  height: 180px;
`;

const Profile = styled.div`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 120px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 120px;
  border: 3px solid #001825;
  background: #001825;
  margin-bottom: 10px;
`;

const PseudoProfile = styled.div`
  display: inline-block;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  background: #418df9;
  font-weight: 600;
  color: white;
  width: 150px;
  height: 150px;
  border: 6px solid;
  border-color: #001825;
  border-radius: 50%;
  padding-top: 40px;
`;

const AddImage = ({ setShowModal }) => {
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState();
  const [posts, setPosts] = useState({
    title: "",
  });

  const handlePic = (e) => {
    const fileReader = new FileReader();
    e.preventDefault();
    var pic = e.target.files[0];
    fileReader.onload = function (e) {
      setImages(e.target.result);
      setPosts({ ...posts, pic: pic });
    };
    fileReader.readAsDataURL(pic);
  };

  const form = new FormData();
  form.append("title", posts.title);
  form.append("post", posts.pic);

  const handleAdd = async (e) => {
    e.preventDefault();
    uploadImage(form).then((data) => {
      if (data.data.message === "Posted successfully") {
        navigate("/");
        toast.success(data.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.warn(data.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    });
  };

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h5 className="mb-4 text-center text-light">Post Image</h5>
        <ProfilePic>
          <Profile>
            {images === "" || images === undefined || images === null ? (
              <>
                <PseudoProfile
                  dangerouslySetInnerHTML={{
                    __html: "P",
                  }}
                />
                <br />
              </>
            ) : (
              <ProfileImage src={images} alt="" />
            )}
            <input
              ref={fileRef}
              hidden
              type="file"
              p="1.5"
              accept="image/*"
              name="image"
              onChange={handlePic}
            />
            <button
              className="bid__btn d-flex align-items-center gap-3 pad place__bid-btn"
              onClick={() => {
                fileRef.current.click();
              }}
            >
              <i className="ri-upload-line"></i> Upload
            </button>
          </Profile>
        </ProfilePic>
        <br />
        <br />
        <div className="create__item">
          <form>
            <div className="form__input input__item">
              <label htmlFor="" className="text-center text-light">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Name"
                onChange={(e) => setPosts({ ...posts, title: e.target.value })}
              />
            </div>
            <br />
            <button
              className="bid__btn d-flex align-items-center gap-3 pad place__bid-btn"
              onClick={handleAdd}
            >
              <i className="ri-add-line"></i> Post
            </button>
          </form>
        </div>
        {/* <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">Place a Bid</button> */}
      </div>
    </div>
  );
};

export default AddImage;
