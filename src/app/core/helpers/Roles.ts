export enum OverwatchRoles {
  ROLE_FLEX = 'Flex',
  ROLE_OFFENSE = 'Offense',
  ROLE_DEFENSE = 'Defense',
  ROLE_SUPPORT = 'Support',
  ROLE_TANK = 'Tank',
  ROLE_DPS = 'DPS'
}

export class Roles {

  private role = null;
  private champions = [];

  constructor() { }

  setMainRole(name: string, champions: any): string {
    if (name === 'ToxicToast') {
      return this.setCustomRole(`${OverwatchRoles.ROLE_DPS}`);
    }
    /*if (name === 'BeLoor') {
      return `${OverwatchRoles.ROLE_DPS}`;
    }
    if (name === 'Anti') {
      return `${OverwatchRoles.ROLE_FLEX} - ${OverwatchRoles.ROLE_DPS}`;
    }*/
    //
    const roles = [];
    champions.forEach(champion => {
      if (champion.character_time > 0) {
        this.champions.push(champion.character_role);
      }
    });
    const set = new Set(this.champions.map(item => item));
    set.forEach(element => {
      roles.push(element);
    });
    /*if (set.size === 1) {
      const role = this.setRole(roles[0]);
      return `${role}`;
    } else if (set.size === 3) {
      return OverwatchRoles.ROLE_FLEX;
    } else if (set.size === 2) {
      const main = roles[0];
      const second = roles[1];
      console.log(main, second, name);
      if (
        (main === OverwatchRoles.ROLE_OFFENSE || main === OverwatchRoles.ROLE_DEFENSE)
        &&
        (second === OverwatchRoles.ROLE_OFFENSE || second === OverwatchRoles.ROLE_DEFENSE)) {
        return OverwatchRoles.ROLE_DPS;
      } else {
        const secondary = this.setRole(roles[0]);
        return `${OverwatchRoles.ROLE_FLEX} - ${secondary}`;
      }
    }*/
    // console.log(this.getRoleSet(set, roles));
    /*if (set.size > 1) {
      const secondary = this.setRole(roles[0]);
      return `${OverwatchRoles.ROLE_FLEX} - ${secondary}`;
    } else {
      const role = this.setRole(roles[0]);
      return `${role}`;
    }*/
    return this.getRoleSet(set, roles);
  }

  private setRole(role) {
    if (role === 'Offense' || role === 'Defense') {
      const secondary = OverwatchRoles.ROLE_DPS;
    }
    if (role === 'Tank') {
      const secondary = OverwatchRoles.ROLE_TANK;
    }
    if (role === 'Support') {
      const secondary = OverwatchRoles.ROLE_SUPPORT;
    }
    return role;
  }

  private getRoleSet(set, roles): string {
    if (set.size === 1) {
      const role = this.setRole(roles[0]);
      return `${role}`;
    } else {
      const mainRole = roles[0];
      const secondRole = roles[1];
      if (set.size === 2) {
        if (this.isDefenseOffense(mainRole, secondRole)) {
          return OverwatchRoles.ROLE_DPS;
        } else {
          return `${mainRole} - ${secondRole}`;
        }
      } else {
        return OverwatchRoles.ROLE_FLEX;
      }
    }
  }

  private setCustomRole(role) {
    return `<b>${role}</b>`;
  }

  private isDefenseOffense(mainRole: string, secondRole: string): boolean {
    return (
      (mainRole === OverwatchRoles.ROLE_OFFENSE && secondRole === OverwatchRoles.ROLE_DEFENSE) ||
      (secondRole === OverwatchRoles.ROLE_OFFENSE && mainRole === OverwatchRoles.ROLE_DEFENSE)
    );
  }
}
