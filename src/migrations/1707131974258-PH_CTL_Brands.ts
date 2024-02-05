import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLBrands1707131974258 implements MigrationInterface {
    name = 'PHCTLBrands1707131974258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_Brands" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(32) NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "PH_CTL_Brands"
        `);
    }

}
