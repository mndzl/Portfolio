import '../CSS/about.css';

export default function About(){
    return (
        <div className="about-background">
            <div className="about-container" >
                <h1 className="about-title" id="about">About me</h1>
                <hr />

                <p>
                    Hey! My name is Luis, and I am a <strong>developer</strong>.
                </p>
                <br />
                <p>
                    I started programming in 2017, I am passionate about <strong>continuous learning and self-improvement</strong>.
                </p>
                <br />
                <p>
                    I participated in the <strong>Olympics of Informatics in Argentina </strong> since 2017, where problems are solved in the most optimal way possible, focused on mathematics, graphs, dynamic programming, algorithms, and others.
                </p>    
                <br />       
                <p>
                    I research every day the topics that interest me to expand my knowledge, I am organized, minimalist and I love to explain things. I like music and I collect rubik's cubes.
                </p>
                <div id="projects"></div>
                <br/>
            </div>
        </div>
    );
}