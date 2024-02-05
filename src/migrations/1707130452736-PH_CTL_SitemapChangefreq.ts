import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLSitemapChangefreq1707130452736 implements MigrationInterface {
    name = 'PHCTLSitemapChangefreq1707130452736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_SitemapChangefreq" (
                "ph_code" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_value" varchar(16) NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "PH_CTL_SitemapChangefreq"
        `);
    }

}
