import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="publications">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Publications</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/nativescriptvue.jpeg' width="280px" class="lazy card-img-top" alt="Building Mobile Apps With Angular or Vue.js and NativeScript"/>
                    <div className="desc">
                        <h3>Building Mobile Apps With Angular or Vue.js and NativeScript</h3>
                        <p>In this article, we go over to quickly make mobile applications using NativeScript plus Angular and NativeScript plus Vue.js.
                        </p>
                        <a href="https://dzone.com/articles/building-mobile-apps-with-angular-and-nativescript" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/nativescriptangular.jpg' width="280px" class="lazy card-img-top" alt="Angular and NativeScript"/>
                    <div className="desc">
                        <h3>Angular and NativeScript</h3>
                        <p>In this article, we go over to quickly make mobile applications using NativeScript plus Angular.</p>
                        <a href="https://www.slideshare.net/slideshow/embed_code/key/urM9U3FWoUWYSN" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <img src='images/microservices.jpeg' width="280px" class="lazy card-img-top" alt="Microservices? Yes, but No Spaghetti, Please!"/>
                    <div className="desc">
                        <h3>Microservices? Yes, but No Spaghetti, Please!</h3>
                        <p>Microservices bring many benefits, but make sure you're not adding more complexity than you need and getting bogged down with spaghetti code.</p>
                        <a href="https://dzone.com/articles/microservices-yes-but-no-spaghetti-please" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <img src='images/yeoman.png' width="280px" class="lazy card-img-top" alt="Create Your Own Yeoman Generator"/>
                    <div className="desc">
                        <h3>Create Your Own Yeoman Generator</h3>
                        <p>Sometimes you may have some specific setup that you like to use in your own projects. Because you don’t want to reinvent your own wheel in every project, it makes sense to abstract all the boilerplate into your own generator. In this situation you can build your own Yeoman generator. This will kick-start your projects.</p>
                        <a href="https://dzone.com/articles/create-your-own-yeoman" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>

            </div>
        </div>
        </section>
      </div>
    )
  }
}
