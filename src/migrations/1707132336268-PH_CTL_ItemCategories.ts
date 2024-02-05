import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLItemCategories1707132336268 implements MigrationInterface {
    name = 'PHCTLItemCategories1707132336268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_ItemCategories" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_parentItemCategoryCode" varchar,
                "ph_brandCode" varchar
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_CTL_ItemCategories" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_parentItemCategoryCode" varchar,
                "ph_brandCode" varchar,
                CONSTRAINT "FK_727e5012d9454ba372f4756e858" FOREIGN KEY ("ph_parentItemCategoryCode") REFERENCES "PH_CTL_ItemCategories" ("ph_code") ON DELETE
                SET NULL ON UPDATE NO ACTION,
                    CONSTRAINT "FK_6088eafb92c1c850b263b9f481b" FOREIGN KEY ("ph_brandCode") REFERENCES "PH_CTL_Brands" ("ph_code") ON DELETE
                SET NULL ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_CTL_ItemCategories"(
                    "ph_code",
                    "ph_description",
                    "ph_parentItemCategoryCode",
                    "ph_brandCode"
                )
            SELECT "ph_code",
                "ph_description",
                "ph_parentItemCategoryCode",
                "ph_brandCode"
            FROM "PH_CTL_ItemCategories"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_CTL_ItemCategories"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_CTL_ItemCategories"
                RENAME TO "PH_CTL_ItemCategories"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_CTL_ItemCategories"
                RENAME TO "temporary_PH_CTL_ItemCategories"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_ItemCategories" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_parentItemCategoryCode" varchar,
                "ph_brandCode" varchar
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_CTL_ItemCategories"(
                    "ph_code",
                    "ph_description",
                    "ph_parentItemCategoryCode",
                    "ph_brandCode"
                )
            SELECT "ph_code",
                "ph_description",
                "ph_parentItemCategoryCode",
                "ph_brandCode"
            FROM "temporary_PH_CTL_ItemCategories"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_CTL_ItemCategories"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_CTL_ItemCategories"
        `);
    }

}
