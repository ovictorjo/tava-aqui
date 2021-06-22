//import {MyDatabaseClassic} from './db/my-database-classic'
//import { myDataBase as myDataBaseClassicFromModule } from './module_a';
import {MyDatabaseModule} from './db/my-database';

const db = MyDatabaseModule;

db.add({name:  'Roberto', age: 12})
db.add({name: 'Luanilda', age: 22});
db.show();
