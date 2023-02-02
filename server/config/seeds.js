const db = require('./connection');
const { Experiences, Reviews, User, Order } = require('../models');

db.once('open', async () => {
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
            reviews: review[0]._id,
            experiences: experiences[10]._id,
            points: 7000,
            orders: '',

        },
        {
            firstName: 'Miles',
            lastName: 'Davis',
            id: 2,
            email: 'livelove@gmail.com',
            bio: 'Live, laugh, love',
            password: 'ho86ks6gd0wh',
            image: '',
            reviews: review[2]._id,
            experiences: experiences[8]._id,
            points: 1000,
            orders: '',

        },
        {
            firstName: 'Marvin',
            lastName: 'Gaye',
            id: 3,
            email: 'whatsgoinon@gmail.com',
            bio: 'Just another guy who likes concerts and dining out.',
            password: '018dj6djs66rf',
            image: '',
            reviews: review[1]._id,
            experiences: experiences[1]._id,
            points: 500,
            orders: '',

        },
        {
            firstName: 'Quincy',
            lastName: 'Jones',
            id: 4,
            email: 'qqjjonez@gmail.com',
            bio: 'Jazz and drinks!',
            password: 'ttph7sms6kdm',
            image: '',
            reviews: review[4]._id,
            experiences: experiences[21]._id,
            points: 1500,
            orders: '',

        },
        {
            firstName: 'Bob',
            lastName: 'Dylan',
            id: 5,
            email: 'bobddylan@gmail.com',
            bio: 'Lax when I need to be, active when I want to be',
            password: '10fjk7ddduw7',
            image: '',
            reviews: review[5]._id,
            experiences: experiences[10]._id,
            points: 2000,
            orders: '',

        },
        {
            firstName: 'Kate',
            lastName: 'Bush',
            id: 6,
            email: 'kbbush@gmail.com',
            bio: 'CONCERT EXPERT AND DINING BUFF!',
            password: '87efmfe6rfij8',
            image: '',
            reviews: review[6]._id,
            experiences: experiences[17]._id,
            points: 4000,
            orders: '',

        },

    ]);

    console.log('Users seeded!!!');

    await Experiences.deleteMany();

    const experiences = await Experiences.insertMany([

        {
            name: 'Bowling',
            id: 1,
            points: 1000,
            activityLevel: 2,
            price: 20,
            description: 'Purchase passes to go bowling and strike out today!',
            image: 'bowling.avif'
        },
        {
            name: 'Dining',
            id: 2,
            points: 500,
            activityLevel: 1,
            price: 25,
            description: 'Make reservations to amazing restaurants today!',
            image: '.avif'
        },
        {
            name: 'Concerts',
            id: 3,
            points: 2000,
            activityLevel: 4,
            price: 20,
            description: 'Purchase tickets to see your favorite band live!',
            image: '.avif'
        },
        {
            name: 'Skydiving',
            id: 4,
            points: 2500,
            activityLevel: 5,
            price: 100,
            description: 'Purchase the ultimate thrill ride today!',
            image: 'skydiving.avif'
        },
        {
            name: 'Winter Activities',
            id: 5,
            points: 2500,
            activityLevel: 5,
            price: 70,
            description: 'Purchase passes to go skiing, snowboarding, tubing, and more today!',
            image: 'skiing.avif'
        },
        {
            name: 'Camping',
            id: 6,
            points: 2000,
            activityLevel: 4,
            price: 80,
            description: 'Reserve a spot for an unforgettable trip to nature!',
            image: 'camping.avif'
        },
        {
            name: 'Trampoline Park',
            id: 7,
            points: 2500,
            activityLevel: 5,
            price: 30,
            description: 'Purchase passes to jump around!',
            image: 'trampoline.avif'
        },
        {
            name: 'Hiking',
            id: 8,
            points: 2000,
            activityLevel: 4,
            price: 0,
            description: 'Find amazing views near you!',
            image: 'hiking.avif'
        },
        {
            name: 'Museum',
            id: 9,
            points: 1000,
            activityLevel: 2,
            price: 20,
            description: 'Purchase passes to find galleries, showcases, history, and more!',
            image: 'museum.avif'
        },
        {
            name: 'Boating',
            id: 10,
            points: 2500,
            activityLevel: 5,
            price: 30,
            description: 'Purchase passes to get out on the water!',
            image: 'kayak.avif'
        },
        {
            name: 'City Tours',
            id: 11,
            points: 1500,
            activityLevel: 3,
            price: 40,
            description: 'Purchase passes to see a new city, or your own city with a fresh view!',
            image: '.avif'
        },
        {
            name: 'Spa',
            id: 12,
            points: 500,
            activityLevel: 1,
            price: 40,
            description: 'Purchase the ultimate day of relaxation!',
            image: '.avif'
        },
        {
            name: 'Arcade',
            id: 13,
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
            points: 2000,
            activityLevel: 4,
            price: 50,
            description: 'Purchase tickets to root for your favorite team play!',
            image: 'baseball.avif'
        },
        {
            name: 'Casino',
            id: 16,
            points: 1000,
            activityLevel: 2,
            price: 50,
            description: 'Find ammenities to heighten your casino experience today!',
            image: 'casino.avif'
        },
        {
            name: 'Amusement Park',
            id: 17,
            points: 1500,
            activityLevel: 3,
            price: 30,
            description: 'Find and purchase tickets to the ultimate theme park of your dreams today!',
            image: 'themepark.avif'
        },
        {
            name: 'Fishing',
            id: 18,
            points: 1500,
            activityLevel: 3,
            price: 30,
            description: 'Find the perfect spot to have your lazy day today!',
            image: 'fishing.avif'
        },
        {
            name: 'Laser Tag',
            id: 21,
            points: 1500,
            activityLevel: 3,
            price: 20,
            description: 'Purchase passes to have the ultimate group experience today!',
            image: 'lasertag.avif'
        },
        {
            name: 'Biking',
            id: 22,
            points: 2500,
            activityLevel: 5,
            price: 0,
            description: 'Find easy going or extreme biking trails and rent a bike today!',
            image: 'mountainbike.avif'
        },
        {
            name: 'Movies',
            id: 23,
            points: 500,
            activityLevel: 1,
            price: 10,
            description: 'Purchase tickets to your most anticipated movies today!',
            image: 'movietheater.avif'
        },
        {
            name: 'Painting',
            id: 24,
            points: 1000,
            activityLevel: 2,
            price: 10,
            description: 'Find a good painting spot or join in on a class today!',
            image: 'painting.avif'
        },
        {
            name: 'Zoo',
            id: 25,
            points: 1000,
            activityLevel: 2,
            price: 20,
            description: 'Purchase passes and see the wildlife at your nearest zoo today!',
            image: 'petzoo.avif'
        },
        {
            name: 'Safari',
            id: 26,
            points: 1500,
            activityLevel: 3,
            price: 100,
            description: 'Fill up your vacation with an unforgettable adventure today!',
            image: 'safrai.avif'
        },
        {
            name: 'Surfing',
            id: 27,
            points: 2000,
            activityLevel: 4,
            price: 50,
            description: 'Surfs up! Find a cool spot and rent a board today!',
            image: 'surfing.avif'
        },
        {
            name: 'Swimming',
            id: 28,
            points: 2000,
            activityLevel: 4,
            price: 10,
            description: 'Purchase passes to find a new and refreshing swimming spot today!',
            image: 'swimming.avif'
        },
        {
            name: 'Winery',
            id: 29,
            points: 500,
            activityLevel: 1,
            price: 50,
            description: 'Find a fancy dine-in winery to enjoy your night!',
            image: 'winery.avif'
        },

    ]);

    console.log('Experiences seeded!!!')

    await Reviews.deleteMany();

    const review = Reviews.insertMany([
        {
            experience: experiences[5]._id,
            id: 1,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[2]._id,
            id: 2,
            description: ':))))))'
        },
        {
            experience: experiences[3]._id,
            id: 3,
            description: 'Trash, boring, and not very based.'
        },
        {
            experience: experiences[10]._id,
            id: 4,
            description: 'I lived, I laughed, I loved'
        },
        {
            experience: experiences[1]._id,
            id: 5,
            description: 'OH YEAHHHHHH'
        },
        {
            experience: experiences[11]._id,
            id: 6,
            description: 'Loved it. Took my grandma and we had a great time.'
        },
        {
            experience: experiences[7]._id,
            id: 7,
            description: 'Overrated and pretentious'
        },
        {
            experience: experiences[1]._id,
            id: 8,
            description: 'IT SUCKED DONT EVER DO IT (maybe)'
        },
    ]);

    console.log('Reviews seeded!!!');

    await Order.deleteMany();

    const orders = Order.insertMany([
        {
            id: 1,
            purchaseDate: '',
            experience: experiences[17]._id
        },
        {
            id: 2,
            purchaseDate: '',
            experience: experiences[16]._id
        },
        {
            id: 3,
            purchaseDate: '',
            experience: experiences[10]._id
        },
        {
            id: 4,
            purchaseDate: '',
            experience: experiences[22]._id
        },
        {
            id: 5,
            purchaseDate: '',
            experience: experiences[5]._id
        },
        {
            id: 6,
            purchaseDate: '',
            experience: experiences[8]._id
        },
        {
            id: 7,
            purchaseDate: '',
            experience: experiences[5]._id
        },
        {
            id: 8,
            purchaseDate: '',
            experience: experiences[1]._id
        },
    ]);
  });
