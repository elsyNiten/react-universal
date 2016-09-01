const React = require('react');

export default React.createClass({

  render: function() {

    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>author : {this.props.author.name} {this.props.author.lastname}</p>
      </div>
    );
  }
});
