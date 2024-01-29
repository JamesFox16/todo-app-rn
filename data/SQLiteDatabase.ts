import * as SQLite from 'expo-sqlite';

class _SQLiteDatabase {
  db: SQLite.SQLiteDatabase;
  constructor() {
    this.db = SQLite.openDatabase('todoAppRN.db');
    this.db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tasks (\
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            text TEXT,\
            completed INT\
        )', [], () => {
          console.log('Database Opened');
        }
      );
    });
  }
}

class SQLiteDatabase {
  static instance: _SQLiteDatabase;

  constructor() {
    throw new Error('Use SQLiteDatabase.getInstance()');
  }

  static init() {
    SQLiteDatabase.instance = new _SQLiteDatabase();
  }

  static getInstance() {
    if (!SQLiteDatabase.instance) {
      SQLiteDatabase.init();
    }
    return SQLiteDatabase.instance.db;
  }
}

export default SQLiteDatabase;