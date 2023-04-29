import { useRef } from 'react'
import { Button, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { synopticSchema as schema, defaults } from './config'
import {
  AdvisoryField,
  GridField,
  InstanceField,
  StormNameField,
} from './fields'

export const SynopticLayerSelectionForm = () => {
  const formRef = useRef()

  const methods = useForm({
    schema,
    resolver: yupResolver(schema),
    defaultValues: { ...defaults },
  })

  const submitHandler = () => {
    const data = new FormData(formRef.current)
    console.log(data)
  }

  return (
    <FormProvider { ...methods }>
      <Stack
        spacing={ 2 }
        component="form"
        ref={ formRef }
      >
        <AdvisoryField />
        <StormNameField />
        <GridField />
        <InstanceField />
        <Button
          variant="contained"
          onClick={ submitHandler }
        >Search</Button>
      </Stack>
    </FormProvider>
  )
}
