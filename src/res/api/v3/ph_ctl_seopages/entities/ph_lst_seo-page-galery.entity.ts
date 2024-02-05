import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlSeoPageEntity } from './ph_ctl_seo-page.entity';

@Entity('PH_LST_SEOPageGalery')
export class PhLstSeoPageGaleryEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlSeoPageEntity, (e: PhCtlSeoPageEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_SEOPageCode' })
  @Column({ type: 'uuid' })
  ph_SEOPageCode: string;

  @Column({ length: 2000 })
  ph_photoUrl: string;
}
