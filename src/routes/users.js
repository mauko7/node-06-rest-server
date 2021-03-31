const {Router} = require("express");
const {getAllUsers,
    createUser,
    updateUser,
    updatePatchUser,
    deleteUser
} = require("../controller/users")

const router = Router();

router.get("/",getAllUsers);
router.post("/",createUser);
router.put("/:id",updateUser);
router.patch("/:id",updatePatchUser);
router.delete("/:id",deleteUser);


module.exports=router;
