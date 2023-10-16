import React, { useState, useEffect } from "react";
import axios from "axios";
import './style-display-items.css';

const DisplayItems = ({ input }) => {
  const [displaySearch, setDisplaySearch] = useState([]);

  const handleSearch = async (searchInput) => {
    const result = await axios.get(`http://localhost:4001/trips?keywords=${searchInput}`);
    setDisplaySearch(result.data.data);
  };

  useEffect(() => {
    handleSearch(input); 
  }, [input]);

  return (
    <div className="display-container">
      <div className="display-list">
        {displaySearch.map(({ eid, url, title, description, tags, photos }) => (
          <div key={eid} className="item">
            <div className="big-thumbnail">
              {photos && photos.length > 0 && (
                <img className="main-thumbnail" width={400} height={300} src={photos[0]} alt="Main-thumbnail" />
              )}
            </div>
            <div className="trip-info">
              <div className="trip-title">{title}</div>
              <div className="trip-descr">{description.slice(0, 100)}</div>
              <div className="link-info">
                <a href={url}>อ่านต่อ</a>
              </div>
              <div className="tags">
                <b>Tag:</b>
                {tags.map((tag, index) => (
                  <div key={index} className="tag">
                  {tag}
                  </div>
                ))}
              </div>
              <div className="thumbnail-box">
                {photos.map((thumbnail, index) => (
                  <div className={`thumbnail${index + 1}`} key={index}>
                    <img className="box" width={100} height={100} src={thumbnail} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayItems;
