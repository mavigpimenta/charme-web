export const FooterCatalog = () => {
    return (
        <>
            <footer className="shadow-2xl text-center py-6 w-full bg-white mt-24">
                <img src="/logo_completa.png" alt="Logo" className="mx-auto w-40 h-auto mb-4" />
                <div className="flex justify-center mb-4">
                    <a href="https://www.instagram.com/joao_dlk/" className="mx-4 text-2xl text-gray-800 transition-colors duration-300 hover:text-orange-600">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://wa.me/5541998827447" className="mx-4 text-2xl text-gray-800 transition-colors duration-300 hover:text-orange-600">
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                </div>
                <a href="mailto:mariapimenta2607@gmail.com" className="text-sm text-gray-800">
                    &#169; Maria Vitória Garcia Pimenta. All rights reserved
                </a>
            </footer>
        </>
    );
};
