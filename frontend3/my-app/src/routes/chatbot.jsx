import { Form, redirect, useActionData } from 'react-router-dom'
import { postData } from '../api/hola'
import Container from 'react-bootstrap/esm/Container'

export async function action({ request, params }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  let a = await postData('http://127.0.0.1:8000/app/', updates)
  return a
}

let containerStyle = {
  backgroundColor: '#f8a5c2',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px auto',
  maxWidth: '600px'
}

let responseStyle = { ...containerStyle }
responseStyle.backgroundColor = '#7fcdbb'



export function Chatbot() {
  let a = useActionData()
  return (
    <>
      <Container style={containerStyle}>
        <h1>Ask your question</h1>
      </Container>

      <Container className='d-flex justify-content-center align-items-center'>
        <Form method='post' id='ssss'>
          <p>
            <input type='text' name='question' defaultValue='ask your question' />
          </p>
          <button type='submit'>send</button>
        </Form>
      </Container>
      <Container style={responseStyle}>
        <h1>Answer</h1>
      </Container>

      <Container className='d-flex justify-content-center align-items-center'>
        <p>{a == undefined ? 'undefined' : a.answer}</p>
      </Container>
    </>
  )
}
