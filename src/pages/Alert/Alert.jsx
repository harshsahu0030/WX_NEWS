import React from "react";
import "./Alert.css";
import MetaData from "../../components/MetaData";

const Alert = () => {
  return (
    <div className="alert">
      <MetaData title={`ALERT -- WX_NEWS`} />

      <h1>No Alert yet</h1>
    </div>
  );
};

export default Alert;
