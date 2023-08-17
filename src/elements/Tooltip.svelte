<script lang="ts">
    import { createFloatingActions } from 'svelte-floating-ui'
    import { flip, offset, Placement, shift } from 'svelte-floating-ui/dom'

    export let tooltip: string[] = []
    export let position: Placement = 'top'
    export let width = '20%'

    const [floatingRef, floatingContent] = createFloatingActions({
        strategy: 'absolute',
        placement: position,
        middleware: [offset(6), flip(), shift()],
    })

    let showTooltip = false
</script>

<div class="tooltip-ref" use:floatingRef on:mouseenter={() => (showTooltip = true)} on:mouseleave={() => (showTooltip = false)}>
    <slot />
</div>

{#if showTooltip}
    <div use:floatingContent class="tooltip" style="--popup-width: {width}">{tooltip}</div>
{/if}

<style lang="less">
    .tooltip-ref {
        position: relative;
        display: inline-block;
        user-select: none;
    }

    .tooltip {
        width: var(--popup-width);
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: 6px;
        padding: 5px 0;
        z-index: 10;
        font-size: 16px;
        text-align: center;
        user-select: none;
    }
</style>
