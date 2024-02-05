import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLItemCategories1707121189576 implements MigrationInterface {
  name = 'PHCTLItemCategories1707121189576';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_ItemCategories" (
                "ph_code" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "ph_description" character varying(32) NOT NULL,
                "ph_parentItemCategoryCode" uuid NULL,
                "ph_brandCode" uuid NULL,
                CONSTRAINT "PK_04e66e19c77e219f314e7791400" PRIMARY KEY ("ph_code")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_ItemCategories"
            ADD CONSTRAINT "FK_727e5012d9454ba372f4756e858" FOREIGN KEY ("ph_parentItemCategoryCode") REFERENCES "PH_CTL_ItemCategories"("ph_code") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_ItemCategories"
            ADD CONSTRAINT "FK_6088eafb92c1c850b263b9f481b" FOREIGN KEY ("ph_brandCode") REFERENCES "PH_CTL_Brands"("ph_code") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_ItemCategories" DROP CONSTRAINT "FK_6088eafb92c1c850b263b9f481b"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_ItemCategories" DROP CONSTRAINT "FK_727e5012d9454ba372f4756e858"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_CTL_ItemCategories"
        `);
  }
}
