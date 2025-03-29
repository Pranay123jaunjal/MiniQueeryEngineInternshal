const queryParser = (naturalQuery) => {
    const lowerQuery = naturalQuery.toLowerCase();
  
    if (lowerQuery.includes("all users") || lowerQuery.includes("list users")) {
      return { sql: "SELECT * FROM users;", type: "fetch" };
    }
    if (lowerQuery.includes("user count")) {
      return { sql: "SELECT COUNT(*) FROM users;", type: "count" };
    }
    if (lowerQuery.includes("youngest user")) {
      return { sql: "SELECT * FROM users ORDER BY age ASC LIMIT 1;", type: "fetch" };
    }
  
    return { sql: null, type: "unknown" };
  };
  
  module.exports = { queryParser };
  