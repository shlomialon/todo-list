Vue.component('task-list', {
    template: `
    <ul class="mdl-list">
        <li class="mdl-list__item" v-for="item in items">
          <task-item :item="item" v-on:select-item="selectItemEdit"></task-item>
        </li>
    </ul>
`,
    props: ['items','selectedItem'],
    methods: {
        selectItemEdit: function (item) {
            this.$emit('select-item', item);
        },
    },
});