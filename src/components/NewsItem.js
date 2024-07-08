import React, { Component } from "react";

export default class  NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
       
        <div className="card" style={{ position: 'relative' }}>
            <div style={{display:"flex",justifyContent:'flex-end', position:'absolute',right:'0'}}>
               <span className=" badge rounded-pill bg-danger" >{source}</span>
             </div>
          <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/1365/live/424fb0e0-2a94-11ef-a392-bbae7f2e2112.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge text-bg-secondary">New</span> </h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"> <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small> </p>
            <a rel="norefernce" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Know more...?
            </a>
          </div>
        </div>
        
      </div>
    );
  }
}
