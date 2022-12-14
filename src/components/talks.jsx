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
                <div className="services color-3">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/JtNis5Nphro" title="Vue3 and React with hooks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Build a Tesla Battery Range Calculator with Vue.js or React (December 2020)</h3>
                        <p>I give a talk about building a Dashboard in Vue 3 and React (with hooks) @JSandFriendsConf. We are going to make a dashboard with which we can calculate how much range the Tesla models has under different circumstances (speed, wheelsize ect.)
                        </p>
                        <a href="https://www.youtube.com/watch?v=JtNis5Nphro" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/aITJrCBLUNA" title="Web APIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Make your webapp Progressive with awesome Web APIs (November 2020)</h3>
                        <p>In this talk, Peter will show some advanced PWA features that provide access to your hardware APIs. We are going to build an app for making selfies with the Media Capture API, Geolocation API and posting selfies with the BackgroundSync Api. And also we are enabling Face Recognition and Speech Recognition, Vitual Reality and AR in our App. This is now possible on the Web! 
                        </p>
                        <a href="https://www.youtube.com/watch?v=aITJrCBLUNA" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/Z7-SAmtMwZQ" title="Micro frontends" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Micro frontends: the What, the Why and the How (October 2020)</h3>
                        <p>In this session Peter Eijgermans focuses on extending the concepts of microservices to the frontend world. This results in Micro Frontends. 
                        </p>
                        <a href="https://www.youtube.com/watch?v=Z7-SAmtMwZQ" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/sP7dtZm_Wx0" title="Vue and React" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Build a Tesla Battery Range Calculator with Vue.js or React (September 2020)</h3>
                        <p>I give a talk about building a Dashboard in Vue and React @CityJS. We are going to make a dashboard with which we can calculate how much range the Tesla models has under different circumstances (speed, wheelsize ect.)
                        </p>
                        <a href="https://www.youtube.com/watch?v=sP7dtZm_Wx0" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/8IOn81cRMZI" title="Micro frontends and Monoliths" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Micro frontends: the What, the Why and the How (Ordina Online, May 2020)</h3>
                        <p>In 1997 Peter Eijgermans was attacked by a rhinoceros in Nepal / Tibet. In this context, the rhinoceros represents a Monolith. Peter used this metaphor to start his talk. He focusses on Integration Approaches to build Micro Frontends and show some code examples.
                        </p>
                        <a href="https://www.youtube.com/watch?v=8IOn81cRMZI&feature=youtu.be" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/pwa.png' width="280px" class="lazy card-img-top" alt="Progressive Web Applications: The What, the Why and the How"/>

                    <div className="desc">
                        <h3>Progressive Web Applications: The What, the Why and the How (GDG Heraclion, Sept 2019)</h3>
                        <p>Progressive web apps are websites that look and feel like an app. This means users can access all information and capabilities without downloading a mobile app.
                        </p>
                        <a href="https://www.slideshare.net/secret/IKGzzgMMEsSdH8" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>

                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/rhino_monolith.jpeg' width="280px" class="lazy card-img-top" alt="Micro-frontends: the What, the Why and the How"/>
                    <div className="desc">
                        <h3>Micro frontends: the What, the Why and the How (Ordina Groningen, Oct 2019)</h3>
                        <p>In this interactive session Peter Eijgermans focuses on extending the concepts of microservices to the frontend world. This results in Micro Frontends.
                        I start this story with my adventure with a rhino in Nepal. That is a monolith that you must first defeat before continuing with Micro Frontends!
                        </p>
                        <a href="https://www.slideshare.net/secret/44kcAPk607XegA" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/EkEADLsJmcM" title="Monolith or Microservices" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>"Monolith or Microservices: That Is The Question" (IndyPy - Python Web Conf, August 2019)</h3>
                        <p>In 1997 Peter Eijgermans was attacked by a rhinoceros in Nepal / Tibet. In this context, the rhinoceros represents a Monolith. Peter used this metaphor to start his talk about Monolith or Microservices. He also focusses on Micro Frontends and speeding up development with cross-functional teams.
                        </p>
                        <a href="https://www.youtube.com/watch?v=EkEADLsJmcM&list=PLt4L3V8wVnF5ph1PP6h7qFfH6DI8xWlpJ&index=22&t=0s" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <img src='images/firebase_vue.png' width="280px" class="lazy card-img-top" alt="Building apps with NativeScript, Vue en Firebase"/>

                    <div className="desc">
                        <h3>Building apps with NativeScript, Vue en Firebase (GDG Heraclion, Sept 2019)</h3>
                        <p>For GDG Heraclion I give a talk about building a 'Music Streaming App' app with NativeScript and Vue. For the backend I used Firebase.
                        </p>
                        <a href="https://github.com/petereijgermans11/workshop-nativescript-firebase" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/vkgDlh4kZfg" title="Voxxed days NativeScript" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>Reuse your web skills to build native apps with nativescript (Voxxed days Frontend, May 2019)</h3>
                        <p>In this session Peter Eijgermans will introduce NativeScript and show how easy it is to reuse your Angular en Vue skills to build awesome native apps. To speed up development he uses Nativescriot Playground.
                        </p>
                        <a href="https://www.youtube.com/watch?v=vkgDlh4kZfg" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/GIWKX9J7HXA" title="NativeScript versus PWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>NativeScript versus PWA (Manchester Web Meetup YLD, March 2019)</h3>
                        <p>In this session you???ll learn what NativeScript is, how it works, and how to use the framework to build iOS and Android apps. Peter also answer the question when to choose for PWA???s or JavaScript-driven native app frameworks like NativeScript
                        </p>
                        <a href="https://www.youtube.com/watch?v=GIWKX9J7HXA" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <img src='images/microservicesormonolith.jpg' width="270px" class="lazy card-img-top" alt="Microservices or Monolith"/>
                    <div className="desc">
                        <h3>Microservices or Monolith (April 2019)</h3>
                        <p>In 1997 i was attacked by a rhinoceros in Nepal / Tibet (hence that Tibetan cap) . In this context, the rhinoceros represents a Monolith. I used this metaphore to start my talk about Monolith or Microservices.</p>
                        <a href="https://www.slideshare.net/slideshow/embed_code/key/t4V7uKe7udR1hW" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/HyvC0t2jH1g" title="NativeScript with Angular or Vue.js" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                    <div className="desc">
                        <h3>NativeScript with Angular or Vue.js (PHP Conference Berlin, April 2018)</h3>
                        <p>In this session you???ll learn what NativeScript is, how it works, and how to use the framework to build iOS and Android apps. The main focus will be on building apps with Angular or Vue.js with NativeScript.
                        </p>
                        <a href="https://www.youtube.com/watch?v=HyvC0t2jH1g" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <iframe width="275" height="150" src="https://www.youtube.com/embed/4RILEdh3PUo" title="Building apps with NativeScript" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <div className="desc">
                        <h3>Building apps with NativeScript (Code & Comedy, September 2017)</h3>
                        <p>Are you a web developer who always wanted to write an app for both iOS and Android, but want to write it only once? Do you want a true, performant, native app, but don???t want to learn yet another language, yet another framework? With NativeScript, this is easier than you might think! NativeScript is an open source framework that lets you build truly native apps from one code base using Angular, Vue.js, TypeScript or JavaScript.</p>
                        <a href="https://www.youtube.com/watch?v=4RILEdh3PUo" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Check It Out</a>
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
