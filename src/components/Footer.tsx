import Image from "next/image";

export default function Footer(){
    return(
        <footer className="flex flex-col items-center mt-8 justify-center p-4 text-center">
            <Image src="/assets/logologin-footer-white.png" width={150} height={100} alt="Logo Login" />
            <span className="mt-4 text-sm">LOGIN INFORMÁTICA COMÉRCIO E REPRESENTAÇÃO LTDA
<br /> CNPJ: 00.066.716/0001-91</span>
        </footer>
    )
}