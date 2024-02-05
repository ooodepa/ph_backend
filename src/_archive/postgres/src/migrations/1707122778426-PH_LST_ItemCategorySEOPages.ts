import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTItemCategorySEOPages1707122778426
  implements MigrationInterface
{
  name = 'PHLSTItemCategorySEOPages1707122778426';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCategorySEOPages" (
                "ph_id" SERIAL NOT NULL,
                "ph_itemCategoryCode" uuid NOT NULL,
                "ph_SEOPageCode" uuid NOT NULL,
                CONSTRAINT "PK_19d4a25ddb6674253aa38de7543" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategorySEOPages"
            ADD CONSTRAINT "FK_e6b56fa5255c692e20148f43b14" FOREIGN KEY ("ph_itemCategoryCode") REFERENCES "PH_CTL_ItemCategories"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategorySEOPages"
            ADD CONSTRAINT "FK_b8845def81d808f0b9697e367c9" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategorySEOPages" DROP CONSTRAINT "FK_b8845def81d808f0b9697e367c9"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategorySEOPages" DROP CONSTRAINT "FK_e6b56fa5255c692e20148f43b14"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCategorySEOPages"
        `);
  }
}
