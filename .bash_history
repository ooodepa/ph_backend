npx @nestjs/cli new ph_backend_v3 --directory ./ --package-manager yarn --language TypeScript

yarn add -D webpack@^5.0.0

yarn add @nestjs/config

yarn add @nestjs/swagger
yarn add swagger-ui-express
yarn add -D express@^4.0.0

yarn add pg
yarn add @nestjs/typeorm
yarn add typeorm

yarn add class-validator
yarn add class-transformer

yarn add uuid

yarn add dotenv

yarn nest g res res/api/v3/PH_CTL_SitemapChangefreq --no-spec
yarn migr-gen src/migrations/PH_CTL_SitemapChangefreq
yarn migr-run

yarn nest g res res/api/v3/PH_CTL_Languages --no-spec
yarn migr-gen src/migrations/PH_CTL_Languages
yarn migr-run

yarn nest g res res/api/v3/PH_CTL_ItemCharacteristics --no-spec
yarn migr-gen src/migrations/PH_CTL_ItemCharacteristics
yarn migr-run
yarn migr-gen src/migrations/PH_LST_ItemCharactTranslate
yarn migr-run

yarn nest g res res/api/v3/PH_CTL_SEOPages --no-spec
yarn migr-gen src/migrations/PH_CTL_SEOPages
yarn migr-run
yarn migr-gen src/migrations/PH_LST_SEOPageGalery
yarn migr-run

yarn nest g res res/api/v3/PH_CTL_Brands --no-spec
yarn migr-gen src/migrations/PH_CTL_Brands
yarn migr-run
yarn migr-gen src/migrations/PH_LST_BrandGalery
yarn migr-run
yarn migr-gen src/migrations/PH_LST_BrandSEOPages
yarn migr-run

yarn nest g res res/api/v3/PH_CTL_ItemCategories --no-spec
yarn migr-gen src/migrations/PH_CTL_ItemCategories
yarn migr-run
yarn migr-gen src/migrations/PH_CTL_ItemCategoryGalery
yarn migr-run
yarn migr-gen src/migrations/PH_LST_ItemCategorySEOPages
yarn migr-run

yarn nest g res res/api/v3/PH_CTL_Items --no-spec
yarn migr-gen src/migrations/PH_CTL_Items
yarn migr-run
yarn migr-gen src/migrations/PH_LST_ItemGalery
yarn migr-run
yarn migr-gen src/migrations/PH_LST_ItemSEOPages
yarn migr-run
yarn migr-gen src/migrations/PH_LST_ItemCharacteristics
yarn migr-run
