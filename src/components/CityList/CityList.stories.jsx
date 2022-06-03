import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions';

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    {city: 'Buenos Aires', country: 'Argentina'},
    {city: 'Madrid', country: 'España'},
    {city: 'Venado Tuerto', country: 'Argentina'}
];

export const CityListExample = () => (<CityList cities={cities} onClickCity={action('Click en city')}/>)