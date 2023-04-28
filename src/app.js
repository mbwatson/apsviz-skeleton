import { Layout } from './components/layout'
import { BaseMap } from './components/map'
import { LayersProvider } from './context'

export const App = () => {
  return (
    <LayersProvider>
      <Layout>
        <BaseMap />
      </Layout>
    </LayersProvider>
  )
}

