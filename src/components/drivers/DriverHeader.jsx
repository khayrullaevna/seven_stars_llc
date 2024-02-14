import React from 'react'

export default function DriverHeader() {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators"> 
            <li data-target="#carouselExampleIndicators" data-slide-to="0"      className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="img/aaa.jpg" alt="Firstslide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/1111.jpeg" alt="Secondslide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/a.jpg" alt="Thirdslide"/>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

        </div>
    </div>
  )
}
