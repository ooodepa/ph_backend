import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlBrandEntity } from './ph_ctl_brand.entity';
import { PhCtlSeoPageEntity } from '../../ph_ctl_seopages/entities/ph_ctl_seo-page.entity';

@Entity('PH_LST_BrandSEOPages')
export class PhLstBrandSEOPageEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlBrandEntity, (e: PhCtlBrandEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_brandCode' })
  @Column({ type: 'uuid' })
  ph_brandCode: string;

  @ManyToOne(() => PhCtlSeoPageEntity, (e: PhCtlSeoPageEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_SEOPageCode' })
  @Column({ type: 'uuid' })
  ph_SEOPageCode: string;
}
