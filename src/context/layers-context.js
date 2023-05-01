import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types'
import { dummyLayers } from '../data'

export const LayersContext = createContext({});

export const useLayers = () => useContext(LayersContext);

export const LayersProvider = ({ children }) => {
  const [layers, setLayers] = useState([...dummyLayers])
  const [selectedLayerIds, setSelectedLayerIds] = useState(new Set())
  const [visibleLayerIds, setVisibleLayerIds] = useState(new Set())
  const [activeLayerId, setActiveLayerId] = useState(null)

  // layer selection
  const layerIsSelected = layerId => selectedLayerIds.has(layerId)
  const toggleLayerSelection = layerId => {
    let newSelectedLayerIds = new Set([...selectedLayerIds])
    let newVisibleLayerIds = new Set([...visibleLayerIds])
    if (newSelectedLayerIds.has(layerId)) {
      newSelectedLayerIds.delete(layerId)
      newVisibleLayerIds.delete(layerId)
    } else {
      newSelectedLayerIds.add(layerId)
      newVisibleLayerIds.add(layerId)
    }
    setSelectedLayerIds(new Set([...newSelectedLayerIds]))
    setVisibleLayerIds(new Set([...newVisibleLayerIds]))
  }
  const selectedLayers = useMemo(() => layers.filter(layer => layerIsSelected(layer.id)), [selectedLayerIds])

  // layer visibility
  const layerIsVisible = layerId => visibleLayerIds.has(layerId)
  const toggleLayerVisibility = layerId => {
    let newVisibleLayerIds = new Set([...visibleLayerIds])
    if (newVisibleLayerIds.has(layerId)) {
      newVisibleLayerIds.delete(layerId)
    } else {
      newVisibleLayerIds.add(layerId)
    }
    setVisibleLayerIds(new Set([...newVisibleLayerIds]))
  }
  const visibleLayers = useMemo(() => layers.filter(layer => layerIsVisible(layer.id)), [visibleLayerIds])

  // layer activity
  const activeLayer = useMemo(() => {
    const index = layers.findIndex(layer => layer.id === activeLayerId)
    if (index < 0) {
      return null
    }
    return layers[index]
  }, [activeLayerId])

  // opacity
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
        visibleLayers, layerIsVisible, toggleLayerVisibility,
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
