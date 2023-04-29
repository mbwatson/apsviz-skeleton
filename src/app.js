import { Layout } from './components/layout'
import { BaseMap } from './components/map'
import { LayersProvider } from './context'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <LayersProvider>
        <Layout>
          <BaseMap />
        </Layout>
      </LayersProvider>
    </LocalizationProvider>
  )
}

