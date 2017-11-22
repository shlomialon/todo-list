Vue.component("App", {
    template: `
<div>
    <task-add :items="items"></task-add>
    <task-list :items="items"  v-on:select-item="selectItem" v-on:remove-item="removeItem" :selected-item="selectedItem"></task-list>
    <task-details :selected-item="selectedItem" v-on:remove-item="removeItem"></task-details>
</div>   
`,
    data: function () {
        return {
            items: [],
            selectedItem: null,
        }
    },
    methods: {
        selectItem: function (item) {
            console.log('selectItem: ', item);
            this.selectedItem = item;
        },
        removeItem: function (itemToRemove) {
            console.log('removeItem: ', itemToRemove);
            var idx = this.items.map(function (item) {
                return item.id;
            }).indexOf(itemToRemove.id);

            if (idx !== -1) {
                this.items.splice(idx, 1);
            }

            this.selectedItem = null;
        }
    }
});