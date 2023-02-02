const db = require('./connection');
const { Experiences, Reviews, User, Order } = require('../models');

db.once('open', async () => {

    await Experiences.deleteMany();

    const experiences = await Experiences.insertMany([

        {
            name: 'Bowling',
            id: 1,
            points: 500,
            activityLevel: 1,
            price: 20,
            description: 'Purchase passes to go bowling and strike out today!',
            image: 'bowling.avif'
        },
        {
            name: 'Concerts',
            id: 2,
            points: 1000,
            activityLevel: 2,
            price: 20,
            description: 'Purchase tickets to see your favorite band live!',
            image: '.avif'
        },
        {
            name: 'Skydiving',
            id: 3,
            points: 1500,
            activityLevel: 3,
            price: 100,
            description: 'Purchase the ultimate thrill ride today!',
            image: 'skydiving.avif'
        },
        {
            name: 'Winter Activities',
            id: 4,
            points: 1500,
            activityLevel: 3,
            price: 70,
            description: 'Purchase passes to go skiing, snowboarding, tubing, and more today!',
            image: 'skiing.avif'
        },
        {
            name: 'Camping',
            id: 5,
            points: 1000,
            activityLevel: 2,
            price: 80,
            description: 'Reserve a spot for an unforgettable trip to nature!',
            image: 'camping.avif'
        },
        {
            name: 'Trampoline Park',
            id: 6,
            points: 1500,
            activityLevel: 3,
            price: 30,
            description: 'Purchase passes to jump around!',
            image: 'trampoline.avif'
        },
        {
            name: 'Hiking',
            id: 7,
            points: 1500,
            activityLevel: 3,
            price: 0,
            description: 'Find amazing views near you!',
            image: 'hiking.avif'
        },
        {
            name: 'Museum',
            id: 8,
            points: 500,
            activityLevel: 1,
            price: 20,
            description: 'Purchase passes to find galleries, showcases, history, and more!',
            image: 'museum.avif'
        },
        {
            name: 'Boating',
            id: 9,
            points: 1500,
            activityLevel: 3,
            price: 30,
            description: 'Purchase passes to get out on the water!',
            image: 'kayak.avif'
        },
        {
            name: 'City Tours',
            id: 10,
            points: 1000,
            activityLevel: 2,
            price: 40,
            description: 'Purchase passes to see a new city, or your own city with a fresh view!',
            image: '.avif'
        },
        {
            name: 'Spa',
            id: 11,
            points: 500,
            activityLevel: 1,
            price: 40,
            description: 'Purchase the ultimate day of relaxation!',
            image: '.avif'
        },
        {
            name: 'Arcade',
            id: 12,
            points: 500,
            activityLevel: 1,
            price: 10,
            description: 'Deals on the ultimate vintage videogame experience!',
            image: 'arcade.avif'
        },
        {
            name: 'Live Theatre',
            id: 13,
            points: 500,
            activityLevel: 1,
            price: 30,
            description: 'Go to see your favorite comedian, play, musical, and more live!',
            image: 'arcade.avif'
        },
        {
            name: 'Sports Events',
            id: 14,
            points: 1000,
            activityLevel: 2,
            price: 50,
            description: 'Purchase tickets to root for your favorite team play!',
            image: 'baseball.avif'
        },
        {
            name: 'Casino',
            id: 15,
            points: 500,
            activityLevel: 1,
            price: 50,
            description: 'Find ammenities to heighten your casino experience today!',
            image: 'casino.avif'
        },
        {
            name: 'Amusement Park',
            id: 16,
            points: 1000,
            activityLevel: 2,
            price: 30,
            description: 'Find and purchase tickets to the ultimate theme park of your dreams today!',
            image: 'themepark.avif'
        },
        {
            name: 'Fishing',
            id: 17,
            points: 1000,
            activityLevel: 2,
            price: 30,
            description: 'Find the perfect spot to have your lazy day today!',
            image: 'fishing.avif'
        },
        {
            name: 'Laser Tag',
            id: 18,
            points: 1000,
            activityLevel: 2,
            price: 20,
            description: 'Purchase passes to have the ultimate group experience today!',
            image: 'lasertag.avif'
        },
        {
            name: 'Biking',
            id: 19,
            points: 1500,
            activityLevel: 3,
            price: 0,
            description: 'Find easy going or extreme biking trails and rent a bike today!',
            image: 'mountainbike.avif'
        },
        {
            name: 'Movies',
            id: 20,
            points: 500,
            activityLevel: 1,
            price: 10,
            description: 'Purchase tickets to your most anticipated movies today!',
            image: 'movietheater.avif'
        },
        {
            name: 'Painting',
            id: 21,
            points: 500,
            activityLevel: 1,
            price: 10,
            description: 'Find a good painting spot or join in on a class today!',
            image: 'painting.avif'
        },
        {
            name: 'Zoo',
            id: 22,
            points: 500,
            activityLevel: 1,
            price: 20,
            description: 'Purchase passes and see the wildlife at your nearest zoo today!',
            image: 'petzoo.avif'
        },
        {
            name: 'Safari',
            id: 23,
            points: 1000,
            activityLevel: 2,
            price: 100,
            description: 'Fill up your vacation with an unforgettable adventure today!',
            image: 'safrai.avif'
        },
        {
            name: 'Surfing',
            id: 24,
            points: 1500,
            activityLevel: 3,
            price: 50,
            description: 'Surfs up! Find a cool spot and rent a board today!',
            image: 'surfing.avif'
        },
        {
            name: 'Swimming',
            id: 25,
            points: 1500,
            activityLevel: 3,
            price: 10,
            description: 'Purchase passes to find a new and refreshing swimming spot today!',
            image: 'swimming.avif'
        },
        {
            name: 'Winery',
            id: 26,
            points: 500,
            activityLevel: 1,
            price: 50,
            description: 'Find a fancy dine-in winery to enjoy your night!',
            image: 'winery.avif'
        },
        {
            name: 'The Diner',
            id: 27,
            points: 500,
            activityLevel: 4,
            price: 10,
            description: 'Find the greatest representation of food from the United States today!',
            image: '.avif'
        },
        {
            name: 'Pearls',
            id: 28,
            points: 500,
            activityLevel: 4,
            price: 15,
            description: 'Find the greatest representation of food from the United States today!',
            image: '.avif'
        },
        {
            name: 'Evan and Son Steakhouse',
            id: 29,
            points: 500,
            activityLevel: 4,
            price: 15,
            description: 'Find the greatest representation of food from the United States today!',
            image: '.avif'
        },
        {
            name: 'Maggiano',
            id: 30,
            points: 500,
            activityLevel: 5,
            price: 20,
            description: 'Find the greatest representation of food from Italy today!',
            image: '.avif'
        },
        {
            name: 'Little Italy',
            id: 31,
            points: 500,
            activityLevel: 5,
            price: 10,
            description: 'Find the greatest representation of food from Italy today!',
            image: '.avif'
        },
        {
            name: 'La Cantina',
            id: 32,
            points: 500,
            activityLevel: 5,
            price: 15,
            description: 'Find the greatest representation of food from the Italy today!',
            image: '.avif'
        },
        {
            name: 'Cherry Blossom',
            id: 33,
            points: 500,
            activityLevel: 6,
            price: 10,
            description: 'Find the greatest representation of food from China today!',
            image: '.avif'
        },
        {
            name: 'Hanto',
            id: 34,
            points: 500,
            activityLevel: 6,
            price: 20,
            description: 'Find the greatest representation of food from China today!',
            image: '.avif'
        },
        {
            name: 'Star House',
            id: 35,
            points: 500,
            activityLevel: 6,
            price: 15,
            description: 'Find the greatest representation of food from China today!',
            image: '.avif'
        },
        {
            name: 'Los Cabos',
            id: 36,
            points: 500,
            activityLevel: 7,
            price: 10,
            description: 'Find the greatest representation of food from the country today!',
            image: '.avif'
        },
        {
            name: 'Mexico City',
            id: 37,
            points: 500,
            activityLevel: 7,
            price: 10,
            description: 'Find the greatest representation of food from the country today!',
            image: '.avif'
        },
        {
            name: 'Aztec Restaurant',
            id: 38,
            points: 500,
            activityLevel: 7,
            price: 10,
            description: 'Find the greatest representation of food from the country today!',
            image: '.avif'
        },
        {
            name: '2Mauro',
            id: 39,
            points: 500,
            activityLevel: 8,
            price: 10,
            description: 'Find the greatest representation of food from the country today!',
            image: '.avif'
        },
        {
            name: 'Maison de Manger',
            id: 40,
            points: 500,
            activityLevel: 8,
            price: 10,
            description: 'Find the greatest representation of food from the country today!',
            image: '.avif'
        },
        {
            name: 'Aquitaine',
            id: 41,
            points: 500,
            activityLevel: 8,
            price: 10,
            description: 'Find the greatest representation of food from the country today!',
            image: '.avif'
        },
        {
            name: 'Salad Mix',
            id: 42,
            points: 100,
            activityLevel: 9,
            price: 3,
            description: 'Find deals on groceries and stock your fridge today!',
            image: '.avif'
        },
        {
            name: 'Pistachios',
            id: 43,
            points: 100,
            activityLevel: 9,
            price: 4,
            description: 'Find deals on groceries and stock your fridge today!',
            image: '.avif'
        },
        {
            name: 'Bread',
            id: 44,
            points: 100,
            activityLevel: 9,
            price: 3,
            description: 'Find deals on groceries and stock your fridge today!',
            image: '.avif'
        },
        {
            name: 'Eggs',
            id: 45,
            points: 100,
            activityLevel: 9,
            price: 4,
            description: 'Find deals on groceries and stock your fridge today!',
            image: '.avif'
        },
        {
            name: 'Milk',
            id: 46,
            points: 100,
            activityLevel: 9,
            price: 3,
            description: 'Find deals on groceries and stock your fridge today!',
            image: '.avif'
        },
        {
            name: 'Dress',
            id: 47,
            points: 100,
            activityLevel: 10,
            price: 15,
            description: 'Find deals on the hottest styles today!',
            image: '.avif'
        },
        {
            name: 'T-Shirt',
            id: 48,
            points: 100,
            activityLevel: 10,
            price: 10,
            description: 'Find deals on the hottest styles today!',
            image: '.avif'
        },
        {
            name: 'Jeans',
            id: 49,
            points: 100,
            activityLevel: 10,
            price: 15,
            description: 'Find deals on the hottest styles today!',
            image: '.avif'
        },
        {
            name: 'Pullover Hoodie',
            id: 50,
            points: 100,
            activityLevel: 10,
            price: 20,
            description: 'Find deals on the hottest styles today!',
            image: '.avif'
        },
        {
            name: 'Beanie',
            id: 51,
            points: 100,
            activityLevel: 10,
            price: 10,
            description: 'Find deals on the hottest styles today!',
            image: '.avif'
        },
        {
            name: 'Baseball Bat',
            id: 52,
            points: 100,
            activityLevel: 11,
            price: 20,
            description: 'Find deals on ways to keep active today!',
            image: '.avif'
        },
        {
            name: 'Helmet',
            id: 53,
            points: 100,
            activityLevel: 11,
            price: 20,
            description: 'Find deals on ways to keep active today!',
            image: '.avif'
        },
        {
            name: 'Weights',
            id: 54,
            points: 100,
            activityLevel: 11,
            price: 15,
            description: 'Find deals on ways to keep active today!',
            image: '.avif'
        },
        {
            name: 'Soccerball',
            id: 55,
            points: 100,
            activityLevel: 11,
            price: 15,
            description: 'Find deals on ways to keep active today!',
            image: '.avif'
        },
        {
            name: 'Tent',
            id: 56,
            points: 100,
            activityLevel: 11,
            price: 60,
            description: 'Find deals on ways to keep active today!',
            image: '.avif'
        },
        {
            name: 'Towels',
            id: 57,
            points: 100,
            activityLevel: 12,
            price: 10,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: '.avif'
        },
        {
            name: 'Silverware',
            id: 58,
            points: 100,
            activityLevel: 12,
            price: 10,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: '.avif'
        },
        {
            name: 'Scented Candle',
            id: 59,
            points: 100,
            activityLevel: 12,
            price: 5,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: '.avif'
        },
        {
            name: 'Poster',
            id: 60,
            points: 100,
            activityLevel: 12,
            price: 5,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: '.avif'
        },
        {
            name: 'Smart Watch',
            id: 61,
            points: 100,
            activityLevel: 12,
            price: 50,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: '.avif'
        },

    ]);

    console.log('Experiences seeded!!!')

    await Reviews.deleteMany();

    const review = Reviews.insertMany([
        {
            experience: experiences[5].id,
            id: 1,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[2].id,
            id: 2,
            description: ':))))))'
        },
        {
            experience: experiences[3].id,
            id: 3,
            description: 'Trash, boring, and not very based.'
        },
        {
            experience: experiences[10].id,
            id: 4,
            description: 'I lived, I laughed, I loved'
        },
        {
            experience: experiences[1].id,
            id: 5,
            description: 'OH YEAHHHHHH'
        },
        {
            experience: experiences[11].id,
            id: 6,
            description: 'Loved it. Took my grandma and we had a great time.'
        },
        {
            experience: experiences[7].id,
            id: 7,
            description: 'Overrated and pretentious'
        },
        {
            experience: experiences[1].id,
            id: 8,
            description: 'IT SUCKED DONT EVER DO IT (maybe)'
        },
    ]);

    console.log('Reviews seeded!!!');

    await Order.deleteMany();

    const orders = Order.insertMany([
        {
            id: 1,
            purchaseDate: '1',
            experience: experiences[17].id
        },
        {
            id: 2,
            purchaseDate: '2',
            experience: experiences[16].id
        },
        {
            id: 3,
            purchaseDate: '3',
            experience: experiences[10].id
        },
        {
            id: 4,
            purchaseDate: '4',
            experience: experiences[21].id
        },
        {
            id: 5,
            purchaseDate: '5',
            experience: experiences[5].id
        },
        {
            id: 6,
            purchaseDate: '6',
            experience: experiences[8].id
        },
        {
            id: 7,
            purchaseDate: '7',
            experience: experiences[5].id
        },
        {
            id: 8,
            purchaseDate: '8',
            experience: experiences[1].id
        },
    ]);

    await User.deleteMany();

    const users = await User.insertMany([

        {
            firstName: 'Harold',
            lastName: 'Kumar',
            id: 1,
            email: 'hmkumar@gmail.com',
            bio: 'Just a guy who likes concerts and dining out.',
            password: 'asdfghjk1029348',
            image: '',
            reviews: review[0].id,
            experiences: experiences[5].id,
            points: 1500,
            orders: orders[4].id,

        },
        {
            firstName: 'Miles',
            lastName: 'Davis',
            id: 2,
            email: 'livelove@gmail.com',
            bio: 'Live, laugh, love',
            password: 'ho86ks6gd0wh',
            image: '',
            reviews: review[2].id,
            experiences: experiences[8].id,
            points: 1500,
            orders: orders[5].id,

        },
        {
            firstName: 'Marvin',
            lastName: 'Gaye',
            id: 3,
            email: 'whatsgoinon@gmail.com',
            bio: 'Just another guy who likes concerts and dining out.',
            password: '018dj6djs66rf',
            image: '',
            reviews: review[1].id,
            experiences: experiences[1].id,
            points: 1000,
            orders: orders[7].id,

        },
        {
            firstName: 'Quincy',
            lastName: 'Jones',
            id: 4,
            email: 'qqjjonez@gmail.com',
            bio: 'Jazz and drinks!',
            password: 'ttph7sms6kdm',
            image: '',
            reviews: review[4].id,
            experiences: experiences[21].id,
            points: 500,
            orders: orders[3].id,

        },
        {
            firstName: 'Bob',
            lastName: 'Dylan',
            id: 5,
            email: 'bobddylan@gmail.com',
            bio: 'Lax when I need to be, active when I want to be',
            password: '10fjk7ddduw7',
            image: '',
            reviews: review[5].id,
            experiences: experiences[10].id,
            points: 500,
            orders: orders[2].id,

        },
        {
            firstName: 'Kate',
            lastName: 'Bush',
            id: 6,
            email: 'kbbush@gmail.com',
            bio: 'CONCERT EXPERT AND DINING BUFF!',
            password: '87efmfe6rfij8',
            image: '',
            reviews: review[6].id,
            experiences: experiences[17].id,
            points: 1000,
            orders: orders[0].id,

        },

    ]);

    console.log('Users seeded!!!');
    
  });
