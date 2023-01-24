import * as Yup from "yup";
import {
  startOfHour, parseISO, isBefore, format, subHours,
} from "date-fns";
import pt from "date-fns/locale";

import User from "../models/User";

import Appointment from "../models/Appointment";

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ["date"],
      attributes: ["id", "date", "past", "cancelable"],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: "provider",
          attributes: ["id", "name"],
          include: [
            {
              as: "avatar",
              attributes: ["id", "path", "url"],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {}
}

export default new AppointmentController();
