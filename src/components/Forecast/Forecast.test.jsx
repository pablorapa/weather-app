import React from 'react'
import { render } from '@testing-library/react'
import Forecast from './Forecast'

const forecastItemList = [
    { hour: 10, state: 'sunny', temperature: 25, weekDay:'Lunes'},
    { hour: 15, state: 'cloud', temperature: 29, weekDay:'Lunes'},
    { hour: 20, state: 'rain', temperature: 18, weekDay:'Lunes'},
    { hour: 10, state: 'cloudy', temperature: 16, weekDay:'Martes'},
    { hour: 15, state: 'rain', temperature: 18, weekDay:'Martes'},
];

test('Forecast render', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />);
    const forecastItems = await findAllByTestId('forecast-item-container');

    expect(forecastItems).toHaveLength(5);
})