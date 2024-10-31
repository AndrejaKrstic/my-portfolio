import React from "react";
import style from "./ProcessStepSection.module.css";
import ImageComponent from "./ImageComponent";
import { FormattedMessage } from "react-intl";

export default function ProcessStepSection() {
  return (
    <div className={style.developProcessSection}>
      <h2 className={style.developProcessTitle}>
        <FormattedMessage id="home-page-process-title" />
      </h2>
      <div className={style.processStep}>
        <div className={style.stepNumber}>1</div>
        <div className={style.stepImageContainer}>
          <ImageComponent
            classes={style.stepImage}
            publicId="consult-process-step"
          />
        </div>
        <div className={style.stepText}>
          <FormattedMessage id="home-page-process-step-one" />
        </div>
      </div>
      <div className={style.processStep}>
        <div className={style.stepNumber}>2</div>
        <div className={style.stepImageContainer}>
          <ImageComponent
            classes={style.stepImage}
            publicId="design-process-step"
          />
        </div>
        <div className={style.stepText}>
          <FormattedMessage id="home-page-process-step-two" />
        </div>
      </div>
      <div className={style.processStep}>
        <div className={style.stepNumber}>3</div>
        <div className={style.stepImageContainer}>
          <ImageComponent
            classes={style.stepImage}
            publicId="develop-process-step"
          />
        </div>
        <div className={style.stepText}>
          <FormattedMessage id="home-page-process-step-three" />
        </div>
      </div>
      <div className={style.processStep}>
        <div className={style.stepNumber}>4</div>
        <div className={style.stepImageContainer}>
          <ImageComponent
            classes={style.stepImage}
            publicId="launch-process-step"
          />
        </div>
        <div className={style.stepText}>
          <FormattedMessage id="home-page-process-step-four" />
        </div>
      </div>
    </div>
  );
}
