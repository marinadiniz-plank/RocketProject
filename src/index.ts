import express from "express";
import rocketApi from "../routes/api/rocketApi";
import crewApi from "../routes/api/crewApi";
import launchApi from "../routes/api/launchApi";
import crewmanApi from "../routes/api/crewmanApi";


const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json());
app.use("/rockets", rocketApi);
app.use("/crews", crewApi);
app.use("/launchs", launchApi);
app.use("/crewmans", crewmanApi);



app.listen(PORT, () => console.log(`server running at port ${PORT}`));
