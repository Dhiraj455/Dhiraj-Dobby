import React, { useState, useEffect } from "react";
import AddImage from "../Components/AddImage";
import { getUserImages } from "../Services/Image";
import ImageCard from "../Components/ImageCard";
import { Container, Row, Col } from "reactstrap";

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
  }, [search, imageData]);

  return (
    <>
      <section className="mt-5">
        <Container>
          <h3>My Images</h3>
          <div className="searchBox mb-3">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <Row>
            {imageData.map((item, key) => {
              return (
                <Col lg="3" md="4" sm="6" className="mb-4" key={key}>
                  <ImageCard path={item.path} title={item.title} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <button
        className="d-flex align-items-center gap-3 pad place__bid-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <i className="ri-add-line"></i>
        Add
      </button>
      {showModal && <AddImage setShowModal={setShowModal} />}
    </>
  );
};

export default Home;
