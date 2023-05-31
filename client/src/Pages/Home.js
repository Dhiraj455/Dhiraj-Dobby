import React, { useRef, useState } from "react";
import { uploadImage } from "../Services/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";
import AddImage from "../Components/AddImage";

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
  height: 100px;
  border: 6px solid;
  border-color: #001825;
  border-radius: 50%;
  padding-top: 40px;
`;

const Home = () => {
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState();
  const [showModal, setShowModal] = useState(false);
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
    <>
      <section>
        <h5 className="mb-4 text-light">Post Image</h5>
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
              className="bid__btn d-flex align-items-center gap-5 pad"
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
            <div className="form__input">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Name"
                onChange={(e) => setPosts({ ...posts, title: e.target.value })}
              />
            </div>
            <br />
            <button
              className="bid__btn d-flex align-items-center gap-5 pad"
              onClick={handleAdd}
            >
              <i className="ri-add-line"></i> Post
            </button>
          </form>
        </div>
      </section>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        pop
      </button>
      {showModal && <AddImage setShowModal={setShowModal} />}
    </>
  );
};

export default Home;
