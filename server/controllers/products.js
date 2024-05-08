exports.getTopNProducts = async (req, res) => {
  try {
    const { companyname, categoryname } = req.params;
    const { top, minPrice, maxPrice } = req.query;

    // Ensure all required parameters are present
    if (!companyname || !categoryname || !top || !minPrice || !maxPrice) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Convert top value to a number
    const n = parseInt(top);

    // You can now use companyname, categoryname, n, minPrice, and maxPrice in your logic

    // Send a response or perform other operations
    res.send("Parameters extracted successfully");
  } catch (error) {}
};
