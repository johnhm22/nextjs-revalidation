'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export const revalidateUsers = async () => {
  revalidateTag('users')
  redirect('/')
}

export const revalidateTodos = async () => {
  revalidateTag('todos')
  redirect('/')
}

export const revalidateAll = async () => {
  revalidatePath('/')
  redirect('/')
}
