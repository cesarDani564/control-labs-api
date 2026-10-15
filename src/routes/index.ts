import { Router } from 'express';
import loanRoutes from './loans.routes';
import userRoutes from './users.routes';
import environmentRoutes from './environments.routes';
import equipmentRoutes from './equipments.routes';
import incidentRoutes from './incidents.routes';
import dashboardRoutes from './dashboard.routes';

const router = Router();
router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/environments', environmentRoutes);
router.use('/equipments', equipmentRoutes);
router.use('/incidents', incidentRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;
