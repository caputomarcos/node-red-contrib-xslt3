<script context="module">
  RED.nodes.registerType("xslt3transformer", {
    paletteLabel: "xslt3",
    category: "transformers",
    color: "#fff",

    defaults: {
      name: {
        value: "",
        label: "label.name",
        placeholder: "placeholder.name",
        icon: "tag",
      },
      transfomer: {
        value: "",
        label: "label.transfomer",
        icon: "crop",
        placeholder: "placeholder.transfomer",
        validate: RED.validators.typedInput("transfomerOpts"),
      },
      transfomerOpts: { value: "xslt3transformer" },
      errorHandling: { value: "Standard", label: "label.errorHandling" },
      devMode: { value: false, label: "label.developmentMode", icon: "at" },
      showBanner: { value: true, label: "labe.showBanner", icon: "eye" },
      disableInput: { value: true, label: "labe.disableInput", icon: "lock" },
      outputs: { value: 1 },
    },

    inputs: 1,
    outputs: 1,
    icon: "icons/xslt3transformer/logo-x16.svg",

    i18nOptions: {
      // If there should be translation, each DOM needs the object 'node' (mostly it's already bound) or a 'i18n' property with the path to the folder e.g.: node.name + ':'.
      // if the node is not in the main folder, set here the folder name (which is in this case the same name as the node)
      folder: "xslt3transformer/",
    },

    label: function () {
      if (this.name) return this.name;
      //  else if (this.operation) return this.operation
      else return "xslt3";
    },

    oneditprepare: function () {
      render(this, { minWidth: "600px" });
    },

    oneditsave: function () {
      update(this);
      this.outputs = "other output" === this.errorHandling ? 2 : 1;
    },

    oneditcancel: function () {
      revert(this);
    },
  });
</script>

<script>
  export let node;

  import {
    Callout,
    Input,
    TabbedPane,
    TabContent,
    Collapsible,
    Group,
  } from "svelte-integration-red/components";
  import Advanced from "./components/Advanced.svelte";
  import General from "./components/General.svelte";
  import { createBackwardCompatible } from "./libs/utils.js";

  createBackwardCompatible(node);

  node.internalErrors.readUrl = true;

  let tabs = { general: "General", advanced: "Advanced" };

  export let data = { error: "Error" };
</script>

{#if data.error}
  <Callout type="error">
    <span slot="header">Error</span>
    {data.error}
  </Callout>
{/if}

<TabbedPane bind:tabs>
  <TabContent tab="general">
    <General bind:node bind:data />
  </TabContent>
  <TabContent tab="advanced">
    <Advanced bind:node />
  </TabContent>
</TabbedPane>

<style>
  :global(#xslt3-svelte-container :is(.required, .required label)) {
    font-weight: bold !important;
  }
  :global(#xslt3-svelte-container .sir-Row label) {
    min-width: 150px;
  }
  :global(#xslt3-svelte-container .sir-Row label i) {
    min-width: 14px;
  }
  :global(.sir-Group.paddingBottom > .sir-Group-container) {
    padding-bottom: 12px;
  }
  :global(.success .fa-check-square) {
    color: var(--red-ui-text-color-success);
  }
  :global(.sir-Group.paddingAdvanced > .sir-Group-container) {
    background-color: #ffe;
    padding-bottom: 12px;
  }
</style>
