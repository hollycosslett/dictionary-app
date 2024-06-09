import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section>
        <div className="Images">
          <div className="row m-0">
            {props.images.map(function (image, index) {
              return (
                <div className="col-md-4 img-gallery" key={index}>
                  <img src={image.src.landscape} alt="" className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
