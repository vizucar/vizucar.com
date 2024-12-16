const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion MongoDB :"));
db.once("open", () => console.log("Connecté à MongoDB"));

// Schéma et modèle
const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    class: String,
    fueltype: String,
    gearbox: String,
    transmission: String,
    cylinders: Number,
    urlimage: String,
});
const Car = mongoose.model("voiture", carSchema);

// Middleware
app.use(cors({
    origin: "http://localhost", // Remplacez par l'origine de votre frontend
    methods: ["GET", "POST"], // Méthodes autorisées
    allowedHeaders: ["Content-Type", "Authorization"], // En-têtes autorisés
}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html')); // Envoie le fichier index.html
});


// Endpoint pour la recherche
app.get("/search", async (req, res) => {
    const brand = req.query.brand;
    console.log(`Recherche pour la marque : ${brand}`); // Debug
    try {
        const cars = await Car.find({ make: new RegExp(brand, "i") });

        if (cars.length === 0) {
            console.log("Aucun véhicule trouvé pour cette marque.");
        } else {
            console.log(`Résultats trouvés : ${cars.length} véhicules`);
        }

        // Renvoi uniquement les URLs des images sous forme de JSON
        const imageUrls = cars.map(car => car.urlimage);

        // Renvoi des images
        res.json(imageUrls);
    } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        res.status(500).send("Erreur lors de la recherche");
    }
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
