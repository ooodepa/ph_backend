import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLItems1707124617316 implements MigrationInterface {
  name = 'PHCTLItems1707124617316';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_Items" (
                "ph_code" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "ph_description" character varying(32) NOT NULL,
                "ph_itemCategoryCode" uuid,
                CONSTRAINT "PK_2bff3d871708abeec7be036397e" PRIMARY KEY ("ph_code")
            )
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlItems_description" ON "PH_CTL_Items" ("ph_description")
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_Items"
            ADD CONSTRAINT "FK_7e36978acdec131f4fc034ef231" FOREIGN KEY ("ph_itemCategoryCode") REFERENCES "PH_CTL_ItemCategories"("ph_code") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_Items" DROP CONSTRAINT "FK_7e36978acdec131f4fc034ef231"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."UNI_ctlItems_description"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_CTL_Items"
        `);
  }
}
