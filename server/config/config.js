// puerto

process.env.PORT = process.env.PORT || 3000;

// =======================
// Entorno
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
// Base de datos
// =======================

let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://admindb:g68YEgekwq65L4gu@cluster0.4ip9r.mongodb.net/cafe'
}

process.env.URLDB = urlDB;
