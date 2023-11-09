<script setup>
// define work items
const workItems = computed(() => [
  {
    id: "1",
    title: "SunShot",
    description: `Easily and quickly create beautiful screen recordings that follow your mouse.`,
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
    images: [
      {
        src: "/portfolio/assets/group.png",
      },
    ],
  },
]);
</script>

<template>
  <main>
    <section class="sidebarContainer">
      <div class="containerInner">
        <aside class="sidebar">
          <nav>
            <ul>
              <li><ULink to="#welcome">Welcome</ULink></li>
              <li><ULink to="#ourWork">Our Work</ULink></li>
              <li><ULink to="#ourTeam">Our Team</ULink></li>
              <li><ULink to="#testimonials">Testimonials</ULink></li>
              <li><ULink to="#aboutUs">About Us</ULink></li>
              <li><ULink to="#contactUs">Contact Us</ULink></li>
            </ul>
          </nav>
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
            <section id="ourWork" class="workIntro">
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
                <div :class="item.images?.length === 1 ? 'oneItemWrapper' : ''">
                  <CCarousel
                    :items-to-show="1.1"
                    :wrap-around="item.images?.length > 1"
                    :items-to-scroll="1"
                    :snap-align="'start'"
                  >
                    <CSlide v-for="slide in item.images" :key="slide">
                      <div class="carousel__item"><img :src="slide.src" /></div>
                    </CSlide>

                    <template #addons>
                      <CNavigation />
                    </template>
                  </CCarousel>
                </div>
              </div>
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
                  <CSlide v-for="slide in 3" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
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
                  >
                    <CSlide v-for="slide in 3" :key="slide">
                      <div class="carousel__item">{{ slide }}</div>
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
body {
  width: 100vw;
  overflow-x: hidden;
  background-color: white;
  color: #333;
}

main {
}

.sidebarContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .containerInner {
    margin: 0 auto;
    width: 1400px;
    height: 100vh;

    .sidebar {
      width: 300px;
    }
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
          padding: 8px 16px;
          font-size: 28px;
        }
      }
    }
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
      padding-right: 75px;
    }
    .carousel__item {
      background-color: gray;
      width: 100%;
      aspect-ratio: 5/8;
    }
  }
}

.testimonials {
  margin-bottom: 50px;

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
      background-color: gray;
      width: 100%;
      aspect-ratio: 16/7;
    }
  }
}
</style>
