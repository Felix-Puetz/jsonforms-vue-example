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
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsLayout
} from '@jsonforms/vue2'

export default {
  name: 'LayoutRenderer',
  components: {
    DispatchRenderer
  },
  props: {
    ...rendererProps()
  },
  setup(props) {
    return useJsonFormsLayout(props);
  }
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