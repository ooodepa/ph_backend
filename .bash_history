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

yarn nest g res res/api/v3/PH_CTL_Languages --no-spec
yarn migr-gen src/migrations/PH_CTL_Languages

yarn nest g res res/api/v3/PH_CTL_ItemCharacteristics --no-spec
yarn migr-gen src/migrations/PH_CTL_ItemCharacteristics
yarn migr-gen src/migrations/PH_LST_ItemCharactTranslate

yarn nest g res res/api/v3/PH_CTL_SEOPages --no-spec
yarn migr-gen src/migrations/PH_CTL_SEOPages
yarn migr-gen src/migrations/PH_LST_SEOPageGalery
