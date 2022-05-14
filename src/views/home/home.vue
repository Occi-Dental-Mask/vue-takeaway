<template>
  <div>
    <div class="wrapper">
      <static-part />
      <Nearby />
    </div>
    <Docker />
  </div>
</template>

<script>
import Nearby from "./nearby.vue";
import Docker from "./docker.vue";
import staticPart from "./staticPart.vue";
export default {
  components: { Nearby, Docker, staticPart },
  name: "Home",
};
</script>

<style scoped lang="scss">
@import "../../style/mixins.scss";
@import "../../style/variables.scss";

.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.6rem;
  padding: 0 0.18rem;
}
</style>