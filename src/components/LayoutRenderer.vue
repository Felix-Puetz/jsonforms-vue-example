<template>
  <div class="layout-element">
    <dispatch-renderer
        v-for="(element, index) in layout.uischema.elements"
        :key="`${layout.path}-${index}`"
        :schema="layout.schema"
        :uischema="element"
        :path="layout.path"/>
  </div>
</template>

<script>
import {DispatchRenderer, layout} from '@jsonforms/vue'

export default {
  name: 'LayoutRenderer',
  components: {
    DispatchRenderer
  },
  mixins: [layout]
}
</script>

<style scoped>
.layout-element {
  margin: auto;
  width: 500px;
  padding: 1rem;
  background-color: #525252;
  border-radius: 10px;
}
</style>