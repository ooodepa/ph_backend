import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlItemEntity } from './ph_ctl_item.entity';
import { PhCtlSeoPageEntity } from '../../ph_ctl_seopages/entities/ph_ctl_seo-page.entity';

@Entity('PH_LST_ItemSEOPages')
export class PhLstItemSEOPageEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlItemEntity, (e: PhCtlItemEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_itemCode' })
  @Column({ type: 'uuid' })
  ph_itemCode: string;

  @ManyToOne(() => PhCtlSeoPageEntity, (e: PhCtlSeoPageEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_SEOPageCode' })
  @Column({ type: 'uuid' })
  ph_SEOPageCode: string;
}
