Vue.component('task-list', {
    template: `
<div>
    <ul>
        <li v-for="item in items">
          <task-item :item="item" v-on:select-item="selectItemEdit"></task-item>
        </li>
    </ul>
</div>
`,
    props: ['items','selectedItem'],
    methods: {
        selectItemEdit: function (item) {
            this.$emit('select-item', item);
        },
    },
});