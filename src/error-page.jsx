import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  
  return (
    <div className="d-flex align-items-center flex-column justify-content-center h-100">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
