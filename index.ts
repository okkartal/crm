import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import routes from "./src/routes/personRoutes";
import messenger from "./src/controllers/createMessage";
import { Settings } from "./settings";

const app = express();
//instance of our class
let message = new messenger(Settings.PORT);

const dataConnection = (user: string, password: string) => {
  return `mongodb://${user}:${password}@localhost:27017/crmDB`;
};

let database = dataConnection(Settings.user, Settings.password);

// mongoose connection
mongoose.connect(database, {
  useMongoClient: true,
});

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => res.send(message.messagePrint()));

app.listen(Settings.PORT, () => console.log(message.messagePrint()));
