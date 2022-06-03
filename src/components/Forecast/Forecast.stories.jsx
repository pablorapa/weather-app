import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItemList = [
    { hour: 10, state: 'sunny', temperature: 25, weekDay:'Lunes'},
    { hour: 15, state: 'cloud', temperature: 29, weekDay:'Lunes'},
    { hour: 20, state: 'rain', temperature: 18, weekDay:'Lunes'},
    { hour: 10, state: 'cloudy', temperature: 16, weekDay:'Martes'},
    { hour: 15, state: 'rain', temperature: 18, weekDay:'Martes'},
];
export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}/>