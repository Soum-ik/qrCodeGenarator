import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [value, setValue] = useState("");
  const [store, setStore] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleGenerate() {
    setStore(value);
  }

  return (
    <div className="root">
      <div className="center">
        <h1 className="h1">React Qr Code</h1>
        {store === "" ? (
          ". . ."
        ) : (
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "80%", width: "90%" }}
            value={store}
            viewBox={`0 0 256 256`}
          />
        )}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="inputField"
          placeholder="Enter your link"
        />
        <div>
          <button onClick={handleGenerate} type="button" className="btn">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
