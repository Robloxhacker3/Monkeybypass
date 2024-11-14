module.exports = async (req, res) => {
  const { apifrxzn } = req.query;  // Retrieve the query parameter 'apifrxzn'

  // If 'apifrxzn' is not provided, return a simple error message
  if (!apifrxzn) {
    return res.status(400).send(`
      <html>
        <head>
          <title>No Link Provided</title>
        </head>
        <body>
          <h1>No Link Provided</h1>
          <p>Please provide a valid link to process the request.</p>
        </body>
      </html>
    `);
  }

  // Proceed to handle the link if it's provided
  if (apifrxzn.includes('spdmteam.com/key-system')) {
    // This is where you process the link
    let currentURL = apifrxzn;
    let pageTitle = "Just a moment...";  // Placeholder for actual page title checks

    // Define the API endpoint base URL
    const API = "https://spdmteam.com/api/keysystem?step=";

    // Example logic for checking URL step and redirecting accordingly
    if (currentURL.includes("https://spdmteam.com/key-system-1?hwid=")) {
      let newerURL = currentURL.replace('https://spdmteam.com/key-system-1?hwid=', 'https://spdmteam.com/api/keysystem?hwid=')
                               .replace('&zone=Europe/Rome', '&zone=Europe/Rome&advertiser=lootlabs&OS=ios');
      return res.status(200).json({ redirectTo: newerURL });
    } else if (currentURL.includes("https://spdmteam.com/key-system-2?hwid=")) {
      return res.status(200).json({ redirectTo: "https://loot-link.com/s?mYit" });
    } else {
      return res.status(400).json({ error: "Unsupported step or invalid URL" });
    }
  } else {
    return res.status(400).json({ error: "Invalid link format" });
  }
};
