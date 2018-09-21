import React from 'react';
import Helmet from 'react-helmet';
import '../styles/globalStyles';

export default ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta
        name="description"
        content="Personal Website for Marcel Michau - I just filled this in for better SEO :)"
      />
      <title>Marcel Michau - I write code & stuff</title>
    </Helmet>
    <div>{children}</div>
  </div>
);
