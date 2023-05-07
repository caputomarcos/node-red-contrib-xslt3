<script>
  export let node
  import { Button, Collapsible, Group, Input, Select, TypedInput } from 'svelte-integration-red/components'
  
  const errorHandlingOptions = ['Standard', 'other output', 'throw exception']

  let Transfomers = [
    { value: "xslt3transformer", 
      label: "defaults",
      icon: "red/images/typedInput/bool.svg",
      options: [
        { value: "xslt3transformer", label: "msg.xslt3transformer" },
        { value: "response", label: "msg.response" },
        { value: "payload", label: "msg.payload" },
    ]}
  ]

	/* 
	 * Reactivity declarations / statements are a great way to create a dynamic editor. You'll find more on this here:
	 * https://svelte.dev/tutorial/reactive-declarations
	 * https://svelte.dev/tutorial/reactive-statements
	 */
	$: transfomerTypes = [...['msg'], ...Transfomers]

</script>

{#if node.showBanner}
<Button inline small icon="close" on:click={ () => node.showBanner = false } ></Button>
<br>
<div style="display:flex; flex-direction:row; align-items:center; gap:1rem; padding:1rem; border:1px solid #ccc; background-color: #ffe; border-radius: 8px; max-width:500px; margin:auto;">
    <div style="display:flex; flex-direction:column;">

      <p style="float: left">
        <img src="icons/xslt3transformer/xsl_transform.png" alt="xslt3transformer">
      </p>
      <p>A transformation in the XSLT language is expressed in the
        form of a <b>stylesheet</b>. A stylesheet is made up of one or more well-formed
        XML <b><a href="https://www.w3.org/TR/xslt-30/#REC-xml" style=" color: #2687E9;" target="_blank">[XML 1.0]</a></b> documents conforming to the Namespaces in XML
        Recommendation <b><a href="https://www.w3.org/TR/xslt-30/#xml-names" style=" color: #2687E9;" target="_blank">[Namespaces in XML]</a></b>. 
      </p>
      
      <p>A stylesheet generally includes elements that are defined by XSLT as well as elements
        that are not defined by XSLT. XSLT-defined elements are distinguished by use of the
        namespace <b><code>http://www.w3.org/1999/XSL/Transform</code></b> (<b>see <a href="https://www.w3.org/TR/xslt-30/#xslt-namespace" style="color: #2687E9;" target="_blank"><i>3.1 XSLT Namespace</i></a></b>), which is referred to in this specification as the
        <b><a title="XSLT namespace" style=" color: #2687E9;" class="termref" href="https://www.w3.org/TR/xslt-30/#dt-xslt-namespace" target="_blank">XSLT namespace</a></b>. Thus this specification
        is a definition of the syntax and semantics of the XSLT namespace.
      </p>
      
      <p>The term <b><a title="stylesheet" style=" color: #2687E9;" class="termref" href="https://www.w3.org/TR/xslt-30/#dt-stylesheet" target="_blank">stylesheet</a></b> reflects the fact that one
        of the important roles of XSLT is to add styling information to an XML source
        document, by transforming it into a document consisting of XSL formatting objects
        (see <b><a href="https://www.w3.org/TR/xslt-30/#xsl11" style=" color: #2687E9;" target="_blank">[XSL-FO]</a></b>), or into another presentation-oriented format such as
        HTML, XHTML, or SVG. However, XSLT is used for a wide range of transformation tasks,
        not exclusively for formatting and presentation applications.
      </p>
      <p style="float: right;">
        <b><a href="https://www.w3.org/TR/xslt-30"  style=" color: #2687E9; float: right;" target="_blank" title="XSL Transformations (XSLT) Version 3.0">XSL Transformations (XSLT) Version 3.0</a></b>
      </p>
  </div>
</div>
<br>

{/if}

<Collapsible label="General" indented={false} icon="globe">
  <Group clazz="paddingBottom">
    <Input bind:node prop="name"/>
    <TypedInput {node} prop="transfomer" typeProp="transfomerOpts" bind:types={transfomerTypes} disabled={node.disableInput}  bind:tooltip={node.transfomer}/>
    <Select bind:node prop="errorHandling" icon="warning" disabled={node.disableInput} >
      {#each errorHandlingOptions as eOption}
        <option value={eOption}>{eOption}</option>
      {/each}
    </Select>
  </Group>
</Collapsible>