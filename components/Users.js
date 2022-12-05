import React from 'react'

const Users = () => {
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
      <div className="container-fluid backUser borderBottomRightRadius">
        <div className="container users1">
          <div className="row">
            <div className="col">
              <p>
                <b>User Lyndus</b>
                <br />
                para pessoas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container users2">
          <div className="row">
            <div className="col">
              <p>
                A <b>Lyndus</b> traz de forma inovadora benefícios que
                proporcionam bem-estar e confiança.
              </p>
              <br />
              <p>
                Todo <b>User Lyndus</b> conta com uma rede de serviços em
                salões, barbearias,
                <br />
                clínicas de estética, spas e centros de bem-estar à sua
                disposição para escolher a melhor
                <br />
                maneira de utilizar os créditos carregados ou recebidos por meio
                do incentivo.
              </p>
              <br />
              <p>
                Tudo na palma da mão, encontrando facilmente via app seu{' '}
                <b>Beauty Spot</b> preferido
                <br />
                para agendar o serviço desejado e aproveitar muitas promoções,
                descontos e cashback.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid borderTopLeftRadius backColorLilac">
        <div className="container users3">
          <div className="row">
            <div className="col">
              <p>Quem é User Lyndus conta com:</p>
              <br />
              <ul>
                <li>Economia em gastos com bem-estar e cuidados pessoais;</li>
                <li>Segurança no uso do app;</li>
                <li>Diversas opções de escolha em sua região;</li>
                <li>Acesso a promoções e serviços exclusivos;</li>
                <li>Maior auto-estima, equilíbrio, confiança e bem-estar;</li>
                <li>
                  Aumento de produtividade, felicidade e qualidade de vida.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backColorPurple">
        <div className="container-fluid backUsers borderBottomRightRadius d-none d-lg-block">
          <div className="container users4">
            <div className="row">
              <div className="col d-none d-lg-block">
                <p className="hashTagWhite">#VenhaSerLyndus</p>
              </div>
              <div className="col d-none d-lg-block"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid backUsersMobile borderBottomRightRadius d-lg-none"></div>
      </div>
      <div className="container-fluid backColorPurple">
        <div id="contato" className="container users5">
          <div className="row">
            <div className="col">
              <p>
                <span>Sua empresa ainda não conhece o Lyndus?</span>
              </p>
              <br />
              <p>
                Fale com o RH da empresa em que trabalha ou envie sua mensagem
                aqui para que a Lyndus entre em contato.
              </p>
            </div>
            <div className="col">
              <form id="form" className="miniForm">
                <input
                  type="hidden"
                  value="Contato do site | USERS"
                  id="assunto"
                />
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome Completo"
                    required
                  />
                  <label htmlFor="nome">Nome do Responsável</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nome@email.com"
                    required
                  />
                  <label htmlFor="email">Email do Responsável</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="empresa"
                    placeholder="Empresa"
                    required
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

export default Users
