const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();

router.get('/v1/parcels', ParcelsController.showParcels);
router.get('/v1/parcels/:parcel_id', ParcelsController.parcelDetail);
router.get('/v1/users/:user_id/parcels', ParcelsController.userParcels);

router.post('/v1/parcels/', ParcelsController.newParcel);
router.put('/v1/parcels/:parcel_id/cancel', ParcelsController.cancelParcel);
export default router;