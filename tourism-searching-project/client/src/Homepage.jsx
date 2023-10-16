import React, { useState } from "react";
import "./App.css";
import DisplayItems from "./Display-items";

export const Homepage = () => {
  const [input, setInput] = useState("");

  const handleInputSearch = (event) => {
    setInput(event.target.value);
  };

  return (
    <body>
    <div className="container">
      <div className="title-box">🏖️🏝️ ไปเที่ยวไหนดี 🍹🌞</div>
      <div className="searching-box">
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="input">
            <input
              className="input-box"
              type="text"
              placeholder="พิมพ์ค้นหาที่เที่ยวได้ที่นี่ ..."
              value={input}
              onChange={handleInputSearch}
            />
          </label>
        </form>
        <div className="magniglass">⌕</div>
      </div>
      <div className="subtitle">หาที่เที่ยวเสร็จแล้ว รีบออกเดินทางกัน 😊</div>
      <hr />
      <div className="display-list">
        <DisplayItems input={input}/>
      </div>
    </div>
    </body>
  );
};

export default Homepage;
