``
import express from "express";
import {AddPackage, PackageList, removePackage, UpdatePackage} from "../controller/Package/PackageController.js";

const PackagesRoutes = express.Router()

PackagesRoutes.post('/add',AddPackage)

PackagesRoutes.post('/list',PackageList)

PackagesRoutes.put('/update',UpdatePackage)

PackagesRoutes.delete('/delete',removePackage)

export default PackagesRoutes

