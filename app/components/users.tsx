import React from 'react'
import Button from './button'
import { revalidateUsers } from '@/lib/actions'

type user = {
  id: string
  name: string
  city: string
}

const getUsers = async () => {
  const endpoint = `${process.env.MOCKAPI_URL}/users`
  const response = await fetch(endpoint, { next: { tags: ['users'] } })
  return response.json()
}

const Users = async () => {
  const users: [user] = await getUsers()
  return (
    <section className='mt-16'>
      <form
        action={revalidateUsers}
        className='mt-6 flex flex-row justify-between'
      >
        <h3 className='mb-3 text-xl'>Users</h3>
        <Button size='small' intent='secondary' className=''>
          Revalidate Users
        </Button>
      </form>
      <div className='mt-8 grid grid-cols-4 gap-4'>
        {users.map(user => (
          <div
            key={user.id}
            className='rounded border border-slate-200 bg-white p-4 shadow'
          >
            <h3 className='font-semibold'>{user.name}</h3>
            <p className='font-light'>City: {user.city}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users
