"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

interface formal {
  children: ReactNode
}

export const AuthProvider: React.FC<formal> = ({children}) => {
  return <SessionProvider>{children}</SessionProvider>
}
