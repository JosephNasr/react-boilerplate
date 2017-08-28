import React from 'react';

const LoadError = ({ err }) => (
    <div>
        {err ? <div>{err}</div>: <div>Error</div>};
    </div>
);

export default LoadError;
