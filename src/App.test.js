import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Implementar o componente <App />', () => {
  it('Mostrar o componente <Header />', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('Mostrar o componente <MovieLibrary />', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('MovieLibrary').length).toEqual(1);
  });
});
