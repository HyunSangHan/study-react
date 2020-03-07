import React from "react"

const VisitBlog = ({ id, className }) => {
  return (
    <a
      href="https://tillog.netlify.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div id={id} className={className}>
        Why don’t you visit my blog?
      </div>
    </a>
  )
}

export default VisitBlog
