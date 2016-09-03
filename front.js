import React from'react';
import ReactDOM from'react-dom';
import Home from './pages/home/home';

const pagesList = {
  'Home': Home
};

const initPage = () => {

  if(!window.pageComponent) return;

  const component = React.createElement(pagesList[window.pageComponent], window.pureData);
  ReactDOM.render(
      component,
			document.querySelector('.js-root')
  );
};

initPage();
