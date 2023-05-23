import { Form } from 'react-router-dom'

async function getBotAnswer(updates) {
  let response = await fetch('http://0.0.0.0:8000/app/', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(updates), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(await response.json())
}

export async function action({ request }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await getBotAnswer(updates)
  return null
}

export default function Chatbot() {
  return (
    <Form method='post' id='contact-form'>
      <p>
        <span>Name</span>
        <input
          placeholder='First'
          aria-label='First name'
          type='text'
          name='question'
          defaultValue='Enter your question'
        />
      </p>
      <p>
        <button type='submit'>Send question to chatbot</button>
      </p>
    </Form>
  )
}
