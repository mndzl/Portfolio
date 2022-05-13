import '../CSS/projects.css';

// Projects images
import gronno from '../media/projects/gronno.jpeg';
import schoolmanager from '../media/projects/schoolmanager.jpeg';
import barweights from '../media/projects/barweights.jpeg';

// Technologies image
import react from '../media/technologies/react.png';
import aws from '../media/technologies/aws.png';
import django from '../media/technologies/django.svg';
import postgresql from '../media/technologies/postgresql.png';

export default function Projects(){
    return (
        <div className="projects-background">
            <div className="projects-container">
                <h1 className="projects-title">What I have developed</h1>

                <div className="projects">
                    
                    <div className="project project-container gronno">
                        {/*
                        <div className="project-tools" >
                            <img src={django} className="project-tool" />
                            <img src={postgresql} className="project-tool" />
                            <img src={aws} className="project-tool" />
                        </div>
                        */}
                        <img className="project-img gronno" src={gronno}/>
                    </div>

                    <div className="project project-container schoolmanager">
                        {/*
                        <div className="project-tools" >
                            <img src={django} className="project-tool" />
                            <img src={postgresql} className="project-tool" />
                        </div>
                        */}
                        <img className="project-img schoolmanager" src={schoolmanager}/>
                    </div>

                    <div className="project project-container barweights">
                        {/*
                        <div className="project-tools" >
                            <img src={react} className="project-tool" />
                        </div>
                        */}
                        <img className="project-img barweights" src={barweights}/>
                    </div>

                    </div>
            </div>
        </div>
    );
}