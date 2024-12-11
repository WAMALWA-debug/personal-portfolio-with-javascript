import { Container, Col, Tab , Row, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import  colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

export const Projects = () => {


    const projects =[
        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg1,

        },

        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg2,

        },

        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg3,

        },

        
        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg1,

        },

        
        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg2,

        },
        
        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg3,

        },

        
        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg1,

        },
        {
            title:"Business Startup",
            description:"Business development",
            imgUrl:projImg2,

        },






    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>I'll update this later about projects I'll update this later about projects I'll update this later about projects I'll update this later about projects I'll update this later about projects I'll update this later about projects I'll update this later about projects I'll update this later about projects I'll update this later about projects </p>
    
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav varianty='pills' className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab One</Nav.Link>
                        </Nav.Item>

                        
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                        </Nav.Item>

                        
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab Three
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map ((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            
                                            />
                                        )
                                    })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey='third'>Dummy text</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}