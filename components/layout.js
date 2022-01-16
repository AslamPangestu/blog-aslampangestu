import { useState, useEffect } from "react"
import Link from "next/link"
import PropTypes from "prop-types"

import Button from "./button"

const Layout = ({ children }) => {
  const [darkModeIcon, setDarkModeIcon] = useState("")

  const setUIMode = () => {
    const key = "theme"
    const theme = localStorage.getItem(key)
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem(key, "light")
      setDarkModeIcon("sun")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem(key, "dark")
      setDarkModeIcon("moon")
    }
  }
  const setDefaultUIMode = () => {
    const key = "theme"
    const theme = localStorage.getItem(key)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem(key, "dark")
      setDarkModeIcon("moon")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem(key, "light")
      setDarkModeIcon("sun")
    }
  }

  useEffect(() => {
    setDefaultUIMode()
  }, [])

  return (
    <>
      <header className="flex justify-between items-center px-36 py-4 sticky top-0">
        <nav>
          <Link href="/">AP</Link>
        </nav>
        <nav className="flex items-center space-x-4">
          <Button name="home" link="/" type="link">
            Home
          </Button>
          <Button name="note" link="/articles" type="link">
            Note
          </Button>
        </nav>
        <div>
          <Button
            className="rounded bg-white dark:bg-black hover:bg-black/10 dark:hover:bg-black/75 text-yellow-400 border-2 border-black"
            icon={darkModeIcon}
            onClick={setUIMode}
          />
        </div>
      </header>
      <div className="px-36 py-4">{children}</div>
      <footer className="flex flex-row justify-center px-36 py-4">
        <span>
          ©{new Date().getFullYear()}
          <strong> Muhammad Aslam Pangestu Idham</strong>
        </span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Layout
