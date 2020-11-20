<template>
  <div class="control-entry">
    <label :for="vId">{{ control.label }}</label>
    <input :value="control.data" :id="vId" @change="onChange"/>
    <div class="error" v-if="control.errors">{{ control.errors }}</div>
  </div>
</template>

<script>
import {isControl, rankWith} from '@jsonforms/core'
import {control} from '@jsonforms/vue'

const controlRenderer = {
  name: 'Name',
  mixins: [control],
  computed: {
    vId() {
      return `control-entry-${this._uid}`
    }
  },
  methods: {
    onChange(event) {
      this.handleChange(this.control.path, event.target.value)
    }
  }
}

export default controlRenderer

export const entry = {
  renderer: controlRenderer,
  tester: rankWith(1, isControl)
}
</script>

<style scoped lang="scss">
.control-entry {
  padding: .5rem;
  display: flex;
  flex-direction: column;
  color: #fff;

  label {
    text-align: left;
    padding: .25rem 0;
  }

  input {
    padding: .25rem;
    font-size: 16px;
  }
}
</style>