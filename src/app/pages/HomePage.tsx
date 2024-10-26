import Image from "next/image";

const HomePage = () => {
    return (
        <div className="mt-5 p-2 flex flex-col">
            <div className="p-2 flex flex-col justify-center items-center gap-4">
                <div className="p-2 flex flex-col border-2 border-blue-900 rounded-md md:w-[600px]">
                    <h1>Si eres
                        <b>
                            {" "}Usuario{" "}
                        </b>
                        perteneciente a la
                        <b>
                            {" "}UAEM{" "}
                        </b>
                        .</h1>
                    <div className="p-2 flex justify-center items-center">
                        <Image src="https://www.uaem.mx/vida-universitaria/identidad-universitaria/images/uaem-logo.png" alt="" width={120} height={120} />
                    </div>
                </div>
                <div className="p-2 flex flex-col border-2 border-black rounded-md md:w-[600px]">
                    <h1>Si eres
                        <b>
                            {" "}Usuario Normal{" "}
                        </b>
                        .</h1>
                    <div className="p-2 flex justify-center items-center">
                        <Image src="https://safeture.com/wp-content/uploads/sites/11/2023/06/Users.png" alt="" width={120} height={120} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;