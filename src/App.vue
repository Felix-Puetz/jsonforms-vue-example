<template>
  <div id="app">
    <h1>jsonforms-vue-example</h1>
    <br/>
    <br/>
    <br/>
    <hr/>
    <h2>data</h2>
    <pre>{{ jsonForms.data }}</pre>
    <br/>
    <hr/>
    <h2>generated form</h2>
    <json-forms
        :data="jsonForms.data"
        :renderers="jsonForms.renderers"/>
  </div>
</template>

<script>
import {JsonForms} from '@jsonforms/vue'
import {controlRenderer, layoutRenderer} from '@/renderers'

export default {
  name: 'App',
  components: {
    JsonForms
  },
  data() {
    return {
      jsonForms: {
        data: {
          name: 'John Doe',
          mail: 'john@doe.example',
          job: 'Software-Developer',
          age: '35'
        },
        renderers: [
            layoutRenderer,
          controlRenderer
        ]
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 5rem;

  h1, h2, h3 {
    color: #555;
    text-transform: capitalize;
  }

  pre {
    margin: auto;
    width: 500px;
    text-align: left;
    background-color: #525252;
    color: white;
    padding: 1rem;
    font-family: monospace;
    font-size: 16px;
    border-radius: 10px;
  }
}
</style>
