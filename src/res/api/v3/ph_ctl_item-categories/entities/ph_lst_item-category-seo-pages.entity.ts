import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlItemCategoryEntity } from './ph_ctl_item-category.entity';
import { PhCtlSeoPageEntity } from '../../ph_ctl_seopages/entities/ph_ctl_seo-page.entity';

@Entity('PH_LST_ItemCategorySEOPages')
export class PhLstItemCategorySEOPageEntity {
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

  @ManyToOne(() => PhCtlSeoPageEntity, (e: PhCtlSeoPageEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_SEOPageCode' })
  @Column({ type: 'uuid' })
  ph_SEOPageCode: string;
}
