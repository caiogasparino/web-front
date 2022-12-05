import Link from 'next/link'

const Footer = () => {

  return (
    <div>
      <div className="container-fluid backColorFooter">
        <div id="contato" className="container footerTop ">
          <div className="d-none d-lg-block">
            <div className="row">
              <div className="col">
                <p>Empresa</p>
                <Link href="/privacidade">Política de Privacidade</Link><br/>
                <Link href="/duvidas">Perguntas Frequentes</Link><br/>
                {/*
                <Link href="/">Missão, Visão e Valores</Link><br/>
                */}
                <a href="mailto:vagas@lyndus.com.br">Trabalhe Conosco</a><br/>
              </div>
              <div className="col">
                <p>Fale com a Lyndus</p>
                <div className="row">
                </div>
                <a href="mailto:falecom@lyndus.com.br">falecom@lyndus.com.br</a>
              </div>
              <div className="col">
                <p>Redes Sociais</p>
                <a href="https://www.linkedin.com/company/lyndus" target="_blank" rel="noreferrer">Linkedin</a><br/>
                <a href="https://www.instagram.com/lyndus.br" target="_blank" rel="noreferrer">Instagram</a><br/>
                <a href="https://www.facebook.com/lyndus.br" target="_blank" rel="noreferrer">Facebook</a><br/>
                <a href="https://twitter.com/lyndus_br" target="_blank" rel="noreferrer">Twitter</a>
              </div>
              <div className="col">
                <p>Baixe o app</p>
                <div className="row loja">
                  <div className="col loja">
                    <a target="_blank" href="https://apps.apple.com/br/app/lyndus/id1577130042">
                      <img src="/footer/app_store.webp" alt="Lyndus app store" width="130"/>
                    </a>
                  </div>
                  <div className="col loja">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lyndusapp">
                      <img src="/footer/google_play.webp" alt="Lyndus google play" width="130"/>
                    </a>
                  </div>
                </div>              
              </div>
            </div>
          </div>
          <div className="d-lg-none">
            <div className="row">
              <div className="col">
                <p>Empresa</p>
                <Link href="/privacidade">Política de Privacidade</Link><br/><br/>
                <Link href="/duvidas">Perguntas Frequentes</Link><br/><br/>
                {/*
                <Link href="/">Missão, Visão e Valores</Link><br/><br/>
                */}
                <a href="mailto:vagas@lyndus.com.br">Trabalhe Conosco</a><br/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Fale com a Lyndus</p>
                <div className="row">
                </div>
                <a href="mailto:falecom@lyndus.com.br">falecom@lyndus.com.br</a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Redes Sociais</p>
                <a href="https://www.linkedin.com/company/lyndus" target="_blank" rel="noreferrer">Linkedin</a><br/><br/>
                <a href="https://www.instagram.com/lyndus.br" target="_blank" rel="noreferrer">Instagram</a><br/><br/>
                <a href="https://www.facebook.com/lyndus.br" target="_blank" rel="noreferrer">Facebook</a><br/><br/>
                <a href="https://twitter.com/lyndus_br" target="_blank" rel="noreferrer">Twitter</a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Baixe o app</p>
                <div className="row">
                <a target="_blank" href="https://apps.apple.com/br/app/lyndus/id1577130042">
                    <img src="/footer/app_store.webp" className="img-fluid" alt="Lyndus app store" width="130"/>
                  </a>
                </div>
                <div className="row">
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lyndusapp">
                    <img src="/footer/google_play.webp" className="img-fluid" alt="Lyndus google play" width="130"/>
                  </a>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container-fluid backColorFooter">
        <div className="container footerBottom">
          <div className="row">
            <div className="col">
              <img src="/logos/logoFooter.png" width="158px" alt="Lyndus - O incentivo que faz bem!"/>
            </div>
            <div className="col">
              <p>© 2022 Lyndus S/A</p>
              <p>Rua Padre Anchieta 2348, Bigorrilho - Curitiba, PR - 80730-000</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Footer