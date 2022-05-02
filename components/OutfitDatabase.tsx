import React, { Component } from 'react';
import { Text } from 'react-native';

const OutfitDatabase: any = [
    {
        id: 1,
        img:require('../assets/images/outfit_img/id1.jpg'),
        closet: 'Chapel Hill',
        tags: ['spring', 'casual', 'brown', 'accessory'],
        worn: false,
        rack: false,

    },
    {
        id: 2,
        img:require('../assets/images/outfit_img/id2.jpg'),
        closet: 'Chapel Hill',
        tags: ['spring', 'workout', 'white', 'black'],
        worn: false,
        rack: false,

    },

    {
        id: 3,
        closet: 'Chapel Hill',
        img:require('../assets/images/outfit_img/id3.jpg'),
        tags: ['spring', 'casual', 'white', 'brown'],
        worn: false,
        rack: false,


    },
    {
        id: 4,
        img:require('../assets/images/outfit_img/id4.jpg'),
        closet: 'Chapel Hill',
        tags: ['fall', 'casual', 'brown', 'black', 'accessory'],
        worn: false,
        rack: false,

    },
    {
        id: 5,
        img:require('../assets/images/outfit_img/id5.jpg'),
        closet: 'Chapel Hill',
        tags: ['winter', 'casual', 'accessory', 'brown'],
        worn: true,
        rack: false,


    },
    {
        id: 6,
        img:require('../assets/images/outfit_img/id6.jpg'),
        closet: 'Chapel Hill',
        tags: ['winter', 'white', 'black', 'dressy'],
        worn: false,
        rack: false,


    },
    {
        id: 7,
        img:require('../assets/images/outfit_img/id7.jpg'),
        closet: 'Charlotte',
        tags: ['spring', 'dressy', 'accessory', 'green'],
        worn: true,
        rack: false,


    },
    {
        id: 8,
        img:require('../assets/images/outfit_img/id8.jpg'),
        closet: 'Charlotte',
        tags: ['winder', 'fall', 'casual', 'white', 'black'],
        worn: true,
        rack: false,


    },
    {
        id: 9,
        img:require('../assets/images/outfit_img/id9.jpg'),
        closet: 'Charlotte',
        tags: ['fall', 'spring', 'work', 'black'],
        worn: false,
        rack: false,


    },
    {
        id: 10,
        img:require('../assets/images/outfit_img/id10.jpg'),
        closet: 'Charlotte',
        tags: ['winter', 'work', 'navy'],
        worn: false,
        rack: false,


    },
    
]

export default OutfitDatabase;