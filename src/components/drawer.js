import { Box, Button, Drawer as MuiDrawer } from '@mui/material'
import PropTypes from 'prop-types'

import { useLayout } from './layout'

const TOGGLER_HEIGHT = '2rem'
const DRAWER_MAX_HEIGHT = '400px'

export const Drawer = ({ children }) => {
  const { closeDrawer, drawerIsOpen, toggleDrawer } = useLayout()

  return (
    <MuiDrawer
      anchor="bottom"
      variant="permanent"
      open={ drawerIsOpen }
      onClose={ closeDrawer }
      ModalProps={{ keepMounted: true }}
      sx={{
        '.MuiBackdrop-root': {
          filter: 'opacity(0.0)',
          pointerEvents: 'none',
        },
        '.MuiDrawer-paper': {
          height: '100%',
          maxHeight: drawerIsOpen ? DRAWER_MAX_HEIGHT : TOGGLER_HEIGHT,
          transition: 'max-height 250ms',
          backgroundColor: 'grey',
          overflow: 'hidden',
        },
        '.toggler': {
          position: 'absolute',
          top: 0,
          zIndex: 99999,
          left: 0,
          borderRadius: 0,
          height: TOGGLER_HEIGHT,
        },
        '.content': {
          padding: '1rem',
          paddingTop: `calc(${ TOGGLER_HEIGHT } + 1rem)`,
        },
      }}
    >
      <Button
        fullWidth
        onClick={ toggleDrawer }
        className="toggler"
        color="primary"
        variant="contained"
      >- - -</Button>
      
      <Box className="content">
        { children }
        for now Consectetur in id laboris sit culpa minim ad labore excepteur nisi in dolore excepteur nisi do.
        Esse in consectetur incididunt labore duis exercitation in pariatur nulla labore in ut reprehenderit.
        Lorem ipsum eu aliquip dolor irure in incididunt proident culpa nostrud.
      </Box>
      
    </MuiDrawer>
  )
}

Drawer.propTypes = {
  children: PropTypes.node,
}
