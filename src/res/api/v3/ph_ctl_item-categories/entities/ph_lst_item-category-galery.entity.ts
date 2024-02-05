import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlItemCategoryEntity } from './ph_ctl_item-category.entity';

@Entity('PH_LST_ItemCategoryGalery')
export class PhLstItemCategoryGaleryEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(
    () => PhCtlItemCategoryEntity,
    (e: PhCtlItemCategoryEntity) => e.ph_code,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_itemCategoryCode' })
  @Column({ type: 'uuid' })
  ph_itemCategoryCode: string;

  @Column({ length: 2000 })
  ph_photoUrl: string;
}
