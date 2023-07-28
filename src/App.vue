<template>
  <RouterView />
</template>

<style lang="scss">
nav {
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
    font-size: 18px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.link {
  text-decoration: underline;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
}

.search {
  padding: 8px;
  border-radius: 0;
  margin-bottom: 10px;
}
</style>
