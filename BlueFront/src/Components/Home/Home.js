import React from 'react';
import style from './css/home.css';



const Home = () => {
    return (
        <div>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
            <link href="css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/bootstrap-icons.css" rel="stylesheet" />

            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="images/bubbles.png" class="logo img-fluid" alt="" />

                        <span class="ms-2">BluePill</span>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">Inicio</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="linkdapagina">Sobre</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Paginas</a>

                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="linkdapagina">adicionar paginas</a></li>

                                    <li><a class="dropdown-item" href="linkdapagina">adicionar paginas</a></li>

                                    <li><a class="dropdown-item" href="linkdapagina">adicionar paginas</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="linkdapagina">Contato</a>
                            </li>

                            <li class="nav-item ms-3">
                                <a class="nav-link custom-btn custom-border-btn custom-btn-bg-white btn" href="linkdapagina">Começar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>

                <section class="hero-section hero-section-full-height d-flex justify-content-center align-items-center">
                    <div class="section-overlay"></div>

                    <div class="container">
                        <div class="row">

                            <div class="col-lg-7 col-12 text-center mx-auto">
                                <h1 class="cd-headline rotate-1 text-white mb-4 pb-2">
                                    <span>Seu remédio diário, sempre no horário</span>
                                </h1>

                                <a class="custom-btn custom-border-btn custom-btn-bg-white btn button button--pan smoothscroll" href="linkdapagina">
                                    <span>Introdução</span>
                                </a>

                                <a class="custom-btn custom-border-btn custom-btn-bg-white btn button button--pan smoothscroll" href="linkdapagina">
                                    <span>Conheça nossos Serviços</span>
                                </a>
                            </div>

                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,240C560,224,640,192,720,176C800,160,880,160,960,138.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                </section>

                <section class="services-section section-padding section-bg" id="services-section">

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-12">
                                <h2 class="mb-4">Nossos Serviços</h2>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addmedico">
                                                    <img src="images/services/medico1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/medico2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addmedico">Medicos</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addmedico' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addpaciente">
                                                    <img src="images/services/paciente1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/paciente2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addpaciente">Paciente</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addpaciente' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addfarmacia">
                                                    <img src="images/services/farmacia1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/farmacia2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addfarmacia">Farmacias</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addfarmacia' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addmedicamento">
                                                    <img src="images/services/medicamentos1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/medicamentos2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addmedicamento">Medicamento</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addmedicamento' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addreceita">
                                                    <img src="images/services/receita1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/receita2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addreceita">Receita</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addreceita' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/additem_receita">
                                                    <img src="images/services/itemreceita1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/itemreceita2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/additem_receita">Itens Receita</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/additem_receita' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addpedido">
                                                    <img src="images/services/pedido1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/pedido2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addpedido">Pedidos</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addpedido' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="services-thumb">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-12">
                                            <div class="services-image-wrap">
                                                <a href="/addendereco">
                                                    <img src="images/services/endereco1.png" class="services-image img-fluid" alt="" />
                                                    <img src="images/services/endereco2.png" class="services-image services-image-hover img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                                            <div class="services-info mt-4 mt-lg-0 mt-md-0">
                                                <h4 class="services-title mb-1 mb-lg-2">
                                                    <a class="services-title-link" href="/addendereco">Endereços</a>
                                                </h4>

                                                <p></p>

                                                <div class="d-flex flex-wrap align-items-center">
                                                    <a href='/addendereco' class="custom-btn btn button button--atlas mt-2 ms-auto">
                                                        <span>Cadastrar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-12 d-flex align-items-center mb-4 pb-2">
                            <div>
                                <img src="images/bubbles.png" class="logo img-fluid" alt="" />
                            </div>

                            <ul class="footer-menu d-flex flex-wrap ms-5">
                                <li class="footer-menu-item"><a href="linkdapagina" class="footer-menu-link">Sobre nós</a></li>

                                <li class="footer-menu-item"><a href="linkdapagina" class="footer-menu-link">Blog</a></li>

                                <li class="footer-menu-item"><a href="linkdapagina" class="footer-menu-link">Reviews</a></li>

                                <li class="footer-menu-item"><a href="linkdapagina" class="footer-menu-link">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Home;