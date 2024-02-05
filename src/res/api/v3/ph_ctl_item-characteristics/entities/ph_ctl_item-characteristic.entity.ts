import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhLstItemCharactTranslateEntity } from './ph_lst_item-charactTranslate.entity';

@Entity('PH_CTL_ItemCharacteristics')
export class PhCtlItemCharacteristicEntity {
  @PrimaryGeneratedColumn('uuid')
  ph_code: string;

  @Column({ length: 32 })
  ph_description: string;

  @OneToMany(
    () => PhLstItemCharactTranslateEntity,
    (e: PhLstItemCharactTranslateEntity) => e.ph_itemId,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_lst_itemCharactTranslate: PhLstItemCharactTranslateEntity[];
}
