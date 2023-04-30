import PropTypes from 'prop-types'
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip,
} from '@mui/material'
import {
  Map as OnMapIcon,
} from '@mui/icons-material'
import { useLayers } from '../../../../context'

export const Match = props => {
  const { id, name } = props
  const { layerIsSelected, toggleLayerSelection } = useLayers()

  return (
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={ () => toggleLayerSelection(id) }>
            <ListItemText
              primary={ name } primaryTypographyProps={{ color: 'primary' }}
            />
            {
              layerIsSelected(id) ? (
                <Tooltip title="Click to add to map" placement="left">
                  <ListItemIcon>
                    <OnMapIcon color="primary" />
                  </ListItemIcon>
                </Tooltip>
              ) : (
                <Tooltip title="Click to remove from map" placement="left">
                  <ListItemIcon>
                    <OnMapIcon color="disabled" />
                  </ListItemIcon>
                </Tooltip>
              )
            }
          </ListItemButton>
        </ListItem>
      </List>
  )
}

Match.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stormName: PropTypes.string.isRequired,
  grid: PropTypes.string.isRequired,
  instance: PropTypes.string.isRequired,
}

