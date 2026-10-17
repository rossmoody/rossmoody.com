import { ErrorMessage } from 'components/ErrorMessage'
import { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <ErrorMessage
      title="Something went wrong"
      description={
        statusCode
          ? `The server ran into a ${statusCode} error.`
          : 'An error occurred in the browser.'
      }
    />
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
