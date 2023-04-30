import { Box, Slider, Stack, Typography } from '@mui/material'
import { useLayers } from '../../context'

//

const GeneralDetails = () => {
  const { selectedLayers, visibleLayers } = useLayers()
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
      <Typography paragraph>
        selected layers: { selectedLayers.length }
      </Typography>
      <Typography paragraph>
        visible layers: { visibleLayers.length }
      </Typography>
    </Box>
  )
}

//

const ActiveLayerDetails = () => {
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

//

export const LayerDetailPanel = () => {
  const { activeLayerId } = useLayers()

  return activeLayerId
    ? <ActiveLayerDetails />
    : <GeneralDetails />
}
