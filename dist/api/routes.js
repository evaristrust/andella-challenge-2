'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parcels = require('./controllers/parcels.controller');

var _parcels2 = _interopRequireDefault(_parcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');


var router = express.Router();

router.get('/v1/parcels', _parcels2.default.showParcels);
router.get('/v1/parcels/:parcel_id', _parcels2.default.parcelDetail);
router.get('/v1/users/:user_id/parcels', _parcels2.default.userParcels);

router.post('/v1/parcels/', _parcels2.default.newParcel);
router.put('/v1/parcels/:parcel_id/cancel', _parcels2.default.cancelParcel);
exports.default = router;