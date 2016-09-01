import React from 'react';

export default React.createClass({

  render: function() {
    return (

        <html lang="fr">

          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta name="MobileOptimized" content="320"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <script dangerouslySetInnerHTML={{__html: 'window.pureData = ' + JSON.stringify(this.props.pureData)}} />
          </head>
        	<body>
            {this.props.children}
          </body>
        </html>
    );
  }
});
