<template>
  <div tabindex="-1">
    form control
    <md-field style="width: 100%">
      <label
        v-if="options.label !== undefined"
        :for="options.name">
        <span class="br-form-control-label">{{options.label}}</span>
      </label>
      <div class="br-form-control-wrapper"
        @focus="helpVisible = true"
        @blur="helpVisible = false">
        <md-icon v-if="!!options.icon" :class="['fa', options.icon]">{{options.icon}}</md-icon>
        <slot name="br-form-control-content"></slot>
      </div>
      <div v-if="showHelp && helpVisible"
        class="help-block br-fadein br-fadeout">
        <div class="text-muted">
          <slot name="br-form-control-help"></slot>
        </div>
      </div>
      <div v-if="options.showValidation">
        <div class="br-form-control-validation-errors">
          <slot name="br-form-control-validation-errors"></slot>
        </div>
      </div>
    </md-field>
  </div>
</template>
<script>
export default {
  name: 'BrFormControl',
  // FIXME: remove `mounted`
  mounted() {
    console.log('this.options', this.options);
  },
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
    }
  },
  computed: {
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
