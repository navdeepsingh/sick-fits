import { config, createSchema } from "@keystone-next/keystone/schema";
import { Role } from "./schemas/Role";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { CartItem } from "./schemas/CartItem";
import { ProductImage } from "./schemas/ProductImage";
import { Product } from "./schemas/Product";
import { User } from "./schemas/User";
import "dotenv/config";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    async onConnect(keystone) {
      console.log("Connected to the database!");
      if (process.argv.includes("--seed-data")) {
        await insertSeedData(keystone);
      }
    },
  },
  lists: createSchema({
    // Schema items go in here
    User,
    Product,
    ProductImage,
    CartItem,
    OrderItem,
    Order,
    Role,
  }),
});
