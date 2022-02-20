let Express = require("express");
//const { restart } = require("nodemon");
let router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
// Import the Journal Model
const { PetModel } = require("../models");
const { route } = require("./usercontroller");
const useDate = require("usedate");


/*
============
Journal Create
===========
*/
router.post("/create", validateJWT, async (req, res) => {
    const { name, breed, age, gender, height, color, image, house_trained, coat_length } = req.body.pet;
    const { id } = req.user;
    const petEntry = {
        name,
        breed,
        age,
        gender,
        height,
        color,
        posted: useDate(),
        house_trained,
        image,
        coat_length
    };
    
    try {
        const newPet = await PetModel.create(petEntry);
        res.status(200).json(newPet);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// find all pets

router.get("/", validateJWT, async (req, res) => {
    const {id} = req.user;
    try {
        const entries = await PetModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});


router.get("/mine", validateJWT, async (req, res) => {
    const { id } = req.user;
    try {
        const petJournals = await PetModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(petJournals);
    } catch (err) {
    res.status(500).json({ error: err });
    }
});

router.get("/:pet", async (req, res)=> {
    const {name} = req.params;
    try {
        const results = await PetModel.findAll({
            where: {name: name}
        });
        res.status(200).json(results);
    }catch (err) {
        res.status(500).json({error: err});
    }
});


router.put("/update/:entryId", validateJWT, async ( req, res) => {
    const { name, breed, age, gender, height, color, posted, house_trained, Coat_length } = req.body.journal;
    const petId = req.params.entryId;
    const userId = req.user.id;

    const query = {
        where: {
            id: journalId,
            owner: userId
        }
    };

    const updatedPetJournal ={
        id,
        name,
        breed,
        age,
        gender,
        height,
        color,
        posted,
        house_trained,
        Coat_length
    };

    try {
        const update = await PetModel.update(updatedPetJournal, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json ({error: err});
    }
});

router.delete("/delete/:id", validateJWT, async ( req, res) => {
    const ownerId= req.user.id;
    const petId = req.params.id;

    try{
        const query = {
            where: {
                id:  petId,
                owner: ownerId
            }
        };

        await PetModel.destroy(query);
        res.status(200).json({message: " Journal Entry Removed"});
    } catch (err) {
        res.status(500).json({error: err});
    }
});



module.exports = router;