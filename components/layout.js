import { useState, useEffect } from "react"
import Link from "next/link"
import PropTypes from "prop-types"

import Button from "./button"

const Layout = ({ children }) => {
  const NAVS = [
    { name: "home", link: "/", label: "Home" },
    { name: "note", link: "/articles", label: "Note" },
  ]
  const DarkModeButton = () => {
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
      <Button
        name="darkMode"
        className="rounded hover:bg-black/10 dark:hover:bg-white/10 text-yellow"
        icon={darkModeIcon}
        onClick={setUIMode}
      />
    )
  }
  const NavButton = ({ name, link, label }) => (
    <Button
      name={name}
      link={link}
      type="link"
      activeColor="text-black dark:text-white"
      inactiveColor="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
    >
      {label}
    </Button>
  )

  return (
    <div className="bg-white dark:bg-black">
      <header className="flex justify-between items-center px-36 py-2 sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <nav>
          <Link href="/">AP</Link>
        </nav>
        <nav className="flex items-center space-x-4">
          {NAVS.map((item) => (
            <NavButton
              key={item.name}
              name={item.name}
              link={item.link}
              label={item.label}
            />
          ))}
        </nav>
        <DarkModeButton />
      </header>
      <div className="px-36 py-4">{children}</div>
      <footer className="flex flex-row justify-center px-36 py-4 border-t border-black/10 dark:border-white/10">
        <span className="text-black dark:text-white">
          ©{new Date().getFullYear()}
          <strong> Muhammad Aslam Pangestu Idham</strong>
        </span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Layout
