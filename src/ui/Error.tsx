/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError() as any;
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
