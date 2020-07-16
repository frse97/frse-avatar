import React from "react";

const FrseAvatar: React.FC = props => {
  return (
    <div className={`profile`}>
      <div className={`profile__group`}>
        <div className={`group__hair`} />
        <div className={`group__hair--part-one`} />
        <div className={`group__hair--part-two`} />
        <div className={`group__hair--part-tree`} />
        <div className={`group__hair--part-four`} />
        <div className={`group__hair--part-five`} />
        <div className={`group__hair--part-six`} />
        <div className={`group__hair--part-seven`} />
        <div className={`group__hair--part-eight`} />
        <div className={`group__ear-left`}>
          <div className={`group__ear-left__earing`} />
        </div>
        <div className={`group__ear-right`}>
          <div className={`group__ear-right__earing`} />
        </div>
        <div className={`group__fringe--part-one`} />
        <div className={`group__fringe--part-two`} />
        <div className={`group__fringe--part-tree`} />
        <div className={`group__face`} />
        <div className={`group__eyebrown`} />
        <div className={`group__eye`} />
        <div className={`group__blush`} />
        <div className={`group__nose`} />
        <div className={`group__nose-part-one`} />
        <div className={`group__mouth`}>
          <div className={`group__tongue`} />
        </div>
        <div className={`group__neck`} />
        <div className={`group__body`} />
      </div>
    </div>
  );
};

FrseAvatar.defaultProps = {
  theme: "default"
};

export default FrseAvatar;
