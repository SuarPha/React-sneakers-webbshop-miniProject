import React from "react";
import { withRouter } from "react-router-dom";
import converse from "../../images/converse.jpg";
import fashion from "../../images/fashion-unsplash.jpg";
import "./mainSection.css";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={converse} alt="blue shoe" />
        </div>
        <div className="ms-m-description">
          <h2>Orange summer shoes</h2>
          <p>
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam\n recusandae alias error harum maxime adipisci amet
            laborum
          </p>
          <button
            className="button is-blue"
            id="shop now"
            onClick={() => history.push("/product/234967")}
          >
            CLICK ME!
          </button>
        </div>
      </div>
      <div className="main-section-middle-2">
        <div className="ms-m-image">
          <img src={fashion} alt="blue shoe" />
        </div>
        <div className="ms-m-description">
          <h2>Fashion summer shoes</h2>
          <p>
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam\n recusandae alias error harum maxime adipisci amet
            laborum
          </p>
          <button
            className="button is-blue"
            id="shop now"
            onClick={() => history.push("/product/1467328")}
          >
            CLICK ME!
          </button>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default withRouter(MainSection);
