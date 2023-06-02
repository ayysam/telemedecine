// importationd de notre app (la partie de traitement)
const app = require('./backend/app');
// l'ecoute de serveur sur le port 3000 
app.listen(3000, ()=> {
    console.log("APP is listening on Port 3000...");
});
//"node server.js" pour lancer le serveur
// nodemon server.js c mieux pour lancer le  serveur
// installatuon d'un module nodemon pour faire la modification de fur a mesure 
// nodemon pour reload automatique de serveur



