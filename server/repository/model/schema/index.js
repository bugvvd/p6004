const ProjectSchema = require("./ProjectSchema");
const ManagementSchema = require("./ManagementSchema");
const UserSchema = require("./UserSchema");
// const TeamSchema = require('./TeamSchema')

module.exports.schemas = [
  { project: ProjectSchema },
  { management: ManagementSchema },
  { user: UserSchema },
  // { team: TeamSchema },
];
