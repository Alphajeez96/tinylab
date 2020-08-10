<template>
  <div class="home">
    <gnav></gnav>
    <sidebar></sidebar>
    <employees></employees>
    <gtable></gtable>
  </div>
</template>

<script>
import gnav from '../components/Partials/navbar'
import sidebar from '../components/Partials/sidebar'
import employees from '../components/Employees/employees'
import gtable from '../components/Employees/table'

export default {
  name: 'Home',
  components: {
    employees,
    gtable,
    sidebar,
    gnav,
  },
}
</script>
