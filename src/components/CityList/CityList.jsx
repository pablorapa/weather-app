import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { Grid } from '@mui/material'
import { List, ListItem } from '@mui/material'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry;
    return (
        <ListItem key={city} onClick={eventOnClickCity} button>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
        {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList