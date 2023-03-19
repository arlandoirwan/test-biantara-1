import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClinet = new QueryClient()
function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClinet}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default App
