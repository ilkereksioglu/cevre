<template>
<!--
<div class="loader-wrapper">
  <div class="theme-loader">    
    <div class="loader-p"></div>
  </div>
</div>
-->
<!-- Loader ends-->
<!-- page-wrapper Start-->
<section>         
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-card">
          <form class="theme-form login-form">
            <h4>Giris Yap</h4>
            <h6>Hos geldiniz!</h6>
            <div class="form-group">
              <label>Kullanici Adi</label>
              <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
                <input class="form-control" type="text" required="" placeholder="Kullanici adi" v-model="username">
              </div>
            </div>
            <div class="form-group">
              <label>Sifre</label>
              <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                <input class="form-control" type="password" name="login[password]" required="" placeholder="*********" v-model="password">
                <div class="show-hide"><span class="show">                         </span></div>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox1" type="checkbox">
                <label for="checkbox1">Remember password</label>
              </div><a class="link" href="forget-password.html">Forgot password?</a>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" type="submit" @click.prevent="girisYap">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    girisYap() {
      this.$store.dispatch('auth/girisYap', {kullaniciAdi: this.username, password: this.password}).then(
        (response) => {
          this.$router.push('/');
        },
        () => {}
      );
    }
  }
}
</script>

<style>

</style>