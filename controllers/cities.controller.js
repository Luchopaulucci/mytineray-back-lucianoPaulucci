import Cities from "../models/Citie.js";

const controller = {
  getCities: async (req, res) => {
    let queries = {};

    if (req.query.citie) {
      queries.citie = new RegExp(`^${req.query.citie}`, "i");
    }

    try {
      const cities = await Cities.find(queries).populate("itineraries").populate("created_By");
      if (cities.length > 0) {
        return res.status(200).json({
          succes: true,
          cities: cities,
          message: "Cities get successfully",
        });
      }

      return res.status(404).json({
        succes: false,
        message: "Cities not found",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Cities get failed",
      });
    }
  },

  getCitiesById: async (req, res) => {
    try {
      const oneCities = await Cities.findById(req.params.id).populate("itineraries").populate("created_By");

      if (oneCities) {
        return res.status(200).json({
          succes: true,
          message: "Citie search successfully",
          cities: oneCities,
        });
      }

      return res.status(404).json({
        succes: false,
        message: "Citie search is not found",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Citie get failed",
      });
    }
  },

  createCities: async (req, res) => {
    try {
      const newCitie = await Cities.create(req.body);

      return res.status(201).json({
        succes: true,
        message: "Cities created successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Cities creation failed",
      });
    }
  },

  updateCities: async (req, res) => {
    try {
      await Cities.updateOne({ _id: req.params.id }, req.body);

      return res.status(200).json({
        succes: true,
        message: "Citie update successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Citie update failed",
      });
    }
  },

  deleteCities: async (req, res) => {
    try {
      await Cities.deleteOne({ _id: req.params.id });

      return res.status(200).json({
        succes: true,
        message: "Citie delete successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Citie delete failed",
      });
    }
  },
};

export default controller;
