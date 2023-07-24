<template>
  <button class="btn-primary">
    <span>
      <slot></slot>
    </span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4853 10.3495L6.24263 14.4224L8.36395 16.4589L12.6066 12.3859L14.7279 10.3495L12.6066 8.31299L8.36395 4.24006L6.24263 6.27653L10.4853 10.3495Z"
        fill="black"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.btn-primary {
  outline: none;
  cursor: pointer;
  width: 282px;
  height: 48px;
  border: none;
  background-color: white;
  padding-left: 20px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(195, 22, 49, 1);
    & > span {
      color: white;
    }
    & > svg path {
      fill: white;
    }
  }
}
span {
  font-size: 16px;
}
</style>
