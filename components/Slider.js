const Slider = () => {

  return (
    <div id="carouselIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="sliderIndicador active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" className="sliderIndicador" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" className="sliderIndicador" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" className="sliderIndicador" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/slider/home-1.webp" className="d-block w-100" alt="Lyndus - O incentivo que faz bem!"/>
          <div className="carousel-caption d-none d-lg-block">
            <p>
              <b>Lyndus</b><br/>-<br/>Faz bem para<br/>sua <img src="/slider/petala.webp" alt="Lyndus - O incentivo que faz bem!"/> empresa
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/slider/home-2.webp" className="d-block w-100" alt="Lyndus - O incentivo que faz bem!"/>
          <div className="carousel-caption d-none d-lg-block">
            <p>
              <b>Lyndus</b><br/>-<br/>Faz bem para<br/>seus <img src="/slider/petala.webp" alt="Lyndus - O incentivo que faz bem!"/> colaboradores
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/slider/home-3.webp" className="d-block w-100" alt="Lyndus - O incentivo que faz bem!"/>
          <div className="carousel-caption d-none d-lg-block">
            <p>
              <b>Lyndus</b><br/>-<br/>Faz bem<br/>para <img src="/slider/petala.webp" alt="Lyndus - O incentivo que faz bem!"/> você
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/slider/home-4.webp" className="d-block w-100" alt="Lyndus - O incentivo que faz bem!"/>
          <div className="carousel-caption d-none d-lg-block">
            <p>
              <b>Lyndus</b><br/>-<br/>O incentivo<br/>que faz bem <img src="/slider/petala.webp" alt="Lyndus - O incentivo que faz bem!"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider