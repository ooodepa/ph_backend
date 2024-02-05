import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTBrandGalery1707120321569 implements MigrationInterface {
  name = 'PHLSTBrandGalery1707120321569';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_BrandGalery" (
                "ph_id" SERIAL NOT NULL,
                "ph_brandCode" uuid NOT NULL,
                "ph_photoUrl" character varying(2000) NOT NULL,
                CONSTRAINT "PK_85f1cf1a9e97d69780c3f60e68f" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandGalery"
            ADD CONSTRAINT "FK_359e22a2902c9bb1f34467ba569" FOREIGN KEY ("ph_brandCode") REFERENCES "PH_CTL_Brands"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandGalery" DROP CONSTRAINT "FK_359e22a2902c9bb1f34467ba569"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_BrandGalery"
        `);
  }
}
