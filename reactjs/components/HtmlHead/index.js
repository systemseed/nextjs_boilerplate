import React from 'react';
import Head from 'next/head';
import Package from '../../package';
import inlineCSS from '../../styles/theme.scss';

const HtmlHead = () => {
  let stylesheets;

  if (process.env.NODE_ENV === 'production') {
    // In production, serve pre-built CSS file from /assets/{version}/main.css
    const pathToCSS = `/assets/${Package.version}/main.css`;
    stylesheets = <link rel="stylesheet" type="text/css" href={pathToCSS} />;
  }
  else {
    // eslint-disable-next-line react/no-danger
    stylesheets = <style dangerouslySetInnerHTML={{ __html: inlineCSS }} />;
  }

  return (
    <Head>
      <title>
SystemSeed Technical Assessment
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="shortcut icon" href="/static/favicon.ico" type="image/vnd.microsoft.icon" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
      {stylesheets}
    </Head>
  );
};

export default HtmlHead;
