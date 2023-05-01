import { useMemo } from 'react'
import { Box } from '@mui/material'
import { useLayers } from '../../../../context'
import { LineGraph } from '../../../graph'

export const GraphTab = () => {
  const { activeLayer } = useLayers()

  console.log(activeLayer.data)

  const data = useMemo(() => {
    return activeLayer?.data || []
  }, [activeLayer])

  return (
    <Box sx={{ height: '294px' }}>
      <LineGraph data={ data } height="294px" />
    </Box>
  )
}
