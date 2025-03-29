const { db } = require("../database/initDb.js");
const { queryParser } = require("../utils/QueryParse");

const handleQuery = (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const { sql, type } = queryParser(query);
  if (!sql) {
    return res.status(400).json({ error: "Invalid or unsupported query" });
  }

  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });

    res.json({ query, sql, type, data: rows });
  });
};

const explainQuery = (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const { sql } = queryParser(query);
  if (!sql) {
    return res.status(400).json({ error: "Invalid query" });
  }

  res.json({ query, explanation: `This query translates to: ${sql}` });
};

const validateQuery = (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const { sql } = queryParser(query);
  res.json({ query, valid: sql !== null });
};

module.exports = { handleQuery, explainQuery, validateQuery };
