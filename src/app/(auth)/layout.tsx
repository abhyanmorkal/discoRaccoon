import { ReactNode } from "react"
import { Navbar } from "../../components/nav-bar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
