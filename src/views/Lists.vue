<template>
    <div class="lists">
        <EventListener @keydown.27="activeItem = ''" />

        <div class="layout">
            <ol class="list" v-for="list in sortedLists" :key="list.title" :class="{ 'list--pinned' : list.pinned }">
                <header class="list__header">
                    <span class="list__header__title">{{ list.title }}</span>
                    <span class="list__header__category">{{ list.category }}</span>
                </header>

                <li class="list__item" v-for="(item, i) in list.items" :key="i" @click="activeItem = item">
                    <span class="list__item__title">{{ item.title }}</span>
                    <span class="list__item__price" v-if="item.price">{{ item.price.amount }}{{ item.price.currency }}</span>
                </li>

                <input type="text" name="title" class="list__item list__item--input input">
            </ol>
        </div>

        <Modal :class="{ 'modal--visible': activeItem != '' }"
         :title="activeItem.title"
         :price="activeItem.price">
            <template v-slot:overlay>
                <div class="modal__overlay" @click="activeItem  = ''"></div>
            </template>
        </Modal>
    </div>
</template>

<script>
import lists from '@/data/lists.json';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import EventListener from '@/components/EventListener';

export default {
    name: 'Home',
    data() {
        return {
            lists: lists,
            activeItem: ''
        }
    },
    computed: {
        pinnedLists() {
            const pinnedLists = lists.filter(item => item.pinned);
            return pinnedLists
        },
        sortedLists() {
            const sorted = lists.sort((a, b) => a.pinned < b.pinned ? 1 : -1)
            return sorted;
        }
    },
    components: {
        Modal,
        Button,
        EventListener
    }
}
</script>
