// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const rsvps = sequelizeClient.define('rsvps', {
        accepted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    rsvps.associate = function (models) {
        models.rsvps.belongsTo(models.users);

        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return rsvps;
};
