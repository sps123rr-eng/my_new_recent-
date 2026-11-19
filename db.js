const Sequelize = require('sequelize')

const db = new Sequelize(
    process.env.DB_NAME || 'shopdb',
    process.env.DB_USER || 'nitin',
    process.env.DB_PASSWORD || 'system',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        pool: {
            min: 0,
            max: 2
        }
    }
)

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Sample Name'
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

const Cart = db.define('cart', {
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: -1
    },
    pid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: -1
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
})

db.sync()
    .then(() => console.log('database has been synced'))
    .catch((error) => console.log('error syncing the database:', error))

module.exports = {
    User,
    Product,
    Cart
}