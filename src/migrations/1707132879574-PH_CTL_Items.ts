import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLItems1707132879574 implements MigrationInterface {
    name = 'PHCTLItems1707132879574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_Items" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_itemCategoryCode" varchar
            )
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlItems_description" ON "PH_CTL_Items" ("ph_description")
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlItems_description"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_CTL_Items" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_itemCategoryCode" varchar,
                CONSTRAINT "FK_7e36978acdec131f4fc034ef231" FOREIGN KEY ("ph_itemCategoryCode") REFERENCES "PH_CTL_ItemCategories" ("ph_code") ON DELETE
                SET NULL ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_CTL_Items"(
                    "ph_code",
                    "ph_description",
                    "ph_itemCategoryCode"
                )
            SELECT "ph_code",
                "ph_description",
                "ph_itemCategoryCode"
            FROM "PH_CTL_Items"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_CTL_Items"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_CTL_Items"
                RENAME TO "PH_CTL_Items"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlItems_description" ON "PH_CTL_Items" ("ph_description")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "UNI_ctlItems_description"
        `);
        await queryRunner.query(`
            ALTER TABLE "PH_CTL_Items"
                RENAME TO "temporary_PH_CTL_Items"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_Items" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_itemCategoryCode" varchar
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_CTL_Items"(
                    "ph_code",
                    "ph_description",
                    "ph_itemCategoryCode"
                )
            SELECT "ph_code",
                "ph_description",
                "ph_itemCategoryCode"
            FROM "temporary_PH_CTL_Items"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_CTL_Items"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlItems_description" ON "PH_CTL_Items" ("ph_description")
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlItems_description"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_CTL_Items"
        `);
    }

}
