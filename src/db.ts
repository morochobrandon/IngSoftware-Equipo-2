/*
import low, { LowSync } from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

interface MyData {
    posts: { id: number; title: string; views: number }[];
}

// Crea una instancia de la base de datos
const adapter = new JSONFileSync<MyData>('db.json'); // Cambia el nombre del archivo según tu preferencia
const db = new LowSync(adapter,{ posts: [] });

// Inicializa la base de datos con datos predeterminados si es necesario
db.defaults({ posts: [] }).write();
*/

/*
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'

interface productos{
    cantidad:number
    //name:string
}

const newProduct = { cantidad: 10 };
const db = new LowSync<productos>(new JSONFileSync('db.json'),newProduct);

db.data
// Inicializa la base de datos con datos predeterminados si es necesario
db.read();
// Guarda los cambios en el archivo
db.write();
*/