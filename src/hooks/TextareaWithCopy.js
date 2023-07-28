import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
const TextareaWithCopy = (props) => {
  const handleCopyClick = () => {
    var txt=document.getElementById('textarea').value;
        console.log(txt)
        navigator.clipboard.writeText(txt);
        // Show the tooltip for 1.5 seconds
    document.getElementById('copy-icon').setAttribute('data-bs-original-title', 'Text copied');
    const tooltip = new bootstrap.Tooltip(document.getElementById('copy-icon'), {
      placement: 'top',
    });

    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  };

  return (
    <div style={{ position: 'relative' }}>
      <textarea
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        id="textarea"
        readOnly
        className="form-control"
      />
  <FontAwesomeIcon
        id="copy-icon"
        icon={faCopy}
        onClick={handleCopyClick}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '0.5rem',
          background: 'transparent',
          border: 'none',
          color: 'blue', // Customize the color as needed
          cursor: 'pointer',
        }}
        data-bs-toggle="tooltip"
      />  </div>
  );
};

export default TextareaWithCopy;