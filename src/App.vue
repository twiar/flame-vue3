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

button {
  cursor: pointer;
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

  &-container {
    position: relative;
  }
}

.fixed-list {
  min-width: 189px;
  max-width: 189px;
  top: 35px;
  position: absolute;
  background: #fff;
  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.25);

  & > div {
    padding: 10px;
  }

  & > div:not(.static) {
    &:hover {
      background: rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }
}

.list-box {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
