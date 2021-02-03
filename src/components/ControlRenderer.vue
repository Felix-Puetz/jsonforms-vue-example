<template>
  <div class="control-entry">
    <label :for="vId">{{ control.label }}</label>
    <input :value="control.data" :id="vId" @input="onInput"/>
    <div class="error" v-if="control.errors">{{ control.errors }}</div>
  </div>
</template>

<script>
import {rendererProps, useJsonFormsControl} from '@jsonforms/vue2'

export default {
  name: 'Name',
  props: {
    ...rendererProps()
  },
  setup(props) {
    return useJsonFormsControl(props);
  },
  computed: {
    vId() {
      return `control-entry-${this._uid}`
    }
  },
  methods: {
    onInput(event) {
      this.handleChange(this.control.path, event.target.value)
    }
  }
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

  .error {
    padding: 0.25rem 1rem;
    margin: 0.25rem;
    border-radius: 5px;
    background-color: #ff4949;
    color: #fff;
    font-weight: bold;
    text-align: left;
    width: 50%;
  }
}
</style>