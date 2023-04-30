import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardActions, IconButton, Typography } from '@mui/material'
import {
  Close as CloseIcon,
  ChevronRight as InspectIcon,
  Map as OnMapIcon,
  Delete as DeselectIcon,
} from '@mui/icons-material'
import { useLayers } from '../../context'

export const LayerCard = ({ id, title }) => {
  const { activeLayerId, setActiveLayerId, toggleLayerSelection, layerIsVisible, toggleLayerVisibility } = useLayers()

  const currentlyActive = useMemo(() => id == activeLayerId, [activeLayerId])

  return (
    <Card sx={{
      minHeight: '40px',
      backgroundColor: currentlyActive ? 'white' : 'darkgrey',
      color: currentlyActive ? '#000c' : '#fffc',
      transition: 'background-color 250ms, color 500ms',
      display: 'flex',
      '.actions': {
        padding: 0,
        gap: 0,
        backgroundColor: '#fff3',
        '.MuiButtonBase-root': {
          borderRadius: 0,
          m: 0,
          width: '40px',
          height: '45px',
          '& .selection-icon': {
            transition: 'color 250ms',
          },
          '&:hover .selection-icon': {
            color: 'crimson',
          }
        },
      },
    }}>
      <CardActions className="actions">
        <IconButton onClick={ () => toggleLayerVisibility(id) }>
          <OnMapIcon color={ layerIsVisible(id) ? 'primary' : 'disabled' } />
        </IconButton>
        <IconButton onClick={ () => toggleLayerSelection(id) }>
          <DeselectIcon color="disabled" fontSize="small" className="selection-icon" />
        </IconButton>
      </CardActions>
      <CardActionArea
        className="actionArea"
        onClick={ () => currentlyActive ? setActiveLayerId(null) : setActiveLayerId(id) }
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
          px: 1,
        }}
      >
        <Typography>{ title }</Typography>
        {
          currentlyActive ? (
              <CloseIcon color="warning" fontSize="small" />
          ) : (
              <InspectIcon />
          )
        }
      </CardActionArea>
    </Card>
  )
}

LayerCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
