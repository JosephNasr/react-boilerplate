import React from 'react';

const Image = ({ src }) => (
    <div>
        {src ? <img src={src} /> : <span>No results Found</span>}
    </div>
);

export default Image;
