<template>
  <main>
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
    <section class="content">
      <div class="contentInner">
        <section id="welcome" class="hero"></section> <!-- hero -->
        <section id="ourWork" class="workItem"></section> <!-- workItem -->
        <section id="ourTeam" class="ourTeam"></section> <!-- ourTeam -->
        <section id="testimonials" class="testimonials"></section> <!-- testimonials -->
        <section id="aboutUs" class="aboutUs"></section> <!-- aboutUs -->
        <section id="contactUs" class="contactUs"></section> <!-- contactUs -->
      </div>
    </section>
  </main>
</template>

<style lang="scss">
  main {
    display: flex;
    flex-direction: row;
    height: auto;
    width: 1400px;
    margin: 0 auto;
  }
</style>
