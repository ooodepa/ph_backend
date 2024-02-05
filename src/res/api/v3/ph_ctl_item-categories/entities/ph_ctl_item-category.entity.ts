import {
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  Entity,
  OneToMany,
} from 'typeorm';

import { PhCtlBrandEntity } from '../../ph_ctl_brands/entities/ph_ctl_brand.entity';
import { PhLstItemCategoryGaleryEntity } from './ph_lst_item-category-galery.entity';
import { PhLstItemCategorySEOPageEntity } from './ph_lst_item-category-seo-pages.entity';

@Entity('PH_CTL_ItemCategories')
export class PhCtlItemCategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  ph_code: string;

  @Column({ length: 32 })
  ph_description: string;

  @ManyToOne(
    () => PhCtlItemCategoryEntity,
    (e: PhCtlItemCategoryEntity) => e.ph_code,
    {
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'ph_parentItemCategoryCode' })
  @Column('uuid')
  ph_parentItemCategoryCode: string;

  @ManyToOne(() => PhCtlBrandEntity, (e: PhCtlBrandEntity) => e.ph_code, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'ph_brandCode' })
  @Column('uuid')
  ph_brandCode: string;

  @OneToMany(
    () => PhLstItemCategoryGaleryEntity,
    (e: PhLstItemCategoryGaleryEntity) => e.ph_itemCategoryCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_lst_itemCategoryGalery: PhLstItemCategoryGaleryEntity[];

  @OneToMany(
    () => PhLstItemCategorySEOPageEntity,
    (e: PhLstItemCategorySEOPageEntity) => e.ph_itemCategoryCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_lst_itemCategorySEOPages: PhLstItemCategorySEOPageEntity[];
}
