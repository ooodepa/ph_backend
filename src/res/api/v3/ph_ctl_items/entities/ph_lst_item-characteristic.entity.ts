import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhCtlItemEntity } from './ph_ctl_item.entity';
import { PhCtlItemCharacteristicEntity } from '../../ph_ctl_item-characteristics/entities/ph_ctl_item-characteristic.entity';

@Entity('PH_LST_ItemCharacteristics')
export class PhLstItemCharacteristicEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @ManyToOne(() => PhCtlItemEntity, (e: PhCtlItemEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_itemCode' })
  @Column({ type: 'uuid' })
  ph_itemCode: string;

  @ManyToOne(
    () => PhCtlItemCharacteristicEntity,
    (e: PhCtlItemCharacteristicEntity) => e.ph_code,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_itemCharacteristicCode' })
  @Column({ type: 'uuid' })
  ph_itemCharacteristicCode: string;
}
