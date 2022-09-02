import {SkillSetItem} from './SkillSetItem';

export interface SkillSet {
  title: string;
  items: SkillSetItem[];
  asList: boolean;
}