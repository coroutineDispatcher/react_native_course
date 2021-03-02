class Order {
    constructor(id, items, totalAmmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmmount = totalAmmount;
        this.date = date;
    }

    get readableDate() {
        return this.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

export default Order;