require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const app = express();
const supabase = createClient(process.env.DB_URL, process.env.PUBLIC_KEY);
const PORT = process.env.PORT || 5000;

const getData = async () => {
  // const { data, error } = await supabase.from("Lesson").select();
  console.log(data);
};
app.get("/", (req, res) => {
  res.send("Server active");
});

app.listen(PORT, () => console.log("Server listening on port 5000"));
