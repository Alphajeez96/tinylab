<template>
  <div>
    <header>
      <section>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <img src="../../assets/Bitmap.png" alt="Logo" />
          </a>
          <!-- <button class="navbar-toggler" style="color: lemonchiffon !important;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>

            <ul class="navbar-nav">
              <li class="nav__holder active">
                <span class="dot mx-2"></span>
              </li>

              <li class="nav__holder active">
                <p>
                  Hi,
                  <span>Joshua</span>
                </p>
              </li>
              <li class="nav-item active">
                <button
                  type="button"
                  class="btn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="toggler">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z"
                        fill="#013C61"
                      />
                    </svg>
                  </i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.1);
}
.dot {
  height: 25px;
  width: 25px;
  background: #6a7e8a;
  border-radius: 50%;
  display: inline-block;
}
.toggler {
  position: relative;
  bottom: 5px;
}
</style>
