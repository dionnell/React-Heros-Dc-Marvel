import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const Heroes = () => {
  return (
    <AuthProvider>
    
      <AppRouter />
    </AuthProvider>

  )
}
