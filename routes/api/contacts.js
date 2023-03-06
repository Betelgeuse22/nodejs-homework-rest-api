const express = require("express");

const router = express.Router();

const cntrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, cntrl.listContacts);

router.get("/:contactId", authenticate, isValidId, cntrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.postSchema),
  cntrl.addContact
);

router.delete("/:contactId", authenticate, cntrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.putSchema),
  cntrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  cntrl.updateFavarite
);

module.exports = router;
