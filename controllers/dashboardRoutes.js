const router = require('express').Router();
const { withGuard } = require('../utils/authGuard');

// GET all saved letters for dashboard
router.get('/', withGuard, async (req, res) => {});

// GET all saved numbers for dashboard
router.get('/', withGuard, async (req, res) => {});

// GET all saved shapes for dashboard
router.get('/', withGuard, async (req, res) => {});

module.exports = router;
