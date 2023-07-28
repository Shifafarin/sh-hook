import React from 'react';

const Dropdown = (props) => {
return(
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {props.value}
  </button>
  <ul class="dropdown-menu">
  {props.items.map((item, index) => (
        <li key={index}>
          <a className="dropdown-item" href={item.url}>
            {item.text}
          </a>
        </li>
      ))}
  </ul>
</div>
)
}
export default Dropdown;