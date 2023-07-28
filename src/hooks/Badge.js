import React from 'react';

export default function Badge(props){
    return(
        <button type="button" class="btn btn-primary">
    {props.name} <span class="badge text-bg-secondary">{props.count}</span>
  </button>
    )
}
