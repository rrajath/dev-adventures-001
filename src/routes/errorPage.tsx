import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="error-page">
      <div className='error-title'>Error Page</div>
      <div className='error-details'>{error.statusText || error.message}</div>
    </div>
  );
}

export default ErrorPage;
