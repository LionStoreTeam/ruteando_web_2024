import Image from "next/image";


const BaseLogo = () => {
    return (
        <div className="">
            <Image src="/logo_transp.png" alt="first_home_base_logo" width={170} height={170} priority />
        </div>
    );
}

export default BaseLogo;