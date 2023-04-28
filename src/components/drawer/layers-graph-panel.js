import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLayers } from '../../context'
import { LineGraph } from '../graph'

export const LayersGraphPanel = ({ graphHeight }) => {
  const { layers, selectedLayers } = useLayers()

  const data = useMemo(() => {
    return selectedLayers
  }, [selectedLayers])

  return (
    <LineGraph data={ data } height={ graphHeight }/>
  )
}

LayersGraphPanel.propTypes = {
  graphHeight: PropTypes.string.isRequired,
}
