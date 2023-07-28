import React from "react";
export default function Textareaaa(props){
    return(
        <div>
      <textarea
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      rows={props.rows}
      cols={props.cols}
      className='textarea' />
</div>
    )
}