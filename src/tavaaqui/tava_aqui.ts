import {myDatabase} from '../tavaaqui/db/my-database';

const db = myDatabase;

db.add({item:'Bolacha', onde_deixei: 'Parte azul da geladeira'});
db.add({item:'Caderno', onde_deixei: 'Na mesa da sala'});
db.add({item:'Pagamento do boleto da luz', onde_deixei:'Imprimir boleto'});
db.add({item:'AV2 de PP', onde_deixei:'Dia 22/06/2021 - Não esquecer!'});
db.remove(0);
db.show();