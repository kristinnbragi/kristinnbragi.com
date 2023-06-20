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
            <iframe 
                width="60%" 
                height="450" 
                scrolling="no" 
                frameBorder="no" 
                allowFullScreen 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1639212820&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            <div style={{
                fontSize: '10px', 
                color: '#cccccc', 
                lineBreak: 'anywhere', 
                wordBreak: 'normal', 
                overflow: 'hidden', 
                whiteSpace: 'nowrap', 
                textOverflow: 'ellipsis', 
                fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', 
                fontWeight: 100
            }}>
                <a href="https://soundcloud.com/kristinnbragi" title="Kristinn Bragi" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Kristinn Bragi</a> · <a href="https://soundcloud.com/kristinnbragi/sets/temple-of-starlight-original-game-soundtrack" title="Temple of Starlight (Original Game Soundtrack)" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Temple of Starlight (Original Game Soundtrack)</a>
            </div>
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
            <p>This is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project TwoThis is some custom content for Project Two.</p>

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

export const EEG = ({ project }) => {
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

export const Shapefall = ({ project }) => {
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

export const WebOfLies = ({ project }) => {
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

export const CatARoomba = ({ project }) => {
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
    WalnutFalls,
    Industria,
    EEG,
    Shapefall,
    WebOfLies,
    CatARoomba,
    // other projects...
};

export default projects;
