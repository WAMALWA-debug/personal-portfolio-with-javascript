import { useState } from "react"
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails ={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',

    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonButtonText] = useState('send');
    const [status, setStatus] = useState({});


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value,
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setButtonButtonText('Sending...');
        let response = await fetch('http://localhost:5000/contact',{
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'

            },

            
            body: JSON.stringify(formDetails),
        });

        setButtonButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message:'Message sent successfully'});

        } else{
            setStatus({success: false, message:'Something went wrong, please try again...'})
    }
}

    return (
        
        <section className="contact" id="connect" >
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us'/>

                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => 
                                    onFormUpdate('firstname', e.target.value)} />
                                </Col>

                                <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => 
                                    onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                
                                
                                <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.phone} placeholder="Phone No." onChange={(e) => 
                                    onFormUpdate('phone', e.target.value)} />
                                </Col>

                                
                                <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.email} placeholder="Email Address" onChange={(e) => 
                                    onFormUpdate('email', e.target.value)} />
                                </Col>

                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => 
                                    onFormUpdate('message', e.target.value)} ></textarea>

                                    <button type="submit"><span>{butoonText}</span></button>

                                </Col>
                                {
                                    status.mesage &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}