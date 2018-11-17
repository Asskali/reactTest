/* tslint:disable-next-line */
import React from 'react';
/* tslint:disable-next-line */
import Enzyme from 'enzyme';
/* tslint:disable-next-line */
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Wow from '../../src/components/Wow';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
it('shallow renders without crashing', () => {
  Enzyme.shallow(<Wow/>);
});
