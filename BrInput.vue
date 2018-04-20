<template>
  <md-field :class="{'md-invalid': invalid}">
    <label
      v-if="options.label !== undefined"
      :for="options.name">
      <span class="br-form-control-label">{{options.label}}</span>
    </label>
    <md-icon
      v-if="!!options.icon"
      :class="['fa', options.icon]">{{options.icon}}</md-icon>
    <md-input
      v-bind="attrs"
      v-on="$listeners"
      v-model="value"
      @focus="helpVisible = true"
      @blur="helpVisible = false"
      br-input-manipulator></md-input>
    <div
      v-if="showHelp && helpVisible"
      class="md-helper-text br-fadein br-fadeout">
      <slot name="br-input-help"></slot>
    </div>
    <div
      v-if="invalid"
      class="br-form-control-validation-errors">
      <slot name="br-input-validation-errors">
        <span class="md-error">An error was detected in the input above.</span>
      </slot>
    </div>
  </md-field>
</template>
<script>
export default {
  name: 'BrInput',
  inheritAttrs: false,
  data() {
    return {
      helpVisible: false
    };
  },
  props: {
    // TODO: deprecate, for backwards compatibility only
    brOptions: {
      type: Object,
      required: true
    },
    invalid: Boolean
  },
  computed: {
    attrs() {
      // use attrs from `options`, if given, but prefer direct attrs
      const attrs = {
        name: this.options.name,
        disabled: this.options.disabled,
        readonly: this.options.readonly
      };

      // TODO: deprecate, backwards compatibility
      // if any attribute starts with `br-input-`, strip it
      const prefixLength = 'br-input-'.length;
      for(let attr in this.$attrs) {
        if(attr.startsWith('br-input-')) {
          attrs[attr.substr(prefixLength)] = this.$attrs[attr];
        } else {
          attrs[attr] = this.$attrs[attr];
        }
      }
      return attrs;
    },
    // TODO: deprecate, alias for `brOptions`
    options() {
      return this.brOptions;
    },
    showHelp() {
      return (this.options.help === true ||
        this.options.help !== false && this.options.inline !== true);
    }
  }
};
</script>
<style>
</style>
