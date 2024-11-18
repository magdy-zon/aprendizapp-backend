import { startSession } from 'mongoose';
/**
 * Import enums ...
 * Import mongoose models ...
 */
// import { ... } from "@capa/core";
// import { ... } from "../models";
async function up() {
  const session = await startSession();
  session.startTransaction();

  // Start coding your migration here
  await session.commitTransaction();
  session.endSession();
}
async function down() {}
export = { up, down };
