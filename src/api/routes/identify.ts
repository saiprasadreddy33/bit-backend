import express, { Request, Response, NextFunction } from 'express';
import identifyController from '../controllers/identifyController';
import identifyValidator from '../validators/identifyValidator';

const router = express.Router();

router.post('/identify', identifyValidator.validateIdentifyRequest, identifyController.identify);

export default router;
