const db = require('./connection');
const { Experiences, Reviews, User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    const users = await User.insertMany([
        {
            name: 'Harold Kumar',
            id: 1,
            description: 'Just a guy who likes concerts and dining out.',

        },
        {
            name: 'Jackie Brown',
            id: 2,
            description: 'Just a guy who likes concerts and dining out.',

        },
        {
            name: 'Harold Kumar',
            id: 3,
            description: 'Just a guy who likes concerts and dining out.',

        },
        {
            name: 'Harold Kumar',
            id: 4,
            description: 'Just a guy who likes concerts and dining out.',

        },
        {
            name: 'Harold Kumar',
            id: 5,
            description: 'Just a guy who likes concerts and dining out.',

        },
        {
            name: 'Harold Kumar',
            id: 6,
            description: 'Just a guy who likes concerts and dining out.',

        },
    ]);

    console.log('Users seeded!!!');

    await Experiences.deleteMany();

    const experiences = await Experiences.insertMany([
        {
            experience: 'Bowling',
            id: 1,
            points: 1000,
            level: 2
        },
        {
            experience: 'Dining',
            id: 2,
            points: 500,
            level: 1
        },
        {
            experience: 'Event',
            id: 3,
            points: 2000,
            level: 4
        },
        {
            experience: 'Skydiving',
            id: 4,
            points: 2500,
            level: 5
        },
        {
            experience: 'Skiing + Snowboarding',
            id: 5,
            points: 2500,
            level: 5
        },
        {
            experience: 'Camping',
            id: 6,
            points: 2000,
            level: 4
        },
        {
            experience: 'Trampoline Park',
            id: 7,
            points: 2500,
            level: 5
        },
        {
            experience: 'Hiking',
            id: 8,
            points: 2000,
            level: 4
        },
        {
            experience: 'Museum',
            id: 9,
            points: 1000,
            level: 2
        },
        {
            experience: 'Boating',
            id: 10,
            points: 2500,
            level: 5
        },
        {
            experience: 'City/Town Tour',
            id: 11,
            points: 1500,
            level: 3
        },
        {
            experience: 'Spa',
            id: 12,
            points: 500,
            level: 1
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
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[3]._id,
            id: 3,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[10]._id,
            id: 4,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[1]._id,
            id: 5,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[11]._id,
            id: 6,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[7]._id,
            id: 7,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
        {
            experience: experiences[1]._id,
            id: 8,
            description: 'HAD A BLAST!!! Would recommend to literally any person.'
        },
    ]);

    console.log('Reviews seeded!!!');
  });
