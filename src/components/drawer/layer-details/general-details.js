import { Box, Typography } from '@mui/material'
import { useLayers } from '../../../context'

//

export const GeneralDetails = () => {
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