import React from 'react';
import style from './article.css';

export default React.createClass({

  render: function() {

    return (
      <div className={style.article} onClick={ () => alert('toto') }>
        <h3>{this.props.title}</h3>
        <p>author : {this.props.author.name} {this.props.author.lastname}</p>
      </div>
    );
  }
});
