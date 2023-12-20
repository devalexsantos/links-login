import Image from "next/image";

export default function Header(){
    return(
        <header className="flex flex-col justify-center items-center p-4 mt-8">
            <Image src="/assets/logo-login-white.png" width={120} height={120} alt="Logo Login"/>
            <span className="text-xl font-bold">@canallogin</span>
            <h1 className="mt-4 font-bold text-xl text-center">Um mundo de tecnologia para você!</h1>
        </header>
    )
}