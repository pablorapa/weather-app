import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: 'Buenos Aires', country: 'Argentina'},
    {city: 'Madrid', country: 'España'},
    {city: 'Venado Tuerto', country: 'Argentina'}
];

test('CityList render', async () => {
    const fnClickOnItem = jest.fn();
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)
    
    const cityAndCountryList = await findAllByRole('listitem');

    expect(cityAndCountryList).toHaveLength(3);

});

test('CityList click on item', async () => {
    const fnClickOnItem = jest.fn();

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);

    const items = await findAllByRole('listitem');

    fireEvent.click(items[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1);

});