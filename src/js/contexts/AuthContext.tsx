// zustandに移行したため、本コンテキストは不要になった

// import * as React from "react"
// import { createContext, useState } from "react"

// type AuthContextType = {
//   isLoggedIn: boolean
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
//   isLoginCheckDone: boolean
//   setIsLoginCheckDone: React.Dispatch<React.SetStateAction<boolean>>
//   userName: string
//   setUserName: React.Dispatch<React.SetStateAction<string>>
// }

// export const AuthContext = createContext<AuthContextType>({
//   isLoggedIn: false,
//   setIsLoggedIn: () => {},
//   isLoginCheckDone: false,
//   setIsLoginCheckDone: () => {},
//   userName: "",
//   setUserName: () => {},
// })

// export const AuthProvider = ({ children }: React.PropsWithChildren) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
//   const [isLoginCheckDone, setIsLoginCheckDone] = useState<boolean>(false)
//   const [userName, setUserName] = useState<string>("")
//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn,
//         setIsLoggedIn,
//         isLoginCheckDone,
//         setIsLoginCheckDone,
//         userName,
//         setUserName,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }
