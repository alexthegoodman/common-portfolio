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
            <section id="ourWork" class="workItem">
              <div class="workItemInner">
                <CCarousel
                  :items-to-show="1.2"
                  :wrap-around="true"
                  :items-to-scroll="1"
                  :snap-align="'start'"
                >
                  <CSlide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                  </CSlide>

                  <template #addons>
                    <CNavigation />
                  </template>
                </CCarousel>
              </div>
            </section>
            <!-- workItem -->
            <section id="ourTeam" class="ourTeam"></section>
            <!-- ourTeam -->
            <section id="testimonials" class="testimonials"></section>
            <!-- testimonials -->
            <section id="aboutUs" class="aboutUs"></section>
            <!-- aboutUs -->
            <section id="contactUs" class="contactUs"></section>
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
  overflow: hidden;
  background-color: beige;
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

.workItem {
  .workItemInner {
    width: 100%;
  }
}

.carousel {
  width: 100%;

  .carousel__prev {
    display: none;
  }
  .carousel__next {
    right: 20%;
  }
}

.carousel__slide {
  padding-right: 150px;
}
.carousel__item {
  background-color: gray;
  width: 100%;
  aspect-ratio: 16/9;
}
</style>
