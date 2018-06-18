import React from 'react';
import FlipCard from 'react-flipcard';
import logo from './logo.png';
import bootstrap from './boostrap.css';
import hero from './hero.css';
import fonts from './fonts.css';
class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="hero--head">
                                Produkty i rejestracja klienta
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="hero--box">
                            <FlipCard>
                                <div>
                                    <div className="front">
                                        <div className="icon crm"></div>
                                        <h3 className="hero--box__subhead">Crm</h3>
                                        <div className="hero--box_button">
                                            <a target="_blank" href="https://crm.open-partners.pl/">Zaloguj <span
                                                className="bounce">&gt;&gt;</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="back">
                                        <h3 className="hero--box__subhead">Crm</h3>
                                        <p className="hero--box__text">Miejsce rejestracji Klienta w ramach współpracy z
                                            Open Finance.</p>
                                        <div className="hero--box_button">
                                            <a target="_blank" href="https://crm.open-partners.pl/">Zaloguj <span
                                                className="bounce">&gt;&gt;</span></a>
                                        </div>
                                    </div>
                                </div>
                            </FlipCard>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hero--box">
                                <FlipCard>
                                    <div>
                                <div className="front">

                                    <div className="icon others"></div>
                                    <h3 className="hero--box__subhead">E-baza</h3>
                                    <div className="hero--box_button">
                                        <a target="_blank" href="http://panel.e-bazanieruchomosci.pl/">Zaloguj <span
                                            className="bounce">&gt;&gt;</span></a>
                                    </div>
                                </div>
                                    </div>
                                    <div>
                                <div className="back">
                                    <h3 className="hero--box__subhead">E-baza</h3>
                                    <p className="hero--box__text">Aplikacja z uporządkowanymi ofertami nieruchomości i
                                        łatwym
                                        wyszukiwaniem, dzięki której możesz oferować nowe mieszkania od dewelopera z
                                        całego kraju
                                        oraz
                                        zyskać dostęp do innowacyjnych narzędzi informatycznych wspierających
                                        sprzedaż.</p>
                                    <div className="hero--box_button">
                                        <a target="_blank" href="http://panel.e-bazanieruchomosci.pl/">Zaloguj <span
                                            className="bounce">&gt;&gt;</span></a>
                                    </div>
                                </div>
                                    </div>
                                </FlipCard>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hero--box">
                                <FlipCard>
                                    <div>
                                <div className="front">
                                    <div className="icon base"></div>
                                    <h3 className="hero--box__subhead">Open Brokers</h3>
                                    <div className="hero--box_button">
                                        <a target="_blank" href="https://partner.openbrokers.pl/">Zaloguj <span
                                            className="bounce">&gt;&gt;</span></a>
                                    </div>
                                </div>
                                    </div>
                                    <div>
                                <div className="back"><h3 className="hero--box__subhead">Open Brokers</h3>
                                    <p className="hero--box__text">Platforma, dzięki której możliwe jest szybkie
                                        sprawdzenie oferty i
                                        wystawienie polisy w ramach ubezpieczeń dostępnych przez Open Brokers. W tym
                                        miejscu
                                        następuje
                                        także rejestracja Klienta do produktów ubezpieczeniowych.</p>
                                    <div className="hero--box_button">
                                        <a target="_blank" href="https://partner.openbrokers.pl/">Zaloguj <span
                                            className="bounce">&gt;&gt;</span></a>
                                    </div>
                                </div>
                                    </div>
                                </FlipCard>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hero--box">
                                <FlipCard>
                                    <div>
                                <div className="front">
                                    <div className="icon open"></div>
                                    <h3 className="hero--box__subhead last__item">Produkty pozabankowe</h3>
                                    <div className="hero--box_button">
                                        <a target="_blank" href="https://uss.unilinkcash.pl">Zaloguj <span
                                            className="bounce">&gt;&gt;</span></a>
                                    </div>
                                </div>
                                    </div>
                                    <div>
                                <div className="back"><h3 className="hero--box__subhead">Produkty pozabankowe</h3>
                                    <p className="hero--box__text last">Platforma do sprzedaży produktów
                                        pozabankowych.</p>
                                    <div className="hero--box_button ">
                                        <a target="_blank" href="https://uss.unilinkcash.pl">Zaloguj <span
                                            className="bounce">&gt;&gt;</span></a>
                                    </div>
                                </div>
                                    </div>
                                </FlipCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
