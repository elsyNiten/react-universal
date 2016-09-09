import React from 'react';

import Article from "components/article/article";

export default React.createClass({

  render: function() {
    return (
      <div>
        {this.props.articles.map( item => <Article key={item.id} title={item.title} author={item.author} /> )}
      </div>
    );
  }
});
