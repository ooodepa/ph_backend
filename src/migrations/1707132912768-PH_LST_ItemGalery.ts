import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTItemGalery1707132912768 implements MigrationInterface {
    name = 'PHLSTItemGalery1707132912768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_ItemGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL,
                CONSTRAINT "FK_3f83b80c335a2e7d7d014351bc8" FOREIGN KEY ("ph_itemCode") REFERENCES "PH_CTL_Items" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_ItemGalery"("ph_id", "ph_itemCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_itemCode",
                "ph_photoUrl"
            FROM "PH_LST_ItemGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemGalery"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_ItemGalery"
                RENAME TO "PH_LST_ItemGalery"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemGalery"
                RENAME TO "temporary_PH_LST_ItemGalery"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_ItemGalery"("ph_id", "ph_itemCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_itemCode",
                "ph_photoUrl"
            FROM "temporary_PH_LST_ItemGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_ItemGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemGalery"
        `);
    }

}
