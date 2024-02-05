import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTBrandSEOPages1707120517046 implements MigrationInterface {
  name = 'PHLSTBrandSEOPages1707120517046';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_BrandSEOPages" (
                "ph_id" SERIAL NOT NULL,
                "ph_brandCode" uuid NOT NULL,
                "ph_SEOPageCode" uuid NOT NULL,
                CONSTRAINT "PK_71653f41619a1bd620bc499b4e1" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandSEOPages"
            ADD CONSTRAINT "FK_4d46c9f853d63792ef9b57c8a14" FOREIGN KEY ("ph_brandCode") REFERENCES "PH_CTL_Brands"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandSEOPages"
            ADD CONSTRAINT "FK_f24baa8635044ae6c60fd72ab6f" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandSEOPages" DROP CONSTRAINT "FK_f24baa8635044ae6c60fd72ab6f"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandSEOPages" DROP CONSTRAINT "FK_4d46c9f853d63792ef9b57c8a14"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_BrandSEOPages"
        `);
  }
}
