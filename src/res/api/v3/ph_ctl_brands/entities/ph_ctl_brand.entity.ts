import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhLstBrandGaleryEntity } from './ph_lst_brand-galery.entity';
import { PhLstBrandSEOPageEntity } from './ph_lst_brand-seo-pages.entity';

@Entity('PH_CTL_Brands')
export class PhCtlBrandEntity {
  @PrimaryGeneratedColumn('uuid')
  ph_code: string;

  @Column({ length: 32 })
  ph_description: string;

  @OneToMany(
    () => PhLstBrandGaleryEntity,
    (e: PhLstBrandGaleryEntity) => e.ph_brandCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_brandGalery: PhLstBrandGaleryEntity[];

  @OneToMany(
    () => PhLstBrandSEOPageEntity,
    (e: PhLstBrandSEOPageEntity) => e.ph_brandCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_brandSEOPages: PhLstBrandSEOPageEntity[];
}
