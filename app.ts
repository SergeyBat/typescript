class User {
	skills: string[];
	addSkill(skill: string): void;
	addSkill(skills: string[]): void;
	addSkill(skillOrSkills: string | string[]) {
		if (typeof skillOrSkills === 'string') {
			this.skills.push(skillOrSkills)
		} else {
			this.skills.concat(skillOrSkills)
		}
	}
}

new User().addSkill("dev")