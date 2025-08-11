import { FC, memo, PropsWithChildren } from 'react';
import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';
import { Star } from 'lucide-react';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 5 } = skill;
  return (
    <div className="flex items-center justify-between px-2">
      {/* Left aligned skill name */}
      <span className="font-medium">{name}</span>

      {/* Right aligned stars */}
      <div className="flex gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < level ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}
          />
        ))}
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
