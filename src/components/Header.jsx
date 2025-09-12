import { Link } from "react-router"
import { MoonStarsIcon, SunIcon, List, X } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const tagHTML = document.documentElement
    tagHTML.classList.remove("dark")

    if (theme === "dark") {
      tagHTML.classList.add("dark")
    }
  }, [theme])

  return (
    <header className="bg-gray-300 dark:bg-[#3A4565] dark:text-white px-4 py-3 flex justify-between items-center relative z-50 shadow-md">

      <Link to={"/"} className="text-2xl font-semibold">
        VisionCap
        </Link>



      <nav className="hidden md:flex">
        <ul className="flex gap-12 items-center">
          <li><Link to={"/"}>Página Inicial</Link></li>
          <li><Link to={"/details"}>Produtos</Link></li>
          <li><Link to={"/referencias"}>Referências</Link></li>
          <li><Link to={"/instrucoes"}>Instruções</Link></li>
          <li><Link to={"/aboutus"}>Sobre Nós</Link></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4 relative">

        <button
          className="cursor-pointer"
          onClick={() =>
            setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"))
          }
        >
          {theme === "dark" ? (
            <SunIcon size={28} weight="fill" />
          ) : (
            <MoonStarsIcon size={28} weight="fill" />
          )}
        </button>


        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
        </button>


        {menuOpen && (
          <div className="absolute top-12 right-0 w-60 bg-gray-300 dark:bg-[#3A4565] rounded-lg shadow-lg z-50 transition-transform duration-300 ease-out">
            <ul className="flex flex-col gap-3 p-5 text-base">
              <li>
                <Link to={"/"} onClick={() => setMenuOpen(false)}>Página Inicial</Link>
              </li>
              <li>
                <Link to={"/aboutus"} onClick={() => setMenuOpen(false)}>Sobre Nós</Link>
              </li>
              <li>
                <Link to={"/details"} onClick={() => setMenuOpen(false)}>Produtos</Link>
              </li>
              <li>
                <Link to={"/referencias"} onClick={() => setMenuOpen(false)}>Referências</Link>
              </li>
              <li>
                <Link to={"/instrucoes"} onClick={() => setMenuOpen(false)}>Instruções</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
