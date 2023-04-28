import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { useLayers } from '../context'

//

export const BaseMap = () => {
  const { selectedLayers } = useLayers()

  return (
    <Box sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      overflow: 'hidden',
      backgroundColor: '#fff',
      whiteSpace: 'pre-wrap',
      m: 0,
      height: '100%',
    }}>
      {
        selectedLayers.map((layer, i) => (
          <Box
            key={ `map-layer-${ layer.id }` }
            component="pre"
            sx={{
              filter: `opacity(${ layer.opacity })`,
              position: 'absolute',
              top: '5rem',
              left: '25%',
              backgroundColor: layer.color,
              border: '2px solid #222',
              padding: '8px',
              transform: `perspective(1000px) translate3d(${i*3}rem, ${i*2}rem, 0) rotateX(-30deg) rotateY(30deg)`,
              transition: 'transform 250ms',
            }}
          >
            { JSON.stringify(layer, null, 2) }
          </Box>
        ))
      }
    </Box>
  )
}
