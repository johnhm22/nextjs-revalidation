import { revalidateAll } from '@/lib/actions'
import Button from './components/button'
import Todos from './components/todos'
import Users from './components/users'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>On demand Revalidation</h1>
        <h2 className='mt-4 flex gap-2 font-light'>
          <pre>
            <code>revalidatePath</code>
          </pre>{' '}
          vs{' '}
          <pre>
            <code>revalidateTag</code>
          </pre>
        </h2>
        <form action={revalidateAll}>
          <Button size='medium' intent='primary' className='mt-3'>
            Revalidate the entire path
          </Button>
        </form>
        <Users />
        <Todos />
      </div>
    </section>
  )
}
