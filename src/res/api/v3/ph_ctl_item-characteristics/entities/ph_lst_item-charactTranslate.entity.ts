import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhCtlItemCharacteristicEntity } from './ph_ctl_item-characteristic.entity';

@Entity('PH_LST_ItemCharactTranslate')
export class PhLstItemCharactTranslateEntity {
  @PrimaryGeneratedColumn()
  ph_id: number;

  @Column({ length: 32 })
  ph_description: string;

  @ManyToOne(
    () => PhCtlItemCharacteristicEntity,
    (e: PhCtlItemCharacteristicEntity) => e.ph_code,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_itemId' })
  @Column({ type: 'uuid' })
  ph_itemId: string;

  @ManyToOne(
    () => PhCtlItemCharacteristicEntity,
    (e: PhCtlItemCharacteristicEntity) => e.ph_code,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_languageCode' })
  @Column()
  ph_languageCode: number;

  @Column({ length: 64 })
  ph_translateName: string;
}
