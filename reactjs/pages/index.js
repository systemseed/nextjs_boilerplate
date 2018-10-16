import React from 'react';
import GifPages from '../components/GifPages';

class Page extends React.Component {
  static async getInitialProps() {
    return {
      name: 'value',
    };
  }

  render() {
    return <GifPages />;
  }
}

export default Page;
