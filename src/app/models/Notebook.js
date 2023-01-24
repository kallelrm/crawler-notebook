import Sequelize, { Model } from "sequelize";

class Notebook extends Model {
  static init(sequelize) {
    super.init(
      {
        filters: Sequelize.ARRAY(Sequelize.STRING),
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
