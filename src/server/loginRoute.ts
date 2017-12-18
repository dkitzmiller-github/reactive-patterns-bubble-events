

import {User} from "../app/shared/model/user";

const auth = {
    'john@gmail.com': 'test123',
    'dk@gmail.com': 'dk123',
    'bill@gmail.com': 'test456'

};

const users: {[key:string]: User} = {
    'john@gmail.com': {
        firstName: 'John'
    },
    'dk@gmail.com': {
        firstName: 'Dave'
    },
    'bill@gmail.com': {
        firstName: 'Bill'
    }
};

export function loginRoute(req, res) {


    const payload = req.body;

    console.log('verifying password ...', payload);


    if (auth[payload.email] && auth[payload.email] === payload.password) {
        console.log('verification successful.')
        res.status(200).json(users[payload.email]);
    }
    else {
        res.sendStatus(500);
    }




}