import { Box, Slider, Stack } from '@mui/material'
import { useLayers } from '../../context'

//

const GeneralDetails = () => {
  const { layers, selectedLayers } = useLayers()
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
      { selectedLayers.length } / { layers.length } selected layers are visible
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
        // border: '4px dashed crimson',
        overflow: 'hidden',
        '.main-content': {
          margin: 0,
          overflowY: 'auto',
          flex: 1,
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
