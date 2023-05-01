import { Box, Slider, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useLayers } from '../../../context'
import { GeneralDetails } from './general-details'

//

export const ActiveLayerDetails = () => {
  const { activeLayer, getLayerOpacity, setLayerOpacity } = useLayers()

  const handleChangeOpacity = (event, value) => {
    setLayerOpacity(activeLayer.id, value)
  }

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      sx={{
        height: '100%',
        overflow: 'hidden',
        '.main-content': {
          margin: 0,
          overflowY: 'auto',
          flex: 1,
          p: 1,
        },
        '.slider-container': {
          backgroundColor: 'lightgrey',
          height: '100%',
          padding: '1rem 0'
        }
      }}
    >
      <pre className="main-content">
        { JSON.stringify(activeLayer, null, 2) }
      </pre>
      <Box className="slider-container">
        <Slider
          aria-label="Opacity"
          orientation="vertical"
          step={ 0.01 }
          min={ 0.0 }
          max={ 1.0 }
          valueLabelFormat={ x => `Opacity: ${ x }%` }
          valueLabelDisplay="auto"
          value={ getLayerOpacity(activeLayer.id) }
          onChange={ handleChangeOpacity }
        />
      </Box>
    </Stack>
  )
}