import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const initialize = async () => {
    console.info("Initializing server");
    await AppDataSource.initialize();
    console.info("Database initialized");
    await preLoadCategories();
    await preLoadProducts();
    app.listen(PORT, () => {
        console.info(`Server running on port ${PORT}`);
    });
}

initialize();

