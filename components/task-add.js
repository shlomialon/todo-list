Vue.component('task-add', {
    template: `
<div>
    <input v-on:keyup.enter="addToList" v-model="newItemText" type="text" placeholder="insert task to list.."/>
    <button v-on:click="addToList">
        Add Item
    </button>
</div>
`,
    data: function () {
        return {
            newItemText:""
        }
    },
    props: ['items'],
    methods: {
        addToList: function () {
            if (this.items.indexOf(this.newItem) >= 0) {
            } else this.items.push({
                text: this.newItemText,
                activity: false,
                id: this.items.length
            });
            this.newItem = {text: null};
        },
    },
});


