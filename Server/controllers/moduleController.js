const Module = require('../models/Module');
const Course = require('../models/Course');
const Quiz = require('../models/Quiz');

// Get module by ID with populated course and quizzes
exports.getModuleById = async (req, res) => {
    try {
        const moduleId = req.params.id;

        // Find the module by ID and populate course and quizzes
        const module = await Module.findById(moduleId)
            .populate('course')
            .populate('quizzes');
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }

        res.status(200).json(module);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all modules
exports.getAllModules = async (req, res) => {
    try {
        const modules = await Module.find()

        res.status(200).json(modules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new module
exports.createModule = async (req, res) => {
    try {
        const { title, content, course, order, videoUrl, resources } = req.body;

        const newModule = new Module({
            title,
            content,
            course,
            order,
            videoUrl,
            resources
        });

        await newModule.save();
        res.status(201).json({message:"Module Created"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a module by ID
exports.updateModule = async (req, res) => {
    try {
        const { title, content, course, order, videoUrl, resources, quizzes } = req.body;

        const updatedModule = await Module.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                course,
                order,
                videoUrl,
                resources,
                quizzes
            },
            { new: true }
        )

        if (!updatedModule) {
            return res.status(404).json({ message: 'Module not found' });
        }

        res.status(200).json(updatedModule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a module by ID
exports.deleteModule = async (req, res) => {
    try {
        const deletedModule = await Module.findByIdAndDelete(req.params.id);
        if (!deletedModule) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.status(200).json({ message: 'Module deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};