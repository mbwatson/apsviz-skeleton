import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Box, Checkbox, Card, CardContent, IconButton } from '@mui/material'
import {
  Close as CloseIcon,
  VisibilityOff as HiddenIcon,
  ChevronRight as InspectIcon,
  Visibility as VisibleIcon,
} from '@mui/icons-material'
import { useLayers } from '../../context'

export const LayerCard = ({ id, title, clickHandler, selected }) => {
  const { activeLayerId, setActiveLayerId } = useLayers()

  const currentlyActive = useMemo(() => id == activeLayerId, [activeLayerId])

  return (
    <Card sx={{
      minHeight: '40px',
      backgroundColor: currentlyActive ? 'white' : 'darkgrey',
      color: currentlyActive ? '#000c' : '#fffc',
      transition: 'background-color 250ms, color 500ms',
      position: 'relative',
      '.actions': {
        backgroundColor: '#fff3',
        position: 'absolute',
        top: 0,
        right: 0,
        '.MuiButtonBase-root': {
          borderRadius: 0,
          width: '40px'
        },
      },
    }}>
      <CardContent>
        { title }
      </CardContent>
      <Box className="actions">
        <Checkbox
          label={ `Select layer: ${ title }` }
          className="checkbox"
          icon={ <HiddenIcon /> }
          checkedIcon={ <VisibleIcon /> }
          data-layer={ id }
          onChange={ clickHandler }
          checked={ selected }
        />
        {
          currentlyActive ? (
            <IconButton onClick={ () => setActiveLayerId(null) }>
              <CloseIcon color="warning" fontSize="small" />
            </IconButton>
          ) : (
            <IconButton onClick={ () => setActiveLayerId(id) }>
              <InspectIcon />
            </IconButton>
          )
        }
      </Box>
    </Card>
  )
}

LayerCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}
