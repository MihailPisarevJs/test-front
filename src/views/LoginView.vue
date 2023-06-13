<template>
   <transition name="login">
    <div v-if="show" class="login">
      <form class="login-form">
        <span class="login-form-title">Вход</span>
        <input-cmp @input="input" required :title="{key: 'email', value: 'Почта'}" />
        <input-cmp @input="input" required :title="{key: 'password', value: 'Пароль'}" />
        <div class="btn-section">
          <button-cmp name="Войти" @click="login" />
        </div>
      </form>
    </div>
  </transition>
</template>


<script>
import InputCmp from '@/components/ui/input/InputCmp.vue';
import ButtonCmp from '@/components/ui/button/ButtonCmp.vue';
import network from "../assets/api/network.js"

  export default {
    components: {
      InputCmp,
      ButtonCmp
    },

    data() {
      return {
        show: false,
        loginData: {
          email: "",
          password: "",
        }
      }
    },

    mounted() {
      this.show = true;
      this.getData();
    },

    methods: {
      getData() {
        const ssntkn = localStorage.getItem("ssntkn");
        network("http://localhost:5000/api/user", "GET", {}, ssntkn)
          .then(() => {
            this.$router.push({path: "/user"});
          })
          .catch((error) => {
              this.$router.push({path: "/login"});
              console.log(error.response.data.message);
          })
      },

      input(data) {
        switch(data.key) {
          case "email": this.loginData.email = data.value;
          break;
          case "password": this.loginData.password = data.value;
        }
      },

      login() {
        network("http://localhost:5000/api/login", "POST", {
            email: this.loginData.email,
            password: this.loginData.password
          })
          .then((res) => {
            localStorage.setItem("ssntkn", res.data.accessToken);
            localStorage.setItem("rfrstkn", res.data.refreshToken);
            this.$router.push({path: "/user"});
          })
          .catch((error) => {
            console.log(error.response.data.message);
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.login {
  @include flexRow(center, center);
  height: calc(100vh - 50px);
  width: 100%;

  &-form {
    @include flexCol(flex-start, center);
    height: 320px;
    width: 360px;
    margin: 10px 20px;
    border-radius: $small-radius;
    background-color: $backdrop;

    &-title {
      @include flexRow(flex-start, center);
      @include main-font-medium;
      color: $text-color;
      font-size: 18px;
      margin-top: 25px;
      height: 30px;
      width: 80%;
    }
  }
}

.btn-section {
  @include flexRow(flex-end, center);
  margin-top: 20px;
  width: 90%;
}

.login-enter-from,
.login-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.login-enter-to,
.login-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

$transition-duration: 0.75s;

.login-enter-active,
.login-leave-active {
  transition: opacity $transition-duration ease-in-out,
  transform $transition-duration ease-in-out;
}
</style>