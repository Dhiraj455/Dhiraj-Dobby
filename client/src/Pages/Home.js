import React, { useState, useEffect } from "react";
import AddImage from "../Components/AddImage";
import { getUserImages } from "../Services/Image";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    console.log("Home Page");
    getUserImages(search)
      .then((res) => {
        console.log(res.data);
        setImageData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {imageData.map((item) => {
              return (
                <div className="col-md-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={item.path}
                      alt="Card"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
