import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {contactUs} from '../actions/userActions'
import Meta from '../components/Meta'



const AndroidScreen = ({ match,history }) => {
  const  [name,setName] = useState('')
  const  [email,setEmail] = useState('')
  const  [comment,setComment] = useState('')
  const  [message,setMessage] = useState(false)


  const dispatch = useDispatch()
  const contact = useSelector((state) => state.userContact)
  const { loading, error, success } = contact



  useEffect(() => {
    if(success){
      setEmail('')
      setName('')
      setComment('')
      setMessage(true)

    }
     
    }, [success  ])

  const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(contactUs(name,email,comment))
  }

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <Meta title = "Cantact Us"/>
      <FormContainer>
      <h1>Contact Us</h1>
      {message && <Message variant ="success">Message sent!! we will reply as earlier as possible...</Message>}
      {error && <Message >{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

      <Form.Group controlId='name'>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type='name'
        placeholder='Enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Form.Control>
    </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='comment'>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as='textarea'
          row='3'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></Form.Control>
        </Form.Group>


     

        <Button type='submit' variant='primary'>
          Send Message
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
        <Button type='submit' href = 'https://wa.me/16084663720' variant='primary'>
         Message us on Whatsapp <img src ="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" alt ="whatsapp" style={{width:"20px",height:"20px"}}/>
      </Button>
        </Col>
      </Row>
    </FormContainer>
      
     
          
      
    
    </>
  )
}


// <main id="main" class="content ">
// <h1>Contact</h1>
// <ul class="social-links">
//  <li><a href="https://www.instagram.com/cappn__" aria-label="Instagram" title="Instagram"><svg class="instagram-icon" height="36" width="36" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.84 503.84"><path fill="currentColor" d="M251.92 45.39c67.27 0 75.23.26 101.8 1.47 24.56 1.12 37.9 5.22 46.78 8.67a78 78 0 0129 18.85 78 78 0 0118.85 29c3.45 8.88 7.55 22.22 8.67 46.78 1.21 26.57 1.47 34.53 1.47 101.8s-.26 75.23-1.47 101.8c-1.12 24.56-5.22 37.9-8.67 46.78a83.51 83.51 0 01-47.81 47.81c-8.88 3.45-22.22 7.55-46.78 8.67-26.56 1.21-34.53 1.47-101.8 1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78 78 0 01-29-18.85 78 78 0 01-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23 1.47-101.8c1.12-24.56 5.22-37.9 8.67-46.78a78 78 0 0118.85-29 78 78 0 0129-18.85c8.88-3.45 22.22-7.55 46.78-8.67 26.57-1.21 34.53-1.47 101.8-1.47m0-45.39c-68.42 0-77 .29-103.87 1.52S102.92 7 86.92 13.22a123.68 123.68 0 00-44.64 29.06 123.68 123.68 0 00-29.06 44.64c-6.22 16-10.48 34.34-11.7 61.15S0 183.5 0 251.92s.29 77 1.52 103.87 5.48 45.13 11.7 61.13a123.68 123.68 0 0029.06 44.62 123.52 123.52 0 0044.64 29.07c16 6.23 34.34 10.49 61.15 11.71s35.45 1.52 103.87 1.52 77-.29 103.87-1.52 45.11-5.48 61.11-11.71a128.74 128.74 0 0073.69-73.69c6.23-16 10.49-34.34 11.71-61.15s1.52-35.45 1.52-103.87-.29-77-1.52-103.87-5.48-45.11-11.71-61.11a123.52 123.52 0 00-29.05-44.62 123.68 123.68 0 00-44.64-29.08c-16-6.22-34.34-10.48-61.15-11.7S320.34 0 251.92 0z"/><path fill="currentColor" d="M251.92 122.56a129.36 129.36 0 10129.36 129.36 129.35 129.35 0 00-129.36-129.36zm0 213.36a84 84 0 1184-84 84 84 0 01-84 84z"/><circle fill="currentColor" cx="386.4" cy="117.44" r="30.23"/></svg></a></li>
// </ul>
// </main>


export default AndroidScreen