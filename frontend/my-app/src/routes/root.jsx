import Container from 'react-bootstrap/esm/Container'
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { getContacts, createContact } from '../contacts'

export async function action() {
  const contact = await createContact()
  return { contact }
}

export async function loader() {
  const contacts = await getContacts()
  return { contacts }
}

export default function Root() {
  const { contacts } = useLoaderData()
  return (
    <>
      <Container id='cont'>
        <NavBar />
      </Container>
      <Container id='cont'>
        <Outlet />
      </Container>
    </>
  )
}
