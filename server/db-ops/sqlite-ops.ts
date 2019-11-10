import { join } from 'path';
import { Database, OPEN_READONLY, OPEN_READWRITE, verbose } from 'sqlite3';

const DB = join(__dirname, '/info.xyz');

let sqlite3 = verbose();
let db_r: Database = undefined;
let db_rw: Database = undefined;

function SqliteGet(sql: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      if (!db_r) {
        db_r = new sqlite3.Database(DB, OPEN_READONLY);
      }
      db_r.get(sql, (err, row) => {
        if (err) {
          return reject(err);
        }
        resolve(row);
      });
    } catch (e) {
      reject(e);
    }
  });
}

function SqliteAll(sql: string): Promise<any[]> {
  return new Promise(async (resolve, reject) => {
    try {
      if (!db_r) {
        db_r = new sqlite3.Database(DB, OPEN_READONLY);
      }
      db_r.all(sql, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    } catch (e) {
      reject(e);
    }
  });
}

function SqliteRun(sql: string): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      if (!db_rw) {
        db_rw = new sqlite3.Database(DB, OPEN_READWRITE);
      }
      db_rw.run(sql, [], err => {
        if (err) {
          return reject(err);
        }
        resolve(true);
      });
    } catch (e) {
      reject(e);
    }
  });
}

function SqlitePrepareRun(sql: string, params: []): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      if (!db_rw) {
        db_rw = new sqlite3.Database(DB, OPEN_READWRITE);
      }
      db_rw.serialize(() => {
        const stmt = db_rw.prepare(sql, err => {
          if (err) {
            return reject(err);
          }
        });
        for (let i = 0; i < params.length; i++) {
          stmt.run(params[i]);
        }
        stmt.finalize(err => {
          if (err) {
            return reject(err);
          }
          resolve(true);
        });
      });
    } catch (e) {
      reject(e);
    }
  });
}

export { SqliteAll, SqliteGet, SqlitePrepareRun, SqliteRun };
