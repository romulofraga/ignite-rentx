import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { carsRouter } from "./cars.routes";
import { categoriesRouter } from "./categories.routes";
import { rentalRouter } from "./rental.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouter } from "./users.routes";

const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/specifications", specificationsRouter);
routes.use("/users", usersRouter);
routes.use("/cars", carsRouter);
routes.use("/rentals", rentalRouter);
routes.use(authenticateRouter);

export default routes;
