'use server'

import { signOut } from "next-auth/react"

export default async function logoutAction(){
    await signOut();
}