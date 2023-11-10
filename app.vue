<script setup>
// define work items
const workItems = computed(() => [
  {
    id: "1",
    title: "SunShot",
    description: `Easily and quickly create beautiful screen recordings that follow your mouse.`,
    link: "https://github.com/alexthegoodman/sunshot",
    images: [
      {
        src: "/portfolio/sunshot/sunshot.png",
      },
    ],
  },
  {
    id: "2",
    title: "DeepType",
    description: "Harness AI suggestions and summaries to write better.",
    link: "https://github.com/alexthegoodman/deeptype",
    images: [
      {
        src: "/portfolio/deeptype/suggestions.png",
      },
    ],
  },
  {
    id: "3",
    title: "CommonPlace",
    description: "Share your hobbies and get feedback from others.",
    link: "https://github.com/alexthegoodman/commonplace",
    images: [
      {
        src: "/portfolio/commonplace/main.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "AdMesh",
    description: "Create 3D content such as ads and banners for AR revolution.",
    link: "https://github.com/alexthegoodman/admesh",
    images: [
      {
        src: "/portfolio/admesh/admesh.webp",
      },
    ],
  },
  {
    id: "5",
    title: "Assets",
    description: "Share and rank design assets in a collaborative space.",
    link: "https://github.com/alexthegoodman/AssetsTV",
    images: [
      {
        src: "/portfolio/assets/group.png",
      },
    ],
  },
]);

const teamItems = computed(() => [
  {
    id: "1",
    name: "Alex Goodman",
    title: "Developer, Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/team/alex.jpg",
  },
  {
    id: "2",
    name: "Jane Doe",
    title: "Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/team/jane.jpg",
  },
  {
    id: "3",
    name: "John Doe",
    title: "Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/team/john.jpg",
  },
]);

const testimonialItems = computed(() => [
  {
    id: "1",
    name: "Daniel Reiling",
    title: "Partner, Ecordia",
    quote: `Alex is phenomenal to work with! Very easygoing, highly intelligent, and very process-focused. 
    He is an exceptional React developer, with strong database skills, and we enjoyed working with him. 
    HIGHLY RECOMMEND for development!!!`,
  },
  {
    id: "2",
    name: "Dillon Doherty",
    title: "Founder, Alleo AI",
    quote: "Alex does great work and is very communicative.",
  },
  {
    id: "3",
    name: "Aniket Tiwari",
    title: "Partner, Testizen",
    quote: `Alex is a great guy to work with in the sense that we never had any issues we typically 
    see with freelancers. Great solid work ethic, flexible to the needs of a startup and curious about 
    the business. We’ll hire Alex again and you should too.`,
  },
]);

// set vars when scrolling into sections
const setVars = () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const id = section.id;

    if (!id) return;

    const top = section.offsetTop;
    const height = section.clientHeight;

    if (
      window.pageYOffset > top - 50 &&
      window.pageYOffset < top + height - 50
    ) {
      console.info("scroll", id, top, height);

      document.querySelector(`nav ul li #${id}Link`).classList.add("active");
    } else {
      document.querySelector(`nav ul li #${id}Link`).classList.remove("active");
    }
  });
};

// detect scroll and set vars in ssr
if (process.client) {
  window.addEventListener("scroll", setVars);
}
</script>

<template>
  <main>
    <section class="sidebarContainer">
      <div class="containerInner">
        <aside class="sidebar">
          <nav>
            <ul>
              <li>
                <ULink id="welcomeLink" :to="{ path: '/', hash: '#welcome' }"
                  >Welcome</ULink
                >
              </li>
              <li>
                <ULink id="ourWorkLink" :to="{ path: '/', hash: '#ourWork' }"
                  >Our Work</ULink
                >
              </li>
              <li>
                <ULink id="ourTeamLink" :to="{ path: '/', hash: '#ourTeam' }"
                  >Our Team</ULink
                >
              </li>
              <li>
                <ULink
                  id="testimonialsLink"
                  :to="{ path: '/', hash: '#testimonials' }"
                  >Testimonials</ULink
                >
              </li>
              <li>
                <ULink id="aboutUsLink" :to="{ path: '/', hash: '#aboutUs' }"
                  >About Us</ULink
                >
              </li>
              <li>
                <ULink
                  id="contactUsLink"
                  :to="{ path: '/', hash: '#contactUs' }"
                  >Contact Us</ULink
                >
              </li>
            </ul>
          </nav>
          <span class="copyright"
            >&copy; Copyright {{ new Date().getFullYear() }} Common</span
          >
        </aside>
      </div>
    </section>

    <section class="contentContainer">
      <div class="containerInner">
        <section class="content">
          <div class="contentInner">
            <section id="welcome" class="hero">
              <div class="heroInner">
                <h1>Web, Desktop, and Mobile Apps</h1>
                <div class="values">
                  <div class="item">
                    <h2>Communication</h2>
                    <p>
                      US-based team, always available, regularly communicative
                    </p>
                  </div>
                  <div class="item">
                    <h2>Performance</h2>
                    <p>
                      Using the latest methods to deliver on the tightest
                      timelines
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <!-- hero -->
            <section id="ourWork">
              <section class="workIntro">
                <div class="workIntroInner">
                  <h2>Our Work</h2>
                  <p>
                    These are open source projects that are not under any NDA.
                  </p>
                </div>
              </section>
              <section v-for="item in workItems" class="workItem">
                <div class="workItemInner">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                  <div
                    :class="item.images?.length === 1 ? 'oneItemWrapper' : ''"
                  >
                    <CCarousel
                      :items-to-show="1.1"
                      :wrap-around="item.images?.length > 1"
                      :items-to-scroll="1"
                      :snap-align="'start'"
                    >
                      <CSlide v-for="slide in item.images" :key="slide">
                        <div class="carousel__item">
                          <img :src="slide.src" />
                        </div>
                      </CSlide>

                      <template #addons>
                        <CNavigation />
                      </template>
                    </CCarousel>
                  </div>
                  <a :href="item.link" target="_blank" class="btn"
                    >View Project <UIcon name="i-heroicons-arrow-right"
                  /></a>
                </div>
              </section>
            </section>
            <!-- workItem -->
            <section id="ourTeam" class="ourTeam">
              <div class="ourTeamInner">
                <h4>Our Team</h4>
                <CCarousel
                  :items-to-show="2.5"
                  :wrap-around="false"
                  :items-to-scroll="1"
                  :snap-align="'start'"
                >
                  <CSlide v-for="slide in teamItems" :key="slide">
                    <div class="carousel__item">
                      <div
                        class="carousel__itemImage"
                        :style="{ backgroundImage: `url(${slide.image})` }"
                      ></div>
                      <div class="carousel__itemContent">
                        <h5>{{ slide.name }}</h5>
                        <p>{{ slide.title }}</p>
                        <p>{{ slide.description }}</p>
                      </div>
                    </div>
                  </CSlide>

                  <template #addons>
                    <CNavigation />
                  </template>
                </CCarousel>
              </div>
            </section>
            <!-- ourTeam -->
            <section id="testimonials" class="testimonials">
              <div class="testimonialsInner">
                <h4>Testimonials</h4>
                <div class="testimonialsContainer">
                  <CCarousel
                    :items-to-show="1"
                    :wrap-around="true"
                    :items-to-scroll="1"
                    :snap-align="'start'"
                    :autoplay="10000"
                  >
                    <CSlide v-for="slide in testimonialItems" :key="slide">
                      <div class="carousel__item">
                        <div class="carousel__itemContent">
                          <p>{{ slide.quote }}</p>
                          <h5>{{ slide.name }}</h5>
                          <span>{{ slide.title }}</span>
                        </div>
                      </div>
                    </CSlide>

                    <template #addons>
                      <CNavigation />
                    </template>
                  </CCarousel>
                </div>
              </div>
            </section>
            <!-- testimonials -->
            <section id="aboutUs" class="aboutUs">
              <div class="aboutUsInner"></div>
            </section>
            <!-- aboutUs -->
            <section id="contactUs" class="contactUs">
              <div class="contactUsInner"></div>
            </section>
            <!-- contactUs -->
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
$lightBlue: #dfe5f3;
$greenBlue: #557373;
$greenBlack: #272401;
$nearWhite: #f2efea;
$nearBlack: #0d0d0d;

.btn {
  display: block;
  min-width: 175px;
  width: fit-content;
  padding: 8px 16px;
  background-color: $greenBlue;
  color: white;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
}

body {
  width: 100vw;
  overflow-x: hidden;
  background-color: $lightBlue;
  color: $nearBlack;
}

main {
}

.sidebarContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  .containerInner {
    margin: 0 auto;
    width: 1400px;
    height: 100vh;

    .sidebar {
      width: 300px;
    }
  }
}

@keyframes animateBorder {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.sidebar {
  padding: 50px 0;

  nav {
    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 12px;

        a {
          display: block;
          padding: 8px 0;
          font-size: 28px;
          cursor: pointer;
          width: fit-content;

          position: relative;

          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: $greenBlue;
            animation: animateBorder 0.5s ease forwards;
            display: none;
          }

          &.active {
            &:after {
              animation: animateBorder 0.5s ease forwards;
              display: block;
            }
          }
        }
      }
    }
  }
  .copyright {
    font-size: 12px;
    color: $greenBlack;
  }
}

.contentContainer {
  .containerInner {
    margin: 0 auto;
    // width: 1400px;
    padding-left: calc(100vw - 1700px);
    position: relative;

    .content {
      padding-left: 300px;
      position: absolute;
      width: stretch;
      // display: flex;
      // flex: 1;

      .contentInner {
        width: 100%;
        position: relative;
        z-index: 20;
      }
    }
  }
}

.hero {
  padding: 120px 0 50px 0;

  .heroInner {
    width: 1100px;

    h1 {
      font-size: 48px;
      margin-bottom: 25px;
    }
    .values {
      display: flex;
      flex-direction: row;

      .item {
        width: 300px;
        margin-right: 50px;
      }
    }
  }
}

.workIntro {
  margin-bottom: 25px;

  .workIntroInner {
    width: 100%;

    h2 {
      font-size: 42px;
      margin-bottom: 10px;
    }
  }
}

.workItem {
  margin-bottom: 50px;

  .workItemInner {
    width: 100%;

    h3 {
      font-size: 32px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
    }

    .carousel {
      width: 100%;

      .carousel__prev {
        display: none;
      }
      .carousel__next {
        right: 13%;
      }
    }

    .carousel__slide {
      padding-right: 150px;
    }
    .carousel__item {
      width: 100%;
      aspect-ratio: 16/9;

      background-color: white;
      border: 7px solid $greenBlue;
    }

    .oneItemWrapper {
      .carousel {
        .carousel__next {
          display: none;
        }
      }
    }
  }
}

.ourTeam {
  margin-bottom: 50px;

  .ourTeamInner {
    width: 100%;

    h4 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    .carousel {
      width: 100%;

      .carousel__prev {
        display: none;
      }
      .carousel__next {
        // right: 13%;
        display: none;
      }
    }

    .carousel__slide {
      padding-right: 75px;
    }
    .carousel__item {
      width: 100%;

      .carousel__itemImage {
        width: 100%;
        height: 100%;
        background-color: lightgrey;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        aspect-ratio: 5/8;
      }
    }
  }
}

.testimonials {
  margin-bottom: 50px;

  h4 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .testimonialsInner {
    width: 100%;

    .testimonialsContainer {
      width: 800px;
    }

    .carousel {
      width: 100%;

      // .carousel__prev {
      //   display: none;
      // }
      // .carousel__next {
      //   right: 13%;
      // }
    }

    // .carousel__slide {
    //   padding-right: 75px;
    // }
    .carousel__item {
      background-color: $greenBlue;
      width: 100%;
      aspect-ratio: 16/7;

      .carousel__itemContent {
        display: flex;
        width: 80%;
        height: 100%;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $nearWhite;

        p {
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
