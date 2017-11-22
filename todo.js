var app = new Vue({
    el: '#app',
    data: {
        items: [],
        selectedItem: null,
    },
    methods : {
        selectItem : function (item) {
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