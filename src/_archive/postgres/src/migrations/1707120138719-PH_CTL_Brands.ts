import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLBrands1707120138719 implements MigrationInterface {
  name = 'PHCTLBrands1707120138719';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_Brands" (
                "ph_code" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "ph_description" character varying(32) NOT NULL,
                CONSTRAINT "PK_a907b6ec15f47d1ea817e6fc3b8" PRIMARY KEY ("ph_code")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "PH_CTL_Brands"
        `);
  }
}
