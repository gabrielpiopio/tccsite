import {Link} from "react-router"
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export function Header(){
    const[theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark"){
            tagHTML.classList.add("dark")
        }
    }, [theme])

    return(
        <header className="bg-gray-300 flex justify-around items-center h-16 dark:bg-blue-900 dark:text-white">
            <nav>
                <ul className="flex gap-24">
                    <h1 className="text-2xl font-semibold">VisionCap</h1>

                    <li>
                        <Link to={"/"}>Página Inicial</Link>
                    </li>
                    <li>
                        <Link to={"/aboutus"}>Sobre Nós</Link>
                    </li>
                    <li>
                        <Link to={"/details"}>Produtos</Link>
                    </li>
                </ul>
            </nav>

            <button className="cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                {theme === "dark" ? (
                    <SunIcon size={32} weight="fill" />
                ):(
                    <MoonStarsIcon size={32} weight="fill" />
                )
                }
            </button>
        </header>
    )
}

