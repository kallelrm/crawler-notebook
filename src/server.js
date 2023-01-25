import app from "./app";

app.listen(process.env.PORT || 3333, () => {
  console.log(JSON.stringify(process.env));
  console.log(`Server is running on port${process.env.PORT}`);
});
