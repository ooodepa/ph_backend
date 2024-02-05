import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhLstItemGaleryEntity } from './ph_lst_item-galery.entity';
import { PhLstItemSEOPageEntity } from './ph_lst_item-seo-page.entity';
import { PhLstItemCharacteristicEntity } from './ph_lst_item-characteristic.entity';
import { PhCtlItemCategoryEntity } from '../../ph_ctl_item-categories/entities/ph_ctl_item-category.entity';

@Entity('PH_CTL_Items')
export class PhCtlItemEntity {
  @PrimaryGeneratedColumn('uuid')
  ph_code: string;

  @Index('UNI_ctlItems_description', { unique: true })
  @Column({ length: 32 })
  ph_description: string;

  @ManyToOne(
    () => PhCtlItemCategoryEntity,
    (e: PhCtlItemCategoryEntity) => e.ph_code,
    {
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'ph_itemCategoryCode' })
  @Column({ type: 'uuid', nullable: true })
  ph_itemCategoryCode: string;

  @OneToMany(
    () => PhLstItemGaleryEntity,
    (e: PhLstItemGaleryEntity) => e.ph_itemCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_lst_itemCategoryGalery: PhLstItemGaleryEntity[];

  @OneToMany(
    () => PhLstItemSEOPageEntity,
    (e: PhLstItemSEOPageEntity) => e.ph_itemCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_lst_itemSEOPages: PhLstItemSEOPageEntity[];

  @OneToMany(
    () => PhLstItemCharacteristicEntity,
    (e: PhLstItemCharacteristicEntity) => e.ph_itemCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_lst_itemCharacteristics: PhLstItemCharacteristicEntity[];
}
