// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Ruts = require('../models/rutsSchema');

// CRUD operations for Ruts
// Create Controller 
const createRuts = async (req, res) => { 
    const { check } = req.body;
    try {
        const ruts = await Ruts.create({ check }) 
        await ruts.save();
        res.status(201).json(ruts);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateRuts = async (req, res) => { 
    const _id=req.params.id;
    const { check } = req.body;
    try {
        const ruts = await Ruts.findByIdAndUpdate( _id, { check },{new:true}) 
        if (!ruts) {
            return res.status(404).send('ruts not found');
        }
        await ruts.save();
        res.status(201).json(ruts);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteRuts = async (req, res) => { 
    const _id=req.params.id;
    try {
        const ruts = await Ruts.findById(_id)
        if (!ruts) {
            return res.status(404).send('ruts not found');
        }
        await Ruts.deleteOne({_id: _id})
        await ruts.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getRuts = async (req, res) => { 
    const _id=req.params.id;
    try {
        const ruts = await Ruts.findById(_id)
        if (!ruts) {
            return res.status(404).send('ruts not found');
        }
        res.status(201).json(ruts);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllRuts = async (req, res) => { 
    try {
        const ruts = await Ruts.find({})
        if (!ruts) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(ruts);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createRuts,
    updateRuts,
    deleteRuts,
    getRuts,
    getAllRuts
}