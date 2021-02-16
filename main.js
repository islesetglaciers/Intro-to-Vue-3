const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm pair of fuzzy socks.',
            image: './assets/images/socks_blue.jpg',
            inventory: 8,
            onSale: true
            url: 'https://v3.vuejs.org/'
        }
    }
});