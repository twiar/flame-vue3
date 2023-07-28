<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/peoples">Peoples</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
nav {
  & > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
