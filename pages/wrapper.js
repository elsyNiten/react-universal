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
            <link href="/style.bundle.css" rel="stylesheet" type="text/css" />
            <script dangerouslySetInnerHTML={{__html: `window.pureData = ${this.props.pureData};` }} />
            <script dangerouslySetInnerHTML={{__html: `window.pageComponent = '${this.props.component}';` }} />
          </head>
        	<body>
            <div className="js-root" dangerouslySetInnerHTML={{__html: this.props.children}}>
            </div>
            <script src="/front.bundle.js"/>
          </body>
        </html>
    );
  }
});
