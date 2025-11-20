import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const router = express.Router();

// Login with PIN
router.post(
  '/login',
  [
    body('pin').isString().notEmpty(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { pin } = req.body;

      // Get PIN hash from environment
      const pinHash = process.env.PIN_HASH;
      if (!pinHash) {
        console.error('PIN_HASH not configured in environment');
        return res.status(500).json({ error: 'Server configuration error' });
      }

      // Hash the provided PIN
      const providedPinHash = crypto
        .createHash('sha256')
        .update(String(pin))
        .digest('hex');

      // Debug logs (temporanei)
      console.log('PIN ricevuto:', pin);
      console.log('PIN type:', typeof pin);
      console.log('Hash calcolato:', providedPinHash);
      console.log('Hash atteso:', pinHash);
      console.log('Match:', providedPinHash === pinHash);

      // Compare hashes (constant-time comparison)
      if (providedPinHash !== pinHash) {
        return res.status(401).json({ error: 'Invalid PIN' });
      }

      // Generate JWT
      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        return res.status(500).json({ error: 'JWT secret not configured' });
      }

      const token = jwt.sign({ authenticated: true }, jwtSecret, {
        expiresIn: '7d',
      });

      res.json({
        token,
        authenticated: true,
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

export default router;

