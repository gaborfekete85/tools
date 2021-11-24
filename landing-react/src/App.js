import React, { useState, useEffect } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'boxicons';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/line-icons.css';
import "aos/dist/aos.css";
import './App.css';
import "boxicons/css/boxicons.min.css";

// images
import location from './img/location3.jpg';
import hobby from './img/config-hobby2.jpg';
import community from './img/community.jpg';
import backgroundHome from './img/pexels-fauxels-3183198.jpg';
import backgroundServices from './img/pexels-fauxels-3183198.jpg';
import backgroundCounters from './img/pexels-tetyana-kovyrina-10205573.jpg';
import avatar1 from './img/avatar1.jpg';
import avatar2 from './img/avatar2.jpg';
import avatar3 from './img/avatar3.jpg';
import sirbu from './img/pexels-mălina-sîrbu-8841727.jpg';
import contact from './img/contact.jpg';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};


const scrollFunction = () => {
  const mainNavbar = document.getElementById("mainNavbar");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 80) {
    //document.getElementById("navbarScroll").style.padding = "30px 10px";
    //document.getElementById("logo").style.fontSize = "25px";
    //document.getElementById("mainNavbar").style["box-shadow"] = "0 12px 20px rgba(0,0,0,0.2)";
    //document.getElementById("mainNavbar").style["background-color"] = "#fff";

    if(!mainNavbar.classList.contains('bg-white')) {
        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.remove('navbar-no-shadow');
        mainNavbar.classList.add('bg-white');
        mainNavbar.classList.add('navbar-shadow');
    }
    } else {
      if(!mainNavbar.classList.contains('bg-transparent')) {
        mainNavbar.classList.remove('bg-white');
        mainNavbar.classList.remove('navbar-shadow');
        mainNavbar.classList.add('bg-transparent');
        mainNavbar.classList.add('navbar-no-shadow');
      }
    //document.getElementById("mainNavbar").style["box-shadow"] = "0 0px 0px rgba(0,0,0,0.2)";
    //document.getElementById("mainNavbar").style["background"] = "transparent";
    //document.getElementById("mainNavbar").style["color"] = "#fff";
    //document.getElementById("navbarScroll").style.padding = "80px 10px";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    //window.onscroll = () => {scrollFunction};
    AOS.init({
      // initialise with other settings
      duration : 800
    });
  }, []);

  return (
  <div data-bs-spy="scroll" data-bs-target=".navbar" data-offset="70">
      <Navigation />
      <Home />
      <About />
      <Services />
      <Features />
      <Counters />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
  </div>)
};


const Navigation = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <nav id="mainNavbar" data-aos="fade-down" class="navbar fixed-top navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#">JUMPION.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav ms-auto" style={{ "--bs-scroll-height": "100px;" }}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#features" tabindex="-1" aria-disabled="true">Features</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#reviews" tabindex="-1" aria-disabled="true">Reviews</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#blog" tabindex="-1" aria-disabled="true">Blog</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const Home = ({ children }) => {
  return (
    <section id="home" class="bg-cover home-section" style={{ backgroundImage: `url(${backgroundHome})` }}>
        <div class="overlay"></div>
        <div class="container text-white text-center">
            <div class="row">
                <div class="col-12">
                    <h1 class="display-4" data-aos="zoom-in" data-aos-duration="200">We Design Remarkable and<br/> Stunning Bootstrap Websites</h1>
                    <p class="my-4" data-aos="zoom-in" data-aos-duration="600">
                        There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Quasi necessitatibus earum odio quisquam ipsa ratione dicta itaque soluta porro mollitia.
                    </p>
                    <a href="#" class="btn btn-main">Get Started</a>
                </div>
            </div>
        </div>
    </section>
  )
}

const About = ( { children }) => {
  return (
    <section id="about" class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-12 section-intro text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1>First Steps</h1>
            <div class="divider"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quis cumque. <br />Cumque culpa vitae natus, tempora a omnis temporibus nulla itaque quibusdam voluptatibus qui, aliquam maiores adipisci ad consectetur!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service" data-aos-offset="200" data-aos="flip-left" data-aos-duration="1000">
              <div class="service-image">
                <img src={location} />
                <div class="icon"><i>1</i></div>
              </div>
              <h5 class="mt-5 pt-3">Enable your Location</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus!</p>
            </div>
          </div>

          <div class="col-md-4" data-aos-offset="200" data-aos="flip-right" data-aos-duration="1000">
            <div class="service">
              <div class="service-image">
                <img src={hobby} />
                <div class="icon"><i>2</i></div>
              </div>
              <h5 class="mt-5 pt-3">Configure Your Hobbies</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus!</p>
            </div>
          </div>

          <div class="col-md-4" data-aos-offset="200" data-aos="flip-up" data-aos-duration="1000">
            <div class="service" style={{ paddingTop: '120px'}}>
              <div class="service-image">
                <img src={community} />
                <div class="icon"><i>3</i></div>
              </div>
              <h5 class="mt-5 pt-3">Open your Community</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
)
}

const Services = ( { children }) => {
  return (
    <section id="services" class="bg-cover" style={{ backgroundImage: `url(${backgroundServices})` }} data-aos="fade-up" data-aos-duration="1000">
    <div class="overlay"></div>
    <div class="container text-white text-center">
      <div class="row">
        <div class="col-12">
          <h1 class="display-4">Services</h1>
          <p class="my-4">
            There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Quasi necessitatibus earum odio quisquam ipsa ratione dicta itaque soluta porro mollitia.
          </p>
          <div>
            <a href="" class="video-btn"><i class='bx bx-play' ></i></a>
          </div>
        </div>
      </div> 
    </div>
  </section>
  )
}

const Features = ( { children }) => {
  return (
    <section id="features" data-aos="fade-up">
    <div class="container text-black text-center">
      <div class="row">
        <div class="col-12">
          <h1 class="display-4">Our Features </h1>
          <p class="my-4">
            There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Quasi necessitatibus earum odio quisquam ipsa ratione dicta itaque soluta porro mollitia.
          </p>
        </div>
      </div> 
      <div class="row gx-4 gy-5">
        <div class="col-md-4 feature" data-aos-duration="1000">
          <div class="icon"><i class="icon-tools"></i></div>
          <h5 class="mt-4 mb-3">Features</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor doloremque iste tempora ab repellat explicabo error. Dignissimos, accusantium impedit!</p>
        </div>

        <div class="col-md-4 feature" data-aos-duration="1500">
          <div class="icon"><i class="icon-browser"></i></div>
          <h5 class="mt-4 mb-3">Features</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor doloremque iste tempora ab repellat explicabo error. Dignissimos, accusantium impedit!</p>
        </div>

        <div class="col-md-4 feature" data-aos-duration="1000">
          <div class="icon"><i class="icon-calendar"></i></div>
          <h5 class="mt-4 mb-3">Features</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor doloremque iste tempora ab repellat explicabo error. Dignissimos, accusantium impedit!</p>
        </div>

        <div class="col-md-4 feature" data-aos-duration="1500">
          <div class="icon"><i class="icon-camera"></i></div>
          <h5 class="mt-4 mb-3">Features</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor doloremque iste tempora ab repellat explicabo error. Dignissimos, accusantium impedit!</p>
        </div>

        <div class="col-md-4 feature" data-aos-duration="2000">
          <div class="icon"><i class="icon-scissors"></i></div>
          <h5 class="mt-4 mb-3">Features</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor doloremque iste tempora ab repellat explicabo error. Dignissimos, accusantium impedit!</p>
        </div>

        <div class="col-md-4 feature" data-aos-duration="1000">
          <div class="icon"><i class="icon-strategy"></i></div>
          <h5 class="mt-4 mb-3">Features</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor doloremque iste tempora ab repellat explicabo error. Dignissimos, accusantium impedit!</p>
        </div>
      </div>
    </div>
</section>
  )
}

const Counters = ( { children}) => {
  return (
    <section id="counters " class="bg-cover" style={{ backgroundImage: `url(${backgroundCounters})` }} data-aos="fade-up" data-aos-duration="1000">
      <div class="overlay"></div>
      <div class="container text-white text-center">
        <div class="row gy-4">
          <div class="col-md-3">
            <div><i class="icon-trophy h1"></i>
              <h1 class="mt-3 mb-2">45,00</h1>
              <p>Awards won</p>
            </div>
          </div>

          <div class="col-md-3">
            <div><i class="icon-camera h1"></i>
              <h1 class="mt-3 mb-2">120K</h1>
              <p>Pictures Taken</p>
            </div>
          </div>

          <div class="col-md-3">
            <div><i class="icon-happy h1"></i>
              <h1 class="mt-3 mb-2">30+</h1>
              <p>Happy Clients</p>
            </div>
          </div>

          <div class="col-md-3">
            <div><i class="icon-paintbrush h1"></i>
              <h1 class="mt-3 mb-2">134,005</h1>
              <p>Themes Designed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const Reviews = ( { children }) => {
  return (
  <section id="reviews" data-aos="fade-up" data-aos-duration="1000">
  <div class="container text-black">
    <div class="row">
      <div class="col-12  text-center">
        <h1 class="display-4">Our Testimonials </h1>
        <p class="my-4">
          There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Quasi necessitatibus earum odio quisquam ipsa ratione dicta itaque soluta porro mollitia.
        </p>
      </div>
      </div>


      <div class="row g-4 text-start">
      <div class="col-md-4">
        <div class="review p-4">
          <div class="person">
            <img src={avatar1} alt="" />
            <div class="text ms-3 pb-4">
              <h6 class="mb-0">John Walker</h6>
              <small>Google</small>
            </div>
          </div>
          <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto reprehenderit laboriosam
            labore saepe, dolorem possimus praesentium natus quibusdam velit.</p>
          <div class="stars">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half'></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="review p-4">
          <div class="person">
            <img src={avatar2} alt="" />
            <div class="text ms-3 pb-4">
              <h6 class="mb-0">John Walker</h6>
              <small>Google</small>
            </div>
          </div>
          <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto reprehenderit laboriosam
            labore saepe, dolorem possimus praesentium natus quibusdam velit.</p>
          <div class="stars">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half'></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="review p-4">
          <div class="person">
            <img src={avatar3} alt="" />
            <div class="text ms-3 pb-4">
              <h6 class="mb-0">John Walker</h6>
              <small>Google</small>
            </div>
          </div>
          <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto reprehenderit laboriosam
            labore saepe, dolorem possimus praesentium natus quibusdam velit.</p>
          <div class="stars">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
    </div>  
    </div>
</section>)
}

const Blog = ( { children }) => (
  <section id="blog" class=" bg-light" data-aos="fade-up" data-aos-duration="1000">
      <div class="container text-black">
        <div class="row">
          <div class="col-12  text-center">
            <h1 class="display-4">Blog</h1>
            <div class="divider"></div>
            <p class="my-4">
              There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Quasi necessitatibus earum odio quisquam ipsa ratione dicta itaque soluta porro mollitia.
            </p>
          </div>
        </div>

        <div class="row text-start">
          <div class="col-md-4">
            <img src={location} alt="" />
            <div class="mt-4">
              <small>Posted in <a href="#">Web Design</a>, 10 Nov 2021</small>
              <h5 class="mt-2 mb-2"><a href="#">How to design a website ?</a></h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dolores voluptate sapiente assumenda, veritatis esse.</p>
            </div>
          </div>

          <div class="col-md-4">
            <img src={backgroundCounters} alt="" />
            <div class="mt-4">
              <small>Posted in <a href="#">Web Design</a>, 10 Nov 2021</small>
              <h5 class="mt-2 mb-2"><a href="#">How to design a website ?</a></h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dolores voluptate sapiente assumenda, veritatis esse.</p>
            </div>
          </div>

          <div class="col-md-4">
            <img src={sirbu} alt="" />
            <div class="mt-4">
              <small>Posted in <a href="#">Web Design</a>, 10 Nov 2021</small>
              <h5 class="mt-2 mb-2"><a href="#">How to design a website ?</a></h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dolores voluptate sapiente assumenda, veritatis esse.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
)

const Contact = ( { children }) => {
  return(
    <section id="contact"  class="bg-cover text-white" style={{ backgroundImage: `url(${contact})` }} data-aos="fade-up" data-aos-duration="1000">
    <div class="overlay"></div>
    <div class="container text-black">
      <div class="row">
        <div class="col-12  text-center">
          <h1 class="display-4">Contact</h1>
          <div class="divider"></div>
          <p class="my-4">
            There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Quasi necessitatibus earum odio quisquam ipsa ratione dicta itaque soluta porro mollitia.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 mx-auto">
          <form action="#" class="row g-4">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" placeholder="Full name" />
            </div>
            <div class="form-group col-md-6">
              <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group col-md-12">
              <input type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="form-group col-md-12">
              <textarea name="" id="" col="30" rows="4"
              class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="text-center">
              <button class="btn btn-main" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

const Footer = () => (
  <footer class="py-4">
  <div class="container">
    <div class="row">
      <div class="overlay"></div>
      <div class="col-md-6">
        <p>Copyright © 2019-2021. Designed by <a href="http://feketegabor.com">http://feketegabor.com</a></p>
      </div>
      <div class="col-md-6 text-md-end">
        <a href="#"><i class='bx bxl-facebook-circle' ></i></a>
        <a href="#"><i class='bx bxl-twitter' ></i></a>
        <a href="#"><i class='bx bxl-instagram' ></i></a>
        <a href="#"><i class='bx bxl-dribble' ></i></a>
        <a href="#"><i class='bx bxl-github' ></i></a>
      </div>
    </div>
  </div>
</footer>
)

export default App;
