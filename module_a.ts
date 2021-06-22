import {MyDatabaseModule} from './db/my-database'
import { MyDatabaseClassic as myDataBaseA } from './db/my-database-classic';

const MyDatabaseClassic = MyDatabaseModule;

MyDatabaseClassic.add({name:  'Joao', age: 12})
MyDatabaseClassic.add({name: 'Livia', age: 22});
MyDatabaseClassic.show();

