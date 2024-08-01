import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We are And What Special Treatment We Offers</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          inventore quae in perspiciatis cupiditate? Quis aperiam corporis,
          ipsam, sunt vero dignissimos neque sed provident perspiciatis aliquid
          sint porro, illum beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          laborum!
        </p>
        <p>Lorem ipsum dolor sit.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          accusamus cum reiciendis maiores quod, ullam tempora accusantium quo
          unde soluta exercitationem pariatur hic magni, quos temporibus quas
          corporis doloremque blanditiis porro fugiat! Adipisci fugit earum
          facere voluptatibus, numquam accusamus ratione repellendus temporibus
          itaque sequi aliquid quidem nulla quae consequatur maiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          dolore?
        </p>
      </div>
    </div>
  );
};

export default Biography;
