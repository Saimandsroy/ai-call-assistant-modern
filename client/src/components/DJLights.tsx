import React from 'react';

export const DJLights = () => {
    return (
        <div className="dj-lights-global">
            <div className="light-beams-container">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="light-beam" style={{ '--i': i } as React.CSSProperties} />
                ))}
            </div>
        </div>
    );
};
