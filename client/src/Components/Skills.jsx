import { skills } from '../static/constant';
const Skills = () => {
  console.log(skills);
  return (
    <section className="skills" id="skills">
      <h1>My Skills</h1>
      <div className="mySkills">
        {skills.map((s) => (
          <i key={s?.id} className={s?.skill}></i>
        ))}
      </div>
    </section>
  );
};

export default Skills;
