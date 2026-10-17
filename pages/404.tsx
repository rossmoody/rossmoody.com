import { ErrorMessage } from 'components/ErrorMessage'

const NotFound = () => (
  <ErrorMessage
    title="Page not found"
    description="That page doesn't exist or has moved."
  />
)

export default NotFound
