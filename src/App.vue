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
        :schema="jsonForms.schema"
        :uischema="jsonForms.uischema"
        :renderers="jsonForms.renderers"
        @change="onChange"
    />
  </div>
</template>

<script>
import {JsonForms} from '@jsonforms/vue2'
import {controlRenderer, layoutRenderer} from '@/renderers';

const initialData = {
  job: null
};

const schema = {
  type: 'object',
  properties: {
    name: {type: 'string'},
    mail: {type: 'string'},
    job: {type: 'string'},
    age: {type: 'number'},
  },
  required: ['name', 'mail']
};

const uischema = {
  elements: [
    {
      scope: '#/properties/name',
      label: 'Name',
      type: 'control'
    },
    {
      scope: '#/properties/mail',
      label: 'E-Mail',
      type: 'control',
      rule: {
        condition: {
          scope: '#/properties/name',
          schema: {
            const: null
          }
        },
        effect: 'DISABLE'
      }
    },
    {
      scope: '#/properties/job',
      label: 'Job',
      type: 'control'
    },
    {
      scope: '#/properties/age',
      label: 'Age',
      type: 'control',
      rule: {
        condition: {
          scope: '#/properties/job',
          schema: {
            const: null
          }
        },
        effect: 'DISABLE'
      }
    },
  ]
}

export default {
  name: 'App',
  components: {
    JsonForms,
  },
  data() {
    return {
      jsonForms: {
        data: initialData,
        schema,
        uischema,
        renderers: Object.freeze([layoutRenderer, controlRenderer]),
      },
    };
  },
  methods: {
    onChange(event) {
      this.jsonForms.data = event.data;
    },
  },
};
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

  h1,
  h2,
  h3 {
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
