import React from 'react';
import style from './article.css';

export default React.createClass({

  render: function() {

    return (
      <div className={style.article} onClick={ () => alert('toto') }>
        <h3 className={style.title} >{this.props.title}</h3>
        <p className={style.author} >{this.props.author.name} {this.props.author.lastname}</p>
      </div>
    );
  }
});
