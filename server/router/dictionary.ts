import { Router } from 'express';

import { Request, Response } from '../interface';
import CheckOxfordEntries from '../dictionary/dictionary';

const dictionaryRouter = Router();
// const lunchfunRouter = Router();

dictionaryRouter.get('/oxford/:word', (req: Request, res: Response) => {
  CheckOxfordEntries(req.params.word, res);
});

// lunchfunRouter.get('/pals', (req: Request, res: Response) => {
//   GetPals(res);
// });
// lunchfunRouter.post('/pal', (req: Request, res: Response) => {
//   AddPal(req.body.name, res);
// });
// lunchfunRouter.delete('/pal', (req: Request, res: Response) => {
//   DeletePal(req.query, res);
// });

// lunchfunRouter.get('/records', (req: Request, res: Response) => {
//   GetRecords(res);
// });
// lunchfunRouter.post('/record', (req: Request, res: Response) => {
//   AddRecord(req.body.payer, req.body.attendees, res);
// });
// lunchfunRouter.delete('/record', (req: Request, res: Response) => {
//   DeleteRecord(req.query._id, res);
// });

// lunchfunRouter.get('/stats/attendance', (req: Request, res: Response) => {
//   GetPalsAttendance(res);
// });

export default dictionaryRouter;