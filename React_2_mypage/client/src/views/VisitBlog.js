import React from "react"
import backgroudImg from "../images/coding.jpg"

const fitCoverImage = imgName => {
  return {
    backgroundImage: "url(" + imgName + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
}

const VisitBlog = ({ id, className }) => {
  return (
    <a
      href="https://tillog.netlify.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div id={id} className={className}>
        <div style={fitCoverImage(backgroudImg)} className="w-100 h-100">
          <div className="ad-frontground"></div>
          <div className="ad-font font-new">Why don’t you visit my blog?</div>
        </div>
      </div>
    </a>
  )
}

export default VisitBlog
