import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="talks">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Talks</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/vkgDlh4kZfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Reuse your web skills to build native apps with nativescript (Voxxed days Frontend, May 2019)</h3>
                        <p>In this session Peter Eijgermans will introduce NativeScript and show how easy it is to reuse your Angular en Vue skills to build awesome native apps. To speed up development he uses Nativescriot Playground.
                        </p>
                        <a href="https://www.youtube.com/watch?v=vkgDlh4kZfg" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/GIWKX9J7HXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>NativeScript versus PWA (Manchester Web Meetup YLD, March 2019)</h3>
                        <p>In this session you’ll learn what NativeScript is, how it works, and how to use the framework to build iOS and Android apps. Peter also answer the question when to choose for PWA’s or JavaScript-driven native app frameworks like NativeScript
                        </p>
                        <a href="https://www.youtube.com/watch?v=GIWKX9J7HXA" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/EkEADLsJmcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>"Monolith or Microservices: That Is The Question" (IndyPy - Python Web Conf, August 2019)</h3>
                        <p>In 1997 Peter Eijgermans was attacked by a rhinoceros in Nepal / Tibet. In this context, the rhinoceros represents a Monolith. Peter used this metaphor to start his talk about Monolith or Microservices. He also focusses on Micro Frontends and speeding up development.
                        </p>
                        <a href="https://www.youtube.com/watch?v=EkEADLsJmcM&list=PLt4L3V8wVnF5ph1PP6h7qFfH6DI8xWlpJ&index=22&t=0s" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <img src='images/microservicesormonolith.jpg' width="280px" class="lazy card-img-top" alt="building apps with NativeScript en Firebase"/>
                    <div className="desc">
                        <h3>Microservices or Monolith (April 2019)</h3>
                        <p>In 1997 i was attacked by a rhinoceros in Nepal / Tibet (hence that Tibetan cap) . In this context, the rhinoceros represents a Monolith. I used this metaphore to start my talk about Monolith or Microservices.</p>
                        <a href="https://www.slideshare.net/slideshow/embed_code/key/t4V7uKe7udR1hW" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/HyvC0t2jH1g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>NativeScript with Angular or Vue.js (PHP Conference Berlin, April 2018)</h3>
                        <p>In this session you’ll learn what NativeScript is, how it works, and how to use the framework to build iOS and Android apps. The main focus will be on building apps with Angular or Vue.js with NativeScript.
                        </p>
                        <a href="https://www.youtube.com/watch?v=HyvC0t2jH1g" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/4RILEdh3PUo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <div className="desc">
                        <h3>Building apps with NativeScript (Code & Comedy, September 2017)</h3>
                        <p>Are you a web developer who always wanted to write an app for both iOS and Android, but want to write it only once? Do you want a true, performant, native app, but don’t want to learn yet another language, yet another framework? With NativeScript, this is easier than you might think! NativeScript is an open source framework that lets you build truly native apps from one code base using Angular, Vue.js, TypeScript or JavaScript.</p>
                        <a href="https://www.youtube.com/watch?v=4RILEdh3PUo" target="_blank" class="btn btn-primary">Check It Out</a>
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
