import * as path from 'path';
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DB_NAME || './database.sqlite',
  entities: [path.join('dist', '**', '*.entity.js')],
  migrations: [path.join('dist', 'migrations', '*.js')],
  migrationsTableName: 'PH_migrations',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
