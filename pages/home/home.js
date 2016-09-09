import React from 'react';
//components
import Banner from "components/banner/banner";
import ArticlesList from "components/articlesList/articlesList";

export default React.createClass({

  render: function() {
    return (
      <div>
      	<Banner
    			title={this.props.title}
    			subtitle={this.props.subtitle}
    			image={this.props.image} />
        <ArticlesList articles={this.props.articles} />
      </div>
    );
  }
});
