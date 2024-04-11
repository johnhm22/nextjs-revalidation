import React from 'react'
import Button from './button'
import { revalidateTodos } from '@/lib/actions'

type todo = {
  id: string
  name: string
  status: string
}

const getTodos = async () => {
  const endpoint = `${process.env.MOCKAPI_URL}/todos`
  const response = await fetch(endpoint, { next: { tags: ['todos'] } })
  return response.json()
}

const Todos = async () => {
  const todos: [todo] = await getTodos()
  return (
    <section className='mt-16'>
      <form
        action={revalidateTodos}
        className='mt-6 flex flex-row justify-between'
      >
        <h3 className='mb-3 text-xl'>Todos</h3>
        <Button size='medium' intent='secondary' className='bg-red-400'>
          Revalidate Todos
        </Button>
      </form>
      <div className='mt-8 grid grid-cols-4 gap-4'>
        {todos.map(todo => (
          <div
            key={todo.id}
            className='rounded border border-slate-200 bg-white p-4 shadow'
          >
            <h3 className='font-semibold'>{todo.name}</h3>
            <p className='font-light'>
              Status: {todo.status ? 'Pending' : 'False'}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Todos
