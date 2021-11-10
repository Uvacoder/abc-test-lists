<template>
    <div id="app">
        <MainHeader>
            <nav>
                <router-link :to="{ name: 'Lists' }">Lists</router-link>
            </nav>
        </MainHeader>

        <router-view/>
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
    components: {
        MainHeader
    }
}
</script>

<style lang="scss">
@import '@/scss/master.scss';
</style>
