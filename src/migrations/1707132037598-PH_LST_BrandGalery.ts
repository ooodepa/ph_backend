import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTBrandGalery1707132037598 implements MigrationInterface {
    name = 'PHLSTBrandGalery1707132037598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_BrandGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_brandCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_BrandGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_brandCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL,
                CONSTRAINT "FK_359e22a2902c9bb1f34467ba569" FOREIGN KEY ("ph_brandCode") REFERENCES "PH_CTL_Brands" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_BrandGalery"("ph_id", "ph_brandCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_brandCode",
                "ph_photoUrl"
            FROM "PH_LST_BrandGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_BrandGalery"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_BrandGalery"
                RENAME TO "PH_LST_BrandGalery"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandGalery"
                RENAME TO "temporary_PH_LST_BrandGalery"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_BrandGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_brandCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_BrandGalery"("ph_id", "ph_brandCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_brandCode",
                "ph_photoUrl"
            FROM "temporary_PH_LST_BrandGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_BrandGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_BrandGalery"
        `);
    }

}
