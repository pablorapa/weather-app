import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import IconState, { validValues } from '../IconState'

const Weather = ({ temperature, state }) => {
  return (
    <>
        <IconContext.Provider value={{size:'5em'}}>
            <IconState state={state} />
        </IconContext.Provider>        
        <Typography display="inline" variant="h3">{temperature}</Typography>
    </>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather