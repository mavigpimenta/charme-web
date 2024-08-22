import React, { useState } from 'react';
import BackgroundImage from '/home.avif'; 
import { Navbar } from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import Joao from '/joao.jpeg'

export const Home = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
          from_name: name,
          from_email: email,
          message,
        };

        try {
          await emailjs.send(
            'service_orwpnp7', 
            'template_r4gq5ac', 
            templateParams,
            'oxSuwVlyyxx1FQMWe' 
          );
          toast.success('E-mail enviado com sucesso!');
        } catch (error) {
          toast.error('Erro ao enviar o e-mail');
        } finally {
          setLoading(false);
          setName('');
          setEmail('');
          setMessage('');
        }
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} isOpen={isOpen} toggleMenu={toggleMenu} />
            <section id="home" className="relative flex flex-col items-center justify-center h-screen bg-black bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div> 
                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white p-6 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Conheça nossos produtos!</h1>
                    <p className="text-base sm:text-lg md:text-xl mb-8">Garantindo compromisso, seriedade e qualidade aos nossos clientes.</p>
                    <a href="#more-info">
                        <Link to='/catalog'>
                            <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition-colors font-semibold">
                                SAIBA MAIS
                            </button>
                        </Link>
                    </a>
                </div>
            </section>
            <section id="about" className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-100 gap-20">
                <div className="w-72">
                    <img src={Joao} alt="Sobre Nós" className="w-72 rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Quem Somos?</h2>
                    <p className="text-base md:text-lg leading-relaxed text-justify">
                        Desde <strong>1977</strong>, nossa empresa se destaca pela qualidade e compromisso no mercado, sendo referência na representação de portas e torneiras. Representamos com excelência a <strong>Ideal Portas</strong> e a <strong>Estilo Metais.</strong> Além disso, contamos com uma linha de fios condutores disponíveis para pronta entrega, atendendo a uma demanda crescente e diversificada de nossos clientes. Nosso foco é <strong>garantir</strong> a melhor experiência para nossos clientes, prezando pela <strong>excelência</strong> em cada aspecto do nosso trabalho. Atendemos com dedicação toda a região de Curitiba e sua área metropolitana, bem como o Norte Pioneiro do Paraná. Com um compromisso inabalável com a <strong>qualidade</strong> e o <strong>profissionalismo</strong>, buscamos sempre superar as expectativas dos nossos clientes com nosso atendimento personalizado.
                    </p>
                </div>
            </section>
            <section id="contato" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center relative">
                        Contato
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col space-y-6">
                            <h2 className="text-2xl font-semibold mb-4">Fale com a Charme</h2>
                            <p className="text-base mb-4">
                                Envie sua mensagem preenchendo o formulário ao lado e aguarde o retorno de nossa equipe. Se preferir, entre em contato pelos canais abaixo:
                            </p>
                            <ul className="text-base space-y-2">
                                <li className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z"></path>
                                    </svg>
                                    <span>(41) 99882-7447</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z"></path>
                                    </svg>
                                    <span>charme.contato@outlook.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-4">Formulário de Contato</h2>
                                <input type="text" placeholder="Nome" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow duration-300 shadow-md hover:shadow-lg" value={name} onChange={(e) => setName(e.target.value)} required/>
                                <input type="email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow duration-300 shadow-md hover:shadow-lg" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <textarea placeholder="Mensagem" rows={6} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-shadow duration-300 shadow-md hover:shadow-lg" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                <button type="submit" className={`bg-orange-600 text-white p-4 rounded-lg w-full font-semibold hover:bg-orange-700 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </form>
                        </div>
                    </div>  
                </div>
            </section>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

