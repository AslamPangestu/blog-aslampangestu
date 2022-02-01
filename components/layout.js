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
      <nav className="hidden md:flex items-center space-x-4">
        {NAVS.map((item) => (
          <Button
            key={item.name}
            name={item.name}
            link={item.link}
            type="link"
            activeColor="text-black dark:text-white"
            inactiveColor="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
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
      <nav className="flex w-full flex-col my-2">
        {NAVS.map((item) => (
          <Button
            className="w-full"
            key={item.name}
            name={item.name}
            link={item.link}
            type="link"
            activeColor="text-white dark:text-black"
            inactiveColor="text-white/50 hover:text-white dark:text-black/50 dark:hover:text-black"
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="mx-4">
        <div className="bg-white dark:bg-black w-full h-px" />
      </div>
      <nav className="mx-4 my-2">
        <DarkModeButton className="border border-white dark:border-black m-2" />
      </nav>
    </div>
  )

  return (
    <div className="bg-white dark:bg-black">
      <header className="sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div className="flex px-6 md:px-36 py-2 justify-between items-center ">
          <nav>
            <Link href="/">
              <a>
                <NextImage image={favicon} className="w-8 h-8" />
              </a>
            </Link>
          </nav>
          {/* MAIN NAV */}
          <MainNav />
          {/* MOBILE NAV */}
          <Button
            className="md:hidden hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white"
            icon={showMobileMenu ? "times" : "bars"}
            iconSize="lg"
            onClick={showMenu}
          />
        </div>
        {showMobileMenu && <MobileNav />}
      </header>
      <div className="px-6 md:px-36 py-4">{children}</div>
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
