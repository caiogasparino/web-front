import React from 'react'

const BeautySpots = () => {
  // IBGE

  const [uf, setUf] = React.useState('AC')
  const [listUf, setListUf] = React.useState([])
  const [city, setCity] = React.useState('')
  const [listCity, setListCity] = React.useState([])

  function loadUf() {
    let url = 'https://servicodados.ibge.gov.br/'
    url = url + 'api/v1/localidades/estados'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome))
        setListUf([...data])
      })
  }

  function loadCity(id) {
    let url = 'https://servicodados.ibge.gov.br/api/v1/'
    url = url + `localidades/estados/${id}/municipios`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome))
        setListCity([...data])
      })
  }

  React.useEffect(() => {
    loadUf()
  }, [])

  React.useEffect(() => {
    if (uf) {
      loadCity(uf)
    }
  }, [uf])

  // Troca o ID do Estado pela Sigla
  const ufFiltered = listUf.filter((x) => (x.id == uf ? x.sigla : null))
  const sigla = ufFiltered[0]?.sigla

  // NODEMAILER

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  function sendMail() {
    const form = document.getElementById('form')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      onClick()

      const assunto = document.getElementById('assunto').value
      const nome = document.getElementById('nome').value
      const email = document.getElementById('email').value
      const empresa = document.getElementById('empresa').value
      const cidade = document.getElementById('cidade').value
      const estado = sigla

      fetch('api/post/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assunto,
          nome,
          email,
          empresa,
          cidade,
          estado,
        }),
      })
    })
  }

  return (
    <div>
      <div className="container-fluid backBeautySpots borderBottomRightRadius">
        <div className="container beautySpots1">
          <div className="row">
            <div className="col">
              <p>
                <b>Beauty Spots Lyndus</b>
                <br />
                para negócios
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container beautySpots2">
          <div className="row">
            <div className="col">
              <p>
                A <b>Lyndus</b> conecta o seu salão, barbearia, clínica de
                estética ou centro de bem-estar
                <br />a uma série de novas oportunidades com muita tecnologia,
                ferramentas de gestão
                <br />e estratégias inovadoras de incentivo para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid borderTopLeftRadius backColorLilac">
        <div className="container beautySpots3">
          <div className="row">
            <div className="col">
              <p>Seu negócio ganha em:</p>
              <br />
              <ul>
                <li>Quantidade de novos clientes;</li>
                <li>Fidelização de clientes;</li>
                <li>
                  Nova ferramenta de gestão e operação para o seu negócio;
                </li>
                <li>Crescimento em vendas e faturamento;</li>
                <li>
                  Oportunidades de capacitação e retenção de profissionais;
                </li>
                <li>Motivação da equipe.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backColorPurple">
        <div className="container-fluid backPin borderBottomRightRadius d-none d-lg-block">
          <div className="container beautySpots4">
            <div className="row">
              <div className="col d-none d-lg-block"></div>
              <div className="col d-none d-lg-block">
                <p className="hashTagWhite">#VenhaSerLyndus</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid backPinMobile borderBottomRightRadius d-lg-none"></div>
      </div>
      <div className="container-fluid backColorPurple">
        <div id="contato" className="container beautySpots5">
          <div className="row">
            <div className="col">
              <p>
                Os usuários do aplicativo Lyndus ganham incentivo para procurar
                um Beauty Spot parceiro, e isso fortalece os negócios
                participantes do sistema. Quer fazer parte ou receber mais
                informações?
              </p>
              <br />
              <p>
                <span>Preencha agora mesmo o formulário.</span>
              </p>
            </div>
            <div className="col">
              <form id="form" className="miniForm">
                <input
                  type="hidden"
                  value="Contato do site | BEAUTY SPOTS"
                  id="assunto"
                />
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome Completo"
                  />
                  <label htmlFor="nome">Nome Completo</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nome@email.com"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="empresa"
                    placeholder="Empresa"
                  />
                  <label htmlFor="empresa">Empresa</label>
                </div>
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="estado"
                    aria-label="Floating label select"
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    required
                  >
                    <option key="0" value="0">
                      Selecione
                    </option>
                    {listUf.map((a, b) => (
                      <option key={b} value={a.id}>
                        {a.sigla} - {a.nome}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="estado">Estado</label>
                </div>
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="cidade"
                    aria-label="Floating label select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  >
                    <option key="0" value="0">
                      Selecione
                    </option>
                    {listCity.map((a, b) => (
                      <option key={b} value={a.sigla}>
                        {a.nome}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="cidade">Cidade</label>
                </div>
                <button onClick={sendMail} className="btn">
                  ENVIAR
                </button>
                <div className="form-floating">
                  {showResults ? (
                    <p id="success">
                      Mensagem enviada, agora é só aguardar o nosso contato.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeautySpots
