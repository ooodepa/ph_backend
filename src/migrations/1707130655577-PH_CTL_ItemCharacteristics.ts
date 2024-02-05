import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLItemCharacteristics1707130655577 implements MigrationInterface {
    name = 'PHCTLItemCharacteristics1707130655577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_ItemCharacteristics" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "PH_CTL_ItemCharacteristics"
        `);
    }

}
