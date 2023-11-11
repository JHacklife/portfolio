import React from 'react'

const PDFVisor = ({ docURL, src }) => {
  return (
    <iframe
      id="iframe-target"
      frameBorder="0"
      src={`${!!docURL ? `https://docs.google.com/gview?url=${docURL}&embedded=true` : src}#toolbar=0&chrome=true`}
      allowFullScreen
      height="300px"
      width="100%"
    />
  )
}

export default PDFVisor
