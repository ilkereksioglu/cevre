<template>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <PageHeader />
    <div class="page-body-wrapper sidebar-icon">
      <MainWrapper></MainWrapper>
    </div>
  </div>
</template>

<script>
import MainWrapper from './views/Main/MainWrapper.vue'
import PageHeader from './views/Layouts/Header/PageHeader.vue'

  export default {
  components: {
      MainWrapper,
      PageHeader
  },
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<style>

</style>
