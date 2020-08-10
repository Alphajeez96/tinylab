<template>
  <div>
    <div class="area">
      <nav class="main-menu">
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-2x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.24963 1.37544H1.37444V8.25062H8.24963V1.37544ZM8.24963 9.62506H1.37444C0.615301 9.62506 0 9.00976 0 8.25062V1.37544C0 0.6163 0.615301 0 1.37444 0H8.24963C9.00876 0 9.62506 0.6163 9.62506 1.37544V8.25062C9.62506 9.00976 9.00876 9.62506 8.24963 9.62506ZM8.24963 13.7504H1.37444V20.6256H8.24963V13.7504ZM8.24963 22H1.37444C0.615301 22 0 21.3847 0 20.6256V13.7504C0 12.9902 0.615301 12.3749 1.37444 12.3749H8.24963C9.00876 12.3749 9.62506 12.9902 9.62506 13.7504V20.6256C9.62506 21.3847 9.00876 22 8.24963 22ZM20.6246 1.37544H13.7494V8.25062H20.6246V1.37544ZM20.6246 9.62506H13.7494C12.9902 9.62506 12.3749 9.00976 12.3749 8.25062V1.37544C12.3749 0.6163 12.9902 0 13.7494 0H20.6246C21.3837 0 22 0.6163 22 1.37544V8.25062C22 9.00976 21.3837 9.62506 20.6246 9.62506ZM20.6246 13.7504H13.7494V20.6256H20.6246V13.7504ZM20.6246 22H13.7494C12.9902 22 12.3749 21.3847 12.3749 20.6256V13.7504C12.3749 12.9902 12.9902 12.3749 13.7494 12.3749H20.6246C21.3837 12.3749 22 12.9902 22 13.7504V20.6256C22 21.3847 21.3837 22 20.6246 22Z"
                    fill="#013C61"
                  />
                </svg>
              </i>
              <span class="nav-text p"></span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="#" class="active">
              <i class="fa fa-2x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                >
                  <path
                    d="M17 19.3333V17.2963C17 15.0463 15.2091 13.2222 13 13.2222H5C2.79086 13.2222 1 15.0463 1 17.2963V19.3333"
                    stroke="#2BDA53"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 9.14815C11.2091 9.14815 13 7.32412 13 5.07407C13 2.82403 11.2091 1 9 1C6.79086 1 5 2.82403 5 5.07407C5 7.32412 6.79086 9.14815 9 9.14815Z"
                    stroke="#2BDA53"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 19.3333V17.2963C22.9986 15.4397 21.765 13.8188 20 13.3546"
                    stroke="#2BDA53"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 1.1324C17.7699 1.59396 19.0078 3.21832 19.0078 5.07916C19.0078 6.94 17.7699 8.56436 16 9.02592"
                    stroke="#2BDA53"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
              <span class="nav-text"></span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="#">
              <i class="fa fa-2x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                >
                  <g opacity="0.5">
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="16"
                      rx="2"
                      stroke="#013C61"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 7H23"
                      stroke="#013C61"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </i>
              <span class="nav-text"></span>
            </a>
          </li>
        </ul>

        <ul class="logout">
          <li>
            <a href="/signup">
              <i class="fa fa-power-off fa-2x"></i>
              <span class="nav-text"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

.fa-2x {
  font-size: 2em;
}
.fa {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  padding-top: 50px;
  vertical-align: middle;
  font-size: 20px;
  color: #9fb6c3;
}

.main-menu:hover,
nav.main-menu.expanded {
  width: 200px;
  overflow: visible;
}

.main-menu {
  background: white;
  border: 1px solid rgba(106, 126, 138, 0.1);
  position: absolute;
  top: 70px;
  bottom: 0;
  min-height: 100%;
  border-left: 4px solid #2bda53;
  left: 0;
  width: 82px;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  z-index: 1000;
}

.main-menu > ul {
  margin: 7px 0;
}

.main-menu li {
  position: relative;
  display: block;
  width: 255px;
}

.main-menu li > a {
  position: relative;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: #999;
  font-family: arial;
  font-size: 14px;
  text-decoration: none;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.main-menu .nav-icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main-menu .nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;

  font-family: var(--main-font);
  color: var(--primary-color);
}

.main-menu > ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
}

.no-touch .scrollable.hover {
  overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y: auto;
  overflow: visible;
}

a:hover,
a:focus {
  text-decoration: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 12px;
}
.active {
}
.main-menu li:hover > a,
nav.main-menu li.active > a,
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus,
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
  color: #fff;
  background-color: none;
}
.area {
  float: left;
  background: #e2e2e2;
  width: 100%;
  height: 100%;
}
</style>
>
