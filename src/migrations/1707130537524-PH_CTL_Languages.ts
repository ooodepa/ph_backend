import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLLanguages1707130537524 implements MigrationInterface {
    name = 'PHCTLLanguages1707130537524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_Languages" (
                "ph_code" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_description" varchar(32) NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "PH_CTL_Languages"
        `);
    }

}
