import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface Links {
    description: string
    url : string
}

export default function Links() {

    const links: Links[] = [
        {
            description: "Acesse o nosso Site",
            url: "https://www.login.com.br/?utm_source=Instagram&utm_medium=Linktree&utm_campaign=botao-home"
        },
        {
            description: "WhatsApp",
            url: "https://api.whatsapp.com/send?phone=557140204075"
        },
        {
            description: "Nossas Lojas",
            url: "https://www.login.com.br/nossas-lojas?utm_source=Instagram&utm_medium=Linktree&utm_campaign=lojas"
        },
        {
            description: "Trabalhe Conosco",
            url: "https://www.login.com.br/trabalhe-conosco?utm_source=Instagram&utm_medium=Linktree&utm_campaign=trabalhe-conosco"
        },
        {
            description: "Assistências",
            url: "https://www.login.com.br/assistencias?utm_source=Instagram&utm_medium=Linktree&utm_campaign=assistencias"
        }
    ]

    return (
        <div className="flex flex-col items-center p-4 gap-3">
            {links.map((link, index)=> (
                <Link href={link.url} key={index} target="_blank" rel="noreferrer" className="w-full max-w-xs">
                    <div className="flex items-center p-4 border rounded-full border-zinc-50 justify-center bg-cyan-600 bg-opacity-40">
                        <strong className="flex-1 text-center">{link.description}</strong>
                        <ArrowUpRight />
                    </div>
                </Link>
            ))}
        </div>
    )
}