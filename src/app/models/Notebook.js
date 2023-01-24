import Sequelize, { Model } from "sequelize";
import { isAfter, subHours } from "date-fns";

class Notebook extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        filters: Sequelize.ARRAY(Sequelize.JSON),
        notebooks: Sequelize.JSON,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Notebook;
