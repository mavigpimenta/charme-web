import Company1Logo from '/ideal.png'; 
import Company2Logo from '/estilo.png'; 
import { FaFilePdf, FaMousePointer } from 'react-icons/fa';
import { NavbarCatalog } from '../components/NavbarCatalog';
import Logo from '/logo_solo.png';
import Torneira from '/torneira.png';
import { IoLogoWhatsapp } from 'react-icons/io';
import Fios from '/fios.png'
import { FooterCatalog } from '../footer/FooterCatalog';

export const Catalog = () => {
    return (
        <>
            <NavbarCatalog />
            <div className="pt-16 p-6 md:p-12 bg-gray-100 relative top-24">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col lg:flex-row items-center">
                    <img src={Company1Logo} alt="Empresa 1 Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4 md:mb-0 md:mr-6" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">Ideal Portas</h2>
                        <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                            Estamos comprometidos em oferecer para você e ao seu cliente, o que há de melhor em matéria prima para portas internas. O diferencial dos produtos, está nas lâminas naturais e lâminas pré-compostas, um produto de alta tecnologia, extremamente durável, ecológico e com ótimo acabamento.
                        </p>
                        <a href="/Catalogo-Ideal.pdf" className="text-orange-600 flex items-center hover:underline" download>
                        <FaFilePdf className="mr-2" /> Baixar Catálogo em PDF
                        </a>
                    </div>
                    <img src="https://idealportas.ind.br/wp-content/uploads/2023/06/fotoso1.png" alt="Empresa 1" className="w-60 h-auto rounded-lg md:ml-6 mt-4" />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col lg:flex-row items-center">
                    <img src={Company2Logo} alt="Empresa 2 Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4 md:mb-0 md:mr-6" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">Estilo Metais</h2>
                        <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                            Oferecemos uma ampla gama de produtos que atendem seus clientes finais, sendo a escolha ideal para quem busca metais sanitários de alta qualidade. Nosso compromisso é proporcionar a você e seus clientes produtos que aliam durabilidade, design inovador e eficiência, garantindo a melhor experiência em cada projeto.
                        </p>
                        <a href="https://www.estilometais.com.br/catalogo/" className="text-orange-600 flex items-center hover:underline">
                        <FaMousePointer className="mr-2" /> Acesse o Catalágo Online
                        </a>
                    </div>
                    <img src={Torneira} alt="Empresa 2" className="w-56 h-auto rounded-lg lg:ml-6" />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col lg:flex-row items-center">
                    <img src={Logo} alt="Fios Condutores Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4 md:mb-0 md:mr-6" />
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">Fios Condutores para Pronta Entrega</h2>
                        <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                            Na Charme, entendemos que a qualidade e a prontidão são essenciais para atender às necessidades dos nossos clientes. É por isso que oferecemos fios condutores de pronta entrega em diversos tamanhos, perfeitos para qualquer projeto elétrico. Com opções para diversas aplicações e a garantia de disponibilidade imediata, você pode contar conosco para fornecer exatamente o que precisa.
                        </p>
                        <a href="https://api.whatsapp.com/send/?phone=5541998827447&text&type=phone_number&app_absent=0" className="text-orange-600 flex items-center hover:underline">
                            <IoLogoWhatsapp className="mr-2" /> Entre em Contato
                        </a>
                    </div>
                    <img src={Fios} alt="Fios Condutores" className="w-56 h-auto rounded-lg md:ml-6" />
                </div>
            </div>
            <FooterCatalog></FooterCatalog>
        </>
    );
    };
