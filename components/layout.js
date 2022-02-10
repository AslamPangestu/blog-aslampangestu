import { useState, useEffect, useContext } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import PropTypes from "prop-types"

import { GlobalContext } from "pages/_app"
const Button = dynamic(() => import("components/button"))
const NextImage = dynamic(() => import("components/image"))

const Layout = ({ children }) => {
  const { favicon } = useContext(GlobalContext)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const NAVS = [
    { name: "home", link: "/", label: "Home" },
    { name: "project", link: "/projects", label: "Project" },
    { name: "note", link: "/articles", label: "Note" },
  ]

  const showMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const DarkModeButton = ({ className }) => {
    const [darkModeIcon, setDarkModeIcon] = useState("")
    let classNames = [
      "rounded hover:bg-black/10 dark:hover:bg-white/10 text-yellow",
      className,
    ]
    const joinClassName = classNames.join(" ")
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
        className={joinClassName}
        icon={darkModeIcon}
        onClick={setUIMode}
      />
    )
  }
  const MainNav = () => (
    <>
      <nav className="hidden items-center space-x-4 md:flex">
        {NAVS.map((item) => (
          <Button
            key={item.name}
            name={item.name}
            link={item.link}
            type="link"
            activeColor="text-black dark:text-white"
            inactiveColor="text-black/75 hover:text-black dark:text-white/75 dark:hover:text-white"
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <nav className="hidden md:flex">
        <DarkModeButton />
      </nav>
    </>
  )
  const MobileNav = () => (
    <div className="flex flex-col bg-black dark:bg-white">
      <nav className="my-2 flex w-full flex-col">
        {NAVS.map((item) => (
          <Button
            className="w-full"
            key={item.name}
            name={item.name}
            link={item.link}
            type="link"
            activeColor="text-white dark:text-black"
            inactiveColor="text-white/75 hover:text-white dark:text-black/75 dark:hover:text-black"
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="mx-4">
        <div className="h-px w-full bg-white dark:bg-black" />
      </div>
      <nav className="mx-4 my-2">
        <DarkModeButton className="m-2 border border-white dark:border-black" />
      </nav>
    </div>
  )

  return (
    <div className="bg-white dark:bg-black">
      <header
        id="header"
        className="sticky top-0 z-10 border-b border-black/10 bg-opacity-60 backdrop-blur-lg backdrop-filter dark:border-white/10"
      >
        <div className="flex items-center justify-between px-6 py-2 md:px-36 ">
          <nav>
            <Link href="/">
              <a aria-label="favicon">
                <NextImage image={favicon} className="h-8 w-8" />
              </a>
            </Link>
          </nav>
          {/* MAIN NAV */}
          <MainNav />
          {/* MOBILE NAV */}
          <Button
            className="text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/10 md:hidden"
            icon={showMobileMenu ? "times" : "bars"}
            iconSize="lg"
            onClick={showMenu}
          />
        </div>
        {showMobileMenu && <MobileNav />}
      </header>
      <main className="px-6 py-4 md:px-36">{children}</main>
      <footer
        id="footer"
        className="flex flex-row justify-center border-t border-black/10 px-36 py-4 dark:border-white/10"
      >
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
