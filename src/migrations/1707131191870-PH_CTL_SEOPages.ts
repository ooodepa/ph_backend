import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLSEOPages1707131191870 implements MigrationInterface {
    name = 'PHCTLSEOPages1707131191870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_SEOPages" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(512) NOT NULL,
                "ph_HTMLTitle" varchar(512) NOT NULL,
                "ph_HTMLDescription" varchar(1024) NOT NULL,
                "ph_HTMLKeywords" varchar(1024) NOT NULL,
                "ph_HTMLLang" varchar(8) NOT NULL,
                "ph_languageCode" integer NOT NULL,
                "ph_sitemapChangefreqCode" integer NOT NULL,
                "ph_sitemapPriority" float NOT NULL,
                "ph_sitemapLoc" varchar(2000) NOT NULL,
                "ph_sitemapLastmod" datetime NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLTitle" ON "PH_CTL_SEOPages" ("ph_HTMLTitle")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLDescription" ON "PH_CTL_SEOPages" ("ph_HTMLDescription")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_sitemapLoc" ON "PH_CTL_SEOPages" ("ph_sitemapLoc")
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_HTMLTitle"
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_HTMLDescription"
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_sitemapLoc"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_CTL_SEOPages" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(512) NOT NULL,
                "ph_HTMLTitle" varchar(512) NOT NULL,
                "ph_HTMLDescription" varchar(1024) NOT NULL,
                "ph_HTMLKeywords" varchar(1024) NOT NULL,
                "ph_HTMLLang" varchar(8) NOT NULL,
                "ph_languageCode" integer NOT NULL,
                "ph_sitemapChangefreqCode" integer NOT NULL,
                "ph_sitemapPriority" float NOT NULL,
                "ph_sitemapLoc" varchar(2000) NOT NULL,
                "ph_sitemapLastmod" datetime NOT NULL,
                CONSTRAINT "FK_efef72b98b4bd128dade9407091" FOREIGN KEY ("ph_languageCode") REFERENCES "PH_CTL_Languages" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_95db32a3dd24a6aef09aa48782c" FOREIGN KEY ("ph_sitemapChangefreqCode") REFERENCES "PH_CTL_SitemapChangefreq" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_CTL_SEOPages"(
                    "ph_code",
                    "ph_description",
                    "ph_HTMLTitle",
                    "ph_HTMLDescription",
                    "ph_HTMLKeywords",
                    "ph_HTMLLang",
                    "ph_languageCode",
                    "ph_sitemapChangefreqCode",
                    "ph_sitemapPriority",
                    "ph_sitemapLoc",
                    "ph_sitemapLastmod"
                )
            SELECT "ph_code",
                "ph_description",
                "ph_HTMLTitle",
                "ph_HTMLDescription",
                "ph_HTMLKeywords",
                "ph_HTMLLang",
                "ph_languageCode",
                "ph_sitemapChangefreqCode",
                "ph_sitemapPriority",
                "ph_sitemapLoc",
                "ph_sitemapLastmod"
            FROM "PH_CTL_SEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_CTL_SEOPages"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_CTL_SEOPages"
                RENAME TO "PH_CTL_SEOPages"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLTitle" ON "PH_CTL_SEOPages" ("ph_HTMLTitle")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLDescription" ON "PH_CTL_SEOPages" ("ph_HTMLDescription")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_sitemapLoc" ON "PH_CTL_SEOPages" ("ph_sitemapLoc")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_sitemapLoc"
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_HTMLDescription"
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_HTMLTitle"
        `);
        await queryRunner.query(`
            ALTER TABLE "PH_CTL_SEOPages"
                RENAME TO "temporary_PH_CTL_SEOPages"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_CTL_SEOPages" (
                "ph_code" varchar PRIMARY KEY NOT NULL,
                "ph_description" varchar(512) NOT NULL,
                "ph_HTMLTitle" varchar(512) NOT NULL,
                "ph_HTMLDescription" varchar(1024) NOT NULL,
                "ph_HTMLKeywords" varchar(1024) NOT NULL,
                "ph_HTMLLang" varchar(8) NOT NULL,
                "ph_languageCode" integer NOT NULL,
                "ph_sitemapChangefreqCode" integer NOT NULL,
                "ph_sitemapPriority" float NOT NULL,
                "ph_sitemapLoc" varchar(2000) NOT NULL,
                "ph_sitemapLastmod" datetime NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_CTL_SEOPages"(
                    "ph_code",
                    "ph_description",
                    "ph_HTMLTitle",
                    "ph_HTMLDescription",
                    "ph_HTMLKeywords",
                    "ph_HTMLLang",
                    "ph_languageCode",
                    "ph_sitemapChangefreqCode",
                    "ph_sitemapPriority",
                    "ph_sitemapLoc",
                    "ph_sitemapLastmod"
                )
            SELECT "ph_code",
                "ph_description",
                "ph_HTMLTitle",
                "ph_HTMLDescription",
                "ph_HTMLKeywords",
                "ph_HTMLLang",
                "ph_languageCode",
                "ph_sitemapChangefreqCode",
                "ph_sitemapPriority",
                "ph_sitemapLoc",
                "ph_sitemapLastmod"
            FROM "temporary_PH_CTL_SEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_CTL_SEOPages"
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_sitemapLoc" ON "PH_CTL_SEOPages" ("ph_sitemapLoc")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLDescription" ON "PH_CTL_SEOPages" ("ph_HTMLDescription")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLTitle" ON "PH_CTL_SEOPages" ("ph_HTMLTitle")
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_sitemapLoc"
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_HTMLDescription"
        `);
        await queryRunner.query(`
            DROP INDEX "UNI_ctlSEOPages_HTMLTitle"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_CTL_SEOPages"
        `);
    }

}
