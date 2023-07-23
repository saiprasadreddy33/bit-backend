import { Request, Response, NextFunction } from 'express';

const identifyValidator = {
  validateIdentifyRequest(req: Request, res: Response, next: NextFunction) {
    const { email, phoneNumber } = req.body;

    if (!email && !phoneNumber) {
      return res.status(400).json({ error: 'Please provide either email or phoneNumber.' });
    }


    next();
  },
};

export default identifyValidator;
