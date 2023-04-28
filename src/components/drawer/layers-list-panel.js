import { Stack } from '@mui/material'
import { LayerCard } from './layer-card'
import { useLayers } from '../../context'

export const LayersListPanel = () => {
  const { layers, toggleLayerSelection } = useLayers()

  return (
    <Stack
      spacing={ 1 }
      padding={ 1 }
      useFlexGap
      sx={{
        overflowY: 'auto',
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
      }}
    >
      {
        layers.map(({ id, name, selected }) => (
          <LayerCard
            key={ `layer-card-${ id }` }
            id={ id }
            title={ name }
            selected={ selected }
            clickHandler={ toggleLayerSelection(id) }
          />
        ))
      }
    </Stack>
  )
}