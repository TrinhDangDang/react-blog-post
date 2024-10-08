import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Only import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App /> {/* App will handle routing inside */}
    </Router>
  </React.StrictMode>
);




//npm install react-router-dom -S: install the React Router DOM library, which add client-sdie routing to React applications, provide routing rools for React applications 

//BrowserRouter wraps your react app and enables navigation between different pages without reloading the page.
//Route: Defines which component to show based on the URL path.


// <Route path="/" when URL path is /, element={<App/>}: the App component will be shown/rendered. 


    // the <Router> (like BrowserRouter in React) does not reload the entire page. Instead, it enables client-side navigation by rendering different components based on the URL without refreshing the page.

    // What it actually does:
    // Changes the view by rendering different components when the URL changes.
    // The page itself (HTML document) is not reloaded; only the relevant part (React components) is updated.