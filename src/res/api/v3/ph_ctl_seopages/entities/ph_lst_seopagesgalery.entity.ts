import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlSeopageEntity } from './ph_ctl_seopage.entity';

@Entity('PH_LST_SEOPagesGalery')
export class PhLstSeoPageGaleryEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlSeopageEntity, (e: PhCtlSeopageEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_SEOPageCode' })
  @Column({ type: 'uuid' })
  ph_SEOPageCode: string;

  @Column({ length: 2000 })
  ph_photoUrl: string;
}
