import React from 'react';

import './styles.css';
function DevItem(props) {

  return (
    <li className="dev-item">
      <header>
        <img src={props.dev.avatar_url} alt={props.dev.name} />
        <div className="user-info">
          <strong>{props.dev.name}</strong>
          {/* <span>{dev.techs.join(', ')}</span> */}
        </div>
      </header>
      <p>{props.dev.bio}</p>
      <a href={`https://github.com/${props.dev.github_username}`}>Acessar perfil no Github</a>
    </li>
  );
}

export default DevItem;