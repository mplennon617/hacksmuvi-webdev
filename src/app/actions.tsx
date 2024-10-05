'use server'
 
import { redirect } from 'next/navigation'
 
export async function submitPost(data: FormData) {
  redirect(`/posts/${data.get('id')}`)
}