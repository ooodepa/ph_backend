import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlBrandEntity } from './ph_ctl_brand.entity';

@Entity('PH_LST_BrandGalery')
export class PhLstBrandGaleryEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlBrandEntity, (e: PhCtlBrandEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_brandCode' })
  @Column({ type: 'uuid' })
  ph_brandCode: string;

  @Column({ length: 2000 })
  ph_photoUrl: string;
}
