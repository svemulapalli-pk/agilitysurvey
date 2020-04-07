import React from "react";

export const Header = () => {
    return (
        <div className="survey-page__header">
            <div className="survey-page__logo">
                <img src={require('../assets/images/PKonnect_Header_Image.png')} alt="header-logo" />
            </div>
        </div>
    );
};