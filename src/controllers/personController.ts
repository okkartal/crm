import * as mongoose from 'mongoose';
import { PersonSchema } from '../models/person';

const Person = mongoose.model('Person', PersonSchema);

export const addNewPerson = (req, res) => {
    let newPerson = new Person(req.body);

    newPerson.save((err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    });
};

export const getPersons = (req, res) => {
    Person.find({}, (err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    });
};

export const getPersonWithID = (req, res) => {
    Person.findById(req.params.PersonId, (err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    });
}

export const updatePerson = (req, res) => {
    Person.findOneAndUpdate({ _id: req.params.PersonId}, req.body, { new: true }, (err, Person) => {
        if (err) {
            res.send(err);
        }
        res.json(Person);
    })
}

export const deletePerson = (req, res) => {
    Person.remove({ _id: req.params.PersonId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Person'});
    })
}