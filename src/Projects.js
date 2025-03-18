import cat from "./images/nyan-cat.png" 
import sling from "./images/slingair.png"
import tic from "./images/tic-tac-toe.png"

const Projects = () => {
    const imageSize= {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '250px',
    };
    const imageContainer= {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
    return (
        <section>
            <h2>My projects</h2>
            <div style={imageContainer}>
                <h3>Nyan cat game</h3>
                <a href="https://mahannilipour.github.io/nyan-cat/">
                <img src={cat} alt="project 1 screenshot" style={imageSize}/>
                </a>
                <p>Built using HTML, CSS, and Javascript</p>
                <h3>My first group project, Sling Air, which involved developing a reservation system with create, update, and delete functionality</h3>
                <a href="https://github.com/MahanNilipour/slingair/compare/main%40%7B1day%7D...main">
                <img src= {sling} alt="project 2 screenshot" style={imageSize}/>
                </a>
                <p>Built using HTML, CSS, Javascript, NodeJS, Express, Insomnia, and MongoDB</p>
                <h3>Tic-Tac-Toe game</h3>
                <a href="https://mahannilipour.github.io/tic-tac-toe/">
                <img src= {tic} alt="project 3 screenshot" style={imageSize}/>
                </a>
                <p>Built using HTML, CSS, Javascript, NodeJS, and React</p>
            </div>
        </section>
    )
}

export default Projects