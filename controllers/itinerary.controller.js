import Itineraries from "../models/Itinerary.js";

const controller = {
  getItinerary: async (req, res) => {
    let queries = {};

    if (req.query.corresponds_To) {
      queries.corresponds_To = req.query.corresponds_To;
    }

    try {
      const itineraries = await Itineraries.find(queries).populate("created_To").populate("corresponds_To", "citie");
      if (itineraries.length > 0) {
        return res.status(200).json({
          succes: true,
          itineraries: itineraries,
          message: "Itineraries get successfully",
        });
      }

      return res.status(404).json({
        succes: false,
        message: "Itineraries not found",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Itineraries get failed",
      });
    }
  },

  getItineraryById: async (req, res) => {
    try {
      const oneItinerary = await Itineraries.findById(req.params.id).populate("created_To") ;

      if (oneItinerary) {
        return res.status(200).json({
          succes: true,
          message: "Itineraries search successfully",
          itineraries: oneItinerary,
        });
      }

      return res.status(404).json({
        succes: true,
        message: "Itineraries search is not found",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Itineraries creation failed",
      });
    }
  },

  createItinerary: async (req, res) => {
    try {
      const newItinerary = await Itineraries.create(req.body);

      return res.status(201).json({
        succes: true,
        message: "Itineraries created successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Itineraries creation failed",
      });
    }
  },

  updateItinerary: async (req, res) => {
    try {
      await Itineraries.updateOne({ _id: req.params.id }, req.body);

      return res.status(200).json({
        succes: true,
        message: "Itineraries update successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Itineraries update failed",
      });
    }
  },

  deleteItinerary: async (req, res) => {
    try {
      await Itineraries.deleteOne({ _id: req.params.id });

      return res.status(200).json({
        succes: true,
        message: "Itineraries delete successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        succes: false,
        message: "Itineraries delete failed",
      });
    }
  },
};

export default controller;