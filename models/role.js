module.exports = (sequelize, type) => {
  return sequelize.define(
    'Role',
    {
      RoleID: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Name: {
        type: type.STRING(50),
        allowNull: false,
      },
      Description: {
        type: type.TEXT,
      },
      CreatedOn: {
        type: type.DATE,
      },
      LastUpdatedOn: {
        type: type.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
};
