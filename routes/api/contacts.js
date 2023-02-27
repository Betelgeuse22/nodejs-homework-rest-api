const express = require("express");

const router = express.Router();

const cntrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", cntrl.listContacts);

router.get("/:contactId", isValidId, cntrl.getContactById);

router.post("/", validateBody(schemas.postSchema), cntrl.addContact);

router.delete("/:contactId", cntrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.putSchema),
  cntrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  cntrl.updateFavarite
);

module.exports = router;
