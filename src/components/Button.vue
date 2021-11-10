<template>
    <a :href="link" class="button" :class="[{ 'button--primary' : variant == 'primary' }, { 'button--secondary' : variant == 'secondary' }, { 'button--tertiary' : variant == 'tertiary' }]">{{ title }}</a>
</template>

<script>
export default {
    props: ['title', 'link', 'variant']
}
</script>

<style>

</style>