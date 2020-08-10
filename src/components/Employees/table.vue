<template>
  <div>
    <div class="contain">
      <table class="table table-responsive-md">
        <thead class="">
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </th>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">ROLE</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 5" :key="i">
            <td scope="row">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>Joshua</td>
            <td>Bakare</td>
            <td>@josh.bakery@gmail.com</td>
            <td>+2348012345678</td>
            <td>Admin</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
              >
                <path
                  d="M1 5.55558H2.77778H17"
                  stroke="#6A7E8A"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.9778 5.55558C3.9778 4.89284 3.44054 4.35558 2.7778 4.35558V5.55558H3.9778ZM3.9778 18V5.55558H2.7778V18H3.9778ZM4.55557 18.5778C4.23647 18.5778 3.9778 18.3191 3.9778 18H2.7778C2.7778 18.9819 3.57373 19.7778 4.55557 19.7778V18.5778ZM13.4445 18.5778H4.55557V19.7778H13.4445V18.5778ZM14.0222 18C14.0222 18.3191 13.7636 18.5778 13.4445 18.5778V19.7778C14.4263 19.7778 15.2222 18.9819 15.2222 18H14.0222ZM14.0222 5.55558V18H15.2222V5.55558H14.0222ZM15.2222 4.35558C14.5595 4.35558 14.0222 4.89284 14.0222 5.55558H15.2222H15.2222V4.35558ZM16.4222 5.55558C16.4222 4.89284 15.885 4.35558 15.2222 4.35558V5.55558H16.4222ZM16.4222 18V5.55558H15.2222V18H16.4222ZM13.4445 20.9778C15.089 20.9778 16.4222 19.6446 16.4222 18H15.2222C15.2222 18.9819 14.4263 19.7778 13.4445 19.7778V20.9778ZM4.55557 20.9778H13.4445V19.7778H4.55557V20.9778ZM1.5778 18C1.5778 19.6446 2.91099 20.9778 4.55557 20.9778V19.7778C3.57373 19.7778 2.7778 18.9819 2.7778 18H1.5778ZM1.5778 5.55558V18H2.7778V5.55558H1.5778ZM2.7778 4.35558C2.11505 4.35558 1.5778 4.89284 1.5778 5.55558H2.7778V4.35558ZM6.64446 3.7778C6.64446 3.4587 6.90314 3.20002 7.22224 3.20002V2.00002C6.2404 2.00002 5.44446 2.79596 5.44446 3.7778H6.64446ZM6.64446 5.55558V3.7778H5.44446V5.55558H6.64446ZM5.44446 6.75558C6.1072 6.75558 6.64446 6.21832 6.64446 5.55558H5.44446V6.75558ZM4.24446 5.55558C4.24446 6.21832 4.78172 6.75558 5.44446 6.75558V5.55558H4.24446ZM4.24446 3.7778V5.55558H5.44446V3.7778H4.24446ZM7.22224 0.800024C5.57766 0.800024 4.24446 2.13322 4.24446 3.7778H5.44446C5.44446 2.79596 6.2404 2.00002 7.22224 2.00002V0.800024ZM10.7778 0.800024H7.22224V2.00002H10.7778V0.800024ZM13.7556 3.7778C13.7556 2.13322 12.4224 0.800024 10.7778 0.800024V2.00002C11.7596 2.00002 12.5556 2.79596 12.5556 3.7778H13.7556ZM13.7556 5.55558V3.7778H12.5556V5.55558H13.7556ZM12.5556 6.75558C13.2183 6.75558 13.7556 6.21832 13.7556 5.55558H12.5556V6.75558ZM11.3556 5.55558C11.3556 6.21832 11.8928 6.75558 12.5556 6.75558V5.55558H11.3556ZM11.3556 3.7778V5.55558H12.5556V3.7778H11.3556ZM10.7778 3.20002C11.0969 3.20002 11.3556 3.4587 11.3556 3.7778H12.5556C12.5556 2.79596 11.7596 2.00002 10.7778 2.00002V3.20002ZM7.22224 3.20002H10.7778V2.00002H7.22224V3.20002Z"
                  fill="#6A7E8A"
                />
                <path
                  d="M7.22222 10V15.3334"
                  stroke="#6A7E8A"
                  stroke-width="1.2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.7778 10V15.3334"
                  stroke="#6A7E8A"
                  stroke-width="1.2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'table',
  data(){
    return{

    }
  },


}
</script>

<style scoped>
.contain {
  padding: 0px 150px;
}
table thead tr th {
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: var(--primary-color);
  font-family: var(--main-font);
}
tbody tr td {
  border: none;
  background: #ffffff;
  border-radius: 5px;
  font-family: var(--main-font);
  font-weight: 400;
  letter-spacing: -0.0914285px;
  color: #6a7e8a;
  font-size: 14px;
}
.table td,
.table th {
  border: none;
}
svg {
  cursor: pointer;
}
table {
  border-spacing: 10px;
}
table {
  border-collapse: separate;
  border-spacing: 0px 15px;
}
</style>
