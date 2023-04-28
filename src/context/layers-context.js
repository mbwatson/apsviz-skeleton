import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types'
import { dummyLayers } from '../data'

export const LayersContext = createContext({});

export const useLayers = () => useContext(LayersContext);

export const LayersProvider = ({ children }) => {
  const [layers, setLayers] = useState([...dummyLayers]);
  const [activeLayerId, setActiveLayerId] = useState(null)

  const activeLayer = useMemo(() => {
    const index = layers.findIndex(layer => layer.id === activeLayerId)
    if (index < 0) {
      return null
    }
    return layers[index]
  }, [activeLayerId])

  const toggleLayerSelection = layerId => (event, value) => {
    const index = layers.findIndex(layer => layer.id === layerId)
    if (index < 0) {
      return
    }
    let newLayers = [...layers]
    newLayers[index].selected = value
    setLayers(newLayers)
  }

  const selectedLayers = useMemo(() => layers.filter(layer => layer.selected), [layers])

  const getLayerOpacity = layerId => {
    const index = layers.findIndex(layer => layer.id === layerId)
    if (index < 0) {
      return undefined
    }
    return layers[index].opacity
  }

  const setLayerOpacity = (layerId, newOpacity) => {
    const index = layers.findIndex(layer => layer.id === layerId)
    if (index < 0) {
      return
    }
    let newLayers = [...layers]
    newLayers[index].opacity = newOpacity
    setLayers(newLayers)
  }

  return (
    <LayersContext.Provider
      value={{
        layers,
        selectedLayers,
        toggleLayerSelection,
        activeLayer,
        activeLayerId,
        setActiveLayerId,
        getLayerOpacity,
        setLayerOpacity,
      }}
    >
      {children}
    </LayersContext.Provider>
  );
};


LayersProvider.propTypes = {
  children: PropTypes.node,
}
