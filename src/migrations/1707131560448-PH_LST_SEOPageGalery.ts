import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTSEOPageGalery1707131560448 implements MigrationInterface {
    name = 'PHLSTSEOPageGalery1707131560448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_SEOPageGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_SEOPageGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL,
                CONSTRAINT "FK_9c287ec219ba8efb67d89ed9617" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_SEOPageGalery"("ph_id", "ph_SEOPageCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_SEOPageCode",
                "ph_photoUrl"
            FROM "PH_LST_SEOPageGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_SEOPageGalery"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_SEOPageGalery"
                RENAME TO "PH_LST_SEOPageGalery"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_SEOPageGalery"
                RENAME TO "temporary_PH_LST_SEOPageGalery"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_SEOPageGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_SEOPageGalery"("ph_id", "ph_SEOPageCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_SEOPageCode",
                "ph_photoUrl"
            FROM "temporary_PH_LST_SEOPageGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_SEOPageGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_SEOPageGalery"
        `);
    }

}
