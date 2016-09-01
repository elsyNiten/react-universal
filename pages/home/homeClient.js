import React from'react';
import ReactDOM from'react-dom';

//component
import Home from "./home";

export default ReactDOM.render(
      <Home {...window.pureData} />,
			document.querySelector('.js-Home')
  );
