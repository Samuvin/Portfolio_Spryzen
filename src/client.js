import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: "9shnj95k",
	dataset: "production",
	apiVersion: "2023-05-03",
	useCdn: true,
	token:
		"skVYOsnO0s8pBkuZqwBzNrjG7uU4VXFeSdCq5R3BtYCXG3uk1vji02pdDGcqb9CZ22WU7l0YlXrNEh1gXpZzfac2zK963qSfKv8msvrNANJhRDrOvOApxlDeyfpbzaMrLujPPBrkxSDRsezteQ3kR34QYeRg7Kvke2fSeMI3PkSwwOzrxnM9",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
