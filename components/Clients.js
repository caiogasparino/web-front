import React, { useEffect, useState } from 'react'

const Clients = () => {
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
      const pergunta = document.getElementById('pergunta').value
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
          pergunta,
        }),
      })
    })
  }

  return (
    <div>
      <div className="container-fluid backClients borderBottomRightRadius">
        <div className="container clients1">
          <div className="row">
            <div className="col">
              <p>
                <b>Clients Lyndus</b>
                <br />
                para empresas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container clients2">
          <div className="row">
            <div className="col">
              <p>
                A <b>Lyndus</b> traz de forma inovadora benefícios que
                proporcionam bem-estar
                <br />e confiança aos colaboradores da sua empresa.
              </p>
              <br />
              <p>
                Por meio de um <b>plano de benefícios</b>, os colaboradores
                recebem incentivo
                <br />
                para serviços em salões, barbearias, clínicas de estética, spas
                e centros de bem-estar.
              </p>
              <br />
              <p>
                De forma simples, por meio do app <b>Lyndus</b>, eles utilizam
                esses serviços sem preocupação.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid borderTopLeftRadius backColorLilac">
        <div className="container clients3">
          <div className="row">
            <div className="col">
              <p>E sua empresa também se beneficia, conquistando:</p>
              <br />
              <ul>
                <li>Produtividade, com pessoas mais satisfeitas;</li>
                <li>Controle e gestão do sistema;</li>
                <li>
                  Flexibilidade na forma de recompensa, podendo alterar o valor
                  ou incentivar por meio de campanhas (sazonal);
                </li>
                <li>Reconhecimento à gestão e ao RH;</li>
                <li>Engajamento e motivação;</li>
                <li>Mais auto-estima, equilíbrio e bem-estar para todos;</li>
                <li>Gente bonita, confiante e feliz.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backColorPurple">
        <div className="container-fluid backTotem borderBottomRightRadius d-none d-lg-block">
          <div className="container clients4">
            <div className="row">
              <div className="col d-none d-lg-block"></div>
              <div className="col d-none d-lg-block">
                <p>
                  Aumente o reconhecimento de sua empresa como um excelente
                  lugar para trabalhar.
                </p>
                <span>#VenhaSerLyndus</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid backTotemMobile borderBottomRightRadius d-lg-none"></div>
      </div>
      <div className="container-fluid backColorPurple">
        <div id="contato" className="container clients5">
          <div className="row">
            {/*
            <div className="col">
              <p>
                As empresas <b>Clients Lyndus</b> ganham o reconhecimento pela forma inovadora que incentivam seus
                colaboradores. E em tempos de competitividade e muita criatividade, isso vale muito. Quer fazer parte ou
                receber mais informações?
              </p>
              <br />
              <p>
                <span>Preencha agora mesmo o formulário.</span>
              </p>
            </div>
            */}
            <div className="col">
              <p>
                Quer saber mais sobre a <b>Lyndus</b>?
              </p>
              <br />
              <p>
                Gostaria que a sua empresa tivesse um plano <b>Lyndus</b>? Diga
                onde trabalha e nós entraremos em contato com ela.
              </p>
              <br />
              <p>
                <span>Envie sua mensagem.</span>
              </p>
            </div>
            <div className="col">
              <form id="form" className="miniForm">
                <input
                  type="hidden"
                  value="Contato do site | CLIENTS"
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
                  <label htmlFor="nome">Seu Nome</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nome@email.com"
                    required
                  />
                  <label htmlFor="email">Seu Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="empresa"
                    placeholder="Empresa"
                    required
                  />
                  <label htmlFor="empresa">Empresa que trabalha</label>
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
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="pergunta"
                    placeholder="Pergunta"
                  />
                  <label htmlFor="empresa">
                    Escreva aqui sua pergunta ou sua sugestão
                  </label>
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

export default Clients
