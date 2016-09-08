import React from 'react';
import style from './banner.css';

export default React.createClass({

  render: function() {
    return (
      <div>
        <h1 className={style.title}>{this.props.title}</h1>
        <h2 className={style.subtitle}>{this.props.subtitle}</h2>
        <img className={style.image} alt={this.props.image.alt} src={this.props.image.url} />
      </div>
    );
  }
});
