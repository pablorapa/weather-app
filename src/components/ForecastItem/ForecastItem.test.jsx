import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render', async () => {

    const { findByText } = render(<ForecastItem weekDay='Lunes' hour={10} state='sunny' temperature={25}/>)

    const weekDay = await findByText('Lunes');
    const hour = await findByText(/10/);
    const temperature = await findByText(/25/);

    expect(weekDay).toHaveTextContent('Lunes');
    expect(hour).toHaveTextContent('10');
    expect(temperature).toHaveTextContent('25°');
})