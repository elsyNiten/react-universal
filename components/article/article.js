const React = require('react');
  var x = require("./article.css");

export default React.createClass({

  render: function() {

    return (
      <div className={x.article}>
        <h3>{this.props.title}</h3>
        <p>author : {this.props.author.name} {this.props.author.lastname}</p>
      </div>
    );
  }
});
