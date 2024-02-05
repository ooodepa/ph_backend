import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlItemEntity } from './ph_ctl_item.entity';

@Entity('PH_LST_ItemGalery')
export class PhLstItemGaleryEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlItemEntity, (e: PhCtlItemEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_itemCode' })
  @Column({ type: 'uuid' })
  ph_itemCode: string;

  @Column({ length: 2000 })
  ph_photoUrl: string;
}
