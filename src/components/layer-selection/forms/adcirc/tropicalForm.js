import { useRef } from 'react'
import {
  Button, Stack,
} from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { tropicalSchema as schema, defaults } from './config'
import {
  DateField,
  CycleField,
  GridField,
  InstanceField,
} from './fields'

export const TropicalLayerSelectionForm = () => {
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
      <Stack spacing={ 2 } component="form" ref={ formRef }>
        <DateField />
        <CycleField />
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
