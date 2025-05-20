import { Router } from "express";
import {
    registerTempleAdmin,
    loginTempleAdmin,
    logoutTempleAdmin,
    refreshAccessTempleAdminToken,
    changeTempleAdminPassword,
    getCurrentTempleAdmin,
    getAllTempleAdmins,
} from "../controllers/templeAdmin.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = Router();


router.route("/register-Temple-Admin").post(verifyJWT, authorizeRoles("superAdmin"), registerTempleAdmin);
router.route("/login-Temple-Admin").post(loginTempleAdmin);
router.route("/logout-Temple-Admin").post(verifyJWT, authorizeRoles("templeAdmin"), logoutTempleAdmin);
router.route("/refresh-token").post(refreshAccessTempleAdminToken);
router.route("/change-password").post(verifyJWT, authorizeRoles("templeAdmin"), changeTempleAdminPassword);
router.route("/get-current-Temple-Admin").get(verifyJWT, authorizeRoles("templeAdmin"), getCurrentTempleAdmin);
router.route("/get-all-Temple-Admins").get(verifyJWT, authorizeRoles("superAdmin"), getAllTempleAdmins);

export default router;