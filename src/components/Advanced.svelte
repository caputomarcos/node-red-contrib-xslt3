<script>
  export let node;
  import {
    Callout,
    Collapsible,
    Group,
    Input,
  } from "svelte-integration-red/components";
</script>

<Group clazz="paddingAdvanced">
  <Collapsible label="Options" clazz="paddingAdvanced" indented={false}>
    <Input bind:node prop="devMode" label="label.developmentMode" labelBeforeCheckbox={true} />
    {#if node.devMode}
      <Callout type="warning">
        <span slot="header">Warning!</span>
        <p>Dev mode is experimental!</p>
      </Callout>
    {/if}
    <Input bind:node prop="showBanner"  label="label.showBanner" labelBeforeCheckbox={true} />
    {#if node.showBanner}
      <Callout type="info" small>
        Display the <b>XSL Transformations (XSLT) Version 3.0</b> banner on the general tab.
      </Callout>
    {/if}
    <Input bind:node prop="disableInput"  label="label.disableInput" labelBeforeCheckbox={true} />
    {#if node.disableInput}
      <Callout type="info" small>Disable Input.</Callout>
    {/if}
  </Collapsible>
</Group>
