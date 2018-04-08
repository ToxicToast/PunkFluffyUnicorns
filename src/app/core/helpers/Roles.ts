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
    if (name === 'DragonMG') {
      return this.setCustomRole(`${OverwatchRoles.ROLE_SUPPORT}`);
    }
    if (name === 'nerdxchan' || name === 'Noobster') {
      return this.setCustomRole(`${OverwatchRoles.ROLE_TANK}`);
    }
    if (name === 'BeLoor' || name === 'Anti' || name === 'HanterGER') {
      return this.setCustomRole(`${OverwatchRoles.ROLE_FLEX}`);
    }
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
