import { Request, Response } from 'express';

export class IncidentController {
  public static getIncidents = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'El historial de novedades todavía no está implementado.'
    });
  };

  public static createIncident = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'El reporte de novedades todavía no está implementado.'
    });
  };

  public static updateIncident = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({
      success: false,
      message: `La actualización parcial de la novedad ${id} todavía no está implementada.`
    });
  };
}
