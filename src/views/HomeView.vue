<template>
    <header-cmp :tabState="tabState" />
    <div class="home">
      <router-view />
    </div>
</template>

<script>
import HeaderCmp from '@/components/headers/HeaderCmp.vue';
import network from "../assets/api/network.js"

export default {
  name: 'HomeView',
  components: {
    HeaderCmp
  },

  data() {
    return {
      tabState: false
    }
  },

  mounted() {
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
            this.$router.push({path: "/"});
            console.log(error.response.data.message);
        })
    }
  }
}
</script>
