import Link from 'next/link'

const Home = () => {

  return (
    <div>
      <div className="container-fluid">
        <div id="sobreNos" className="container home1">
          <div className="row">
            <div className="col">
              <h1>A Lyndus é a beauty tech<br/>que está inovando no mercado<br/>de bem-estar.</h1>
              <p><b>Mais que um app,</b>  a Lyndus conecta pessoas e empresas a uma ampla rede de beleza e bem-estar, permitindo que todos sintam-se melhor, com maior autoestima, vivendo e trabalhando com muito mais confiança.</p>
              <div className="row loja">
                <div className="col d-none d-lg-block">
                <a target="_blank" href="https://apps.apple.com/br/app/lyndus/id1577130042">
                    <img src="/footer/app_store.webp" alt="Lyndus app store" width="130"/>
                  </a>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lyndusapp">
                    <img src="/footer/google_play.webp" alt="Lyndus google play" width="130"/>
                  </a>
                </div>
                <div className="col d-lg-none">
                  <a target="_blank" href="https://apps.apple.com/br/app/lyndus/id1577130042">
                    <img src="/footer/app_store.webp" alt="Lyndus app store" width="130"/>
                  </a>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lyndusapp">
                    <img src="/footer/google_play.webp" alt="Lyndus google play" width="130"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-5 d-none d-lg-block">
              <img src="/home/app.webp" className="img-fluid" alt="Lyndus aplicativo"/>
            </div>
          </div>
          <div className="row">
            <div className="col d-lg-none">
              <img src="/home/app.webp" className="img-fluid" alt="Lyndus aplicativo"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid borderTopLeftRadius backColorPurple">
        <div className="container home2">
          <div className="row">
            <div className="col d-none d-lg-block">
              <h2>O incentivo que une empresas<br/>inovadoras, talentos e pessoas que desejam <br/>sentir-se bem e bonitas todo dia.</h2>
            </div>
            <div className="col d-lg-none">
              <h2>O incentivo que une cada vez mais empresas inovadoras com seus talentos.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>A <b>Lyndus</b> acredita que a felicidade é o ápice da beleza.<br/><br/>
              Queremos incentivar as pessoas a serem cada vez mais felizes ao ampliar de maneira fácil seu alcance a serviços de qualidade em nossos <b>Beauty Spots</b>, que são salões de beleza, barbearias, clínicas de estética e centros de bem-estar.<br/><br/>
              Você pode ser <b>Lyndus</b> se cadastrando diretamente no nosso aplicativo.<br/><br/>
              Ou então por meio de um plano de benefício em que empresas, nossos <b>Clients</b>, acessam a plataforma de gestão que oferecemos e concedem o incentivo em créditos para a utilização do serviço por seus colaboradores. 
              </p>
            </div>
            <div className="col d-none d-lg-block"></div>
          </div>
          <div className="row">
            <div className="col d-lg-none"></div>
          </div>
        </div>
      </div>
      <div className="backColorPurple">
        <div className="container-fluid backManifesto borderBottomRightRadius">
          <div className="container home3">
            <div className="row">
              <div className="col d-none d-lg-block">
                <h3>"Sentir-se bem não<br/>pode ser complicado.<br/>Quanto mais simples<br/>e acessível, mais<br/>bonito fica."</h3>
                <p>Manifesto Lyndus</p>
              </div>
              <div className="col d-none d-lg-block"></div>
              <div className="col d-none d-lg-block"></div>
            </div>
            <div className="row">
              <div className="col d-lg-none">
                <h3>"Sentir-se bem não pode ser complicado. Quanto mais simples e acessível, mais bonito fica."</h3>
                <p>Manifesto Lyndus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid backColorPurple borderBottomLeftRadius">
        <div id="comoFunciona" className="container home4">
          <div className="row">
            <div className="col">
              <h4>Como tudo isso funciona? Veja como é simples.</h4>
            </div>
          </div>
          <div className="row">
            <div className="col colunaHome4">
              <img src="/home/incentivo.png" className="img-fluid" alt="Lyndus benefício"/>
              <p><span>1. Incentivo ou Crédito</span><br/>O <b>User Lyndus</b> recebe o incentivo de um <b>Client</b> (empresa na qual trabalha) ou carrega os próprios créditos dentro do aplicativo. Além de acessar a uma ampla rede de serviços, ainda pode contar com vouchers exclusivos, descontos incríveis e muito cashback!</p>
            </div>
            <div className="col colunaHome4">
              <img src="/home/agendamento.png" className="img-fluid" alt="Lyndus agenda"/>
              <p><span>2. Agendamento</span><br/><b>Users escolhem o Beauty Spot</b> (salão de beleza, barbearia, clínica de estética, entre outros) da rede participante. Definem o serviço, realizam agendamento e pronto! <b>O User utiliza seu crédito em qualquer Beauty Spot.</b></p>
            </div>
            <div className="col colunaHome4">
              <img src="/home/app_lyndus.webp" className="img-fluid" alt="Lyndus aplicativo"/>
              <p><span>3. App Lyndus</span><br/><b>Toda a operação</b> é realizada por meio do <b>app Lyndus</b>, de modo fácil e intuitivo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container home5">
          <div className="row">
            <div className="col d-lg-none">
              <img src="/home/client.webp" className="img-fluid imgPqn" alt="Lyndus client"/>
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img src="/home/client.webp" className="img-fluid" alt="Lyndus client"/>
            </div>
            <div className="col">
              <span>O que minha empresa ganha sendo <b>Client</b> Lyndus?</span><br/><br/>
              <p>Tudo o que diretores e RH precisam saber a respeito dessa inovação.</p><br/>
              <Link className="btn" href="/clients">SAIBA MAIS E BAIXE O APP</Link>
            </div>
          </div>
          <div className="row">
            <div className="col d-lg-none">
              <img src="/home/beauty_spot.webp" className="img-fluid imgPqn" alt="Lyndus beauty spot"/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>O que meu negócio ganha sendo <b>Beauty Spot</b> Lyndus?</span><br/><br/>
              <p>Tudo o que proprietários de salão de beleza, barbearia, spa e beauty center precisam saber a respeito dessa inovação.</p><br/>
              <Link className="btn" href="/beautyspots">SAIBA MAIS E BAIXE O APP</Link>
            </div>
            <div className="col d-none d-lg-block">
              <img src="/home/beauty_spot.webp" className="img-fluid" alt="Lyndus beauty spot"/>
            </div>
          </div>
          <div className="row">
            <div className="col d-lg-none">
              <img src="/home/user.webp" className="img-fluid imgPqn" alt="Lyndus user"/>
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img src="/home/user.webp" className="img-fluid" alt="Lyndus user"/>
            </div>
            <div className="col">
              <span>O que as pessoas ganham sendo <b>Users</b> Lyndus?</span><br/><br/>
              <p>Tudo o que colaboradores das empresas provedoras do incentivo precisam saber a respeito dessa inovação.</p><br/>
              <Link className="btn" href="/users">SAIBA MAIS E BAIXE O APP</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid borderTopRightRadius backColorPurple">
        <div className="container home6">
          <div className="row">
            <div className="col d-none d-lg-block">
              <p>Do cabelo ao make,<br/>do corpo à mente,<br/>esse bem que se cria<br/>e se compartilha<br/>transforma incentivo<br/>numa corrente<br/>de confiança.</p><br/>
              <span>#VenhaSerLyndus</span>
            </div>
            <div className="col d-lg-none">
              <p>Do cabelo ao make, do corpo à mente, esse bem que se cria e se compartilha transforma incentivo numa corrente de confiança.</p><br/>
              <span>#VenhaSerLyndus</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box-cookies hide">
        <p className="msg-cookies">Este site usa cookies para garantir que você obtenha a melhor experiência.</p>
        <button className="btn-cookies">ACEITAR!</button>
      </div>
      <script
            dangerouslySetInnerHTML={{
              __html: `
              (() => {
                if (!localStorage.pureJavaScriptCookies) {
                  document.querySelector(".box-cookies").classList.remove('hide');
                }
                
                const acceptCookies = () => {
                  document.querySelector(".box-cookies").classList.add('hide');
                  localStorage.setItem("pureJavaScriptCookies", "accept");
                };
                
                const btnCookies = document.querySelector(".btn-cookies");
                
                btnCookies.addEventListener('click', acceptCookies);
              })();
              `,
            }}
            ></script>
    </div>
  )
}

export default Home