<template>
  <transition name="registration">
    <div v-if="show" class="registration">
      <form class="registration-form">
        <span class="registration-form-title">Регистрация</span>
        <input-cmp @input="input" required :title="{key: 'email', value: 'Почта'}" />
        <input-cmp @input="input" required :title="{key: 'password', value: 'Пароль'}" />
        <input-cmp @input="input" required :title="{key: 'confirmPassword', value: 'Повторите пароль'}" />
        <div class="btn-section">
          <button-cmp name="Зарегистрироваться" @clicked="registration" />
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
        registrationData: {
          email: "",
          password: "",
          // confirmPassword: ""
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
              this.$router.push({path: "/registration"});
              console.log(error.response.data.message);
          })
      },

      input(data) {
        switch(data.key) {
          case "email": this.registrationData.email = data.value;
          break;
          case "password": this.registrationData.password = data.value;
          break;
          case "confirmPassword": this.registrationData.confirmPassword = data.value;
        }
      },

      registration() {
        network("http://localhost:5000/api/registration", "POST", {
          email: this.registrationData.email,
          password: this.registrationData.password
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          if (error.response.data.message === "Пользователь с почтовым адресом kenobi@gmail.com уже существует") {
            console.log(error.response.data.message);
          } else {
            this.$router.push({path: "/login"});
            console.log(error.response.data.message);
          }
          
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.registration {
  @include flexRow(center, center);
  height: calc(100vh - 50px);
  width: 100%;

  &-form {
    @include flexCol(flex-start, center);
    height: 400px;
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

.registration-enter-from,
.registration-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.registration-enter-to,
.registration-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

$transition-duration: 0.75s;

.registration-enter-active,
.registration-leave-active {
  transition: opacity $transition-duration ease-in-out,
  transform $transition-duration ease-in-out;
}
</style>