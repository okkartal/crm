import { 
    addNewPerson, 
    getPersons, 
    getPersonWithID, 
    updatePerson,
    deletePerson 
} from '../controllers/personController';

const routes = (app) => {
    app.route('/Person')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPersons)
    
    // POST endpoint
    .post(addNewPerson);

    app.route('/Person/:PersonId')
    // get specific Person
    .get(getPersonWithID)
    
    // put request
    .put(updatePerson)

    // delete request
    .delete(deletePerson);
}

export default routes;
