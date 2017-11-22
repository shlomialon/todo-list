Vue.component('task-add', {
    template: `
<div>
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" v-on:keyup.enter="addToList" v-model="newItemText" type="text" placeholder="insert task to list.."/>
  </div>
    <button v-on:click="addToList" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
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


