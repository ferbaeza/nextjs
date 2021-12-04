import dbConnect from '../../lib/dbConnect' 
import User from '../../models/User'
import Head from 'next/head'
import Link from 'next/link'


const Index = ({ users }) => (
  <>
    <Head>
        <title>Atlas</title>
    </Head>
    <div className="back">
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
    <div className="back">
        <Link href="/newatlas">
            <a className="
            bg-blue-200 text-white mt-6 pl-2 pr-2 rounded-r">Add new User</a>
        </Link>
    </div> 

    <div className="grid grid-cols-4 pt-4 mt-5  gap-5">
    {users.map((user) => (
        <div className="shadow-xl text-center" key={user._id}>
          <div className="">
            <h5 className="text-3xl text-blue-800">{user.name}</h5>
            <div className="main-content">
              <p className="user-name">Nombre: {user.name}</p>
              <p className="owner">Apellido: {user.surname}</p>
              <p className="mail">Email: {user.mail}</p>
  
              <div className="btn-container">
                <Link href="/[id]/edit" as={`/${user._id}/edit`}>
                  <button className="bg-yellow-200 mr-4 ml-4 mt-2 mb-2 text-xl rounded-xl pl-2 pr-2">Edit</button>
                </Link>
                <Link href="/users/views" as={`/${user._id}`}>
                  <button className="bg-red-300 mr-4 ml-4 mt-2 mb-2 text-xl rounded-xl pl-2 pr-2">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      ))}
      </div>
    </>
    )
  
  
  /* Retrieves user(s) data from mongodb database */
  export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await User.find({})
    const users = result.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()
      return user
    })
  
    return { props: { users: users } }
  }
  
  export default Index
  