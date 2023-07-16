<template>
  <div class="home">
      <transition name="slide">
          <router-view />
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
<style scoped>
.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}
.slide-enter {
    transform: translate(100%, 0);
    display: block;
}
.slide-leave-to {
    transform: translate(-100%, 0);
    display:none;
}

</style>