import { Box } from '@mui/material'
import { useLayers } from '../context'

//

const stringifyReplacer = (key, value) => {
  if (key === 'data') {
    return 'OMITTED FOR SPACE'
  }
  return value
}

export const BaseMap = () => {
  const { visibleLayers } = useLayers()

  return (
    <Box sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      overflow: 'hidden',
      backgroundColor: '#eee',
      whiteSpace: 'pre-wrap',
      m: 0,
      height: '100%',
      '::before': {
        position: 'absolute',
        top: '33%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        width: '100%',
        height: '100%',
        content: '"MAP"',
        fontSize: 'clamp(100px, 33vw, 700px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#0001',
      },
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
              transform: `perspective(1000px) translate3d(${(i + 1) * 3}rem, ${(i + 1) * 2}rem, 0) rotateX(-30deg) rotateY(30deg)`,
              transition: 'transform 250ms',
            }}
          >
            { JSON.stringify(layer, stringifyReplacer, 2) }
          </Box>
        ))
      }
    </Box>
  )
}

            // { JSON.stringify(layer, ['id', 'name', 'opacity', 'date', 'cycle', 'grid', 'advisory', 'stormName', 'instance' ], 2) }