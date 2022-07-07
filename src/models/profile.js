const db = require('../helpers/db');

exports.getAllProfile = (cb) => {
    db.query('SELECT * FROM profile ORDER BY id ASC', (err, res) => {
        cb(res.rows);
    });
};

exports.getProfileById = (id, cb) => {
    db.query('SELECT * FROM profile WHERE id=$1', [id], (err, res) => {
        cb(err, res);
    });
};

exports.createProfile = (data, cb) => {
    const query = 'INSERT INTO profile(fullname, phonenumber, balance, picture, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *';
    const value = [data.fullname,data.phonenumber, data.balance, data.picture, data.user_id ];
    db.query(query, value, (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(err, res.rows);
        }
    });
};

exports.editProfile = (id, data, cb) => {
    const query = 'UPDATE profile SET fullname=$1, phone_number=$2, balance=$3, picture=$4, user_id=$5 WHERE id=$6 RETURNING *';
    const value = [data.fullname, data.phone_number, data.balance, data.picture, data.user_id, id];
    db.query(query, value, (err, res) => {
        if (res) {
            console.log(res.rows);
            cb(err, res.rows);
        } else {
            console.log(err);
            cb(err);
        }
    });
};

exports.deleteProfile = (id, cb) => {
    const query = 'DELETE FROM profile WHERE id=$1 RETURNING *';
    const value = [id];
    db.query(query, value, (err, res) => {
        cb(res.rows);
    });
};