// "use client"

// import React, {  useEffect, useState, createContext, useContext } from "react"
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
//   onAuthStateChanged,
//   type User,
// } from "firebase/auth"
// import { auth } from "@/lib/firebase"

// // ✅ Define context type
// interface AuthContextType {
//   user: User | null
//   loading: boolean
//   createUser: (email: string, password: string) => Promise<any>
//   signIn: (email: string, password: string) => Promise<any>
//   logOut: () => Promise<void>
//   updateUserProfile: (name: string, photo?: string) => Promise<void> | undefined
// }

// // ✅ Create Context
// const AuthContext = createContext<AuthContextType | null>(null)

// // ✅ Hook for easy usage
// export const useAuth = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
//   return ctx
// }

// export function AuthProvider({ children }: { children : React.ReactNode}) {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)

//   // Register new user
//   const createUser = (email: string, password: string) => {
//     setLoading(true)
//     return createUserWithEmailAndPassword(auth, email, password)
//   }

//   // Login
//   const signIn = (email: string, password: string) => {
//     setLoading(true)
//     return signInWithEmailAndPassword(auth, email, password)
//   }

//   // Logout
//   const logOut = async () => {
//     setLoading(true)
//     try {
//       await signOut(auth)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Update profile
//   const updateUserProfile = async (name: string, photo?: string) => {
//     if (!auth.currentUser) return
//     await updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     })
//   }

//   // Track auth state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)
//       setLoading(false)
//     })
//     return unsubscribe
//   }, [])

//   const value: AuthContextType = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//     updateUserProfile,
//   }

//   return 
// }

