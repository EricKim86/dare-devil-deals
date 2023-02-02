const db = require('./connection');
const { Experiences } = require('../models');

db.once('open', async () => {
    await Experiences.deleteMany();

    const experiences = await Experiences.insertMany([

        {
            name: 'Bowling',
            id: 1,
            points: 500,
            activityLevel: 1,
            originalprice: 30,
            price: 20,
            description: 'Purchase passes to go bowling and strike out today!',
            image: 'bowling.avif'
        },
        {
            name: 'Concerts',
            id: 2,
            points: 1000,
            activityLevel: 2,
            originalprice: 35,
            price: 20,
            description: 'Purchase tickets to see your favorite band live!',
            image: 'concerts.avif'
        },
        {
            name: 'Skydiving',
            id: 3,
            points: 1500,
            activityLevel: 3,
            originalprice: 150,
            price: 100,
            description: 'Purchase the ultimate thrill ride today!',
            image: 'skydiving.avif'
        },
        {
            name: 'Winter Activities',
            id: 4,
            points: 1500,
            activityLevel: 3,
            originalprice: 100,
            price: 70,
            description: 'Purchase passes to go skiing, snowboarding, tubing, and more today!',
            image: 'skiing.avif'
        },
        {
            name: 'Camping',
            id: 5,
            points: 1000,
            activityLevel: 2,
            originalprice: 100,
            price: 80,
            description: 'Reserve a spot for an unforgettable trip to nature!',
            image: 'camping.avif'
        },
        {
            name: 'Trampoline Park',
            id: 6,
            points: 1500,
            activityLevel: 3,
            originalprice: 45,
            price: 30,
            description: 'Purchase passes to jump around!',
            image: 'trampoline.avif'
        },
        {
            name: 'Hiking',
            id: 7,
            points: 1500,
            activityLevel: 3,
            originalprice: 20,
            price: 10,
            description: 'Find amazing views and state park passes near you!',
            image: 'hiking.avif'
        },
        {
            name: 'Museum',
            id: 8,
            points: 500,
            activityLevel: 1,
            originalprice: 35,
            price: 20,
            description: 'Purchase passes to find galleries, showcases, history, and more!',
            image: 'museum.avif'
        },
        {
            name: 'Boating',
            id: 9,
            points: 1500,
            activityLevel: 3,
            originalprice: 45,
            price: 30,
            description: 'Purchase passes to get out on the water!',
            image: 'kayak.avif'
        },
        {
            name: 'City Tours',
            id: 10,
            points: 1000,
            activityLevel: 2,
            originalprice: 50,
            price: 40,
            description: 'Purchase passes to see a new city, or your own city with a fresh view!',
            image: 'citytours.avif'
        },
        {
            name: 'Spa',
            id: 11,
            points: 500,
            activityLevel: 1,
            originalprice: 60,
            price: 40,
            description: 'Purchase the ultimate day of relaxation!',
            image: 'spa.avif'
        },
        {
            name: 'Arcade',
            id: 12,
            points: 500,
            activityLevel: 1,
            originalprice: 20,
            price: 10,
            description: 'Deals on the ultimate vintage videogame experience!',
            image: 'arcade.avif'
        },
        {
            name: 'Live Theatre',
            id: 13,
            points: 500,
            activityLevel: 1,
            originalprice: 50,
            price: 30,
            description: 'Go to see your favorite comedian, play, musical, and more live!',
            image: 'livetheatre.avif'
        },
        {
            name: 'Sports Events',
            id: 14,
            points: 1000,
            activityLevel: 2,
            originalprice: 60,
            price: 40,
            description: 'Purchase tickets to root for your favorite team play!',
            image: 'baseball.avif'
        },
        {
            name: 'Casino',
            id: 15,
            points: 500,
            activityLevel: 1,
            originalprice: 100,
            price: 50,
            description: 'Find ammenities to heighten your casino experience today!',
            image: 'casino.avif'
        },
        {
            name: 'Amusement Park',
            id: 16,
            points: 1000,
            activityLevel: 2,
            originalprice: 50,
            price: 30,
            description: 'Find and purchase tickets to the ultimate theme park of your dreams today!',
            image: 'themepark.avif'
        },
        {
            name: 'Fishing',
            id: 17,
            points: 1000,
            activityLevel: 2,
            originalprice: 45,
            price: 30,
            description: 'Find the perfect spot to have your lazy day today!',
            image: 'fishing.avif'
        },
        {
            name: 'Laser Tag',
            id: 18,
            points: 1000,
            activityLevel: 2,
            originalprice: 30,
            price: 20,
            description: 'Purchase passes to have the ultimate group experience today!',
            image: 'lasertag.avif'
        },
        {
            name: 'Biking',
            id: 19,
            points: 1500,
            activityLevel: 3,
            originalprice: 30,
            price: 20,
            description: 'Find easy going or extreme biking trails and rent a bike today!',
            image: 'mountainbike.avif'
        },
        {
            name: 'Movies',
            id: 20,
            points: 500,
            activityLevel: 1,
            originalprice: 15,
            price: 8,
            description: 'Purchase tickets to your most anticipated movies today!',
            image: 'movietheater.avif'
        },
        {
            name: 'Painting',
            id: 21,
            points: 500,
            activityLevel: 1,
            originalprice: 20,
            price: 10,
            description: 'Find a good painting spot or join in on a class today!',
            image: 'painting.avif'
        },
        {
            name: 'Zoo',
            id: 22,
            points: 500,
            activityLevel: 1,
            originalprice: 30,
            price: 20,
            description: 'Purchase passes and see the wildlife at your nearest zoo today!',
            image: 'petzoo.avif'
        },
        {
            name: 'Safari',
            id: 23,
            points: 1000,
            activityLevel: 2,
            originalprice: 125,
            price: 100,
            description: 'Fill up your vacation with an unforgettable adventure today!',
            image: 'safrai.avif'
        },
        {
            name: 'Surfing',
            id: 24,
            points: 1500,
            activityLevel: 3,
            originalprice: 60,
            price: 40,
            description: 'Surfs up! Find a cool spot and rent a board today!',
            image: 'surfing.avif'
        },
        {
            name: 'Swimming',
            id: 25,
            points: 1500,
            activityLevel: 3,
            originalprice: 15,
            price: 10,
            description: 'Purchase passes to find a new and refreshing swimming spot today!',
            image: 'swimming.avif'
        },
        {
            name: 'Winery',
            id: 26,
            points: 500,
            activityLevel: 1,
            percentage: 15,
            description: 'Find a fancy dine-in winery to enjoy your night!',
            image: 'winery.avif'
        },
        {
            name: 'The Diner',
            id: 27,
            points: 500,
            activityLevel: 4,
            percentage: 15,
            description: 'Find the greatest representation of food from the United States today!',
            image: 'thediner.avif'
        },
        {
            name: 'Pearls',
            id: 28,
            points: 500,
            activityLevel: 4,
            percentage: 15,
            description: 'Find the greatest representation of food from the United States today!',
            image: 'pearls.avif'
        },
        {
            name: 'Evan and Son Steakhouse',
            id: 29,
            points: 500,
            activityLevel: 4,
            percentage: 15,
            description: 'Find the greatest representation of food from the United States today!',
            image: 'steakhouse.avif'
        },
        {
            name: 'Maggiano',
            id: 30,
            points: 500,
            activityLevel: 5,
            percentage: 15,
            description: 'Find the greatest representation of food from Italy today!',
            image: 'maggiano.avif'
        },
        {
            name: 'Little Italy',
            id: 31,
            points: 500,
            activityLevel: 5,
            percentage: 15,
            description: 'Find the greatest representation of food from Italy today!',
            image: 'littleitaly.avif'
        },
        {
            name: 'La Cantina',
            id: 32,
            points: 500,
            activityLevel: 5,
            percentage: 15,
            description: 'Find the greatest representation of food from the Italy today!',
            image: 'lacantina.avif'
        },
        {
            name: 'Cherry Blossom',
            id: 33,
            points: 500,
            activityLevel: 6,
            percentage: 15,
            description: 'Find the greatest representation of food from China today!',
            image: 'cherryblossom.avif'
        },
        {
            name: 'Hanto',
            id: 34,
            points: 500,
            activityLevel: 6,
            percentage: 15,
            description: 'Find the greatest representation of food from China today!',
            image: 'hanto.avif'
        },
        {
            name: 'Star House',
            id: 35,
            points: 500,
            activityLevel: 6,
            percentage: 15,
            description: 'Find the greatest representation of food from China today!',
            image: 'starhouse.avif'
        },
        {
            name: 'Los Cabos',
            id: 36,
            points: 500,
            activityLevel: 7,
            percentage: 15,
            description: 'Find the greatest representation of food from the country today!',
            image: 'loscabos.avif'
        },
        {
            name: 'Mexico City',
            id: 37,
            points: 500,
            activityLevel: 7,
            percentage: 15,
            description: 'Find the greatest representation of food from the country today!',
            image: 'mexicocity.avif'
        },
        {
            name: 'Aztec Restaurant',
            id: 38,
            points: 500,
            activityLevel: 7,
            percentage: 15,
            description: 'Find the greatest representation of food from the country today!',
            image: 'aztec.avif'
        },
        {
            name: '2Mauro',
            id: 39,
            points: 500,
            activityLevel: 8,
            percentage: 15,
            description: 'Find the greatest representation of food from the country today!',
            image: '2mauro.avif'
        },
        {
            name: 'Maison de Manger',
            id: 40,
            points: 500,
            activityLevel: 8,
            percentage: 15,
            description: 'Find the greatest representation of food from the country today!',
            image: 'maison.avif'
        },
        {
            name: 'Aquitaine',
            id: 41,
            points: 500,
            activityLevel: 8,
            percentage: 15,
            description: 'Find the greatest representation of food from the country today!',
            image: 'aquitaine.avif'
        },
        {
            name: 'Salad Mix',
            id: 42,
            points: 100,
            activityLevel: 9,
            originalprice: 5,
            price: 3,
            description: 'Find deals on groceries and stock your fridge today!',
            image: 'saladmix.avif'
        },
        {
            name: 'Pistachios',
            id: 43,
            points: 100,
            activityLevel: 9,
            originalprice: 6,
            price: 4,
            description: 'Find deals on groceries and stock your fridge today!',
            image: 'pistachios.avif'
        },
        {
            name: 'Bread',
            id: 44,
            points: 100,
            activityLevel: 9,
            originalprice: 5,
            price: 3,
            description: 'Find deals on groceries and stock your fridge today!',
            image: 'bread.avif'
        },
        {
            name: 'Eggs',
            id: 45,
            points: 100,
            activityLevel: 9,
            originalprice: 6,
            price: 4,
            description: 'Find deals on groceries and stock your fridge today!',
            image: 'eggs.avif'
        },
        {
            name: 'Milk',
            id: 46,
            points: 100,
            activityLevel: 9,
            originalprice: 5,
            price: 3,
            description: 'Find deals on groceries and stock your fridge today!',
            image: 'milk.avif'
        },
        {
            name: 'Dress',
            id: 47,
            points: 100,
            activityLevel: 10,
            originalprice: 30,
            price: 15,
            description: 'Find deals on the hottest styles today!',
            image: 'dress.avif'
        },
        {
            name: 'T-Shirt',
            id: 48,
            points: 100,
            activityLevel: 10,
            originalprice: 15,
            price: 10,
            description: 'Find deals on the hottest styles today!',
            image: 'tshirt.avif'
        },
        {
            name: 'Jeans',
            id: 49,
            points: 100,
            activityLevel: 10,
            originalprice: 25,
            price: 15,
            description: 'Find deals on the hottest styles today!',
            image: 'jeans.avif'
        },
        {
            name: 'Pullover Hoodie',
            id: 50,
            points: 100,
            activityLevel: 10,
            originalprice: 30,
            price: 20,
            description: 'Find deals on the hottest styles today!',
            image: 'hoodie.avif'
        },
        {
            name: 'Beanie',
            id: 51,
            points: 100,
            activityLevel: 10,
            originalprice: 20,
            price: 10,
            description: 'Find deals on the hottest styles today!',
            image: 'beanie.avif'
        },
        {
            name: 'Baseball Bat',
            id: 52,
            points: 100,
            activityLevel: 11,
            originalprice: 30,
            price: 20,
            description: 'Find deals on ways to keep active today!',
            image: 'baseballbat.avif'
        },
        {
            name: 'Helmet',
            id: 53,
            points: 100,
            activityLevel: 11,
            originalprice: 30,
            price: 20,
            description: 'Find deals on ways to keep active today!',
            image: 'helmet.avif'
        },
        {
            name: 'Weights',
            id: 54,
            points: 100,
            activityLevel: 11,
            originalprice: 20,
            price: 15,
            description: 'Find deals on ways to keep active today!',
            image: 'weights.avif'
        },
        {
            name: 'Soccerball',
            id: 55,
            points: 100,
            activityLevel: 11,
            originalprice: 1,
            price: 15,
            description: 'Find deals on ways to keep active today!',
            image: 'soccerball.avif'
        },
        {
            name: 'Tent',
            id: 56,
            points: 100,
            activityLevel: 11,
            originalprice: 1,
            price: 60,
            description: 'Find deals on ways to keep active today!',
            image: 'tent.avif'
        },
        {
            name: 'Towels',
            id: 57,
            points: 100,
            activityLevel: 12,
            originalprice: 15,
            price: 10,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: 'towels.avif'
        },
        {
            name: 'Silverware',
            id: 58,
            points: 100,
            activityLevel: 12,
            originalprice: 20,
            price: 10,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: 'silverware.avif'
        },
        {
            name: 'Scented Candle',
            id: 59,
            points: 100,
            activityLevel: 12,
            originalprice: 10,
            price: 5,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: 'scentedcandle.avif'
        },
        {
            name: 'Poster',
            id: 60,
            points: 100,
            activityLevel: 12,
            originalprice: 10,
            price: 5,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: 'poster.avif'
        },
        {
            name: 'Smart Watch',
            id: 61,
            points: 100,
            activityLevel: 12,
            originalprice: 80,
            price: 50,
            description: 'Find deals on electronics, odds and ends, and much more today!',
            image: 'smartwatch.avif'
        },

    ]);

    console.log('Experiences seeded!!!')

  });
