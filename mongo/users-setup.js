use admin

db.createUser({
  user: "gdapiuser",
  pwd: "ICanAcce$$GdDb",
  roles: [
    { role: "dbOwner", db: "gd" }
  ]
})

db.createUser({
  user: "gdconnector",
  pwd: "IMAMachineWithAcce$$2GdDb",
  roles: [
    { role: "read", db: "gd" },
    { role: "read", db: "local" },
    { role: "dbOwner", db: "monstache" }
  ]
})
