import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLItemCategoryGalery1707121525553
  implements MigrationInterface
{
  name = 'PHCTLItemCategoryGalery1707121525553';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCategoryGalery" (
                "ph_id" SERIAL NOT NULL,
                "ph_itemCategoryCode" uuid NOT NULL,
                "ph_photoUrl" character varying(2000) NOT NULL,
                CONSTRAINT "PK_922d0cd09b0ffd8d2677398fec6" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategoryGalery"
            ADD CONSTRAINT "FK_f876af64e1091151a89319f6a39" FOREIGN KEY ("ph_itemCategoryCode") REFERENCES "PH_CTL_ItemCategories"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategoryGalery" DROP CONSTRAINT "FK_f876af64e1091151a89319f6a39"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCategoryGalery"
        `);
  }
}
