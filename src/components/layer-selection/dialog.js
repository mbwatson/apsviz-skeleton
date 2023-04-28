import React, { createContext, useCallback, useContext, useState } from "react";
import PropTypes from 'prop-types'
import { Button, Dialog as MuiDialog, DialogContent } from "@mui/material";
import { useLayout } from "../layout";
import { SynopticLayerSelectionForm, TropicalLayerSelectionForm } from './forms'

export const SelectionDialog = ({ children }) => {
  const { activeDialog, dialogIsOpen, closeDialog } = useLayout();

  const DialogContents = useCallback(() => {
    if (activeDialog === 'ADCIRC') {
      return <SynopticLayerSelectionForm />
    }
    if (activeDialog === 'EC FLOW') {
      return <TropicalLayerSelectionForm />
    }
    return 'none'
  }, [activeDialog])

  return (
    <MuiDialog
      open={dialogIsOpen}
      onClose={closeDialog}
      sx={{ zIndex: 999 }}
    >
      <DialogContent>
        <DialogContents />
      </DialogContent>
    </MuiDialog>
  );
};


SelectionDialog.propTypes = {
  children: PropTypes.node,
}
