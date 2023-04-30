import { Box } from '@mui/material'
import { useLayers } from '../context'

//

export const BaseMap = () => {
  const { visibleLayers } = useLayers()

  const replacer = (key, value) => {
    if (key === 'data') {
      return 'OMITTED FOR SPACE'
    }
    return value
  }

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
        visibleLayers.map((layer, i) => (
          <Box
            key={ `map-layer-${ layer.id }` }
            component="pre"
            sx={{
              filter: `opacity(${ layer.opacity })`,
              position: 'absolute',
              top: '15%',
              left: '25%',
              backgroundColor: layer.color,
              border: '2px solid #222',
              padding: '8px',
              transform: `perspective(1000px) translate3d(${i*3}rem, ${i*2}rem, 0) rotateX(-30deg) rotateY(30deg)`,
              transition: 'transform 250ms',
            }}
          >
            { JSON.stringify(layer, replacer, 2) }
          </Box>
        ))
      }
    </Box>
  )
}

            // { JSON.stringify(layer, ['id', 'name', 'opacity', 'date', 'cycle', 'grid', 'advisory', 'stormName', 'instance' ], 2) }