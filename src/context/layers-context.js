import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types'
import { dummyLayers } from '../data'

export const LayersContext = createContext({});

export const useLayers = () => useContext(LayersContext);

export const LayersProvider = ({ children }) => {
  const [layers, setLayers] = useState([...dummyLayers])
  const [selectedLayerIds, setSelectedLayerIds] = useState([])
  const [activeLayerId, setActiveLayerId] = useState(null)

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

  const layerIsSelected = layerId => selectedLayerIds.includes(layerId)
  
  const toggleLayerSelection = layerId => {
    let newSelectedLayerIds = [...selectedLayerIds]
    if (layerIsSelected(layerId)) {
      newSelectedLayerIds = [...newSelectedLayerIds.filter(id => id !== layerId)]
    } else {
      newSelectedLayerIds = [...newSelectedLayerIds, layerId]
    }
    setSelectedLayerIds(newSelectedLayerIds)
  }

  const selectedLayers = useMemo(() => layers.filter(layer => layerIsSelected(layer.id), [selectedLayerIds]))

  const toggleLayerVisibility = layerId => (event, value) => {
    const index = layers.findIndex(layer => layer.id === layerId)
    if (index < 0) {
      return
    }
    let newLayers = [...layers]
    newLayers[index].visible = value
    setLayers(newLayers)
  }

  const visibleLayers = useMemo(() => selectedLayers.filter(layer => layer.visible), [layers, selectedLayers])

  const activeLayer = useMemo(() => {
    const index = layers.findIndex(layer => layer.id === activeLayerId)
    if (index < 0) {
      return null
    }
    return layers[index]
  }, [activeLayerId])

  return (
    <LayersContext.Provider
      value={{
        layers,
        visibleLayers, toggleLayerVisibility,
        activeLayer, activeLayerId, setActiveLayerId,
        getLayerOpacity, setLayerOpacity,
        selectedLayers, selectedLayerIds, setSelectedLayerIds, layerIsSelected, toggleLayerSelection,
      }}
    >
      {children}
    </LayersContext.Provider>
  );
};


LayersProvider.propTypes = {
  children: PropTypes.node,
}
