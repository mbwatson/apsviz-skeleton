import React, { useMemo } from "react";
import { Dialog as MuiDialog } from "@mui/material";
import { useLayout } from "../layout";
import { AdcircForm, EcflowForm } from './forms'

const DIALOGS = {
  'adcirc': <AdcircForm />,
  'ec-flow': <EcflowForm />,
}

export const SelectionDialog = () => {
  const { activeDialog, dialogIsOpen, closeDialog } = useLayout();

  const DialogContents = useMemo(() => {
    if (!activeDialog) {
      return <div>An error occurred.</div>
    }
    return DIALOGS[activeDialog]
  }, [activeDialog])

  return (
    <MuiDialog
      open={dialogIsOpen}
      onClose={closeDialog}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: {
        minHeight: '600px',
      } }}
    >
      {DialogContents}
    </MuiDialog>
  );
};
