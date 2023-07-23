import { Response } from 'express';

const identifyView = {
  sendIdentifyResponse(res: Response, primaryContactId: number, emails: string[], phoneNumbers: string[], secondaryContactIds: number[]) {
    res.json({
      contact: {
        primaryContatctId: primaryContactId,
        emails: [emails[0], ...emails.slice(1)],
        phoneNumbers: [phoneNumbers[0], ...phoneNumbers.slice(1)],
        secondaryContactIds,
      },
    });
  },
};

export default identifyView;
