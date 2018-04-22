export const registerUser = `mutation {
  registerMutation(username:"%USERNAME%",email:"%EMAIL%",password:"%PASSWORD%",player_role:"%PLAYERROLE%") {
    id
    username
    active
  }
}`;
