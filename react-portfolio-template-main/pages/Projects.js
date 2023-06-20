import React from 'react';

export const TempleOfStarlight = ({ project }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#282c34',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ marginBottom: '20px' }}>{project.title}</h1>
            <p style={{ marginBottom: '20px' }}>{project.description}</p>
            <p>This is some custom content for Project One.</p>
        </div>
    );
}

export const WalnutFalls = ({ project }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#282c34',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ marginBottom: '20px' }}>{project.title}</h1>
            <p style={{ marginBottom: '20px' }}>{project.description}</p>
            <p>This is some custom content for Project Two.</p>
        </div>
    );
}

export const Industria = ({ project }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#282c34',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ marginBottom: '20px' }}>{project.title}</h1>
            <p style={{ marginBottom: '20px' }}>{project.description}</p>
            <p>This is some custom content for Project Two.</p>
        </div>
    );
}

const projects = {
    TempleOfStarlight,
    Industria,
    // other projects...
};

export default projects;
