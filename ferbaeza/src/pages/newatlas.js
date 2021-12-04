import Form from '../../components/Form'

const NewUser = () => {
  const userForm = {
    name: '',
    surname: '',
    mail: '',
  }

  return <Form formId="add-pet-form" userForm={userForm} />
}

export default NewUser
