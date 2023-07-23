import { Request, Response, NextFunction } from 'express';
import mysql from 'mysql2/promise';
import identifyView from '../views/identifyView';

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'Watto-s',
  password: 'adminroot',
  database: 'endpoint_bitespeed',
  connectionLimit: 10,
});

const identifyController = {
  async identify(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, phoneNumber } = req.body;

      let primaryContactId;
      let emails: string[] = [];
      let phoneNumbers: string[] = [];
      let secondaryContactIds: number[] = [];


      identifyView.sendIdentifyResponse(res, primaryContactId, emails, phoneNumbers, secondaryContactIds);
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ error: 'Internal server error.' });
      next(error);
    }
  },
};

export default identifyController;
